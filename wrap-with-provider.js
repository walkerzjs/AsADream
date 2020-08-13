import React, { useState, useEffect } from "react"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore } from "redux"
import storage from "local-storage-fallback"
import reducers from "./store/reducers/index"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./src/utils/globalStyle"

// eslint-disable-next-line react/display-name,react/prop-types
const WrapWithProvider = ({ element }) => {
  const [theme, setTheme] = useState({ mode: "light" })
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const initialState = {}

  useEffect(() => {
    const savedTheme = storage.getItem("theme")
    setTheme(savedTheme ? JSON.parse(savedTheme) : { mode: "light" })
  }, [])

  useEffect(() => {
    function setCSSVar(property, color) {
      document.documentElement.style.setProperty(property, color)
    }

    const light = {
      "--white": "#ffffff",
      "--grey-1": "#e5e5e5",
      "--black": "#000000",
      "--grey-4": "#f9f9f9",
      "--red-origin": "red",
      "--blue-2": "#2376dd",
    }
    storage.setItem("theme", JSON.stringify(theme))
    for (let key in light) {
      setCSSVar(key, light[key])
    }
  }, [theme])

  const store =
    process.env.NODE_ENV === "production"
      ? createStore(reducers, initialState)
      : createStore(reducers, initialState, composeWithDevTools())
  return (
    <ThemeProvider theme={{ mode: theme.mode, setTheme: setTheme }}>
      <GlobalStyle />
      <Provider store={store}>{element}</Provider>
    </ThemeProvider>
  )
}

const Wrapper = ({ element }) => {
  return <WrapWithProvider element={element} />
}

export default Wrapper
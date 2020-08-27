import React, { useState, useEffect } from "react"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore } from "redux"
import storage from "local-storage-fallback"
import reducers from "./store/reducers/index"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./src/utils/globalStyle"

const WrapWithProvider = ({ element }) => {
  const [theme, setTheme] = useState({ mode: "light" })
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

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

  return (
    <ThemeProvider theme={{ mode: theme.mode, setTheme: setTheme }}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}

const Wrapper = ({ element }) => {
  const initialState = {}
  const store =
    process.env.NODE_ENV === "production"
      ? createStore(reducers, initialState)
      : createStore(reducers, initialState, composeWithDevTools())
  return (
    <Provider store={store}>
      <WrapWithProvider element={element} />
    </Provider>
  )
}

export default Wrapper

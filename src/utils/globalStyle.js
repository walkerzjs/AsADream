import { createGlobalStyle } from "styled-components"
import theme from "styled-theming"
const backgroundColor = theme("mode", {
  light: "var(--grey-4)",
  dark: "var(--black)",
})

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
})

const textColor2 = theme("mode", {
  light: "hsla(0,0%,0%,0.59)",
  dark: "var(--white)",
})

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${backgroundColor};
    color: ${textColor};
  }
  blockquote{
    color: ${textColor2};
    border-color: ${textColor};
  }

  #___gatsby{
      height: 100vh;
  }

`

export default GlobalStyle

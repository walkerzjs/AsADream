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

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${backgroundColor};
    color: ${textColor};
  }
  blockquote{
    color: ${textColor};
    border-color: ${textColor};
  }

`

export default GlobalStyle

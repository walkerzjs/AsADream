import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import "./layout.css"
import styled from "styled-components"
import HeaderNav from "../components/Header/Header"
import theme from "styled-theming"
const backgroundColor = theme("mode", {
  light: "var(--grey-4)",
  dark: "var(--grey-5)",
})

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
})

const Container = styled.div`
  width: 100%;

  background-color: ${backgroundColor};

  transition: all 0.2s ease-out;
  color: ${textColor};
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    //header to change to navbar
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),

          marginTop: 0,
          width: "100%",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,

            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Container>
      <header>
        <HeaderNav />
      </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: "70px",
          // maxWidth: rhythm(24),
          fontFamily: `Noto Sans, sans-serif`,
          maxWidth: "1366px",
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Container>
  )
}

export default Layout

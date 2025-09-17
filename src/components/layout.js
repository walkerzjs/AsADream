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
position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  /* padding: ${rhythm(1.5)} ${rhythm(3 / 4)}; */
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

          // maxWidth: rhythm(24),
          fontFamily: `Noto Sans, sans-serif`,
          maxWidth: "768px",
          padding: `${rhythm(1.5)} 30px`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            position: "absolute",
            bottom: "20px",
            margin: "auto",
          }}
        >
          {new Date().getFullYear()}, By{" "}
          <a
            href="https://www.jacob-portfolio.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Junshuai Zhang (Jacob)
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/junshuai-zhang-55774594/"
            target="__blank"
          >
            LinkedIn
          </a>
          &nbsp;&nbsp;
          <a
            href="https://github.com/walkerzjs"
            target="__blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </Container>
  )
}

export default Layout

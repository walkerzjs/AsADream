import React from "react"
import styled from "styled-components"
import theme from "styled-theming"
import { Link } from "gatsby"

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
})
// appl

const NavLink_ = styled.li`
  list-style: none;

  /* width: 92px; */
  /* height: 2rem; */
  & a {
    font-size: 20px;
    /* letter-spacing: var(--unnamed-character-spacing-0); */
    /* color: var(--black); */
    color: ${textColor};
    text-decoration: none;
    box-shadow: none;
    transition: all 0.2s ease-out;
    @media (max-width: 1450px) {
      font-size: 17.8px;
    }
  }

  cursor: pointer;

  /* text-decoration: none; */

  opacity: 1;
  @media (max-width: 166px) {
    font-size: 14px;
  }
`
const SharedNavButton = props => {
  return (
    <NavLink_ aria-label={`link to ${props.label} section`}>
      <Link to={`${props.id}`}>{props.label}</Link>
    </NavLink_>
  )
}

export default SharedNavButton

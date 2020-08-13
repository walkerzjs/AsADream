import React from "react"
import SharedNavItem from "../SharedNavItem"
import ThemeToggle from "./ThemeToggle"
import styled from "styled-components"

const NavItems_ = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-right: 9.3vw;
  width: 344px;
  & li {
    margin: 0;
  }

  @media (max-width: 672px) {
    display: none;
  }
`

const NavItems = props => {
  return (
    <NavItems_>
      <SharedNavItem
        ariaLabel="navigate to Junshuai's portfolio"
        id="https://my-portfoliojsz.com/"
        label="Portfolio"
      />
      <SharedNavItem id="projects" label="Projects" />
      <SharedNavItem id="contact" label="Contact" />

      <ThemeToggle />
    </NavItems_>
  )
}

export default NavItems

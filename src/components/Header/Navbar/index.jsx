import React from "react"
import NameLogo from "./Content/Items/NameLogo"
import NavItems from "./Content/Items/NavItems"
import SidebarToggle from "./Content/SidebarToggle"
import styled from "styled-components"
import theme from "styled-theming"

const backgroundColor = theme("mode", {
  light: "var(--white)",
  dark: "var(--black)",
})

const borderBottom = theme("mode", {
  light: "2px solid var(--grey-1)",
  dark: "2px solid var(--black)",
})

export const Nav = styled.nav`
  z-index: 1100;
  position: fixed;
  backface-visibility: hidden;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  background-color: ${backgroundColor};
  /* background-color: white; */
  border-bottom: ${borderBottom};
  /* opacity: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease-out, border-bottom 0.2s ease-out;
`
const Navbar = props => {
  return (
    <Nav aria-label="Navigation bar">
      <NameLogo />

      <NavItems />

      <SidebarToggle />
    </Nav>
  )
}

export default Navbar

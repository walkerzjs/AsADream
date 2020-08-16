import React from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import theme from "styled-theming"
import ThemeToggle from "./ThemeToggle"
const backgroundColor = theme("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)",
})

const MenuList_ = styled.ul`
  margin: 0;
  list-style: none;
  flex: 1;
  background-color: ${backgroundColor};
  padding: 20px;
  padding-top: 30px;
  transition: all 0.2s ease-out;
`

const MenuList = props => {
  return (
    <MenuList_>
      <MenuItem
        id="https://my-portfoliojsz.com"
        label="My Portfolio"
        type="external"
      />
      <MenuItem id="walkerzjs2@gmail.com" label="Send Me Email" type="email" />
      <ThemeToggle />
    </MenuList_>
  )
}

export default MenuList

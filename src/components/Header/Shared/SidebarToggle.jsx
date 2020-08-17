import React from "react"
import styled from "styled-components"
import theme from "styled-theming"

const color = theme("mode", {
  light: "invert(0)",
  dark: "invert(1)",
})
const SidebarToggle_ = styled.button`
  background: none;
  border: none;
  margin-right: 17.6px;
  display: flex;
  align-items: center;
  img {
    margin: 0;
    display: block;
    width: 35px;
    height: 35px;
    filter: ${color};
    transition: all 0.2s ease-out;
  }

  cursor: pointer;
`

const SidebarToggle = props => {
  return (
    <SidebarToggle_ className="SidebarToggle" aria-label={props.ariaLabel}>
      <img src="/navMenuToggle.svg" alt="Sidebar menu toggle" />
    </SidebarToggle_>
  )
}

export default SidebarToggle

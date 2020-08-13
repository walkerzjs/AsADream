import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import theme from "styled-theming"

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
})
const MenuItem_ = styled.li`
  margin: 0;
  & a {
    font-size: 18px;
    box-shadow: none;
    height: 44px;
    width: 100%;
    padding-left: 10%;
    text-decoration: none;
    color: ${textColor};
    display: block;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-out;
  }

  cursor: pointer;
`

const MenuItem = props => {
  return (
    <MenuItem_>
      <AnchorLink
        offset="62"
        href={`#${props.sectionId}`}
        aria-label={`Click to ${props.sectionName} section`}
      >
        {props.sectionName}
      </AnchorLink>
    </MenuItem_>
  )
}

export default MenuItem

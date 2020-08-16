import React from "react"
import styled from "styled-components"
import SharedNavItem from "../SharedNavItem"

const NameLogo_ = styled.ul`
  margin: 0;
  margin-left: 9.3vw;
  & li {
    margin: 0;
  }
  @media (max-width: 672px) {
    margin-left: 2rem;
  }
`

const NameLogo = props => {
  return (
    <NameLogo_>
      <SharedNavItem
        id="/"
        label="AsADream"
        ariaLabel="navigate to home page"
      />
    </NameLogo_>
  )
}

export default NameLogo

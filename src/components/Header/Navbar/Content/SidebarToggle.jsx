import React from "react"
import styled from "styled-components"
import SidebarToggle from "../../Shared/SidebarToggle"
import { useDispatch } from "react-redux"
import { toggleSideDrawer } from "../../../../../store/actions/sidebarActions"

const SidebarToggle_ = styled.div`
  @media (min-width: 673px) {
    display: none;
  }
`

const SidebarToggleNav = props => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(toggleSideDrawer())
  }
  return (
    <SidebarToggle_ onClick={onClick}>
      <SidebarToggle ariaLabel="Toggle side drawer" />
    </SidebarToggle_>
  )
}

export default SidebarToggleNav

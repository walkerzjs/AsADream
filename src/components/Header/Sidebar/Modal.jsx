import React from "react"
import Modal from "../Shared/Modal"
import { useSelector, useDispatch } from "react-redux"
import { toggleSideDrawer } from "../../../../store/actions/sidebarActions"

const Modal_Sidebar = props => {
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //   });
  const isOpen = useSelector(state => state.sidebarReducer.isOpen)
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(toggleSideDrawer())
  }
  return <Modal onClick={onClick} isOpen={isOpen} ariaLabel="Sidebar Modal" />
}
export default Modal_Sidebar

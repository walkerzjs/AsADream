import React from "react"
import Navbar from "./Navbar"
// import Sidebar from "./Sidebar/Index";
import Sidebar from "./Sidebar/SideMenu/Index"
import Modal from "./Sidebar/Modal"

const Layout = props => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      {/* <main>{props.children}</main> */}
      <Modal />
    </div>
  )
}

export default Layout

import React from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu/Index";
import Modal from "./Modal";
// import { useSelector, useDispatch } from "react-redux";

const Sidebar_ = styled.div``;

const Sidebar = (props) => {
  // const isOpen = useSelector((state) => state.sidebarReducer.isOpen);
  console.error(
    "This integration is not used, use sideMenu as sidebar and modal sepeartely instead."
  );
  return (
    <Sidebar_ aria-label="Sidebar Container">
      <SideMenu />
      <Modal />
    </Sidebar_>
  );
};

export default Sidebar;

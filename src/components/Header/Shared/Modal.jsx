import React from "react";
import styled from "styled-components";

const Modal_ = styled.div`
  position: fixed;
  z-index: 1100;
  width: 100vw;
  /* height: 100vh; */

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--black);
  opacity: 0.5;
  transition: opacity 0.2s ease;
  transform: ${(props) =>
    props.isOpen ? "translateZ(0)" : "translateZ(-100px)"};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "0.5" : "0")};
`;

const Modal = (props) => {
  return (
    <Modal_
      onClick={() => props.onClick()}
      isOpen={props.isOpen}
      aria-label={props.ariaLabel}
    />
  );
};
export default Modal;

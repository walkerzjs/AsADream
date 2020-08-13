import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)",
});

const Header_ = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: ${backgroundColor};
  transition: all 0.2s ease-out;
`;

const Header = (props) => {
  return (
    <Header_>
      <Toggle />
    </Header_>
  );
};

export default Header;

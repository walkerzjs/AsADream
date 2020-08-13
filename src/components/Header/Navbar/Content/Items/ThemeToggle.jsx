import React, { useContext, useEffect, useState } from "react"
import styled, { ThemeContext } from "styled-components"

// https://www.w3schools.com/howto/howto_css_switch.asp
const ThemeToggleC = styled.li`
  list-style: none;
  /* The switch - the box around the slider */
  label {
    position: relative;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    width: 60px;
    height: 30px;
    background-color: transparent;
  }

  /* margin-left: 40vw; */

  /* The slider the rounded rectangle*/
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #ccc; */
    background-color: var(--grey-5);
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider {
    background-color: #43bdf5;
  }

  input:focus + .slider {
    /* box-shadow: 0 0 1px #43bdf5; */
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(28px);
    -ms-transform: translateX(28px);
    transform: translateX(28px);
  }
  p {
    width: 0;
    height: 0;
    opacity: 0;
  }
`

const ThemeToggle = props => {
  const theme = useContext(ThemeContext)

  const onChange = () => {
    theme.setTheme({ mode: theme.mode === "light" ? "dark" : "light" })
  }

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  let content = <li style={{ listStyle: "none", width: "60px" }}></li>
  if (isMounted) {
    content = (
      <ThemeToggleC>
        <label>
          <input
            aria-label="Press Space key to toggle the theme"
            type="checkbox"
            onChange={onChange}
            checked={theme.mode === "light" ? true : false}
          />

          <span className="slider round"></span>
        </label>
      </ThemeToggleC>
    )
  }

  return content
}

export default ThemeToggle

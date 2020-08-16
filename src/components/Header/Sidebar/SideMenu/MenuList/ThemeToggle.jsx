import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

// https://www.w3schools.com/howto/howto_css_switch.asp
const ThemeToggleC = styled.label`
  /* The switch - the box around the slider */
  /* change tap focus highlight color from blue to transparent*/
  -webkit-tap-highlight-color: transparent;
  position: relative;
  display: block;
  margin-left: 10%;
  margin-top: 15px;
  width: 60px;
  height: 30px;
  /* background-color: transparent; */
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
    background-color: var(--grey-3);
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
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
    window.__theme = theme.mode === "light" ? "dark" : "light"
  }

  const isChecked = () => {
    if (typeof window !== "undefined") {
      let result = window.__theme === "light" ? true : false
      return result
    } else {
      return true
    }
  }

  // useEffect(() => {
  //   console.log("theme: ", theme)
  //   console.log("re render")
  // })

  let content = <div style={{ width: "60px" }}></div>
  // let content = null
  if (typeof window !== "undefined" && window.__theme) {
    content = (
      <ThemeToggleC>
        <label>
          <input
            aria-label="Click to change theme"
            type="checkbox"
            onChange={onChange}
            checked={isChecked()}
          />

          <span className="slider round"></span>
        </label>
      </ThemeToggleC>
    )
  }

  return content
}

export default ThemeToggle

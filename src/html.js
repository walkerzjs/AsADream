import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                var currentTheme;
              
                function changeTheme(inputTheme) {
                  
                  if (JSON.parse(inputTheme).mode === "dark") {
                
                    const theme = themeConfig.dark;
                    for (let key in theme) {
                      setCSSVar(key, theme[key]);
                    }
                    localStorage.setItem("theme", inputTheme);
                  } else {
                    const theme = themeConfig.light;
                    for (let key in theme) {
                      setCSSVar(key, theme[key]);
                    }
                    localStorage.setItem("theme", inputTheme);
                  }
                }
              
                function setCSSVar(property, color) {
                  document.documentElement.style.setProperty(property, color);
                }
                try {
                  currentTheme = localStorage.getItem("theme") || { mode: "light" };
                  window.__theme = currentTheme.mode;
                  var themeConfig = {
                    dark: {
                      "--white": "#000000",
                      "--grey-1": "#000000",
                      "--black": "#ffffff",
                      "--grey-4": "#2e2e2e",
                      "--red-origin": "#ff5f57",
                      "--blue-2": "#2e2e2e",
                    },
                  };
              
                  changeTheme(currentTheme);
                } catch (err) {
                  console.log(new Error("accessing theme has been denied"));
                }
              })();
          `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

exports.id = "component---src-pages-using-typescript-tsx";
exports.ids = ["component---src-pages-using-typescript-tsx"];
exports.modules = {

/***/ "./public/page-data/sq/d/2841359383.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2841359383.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"AsADream","description":"A starter blog demonstrating what Gatsby can do.","social":{"twitter":"walkerzjs"}}}}}');

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Header/Navbar/index.jsx");
/* harmony import */ var _Sidebar_SideMenu_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar/SideMenu/Index */ "./src/components/Header/Sidebar/SideMenu/Index.jsx");
/* harmony import */ var _Sidebar_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar/Modal */ "./src/components/Header/Sidebar/Modal.jsx");


// import Sidebar from "./Sidebar/Index";


const Layout = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar_SideMenu_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/Items/NameLogo.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/Items/NameLogo.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _SharedNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SharedNavItem */ "./src/components/Header/Navbar/Content/SharedNavItem.jsx");



const NameLogo_ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "NameLogo__NameLogo_"
})(["margin:0;margin-left:9.3vw;& li{margin:0;}@media (max-width:672px){margin-left:17.6px;}"]);
const NameLogo = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NameLogo_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SharedNavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "/",
    label: "AsADream",
    ariaLabel: "navigate to home page"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameLogo);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/Items/NavItems.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/Items/NavItems.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SharedNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SharedNavItem */ "./src/components/Header/Navbar/Content/SharedNavItem.jsx");
/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeToggle */ "./src/components/Header/Navbar/Content/Items/ThemeToggle.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");




const NavItems_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "NavItems__NavItems_"
})(["display:flex;align-items:center;margin:0;margin-right:9.3vw;& li{margin:0;}@media (max-width:672px){display:none;}"]);
const NavItems = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavItems_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SharedNavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "navigate to Junshuai's portfolio",
    id: "https://master.dj3cz2uxgebt1.amplifyapp.com/",
    label: "MyPortfolio",
    type: "external"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SharedNavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "junshuai.jacob.zhang@gmail.com",
    label: "SendMeEmail",
    type: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeToggle__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItems);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/Items/ThemeToggle.jsx":
/*!********************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/Items/ThemeToggle.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



// https://www.w3schools.com/howto/howto_css_switch.asp
const ThemeToggleC = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "ThemeToggle__ThemeToggleC"
})(["list-style:none;height:30px;label{position:relative;-webkit-tap-highlight-color:transparent;display:inline-block;width:60px;height:30px;background-color:transparent;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey-5);-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.slider:before{position:absolute;content:\"\";height:24px;width:24px;left:4px;bottom:3px;background-color:white;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.slider.round{border-radius:30px;}.slider.round:before{border-radius:50%;}& input{opacity:0;width:0;height:0;}input:checked + .slider{background-color:#43bdf5;}input:focus + .slider{}input:checked + .slider:before{-webkit-transform:translateX(28px);-ms-transform:translateX(28px);transform:translateX(28px);}p{width:0;height:0;opacity:0;}"]);
const ThemeToggle = () => {
  const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  const onChange = () => {
    theme.setTheme({
      mode: theme.mode === "light" ? "dark" : "light"
    });
    window.__theme = theme.mode === "light" ? "dark" : "light";
  };
  const isChecked = () => {
    if (typeof window !== "undefined") {
      let result = window.__theme === "light" ? true : false;
      return result;
    } else {
      return true;
    }
  };

  // useEffect(() => {
  //   console.log("theme: ", theme)
  //   console.log("re render")
  // })

  let content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "60px"
    }
  });
  // let content = null
  if (typeof window !== "undefined" && window.__theme) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeToggleC, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      "aria-label": "Press Space key to toggle the theme",
      type: "checkbox",
      onChange: onChange,
      checked: isChecked()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "slider round"
    })));
  }
  return content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/SharedNavItem.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/SharedNavItem.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




const textColor = styled_theming__WEBPACK_IMPORTED_MODULE_1___default()("mode", {
  light: "var(--black)",
  dark: "var(--white)"
});
// appl

const NavLink_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "SharedNavItem__NavLink_"
})(["list-style:none;margin-right:20px !important;& a{font-size:20px;color:", ";text-decoration:none;box-shadow:none;transition:all 0.2s ease-out;@media (max-width:1450px){font-size:17.8px;}}cursor:pointer;opacity:1;@media (max-width:166px){font-size:14px;}"], textColor);
const SharedNavButton = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavLink_, {
    "aria-label": `link to ${props.label} section`
  }, (() => {
    switch (props.type) {
      case "external":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: props.id,
          rel: "noopener noreferrer"
        }, props.label);
      case "email":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: `mailto:${props.id}`,
          rel: "noopener noreferrer"
        }, props.label);
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: `${props.id}`
        }, props.label);
    }
  })());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedNavButton);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/SidebarToggle.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/SidebarToggle.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/SidebarToggle */ "./src/components/Header/Shared/SidebarToggle.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/actions/sidebarActions */ "./store/actions/sidebarActions.js");





const SidebarToggle_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "SidebarToggle__SidebarToggle_"
})(["@media (min-width:673px){display:none;}"]);
const SidebarToggleNav = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const onClick = () => {
    dispatch((0,_store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__.toggleSideDrawer)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SidebarToggle_, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "Toggle side drawer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarToggleNav);

/***/ }),

/***/ "./src/components/Header/Navbar/index.jsx":
/*!************************************************!*\
  !*** ./src/components/Header/Navbar/index.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_Items_NameLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content/Items/NameLogo */ "./src/components/Header/Navbar/Content/Items/NameLogo.jsx");
/* harmony import */ var _Content_Items_NavItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content/Items/NavItems */ "./src/components/Header/Navbar/Content/Items/NavItems.jsx");
/* harmony import */ var _Content_SidebarToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content/SidebarToggle */ "./src/components/Header/Navbar/Content/SidebarToggle.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_4__);






const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_4___default()("mode", {
  light: "var(--white)",
  dark: "var(--black)"
});
const borderBottom = styled_theming__WEBPACK_IMPORTED_MODULE_4___default()("mode", {
  light: "2px solid var(--grey-1)",
  dark: "2px solid var(--black)"
});
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav.withConfig({
  displayName: "Navbar__Nav"
})(["z-index:1100;position:fixed;backface-visibility:hidden;top:0px;left:0px;width:100%;height:70px;background-color:", ";border-bottom:", ";display:flex;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-out,border-bottom 0.2s ease-out;"], backgroundColor, borderBottom);
const Navbar = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Nav, {
    "aria-label": "Navigation bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_Items_NameLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_Items_NavItems__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_SidebarToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Header/Shared/Modal.jsx":
/*!************************************************!*\
  !*** ./src/components/Header/Shared/Modal.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Modal_ = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Modal__Modal_"
})(["position:fixed;z-index:1100;width:100vw;left:0;top:0;right:0;bottom:0;background:var(--black);opacity:0.5;transition:opacity 0.2s ease;transform:", ";visibility:", ";opacity:", ";"], props => props.isOpen ? "translateZ(0)" : "translateZ(-100px)", props => props.isOpen ? "visible" : "hidden", props => props.isOpen ? "0.5" : "0");
const Modal = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Modal_, {
    onClick: () => props.onClick(),
    isOpen: props.isOpen,
    "aria-label": props.ariaLabel
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/Header/Shared/SidebarToggle.jsx":
/*!********************************************************!*\
  !*** ./src/components/Header/Shared/SidebarToggle.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_1__);



const color = styled_theming__WEBPACK_IMPORTED_MODULE_1___default()("mode", {
  light: "invert(0)",
  dark: "invert(1)"
});
const SidebarToggle_ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "SidebarToggle__SidebarToggle_"
})(["background:none;border:none;margin-right:17.6px;display:flex;align-items:center;img{margin:0;display:block;width:35px;height:35px;filter:", ";transition:all 0.2s ease-out;}cursor:pointer;"], color);
const SidebarToggle = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SidebarToggle_, {
    className: "SidebarToggle",
    "aria-label": props.ariaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/navMenuToggle.svg",
    alt: "Sidebar menu toggle"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarToggle);

/***/ }),

/***/ "./src/components/Header/Sidebar/Modal.jsx":
/*!*************************************************!*\
  !*** ./src/components/Header/Sidebar/Modal.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Modal */ "./src/components/Header/Shared/Modal.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/actions/sidebarActions */ "./store/actions/sidebarActions.js");




const Modal_Sidebar = props => {
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //   });
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.sidebarReducer.isOpen);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClick = () => {
    dispatch((0,_store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__.toggleSideDrawer)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: onClick,
    isOpen: isOpen,
    ariaLabel: "Sidebar Modal"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal_Sidebar);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/Header/Index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/Header/Index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle */ "./src/components/Header/Sidebar/SideMenu/Header/Toggle.jsx");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_2__);




const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_2___default()("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)"
});
const Header_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Index__Header_"
})(["height:70px;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;background-color:", ";transition:all 0.2s ease-out;"], backgroundColor);
const Header = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Toggle__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/Header/Toggle.jsx":
/*!******************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/Header/Toggle.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/SidebarToggle */ "./src/components/Header/Shared/SidebarToggle.jsx");
/* harmony import */ var _store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../store/actions/sidebarActions */ "./store/actions/sidebarActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const SidebarToggle_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Toggle__SidebarToggle_"
})([""]);
const SidebarToggleDrawer = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const onClick = () => {
    dispatch((0,_store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__.toggleSideDrawer)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SidebarToggle_, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "Toggle side drawer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarToggleDrawer);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/Index.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/Index.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Header_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Index */ "./src/components/Header/Sidebar/SideMenu/Header/Index.jsx");
/* harmony import */ var _MenuList_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuList/Index */ "./src/components/Header/Sidebar/SideMenu/MenuList/Index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const SideMenu_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Index__SideMenu_"
})(["position:fixed;right:0;top:0;bottom:0;overflow-x:auto;overflow-y:auto;height:100vh;width:250px;max-width:100vw;z-index:9000;display:flex;flex-direction:column;transition:opacity 0.2s ease,transform 0.2s ease,visibility 0.2s ease;visibility:", ";transform:", ";opacity:", ";"], props => props.isOpen ? "visible" : "hidden", props => props.isOpen ? "translateX(0)" : "translateX(100%)", props => props.isOpen ? "1" : "0");
const SideMenu = props => {
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.sidebarReducer.isOpen);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SideMenu_, {
    isOpen: isOpen,
    "aria-label": "Sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Index__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuList_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMenu);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/MenuList/Index.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/MenuList/Index.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/Header/Sidebar/SideMenu/MenuList/MenuItem.jsx");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeToggle */ "./src/components/Header/Sidebar/SideMenu/MenuList/ThemeToggle.jsx");





const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_2___default()("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)"
});
const MenuList_ = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "Index__MenuList_"
})(["margin:0;list-style:none;flex:1;background-color:", ";padding:20px;padding-top:30px;transition:all 0.2s ease-out;"], backgroundColor);
const MenuList = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuList_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "https://my-portfoliojsz.com",
    label: "My Portfolio",
    type: "external"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "walkerzjs2@gmail.com",
    label: "Send Me Email",
    type: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuList);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/MenuList/MenuItem.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/MenuList/MenuItem.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_1__);



const textColor = styled_theming__WEBPACK_IMPORTED_MODULE_1___default()("mode", {
  light: "var(--black)",
  dark: "var(--white)"
});
const MenuItem_ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "MenuItem__MenuItem_"
})(["margin:0;& a{font-size:18px;box-shadow:none;height:44px;width:100%;padding-left:10%;text-decoration:none;color:", ";display:block;display:flex;align-items:center;transition:all 0.2s ease-out;}cursor:pointer;"], textColor);
const MenuItem = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem_, null, (() => {
    switch (props.type) {
      case "external":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: props.id,
          rel: "noopener noreferrer"
        }, props.label);
      case "email":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: `mailto:${props.id}`,
          rel: "noopener noreferrer"
        }, props.label);
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: `${props.id}`,
          rel: "noopener noreferrer"
        }, props.label);
    }
  })());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/MenuList/ThemeToggle.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/MenuList/ThemeToggle.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



// https://www.w3schools.com/howto/howto_css_switch.asp
const ThemeToggleC = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "ThemeToggle__ThemeToggleC"
})(["-webkit-tap-highlight-color:transparent;position:relative;display:block;margin-left:10%;margin-top:15px;width:60px;height:30px;.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey-3);-webkit-transition:0.2s ease-out;transition:0.2s ease-out;}.slider:before{position:absolute;content:\"\";height:24px;width:24px;left:4px;bottom:3px;background-color:white;-webkit-transition:0.2s ease-out;transition:0.2s ease-out;}.slider.round{border-radius:30px;}.slider.round:before{border-radius:50%;}& input{opacity:0;width:0;height:0;}input:checked + .slider{background-color:#43bdf5;}input:focus + .slider{}input:checked + .slider:before{-webkit-transform:translateX(28px);-ms-transform:translateX(28px);transform:translateX(28px);}p{width:0;height:0;opacity:0;}"]);
const ThemeToggle = props => {
  const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  const onChange = () => {
    theme.setTheme({
      mode: theme.mode === "light" ? "dark" : "light"
    });
    window.__theme = theme.mode === "light" ? "dark" : "light";
  };
  const isChecked = () => {
    if (typeof window !== "undefined") {
      let result = window.__theme === "light" ? true : false;
      return result;
    } else {
      return true;
    }
  };

  // useEffect(() => {
  //   console.log("theme: ", theme)
  //   console.log("re render")
  // })

  let content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "60px"
    }
  });
  // let content = null
  if (typeof window !== "undefined" && window.__theme) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeToggleC, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      "aria-label": "Click to change theme",
      type: "checkbox",
      onChange: onChange,
      checked: isChecked()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "slider round"
    })));
  }
  return content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/typography */ "./src/utils/typography.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_5__);







const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_5___default()("mode", {
  light: "var(--grey-4)",
  dark: "var(--grey-5)"
});
const textColor = styled_theming__WEBPACK_IMPORTED_MODULE_5___default()("mode", {
  light: "var(--black)",
  dark: "var(--white)"
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "layout__Container"
})(["position:relative;width:100%;min-height:100vh;padding-top:70px;background-color:", ";transition:all 0.2s ease-out;color:", ";"], backgroundColor, textColor);
const Layout = ({
  location,
  title,
  children
}) => {
  const rootPath = `${""}/`;
  let header;
  if (location.pathname === rootPath) {
    //header to change to navbar
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      style: {
        ...(0,_utils_typography__WEBPACK_IMPORTED_MODULE_2__.scale)(1.5),
        marginBottom: (0,_utils_typography__WEBPACK_IMPORTED_MODULE_2__.rhythm)(1.5),
        marginTop: 0,
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      style: {
        boxShadow: `none`,
        color: `inherit`
      },
      to: `/`
    }, title));
  } else {
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        marginTop: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      style: {
        boxShadow: `none`,
        color: `inherit`
      },
      to: `/`
    }, title));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginLeft: `auto`,
      marginRight: `auto`,
      // maxWidth: rhythm(24),
      fontFamily: `Noto Sans, sans-serif`,
      maxWidth: "768px",
      padding: `${(0,_utils_typography__WEBPACK_IMPORTED_MODULE_2__.rhythm)(1.5)} 30px`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: {
      position: "absolute",
      bottom: "20px",
      margin: "auto"
    }
  }, new Date().getFullYear(), ", By", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://master.dj3cz2uxgebt1.amplifyapp.com/",
    target: "__blank",
    rel: "noopener noreferrer"
  }, "Junshuai Zhang (Jacob)"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/in/junshuai-zhang-55774594/",
    target: "__blank"
  }, "LinkedIn"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/walkerzjs",
    target: "__blank",
    rel: "noopener noreferrer"
  }, "Github"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2841359383.json */ "./public/page-data/sq/d/2841359383.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




const SEO = ({
  description,
  lang,
  meta,
  title
}) => {
  const {
    site
  } = _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.social.twitter
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
SEO.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/pages/using-typescript.tsx?export=default":
/*!*******************************************************!*\
  !*** ./src/pages/using-typescript.tsx?export=default ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
// If you don't want to use TypeScript you can delete this file!




const UsingTypescript = ({
  data,
  path,
  location
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Using TypeScript",
  location: location
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Using TypeScript"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Gatsby supports TypeScript by default!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This means that you can create and write ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, ".ts/.tsx"), " files for your pages, components etc. Please note that the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "gatsby-*.js"), " files (like gatsby-node.js) currently don't support TypeScript yet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "For type checking you'll want to install ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "typescript"), " via npm and run ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "tsc --init"), " to create a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, ".tsconfig"), " file."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You're currently on the page \"", path, "\" which was built on ", data.site.buildTime, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To learn more, head over to our ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.gatsbyjs.org/docs/typescript/"
}, "documentation about TypeScript"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Go back to the homepage"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsingTypescript);
const query = "2907560070";

/***/ }),

/***/ "./store/actions/sidebarActions.js":
/*!*****************************************!*\
  !*** ./store/actions/sidebarActions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleSideDrawer: () => (/* binding */ toggleSideDrawer)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");

const toggleSideDrawer = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.TOGGLE
  };
};

/***/ })

};
;
//# sourceMappingURL=component---src-pages-using-typescript-tsx.js.map
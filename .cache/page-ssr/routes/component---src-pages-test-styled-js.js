"use strict";
exports.id = "component---src-pages-test-styled-js";
exports.ids = ["component---src-pages-test-styled-js"];
exports.modules = {

/***/ "./src/pages/testStyled.js?export=default":
/*!************************************************!*\
  !*** ./src/pages/testStyled.js?export=default ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsersList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "testStyled__Container"
})(["margin:3rem auto;max-width:600px;display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
const UserWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "testStyled__UserWrapper"
})(["display:flex;align-items:center;margin:0 auto 12px auto;&:last-child{margin-bottom:0;}"]);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "testStyled__Avatar"
})(["flex:0 0 96px;width:96px;height:96px;margin:0;"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "testStyled__Description"
})(["flex:1;margin-left:18px;padding:12px;"]);
const Username = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "testStyled__Username"
})(["margin:0 0 12px 0;padding:0;"]);
const Excerpt = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "testStyled__Excerpt"
})(["margin:0;"]);
const User = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Avatar, {
  src: props.avatar,
  alt: ""
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Username, null, props.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Excerpt, null, props.excerpt)));
function UsersList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "About Styled Components"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Styled Components is cool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(User, {
    username: "Jane Doe",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
    excerpt: "I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(User, {
    username: "Bob Smith",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
    excerpt: "I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }));
}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-test-styled-js.js.map
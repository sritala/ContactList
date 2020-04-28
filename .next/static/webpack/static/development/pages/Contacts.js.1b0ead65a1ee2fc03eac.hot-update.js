webpackHotUpdate("static/development/pages/Contacts.js",{

/***/ "./src/components/ui/ShowContactsBlock.tsx":
/*!*************************************************!*\
  !*** ./src/components/ui/ShowContactsBlock.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowContactsBlock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Persons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Persons */ "./src/components/ui/Persons.tsx");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filter */ "./src/components/ui/Filter.tsx");

var _jsxFileName = "/Users/susanna/Downloads/ContactList/src/components/ui/ShowContactsBlock.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    padding: "1rem",
    textAlign: 'center'
  },
  dialog: {
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  open: {
    width: 320,
    marginTop: "1rem"
  },
  box: {
    textAlign: "center"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "1rem",
    paddingBottom: "3rem"
  },
  contacts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: 600,
    [theme.breakpoints.down('xs')]: {
      width: 350
    }
  }
}));
const Transition = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function Transition(props, ref) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    direction: "up",
    ref: ref
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
});
function ShowContactsBlock({
  contactsToShow,
  handleSearchName,
  deletePerson,
  persons
}) {
  const classes = useStyles();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChangeHandler: handleSearchName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_Persons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    persons: contactsToShow,
    onDelete: deletePerson,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=Contacts.js.1b0ead65a1ee2fc03eac.hot-update.js.map
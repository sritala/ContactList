webpackHotUpdate("static/development/pages/FormPage.js",{

/***/ "./src/components/ui/Dialog.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/Dialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleDialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Persons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Persons */ "./src/components/ui/Persons.tsx");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Filter */ "./src/components/ui/Filter.tsx");

var _jsxFileName = "/Users/susanna/Downloads/SimpleNext.js-project/src/components/ui/Dialog.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    padding: "1rem",
    textAlign: 'center'
  },
  items: {},
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
  }
}));
const Transition = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function Transition(props, ref) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    direction: "up",
    ref: ref
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
});
function SimpleDialog({
  contactsToShow,
  handleSearchName,
  deletePerson,
  persons
}) {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (persons.length === 0) return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body1",
    style: {
      color: "#949494"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "or"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.open,
    disabled: true,
    variant: "outlined",
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Show Contacts")));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body1",
    style: {
      color: "#949494"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "or"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.open,
    variant: "outlined",
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Show Contacts")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.dialog,
    open: open,
    onClose: handleClose,
    TransitionComponent: Transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("form", {
    style: {
      width: 600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      color: "#575757"
    },
    edge: "start",
    color: "inherit",
    onClick: handleClose,
    "aria-label": "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    style: {
      color: "#575757"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "My Contacts")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onChangeHandler: handleSearchName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_Persons__WEBPACK_IMPORTED_MODULE_13__["default"], {
    persons: contactsToShow,
    onDelete: deletePerson,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }))))))));
}

/***/ })

})
//# sourceMappingURL=FormPage.js.0b6b7f97971634b369ae.hot-update.js.map
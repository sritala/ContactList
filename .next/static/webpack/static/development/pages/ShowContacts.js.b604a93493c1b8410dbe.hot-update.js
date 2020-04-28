webpackHotUpdate("static/development/pages/ShowContacts.js",{

/***/ "./src/pages/ShowContacts.tsx":
/*!************************************!*\
  !*** ./src/pages/ShowContacts.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/susanna/Downloads/ContactList/src/pages/ShowContacts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  image: {},
  information: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: '#575757'
  },
  form: {}
}));

function ShowContacts({
  persons
}) {
  const classes = useStyles();

  const image = person => {
    if (person.image !== null) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
        src: person.image,
        width: 200,
        style: {
          borderRadius: '70%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      src: 'https://mcdowellhomes.com.au/wp-content/uploads/2016/09/no-user-image-300x300.gif',
      width: 200,
      style: {
        borderRadius: '70%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Your Contacts"), persons.map(person => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("p", {
    key: person.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 6,
    className: classes.grid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, image(person))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ShowContacts);

/***/ })

})
//# sourceMappingURL=ShowContacts.js.b604a93493c1b8410dbe.hot-update.js.map
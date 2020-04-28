webpackHotUpdate("static/development/pages/FormPage.js",{

/***/ "./src/components/ui/Persons.tsx":
/*!***************************************!*\
  !*** ./src/components/ui/Persons.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/susanna/Downloads/SimpleNext.js-project/src/components/ui/Persons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    fontColor: 'grey'
  }
}));

const image = person => {
  if (person.image !== null) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      src: person.image,
      width: 200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: 'https://mcdowellhomes.com.au/wp-content/uploads/2016/09/no-user-image-300x300.gif',
    width: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }));
};

const Persons = ({
  persons,
  onDelete
}) => {
  function confirmDelete(id, name) {
    if (window.confirm("Delete ".concat(name, "?"))) {
      onDelete(id);
    }

    return;
  }

  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, persons.map(person => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("p", {
    key: person.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 6,
    className: classes.grid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, image(person)), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    className: classes.information,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, person.name), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, person.number), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => confirmDelete(person.id, person.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Persons);

/***/ })

})
//# sourceMappingURL=FormPage.js.fb939af77d964c54b28a.hot-update.js.map
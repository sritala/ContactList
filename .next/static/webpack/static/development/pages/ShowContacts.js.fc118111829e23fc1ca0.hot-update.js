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



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  wrapper: {},
  form: {
    textAlign: 'center'
  }
}));

function ShowContacts() {
  const classes = useStyles();
  const {
    0: persons,
    1: setPersons
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: showAll,
    1: setShowAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: searchName,
    1: setSearchName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const contactsToShow = showAll ? persons : persons.filter(person => {
    let toFilter = person.name.toLocaleLowerCase();
    let toSearch = searchName.toLowerCase();
    return toFilter.includes(toSearch);
  });

  const deletePerson = id => {
    personService.remove(id).then(() => {
      const updatedPersons = persons.filter(p => p.id !== id);
      setPersons(updatedPersons);
    });
  };

  return __jsx("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Your Contacts"), __jsx(Persons, {
    persons: contactsToShow,
    onDelete: deletePerson,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ShowContacts);

/***/ })

})
//# sourceMappingURL=ShowContacts.js.fc118111829e23fc1ca0.hot-update.js.map
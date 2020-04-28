webpackHotUpdate("static/development/pages/Contacts.js",{

/***/ "./src/components/ui/ShowContacts.tsx":
/*!********************************************!*\
  !*** ./src/components/ui/ShowContacts.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowContacts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _services_persons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/persons */ "./src/components/services/persons.tsx");
/* harmony import */ var _ui_ShowContactsBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ShowContactsBlock */ "./src/components/ui/ShowContactsBlock.tsx");
var _jsxFileName = "/Users/susanna/Downloads/ContactList/src/components/ui/ShowContacts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  dialog: {
    paddingTop: '1rem'
  }
}));
function ShowContacts() {
  const classes = useStyles();
  const {
    0: persons,
    1: setPersons
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: searchName,
    1: setSearchName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showAll,
    1: setShowAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_persons__WEBPACK_IMPORTED_MODULE_2__["default"].getAll().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  const deletePerson = id => {
    _services_persons__WEBPACK_IMPORTED_MODULE_2__["default"].remove(id).then(() => {
      const updatedPersons = persons.filter(p => p.id !== id);
      setPersons(updatedPersons);
    });
  };

  const handleSearchName = event => {
    setSearchName(event.target.value);
    setShowAll(false);
  };

  const contactsToShow = showAll ? persons : persons.filter(person => {
    let toFilter = person.name.toLocaleLowerCase();
    let toSearch = searchName.toLowerCase();
    return toFilter.includes(toSearch);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: classes.dialog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_ui_ShowContactsBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contactsToShow: contactsToShow,
    handleSearchName: handleSearchName,
    deletePerson: deletePerson,
    persons: persons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=Contacts.js.631950bfc8158084fefa.hot-update.js.map
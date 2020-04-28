webpackHotUpdate("static/development/pages/ShowContacts.js",{

/***/ "./node_modules/d3-ease/src/back.js":
false,

/***/ "./node_modules/d3-ease/src/bounce.js":
false,

/***/ "./node_modules/d3-ease/src/circle.js":
false,

/***/ "./node_modules/d3-ease/src/cubic.js":
false,

/***/ "./node_modules/d3-ease/src/elastic.js":
false,

/***/ "./node_modules/d3-ease/src/exp.js":
false,

/***/ "./node_modules/d3-ease/src/index.js":
false,

/***/ "./node_modules/d3-ease/src/linear.js":
false,

/***/ "./node_modules/d3-ease/src/poly.js":
false,

/***/ "./node_modules/d3-ease/src/quad.js":
false,

/***/ "./node_modules/d3-ease/src/sin.js":
false,

/***/ "./node_modules/d3-timer/src/index.js":
false,

/***/ "./node_modules/d3-timer/src/interval.js":
false,

/***/ "./node_modules/d3-timer/src/timeout.js":
false,

/***/ "./node_modules/d3-timer/src/timer.js":
false,

/***/ "./node_modules/exenv/index.js":
false,

/***/ "./node_modules/kapellmeister/es/BaseNode.js":
false,

/***/ "./node_modules/kapellmeister/es/Events.js":
false,

/***/ "./node_modules/kapellmeister/es/index.js":
false,

/***/ "./node_modules/kapellmeister/es/utils.js":
false,

/***/ "./node_modules/nuka-carousel/es/all-transitions.js":
false,

/***/ "./node_modules/nuka-carousel/es/announce-slide.js":
false,

/***/ "./node_modules/nuka-carousel/es/default-controls.js":
false,

/***/ "./node_modules/nuka-carousel/es/index.js":
false,

/***/ "./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js":
false,

/***/ "./node_modules/nuka-carousel/es/transitions/fade-transition.js":
false,

/***/ "./node_modules/nuka-carousel/es/transitions/scroll-transition.js":
false,

/***/ "./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js":
false,

/***/ "./node_modules/nuka-carousel/es/utilities/style-utilities.js":
false,

/***/ "./node_modules/nuka-carousel/es/utilities/utilities.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-move/Animate/index.js":
false,

/***/ "./node_modules/react-move/NodeGroup/index.js":
false,

/***/ "./node_modules/react-move/core/mergeKeys.js":
false,

/***/ "./node_modules/react-move/core/types.js":
false,

/***/ "./node_modules/react-move/utils.js":
false,

/***/ "./src/components/ui/Carousel.tsx":
false,

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
/* harmony import */ var _components_ui_Persons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/Persons */ "./src/components/ui/Persons.tsx");
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
    _components_ui_Persons__WEBPACK_IMPORTED_MODULE_3__["default"].remove(id).then(() => {
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

/***/ }),

/***/ "./src/pages/index.tsx":
false

})
//# sourceMappingURL=ShowContacts.js.819b744f6172a292b461.hot-update.js.map
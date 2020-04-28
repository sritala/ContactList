webpackHotUpdate("static/development/pages/AddContact.js",{

/***/ "./node_modules/@material-ui/icons/Close.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Close.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;

/***/ }),

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

var _jsxFileName = "/Users/susanna/Downloads/ContactList/src/components/ui/Dialog.tsx";
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
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    direction: "up",
    ref: ref
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body1",
    style: {
      color: "#949494"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
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
      lineNumber: 93
    },
    __self: this
  }, "Show Contacts")));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body1",
    style: {
      color: "#949494"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "or"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.open,
    variant: "outlined",
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Show Contacts")), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.dialog,
    open: open,
    onClose: handleClose,
    TransitionComponent: Transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("form", {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      color: "white"
    },
    edge: "start",
    color: "inherit",
    onClick: handleClose,
    "aria-label": "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    className: classes.title,
    style: {
      color: "#575757"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "My Contacts")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onChangeHandler: handleSearchName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_Persons__WEBPACK_IMPORTED_MODULE_13__["default"], {
    persons: contactsToShow,
    onDelete: deletePerson,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }))))))));
}

/***/ }),

/***/ "./src/components/ui/Form.tsx":
/*!************************************!*\
  !*** ./src/components/ui/Form.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dialog */ "./src/components/ui/Dialog.tsx");
/* harmony import */ var _services_persons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/persons */ "./src/components/services/persons.tsx");
/* harmony import */ var _PersonForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PersonForm */ "./src/components/ui/PersonForm.tsx");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Notification */ "./src/components/ui/Notification.tsx");







var _jsxFileName = "/Users/susanna/Downloads/ContactList/src/components/ui/Form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  dialog: {
    paddingTop: '1rem'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  const {
    0: persons,
    1: setPersons
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]);
  const {
    0: newName,
    1: setNewName
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('');
  const {
    0: newNumber,
    1: setNewNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('');
  const {
    0: searchName,
    1: setSearchName
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('');
  const {
    0: showAll,
    1: setShowAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true);
  const {
    0: notificationMessage,
    1: setNotificationMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    _services_persons__WEBPACK_IMPORTED_MODULE_10__["default"].getAll().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  const personIsAdded = (name, data) => {
    let isAdded = data.find(el => el.name === name);

    if (isAdded === undefined) {
      return false;
    }

    return true;
  };

  const addContact = event => {
    event.preventDefault(); // Check if the contact already exists

    const toUpdate = persons.filter(p => {
      return p.name.includes(newName);
    });

    if (toUpdate.length === 1) {
      const confirm = window.confirm("".concat(newName, " is already added to Contact List, replace the old number with a new one?"));

      if (confirm) {
        _services_persons__WEBPACK_IMPORTED_MODULE_10__["default"].update(toUpdate[0].id, _objectSpread({}, toUpdate[0], {
          number: newNumber
        })).then(updatedPerson => {
          let updatedState = persons.filter(p => p.id !== updatedPerson.id);
          updatedState = [...updatedState, updatedPerson];
          setPersons(updatedState);
          setNewName('');
          setNewNumber('');
          setNotificationMessage("Added ".concat(updatedPerson.name));
          setTimeout(() => {
            setNotificationMessage(null);
          }, 2000);
        }).catch(error => {
          setErrorMessage("Information of ".concat(newName, " has already been removed from server"));
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
      }
    } else {
      // if not, save the person
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      _services_persons__WEBPACK_IMPORTED_MODULE_10__["default"].create(personObject).then(returnedNote => {
        if (personIsAdded(newName, persons)) {
          alert("".concat(newName, " is already added to Contact List"));
        } else {
          setPersons([...persons, {
            name: newName,
            number: newNumber
          }]);
        }

        setNotificationMessage("Added ".concat(newName));
        setTimeout(() => {
          setNotificationMessage(null);
        }, 2000);
        setNewName('');
        setNewNumber('');
      }).catch(error => {
        setErrorMessage("Information of ".concat(newName, " has already been removed from server"));
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const cancel = () => {
    setNewName('');
    setNewNumber('');
  };

  const deletePerson = id => {
    _services_persons__WEBPACK_IMPORTED_MODULE_10__["default"].remove(id).then(() => {
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
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_PersonForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleOnSubmit: addContact,
    newName: newName,
    handleOnNameChange: handleNameChange,
    newNumber: newNumber,
    handleOnNumberChange: handleNumberChange,
    cancel: cancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    className: classes.dialog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    contactsToShow: contactsToShow,
    handleSearchName: handleSearchName,
    deletePerson: deletePerson,
    persons: persons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), __jsx(_Notification__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "error",
    message: errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=AddContact.js.a8b742f1fb67bc8c0411.hot-update.js.map
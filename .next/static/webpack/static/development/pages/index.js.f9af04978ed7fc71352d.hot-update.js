webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ui/Carousel.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/Carousel.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/susanna/Downloads/exercise copy /exercise/src/components/ui/Carousel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({
  dot: {
    height: 25,
    width: 25,
    background: 'primary',
    borderRadius: 50,
    '&.isCurrent': {
      background: 'red!important'
    },
    '&:hover': {
      background: 'blue'
    }
  },
  dots: {
    display: 'flex',
    flexDirection: 'row'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function ({
  image
}) {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["NoSsr"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    renderBottomCenterControls: props => {
      console.log(props.currentSlide);
      let asiat = [];

      for (let i = 0; i < props.slideCount; i++) {
        const isCurrent = props.currentSlide === i ? 'isCurrent' : '';
        const className = "".concat(isCurrent, "  ").concat(classes.dot, " ");
        asiat.push(__jsx("div", {
          key: i,
          onClick: () => props.goToSlide(i),
          className: className,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }));
      }

      return __jsx("div", {
        className: classes.dots,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, asiat);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    style: {
      maxWidth: '100%',
      height: '100%'
    },
    src: "https://images.unsplash.com/photo-1587613725874-d9a1e8e23f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("img", {
    src: "https://images.unsplash.com/photo-1587613989342-7e21016caff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("img", {
    src: "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("img", {
    src: "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.f9af04978ed7fc71352d.hot-update.js.map
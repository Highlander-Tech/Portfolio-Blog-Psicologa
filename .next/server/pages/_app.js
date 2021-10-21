"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Giova\\OneDrive\\Documentos\\GitHub\\MoniqueBatista\\src\\components\\Footer.tsx";



function Footer() {
  const {
    0: contato,
    1: setContato
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    Instagram: "",
    Facebook: "",
    Celular: "",
    Email: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    (async () => {
      const data = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://moniquebatista.herokuapp.com/pages").then(response => {
        return response.data[0].Home;
      });
      setContato(data);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    h: "480px",
    w: "full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "1100px",
      mx: "auto",
      mt: "20px",
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: "footerImage.png",
        w: "300px",
        h: "400px",
        ml: "-20px",
        mt: "10px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "300px",
        h: "375px",
        border: "1px solid #E9CBBB",
        position: "absolute",
        zIndex: "9999"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "465px",
        h: "365px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "h2",
          fontFamily: "Cormorant Garamond",
          fontSize: "36px",
          fontWeight: "bold",
          lineHeight: "44px",
          fontStyle: "normal",
          color: "#474544",
          mb: "20px",
          children: "Contato"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          color: "#474544",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: "normal",
          lineHeight: "24px",
          letterSpacing: "0.5px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Nome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            w: "460px",
            bg: "white",
            size: "lg",
            placeholder: "Nome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mt: "10px",
            children: "Telefone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            w: "460px",
            bg: "white",
            size: "lg",
            placeholder: "(51) 9 9999-9999"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mt: "10px",
            children: "Mensagem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
            w: "460px",
            bg: "white",
            h: "100px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          mr: "5px",
          mt: "10px",
          float: "right",
          bgColor: "#E9CBBB",
          w: "150px",
          h: "45px",
          borderRadius: "5px",
          color: "#F8F1F1",
          textTransform: "uppercase",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: "30px",
          children: "enviar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "220px",
        borderLeft: "2px solid #E9CBBB",
        pl: "20px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "h2",
          fontFamily: "Cormorant Garamond",
          fontSize: "36px",
          fontWeight: "bold",
          lineHeight: "44px",
          fontStyle: "normal",
          color: "#474544",
          children: "Redes Sociais"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: "80px",
          justifyContent: "space-between",
          mt: "20px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            w: "35px",
            h: "35px",
            bgImage: "insta_o.png",
            bgSize: "cover",
            href: `https://www.instagram.com/${contato.Instagram}/`,
            _hover: {
              backgroundImage: "insta_v.png"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            w: "35px",
            h: "35px",
            bgImage: "face_o.png",
            bgSize: "cover",
            _hover: {
              backgroundImage: "face_v.png"
            },
            href: `/https://www.facebook.com/${contato.Facebook}/`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          my: "20px",
          color: "#E9CBBB",
          fontFamily: "Cormorant Garamond",
          fontSize: "36px",
          fontWeight: "bold",
          fontStyle: "normal",
          lineHeight: "44px",
          children: "&"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "h2",
          fontFamily: "Cormorant Garamond",
          fontSize: "36px",
          fontWeight: "bold",
          lineHeight: "44px",
          fontStyle: "normal",
          color: "#474544",
          mb: "15px",
          children: "Whatsapp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: `https://api.whatsapp.com/send?phone=55${contato.Celular}`,
          fontFamily: "Roboto",
          fontSize: "24px",
          fontWeight: "normal",
          lineHeight: "30px",
          color: "#474544",
          children: contato.Celular
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          mt: "120px",
          position: "absolute",
          ml: "400px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            textAlign: "right",
            fontStyle: "Roboto",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#474544",
            children: "Desenvolvido por"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: "https://www.highlandertech.com.br/",
            float: "right",
            bgImage: "highlander.png",
            w: "157px",
            h: "28px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Giova\\OneDrive\\Documentos\\GitHub\\MoniqueBatista\\src\\components\\Header.tsx";

function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    w: "full",
    h: "70px",
    borderBottom: "1px solid #474544",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      w: "1210px",
      mx: "auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        w: "445px",
        pt: "30px",
        textTransform: "uppercase",
        fontFamily: "Cormorant Garamond",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "29px",
        color: "#474544",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: "/",
          children: "In\xEDcio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: "/sobre",
          children: "Sobre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: "/blog",
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: "/contato",
          children: "Contato"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.tsx");

var _jsxFileName = "C:\\Users\\Giova\\OneDrive\\Documentos\\GitHub\\MoniqueBatista\\src\\components\\Layout.tsx";



function Layout({
  children
}) {
  const bgColor = '#F8F1F1';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    bgColor: bgColor,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDirection: "column",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");

var _jsxFileName = "C:\\Users\\Giova\\OneDrive\\Documentos\\GitHub\\MoniqueBatista\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Monique Batista"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLDRCQUdJLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLDhEQUFDLGtEQUFEO0FBQ0ksbUJBQWEsRUFBQyxRQURsQjtBQUFBLGdCQUdLRDtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQVNJLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFFQTtBQUNBOztBQUVBLFNBQVNJLEdBQVQsQ0FBYTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBYixFQUFpRDtBQUMvQyxzQkFDRSw4REFBQyw0REFBRDtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztBQUNELGlFQUFlRixHQUFmOzs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25pcXVlYmF0aXN0YS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vbW9uaXF1ZWJhdGlzdGEvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL21vbmlxdWViYXRpc3RhLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9tb25pcXVlYmF0aXN0YS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9tb25pcXVlYmF0aXN0YS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9tb25pcXVlYmF0aXN0YS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbW9uaXF1ZWJhdGlzdGEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tb25pcXVlYmF0aXN0YS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9uaXF1ZWJhdGlzdGEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBJbnB1dCwgQnV0dG9uLCBUZXh0YXJlYSwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtjb250YXRvLCBzZXRDb250YXRvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBJbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgRmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgQ2VsdWxhcjogXCJcIixcclxuICAgICAgICBFbWFpbDogXCJcIixcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9tb25pcXVlYmF0aXN0YS5oZXJva3VhcHAuY29tL3BhZ2VzXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXNwb25zZS5kYXRhWzBdLkhvbWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldENvbnRhdG8oZGF0YSlcclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGg9XCI0ODBweFwiXHJcbiAgICAgICAgICAgIHc9XCJmdWxsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICB3PVwiMTEwMHB4XCJcclxuICAgICAgICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBtdD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiZm9vdGVySW1hZ2UucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICB3PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGg9XCI0MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWw9XCItMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgdz1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBoPVwiMzc1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjRTlDQkJCXCJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg9XCI5OTk5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICB3PVwiNDY1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGg9XCIzNjVweFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJDb3Jtb3JhbnQgR2FyYW1vbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjM2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI0NHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWI9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhdG9cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIlJvYm90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI0NjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVsZWZvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI0NjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIig1MSkgOSA5OTk5LTk5OTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVuc2FnZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI0NjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdD1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNFOUNCQkJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3PVwiMTUwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoPVwiNDVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0Y4RjFGMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiUm9ib3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudmlhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgIHc9XCIyMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdD1cIjJweCBzb2xpZCAjRTlDQkJCXCJcclxuICAgICAgICAgICAgICAgICAgICBwbD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiQ29ybW9yYW50IEdhcmFtb25kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIzNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiNDRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWRlcyBTb2NpYWlzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3PVwiMzVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoPVwiMzVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0ltYWdlPVwiaW5zdGFfby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdTaXplPVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJHtjb250YXRvLkluc3RhZ3JhbX0vYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwiaW5zdGFfdi5wbmdcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjM1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjM1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdJbWFnZT1cImZhY2Vfby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdTaXplPVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRJbWFnZTogXCJmYWNlX3YucG5nXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyR7Y29udGF0by5GYWNlYm9va30vYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXk9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjRTlDQkJCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMzZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjQ0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1wiJlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMzZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjQ0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM0NzQ1NDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYj1cIjE1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdHNhcHBcclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NSR7Y29udGF0by5DZWx1bGFyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJSb2JvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM0NzQ1NDRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRhdG8uQ2VsdWxhcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCIxMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtbD1cIjQwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU9XCJSb2JvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIyMXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2Vudm9sdmlkbyBwb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhpZ2hsYW5kZXJ0ZWNoLmNvbS5ici9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0ltYWdlPVwiaGlnaGxhbmRlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjE1N3B4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCIyOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBGbGV4LCBCb3gsIExpbmsgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICAgICAgICBoPVwiNzBweFwiXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjFweCBzb2xpZCAjNDc0NTQ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHc9XCIxMjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHc9XCI0NDVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHQ9XCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiQ29ybW9yYW50IEdhcmFtb25kXCJcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjI5cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5JbsOtY2lvPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29icmVcIj5Tb2JyZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5CbG9nPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGF0b1wiPkNvbnRhdG88L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmludGVyZmFjZSBPcHRpb24ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogT3B0aW9uKSB7XHJcbiAgICBjb25zdCBiZ0NvbG9yID0gJyNGOEYxRjEnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk1vbmlxdWUgQmF0aXN0YTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJGbGV4IiwiQm94IiwiSW1hZ2UiLCJIZWFkaW5nIiwiVGV4dCIsIklucHV0IiwiQnV0dG9uIiwiVGV4dGFyZWEiLCJMaW5rIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsImNvbnRhdG8iLCJzZXRDb250YXRvIiwiSW5zdGFncmFtIiwiRmFjZWJvb2siLCJDZWx1bGFyIiwiRW1haWwiLCJkYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiSG9tZSIsImJhY2tncm91bmRJbWFnZSIsIkhlYWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiYmdDb2xvciIsIkhlYWQiLCJDaGFrcmFQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=
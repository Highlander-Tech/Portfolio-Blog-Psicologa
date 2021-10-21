"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/prismic */ "./src/services/prismic.ts");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/client */ "@prismicio/client");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-dom */ "prismic-dom");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/posts */ "./src/services/posts.ts");


var _jsxFileName = "C:\\Users\\Giova\\OneDrive\\Documentos\\GitHub\\MoniqueBatista\\src\\pages\\index.tsx";






const getStaticProps = async () => {
  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_3__.getPrismicClient)();
  const home = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_4___default().Predicates.at("document.type", 'home')], {
    pageSize: 1
  });
  const blog = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_4___default().Predicates.at("document.type", 'post')], {
    pageSize: 3
  });
  return {
    props: {
      name: prismic_dom__WEBPACK_IMPORTED_MODULE_5__.RichText.asText(home.results[0].data.nome),
      photo: home.results[0].data.photo.url,
      email: home.results[0].data.email,
      facebook: home.results[0].data.facebook,
      instagram: home.results[0].data.instagram,
      telefone: home.results[0].data.telefone,
      posts: (0,_services_posts__WEBPACK_IMPORTED_MODULE_6__.getPosts)(blog.results)
    },
    revalidate: 60 * 60 // 1 hora

  };
};
function Home(props) {
  const {
    0: cards,
    1: setCards
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setCards(props.posts.reverse().map(post => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "350px",
        h: "420px",
        bgColor: "#E9CBBB",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: post.banner,
          h: "240px",
          w: "350px",
          alt: "Foto Perfil Monique Batista"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          w: "325px",
          color: "#474544",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          pl: "10px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: "14px",
            lineHeight: "16px",
            mt: "18px",
            children: ["Publicado em: ", post.updateAt]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
            as: "h3",
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: 500,
            mb: "10px",
            isTruncated: true,
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: "14px",
            lineHeight: "16px",
            h: "48px",
            noOfLines: 3,
            mb: "20px",
            children: post.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: `/blog/${post.id}`,
            ml: "110px",
            w: "110px",
            fontSize: "18px",
            fontWeight: "normal",
            lineHeight: "24px",
            children: "Leia Mais >>"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, post.id, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this);
    }));
  }, [props.posts]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mt: "32px",
      w: "1210px",
      mx: "auto",
      h: "560px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mt: "20px",
        w: "310px",
        h: "490px",
        border: "1px solid black",
        borderRadius: "182px",
        position: "absolute"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        ml: "10px",
        src: props.photo,
        alt: props.name,
        w: "310px",
        h: "500px",
        borderRadius: "182px",
        mt: "10px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        ml: "50px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
          as: "h1",
          fontFamily: "Cookie",
          fontSize: "144px",
          lineHeight: "160px",
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#474544",
          children: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          lineHeight: "21px",
          color: "black",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.UnorderedList, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
              children: "Psicol\xF3ga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
              children: "Psicanalista"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
              children: "Avalia\xE7\xE3o Psicol\xF3gica"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mt: "20px",
            ml: "20px",
            children: "CRP 07/29504"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          mt: "30px",
          w: "185px",
          h: "185px",
          borderRadius: "50%",
          bgColor: "#E9CBBB",
          fontFamily: "Cormorant Garamond",
          fontSize: "32px",
          fontWeight: "bold",
          fontStyle: "normal",
          lineHeight: "39px",
          color: "#474544",
          transform: "rotate(-10deg)",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            h: "185px",
            w: "185px",
            position: "absolute",
            border: "1px solid #474544;",
            borderRadius: "50%",
            ml: "15px",
            mt: "15px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            onClick: () => window.scrollTo({
              top: 99999,
              behavior: 'smooth'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this), "Agende"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      h: "565px",
      w: "full",
      mx: "auto",
      bgColor: "#474544",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "765px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "21px",
        color: "#F8F1F1",
        textAlign: "center",
        mx: "auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: "40px",
          children: "A busca pela sua pr\xF3pria identifica\xE7\xE3o na adolescencia \xE9 uma tarefa incessante, e para tal, pode-se contar com o aux\xEDlio da terapia, posso te ajudar com a minha experiencia em cl\xEDnica e agora levando isso para o on line."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: "21px",
          children: "Se voc\xEA est\xE1 sentindo-se perdido e sem prop\xF3sito, pode contar comigo para te ajudar a compreender que tuas d\xFAvidas e inquieta\xE7a\xF5es fazem parte deste processo da adolesc\xEAncia."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: "21px",
          children: "Atuo tamb\xE9m com fam\xEDlia e conflitos gerados desta, ajudando as fam\xEDlias em um processo de conhecimento e restaura\xE7\xE3o de la\xE7os ou de harmonia para os seus integrantes."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "710px",
        mx: "auto",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: "component_1.png",
          w: "671px",
          h: "362px",
          position: "absolute",
          top: "710px",
          left: "420px",
          alt: "component_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: "80px",
          ml: "-34px",
          fontFamily: "Cormorant Garamond",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "22px",
          lineHeight: "28px",
          color: "white",
          children: "Eu Posso Ajudar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          mt: "120px",
          w: "185px",
          h: "185px",
          borderRadius: "50%",
          bgColor: "#E9CBBB",
          fontFamily: "Cormorant Garamond",
          fontSize: "32px",
          fontWeight: "bold",
          fontStyle: "normal",
          lineHeight: "39px",
          color: "#474544",
          transform: "rotate(-10deg)",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            h: "185px",
            w: "185px",
            position: "absolute",
            border: "1px solid #F8F1F1;",
            borderRadius: "50%",
            ml: "15px",
            mt: "15px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            onClick: () => window.scrollTo({
              top: 99999,
              behavior: 'smooth'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this), "Agende"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      w: "1210px",
      h: "480px",
      mx: "auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        as: "h2",
        mt: "30px",
        fontFamily: "Cormorant Garamond",
        fontSize: "36px",
        fontWeight: "bold",
        lineHeight: "44px",
        color: "#474544",
        children: "Como eu posso ajudar?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mt: "35px",
        mx: "auto",
        w: "1210px",
        justifyContent: "space-evenly",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Cormorant Garamond",
              fontSize: "72px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "72px",
              color: "#E9CBBB",
              mt: "-26px",
              mr: "20px",
              children: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#474544",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "18px",
                lineHeight: "21px",
                mb: "14px",
                children: "Indentificar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                lineHeight: "16px",
                w: "300px",
                children: "Identificar os motivos do problema, a ess\xEAncia do que est\xE1 acontecendo."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            mt: "35px",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Cormorant Garamond",
              fontSize: "72px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "72px",
              color: "#E9CBBB",
              mt: "-26px",
              mr: "20px",
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#474544",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "18px",
                lineHeight: "21px",
                mb: "14px",
                children: "Entender os Outros"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                lineHeight: "16px",
                w: "300px",
                children: "Descobrir como lidar com os fatores externos, e como responder adequadamente."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            mt: "35px",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Cormorant Garamond",
              fontSize: "72px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "72px",
              color: "#E9CBBB",
              mt: "-26px",
              mr: "20px",
              children: "3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#474544",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "18px",
                lineHeight: "21px",
                mb: "14px",
                children: "Entender a Si Mesmo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                lineHeight: "16px",
                w: "300px",
                children: "Descobrir como lidar com seus problemas e tomar a decis\xE3o certa."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: "component_2.png",
          w: "218px",
          h: "135px",
          position: "absolute",
          top: "1240px",
          left: "1080px",
          transform: "rotate(-10deg)",
          alt: "component_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          mt: "60px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Cormorant Garamond",
              fontSize: "72px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "72px",
              color: "#E9CBBB",
              mt: "-26px",
              mr: "20px",
              children: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#474544",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "18px",
                lineHeight: "21px",
                mb: "14px",
                children: "Ser Feliz"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                lineHeight: "16px",
                w: "300px",
                children: "Descobrir o que esta faltando para a felicidade, e como come\xE7ar."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 428,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            mt: "35px",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Cormorant Garamond",
              fontSize: "72px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "72px",
              color: "#E9CBBB",
              mt: "-26px",
              mr: "20px",
              children: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#474544",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "18px",
                lineHeight: "21px",
                mb: "14px",
                children: "Terapia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 452,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                lineHeight: "16px",
                w: "300px",
                children: "Reescrever sua configura\xE7\xE3o, trabalhando seus medos e traumas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 453,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            mt: "35px",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Cormorant Garamond",
              fontSize: "72px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "72px",
              color: "#E9CBBB",
              mt: "-26px",
              mr: "20px",
              children: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              color: "#474544",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "18px",
                lineHeight: "21px",
                mb: "14px",
                children: "Falar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 477,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                lineHeight: "16px",
                w: "300px",
                children: "Abrir-se para um profissional que ir\xE1 escutar o que voc\xEA diz sem medo de julgamentos."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 478,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      borderY: "2px solid #474544",
      bgImage: "57.png",
      bgPosition: "0px",
      bgRepeat: "no-repeat",
      h: "750px",
      w: "full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "1110px",
        mx: "auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          ml: "120px",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
            as: "h2",
            fontFamily: "Cormorant Garamond",
            fontSize: "36px",
            fontWeight: "bold",
            lineHeight: "44px",
            color: "#474544;",
            mt: "28px",
            children: "\xDAltimas postagens"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 499,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: "line.png",
            w: "280px",
            h: "1px",
            mt: "10px",
            alt: "line"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          mt: "20px",
          w: "1110px",
          justifyContent: "space-between",
          children: cards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          w: "185px",
          h: "185px",
          mx: "auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            mt: "15px",
            mx: "auto",
            w: "185px",
            h: "185px",
            borderRadius: "50%",
            bgColor: "#E9CBBB",
            fontFamily: "Cormorant Garamond",
            fontSize: "32px",
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: "39px",
            color: "#474544",
            transform: "rotate(-10deg)",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/blog",
              h: "185px",
              w: "185px",
              position: "absolute",
              border: "1px solid #474544;",
              borderRadius: "50%",
              ml: "15px",
              mt: "15px",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 15
            }, this), "Acesse"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 531,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/services/posts.ts":
/*!*******************************!*\
  !*** ./src/services/posts.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPosts": () => (/* binding */ getPosts)
/* harmony export */ });
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismic-dom */ "prismic-dom");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_0__);

function getPosts(results) {
  const Posts = results.map(post => {
    var _post$data$content$fi, _post$data$content$fi2;

    return {
      id: post.uid,
      title: prismic_dom__WEBPACK_IMPORTED_MODULE_0__.RichText.asText(post.data.title),
      banner: post.data.banner.url,
      content: (_post$data$content$fi = (_post$data$content$fi2 = post.data.content.find(content => content.type === 'paragraph')) === null || _post$data$content$fi2 === void 0 ? void 0 : _post$data$content$fi2.text) !== null && _post$data$content$fi !== void 0 ? _post$data$content$fi : '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    };
  });
  return Posts;
}

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrismicClient": () => (/* binding */ getPrismicClient)
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ "@prismicio/client");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);

function getPrismicClient(req) {
  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {
    req
  });
  return prismic;
}

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@prismicio/client");

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("prismic-dom");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGEvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL21vbmlxdWViYXRpc3RhLy4vc3JjL3NlcnZpY2VzL3Bvc3RzLnRzIiwid2VicGFjazovL21vbmlxdWViYXRpc3RhLy4vc3JjL3NlcnZpY2VzL3ByaXNtaWMudHMiLCJ3ZWJwYWNrOi8vbW9uaXF1ZWJhdGlzdGEvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9uaXF1ZWJhdGlzdGEvZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiIiwid2VicGFjazovL21vbmlxdWViYXRpc3RhL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly9tb25pcXVlYmF0aXN0YS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9uaXF1ZWJhdGlzdGEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBMaW5rLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBCb3gsIFVub3JkZXJlZExpc3QsIExpc3RJdGVtIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJpc21pY1wiXHJcbmltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50J1xyXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtZG9tJ1xyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wb3N0c1wiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KClcclxuXHJcbiAgY29uc3QgaG9tZSA9IGF3YWl0IHByaXNtaWMucXVlcnkoW1xyXG4gICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KFwiZG9jdW1lbnQudHlwZVwiLCAnaG9tZScpXSxcclxuICAgIHtcclxuICAgICAgcGFnZVNpemU6IDFcclxuICAgIH0pXHJcblxyXG4gIGNvbnN0IGJsb2cgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFtcclxuICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdChcImRvY3VtZW50LnR5cGVcIiwgJ3Bvc3QnKV0sXHJcbiAgICB7XHJcbiAgICAgIHBhZ2VTaXplOiAzXHJcbiAgICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbmFtZTogUmljaFRleHQuYXNUZXh0KGhvbWUucmVzdWx0c1swXS5kYXRhLm5vbWUpLFxyXG4gICAgICBwaG90bzogaG9tZS5yZXN1bHRzWzBdLmRhdGEucGhvdG8udXJsLFxyXG4gICAgICBlbWFpbDogaG9tZS5yZXN1bHRzWzBdLmRhdGEuZW1haWwsXHJcbiAgICAgIGZhY2Vib29rOiBob21lLnJlc3VsdHNbMF0uZGF0YS5mYWNlYm9vayxcclxuICAgICAgaW5zdGFncmFtOiBob21lLnJlc3VsdHNbMF0uZGF0YS5pbnN0YWdyYW0sXHJcbiAgICAgIHRlbGVmb25lOiBob21lLnJlc3VsdHNbMF0uZGF0YS50ZWxlZm9uZSxcclxuICAgICAgcG9zdHM6IGdldFBvc3RzKGJsb2cucmVzdWx0cylcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwIC8vIDEgaG9yYVxyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFBvc3QgZXh0ZW5kcyBBcnJheTxhbnk+IHtcclxuICBpZDogc3RyaW5nXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIGJhbm5lcjogc3RyaW5nXHJcbiAgY29udGVudDogc3RyaW5nXHJcbiAgdXBkYXRlQXQ6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBwaG90bzogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIGZhY2Vib29rOiBzdHJpbmdcclxuICBpbnN0YWdyYW06IHN0cmluZ1xyXG4gIHRlbGVmb25lOiBudW1iZXJcclxuICBwb3N0czogUG9zdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBIb21lUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbPD48Lz5dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q2FyZHMocHJvcHMucG9zdHMucmV2ZXJzZSgpLm1hcCgocG9zdDogUG9zdCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGtleT17cG9zdC5pZH1cclxuICAgICAgICAgIHc9XCIzNTBweFwiXHJcbiAgICAgICAgICBoPVwiNDIwcHhcIlxyXG4gICAgICAgICAgYmdDb2xvcj1cIiNFOUNCQkJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3Bvc3QuYmFubmVyfVxyXG4gICAgICAgICAgICBoPVwiMjQwcHhcIlxyXG4gICAgICAgICAgICB3PVwiMzUwcHhcIlxyXG4gICAgICAgICAgICBhbHQ9XCJGb3RvIFBlcmZpbCBNb25pcXVlIEJhdGlzdGFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdz1cIjMyNXB4XCJcclxuICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIlJvYm90b1wiXHJcbiAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBwbD1cIjEwcHhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTRweFwiXHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgIG10PVwiMThweFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQdWJsaWNhZG8gZW06IHtwb3N0LnVwZGF0ZUF0fVxyXG5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICBhcz1cImgzXCJcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIzMnB4XCJcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgbWI9XCIxMHB4XCJcclxuICAgICAgICAgICAgICBpc1RydW5jYXRlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE0cHhcIlxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICBoPVwiNDhweFwiXHJcbiAgICAgICAgICAgICAgbm9PZkxpbmVzPXszfVxyXG4gICAgICAgICAgICAgIG1iPVwiMjBweFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17YC9ibG9nLyR7cG9zdC5pZH1gfVxyXG4gICAgICAgICAgICAgIG1sPVwiMTEwcHhcIlxyXG4gICAgICAgICAgICAgIHc9XCIxMTBweFwiXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMjRweFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCJMZWlhIE1haXMgPj5cIn1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIClcclxuICAgIH0pKVxyXG4gIH0sIFtwcm9wcy5wb3N0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBtdD1cIjMycHhcIlxyXG4gICAgICAgIHc9XCIxMjEwcHhcIlxyXG4gICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgaD1cIjU2MHB4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIG10PVwiMjBweFwiXHJcbiAgICAgICAgICB3PVwiMzEwcHhcIlxyXG4gICAgICAgICAgaD1cIjQ5MHB4XCJcclxuICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCBibGFja1wiXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxODJweFwiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgbWw9XCIxMHB4XCJcclxuICAgICAgICAgIHNyYz17cHJvcHMucGhvdG99XHJcbiAgICAgICAgICBhbHQ9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICB3PVwiMzEwcHhcIlxyXG4gICAgICAgICAgaD1cIjUwMHB4XCJcclxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjE4MnB4XCJcclxuICAgICAgICAgIG10PVwiMTBweFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgbWw9XCI1MHB4XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICBhcz1cImgxXCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvb2tpZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMTQ0cHhcIlxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMTYwcHhcIlxyXG4gICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJSb2JvdG9cIlxyXG4gICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgbGluZUhlaWdodD1cIjIxcHhcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFVub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlBzaWNvbMOzZ2E8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5Qc2ljYW5hbGlzdGE8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5BdmFsaWHDp8OjbyBQc2ljb2zDs2dpY2E8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcblxyXG4gICAgICAgICAgICA8VGV4dCBtdD1cIjIwcHhcIiBtbD1cIjIwcHhcIj5DUlAgMDcvMjk1MDQ8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbXQ9XCIzMHB4XCJcclxuICAgICAgICAgICAgdz1cIjE4NXB4XCJcclxuICAgICAgICAgICAgaD1cIjE4NXB4XCJcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgICAgYmdDb2xvcj1cIiNFOUNCQkJcIlxyXG4gICAgICAgICAgICBmb250RmFtaWx5PVwiQ29ybW9yYW50IEdhcmFtb25kXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIzMnB4XCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMzlweFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTBkZWcpXCJcclxuXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBoPVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgIHc9XCIxODVweFwiXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkICM0NzQ1NDQ7XCJcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxyXG4gICAgICAgICAgICAgIG1sPVwiMTVweFwiXHJcbiAgICAgICAgICAgICAgbXQ9XCIxNXB4XCJcclxuICAgICAgICAgICAgICBmaWx0ZXI9XCJkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiA5OTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBBZ2VuZGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBoPVwiNTY1cHhcIlxyXG4gICAgICAgIHc9XCJmdWxsXCJcclxuICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgIGJnQ29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHc9XCI3NjVweFwiXHJcbiAgICAgICAgICBmb250RmFtaWx5PVwiUm9ib3RvXCJcclxuICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMThweFwiXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0PVwiMjFweFwiXHJcbiAgICAgICAgICBjb2xvcj1cIiNGOEYxRjFcIlxyXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRleHQgbXQ9XCI0MHB4XCI+XHJcbiAgICAgICAgICAgIEEgYnVzY2EgcGVsYSBzdWEgcHLDs3ByaWEgaWRlbnRpZmljYcOnw6NvIG5hIGFkb2xlc2NlbmNpYSDDqSB1bWEgdGFyZWZhIGluY2Vzc2FudGUsIGUgcGFyYSB0YWwsIHBvZGUtc2UgY29udGFyIGNvbSBvIGF1eMOtbGlvIGRhIHRlcmFwaWEsIHBvc3NvIHRlIGFqdWRhciBjb20gYSBtaW5oYSBleHBlcmllbmNpYSBlbSBjbMOtbmljYSBlIGFnb3JhIGxldmFuZG8gaXNzbyBwYXJhIG8gb24gbGluZS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IG10PVwiMjFweFwiPlxyXG4gICAgICAgICAgICBTZSB2b2PDqiBlc3TDoSBzZW50aW5kby1zZSBwZXJkaWRvIGUgc2VtIHByb3DDs3NpdG8sIHBvZGUgY29udGFyIGNvbWlnbyBwYXJhIHRlIGFqdWRhciBhIGNvbXByZWVuZGVyIHF1ZSB0dWFzIGTDunZpZGFzIGUgaW5xdWlldGHDp2HDtWVzIGZhemVtIHBhcnRlIGRlc3RlIHByb2Nlc3NvIGRhIGFkb2xlc2PDqm5jaWEuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBtdD1cIjIxcHhcIj5cclxuICAgICAgICAgICAgQXR1byB0YW1iw6ltIGNvbSBmYW3DrWxpYSBlIGNvbmZsaXRvcyBnZXJhZG9zIGRlc3RhLCBhanVkYW5kbyBhcyBmYW3DrWxpYXMgZW0gdW0gcHJvY2Vzc28gZGUgY29uaGVjaW1lbnRvIGUgcmVzdGF1cmHDp8OjbyBkZSBsYcOnb3Mgb3UgZGUgaGFybW9uaWEgcGFyYSBvcyBzZXVzIGludGVncmFudGVzLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgdz1cIjcxMHB4XCJcclxuICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJjb21wb25lbnRfMS5wbmdcIlxyXG4gICAgICAgICAgICB3PVwiNjcxcHhcIlxyXG4gICAgICAgICAgICBoPVwiMzYycHhcIlxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgdG9wPVwiNzEwcHhcIlxyXG4gICAgICAgICAgICBsZWZ0PVwiNDIwcHhcIlxyXG4gICAgICAgICAgICBhbHQ9XCJjb21wb25lbnRfMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgbXQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgbWw9XCItMzRweFwiXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJDb3Jtb3JhbnQgR2FyYW1vbmRcIlxyXG4gICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIyMnB4XCJcclxuICAgICAgICAgICAgbGluZUhlaWdodD1cIjI4cHhcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRXUgUG9zc28gQWp1ZGFyXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG10PVwiMTIwcHhcIlxyXG4gICAgICAgICAgICB3PVwiMTg1cHhcIlxyXG4gICAgICAgICAgICBoPVwiMTg1cHhcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxyXG4gICAgICAgICAgICBiZ0NvbG9yPVwiI0U5Q0JCQlwiXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJDb3Jtb3JhbnQgR2FyYW1vbmRcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjMycHhcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIzOXB4XCJcclxuICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKC0xMGRlZylcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgaD1cIjE4NXB4XCJcclxuICAgICAgICAgICAgICB3PVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjRjhGMUYxO1wiXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgICAgICBtbD1cIjE1cHhcIlxyXG4gICAgICAgICAgICAgIG10PVwiMTVweFwiXHJcbiAgICAgICAgICAgICAgZmlsdGVyPVwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogOTk5OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgQWdlbmRlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgdz1cIjEyMTBweFwiXHJcbiAgICAgICAgaD1cIjQ4MHB4XCJcclxuICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgIGFzPVwiaDJcIlxyXG4gICAgICAgICAgbXQ9XCIzMHB4XCJcclxuICAgICAgICAgIGZvbnRGYW1pbHk9XCJDb3Jtb3JhbnQgR2FyYW1vbmRcIlxyXG4gICAgICAgICAgZm9udFNpemU9XCIzNnB4XCJcclxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgIGxpbmVIZWlnaHQ9XCI0NHB4XCJcclxuICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ29tbyBldSBwb3NzbyBhanVkYXI/XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBtdD1cIjM1cHhcIlxyXG4gICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgIHc9XCIxMjEwcHhcIlxyXG5cclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtZXZlbmx5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjcycHhcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI3MnB4XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI0U5Q0JCQlwiXHJcbiAgICAgICAgICAgICAgICBtdD1cIi0yNnB4XCJcclxuICAgICAgICAgICAgICAgIG1yPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiUm9ib3RvXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxOHB4XCIgbGluZUhlaWdodD1cIjIxcHhcIiBtYj1cIjE0cHhcIj5JbmRlbnRpZmljYXI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE0cHhcIiBsaW5lSGVpZ2h0PVwiMTZweFwiIHc9XCIzMDBweFwiPklkZW50aWZpY2FyIG9zIG1vdGl2b3MgZG8gcHJvYmxlbWEsIGEgZXNzw6puY2lhIGRvIHF1ZSBlc3TDoSBhY29udGVjZW5kby48L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBtdD1cIjM1cHhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJDb3Jtb3JhbnQgR2FyYW1vbmRcIlxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCI3MnB4XCJcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiNzJweFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNFOUNCQkJcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCItMjZweFwiXHJcbiAgICAgICAgICAgICAgICBtcj1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIlJvYm90b1wiXHJcbiAgICAgICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0NzQ1NDRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMThweFwiIGxpbmVIZWlnaHQ9XCIyMXB4XCIgbWI9XCIxNHB4XCI+RW50ZW5kZXIgb3MgT3V0cm9zPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxNHB4XCIgbGluZUhlaWdodD1cIjE2cHhcIiB3PVwiMzAwcHhcIj5EZXNjb2JyaXIgY29tbyBsaWRhciBjb20gb3MgZmF0b3JlcyBleHRlcm5vcywgZSBjb21vIHJlc3BvbmRlciBhZGVxdWFkYW1lbnRlLjwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIG10PVwiMzVweFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjcycHhcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI3MnB4XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI0U5Q0JCQlwiXHJcbiAgICAgICAgICAgICAgICBtdD1cIi0yNnB4XCJcclxuICAgICAgICAgICAgICAgIG1yPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiUm9ib3RvXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxOHB4XCIgbGluZUhlaWdodD1cIjIxcHhcIiBtYj1cIjE0cHhcIj5FbnRlbmRlciBhIFNpIE1lc21vPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxNHB4XCIgbGluZUhlaWdodD1cIjE2cHhcIiB3PVwiMzAwcHhcIj5EZXNjb2JyaXIgY29tbyBsaWRhciBjb20gc2V1cyBwcm9ibGVtYXMgZSB0b21hciBhIGRlY2lzw6NvIGNlcnRhLjwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiY29tcG9uZW50XzIucG5nXCJcclxuICAgICAgICAgICAgdz1cIjIxOHB4XCJcclxuICAgICAgICAgICAgaD1cIjEzNXB4XCJcclxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgIHRvcD1cIjEyNDBweFwiXHJcbiAgICAgICAgICAgIGxlZnQ9XCIxMDgwcHhcIlxyXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTEwZGVnKVwiXHJcbiAgICAgICAgICAgIGFsdD1cImNvbXBvbmVudF8yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIG10PVwiNjBweFwiXHJcblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjcycHhcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI3MnB4XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI0U5Q0JCQlwiXHJcbiAgICAgICAgICAgICAgICBtdD1cIi0yNnB4XCJcclxuICAgICAgICAgICAgICAgIG1yPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiUm9ib3RvXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxOHB4XCIgbGluZUhlaWdodD1cIjIxcHhcIiBtYj1cIjE0cHhcIj5TZXIgRmVsaXo8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE0cHhcIiBsaW5lSGVpZ2h0PVwiMTZweFwiIHc9XCIzMDBweFwiPkRlc2NvYnJpciBvIHF1ZSBlc3RhIGZhbHRhbmRvIHBhcmEgYSBmZWxpY2lkYWRlLCBlIGNvbW8gY29tZcOnYXIuPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgbXQ9XCIzNXB4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiQ29ybW9yYW50IEdhcmFtb25kXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiNzJweFwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjcycHhcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjRTlDQkJCXCJcclxuICAgICAgICAgICAgICAgIG10PVwiLTI2cHhcIlxyXG4gICAgICAgICAgICAgICAgbXI9XCIyMHB4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJSb2JvdG9cIlxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE4cHhcIiBsaW5lSGVpZ2h0PVwiMjFweFwiIG1iPVwiMTRweFwiPlRlcmFwaWE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE0cHhcIiBsaW5lSGVpZ2h0PVwiMTZweFwiIHc9XCIzMDBweFwiPlJlZXNjcmV2ZXIgc3VhIGNvbmZpZ3VyYcOnw6NvLCB0cmFiYWxoYW5kbyBzZXVzIG1lZG9zIGUgdHJhdW1hcy48L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBtdD1cIjM1cHhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJDb3Jtb3JhbnQgR2FyYW1vbmRcIlxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCI3MnB4XCJcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiNzJweFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNFOUNCQkJcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCItMjZweFwiXHJcbiAgICAgICAgICAgICAgICBtcj1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIlJvYm90b1wiXHJcbiAgICAgICAgICAgICAgICBmb250U3R5bGU9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM0NzQ1NDRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMThweFwiIGxpbmVIZWlnaHQ9XCIyMXB4XCIgbWI9XCIxNHB4XCI+RmFsYXI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE0cHhcIiBsaW5lSGVpZ2h0PVwiMTZweFwiIHc9XCIzMDBweFwiPkFicmlyLXNlIHBhcmEgdW0gcHJvZmlzc2lvbmFsIHF1ZSBpcsOhIGVzY3V0YXIgbyBxdWUgdm9jw6ogZGl6IHNlbSBtZWRvIGRlIGp1bGdhbWVudG9zLjwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGJvcmRlclk9XCIycHggc29saWQgIzQ3NDU0NFwiXHJcbiAgICAgICAgYmdJbWFnZT1cIjU3LnBuZ1wiXHJcbiAgICAgICAgYmdQb3NpdGlvbj1cIjBweFwiXHJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgIGg9XCI3NTBweFwiXHJcbiAgICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgdz1cIjExMTBweFwiXHJcbiAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgbWw9XCIxMjBweFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIzNnB4XCJcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjQ0cHhcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzQ3NDU0NDtcIlxyXG4gICAgICAgICAgICAgIG10PVwiMjhweFwiXHJcblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgw5psdGltYXMgcG9zdGFnZW5zXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwibGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgIHc9XCIyODBweFwiXHJcbiAgICAgICAgICAgICAgaD1cIjFweFwiXHJcbiAgICAgICAgICAgICAgbXQ9XCIxMHB4XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJsaW5lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgdz1cIjExMTBweFwiXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjYXJkc31cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgdz1cIjE4NXB4XCJcclxuICAgICAgICAgICAgaD1cIjE4NXB4XCJcclxuICAgICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG10PVwiMTVweFwiXHJcbiAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICB3PVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgIGg9XCIxODVweFwiXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgICAgICBiZ0NvbG9yPVwiI0U5Q0JCQlwiXHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseT1cIkNvcm1vcmFudCBHYXJhbW9uZFwiXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIzMnB4XCJcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgZm9udFN0eWxlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMzlweFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjNDc0NTQ0XCJcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTEwZGVnKVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9ibG9nXCJcclxuICAgICAgICAgICAgICAgIGg9XCIxODVweFwiXHJcbiAgICAgICAgICAgICAgICB3PVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgIzQ3NDU0NDtcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgIG1sPVwiMTVweFwiXHJcbiAgICAgICAgICAgICAgICBtdD1cIjE1cHhcIlxyXG4gICAgICAgICAgICAgICAgZmlsdGVyPVwiZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgQWNlc3NlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHtSaWNoVGV4dH0gZnJvbSBcInByaXNtaWMtZG9tXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFBvc3QgZXh0ZW5kcyBBcnJheTxhbnk+e1xyXG4gICAgdWlkOiBzdHJpbmcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZyxcclxuICAgICAgICBiYW5uZXI6IHtcclxuICAgICAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OmFueVxyXG4gICAgfVxyXG4gICAgbGFzdF9wdWJsaWNhdGlvbl9kYXRlOnN0cmluZ1xyXG4gIH1cclxuXHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0cyhyZXN1bHRzOiBhbnkgKSB7XHJcblxyXG4gICAgY29uc3QgUG9zdHMgPSByZXN1bHRzLm1hcCgocG9zdDogUG9zdCApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHBvc3QudWlkLFxyXG4gICAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocG9zdC5kYXRhLnRpdGxlKSxcclxuICAgICAgICBiYW5uZXI6IHBvc3QuZGF0YS5iYW5uZXIudXJsLFxyXG4gICAgICAgIGNvbnRlbnQ6IHBvc3QuZGF0YS5jb250ZW50LmZpbmQoKGNvbnRlbnQ6IHsgdHlwZTogc3RyaW5nIH0pID0+IGNvbnRlbnQudHlwZSA9PT0gJ3BhcmFncmFwaCcpPy50ZXh0ID8/ICcnLFxyXG4gICAgICAgIHVwZGF0ZUF0OiBuZXcgRGF0ZShwb3N0Lmxhc3RfcHVibGljYXRpb25fZGF0ZSBhcyBzdHJpbmcpLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XHJcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG4gICAgcmV0dXJuIFBvc3RzXHJcbn1cclxuIiwiaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKSB7XHJcbiAgICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQocHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCBhcyBzdHJpbmcsIHsgcmVxIH0pXHJcbiAgICByZXR1cm4gcHJpc21pY1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21pY2lvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWljLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkZsZXgiLCJMaW5rIiwiSW1hZ2UiLCJIZWFkaW5nIiwiVGV4dCIsIkJ1dHRvbiIsIkJveCIsIlVub3JkZXJlZExpc3QiLCJMaXN0SXRlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0UHJpc21pY0NsaWVudCIsIlByaXNtaWMiLCJSaWNoVGV4dCIsImdldFBvc3RzIiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWljIiwiaG9tZSIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0IiwicGFnZVNpemUiLCJibG9nIiwicHJvcHMiLCJuYW1lIiwiYXNUZXh0IiwicmVzdWx0cyIsImRhdGEiLCJub21lIiwicGhvdG8iLCJ1cmwiLCJlbWFpbCIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwidGVsZWZvbmUiLCJwb3N0cyIsInJldmFsaWRhdGUiLCJIb21lIiwiY2FyZHMiLCJzZXRDYXJkcyIsInJldmVyc2UiLCJtYXAiLCJwb3N0IiwiYmFubmVyIiwidXBkYXRlQXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJQb3N0cyIsInVpZCIsImZpbmQiLCJ0eXBlIiwidGV4dCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZXEiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUFJJU01JQ19FTkRQT0lOVCJdLCJzb3VyY2VSb290IjoiIn0=
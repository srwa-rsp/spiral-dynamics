"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/components/Navbar.tsx":
/*!*****************************************!*\
  !*** ./src/pages/components/Navbar.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineClose_AiOutlineMenu_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineClose,AiOutlineMenu!=!react-icons/ai */ \"__barrel_optimize__?names=AiOutlineClose,AiOutlineMenu!=!./node_modules/react-icons/ai/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleNav = ()=>{\n        setNav(!nav);\n    };\n    // Array containing navigation items\n    const navItems = [\n        {\n            id: 1,\n            text: \"Home\"\n        },\n        {\n            id: 2,\n            text: \"Spiral Test\"\n        },\n        {\n            id: 3,\n            text: \"AI Assistant\"\n        },\n        {\n            id: 4,\n            text: \"About\"\n        },\n        {\n            id: 5,\n            text: \"Contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] flex justify-between items-center h-16 w-full mx-auto px-4 mb-10 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \" w-fit text-3xl font-bold bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] text-transparent bg-clip-text\",\n                children: \"Spiral Dynamics\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"hidden md:flex\",\n                children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"px-4 py-2 hover:bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] rounded-xl m-2 cursor-pointer duration-300 hover:text-black whitespace-nowrap\",\n                        children: item.text\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleNav,\n                className: \"block md:hidden\",\n                children: nav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineClose_AiOutlineMenu_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineClose, {\n                    size: 20\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 16\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineClose_AiOutlineMenu_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineMenu, {\n                    size: 20\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 47\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: nav ? \"fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500\" : \"ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"w-full text-3xl font-bold bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] text-transparent bg-clip-text m-4\",\n                        children: \"Spiral Dynamics\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border-b rounded-xl px-4 py-2 hover:bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] duration-300 hover:text-black cursor-pointer border-gray-600\",\n                            children: item.text\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srwar\\\\projects\\\\MyProjects\\\\Personal Peroject\\\\spiral\\\\src\\\\pages\\\\components\\\\Navbar.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"Wisi6VrmgnoccnkciwYgmZFzI3E=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ3VCO0FBRS9ELE1BQU1JLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFVO0lBRXhDLE1BQU1NLFlBQVk7UUFDaEJELE9BQU8sQ0FBQ0Q7SUFDVjtJQUVBLG9DQUFvQztJQUNwQyxNQUFNRyxXQUFXO1FBQ2Y7WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1FBQU87UUFDdEI7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQWM7UUFDN0I7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQWU7UUFDOUI7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQVE7UUFDdkI7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQVU7S0FDMUI7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF1Rzs7Ozs7OzBCQUNySCw4REFBQ0U7Z0JBQUdGLFdBQVU7MEJBQ1hKLFNBQVNPLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1osOERBQUNDO3dCQUVDTCxXQUFVO2tDQUVUSSxLQUFLTixJQUFJO3VCQUhMTSxLQUFLUCxFQUFFOzs7Ozs7Ozs7OzBCQVNsQiw4REFBQ0U7Z0JBQUlPLFNBQVNYO2dCQUFXSyxXQUFVOzBCQUNoQ1Asb0JBQU0sOERBQUNILDhHQUFjQTtvQkFBQ2lCLE1BQU07Ozs7OzhDQUFTLDhEQUFDaEIsNkdBQWFBO29CQUFDZ0IsTUFBTTs7Ozs7Ozs7Ozs7MEJBSTdELDhEQUFDTDtnQkFDQ0YsV0FDRVAsTUFDSSxpSEFDQTs7a0NBSU4sOERBQUNRO3dCQUFHRCxXQUFVO2tDQUEyRzs7Ozs7O29CQUd4SEosU0FBU08sR0FBRyxDQUFDQyxDQUFBQSxxQkFDWiw4REFBQ0M7NEJBRUNMLFdBQVU7c0NBRVRJLEtBQUtOLElBQUk7MkJBSExNLEtBQUtQLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hCO0dBMURNTDtLQUFBQTtBQTRETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZiYXIudHN4PzdjZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXROYXYoIW5hdik7XHJcbiAgfTtcclxuXHJcbiAgLy8gQXJyYXkgY29udGFpbmluZyBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAgY29uc3QgbmF2SXRlbXMgPSBbXHJcbiAgICB7IGlkOiAxLCB0ZXh0OiAnSG9tZScgfSxcclxuICAgIHsgaWQ6IDIsIHRleHQ6ICdTcGlyYWwgVGVzdCcgfSxcclxuICAgIHsgaWQ6IDMsIHRleHQ6ICdBSSBBc3Npc3RhbnQnIH0sXHJcbiAgICB7IGlkOiA0LCB0ZXh0OiAnQWJvdXQnIH0sXHJcbiAgICB7IGlkOiA1LCB0ZXh0OiAnQ29udGFjdCcgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBiZy1ncmFkaWVudC10by1yIGZyb20tWyNjNmJhNmFdIHRvLVsjNTdiY2NjXSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaC0xNiB3LWZ1bGwgbXgtYXV0byBweC00IG1iLTEwIHRleHQtd2hpdGUnPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPScgdy1maXQgdGV4dC0zeGwgZm9udC1ib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bI2M2YmE2YV0gdG8tWyM1N2JjY2NdIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0Jz5TcGlyYWwgRHluYW1pY3M8L2gxPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6ZmxleCc+XHJcbiAgICAgICAge25hdkl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNCBweS0yIGhvdmVyOmJnLWdyYWRpZW50LXRvLXIgZnJvbS1bI2M2YmE2YV0gdG8tWyM1N2JjY2NdIHJvdW5kZWQteGwgbS0yIGN1cnNvci1wb2ludGVyIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsYWNrIHdoaXRlc3BhY2Utbm93cmFwJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBJY29uICovfVxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZU5hdn0gY2xhc3NOYW1lPSdibG9jayBtZDpoaWRkZW4nPlxyXG4gICAgICAgIHtuYXYgPyA8QWlPdXRsaW5lQ2xvc2Ugc2l6ZT17MjB9IC8+IDogPEFpT3V0bGluZU1lbnUgc2l6ZT17MjB9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBNZW51ICovfVxyXG4gICAgICA8dWxcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgbmF2XHJcbiAgICAgICAgICAgID8gJ2ZpeGVkIG1kOmhpZGRlbiBsZWZ0LTAgdG9wLTAgdy1bNjAlXSBoLWZ1bGwgYm9yZGVyLXIgYm9yZGVyLXItZ3JheS05MDAgYmctWyMwMDAzMDBdIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMCdcclxuICAgICAgICAgICAgOiAnZWFzZS1pbi1vdXQgdy1bNjAlXSBkdXJhdGlvbi01MDAgZml4ZWQgdG9wLTAgYm90dG9tLTAgbGVmdC1bLTEwMCVdJ1xyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBNb2JpbGUgTG9nbyAqL31cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd3LWZ1bGwgdGV4dC0zeGwgZm9udC1ib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bI2M2YmE2YV0gdG8tWyM1N2JjY2NdIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IG0tNCc+U3BpcmFsIER5bmFtaWNzPC9oMT5cclxuXHJcbiAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uIEl0ZW1zICovfVxyXG4gICAgICAgIHtuYXZJdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1iIHJvdW5kZWQteGwgcHgtNCBweS0yIGhvdmVyOmJnLWdyYWRpZW50LXRvLXIgZnJvbS1bI2M2YmE2YV0gdG8tWyM1N2JjY2NdIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIGJvcmRlci1ncmF5LTYwMCdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWlPdXRsaW5lQ2xvc2UiLCJBaU91dGxpbmVNZW51IiwiTmF2YmFyIiwibmF2Iiwic2V0TmF2IiwiaGFuZGxlTmF2IiwibmF2SXRlbXMiLCJpZCIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwib25DbGljayIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/Navbar.tsx\n"));

/***/ })

});
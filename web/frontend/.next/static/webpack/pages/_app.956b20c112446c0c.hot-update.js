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

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar NavBar = function() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchValue = _useState[0], setSearchValue = _useState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var onSearch = function(e) {\n        e.preventDefault();\n        router.push(\"/search?q=\".concat(encodeURIComponent(searchValue)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n        pl: \"10vw\",\n        pr: \"10vw\",\n        w: \"100%\",\n        alignItems: \"center\",\n        justifyContent: \"flex-start\",\n        bgColor: \"#f5f5f5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontFamily: \"DM Sans\",\n                fontSize: \"48px\",\n                fontWeight: \"black\",\n                children: \"Docs Hotkey\"\n            }, void 0, false, {\n                fileName: \"/home/zack/docs-hotkey/web/frontend/components/NavBar.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/zack/docs-hotkey/web/frontend/components/NavBar.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/zack/docs-hotkey/web/frontend/components/NavBar.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavBar, \"GklvEnRCjCvK7f3OY/+a+RVrHFc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUErQztBQUNLO0FBQ2I7QUFDWDtBQUU1QixJQUFNSyxTQUFhLFdBQU07O0lBQ3ZCLElBQXNDTCxZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBeENNLGNBQStCTixjQUFsQk8saUJBQWtCUDtJQUN0QyxJQUFNUSxTQUFTTCxzREFBU0E7SUFFeEIsSUFBTU0sV0FBVyxTQUFDQyxHQUFpQjtRQUNqQ0EsRUFBRUMsY0FBYztRQUNoQkgsT0FBT0ksSUFBSSxDQUFDLGFBQTZDLE9BQWhDQyxtQkFBbUJQO0lBQzlDO0lBRUEscUJBQ0UsOERBQUNMLGtEQUFJQTtRQUFDYSxJQUFHO1FBQU9DLElBQUc7UUFBT0MsR0FBRTtRQUFPQyxZQUFXO1FBQVNDLGdCQUFlO1FBQWFDLFNBQVE7a0JBQ3pGLDRFQUFDZixrREFBSUE7WUFBQ2dCLE1BQUs7c0JBQ1QsNEVBQUNsQixrREFBSUE7Z0JBQUNtQixZQUFXO2dCQUFVQyxVQUFTO2dCQUFPQyxZQUFXOzBCQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FBTXRFO0dBbEJNbEI7O1FBRVdGLGtEQUFTQTs7O0tBRnBCRTtBQW9CTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci50c3g/MzAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmxleCwgSW5wdXQsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE5hdkJhcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qgb25TZWFyY2ggPSAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hWYWx1ZSl9YClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZsZXggcGw9JzEwdncnIHByPScxMHZ3JyB3PScxMDAlJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnlDb250ZW50PSdmbGV4LXN0YXJ0JyBiZ0NvbG9yPScjZjVmNWY1Jz5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICA8VGV4dCBmb250RmFtaWx5PSdETSBTYW5zJyBmb250U2l6ZT0nNDhweCcgZm9udFdlaWdodD0nYmxhY2snPlxuICAgICAgICBEb2NzIEhvdGtleVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0xpbms+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmxleCIsIlRleHQiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTmF2QmFyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInJvdXRlciIsIm9uU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInBsIiwicHIiLCJ3IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmdDb2xvciIsImhyZWYiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n"));

/***/ })

});
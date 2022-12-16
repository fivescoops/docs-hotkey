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

/***/ "./components/NavItem.tsx":
/*!********************************!*\
  !*** ./components/NavItem.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NavItem = function(param) {\n    var title = param.title, path = param.path, currentPath = param.currentPath;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        borderRadius: \"5px 0 0 5px\",\n        bg: currentPath === path ? \"#d6e7ff\" : undefined,\n        pl: \"2.5vw\",\n        cursor: \"pointer\",\n        onClick: function() {\n            return router.push(path);\n        },\n        transition: \"background 0.5s ease\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n            fontSize: \"14pt\",\n            fontWeight: \"bold\",\n            color: \"#5e6675\",\n            p: \"3px 0\",\n            mb: \"10px\",\n            children: title\n        }, void 0, false, {\n            fileName: \"/home/zack/docs-hotkey/web/frontend/components/NavItem.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/zack/docs-hotkey/web/frontend/components/NavItem.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFDK0M7QUFDUjtBQVF2QyxJQUFNRyxVQUFxQixnQkFBa0M7UUFBL0JDLGNBQUFBLE9BQU9DLGFBQUFBLE1BQU1DLG9CQUFBQTs7SUFDekMsSUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDRixpREFBR0E7UUFDRlEsY0FBYTtRQUNiQyxJQUFJSCxnQkFBZ0JELE9BQU8sWUFBWUssU0FBUztRQUNoREMsSUFBRztRQUNIQyxRQUFPO1FBQ1BDLFNBQVM7bUJBQU1OLE9BQU9PLElBQUksQ0FBQ1Q7O1FBQzNCVSxZQUFXO2tCQUVYLDRFQUFDZCxxREFBT0E7WUFBQ2UsVUFBUztZQUFPQyxZQUFXO1lBQU9DLE9BQU07WUFBVUMsR0FBRTtZQUFRQyxJQUFHO3NCQUNyRWhCOzs7Ozs7Ozs7OztBQUlUO0dBaEJNRDs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBa0JOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2SXRlbS50c3g/OWUzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIHBhdGg6IHN0cmluZ1xuICBjdXJyZW50UGF0aDogc3RyaW5nXG59XG5cbmNvbnN0IE5hdkl0ZW06IEZDPFByb3BzPiA9ICh7IHRpdGxlLCBwYXRoLCBjdXJyZW50UGF0aCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYm9yZGVyUmFkaXVzPSc1cHggMCAwIDVweCdcbiAgICAgIGJnPXtjdXJyZW50UGF0aCA9PT0gcGF0aCA/ICcjZDZlN2ZmJyA6IHVuZGVmaW5lZH1cbiAgICAgIHBsPScyLjV2dydcbiAgICAgIGN1cnNvcj0ncG9pbnRlcidcbiAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHBhdGgpfVxuICAgICAgdHJhbnNpdGlvbj0nYmFja2dyb3VuZCAwLjVzIGVhc2UnXG4gICAgPlxuICAgICAgPEhlYWRpbmcgZm9udFNpemU9JzE0cHQnIGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPScjNWU2Njc1JyBwPSczcHggMCcgbWI9JzEwcHgnPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbVxuIl0sIm5hbWVzIjpbIkJveCIsIkhlYWRpbmciLCJ1c2VSb3V0ZXIiLCJOYXZJdGVtIiwidGl0bGUiLCJwYXRoIiwiY3VycmVudFBhdGgiLCJyb3V0ZXIiLCJib3JkZXJSYWRpdXMiLCJiZyIsInVuZGVmaW5lZCIsInBsIiwiY3Vyc29yIiwib25DbGljayIsInB1c2giLCJ0cmFuc2l0aW9uIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJwIiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavItem.tsx\n"));

/***/ })

});
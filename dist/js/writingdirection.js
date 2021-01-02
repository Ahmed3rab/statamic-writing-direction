/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/WritingDirectionButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/WritingDirectionButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [BardToolbarButton],
  data: function data() {
    return {
      getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor)
    };
  },
  methods: {
    setDirection: function setDirection() {
      this.editor.commands.writingDirection({
        direction: this.button.args.direction
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/WritingDirectionButton.vue?vue&type=template&id=59c0a4b3&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/WritingDirectionButton.vue?vue&type=template&id=59c0a4b3& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "inline-block relative" }, [
    _c(
      "button",
      {
        directives: [
          {
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.button.text,
            expression: "button.text"
          }
        ],
        staticClass: "bard-toolbar-button",
        class: {
          active:
            _vm.getMarkAttrs("writingDirection").direction ===
            this.button.args.direction
        },
        on: {
          click: function($event) {
            return _vm.setDirection()
          }
        }
      },
      [
        this.button.args.direction === "ltr"
          ? _c(
              "svg",
              {
                attrs: {
                  height: "1rem",
                  viewBox: "0 0 512 512",
                  width: "1rem",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "m277.332031 362.667969c-11.796875 0-21.332031-9.539063-21.332031-21.335938v-320c0-11.796875 9.535156-21.332031 21.332031-21.332031s21.335938 9.535156 21.335938 21.332031v320c0 11.796875-9.539063 21.335938-21.335938 21.335938zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m213.332031 362.667969c-11.796875 0-21.332031-9.539063-21.332031-21.335938v-320c0-11.796875 9.535156-21.332031 21.332031-21.332031s21.335938 9.535156 21.335938 21.332031v320c0 11.796875-9.539063 21.335938-21.335938 21.335938zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m213.332031 192h-74.664062c-52.929688 0-96-43.070312-96-96s43.070312-96 96-96h181.332031c11.796875 0 21.332031 9.535156 21.332031 21.332031s-9.535156 21.335938-21.332031 21.335938h-181.332031c-29.421875 0-53.335938 23.914062-53.335938 53.332031s23.914063 53.332031 53.335938 53.332031h74.664062c11.796875 0 21.335938 9.539063 21.335938 21.335938s-9.539063 21.332031-21.335938 21.332031zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m320 362.667969h-149.332031c-11.796875 0-21.335938-9.539063-21.335938-21.335938s9.539063-21.332031 21.335938-21.332031h149.332031c11.796875 0 21.332031 9.535156 21.332031 21.332031s-9.535156 21.335938-21.332031 21.335938zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m506.902344 414.933594-74.667969-69.332032c-3.027344-2.796874-6.933594-4.269531-10.902344-4.269531-2.175781 0-4.328125.449219-6.398437 1.324219-5.824219 2.558594-9.601563 8.320312-9.601563 14.675781v48h-384c-11.796875 0-21.332031 9.539063-21.332031 21.335938s9.535156 21.332031 21.332031 21.332031h384v48c0 6.355469 3.777344 12.117188 9.601563 14.675781 5.824218 2.519531 12.628906 1.386719 17.300781-2.941406l74.667969-69.335937c3.242187-3.027344 5.097656-7.273438 5.097656-11.730469 0-4.460938-1.855469-8.683594-5.097656-11.734375zm0 0"
                  }
                })
              ]
            )
          : _c(
              "svg",
              {
                attrs: {
                  height: "1rem",
                  viewBox: "0 0 512 512",
                  width: "1rem",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "m341.332031 362.667969c-11.796875 0-21.332031-9.539063-21.332031-21.335938v-320c0-11.796875 9.535156-21.332031 21.332031-21.332031s21.335938 9.535156 21.335938 21.332031v320c0 11.796875-9.539063 21.335938-21.335938 21.335938zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m277.332031 362.667969c-11.796875 0-21.332031-9.539063-21.332031-21.335938v-320c0-11.796875 9.535156-21.332031 21.332031-21.332031s21.335938 9.535156 21.335938 21.332031v320c0 11.796875-9.539063 21.335938-21.335938 21.335938zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m277.332031 192h-74.664062c-52.929688 0-96-43.070312-96-96s43.070312-96 96-96h181.332031c11.796875 0 21.332031 9.535156 21.332031 21.332031s-9.535156 21.335938-21.332031 21.335938h-181.332031c-29.421875 0-53.335938 23.914062-53.335938 53.332031s23.914063 53.332031 53.335938 53.332031h74.664062c11.796875 0 21.335938 9.539063 21.335938 21.335938s-9.539063 21.332031-21.335938 21.332031zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m384 362.667969h-149.332031c-11.796875 0-21.335938-9.539063-21.335938-21.335938s9.539063-21.332031 21.335938-21.332031h149.332031c11.796875 0 21.332031 9.535156 21.332031 21.332031s-9.535156 21.335938-21.332031 21.335938zm0 0"
                  }
                }),
                _c("path", {
                  attrs: {
                    d:
                      "m490.667969 405.332031h-384v-48c0-6.355469-3.777344-12.117187-9.601563-14.675781-2.070312-.875-4.222656-1.324219-6.398437-1.324219-3.96875 0-7.875 1.472657-10.902344 4.269531l-74.667969 69.332032c-3.242187 3.050781-5.097656 7.296875-5.097656 11.734375s1.855469 8.703125 5.097656 11.730469l74.667969 69.335937c4.671875 4.328125 11.457031 5.4375 17.300781 2.941406 5.824219-2.539062 9.601563-8.296875 9.601563-14.675781v-48h384c11.796875 0 21.332031-9.535156 21.332031-21.332031s-9.535156-21.335938-21.332031-21.335938zm0 0"
                  }
                })
              ]
            )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/WritingDirection.js":
/*!******************************************!*\
  !*** ./resources/js/WritingDirection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WritingDirection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var commands = Statamic.$bard.tiptap.core;
var markInputRule = commands.markInputRule;

var WritingDirection = /*#__PURE__*/function () {
  function WritingDirection() {
    _classCallCheck(this, WritingDirection);
  }

  _createClass(WritingDirection, [{
    key: "name",
    value: function name() {
      return "writingDirection";
    }
  }, {
    key: "schema",
    value: function schema() {
      return {
        attrs: {
          direction: {
            "default": "ltr"
          }
        },
        parseDOM: [{
          style: "direction",
          getAttrs: function getAttrs(value) {
            return {
              direction: value
            };
          }
        }],
        toDOM: function toDOM(mark) {
          return ["span", {
            style: "direction: ".concat(mark.attrs.direction, "; display: block")
          }, 0];
        }
      };
    }
  }, {
    key: "commands",
    value: function commands(_ref) {
      var type = _ref.type,
          updateMark = _ref.updateMark;
      return function (attrs) {
        return updateMark(type, attrs);
      };
    }
  }, {
    key: "pasteRules",
    value: function pasteRules(_ref2) {
      var type = _ref2.type;
      return [];
    }
  }, {
    key: "inputRules",
    value: function inputRules(_ref3) {
      var type = _ref3.type;
      return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)];
    }
  }, {
    key: "plugins",
    value: function plugins() {
      return [];
    }
  }]);

  return WritingDirection;
}();



/***/ }),

/***/ "./resources/js/WritingDirectionButton.vue":
/*!*************************************************!*\
  !*** ./resources/js/WritingDirectionButton.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WritingDirectionButton_vue_vue_type_template_id_59c0a4b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WritingDirectionButton.vue?vue&type=template&id=59c0a4b3& */ "./resources/js/WritingDirectionButton.vue?vue&type=template&id=59c0a4b3&");
/* harmony import */ var _WritingDirectionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WritingDirectionButton.vue?vue&type=script&lang=js& */ "./resources/js/WritingDirectionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WritingDirectionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WritingDirectionButton_vue_vue_type_template_id_59c0a4b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WritingDirectionButton_vue_vue_type_template_id_59c0a4b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/WritingDirectionButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/WritingDirectionButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/WritingDirectionButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WritingDirectionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./WritingDirectionButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/WritingDirectionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WritingDirectionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/WritingDirectionButton.vue?vue&type=template&id=59c0a4b3&":
/*!********************************************************************************!*\
  !*** ./resources/js/WritingDirectionButton.vue?vue&type=template&id=59c0a4b3& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WritingDirectionButton_vue_vue_type_template_id_59c0a4b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./WritingDirectionButton.vue?vue&type=template&id=59c0a4b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/WritingDirectionButton.vue?vue&type=template&id=59c0a4b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WritingDirectionButton_vue_vue_type_template_id_59c0a4b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WritingDirectionButton_vue_vue_type_template_id_59c0a4b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/bard.js":
/*!******************************!*\
  !*** ./resources/js/bard.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WritingDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WritingDirection */ "./resources/js/WritingDirection.js");
/* harmony import */ var _WritingDirectionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WritingDirectionButton */ "./resources/js/WritingDirectionButton.vue");


Statamic.$bard.extend(function (_ref) {
  var mark = _ref.mark;
  return mark(new _WritingDirection__WEBPACK_IMPORTED_MODULE_0__["default"]());
});
Statamic.$bard.buttons(function (buttons) {
  var indexOfBold = _.findIndex(buttons, {
    command: "italic"
  });

  buttons.splice(indexOfBold + 1, 0, {
    name: "LTR",
    text: "Left To Right",
    command: "writingDirection",
    args: {
      direction: "ltr"
    },
    component: _WritingDirectionButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  buttons.splice(indexOfBold + 2, 0, {
    name: "RTL",
    text: "Right To Left",
    command: "writingDirection",
    args: {
      direction: "rtl"
    },
    component: _WritingDirectionButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
});

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./resources/js/bard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmed/code/packages/rtl/resources/js/bard.js */"./resources/js/bard.js");


/***/ })

/******/ });
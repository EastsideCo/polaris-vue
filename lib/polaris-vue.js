(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("PolarisVue", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["PolarisVue"] = factory(require("vue"));
	else
		root["PolarisVue"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_258__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeCase = __webpack_require__(101);

var _changeCase2 = _interopRequireDefault(_changeCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentHelpers = function () {
    function ComponentHelpers() {
        _classCallCheck(this, ComponentHelpers);

        this.componentNameFormat = function (name) {
            return name;
        };
    }

    _createClass(ComponentHelpers, [{
        key: 'setComponentNameFormat',
        value: function setComponentNameFormat(format) {
            this.componentNameFormat = format;
        }
    }, {
        key: 'makeComponentClass',
        value: function makeComponentClass(componentName, properties, state) {
            var classes = {};
            classes[componentName] = true;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var prop = _step.value;

                    var value = state[prop];
                    var valueTag = '';
                    if (value && typeof value === 'string') {
                        valueTag = value.charAt(0).toUpperCase() + value.slice(1);
                    }
                    classes[componentName + '--' + prop + valueTag] = state[prop];
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return classes;
        }
    }, {
        key: 'isNodeOfComponent',
        value: function isNodeOfComponent(node, component) {
            if (!node || !node.componentOptions) {
                return false;
            }

            var nodeComponentTagName = node.componentOptions.tag;
            var componentTagName = this.getComponentName(component.polarisName);

            return nodeComponentTagName == componentTagName;
        }
    }, {
        key: 'getComponentName',
        value: function getComponentName(polarisName) {
            return this.componentNameFormat(polarisName, _changeCase2.default);
        }
    }, {
        key: 'wrapNodesWithComponent',
        value: function wrapNodesWithComponent(createElement, nodes, component) {
            var ignoredComponents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

            var children = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var node = _step2.value;

                    if (!node.tag && !node.text.trim()) {
                        continue;
                    }

                    var added = false;
                    if (this.isNodeOfComponent(node, component)) {
                        added = true;
                        children.push(node);
                    } else {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = ignoredComponents[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var ignored = _step3.value;

                                if (this.isNodeOfComponent(node, ignored)) {
                                    added = true;
                                    children.push(node);
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                    }

                    if (!added) {
                        children.push(createElement(component, {}, [node]));
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return children;
        }
    }]);

    return ComponentHelpers;
}();

exports.default = new ComponentHelpers();
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisIcon_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40b5b950_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisIcon_vue__ = __webpack_require__(99);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisIcon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40b5b950_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisIcon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40b5b950", Component.options)
  } else {
    hotAPI.reload("data-v-40b5b950", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButton_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0646185e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisButton_vue__ = __webpack_require__(120);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButton_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0646185e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0646185e", Component.options)
  } else {
    hotAPI.reload("data-v-0646185e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(8)

var NON_WORD_REGEXP = __webpack_require__(102)
var CAMEL_CASE_REGEXP = __webpack_require__(103)
var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(104)

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace (match, index, value) {
    if (index === 0 || index === (value.length - match.length)) {
      return ''
    }

    return replacement
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str, locale)
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTag_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTag_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTag_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DynamicTag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ded4758", Component.options)
  } else {
    hotAPI.reload("data-v-0ded4758", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
}

/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toUpperCase()
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroup_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a3b0bde_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisButtonGroup_vue__ = __webpack_require__(129);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a3b0bde_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisButtonGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisButtonGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisButtonGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a3b0bde", Component.options)
  } else {
    hotAPI.reload("data-v-7a3b0bde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      '\u0049': '\u0069\u0307',
      '\u004A': '\u006A\u0307',
      '\u012E': '\u012F\u0307',
      '\u00CC': '\u0069\u0307\u0300',
      '\u00CD': '\u0069\u0307\u0301',
      '\u0128': '\u0069\u0307\u0303'
    }
  }
}

/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toLowerCase()
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisUnstyledLink_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisUnstyledLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisUnstyledLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d5dc025_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisUnstyledLink_vue__ = __webpack_require__(211);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisUnstyledLink_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d5dc025_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisUnstyledLink_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisUnstyledLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisUnstyledLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d5dc025", Component.options)
  } else {
    hotAPI.reload("data-v-2d5dc025", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCard_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b233e6f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCard_vue__ = __webpack_require__(130);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCard_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b233e6f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b233e6f", Component.options)
  } else {
    hotAPI.reload("data-v-0b233e6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(6)

/**
 * Upper case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return upperCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroupItem_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroupItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroupItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07b9d2de_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisButtonGroupItem_vue__ = __webpack_require__(128);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisButtonGroupItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07b9d2de_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisButtonGroupItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisButtonGroupItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisButtonGroupItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07b9d2de", Component.options)
  } else {
    hotAPI.reload("data-v-07b9d2de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingAction_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingAction_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingAction_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03817952_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSettingAction_vue__ = __webpack_require__(132);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingAction_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03817952_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSettingAction_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSettingAction.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSettingAction.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03817952", Component.options)
  } else {
    hotAPI.reload("data-v-03817952", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisHeading_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisHeading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisHeading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dfcbd73_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisHeading_vue__ = __webpack_require__(174);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisHeading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dfcbd73_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisHeading_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisHeading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisHeading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dfcbd73", Component.options)
  } else {
    hotAPI.reload("data-v-1dfcbd73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopover_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17a09496_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPopover_vue__ = __webpack_require__(205);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopover_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17a09496_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPopover_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPopover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPopover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17a09496", Component.options)
  } else {
    hotAPI.reload("data-v-17a09496", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RGBColor = __webpack_require__(254);

var _RGBColor2 = _interopRequireDefault(_RGBColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HSBColor = function () {
    function HSBColor(hue, saturation, brightness) {
        var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        _classCallCheck(this, HSBColor);

        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.alpha = alpha;
    }

    _createClass(HSBColor, [{
        key: 'toRGB',
        value: function toRGB() {
            var chroma = this.brightness * this.saturation;
            var huePrime = this.hue / 60;
            var hueDelta = 1 - Math.abs(huePrime % 2 - 1);
            var intermediateValue = chroma * hueDelta;

            var red = 0;
            var green = 0;
            var blue = 0;
            if (huePrime >= 0 && huePrime <= 1) {
                red = chroma;
                green = intermediateValue;
                blue = 0;
            }

            if (huePrime >= 1 && huePrime <= 2) {
                red = intermediateValue;
                green = chroma;
                blue = 0;
            }

            if (huePrime >= 2 && huePrime <= 3) {
                red = 0;
                green = chroma;
                blue = intermediateValue;
            }

            if (huePrime >= 3 && huePrime <= 4) {
                red = 0;
                green = intermediateValue;
                blue = chroma;
            }

            if (huePrime >= 4 && huePrime <= 5) {
                red = intermediateValue;
                green = 0;
                blue = chroma;
            }

            if (huePrime >= 5 && huePrime <= 6) {
                red = chroma;
                green = 0;
                blue = intermediateValue;
            }

            var chromaBrightnessDelta = this.brightness - chroma;
            red += chromaBrightnessDelta;
            green += chromaBrightnessDelta;
            blue += chromaBrightnessDelta;

            return new _RGBColor2.default(Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255), this.alpha);
        }
    }]);

    return HSBColor;
}();

exports.default = HSBColor;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerSlidable_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerSlidable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerSlidable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_beea5e20_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPickerSlidable_vue__ = __webpack_require__(259);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerSlidable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_beea5e20_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPickerSlidable_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisColorPickerSlidable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisColorPickerSlidable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-beea5e20", Component.options)
  } else {
    hotAPI.reload("data-v-beea5e20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    isSameDay: function isSameDay(a, b) {
        return a.getDate() == b.getDate() && a.getMonth() == b.getMonth() && a.getFullYear() == b.getFullYear();
    }
};
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(318)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FILL_REGEX = /fill="[^"]*"/g;
var SVG_REGEX = /(<svg[^>]*>|<\/svg>)/g;
var VIEWBOX_REGEX = /viewBox="([^"]*)"/;

exports.default = {
    create: function create(str, classes) {
        str = str.replace(FILL_REGEX, function (fill) {
            return fill.includes('#FFF') ? 'fill="currentColor"' : '';
        });

        if (classes) {
            str = str.replace(/^<svg /, '<svg class="' + classes + '" ');
        }

        return str;
    },
    parseSVG: function parseSVG(str) {
        return {
            viewBox: VIEWBOX_REGEX.exec(str)[1],
            body: str.replace(SVG_REGEX, '')
        };
    }
};
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSpinner_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSpinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a4b3e3ec_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSpinner_vue__ = __webpack_require__(119);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSpinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a4b3e3ec_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSpinner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSpinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSpinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a4b3e3ec", Component.options)
  } else {
    hotAPI.reload("data-v-a4b3e3ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(6)
var noCase = __webpack_require__(4)

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale)
  })
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_')
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCardSection_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCardSection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCardSection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_92ecb9b4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCardSection_vue__ = __webpack_require__(125);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCardSection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_92ecb9b4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCardSection_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisCardSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisCardSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92ecb9b4", Component.options)
  } else {
    hotAPI.reload("data-v-92ecb9b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSubheading_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSubheading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSubheading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30e860e1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSubheading_vue__ = __webpack_require__(124);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSubheading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30e860e1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSubheading_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSubheading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSubheading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30e860e1", Component.options)
  } else {
    hotAPI.reload("data-v-30e860e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextStyle_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextStyle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextStyle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_375d38b5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextStyle_vue__ = __webpack_require__(134);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextStyle_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_375d38b5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextStyle_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTextStyle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTextStyle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-375d38b5", Component.options)
  } else {
    hotAPI.reload("data-v-375d38b5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionList_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07f75813_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisActionList_vue__ = __webpack_require__(145);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07f75813_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisActionList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisActionList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisActionList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07f75813", Component.options)
  } else {
    hotAPI.reload("data-v-07f75813", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisImage_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisImage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3628368c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisImage_vue__ = __webpack_require__(152);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisImage_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3628368c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisImage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisImage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisImage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3628368c", Component.options)
  } else {
    hotAPI.reload("data-v-3628368c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBadge_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBadge_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBadge_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f247658_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisBadge_vue__ = __webpack_require__(165);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBadge_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f247658_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisBadge_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisBadge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisBadge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f247658", Component.options)
  } else {
    hotAPI.reload("data-v-2f247658", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisThumbnail_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisThumbnail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisThumbnail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_282bf91d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisThumbnail_vue__ = __webpack_require__(170);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisThumbnail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_282bf91d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisThumbnail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisThumbnail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisThumbnail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-282bf91d", Component.options)
  } else {
    hotAPI.reload("data-v-282bf91d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStack_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStack_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStack_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStack_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisStack.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d041d8e", Component.options)
  } else {
    hotAPI.reload("data-v-5d041d8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStackItem_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStackItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStackItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fb245328_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisStackItem_vue__ = __webpack_require__(219);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisStackItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fb245328_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisStackItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisStackItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisStackItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb245328", Component.options)
  } else {
    hotAPI.reload("data-v-fb245328", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDisplayText_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDisplayText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDisplayText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_212cfd80_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDisplayText_vue__ = __webpack_require__(225);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDisplayText_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_212cfd80_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDisplayText_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisDisplayText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisDisplayText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-212cfd80", Component.options)
  } else {
    hotAPI.reload("data-v-212cfd80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonBodyText_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonBodyText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonBodyText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fafdc3b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSkeletonBodyText_vue__ = __webpack_require__(234);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonBodyText_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fafdc3b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSkeletonBodyText_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSkeletonBodyText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSkeletonBodyText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fafdc3b", Component.options)
  } else {
    hotAPI.reload("data-v-4fafdc3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonDisplayText_vue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonDisplayText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonDisplayText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c251073_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSkeletonDisplayText_vue__ = __webpack_require__(236);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonDisplayText_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c251073_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSkeletonDisplayText_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSkeletonDisplayText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSkeletonDisplayText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c251073", Component.options)
  } else {
    hotAPI.reload("data-v-7c251073", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCheckbox_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCheckbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCheckbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_457adbbc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCheckbox_vue__ = __webpack_require__(243);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCheckbox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_457adbbc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCheckbox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisCheckbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-457adbbc", Component.options)
  } else {
    hotAPI.reload("data-v-457adbbc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisRadioButton_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisRadioButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisRadioButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a93fa704_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisRadioButton_vue__ = __webpack_require__(250);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisRadioButton_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a93fa704_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisRadioButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisRadioButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisRadioButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a93fa704", Component.options)
  } else {
    hotAPI.reload("data-v-a93fa704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.707 9.293l-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroup_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0875e502_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisFormLayoutGroup_vue__ = __webpack_require__(283);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroup_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0875e502_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisFormLayoutGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisFormLayoutGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisFormLayoutGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0875e502", Component.options)
  } else {
    hotAPI.reload("data-v-0875e502", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9e58140_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisFormLayoutItem_vue__ = __webpack_require__(282);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9e58140_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisFormLayoutItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisFormLayoutItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisFormLayoutItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9e58140", Component.options)
  } else {
    hotAPI.reload("data-v-f9e58140", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabelled_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabelled_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabelled_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7abb8a14_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLabelled_vue__ = __webpack_require__(290);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabelled_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7abb8a14_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLabelled_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisLabelled.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisLabelled.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7abb8a14", Component.options)
  } else {
    hotAPI.reload("data-v-7abb8a14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CollapseTransition_vue__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CollapseTransition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CollapseTransition_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99631868_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_CollapseTransition_vue__ = __webpack_require__(320);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(316)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CollapseTransition_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99631868_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_CollapseTransition_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/transitions/CollapseTransition.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CollapseTransition.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99631868", Component.options)
  } else {
    hotAPI.reload("data-v-99631868", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceListItem_vue__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceListItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70fb9c5e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisResourceListItem_vue__ = __webpack_require__(336);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceListItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70fb9c5e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisResourceListItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisResourceListItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisResourceListItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70fb9c5e", Component.options)
  } else {
    hotAPI.reload("data-v-70fb9c5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    debug: "development" != 'production',
    logPrefix: '[PolarisVue] '
};
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var map = {
    0: 'DEBUG',
    1: 'INFO',
    2: 'WARN',
    3: 'ERROR',
    4: 'FATAL'
};

var LogLevel = function () {
    function LogLevel() {
        _classCallCheck(this, LogLevel);
    }

    _createClass(LogLevel, [{
        key: 'getMap',
        value: function getMap() {
            return map;
        }
    }, {
        key: 'levelToString',
        value: function levelToString(level) {
            return map[level];
        }
    }, {
        key: 'stringToLevel',
        value: function stringToLevel(str) {
            for (var _key in map) {
                if (map[_key] == str) {
                    return _key;
                }
            }
            return null;
        }
    }]);

    return LogLevel;
}();

for (var key in map) {
    LogLevel.prototype[map[key]] = key;
}

exports.default = new LogLevel();
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _styles = __webpack_require__(50);

var _styles2 = _interopRequireDefault(_styles);

var _PolarisAccountConnection = __webpack_require__(51);

var _PolarisAccountConnection2 = _interopRequireDefault(_PolarisAccountConnection);

var _PolarisActionList = __webpack_require__(28);

var _PolarisActionList2 = _interopRequireDefault(_PolarisActionList);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisButtonGroup = __webpack_require__(7);

var _PolarisButtonGroup2 = _interopRequireDefault(_PolarisButtonGroup);

var _PolarisSettingToggle = __webpack_require__(146);

var _PolarisSettingToggle2 = _interopRequireDefault(_PolarisSettingToggle);

var _PolarisAvatar = __webpack_require__(149);

var _PolarisAvatar2 = _interopRequireDefault(_PolarisAvatar);

var _PolarisBadge = __webpack_require__(30);

var _PolarisBadge2 = _interopRequireDefault(_PolarisBadge);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _PolarisKeyboardKey = __webpack_require__(166);

var _PolarisKeyboardKey2 = _interopRequireDefault(_PolarisKeyboardKey);

var _PolarisThumbnail = __webpack_require__(31);

var _PolarisThumbnail2 = _interopRequireDefault(_PolarisThumbnail);

var _PolarisBanner = __webpack_require__(171);

var _PolarisBanner2 = _interopRequireDefault(_PolarisBanner);

var _PolarisSpinner = __webpack_require__(22);

var _PolarisSpinner2 = _interopRequireDefault(_PolarisSpinner);

var _PolarisProgressBar = __webpack_require__(182);

var _PolarisProgressBar2 = _interopRequireDefault(_PolarisProgressBar);

var _PolarisCalloutCard = __webpack_require__(185);

var _PolarisCalloutCard2 = _interopRequireDefault(_PolarisCalloutCard);

var _PolarisCard = __webpack_require__(10);

var _PolarisCard2 = _interopRequireDefault(_PolarisCard);

var _PolarisEmptyState = __webpack_require__(188);

var _PolarisEmptyState2 = _interopRequireDefault(_PolarisEmptyState);

var _PolarisLayout = __webpack_require__(191);

var _PolarisLayout2 = _interopRequireDefault(_PolarisLayout);

var _PolarisPage = __webpack_require__(194);

var _PolarisPage2 = _interopRequireDefault(_PolarisPage);

var _PolarisPageActions = __webpack_require__(215);

var _PolarisPageActions2 = _interopRequireDefault(_PolarisPageActions);

var _PolarisStack = __webpack_require__(32);

var _PolarisStack2 = _interopRequireDefault(_PolarisStack);

var _PolarisCaption = __webpack_require__(221);

var _PolarisCaption2 = _interopRequireDefault(_PolarisCaption);

var _PolarisDisplayText = __webpack_require__(34);

var _PolarisDisplayText2 = _interopRequireDefault(_PolarisDisplayText);

var _PolarisFooterHelp = __webpack_require__(226);

var _PolarisFooterHelp2 = _interopRequireDefault(_PolarisFooterHelp);

var _PolarisHeading = __webpack_require__(15);

var _PolarisHeading2 = _interopRequireDefault(_PolarisHeading);

var _PolarisSubheading = __webpack_require__(26);

var _PolarisSubheading2 = _interopRequireDefault(_PolarisSubheading);

var _PolarisVisuallyHidden = __webpack_require__(230);

var _PolarisVisuallyHidden2 = _interopRequireDefault(_PolarisVisuallyHidden);

var _PolarisSkeletonBodyText = __webpack_require__(35);

var _PolarisSkeletonBodyText2 = _interopRequireDefault(_PolarisSkeletonBodyText);

var _PolarisSkeletonDisplayText = __webpack_require__(36);

var _PolarisSkeletonDisplayText2 = _interopRequireDefault(_PolarisSkeletonDisplayText);

var _PolarisSkeletonPage = __webpack_require__(237);

var _PolarisSkeletonPage2 = _interopRequireDefault(_PolarisSkeletonPage);

var _PolarisCheckbox = __webpack_require__(37);

var _PolarisCheckbox2 = _interopRequireDefault(_PolarisCheckbox);

var _PolarisChoiceList = __webpack_require__(244);

var _PolarisChoiceList2 = _interopRequireDefault(_PolarisChoiceList);

var _PolarisColorPicker = __webpack_require__(252);

var _PolarisColorPicker2 = _interopRequireDefault(_PolarisColorPicker);

var _PolarisDatePicker = __webpack_require__(265);

var _PolarisDatePicker2 = _interopRequireDefault(_PolarisDatePicker);

var _PolarisFormLayout = __webpack_require__(277);

var _PolarisFormLayout2 = _interopRequireDefault(_PolarisFormLayout);

var _PolarisFormLayoutGroup = __webpack_require__(42);

var _PolarisFormLayoutGroup2 = _interopRequireDefault(_PolarisFormLayoutGroup);

var _PolarisRadioButton = __webpack_require__(38);

var _PolarisRadioButton2 = _interopRequireDefault(_PolarisRadioButton);

var _PolarisSelect = __webpack_require__(284);

var _PolarisSelect2 = _interopRequireDefault(_PolarisSelect);

var _PolarisTag = __webpack_require__(293);

var _PolarisTag2 = _interopRequireDefault(_PolarisTag);

var _PolarisTextField = __webpack_require__(297);

var _PolarisTextField2 = _interopRequireDefault(_PolarisTextField);

var _PolarisCollapsible = __webpack_require__(314);

var _PolarisCollapsible2 = _interopRequireDefault(_PolarisCollapsible);

var _PolarisScrollable = __webpack_require__(322);

var _PolarisScrollable2 = _interopRequireDefault(_PolarisScrollable);

var _PolarisDescriptionList = __webpack_require__(325);

var _PolarisDescriptionList2 = _interopRequireDefault(_PolarisDescriptionList);

var _PolarisList = __webpack_require__(328);

var _PolarisList2 = _interopRequireDefault(_PolarisList);

var _PolarisListItem = __webpack_require__(331);

var _PolarisListItem2 = _interopRequireDefault(_PolarisListItem);

var _PolarisResourceList = __webpack_require__(333);

var _PolarisResourceList2 = _interopRequireDefault(_PolarisResourceList);

var _PolarisResourceListItem = __webpack_require__(46);

var _PolarisResourceListItem2 = _interopRequireDefault(_PolarisResourceListItem);

var _PolarisLink = __webpack_require__(338);

var _PolarisLink2 = _interopRequireDefault(_PolarisLink);

var _PolarisPagination = __webpack_require__(341);

var _PolarisPagination2 = _interopRequireDefault(_PolarisPagination);

var _PolarisTabs = __webpack_require__(344);

var _PolarisTabs2 = _interopRequireDefault(_PolarisTabs);

var _PolarisPopover = __webpack_require__(16);

var _PolarisPopover2 = _interopRequireDefault(_PolarisPopover);

var _PolarisTextStyle = __webpack_require__(27);

var _PolarisTextStyle2 = _interopRequireDefault(_PolarisTextStyle);

var _PolarisSettingAction = __webpack_require__(14);

var _PolarisSettingAction2 = _interopRequireDefault(_PolarisSettingAction);

var _PolarisImage = __webpack_require__(29);

var _PolarisImage2 = _interopRequireDefault(_PolarisImage);

var _PolarisTextContainer = __webpack_require__(347);

var _PolarisTextContainer2 = _interopRequireDefault(_PolarisTextContainer);

var _PolarisBreadcrumbs = __webpack_require__(350);

var _PolarisBreadcrumbs2 = _interopRequireDefault(_PolarisBreadcrumbs);

var _PolarisUnstyledLink = __webpack_require__(9);

var _PolarisUnstyledLink2 = _interopRequireDefault(_PolarisUnstyledLink);

var _PolarisStackItem = __webpack_require__(33);

var _PolarisStackItem2 = _interopRequireDefault(_PolarisStackItem);

var _PolarisCardSection = __webpack_require__(25);

var _PolarisCardSection2 = _interopRequireDefault(_PolarisCardSection);

var _PolarisLayoutSection = __webpack_require__(354);

var _PolarisLayoutSection2 = _interopRequireDefault(_PolarisLayoutSection);

var _PolarisButtonGroupItem = __webpack_require__(13);

var _PolarisButtonGroupItem2 = _interopRequireDefault(_PolarisButtonGroupItem);

var _PolarisLayoutAnnotatedSection = __webpack_require__(357);

var _PolarisLayoutAnnotatedSection2 = _interopRequireDefault(_PolarisLayoutAnnotatedSection);

var _FadeTransition = __webpack_require__(360);

var _FadeTransition2 = _interopRequireDefault(_FadeTransition);

var _FadeUpTransition = __webpack_require__(365);

var _FadeUpTransition2 = _interopRequireDefault(_FadeUpTransition);

var _CollapseTransition = __webpack_require__(45);

var _CollapseTransition2 = _interopRequireDefault(_CollapseTransition);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _config = __webpack_require__(47);

var _config2 = _interopRequireDefault(_config);

var _log = __webpack_require__(370);

var _log2 = _interopRequireDefault(_log);

var _ConsoleLogger = __webpack_require__(371);

var _ConsoleLogger2 = _interopRequireDefault(_ConsoleLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var TAG = 'Bootstrap';

// Configure logging
var logger = new _ConsoleLogger2.default();
if (!_config2.default.debug) {
    logger.setLogLevel(_log2.default.WARN);
}
_log2.default.addLogger(logger);
_log2.default.send(_log2.default.DEBUG, TAG, 'Initialized logging.');

exports.default = {
    install: function install(Vue, options) {
        var defaults = {
            componentNameFormat: function componentNameFormat(polarisName, changeCase) {
                return 'polaris-' + changeCase.paramCase(polarisName);
            }
        };
        options = Object.assign(defaults, options);

        _ComponentHelpers2.default.setComponentNameFormat(options.componentNameFormat);

        _log2.default.send(_log2.default.DEBUG, TAG, 'Installing...');

        var components = {
            // Main components
            AccountConnection: _PolarisAccountConnection2.default,
            ActionList: _PolarisActionList2.default,
            Button: _PolarisButton2.default,
            ButtonGroup: _PolarisButtonGroup2.default,
            SettingToggle: _PolarisSettingToggle2.default,

            Avatar: _PolarisAvatar2.default,
            Badge: _PolarisBadge2.default,
            Icon: _PolarisIcon2.default,
            KeyboardKey: _PolarisKeyboardKey2.default,
            Thumbnail: _PolarisThumbnail2.default,

            Banner: _PolarisBanner2.default,
            Spinner: _PolarisSpinner2.default,
            ProgressBar: _PolarisProgressBar2.default,

            CalloutCard: _PolarisCalloutCard2.default,
            Card: _PolarisCard2.default,
            EmptyState: _PolarisEmptyState2.default,
            Layout: _PolarisLayout2.default,
            Page: _PolarisPage2.default,
            PageActions: _PolarisPageActions2.default,
            Stack: _PolarisStack2.default,

            Heading: _PolarisHeading2.default,
            Subheading: _PolarisSubheading2.default,
            Caption: _PolarisCaption2.default,
            DisplayText: _PolarisDisplayText2.default,
            FooterHelp: _PolarisFooterHelp2.default,
            VisuallyHidden: _PolarisVisuallyHidden2.default,

            SkeletonBodyText: _PolarisSkeletonBodyText2.default,
            SkeletonDisplayText: _PolarisSkeletonDisplayText2.default,
            SkeletonPage: _PolarisSkeletonPage2.default,

            Checkbox: _PolarisCheckbox2.default,
            ChoiceList: _PolarisChoiceList2.default,
            ColorPicker: _PolarisColorPicker2.default,
            DatePicker: _PolarisDatePicker2.default,
            FormLayout: _PolarisFormLayout2.default,
            FormLayoutGroup: _PolarisFormLayoutGroup2.default,
            RadioButton: _PolarisRadioButton2.default,
            Select: _PolarisSelect2.default,
            Tag: _PolarisTag2.default,
            TextField: _PolarisTextField2.default,

            Collapsible: _PolarisCollapsible2.default,
            Scrollable: _PolarisScrollable2.default,

            DescriptionList: _PolarisDescriptionList2.default,
            List: _PolarisList2.default,
            ListItem: _PolarisListItem2.default,
            ResourceList: _PolarisResourceList2.default,
            ResourceListItem: _PolarisResourceListItem2.default,

            Link: _PolarisLink2.default,
            Pagination: _PolarisPagination2.default,
            Tabs: _PolarisTabs2.default,

            Popover: _PolarisPopover2.default,

            // Not in main docs
            TextStyle: _PolarisTextStyle2.default,
            SettingAction: _PolarisSettingAction2.default,
            Image: _PolarisImage2.default,
            TextContainer: _PolarisTextContainer2.default,
            Breadcrumbs: _PolarisBreadcrumbs2.default,
            UnstyledLink: _PolarisUnstyledLink2.default,

            // Added by polaris-vue
            StackItem: _PolarisStackItem2.default,
            CardSection: _PolarisCardSection2.default,
            LayoutSection: _PolarisLayoutSection2.default,
            LayoutAnnotatedSection: _PolarisLayoutAnnotatedSection2.default,
            ButtonGroupItem: _PolarisButtonGroupItem2.default,

            VueFadeTransition: _FadeTransition2.default,
            VueFadeUpTransition: _FadeUpTransition2.default,
            VueCollapseTransition: _CollapseTransition2.default
        };

        var count = 0;
        for (var polarisName in components) {
            var componentName = _ComponentHelpers2.default.getComponentName(polarisName);
            Vue.component(componentName, components[polarisName]);
            count++;
            _log2.default.send(_log2.default.DEBUG, TAG, componentName + ' -> ' + polarisName);
        }

        _log2.default.send(_log2.default.DEBUG, TAG, 'Installed ' + count + ' components.');
    }
};
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAccountConnection_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAccountConnection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAccountConnection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1333b89c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisAccountConnection_vue__ = __webpack_require__(135);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAccountConnection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1333b89c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisAccountConnection_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisAccountConnection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisAccountConnection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1333b89c", Component.options)
  } else {
    hotAPI.reload("data-v-1333b89c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisCard = __webpack_require__(10);

var _PolarisCard2 = _interopRequireDefault(_PolarisCard);

var _PolarisSettingAction = __webpack_require__(14);

var _PolarisSettingAction2 = _interopRequireDefault(_PolarisSettingAction);

var _PolarisTextStyle = __webpack_require__(27);

var _PolarisTextStyle2 = _interopRequireDefault(_PolarisTextStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//

exports.default = {
    components: {
        PolarisButton: _PolarisButton2.default,
        PolarisCard: _PolarisCard2.default,
        PolarisTextStyle: _PolarisTextStyle2.default,
        PolarisSettingAction: _PolarisSettingAction2.default
    },
    props: {
        connected: Boolean,
        action: Object,
        avatarUrl: String,
        accountName: String,
        title: String,
        details: String,
        termsOfService: String
    },
    computed: {
        realTitle: function realTitle() {
            return this.title || this.accountName;
        }
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _PolarisSpinner = __webpack_require__(22);

var _PolarisSpinner2 = _interopRequireDefault(_PolarisSpinner);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//

exports.default = {
    components: {
        DynamicTag: _DynamicTag2.default,
        PolarisIcon: _PolarisIcon2.default,
        PolarisSpinner: _PolarisSpinner2.default
    },
    data: function data() {
        return {};
    },
    props: {
        url: String,
        primary: Boolean,
        outline: Boolean,
        destructive: Boolean,
        disabled: Boolean,
        loading: Boolean,
        size: {
            type: String,
            default: 'default',
            validator: function validator(v) {
                return ['default', 'slim', 'large'].indexOf(v) !== -1;
            }
        },
        fullWidth: Boolean,
        disclosure: Boolean,
        submit: Boolean,
        plain: Boolean,
        external: Boolean,
        icon: String,
        accessibilityLabel: String,
        iconOnly: Boolean
    },
    computed: {
        disclosureIcon: function disclosureIcon() {
            return this.loading ? 'placeholder' : 'caretDown';
        },
        isDisabled: function isDisabled() {
            return this.disabled || this.loading;
        },
        realIcon: function realIcon() {
            return this.loading ? 'placeholder' : this.icon;
        },
        spinnerColor: function spinnerColor() {
            return this.primary || this.destructive ? 'white' : 'inkLightest';
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-Button', ['primary', 'outline', 'destructive', 'fullWidth', 'plain', 'size', 'iconOnly'], this);
            if (this.isDisabled) {
                r['Polaris-Button--disabled'] = true;
            }
            return r;
        }
    },
    methods: {
        onClick: function onClick(e) {
            if (this.disabled) {
                return;
            }

            if (this.submit) {
                return true;
            }

            this.$emit('click', e);
        },
        onFocus: function onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    render: function render(createElement) {
        return createElement(this.tag, {
            on: this.on,
            domProps: {
                value: this.value
            },
            ref: 'element'
        }, this.$slots.default);
    },

    props: {
        tag: {
            type: String,
            required: true
        },
        on: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        value: {
            type: [String, Number]
        }
    },
    methods: {
        blur: function blur() {
            this.$refs.element.blur();
        },
        focus: function focus() {
            this.$refs.element.focus();
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BUNDLED_ICONS = undefined;

var _SvgSource = __webpack_require__(21);

var _SvgSource2 = _interopRequireDefault(_SvgSource);

var _icons = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var BUNDLED_ICONS = exports.BUNDLED_ICONS = {
    add: _icons.add,
    alert: _icons.alert,
    arrowDown: _icons.arrowDown,
    arrowLeft: _icons.arrowLeft,
    arrowRight: _icons.arrowRight,
    arrowUp: _icons.arrowUp,
    arrowUpDown: _icons.arrowUpDown,
    calendar: _icons.calendar,
    cancel: _icons.cancel,
    cancelSmall: _icons.cancelSmall,
    caretDown: _icons.caretDown,
    caretUp: _icons.caretUp,
    checkmark: _icons.checkmark,
    chevronDown: _icons.chevronDown,
    chevronLeft: _icons.chevronLeft,
    chevronRight: _icons.chevronRight,
    chevronUp: _icons.chevronUp,
    circleCancel: _icons.circleCancel,
    circleChevronDown: _icons.circleChevronDown,
    circleChevronLeft: _icons.circleChevronLeft,
    circleChevronRight: _icons.circleChevronRight,
    circleChevronUp: _icons.circleChevronUp,
    circlePlus: _icons.circlePlus,
    conversation: _icons.conversation,
    delete: _icons.delete,
    disable: _icons.disable,
    dispute: _icons.dispute,
    duplicate: _icons.duplicate,
    embed: _icons.embed,
    export: _icons.export,
    external: _icons.external,
    help: _icons.help,
    horizontalDots: _icons.horizontalDots,
    import: _icons.import,
    notes: _icons.notes,
    print: _icons.print,
    refresh: _icons.refresh,
    risk: _icons.risk,
    save: _icons.save,
    search: _icons.search,
    subtract: _icons.subtract,
    view: _icons.view
};

exports.default = {
    props: {
        source: {
            type: String,
            required: true
        },
        color: {
            type: String
        },
        backdrop: {
            type: Boolean
        },
        accessibilityLabel: String
    },
    computed: {
        finalSource: function finalSource() {
            var svgSource = this.source;
            if (typeof this.source == 'string') {
                var bundled = BUNDLED_ICONS[this.source];
                if (bundled) {
                    svgSource = bundled;
                }
            }
            try {
                var svgObject = _SvgSource2.default.parseSVG(svgSource);
                return svgObject;
            } catch (e) {
                return null;
            }
        },
        classes: function classes() {
            var r = {
                'Polaris-Icon': true,
                'Polaris-Icon--hasBackdrop': this.backdrop
            };
            if (this.color) {
                var valueTag = this.color.charAt(0).toUpperCase() + this.color.slice(1);
                r['Polaris-Icon--color' + valueTag] = true;
            }
            return r;
        }
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = __webpack_require__(57);

Object.defineProperty(exports, 'add', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_add).default;
  }
});

var _alert = __webpack_require__(58);

Object.defineProperty(exports, 'alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alert).default;
  }
});

var _arrowDown = __webpack_require__(59);

Object.defineProperty(exports, 'arrowDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowDown).default;
  }
});

var _arrowLeft = __webpack_require__(60);

Object.defineProperty(exports, 'arrowLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowLeft).default;
  }
});

var _arrowRight = __webpack_require__(61);

Object.defineProperty(exports, 'arrowRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowRight).default;
  }
});

var _arrowUp = __webpack_require__(62);

Object.defineProperty(exports, 'arrowUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowUp).default;
  }
});

var _arrowUpDown = __webpack_require__(63);

Object.defineProperty(exports, 'arrowUpDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arrowUpDown).default;
  }
});

var _calendar = __webpack_require__(64);

Object.defineProperty(exports, 'calendar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_calendar).default;
  }
});

var _cancel = __webpack_require__(65);

Object.defineProperty(exports, 'cancel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cancel).default;
  }
});

var _cancelSmall = __webpack_require__(66);

Object.defineProperty(exports, 'cancelSmall', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cancelSmall).default;
  }
});

var _caretDown = __webpack_require__(67);

Object.defineProperty(exports, 'caretDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretDown).default;
  }
});

var _caretUp = __webpack_require__(68);

Object.defineProperty(exports, 'caretUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_caretUp).default;
  }
});

var _checkmark = __webpack_require__(69);

Object.defineProperty(exports, 'checkmark', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_checkmark).default;
  }
});

var _chevronDown = __webpack_require__(70);

Object.defineProperty(exports, 'chevronDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chevronDown).default;
  }
});

var _chevronLeft = __webpack_require__(71);

Object.defineProperty(exports, 'chevronLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chevronLeft).default;
  }
});

var _chevronRight = __webpack_require__(72);

Object.defineProperty(exports, 'chevronRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chevronRight).default;
  }
});

var _chevronUp = __webpack_require__(73);

Object.defineProperty(exports, 'chevronUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chevronUp).default;
  }
});

var _circleCancel = __webpack_require__(74);

Object.defineProperty(exports, 'circleCancel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circleCancel).default;
  }
});

var _circleChevronDown = __webpack_require__(75);

Object.defineProperty(exports, 'circleChevronDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circleChevronDown).default;
  }
});

var _circleChevronLeft = __webpack_require__(76);

Object.defineProperty(exports, 'circleChevronLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circleChevronLeft).default;
  }
});

var _circleChevronRight = __webpack_require__(77);

Object.defineProperty(exports, 'circleChevronRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circleChevronRight).default;
  }
});

var _circleChevronUp = __webpack_require__(78);

Object.defineProperty(exports, 'circleChevronUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circleChevronUp).default;
  }
});

var _circlePlus = __webpack_require__(79);

Object.defineProperty(exports, 'circlePlus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circlePlus).default;
  }
});

var _conversation = __webpack_require__(80);

Object.defineProperty(exports, 'conversation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_conversation).default;
  }
});

var _delete = __webpack_require__(81);

Object.defineProperty(exports, 'delete', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_delete).default;
  }
});

var _disable = __webpack_require__(82);

Object.defineProperty(exports, 'disable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_disable).default;
  }
});

var _dispute = __webpack_require__(83);

Object.defineProperty(exports, 'dispute', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dispute).default;
  }
});

var _duplicate = __webpack_require__(84);

Object.defineProperty(exports, 'duplicate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_duplicate).default;
  }
});

var _embed = __webpack_require__(85);

Object.defineProperty(exports, 'embed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_embed).default;
  }
});

var _export = __webpack_require__(86);

Object.defineProperty(exports, 'export', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_export).default;
  }
});

var _external = __webpack_require__(87);

Object.defineProperty(exports, 'external', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_external).default;
  }
});

var _help = __webpack_require__(88);

Object.defineProperty(exports, 'help', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_help).default;
  }
});

var _horizontalDots = __webpack_require__(89);

Object.defineProperty(exports, 'horizontalDots', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_horizontalDots).default;
  }
});

var _import = __webpack_require__(90);

Object.defineProperty(exports, 'import', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_import).default;
  }
});

var _notes = __webpack_require__(91);

Object.defineProperty(exports, 'notes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_notes).default;
  }
});

var _print = __webpack_require__(92);

Object.defineProperty(exports, 'print', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_print).default;
  }
});

var _refresh = __webpack_require__(93);

Object.defineProperty(exports, 'refresh', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_refresh).default;
  }
});

var _risk = __webpack_require__(94);

Object.defineProperty(exports, 'risk', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_risk).default;
  }
});

var _save = __webpack_require__(95);

Object.defineProperty(exports, 'save', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_save).default;
  }
});

var _search = __webpack_require__(96);

Object.defineProperty(exports, 'search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _subtract = __webpack_require__(97);

Object.defineProperty(exports, 'subtract', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subtract).default;
  }
});

var _view = __webpack_require__(98);

Object.defineProperty(exports, 'view', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_view).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.707 17.707l5-5a.999.999 0 1 0-1.414-1.414L11 14.586V3a1 1 0 1 0-2 0v11.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.707 9.293l-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 17V5.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a.999.999 0 0 0-1.414 0l-5 5a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0L9 5.414V17a1 1 0 1 0 2 0\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z\" fill=\"#637381\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 8h12V6H4v2zm9 4h2v-2h-2v2zm-4 0h2v-2H9v2zm0 4h2v-2H9v2zm-4-4h2v-2H5v2zm0 4h2v-2H5v2zM17 4h-2V3a1 1 0 1 0-2 0v1H7V3a1 1 0 1 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 8l5 5 5-5z\" fill=\"#212B35\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 12l-5-5-5 5z\" fill=\"#212B35\"></path></svg>"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#919EAB\" fill-rule=\"evenodd\"><path d=\"M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0\"></path><path d=\"M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0\"></path></g></svg>"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 14a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L10 11.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 14\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.242 12.829l-1.414 1.414L10 11.413l-2.828 2.83-1.414-1.414 2.828-2.83-2.828-2.827 1.414-1.414L10 8.586l2.828-2.828 1.414 1.414L11.414 10l2.828 2.829zM10 1.999A8 8 0 1 0 10 18a8 8 0 0 0 0-16z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 13.414L5.293 8.707l1.414-1.414L10 10.586l3.293-3.293 1.414 1.414L10 13.414zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.293 5.293l1.414 1.414L9.414 10l3.293 3.293-1.414 1.414L6.586 10l4.707-4.707zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.707 14.707l-1.414-1.414L10.586 10 7.293 6.707l1.414-1.414L13.414 10l-4.707 4.707zM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.707 11.293l-1.414 1.414L10 9.414l-3.293 3.293-1.414-1.414L10 6.586l4.707 4.707zM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 11h-4v4H9v-4H5V9h4V5h2v4h4v2zm-5-9a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 11h2V9h-2v2zm-4 0h2V9H9v2zm-4 0h2V9H5v2zm5-9c-4.411 0-8 3.589-8 8 0 1.504.425 2.908 1.15 4.111l-1.069 2.495a1 1 0 0 0 1.314 1.313l2.494-1.069A7.939 7.939 0 0 0 10 18c4.411 0 8-3.589 8-8s-3.589-8-8-8z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 16a5.961 5.961 0 0 1-3.471-1.115l8.356-8.356A5.961 5.961 0 0 1 16 10c0 3.309-2.691 6-6 6m0-12c1.294 0 2.49.416 3.471 1.115l-8.356 8.356A5.961 5.961 0 0 1 4 10c0-3.309 2.691-6 6-6m0-2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 10h2V6H9v4zm0 4h2v-2H9v2zm-7-4c0 4.411 3.589 8 8 8a7.939 7.939 0 0 0 4.111-1.15l2.494 1.069a1 1 0 0 0 1.314-1.313l-1.069-2.495A7.939 7.939 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 12h8V4H8v8zm4 4H4V8h2v5a1 1 0 0 0 1 1h5v2zm5-14H7a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v2h12v-2a1 1 0 0 1 1-1zm0-11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4H4v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1h14zm.555 7.168a1.001 1.001 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.109-1.664L15.198 10l-1.752-1.168a1 1 0 1 1 1.109-1.664l3 2zM6.832 7.445a1 1 0 0 1-.277 1.387L4.803 10l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.001 1.001 0 0 1 0-1.664l3-2a1 1 0 0 1 1.387.277zM9 14.001a1 1 0 0 1-.948-1.317l2-6a1 1 0 0 1 1.896.633l-2 6A.999.999 0 0 1 9 14z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M9.293 13.707l-3-3a.999.999 0 1 1 1.414-1.414L9 10.586V3a1 1 0 1 1 2 0v7.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a.999.999 0 0 1-1.414 0zM17 16a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h14z\"></path></svg>"

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-7.293 7.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 4H13a1 1 0 1 1 0-2h4zm-4 9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4v8h8v-4a1 1 0 0 1 1-1z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"#FFF\"></circle><path d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-4a1 1 0 1 0 0 2 1 1 0 1 0 0-2m0-10C8.346 4 7 5.346 7 7a1 1 0 1 0 2 0 1.001 1.001 0 1 1 1.591.808C9.58 8.548 9 9.616 9 10.737V11a1 1 0 1 0 2 0v-.263c0-.653.484-1.105.773-1.317A3.013 3.013 0 0 0 13 7c0-1.654-1.346-3-3-3\"></path></svg>"

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M13.707 6.707a.997.997 0 0 1-1.414 0L11 5.414V13a1 1 0 1 1-2 0V5.414L7.707 6.707a.999.999 0 1 1-1.414-1.414l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 0 1 0 1.414zM17 18H3a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z\"></path></svg>"

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 11h8V9H6v2zm0 4h8v-2H6v2zm0-8h4V5H6v2zm9.707-1.707l-3-3A.996.996 0 0 0 12 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a.997.997 0 0 0-.293-.707z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 11h2V9h-2v2zM7 7h6V4H7v3zm0 9h6v-2H7v2zm10-9h-2V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 11a1 1 0 0 1 1 1c0 1.654-1.346 3-3 3H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a.999.999 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 13H15c.552 0 1-.449 1-1a1 1 0 0 1 1-1zM3 9a1 1 0 0 1-1-1c0-1.654 1.346-3 3-3h9.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a.999.999 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 7H5c-.552 0-1 .449-1 1a1 1 0 0 1-1 1z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 12h2V8H9v4zm0 4h2v-2H9v2zm8.895.509l-7-14c-.339-.678-1.451-.678-1.79 0l-7 14A.999.999 0 0 0 3 17.956h14a1.001 1.001 0 0 0 .895-1.447z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M17 4h-3a1 1 0 1 0 0 2h2v10H4V4h3.586L9 5.414v5.172L7.707 9.293a1 1 0 0 0-1.414 1.414l3 3a.996.996 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 10.586V5a.997.997 0 0 0-.293-.707l-2-2A.994.994 0 0 0 8 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\"></path></svg>"

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m9.707 4.293l-4.82-4.82A5.968 5.968 0 0 0 14 8 6 6 0 0 0 2 8a6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 9H5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M17.928 9.628C17.836 9.399 15.611 4 9.999 4S2.162 9.399 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.162 10.601 4.387 16 9.999 16s7.837-5.399 7.929-5.628a1.017 1.017 0 0 0 0-.744zM9.999 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6A2 2 0 1 0 10 12.001 2 2 0 0 0 10 8z\"></path></svg>"

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.accessibilityLabel
    }
  }, [(_vm.source == 'placeholder' || !_vm.finalSource) ? _c('div', {
    staticClass: "Polaris-Icon__Placeholder"
  }) : _vm._e(), _vm._v(" "), (_vm.source != 'placeholder' && _vm.finalSource) ? _c('svg', {
    staticClass: "Polaris-Icon__Svg",
    attrs: {
      "viewBox": _vm.finalSource.viewBox
    },
    domProps: {
      "innerHTML": _vm._s(_vm.finalSource.body)
    }
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40b5b950", esExports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _SvgSource = __webpack_require__(21);

var _SvgSource2 = _interopRequireDefault(_SvgSource);

var _spinnerLarge = __webpack_require__(117);

var _spinnerLarge2 = _interopRequireDefault(_spinnerLarge);

var _spinnerSmall = __webpack_require__(118);

var _spinnerSmall2 = _interopRequireDefault(_spinnerSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

var SIZES = ['small', 'large'];
var COLORS = ['white', 'teal', 'inkLightest'];

exports.default = {
    props: {
        size: {
            type: String,
            default: 'large',
            validator: function validator(v) {
                return SIZES.indexOf(v) > -1;
            }
        },
        color: {
            type: String,
            default: 'teal',
            validator: function validator(v) {
                return COLORS.indexOf(v) > -1;
            }
        },
        accessibilityLabel: String
    },
    computed: {
        spinnerSVG: function spinnerSVG() {
            var svg = this.size == 'large' ? _spinnerLarge2.default : _spinnerSmall2.default;
            return _SvgSource2.default.parseSVG(svg);
        },
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Spinner', ['color', 'size'], this);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports.no = exports.noCase = __webpack_require__(4)
exports.dot = exports.dotCase = __webpack_require__(105)
exports.swap = exports.swapCase = __webpack_require__(106)
exports.path = exports.pathCase = __webpack_require__(107)
exports.upper = exports.upperCase = __webpack_require__(6)
exports.lower = exports.lowerCase = __webpack_require__(8)
exports.camel = exports.camelCase = __webpack_require__(23)
exports.snake = exports.snakeCase = __webpack_require__(24)
exports.title = exports.titleCase = __webpack_require__(108)
exports.param = exports.paramCase = __webpack_require__(109)
exports.header = exports.headerCase = __webpack_require__(110)
exports.pascal = exports.pascalCase = __webpack_require__(111)
exports.constant = exports.constantCase = __webpack_require__(112)
exports.sentence = exports.sentenceCase = __webpack_require__(113)
exports.isUpper = exports.isUpperCase = __webpack_require__(114)
exports.isLower = exports.isLowerCase = __webpack_require__(115)
exports.ucFirst = exports.upperCaseFirst = __webpack_require__(12)
exports.lcFirst = exports.lowerCaseFirst = __webpack_require__(116)


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]+)([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)

/**
 * Dot case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '.')
}


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(6)
var lowerCase = __webpack_require__(8)

/**
 * Swap the case of a string. Manually iterate over every character and check
 * instead of replacing certain characters for better unicode support.
 *
 * @param  {String} str
 * @param  {String} [locale]
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  var result = ''

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    var u = upperCase(c, locale)

    result += u === c ? lowerCase(c, locale) : u
  }

  return result
}


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)

/**
 * Path case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '/')
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)
var upperCase = __webpack_require__(6)

/**
 * Title case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale).replace(/^.| ./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)

/**
 * Param case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-')
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)
var upperCase = __webpack_require__(6)

/**
 * Header case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-').replace(/^.|-./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var camelCase = __webpack_require__(23)
var upperCaseFirst = __webpack_require__(12)

/**
 * Pascal case a string.
 *
 * @param  {string}  value
 * @param  {string}  [locale]
 * @param  {boolean} [mergeNumbers]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  return upperCaseFirst(camelCase(value, locale, mergeNumbers), locale)
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(6)
var snakeCase = __webpack_require__(24)

/**
 * Constant case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCase(snakeCase(value, locale), locale)
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(4)
var upperCaseFirst = __webpack_require__(12)

/**
 * Sentence case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCaseFirst(noCase(value, locale), locale)
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(6)

/**
 * Check if a string is upper case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return upperCase(string, locale) === string
}


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(8)

/**
 * Check if a string is lower case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return lowerCase(string, locale) === string
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(8)

/**
 * Lower case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return lowerCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z\"></path></svg>"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z\"></path></svg>"

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    class: _vm.classes,
    attrs: {
      "view-box": _vm.spinnerSVG.viewBox,
      "aria-label": _vm.accessibilityLabel,
      "role": "status"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.spinnerSVG.body)
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a4b3e3ec", esExports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    class: _vm.classes,
    attrs: {
      "tag": _vm.url ? 'a' : 'button',
      "on": {
        click: _vm.onClick,
        blur: _vm.onBlur,
        focus: _vm.onFocus
      },
      "type": _vm.submit ? 'submit' : 'button',
      "aria-label": _vm.accessibilityLabel,
      "data-polaris-unstyled": _vm.url ? 'true' : '',
      "href": _vm.url,
      "disabled": _vm.isDisabled,
      "target": _vm.external ? '_blank' : '',
      "role": _vm.loading ? 'alert' : null,
      "aria-busy": _vm.loading ? true : null
    }
  }, [(_vm.loading) ? _c('span', {
    staticClass: "Polaris-Button__Spinner"
  }, [_c('polaris-spinner', {
    attrs: {
      "size": "small",
      "color": _vm.spinnerColor,
      "accessibility-label": "Loading"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('span', {
    staticClass: "Polaris-Button__Icon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.realIcon
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('span', {
    staticClass: "Polaris-Button__Content"
  }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), (_vm.disclosure) ? _c('span', {
    staticClass: "Polaris-Button__Icon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.disclosureIcon
    }
  })], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0646185e", esExports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisCardSection = __webpack_require__(25);

var _PolarisCardSection2 = _interopRequireDefault(_PolarisCardSection);

var _PolarisButtonGroup = __webpack_require__(7);

var _PolarisButtonGroup2 = _interopRequireDefault(_PolarisButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//

exports.default = {
    components: {
        PolarisButtonGroup: _PolarisButtonGroup2.default,
        PolarisCardSection: _PolarisCardSection2.default
    },
    props: {
        title: String,
        subdued: Boolean,
        sectioned: Boolean,
        primaryFooterAction: Object,
        secondaryFooterAction: Object,
        actions: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        classes: function classes() {
            return {
                'Polaris-Card': true,
                'Polaris-Card--subdued': this.subdued
            };
        }
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisSubheading = __webpack_require__(26);

var _PolarisSubheading2 = _interopRequireDefault(_PolarisSubheading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    components: {
        PolarisSubheading: _PolarisSubheading2.default
    },
    props: {
        subdued: Boolean,
        title: String
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Card__Section', ['subdued'], this);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        tag: {
            type: String,
            default: 'h3'
        }
    },
    components: {
        DynamicTag: _DynamicTag2.default
    }
}; //
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    staticClass: "Polaris-Subheading",
    attrs: {
      "tag": _vm.tag
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30e860e1", esExports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [(_vm.title) ? _c('div', {
    staticClass: "Polaris-Card__SectionHeader"
  }, [_c('polaris-subheading', {
    attrs: {
      "tag": "h3"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-92ecb9b4", esExports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisButtonGroupItem = __webpack_require__(13);

var _PolarisButtonGroupItem2 = _interopRequireDefault(_PolarisButtonGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisButtonGroupItem: _PolarisButtonGroupItem2.default
    },
    props: {
        segmented: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'Polaris-ButtonGroup': true,
                'Polaris-ButtonGroup--segmented': this.segmented
            };
        }
    }
}; //
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            focused: false
        };
    },

    props: {
        plain: Boolean
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-ButtonGroup__Item', ['focused', 'plain'], this);
        }
    }
}; //
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "focusin": function($event) {
        _vm.focused = true
      },
      "focusout": function($event) {
        _vm.focused = false
      }
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07b9d2de", esExports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.$slots), function(slot, name) {
    return (name != 'default') ? _c('polaris-button-group-item', {
      key: name
    }, [_vm._t(name)], 2) : _vm._e()
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a3b0bde", esExports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [(_vm.title || _vm.actions.length > 0) ? _c('div', {
    staticClass: "Polaris-Card__Header"
  }, [(_vm.title && _vm.actions.length == 0) ? _c('h2', {
    staticClass: "Polaris-Heading"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), (_vm.actions.length > 0) ? _c('polaris-stack', {
    attrs: {
      "alignment": "baseline"
    }
  }, [(_vm.title) ? _c('polaris-stack-item', {
    attrs: {
      "fill": ""
    }
  }, [_c('h2', {
    staticClass: "Polaris-Heading"
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._v(" "), _c('polaris-stack-item', [_c('polaris-button-group', _vm._l((_vm.actions), function(action, index) {
    return _c('polaris-button', {
      key: "action",
      attrs: {
        "url": action.url,
        "destructive": action.destructive,
        "disabled": action.disabled,
        "accessibility-label": action.accessiblityLabel,
        "icon": action.icon,
        "plain": ""
      },
      on: {
        "click": function($event) {
          _vm.handleAction(action)
        }
      },
      slot: index
    }, [_vm._v("\n                        " + _vm._s(action.content) + "\n                    ")])
  }))], 1)], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (!_vm.sectioned) ? [_vm._t("default")] : _vm._e(), _vm._v(" "), (_vm.sectioned) ? [_c('polaris-card-section', [_vm._t("default")], 2)] : _vm._e(), _vm._v(" "), (_vm.primaryFooterAction) ? _c('div', {
    staticClass: "Polaris-Card__Footer"
  }, [_c('polaris-button-group', [(_vm.primaryFooterAction) ? [_c('polaris-button', {
    attrs: {
      "primary": "",
      "accessibility-label": _vm.primaryFooterAction.accessibilityLabel,
      "url": _vm.primaryFooterAction.url,
      "disabled": _vm.primaryFooterAction.disabled,
      "destructive": _vm.primaryFooterAction.destructive,
      "icon": _vm.primaryFooterAction.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.primaryFooterAction)
      }
    },
    slot: "1"
  }, [_vm._v("\n                    " + _vm._s(_vm.primaryFooterAction.content) + "\n                ")])] : _vm._e(), _vm._v(" "), (_vm.secondaryFooterAction) ? [_c('polaris-button', {
    attrs: {
      "accessibility-label": _vm.secondaryFooterAction.accessibilityLabel,
      "url": _vm.secondaryFooterAction.url,
      "disabled": _vm.secondaryFooterAction.disabled,
      "destructive": _vm.secondaryFooterAction.destructive,
      "icon": _vm.secondaryFooterAction.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.secondaryFooterAction)
      }
    },
    slot: "2"
  }, [_vm._v("\n                    " + _vm._s(_vm.secondaryFooterAction.content) + "\n                ")])] : _vm._e()], 2)], 1) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b233e6f", esExports)
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//
//
//
//
//
//
//

exports.default = {
    props: {
        action: null
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
module.exports = exports["default"];

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-SettingAction"
  }, [_c('div', {
    staticClass: "Polaris-SettingAction__Setting"
  }, [_vm._t("children")], 2), _vm._v(" "), (_vm.$slots.action || _vm.action) ? _c('div', {
    staticClass: "Polaris-SettingAction__Action"
  }, [_vm._t("action", [(_vm.action) ? _c('polaris-button', {
    attrs: {
      "primary": "",
      "url": _vm.action.url,
      "destructive": _vm.action.destructive,
      "disabled": _vm.action.disabled,
      "icon": _vm.action.icon,
      "accessibility-label": _vm.action.accessibilityLabel
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.action.content) + "\n            ")]) : _vm._e()])], 2) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03817952", esExports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        variation: {
            type: String,
            validator: function validator(v) {
                return ['positive', 'negative', 'strong', 'subdued'].indexOf(v) != -1;
            }
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-TextStyle', ['variation'], this);
        }
    }
}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-375d38b5", esExports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-card', {
    attrs: {
      "sectioned": ""
    }
  }, [_c('polaris-setting-action', [_c('polaris-stack', {
    slot: "children"
  }, [(_vm.connected && _vm.avatarUrl) ? _c('polaris-stack-item', [_c('span', {
    staticClass: "Polaris-Avatar Polaris-Avatar--styleSix Polaris-Avatar--hasImage Polaris-Avatar--sizeMedium",
    attrs: {
      "aria-label": _vm.realTitle,
      "role": "img"
    }
  }, [_c('img', {
    staticClass: "Polaris-Avatar__Image",
    attrs: {
      "src": _vm.avatarUrl,
      "alt": "",
      "role": "presentation"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('polaris-stack-item', {
    attrs: {
      "fill": ""
    }
  }, [_c('div', {
    staticClass: "Polaris-AccountConnection__Content"
  }, [_vm._t("title", [_c('div', [_vm._v(_vm._s(_vm.realTitle))])]), _vm._v(" "), (_vm.details || this.$slots.details) ? _c('div', [_c('polaris-text-style', {
    attrs: {
      "variation": "subdued"
    }
  }, [_vm._t("details", [_vm._v("\n                                " + _vm._s(_vm.details) + "\n                            ")])], 2)], 1) : _vm._e()], 2)])], 1), _vm._v(" "), _c('polaris-button', {
    attrs: {
      "primary": !_vm.connected,
      "url": _vm.action.url,
      "destructive": _vm.action.destructive,
      "disabled": _vm.action.disabled,
      "icon": _vm.action.icon,
      "accessibility-label": _vm.action.accessibilityLabel
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    },
    slot: "action"
  }, [_vm._v("\n            " + _vm._s(_vm.action.content) + "\n        ")])], 1), _vm._v(" "), (_vm.$slots.default || _vm.$slots.termsOfService || _vm.termsOfService) ? _c('div', {
    staticClass: "Polaris-AccountConnection__TermsOfService"
  }, [_vm._t("default", [_vm._t("termsOfService", [_vm._v("\n                " + _vm._s(_vm.termsOfService) + "\n            ")])])], 2) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1333b89c", esExports)
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

var _PolarisActionListSection = __webpack_require__(137);

var _PolarisActionListSection2 = _interopRequireDefault(_PolarisActionListSection);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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

exports.default = {
    components: {
        DynamicTag: _DynamicTag2.default,
        PolarisActionListSection: _PolarisActionListSection2.default,
        PolarisIcon: _PolarisIcon2.default
    },
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        sections: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        finalSections: function finalSections() {
            if (this.items) {
                return [{ items: this.items }].concat(_toConsumableArray(this.sections));
            }
            return this.sections;
        },
        hasMultipleSections: function hasMultipleSections() {
            return this.finalSections.length > 0;
        }
    },
    methods: {
        onActionAnyItem: function onActionAnyItem(action) {
            this.$emit('action-any-item', action);
        },
        handleAction: function handleAction(action) {
            var res = true;
            if (action.onAction) {
                res = action.onAction();
            }
            if (res && action.url) {
                window.location.href = action.url;
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListSection_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListSection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListSection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_264fadfc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisActionListSection_vue__ = __webpack_require__(144);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListSection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_264fadfc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisActionListSection_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisActionListSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisActionListSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-264fadfc", Component.options)
  } else {
    hotAPI.reload("data-v-264fadfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OptionalTag = __webpack_require__(139);

var _OptionalTag2 = _interopRequireDefault(_OptionalTag);

var _PolarisActionListItem = __webpack_require__(141);

var _PolarisActionListItem2 = _interopRequireDefault(_PolarisActionListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//

exports.default = {
    components: {
        OptionalTag: _OptionalTag2.default,
        PolarisActionListItem: _PolarisActionListItem2.default
    },
    props: {
        section: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        hasMultipleSections: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'Polaris-ActionList__Section': 1,
                'Polaris-ActionList__Section--withoutTitle': !this.section.title
            };
        }
    },
    methods: {
        wrapAction: function wrapAction(action) {
            var _this = this;

            var _old = action.onAction;
            var newAction = Object.assign({}, action);
            if (_old) {
                newAction.onAction = function () {
                    _old();
                    _this.$emit('action-any-item', action);
                };
            }
            return newAction;
        },
        handleAction: function handleAction(action) {
            var res = true;
            if (action.onAction) {
                res = action.onAction();
            }
            if (res && action.url) {
                window.location.href = action.url;
            }

            this.$emit('action-any-item', action);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_OptionalTag_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_OptionalTag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_OptionalTag_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_OptionalTag_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/OptionalTag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9579451e", Component.options)
  } else {
    hotAPI.reload("data-v-9579451e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//

exports.default = {
    render: function render(createElement) {
        var validSlot = this.$slots.default;
        var child = validSlot ? validSlot[0] : createElement('div');

        if (this.active) {
            return createElement(this.tag, {}, [child]);
        }
        return child;
    },

    props: {
        tag: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListItem_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc44046_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisActionListItem_vue__ = __webpack_require__(143);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisActionListItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc44046_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisActionListItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisActionListItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisActionListItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dc44046", Component.options)
  } else {
    hotAPI.reload("data-v-7dc44046", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//

exports.default = {
    components: {
        PolarisIcon: _PolarisIcon2.default
    },
    props: {
        content: String,
        url: String,
        action: Object,
        icon: String,
        image: String,
        disabled: Boolean
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-ActionList__Item', ['disabled'], this);
        }
    },
    methods: {
        handleAction: function handleAction(action) {
            var res = true;
            if (action.onAction) {
                res = action.onAction();
            }
            if (res && action.url) {
                window.location.href = action.url;
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [(_vm.url) ? _c('polaris-unstyled-link', {
    staticClass: "Polaris-ActionList__Item",
    attrs: {
      "url": _vm.url
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    }
  }, [(_vm.icon || _vm.image) ? [_c('div', {
    staticClass: "Polaris-ActionList__Content"
  }, [_c('div', {
    staticClass: "Polaris-ActionList__Image",
    style: ({
      backgroundImage: _vm.icon ? null : 'url(' + _vm.image + ')'
    }),
    attrs: {
      "role": "presentation"
    }
  }, [(_vm.icon) ? _c('polaris-icon', {
    attrs: {
      "source": _vm.icon
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-ActionList__Text"
  }, [_vm._t("default", [_vm._t("content", [_vm._v(_vm._s(_vm.content))])])], 2)])] : [_vm._v("\n            " + _vm._s(_vm.content) + "\n        ")]], 2) : _vm._e(), _vm._v(" "), (!_vm.url) ? _c('button', {
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    }
  }, [(_vm.icon || _vm.image) ? [_c('div', {
    staticClass: "Polaris-ActionList__Content"
  }, [_c('div', {
    staticClass: "Polaris-ActionList__Image",
    style: ({
      backgroundImage: _vm.icon ? null : 'url(' + _vm.image + ')'
    }),
    attrs: {
      "role": "presentation"
    }
  }, [(_vm.icon) ? _c('polaris-icon', {
    attrs: {
      "source": _vm.icon
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-ActionList__Text"
  }, [_vm._t("default", [_vm._t("content", [_vm._v(_vm._s(_vm.content))])])], 2)])] : [_vm._t("default", [_vm._t("content", [_vm._v(_vm._s(_vm.content))])])]], 2) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7dc44046", esExports)
  }
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('optional-tag', {
    attrs: {
      "tag": "li",
      "active": _vm.hasMultipleSections
    }
  }, [_c('div', {
    class: _vm.classes
  }, [(_vm.section.title) ? _c('p', {
    staticClass: "Polaris-ActionList__Title"
  }, [_vm._v("\n            " + _vm._s(_vm.section.title) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "Polaris-ActionList__Actions"
  }, _vm._l((_vm.section.items), function(item) {
    return _c('polaris-action-list-item', {
      attrs: {
        "content": item.content,
        "action": _vm.wrapAction(item)
      }
    })
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-264fadfc", esExports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    staticClass: "Polaris-ActionList",
    attrs: {
      "tag": _vm.hasMultipleSections ? 'div' : 'ul'
    }
  }, _vm._l((_vm.finalSections), function(section, index) {
    return _c('polaris-action-list-section', {
      key: index,
      attrs: {
        "section": section,
        "has-multiple-sections": _vm.hasMultipleSections
      },
      on: {
        "action-any-item": _vm.onActionAnyItem
      }
    })
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07f75813", esExports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingToggle_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingToggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingToggle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d0ec175_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSettingToggle_vue__ = __webpack_require__(148);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSettingToggle_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d0ec175_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSettingToggle_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSettingToggle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSettingToggle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d0ec175", Component.options)
  } else {
    hotAPI.reload("data-v-5d0ec175", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisCard = __webpack_require__(10);

var _PolarisCard2 = _interopRequireDefault(_PolarisCard);

var _PolarisSettingAction = __webpack_require__(14);

var _PolarisSettingAction2 = _interopRequireDefault(_PolarisSettingAction);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisCard: _PolarisCard2.default,
        PolarisSettingAction: _PolarisSettingAction2.default,
        PolarisButton: _PolarisButton2.default
    },
    props: {
        action: Object,
        enabled: Boolean
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
}; //
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
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-card', {
    attrs: {
      "sectioned": ""
    }
  }, [_c('polaris-setting-action', [_c('template', {
    slot: "children"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('polaris-button', {
    attrs: {
      "primary": !_vm.enabled,
      "url": _vm.action.url,
      "accessibility-label": _vm.action.accessibilityLabel,
      "disabled": _vm.action.disabled,
      "destructive": _vm.action.destructive,
      "icon": _vm.action.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    },
    slot: "action"
  }, [_vm._v("\n            " + _vm._s(_vm.enabled ? 'Disable' : 'Enable') + "\n        ")])], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d0ec175", esExports)
  }
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAvatar_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAvatar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAvatar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6113bb10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisAvatar_vue__ = __webpack_require__(163);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisAvatar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6113bb10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisAvatar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisAvatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisAvatar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6113bb10", Component.options)
  } else {
    hotAPI.reload("data-v-6113bb10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisImage = __webpack_require__(29);

var _PolarisImage2 = _interopRequireDefault(_PolarisImage);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _avatars = __webpack_require__(153);

var avatars = _interopRequireWildcard(_avatars);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AVATAR_IMAGES = [];
for (var key in avatars) {
    AVATAR_IMAGES.push(avatars[key]);
}

var STYLE_CLASSES = ['styleOne', 'styleTwo', 'styleThree', 'styleFour', 'styleFive', 'styleSix'];

exports.default = {
    components: {
        PolarisImage: _PolarisImage2.default,
        PolarisIcon: _PolarisIcon2.default
    },
    props: {
        size: {
            type: String,
            default: 'medium',
            validator: function validator(v) {
                return ['small', 'medium', 'large'].indexOf(v) != -1;
            }
        },
        name: String,
        initials: String,
        customer: Boolean,
        source: String,
        accessibilityLabel: String
    },
    computed: {
        label: function label() {
            return this.accessibilityLabel || this.name || (this.initials ? 'Avatar with initials ' + this.initials.split('').join(' ') : false) || 'Avatar';
        },
        customerSvg: function customerSvg() {
            return this.customer ? this.customerPlaceholder(this.name || this.initials) : null;
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-Avatar', ['size'], this);

            var styleClass = this.styleClass(this.name || this.initials);
            r['Polaris-Avatar--' + styleClass] = true;

            return r;
        }
    },
    methods: {
        customerPlaceholder: function customerPlaceholder(name) {
            return name ? AVATAR_IMAGES[name.charCodeAt(0) % AVATAR_IMAGES.length] : AVATAR_IMAGES[0];
        },
        styleClass: function styleClass(name) {
            return name ? STYLE_CLASSES[name.charCodeAt(0) % STYLE_CLASSES.length] : STYLE_CLASSES[0];
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    props: {
        alt: String,
        source: String,
        sourceSet: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        finalSourceSet: function finalSourceSet() {
            return this.sourceSet.map(function (item) {
                return item.source + ' ' + item.descriptor;
            }).join(',');
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    attrs: {
      "src": _vm.source,
      "srcSet": _vm.finalSourceSet,
      "alt": _vm.alt
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3628368c", esExports)
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _avatar = __webpack_require__(154);

Object.defineProperty(exports, 'avatarOne', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar).default;
  }
});

var _avatar2 = __webpack_require__(155);

Object.defineProperty(exports, 'avatarTwo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar2).default;
  }
});

var _avatar3 = __webpack_require__(156);

Object.defineProperty(exports, 'avatarThree', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar3).default;
  }
});

var _avatar4 = __webpack_require__(157);

Object.defineProperty(exports, 'avatarFour', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar4).default;
  }
});

var _avatar5 = __webpack_require__(158);

Object.defineProperty(exports, 'avatarFive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar5).default;
  }
});

var _avatar6 = __webpack_require__(159);

Object.defineProperty(exports, 'avatarSix', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar6).default;
  }
});

var _avatar7 = __webpack_require__(160);

Object.defineProperty(exports, 'avatarSeven', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar7).default;
  }
});

var _avatar8 = __webpack_require__(161);

Object.defineProperty(exports, 'avatarEight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar8).default;
  }
});

var _avatar9 = __webpack_require__(162);

Object.defineProperty(exports, 'avatarNine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_avatar9).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar1&quot;] .cls-1{fill:#245b48} [data-name=&quot;PolarisAvatar1&quot;] .cls-2{fill:#2db167} [data-name=&quot;PolarisAvatar1&quot;] .cls-3{fill:#fff} [data-name=&quot;PolarisAvatar1&quot;] .cls-4{fill:#8dc958} [data-name=&quot;PolarisAvatar1&quot;] .cls-5{fill:#ebedf1; opacity:.2} </style></defs><path class=\"cls-1\" d=\"M0 0h100v100H0z\"></path><path class=\"cls-2\" d=\"M69 0v65.65l-2-.01v19.85l2 .02V100H0V0h69z\"></path><path class=\"cls-3\" d=\"M67 65.64v19.85l-25.57-.19C32 85.22 25.6 81.46 25.68 72.06s.25-6.74.25-6.74z\"></path><path class=\"cls-4\" d=\"M86.99 58H69V0h10.93l7.06 58z\"></path><path class=\"cls-5\" d=\"M24.53 40.29a12.23 12.23 0 0 1 24.46 0\"></path><path class=\"cls-4\" d=\"M59.62 58A10.69 10.69 0 0 1 81 58z\"></path></svg>"

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar2&quot;] .cls-1{fill:#1e265c} [data-name=&quot;PolarisAvatar2&quot;] .cls-2{fill:#5d6cc1} [data-name=&quot;PolarisAvatar2&quot;] .cls-3, [data-name=&quot;PolarisAvatar2&quot;] .cls-5{fill:#fff} [data-name=&quot;PolarisAvatar2&quot;] .cls-4{fill:#ffc04d} [data-name=&quot;PolarisAvatar2&quot;] .cls-5{stroke:#fff;stroke-miterlimit:10} </style></defs><path class=\"cls-1\" d=\"M-.01 0h100v100h-100z\"></path><path class=\"cls-2\" d=\"M-.01 0h69.02v100H-.01z\"></path><path class=\"cls-3\" d=\"M68.93 65.88l-24.44-.19-.05 6.09c0 5.22 3.48 9.47 8.69 9.52l15.8.12z\"></path><path class=\"cls-4\" d=\"M68.91 11.3l19.17 46.29-19.17-.16V11.3z\"></path><path class=\"cls-5\" d=\"M23.25 36.43a3.22 3.22 0 1 0 0 6.44m21.01-6.44a3.22 3.22 0 0 0 0 6.44m-13.55 3.74a3.22 3.22 0 1 0 0 6.44m3.22-25.51a3.22 3.22 0 0 0 0 6.44\"></path></svg>"

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar3\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar3&quot;] .cls-1{fill:#5d6cc1} [data-name=&quot;PolarisAvatar3&quot;] .cls-2{fill:#6dcace} [data-name=&quot;PolarisAvatar3&quot;] .cls-3{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px} [data-name=&quot;PolarisAvatar3&quot;] .cls-4{fill:#ebedf1;opacity:.2} [data-name=&quot;PolarisAvatar3&quot;] .cls-5{fill:#fff} </style></defs><path class=\"cls-1\" d=\"M-.02 0h100v100h-100z\"></path><path class=\"cls-2\" d=\"M.39 0h69.02v100H.39z\"></path><path class=\"cls-3\" d=\"M24.18 31.21v3.47A10.43 10.43 0 0 0 34.4 45.21a10.43 10.43 0 0 0 10.22-10.53v-3.47\"></path><path class=\"cls-4\" d=\"M20.11 49.07a16.22 16.22 0 1 1 0 32.44\"></path><path class=\"cls-5\" d=\"M69.44 18.83L90 71H69.44V18.83z\"></path><path class=\"cls-5\" d=\"M57.59 71a6 6 0 0 1 12 0z\"></path></svg>"

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar4\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar4&quot;] .cls-1{fill:#ffe0c3} [data-name=&quot;PolarisAvatar4&quot;] .cls-2{fill:#5d6cc1} [data-name=&quot;PolarisAvatar4&quot;] .cls-3{fill:#ff967d} [data-name=&quot;PolarisAvatar4&quot;] .cls-4{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px} [data-name=&quot;PolarisAvatar4&quot;] .cls-5{fill:#ebedf1;opacity:.2} </style></defs><path class=\"cls-1\" d=\"M0-.01h100v100H0z\"></path><path class=\"cls-2\" d=\"M0 0h69.02v100H0z\"></path><path class=\"cls-3\" d=\"M69.02 0l24.03 61.69H69.02V0z\"></path><path class=\"cls-4\" d=\"M30.69 31.91v-3c0-4.78 3.46-8.65 8-8.65s8 3.87 8 8.65v3\"></path><path class=\"cls-5\" d=\"M12.76 56.06a13.36 13.36 0 1 1 26.72 0\"></path><path class=\"cls-3\" d=\"M80 61.46l-29.34.23v-7.33c0-6.28 4.07-11.36 10.34-11.44l19-.14z\"></path></svg>"

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar5&quot;] .cls-1{fill:#8dc958} [data-name=&quot;PolarisAvatar5&quot;] .cls-2{fill:#2db167} [data-name=&quot;PolarisAvatar5&quot;] .cls-3{fill:#245b48} [data-name=&quot;PolarisAvatar5&quot;] .cls-4{fill:#ebedf1;opacity:.2} </style></defs><path class=\"cls-1\" d=\"M0 0h70.02v100H0z\"></path><path class=\"cls-2\" d=\"M69.92 0v56.32L49 67l-.3 25.07V100H100V0z\"></path><path class=\"cls-3\" d=\"M59.27 58.29a5.22 5.22 0 0 0-9.43 4.48\"></path><path class=\"cls-2\" d=\"M27.12 9.33h44.53v2.19H27.12zm-12.41 9.49h56.94v2.19H14.71z\"></path><circle class=\"cls-4\" cx=\"19.66\" cy=\"44.8\" r=\"11.22\"></circle></svg>"

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar6\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar6&quot;] .cls-1{fill:#ffe0c3} [data-name=&quot;PolarisAvatar6&quot;] .cls-2{fill:#ff967d} [data-name=&quot;PolarisAvatar6&quot;] .cls-3{fill:#32cac6} [data-name=&quot;PolarisAvatar6&quot;] .cls-4{fill:#009796} [data-name=&quot;PolarisAvatar6&quot;] .cls-5, [data-name=&quot;PolarisAvatar6&quot;] .cls-6{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10} [data-name=&quot;PolarisAvatar6&quot;] .cls-5{stroke-width:5px} [data-name=&quot;PolarisAvatar6&quot;] .cls-6{stroke-width:4px} </style></defs><path class=\"cls-1\" d=\"M-.02-.01h100v100h-100z\"></path><path class=\"cls-2\" d=\"M0 0h69.41v100H0z\"></path><path class=\"cls-1\" d=\"M69.92 0v44.32L51.34 55v45H100V0z\"></path><path class=\"cls-3\" d=\"M39.32 76a11.85 11.85 0 0 0 12 11.62V76\"></path><path class=\"cls-4\" d=\"M39.32 76a12 12 0 0 1 12-11.82V76\"></path><path class=\"cls-5\" d=\"M43.74 19.83a12.82 12.82 0 1 1-25.64 0\"></path><path class=\"cls-6\" d=\"M27.39 31.6l-1.58 5.96m9.37-5.72l2.55 5.47m4.26-9.85l3.53 4.5m-25.43-4.5l-3.53 4.5\"></path></svg>"

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar7\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar7&quot;] .cls-1{fill:#8dc958} [data-name=&quot;PolarisAvatar7&quot;] .cls-2{fill:#2db167} [data-name=&quot;PolarisAvatar7&quot;] .cls-3{fill:#fff} [data-name=&quot;PolarisAvatar7&quot;] .cls-4{fill:#245b48} </style></defs><path class=\"cls-1\" d=\"M0 0h100v100.48H0z\"></path><path class=\"cls-2\" d=\"M83 68v32l-14-.16v.16H0V0h69v68h14z\"></path><path class=\"cls-1\" d=\"M69.29 41.69H20.66s-.09-3-.17 7.15 7 18.51 17.35 18.59l31.45.57z\"></path><path class=\"cls-3\" d=\"M68.7 12.4l11.54 29.29H68.7V12.4z\"></path><path class=\"cls-3\" d=\"M62.22 41.69a3.34 3.34 0 1 1 6.69 0z\"></path><path class=\"cls-4\" d=\"M41.45 18.06a2.57 2.57 0 0 0-5.14 0M33.33 24a2.57 2.57 0 1 0-5.14 0m20.36 2.58a2.57 2.57 0 1 0-5.14 0\"></path></svg>"

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar8\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar8&quot;] .cls-1{fill:#ffedb9} [data-name=&quot;PolarisAvatar8&quot;] .cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:5px} [data-name=&quot;PolarisAvatar8&quot;] .cls-3{fill:#ffc04d} [data-name=&quot;PolarisAvatar8&quot;] .cls-4{fill:#5d6cc1} </style></defs><path class=\"cls-1\" d=\"M0 0h100v100H0z\"></path><path class=\"cls-2\" d=\"M64.63 17.33a17 17 0 0 1 5 29.72 16.75 16.75 0 0 1-5 2.62\"></path><path class=\"cls-3\" d=\"M0 0h69.02v100H0z\"></path><circle class=\"cls-2\" cx=\"45.11\" cy=\"33.49\" r=\"16.98\" transform=\"rotate(-37.02 45.124 33.493)\"></circle><path class=\"cls-4\" d=\"M69.02 34.48l19.47 38.74-19.47 1.53V34.48z\"></path><path class=\"cls-2\" d=\"M61.6 33.67a10.17 10.17 0 0 1 15.4.08\"></path></svg>"

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = "<svg data-name=\"PolarisAvatar9\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style> [data-name=&quot;PolarisAvatar9&quot;] .cls-1{fill:#ffc04d} [data-name=&quot;PolarisAvatar9&quot;] .cls-2{fill:#5d6cc1} [data-name=&quot;PolarisAvatar9&quot;] .cls-3{fill:#41236e} [data-name=&quot;PolarisAvatar9&quot;] .cls-4{fill:#ebedf1;opacity:.2} </style></defs><path class=\"cls-1\" d=\"M0 0h100v100H0z\"></path><path class=\"cls-2\" d=\"M0 0h69.41v100H0z\"></path><path class=\"cls-1\" d=\"M70.21 80.88h-15.1c-4.81 0-5.68-5.84-5.68-5.84h20.78\"></path><path class=\"cls-2\" d=\"M82 60.48l-14 .25V0h10.17C80.59 20.14 82 60.48 82 60.48z\"></path><path class=\"cls-3\" d=\"M57.71 60.48a5.44 5.44 0 1 1 10.87 0\"></path><circle class=\"cls-4\" cx=\"24.77\" cy=\"40.19\" r=\"11.22\"></circle></svg>"

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.label,
      "role": "img"
    }
  }, [(_vm.source) ? _c('polaris-image', {
    staticClass: "Polaris-Avatar__Image",
    attrs: {
      "role": "presentation",
      "source": _vm.source,
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.source && !_vm.customer) ? _c('span', {
    staticClass: "Polaris-Avatar__Initials",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.initials) + "\n    ")]) : _vm._e(), _vm._v(" "), (!_vm.source && _vm.customer) ? _c('span', {
    staticClass: "Polaris-Avatar__Image",
    domProps: {
      "innerHTML": _vm._s(_vm.customerSvg)
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6113bb10", esExports)
  }
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        status: {
            type: String,
            default: 'default',
            validator: function validator(v) {
                return ['default', 'success', 'info', 'attention', 'warning'].indexOf(v) != -1;
            }
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Badge', ['status'], this);
        }
    }
}; //
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classes
  }, [(_vm.status != 'default') ? _c('span', {
    staticClass: "Polaris-VisuallyHidden"
  }, [_vm._v("\n        " + _vm._s(_vm.status.charAt(0).toUpperCase() + _vm.status.slice(1)) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f247658", esExports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisKeyboardKey_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisKeyboardKey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisKeyboardKey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d29d62e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisKeyboardKey_vue__ = __webpack_require__(168);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisKeyboardKey_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d29d62e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisKeyboardKey_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisKeyboardKey.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisKeyboardKey.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d29d62e", Component.options)
  } else {
    hotAPI.reload("data-v-2d29d62e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "Polaris-KeyboardKey"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d29d62e", esExports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        size: {
            type: String,
            default: 'medium',
            validator: function validator(v) {
                return ['small', 'medium', 'large'].indexOf(v) != -1;
            }
        },
        source: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Thumbnail', ['size'], this);
        }
    }
}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.classes
  }, [_c('img', {
    staticClass: "Polaris-Thumbnail__Image",
    attrs: {
      "src": _vm.source,
      "alt": _vm.alt
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-282bf91d", esExports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBanner_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBanner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBanner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac00826a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisBanner_vue__ = __webpack_require__(181);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBanner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac00826a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisBanner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisBanner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisBanner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac00826a", Component.options)
  } else {
    hotAPI.reload("data-v-ac00826a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _PolarisHeading = __webpack_require__(15);

var _PolarisHeading2 = _interopRequireDefault(_PolarisHeading);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisButtonGroup = __webpack_require__(7);

var _PolarisButtonGroup2 = _interopRequireDefault(_PolarisButtonGroup);

var _circleCheckMark = __webpack_require__(175);

var _circleCheckMark2 = _interopRequireDefault(_circleCheckMark);

var _flag = __webpack_require__(176);

var _flag2 = _interopRequireDefault(_flag);

var _circleAlert = __webpack_require__(177);

var _circleAlert2 = _interopRequireDefault(_circleAlert);

var _circleBarred = __webpack_require__(178);

var _circleBarred2 = _interopRequireDefault(_circleBarred);

var _circleInformation = __webpack_require__(179);

var _circleInformation2 = _interopRequireDefault(_circleInformation);

var _dismissIcon = __webpack_require__(180);

var _dismissIcon2 = _interopRequireDefault(_dismissIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisIcon: _PolarisIcon2.default,
        PolarisHeading: _PolarisHeading2.default,
        PolarisButton: _PolarisButton2.default,
        PolarisButtonGroup: _PolarisButtonGroup2.default
    },
    props: {
        title: String,
        icon: String,
        status: {
            type: String,
            default: 'default',
            validator: function validator(v) {
                return ['default', 'success', 'info', 'warning', 'critical'].indexOf(v) != -1;
            }
        },
        action: Object,
        secondaryAction: Object,
        children: String
    },
    data: function data() {
        return {
            dismissIcon: _dismissIcon2.default
        };
    },

    methods: {
        handleAction: function handleAction(action, handleUrl) {
            if (action.onAction) {
                action.onAction();
            }
            if (handleUrl && action.url) {
                window.location.href = action.url;
            }
        },
        onDismiss: function onDismiss() {
            this.$emit('dismiss');
        }
    },
    computed: {
        hasOnDismissHandler: function hasOnDismissHandler() {
            return this._events['dismiss'] && this._events['dismiss'].length > 0;
        },
        realId: function realId() {
            return 'Banner' + this._uid;
        },
        finalIconSource: function finalIconSource() {
            return this.iconSource;
        },
        iconSource: function iconSource() {
            var icon = this.icon;
            if (!icon) {
                switch (this.status) {
                    case 'success':
                        return _circleCheckMark2.default;
                    case 'info':
                        return _circleInformation2.default;
                    case 'warning':
                        return _circleAlert2.default;
                    case 'critical':
                        return _circleBarred2.default;
                    default:
                        return _flag2.default;
                }
            }
            return icon;
        },
        iconColor: function iconColor() {
            switch (this.status) {
                case 'success':
                    return 'greenDark';
                case 'info':
                    return 'tealDark';
                case 'warning':
                    return 'yellowDark';
                case 'critical':
                    return 'redDark';
                default:
                    return 'inkLighter';
            }
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-Banner', ['status'], this);

            if (this.hasOnDismissHandler) {
                r['Polaris-Banner--hasDismiss'] = true;
            }

            return r;
        }
    }

}; //
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

module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        tag: {
            type: String,
            default: 'h2'
        }
    },
    components: {
        DynamicTag: _DynamicTag2.default
    }
}; //
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    staticClass: "Polaris-Heading",
    attrs: {
      "tag": _vm.tag
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1dfcbd73", esExports)
  }
}

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#FFF\" cx=\"10\" cy=\"10\" r=\"9\"></circle><path d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2.293-10.707L9 10.586 7.707 9.293a1 1 0 1 0-1.414 1.414l2 2a.997.997 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414\" fill=\"#919EAB\"></path></g></svg>"

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FFF\" d=\"M2 3h11v4h6l-2 4 2 4H8v-4H3\"></path><path d=\"M16.105 11.447L17.381 14H9v-2h4a1 1 0 0 0 1-1V8h3.38l-1.274 2.552a.993.993 0 0 0 0 .895zM2.69 4H12v6H4.027L2.692 4zm15.43 7l1.774-3.553A1 1 0 0 0 19 6h-5V3c0-.554-.447-1-1-1H2.248L1.976.782a1 1 0 1 0-1.953.434l4 18a1.006 1.006 0 0 0 1.193.76 1 1 0 0 0 .76-1.194L4.47 12H7v3a1 1 0 0 0 1 1h11c.346 0 .67-.18.85-.476a.993.993 0 0 0 .044-.972l-1.775-3.553z\" fill=\"#919EAB\"></path></g></svg>"

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#FFF\" cx=\"10\" cy=\"10\" r=\"9\"></circle><path d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-13a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" fill=\"#919EAB\"></path></g></svg>"

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#FFF\" cx=\"10\" cy=\"10\" r=\"9\"></circle><path d=\"M2 10c0-1.846.635-3.543 1.688-4.897l11.209 11.209A7.954 7.954 0 0 1 10 18c-4.411 0-8-3.589-8-8m14.312 4.897L5.103 3.688A7.954 7.954 0 0 1 10 2c4.411 0 8 3.589 8 8a7.952 7.952 0 0 1-1.688 4.897M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10\" fill=\"#919EAB\"></path></g></svg>"

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\"><g fill=\"none\" fill-rule=\"evenodd\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"#FFF\"></circle><path fill=\"#919EAB\" d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m1-5v-3a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2m-1-5.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2\"></path></g></svg>"

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"Polaris-Icon__Svg\" viewBox=\"0 0 20 20\"><path d=\"M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    attrs: {
      "tabindex": "0",
      "role": 'banner ' + ((_vm.status == 'warning' || _vm.status == 'critical') ? 'alert' : ''),
      "aria-describedby": _vm.realId + 'Content',
      "aria-labelledby": _vm.realId + 'Heading'
    }
  }, [(_vm.hasOnDismissHandler) ? _c('div', {
    staticClass: "Polaris-Banner__Dismiss"
  }, [_c('polaris-button', {
    attrs: {
      "plain": "",
      "icon-only": "",
      "accessibility-label": "Dimiss notification",
      "icon": _vm.dismissIcon
    },
    on: {
      "click": _vm.onDismiss
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Banner__Ribbon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.iconSource,
      "color": _vm.iconColor,
      "backdrop": ""
    }
  })], 1), _vm._v(" "), _c('div', [(_vm.title) ? _c('div', {
    staticClass: "Polaris-Banner__Heading",
    attrs: {
      "id": _vm.realId + 'Heading'
    }
  }, [_c('polaris-heading', {
    attrs: {
      "tag": "p"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.$slots.default || _vm.action || _vm.secondaryAction || _vm.children) ? _c('div', {
    staticClass: "Polaris-Banner__Content",
    attrs: {
      "id": "realId+'Content'"
    }
  }, [_vm._t("default", [(_vm.children) ? _c('div', [_vm._v(_vm._s(_vm.children))]) : _vm._e()]), _vm._v(" "), (_vm.action) ? _c('div', {
    staticClass: "Polaris-Banner__Actions"
  }, [_c('polaris-button-group', [_c('polaris-button', {
    attrs: {
      "outline": "",
      "url": _vm.action.url,
      "destructive": _vm.action.destructive,
      "disabled": _vm.action.disabled,
      "accessibility-label": _vm.action.accessibilityLabel,
      "icon": _vm.action.label
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    },
    slot: "1"
  }, [_vm._v("\n                        " + _vm._s(_vm.action.content) + "\n                    ")]), _vm._v(" "), (_vm.secondaryAction) ? _c('div', {
    staticClass: "Polaris-Banner__SecondaryAction",
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.secondaryAction, true)
      }
    },
    slot: "2"
  }, [_c('span', {
    staticClass: "Polaris-Banner__Text"
  }, [_vm._v("\n                            " + _vm._s(_vm.secondaryAction.content) + "\n                        ")])]) : _vm._e()], 1)], 1) : _vm._e()], 2) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ac00826a", esExports)
  }
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisProgressBar_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisProgressBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisProgressBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4d2f97_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisProgressBar_vue__ = __webpack_require__(184);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisProgressBar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4d2f97_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisProgressBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisProgressBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisProgressBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f4d2f97", Component.options)
  } else {
    hotAPI.reload("data-v-4f4d2f97", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        progress: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            validate: function validate(s) {
                return ['small', 'medium', 'large'].indexOf(s) > -1;
            },

            default: 'medium'
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-ProgressBar', ['size'], this);
        },
        realProgress: function realProgress() {
            var r = this.progress;
            if (r < 0) {
                if (true) {
                    console.warn('Values passed to the progress prop shouldn\'t be negative.');
                }
                r = 0;
            } else if (r > 100) {
                if (true) {
                    console.warn('Values passed to the progress prop shouldn\'t be over 100.');
                }
                r = 100;
            }
            return r;
        }
    }

}; //
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
//
//

module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_c('progress', {
    staticClass: "Polaris-ProgressBar__Progress",
    attrs: {
      "value": _vm.realProgress,
      "max": "100"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "Polaris-ProgressBar__Indicator",
    style: ({
      width: _vm.realProgress + '%'
    }),
    attrs: {
      "role": "progressbar",
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "Polaris-ProgressBar__Label"
  }, [_vm._v("\n            " + _vm._s(_vm.realProgress) + "\n        ")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f4d2f97", esExports)
  }
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCalloutCard_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCalloutCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCalloutCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e70d351_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCalloutCard_vue__ = __webpack_require__(187);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCalloutCard_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e70d351_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCalloutCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisCalloutCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisCalloutCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e70d351", Component.options)
  } else {
    hotAPI.reload("data-v-3e70d351", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisCard = __webpack_require__(10);

var _PolarisCard2 = _interopRequireDefault(_PolarisCard);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisButtonGroup = __webpack_require__(7);

var _PolarisButtonGroup2 = _interopRequireDefault(_PolarisButtonGroup);

var _PolarisHeading = __webpack_require__(15);

var _PolarisHeading2 = _interopRequireDefault(_PolarisHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//

exports.default = {
    components: {
        PolarisCard: _PolarisCard2.default,
        PolarisButton: _PolarisButton2.default,
        PolarisHeading: _PolarisHeading2.default,
        PolarisButtonGroup: _PolarisButtonGroup2.default
    },
    props: {
        title: String,
        illustration: String,
        primaryAction: Object,
        secondaryAction: Object,
        children: String
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-card', {
    attrs: {
      "sectioned": ""
    }
  }, [_c('div', {
    staticClass: "Polaris-CalloutCard"
  }, [_c('div', {
    staticClass: "Polaris-CalloutCard__Content"
  }, [(_vm.title) ? _c('div', {
    staticClass: "Polaris-CalloutCard__Title"
  }, [_c('polaris-heading', {
    attrs: {
      "tag": "h2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.title) + "\n                ")])], 1) : _vm._e(), _vm._v(" "), (_vm.$slots.default || _vm.children) ? _c('div', {
    staticClass: "Polaris-TextContainer"
  }, [_vm._t("default", [_c('p', [_vm._v(_vm._s(_vm.children))])])], 2) : _vm._e(), _vm._v(" "), (_vm.primaryAction) ? _c('div', {
    staticClass: "Polaris-CalloutCard__Buttons"
  }, [_c('polaris-button-group', [(_vm.primaryAction) ? _c('polaris-button', {
    attrs: {
      "url": _vm.primaryAction.url,
      "accessibility-label": _vm.primaryAction.accessibilityLabel,
      "disabled": _vm.primaryAction.disabled,
      "destructive": _vm.primaryAction.destructive,
      "icon": _vm.primaryAction.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.primaryAction)
      }
    },
    slot: "1"
  }, [_vm._v("\n                        " + _vm._s(_vm.primaryAction.content) + "\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.secondaryAction) ? _c('polaris-button', {
    attrs: {
      "plain": "",
      "url": _vm.secondaryAction.url,
      "accessibility-label": _vm.secondaryAction.accessibilityLabel,
      "disabled": _vm.secondaryAction.disabled,
      "destructive": _vm.secondaryAction.destructive,
      "icon": _vm.secondaryAction.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.secondaryAction)
      }
    },
    slot: "2"
  }, [_vm._v("\n                        " + _vm._s(_vm.secondaryAction.content) + "\n                    ")]) : _vm._e()], 1)], 1) : _vm._e()]), _vm._v(" "), (_vm.illustration) ? _c('img', {
    staticClass: "Polaris-CalloutCard__Image",
    attrs: {
      "src": _vm.illustration,
      "alt": ""
    }
  }) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e70d351", esExports)
  }
}

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisEmptyState_vue__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisEmptyState_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisEmptyState_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7c1a13a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisEmptyState_vue__ = __webpack_require__(190);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisEmptyState_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7c1a13a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisEmptyState_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisEmptyState.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisEmptyState.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7c1a13a", Component.options)
  } else {
    hotAPI.reload("data-v-b7c1a13a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {},
    props: {
        heading: String,
        image: String,
        largeImage: String,
        imageContained: Boolean,
        action: Object,
        secondaryAction: Object
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-EmptyState', ['imageContained'], this);
        }
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
}; //
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
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_c('div', {
    staticClass: "Polaris-EmptyState__Section"
  }, [_c('div', {
    staticClass: "Polaris-EmptyState__DetailsContainer"
  }, [_c('div', {
    staticClass: "Polaris-EmptyState__Details"
  }, [_c('polaris-text-container', [(_vm.heading) ? _c('polaris-display-text', {
    attrs: {
      "size": "medium"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.heading) + "\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('div', {
    staticClass: "Polaris-EmptyState__Content"
  }, [_vm._t("default")], 2) : _vm._e()], 1), _vm._v(" "), (_vm.action) ? _c('div', {
    staticClass: "Polaris-EmptyState__Actions"
  }, [_c('polaris-button-group', [_c('polaris-button', {
    attrs: {
      "size": "large",
      "primary": "",
      "url": _vm.action.url,
      "accessibility-label": _vm.action.accessibilityLabel,
      "disabled": _vm.action.disabled,
      "destructive": _vm.action.destructive,
      "icon": _vm.action.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action)
      }
    },
    slot: "1"
  }, [_vm._v("\n                            " + _vm._s(_vm.action.content) + "\n                        ")]), _vm._v(" "), (_vm.secondaryAction) ? _c('polaris-button', {
    attrs: {
      "plain": "",
      "url": _vm.secondaryAction.url,
      "accessibility-label": _vm.secondaryAction.accessibilityLabel,
      "disabled": _vm.secondaryAction.disabled,
      "destructive": _vm.secondaryAction.destructive,
      "icon": _vm.secondaryAction.icon
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.secondaryAction)
      }
    },
    slot: "2"
  }, [_vm._v("\n                            " + _vm._s(_vm.secondaryAction.content) + "\n                        ")]) : _vm._e()], 1)], 1) : _vm._e()], 1)]), _vm._v(" "), (_vm.image) ? _c('div', {
    staticClass: "Polaris-EmptyState__ImageContainer"
  }, [_c('img', {
    staticClass: "Polaris-EmptyState__Image",
    attrs: {
      "src": _vm.image,
      "role": "presentation",
      "alt": "",
      "srcset": _vm.largeImage ? _vm.image + ' 568w,' + _vm.largeImage + ' 1136w' : '',
      "sizes": "largeImage ? (max-width: 568px) 60vw : ''"
    }
  })]) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b7c1a13a", esExports)
  }
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayout_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0849e86e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLayout_vue__ = __webpack_require__(193);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0849e86e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLayout_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisLayout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisLayout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0849e86e", Component.options)
  } else {
    hotAPI.reload("data-v-0849e86e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        sectioned: Boolean
    }
};
module.exports = exports["default"];

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-Layout"
  }, [_vm._l((_vm.$slots), function(slot, name) {
    return (_vm.sectioned) ? [_c('polaris-layout-section', [_vm._t(name)], 2)] : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.$slots), function(slot, name) {
    return (!_vm.sectioned) ? [_vm._t(name)] : _vm._e()
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0849e86e", esExports)
  }
}

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPage_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3edb4e6e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPage_vue__ = __webpack_require__(214);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPage_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3edb4e6e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3edb4e6e", Component.options)
  } else {
    hotAPI.reload("data-v-3edb4e6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisPageHeader = __webpack_require__(196);

var _PolarisPageHeader2 = _interopRequireDefault(_PolarisPageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//

exports.default = {
    components: {
        PolarisPageHeader: _PolarisPageHeader2.default
    },
    props: {
        title: {
            type: String,
            required: true
        },
        icon: String,
        breadcrumbs: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        fullWidth: Boolean,
        singleColumn: Boolean,
        secondaryActions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        separator: Boolean,
        primaryAction: Object,
        pagination: Object,
        actionGroups: Array
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Page', ['fullWidth'], this);
        },
        headerClasses: function headerClasses() {
            var r = {
                'Polaris-Page__Header': true
            };
            if (this.breadcrumbs.length > 0) {
                r['Polaris-Page__Header--hasBreadcrumbs'] = true;
            }
            if (this.pagination) {
                r['Polaris-Page__Header--hasPagination'] = true;
            }

            return r;
        }
    },
    methods: {
        handleAction: function handleAction(action, handleUrl) {
            if (action.onAction) {
                action.onAction();
            }
            if (handleUrl && action.url) {
                window.location.href = action.url;
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageHeader_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b28d73ca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPageHeader_vue__ = __webpack_require__(213);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageHeader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b28d73ca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPageHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPageHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPageHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b28d73ca", Component.options)
  } else {
    hotAPI.reload("data-v-b28d73ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisActionList = __webpack_require__(28);

var _PolarisActionList2 = _interopRequireDefault(_PolarisActionList);

var _PolarisPopover = __webpack_require__(16);

var _PolarisPopover2 = _interopRequireDefault(_PolarisPopover);

var _PolarisPageAction = __webpack_require__(206);

var _PolarisPageAction2 = _interopRequireDefault(_PolarisPageAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//
//

exports.default = {
    components: {
        PolarisActionList: _PolarisActionList2.default,
        PolarisPopup: _PolarisPopover2.default,
        PolarisPopover: _PolarisPopover2.default,
        PolarisPageAction: _PolarisPageAction2.default
    },
    props: {
        title: String,
        icon: String,
        separator: Boolean,
        breadcrumbs: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        primaryAction: Object,
        secondaryActions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        pagination: Object,
        actionGroups: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            rollupOpen: false,
            openActionGroup: null
        };
    },

    computed: {
        actionGroupsAsListSections: function actionGroupsAsListSections() {
            return this.actionGroups.map(function (ag) {
                return { title: ag.title, items: ag.actions };
            });
        },
        hasBreadcrumbs: function hasBreadcrumbs() {
            return this.breadcrumbs && this.breadcrumbs.length > 0;
        },
        hasRollup: function hasRollup() {
            return this.secondaryActions.length + this.actionGroups.length > 1;
        },
        classes: function classes() {
            return {
                'Polaris-Page__Header': true,
                'Polaris-Page__Header--hasPagination': !!this.pagination,
                'Polaris-Page__Header--hasSeparator': this.separator,
                'Polaris-Page__Header--hasBreadcrumbs': this.breadcrumbs && this.breadcrumbs.length > 0,
                'Polaris-Page__Header--hasRollup': this.hasRollup,
                'Polaris-Page__Header--hasSecondaryActions': this.secondaryActions && this.secondaryActions.length > 0
            };
        }
    },
    methods: {
        handleRollupToggle: function handleRollupToggle() {
            this.rollupOpen = !this.rollupOpen;
        },
        handleAction: function handleAction(action, handleUrl) {
            if (action.onAction) {
                action.onAction();
            }
            if (handleUrl && action.url) {
                window.location.href = action.url;
            }
        },
        handleActionGroupOpen: function handleActionGroupOpen(group) {
            this.openActionGroup = group.title;
        },
        handleActionGroupClose: function handleActionGroupClose(group) {
            this.openActionGroup = null;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisPopoverOverlay = __webpack_require__(199);

var _PolarisPopoverOverlay2 = _interopRequireDefault(_PolarisPopoverOverlay);

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        DynamicTag: _DynamicTag2.default,
        PolarisPopoverOverlay: _PolarisPopoverOverlay2.default
    },
    props: {
        active: Boolean,
        preferredPosition: {
            type: String,
            default: 'below'
        },
        activatorWrapper: String,
        preventAutofocus: Boolean,
        sectioned: Boolean,
        fullWidth: Boolean
    },
    computed: {
        realId: function realId() {
            return 'PolarisPopover' + this._uid;
        },
        activatorId: function activatorId() {
            return this.realId + 'Activator';
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-Popover', ['fullWidth', 'measuring'], this);
            if (this.positioning === 'above') {
                r['Polaris-Popover--positionedAbove'] = true;
            }
            return r;
        }
    },
    mounted: function mounted() {
        this.$refs.container.$el.firstElementChild.id = this.activatorId;

        window.addEventListener('click', this.handlePageClick);
        window.addEventListener('touchstart', this.handlePageClick);
        document.addEventListener('keyup', this.handleKeyPress);
    },

    methods: {
        findActivator: function findActivator() {
            return document.getElementById(this.activatorId);
        },
        handleKeyPress: function handleKeyPress(e) {
            if (e.keyCode != 27) {
                return;
            }
            this.$emit('close', 'EscapeKeypress');
        },
        handlePageClick: function handlePageClick(e) {
            var target = e.target;
            var contentNode = this.$refs.content;
            if (contentNode != null && this.nodeContainsDescendant(contentNode, target) || this.nodeContainsDescendant(this.findActivator(), target) || !this.active) {
                return;
            }
            this.$emit('close', 'Click');
        },
        nodeContainsDescendant: function nodeContainsDescendant(haystack, needle) {
            if (haystack === needle) {
                return true;
            }
            var parent = needle.parentNode;
            while (parent != null) {
                if (parent === haystack) {
                    return true;
                }
                parent = parent.parentNode;
            }
            return false;
        },
        onActivate: function onActivate() {},
        handleFocusFirstItem: function handleFocusFirstItem() {
            this.$emit('close', 'FocusOut');
        },
        handleFocusLastItem: function handleFocusLastItem() {
            this.$emit('close', 'FocusOut');
        },
        onClose: function onClose() {
            this.$emit('close', 'Click');
        }
    }
}; //
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
//
//

module.exports = exports['default'];

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopoverOverlay_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopoverOverlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopoverOverlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_514b7b0a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPopoverOverlay_vue__ = __webpack_require__(204);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPopoverOverlay_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_514b7b0a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPopoverOverlay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPopoverOverlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPopoverOverlay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-514b7b0a", Component.options)
  } else {
    hotAPI.reload("data-v-514b7b0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisPositionedOverlay = __webpack_require__(201);

var _PolarisPositionedOverlay2 = _interopRequireDefault(_PolarisPositionedOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisPositionedOverlay: _PolarisPositionedOverlay2.default
    },
    props: {
        id: String,
        active: Boolean,
        preventAutofocus: Boolean,
        sectioned: Boolean,
        fullWidth: Boolean,
        preferredPosition: {
            type: String,
            default: 'below'
        },
        activatorId: String
    },
    methods: {
        handleScrollOut: function handleScrollOut() {
            this.$emit('scrollout');
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPositionedOverlay_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPositionedOverlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPositionedOverlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_567fd64e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPositionedOverlay_vue__ = __webpack_require__(203);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPositionedOverlay_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_567fd64e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPositionedOverlay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPositionedOverlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPositionedOverlay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-567fd64e", Component.options)
  } else {
    hotAPI.reload("data-v-567fd64e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//

exports.default = {
    props: {
        active: Boolean,
        preferredPosition: {
            type: String,
            validate: function validate(v) {
                return ['above', 'below', 'mostSpace'].indexOf(v) > -1;
            }
        },
        activatorId: String,
        fullWidth: Boolean
    },
    data: function data() {
        return {
            measuring: true,
            left: 0,
            top: 0,
            height: 0,
            width: null,
            positioning: 'below',
            zIndex: null,
            outsideScrollableContainer: false,
            tipPosition: null
        };
    },

    computed: {
        containerStyle: function containerStyle() {
            return {
                top: this.top + 'px',
                left: this.left + 'px',
                width: this.width ? this.width + 'px' : undefined,
                zIndex: this.zIndex == null ? undefined : this.zIndex
            };
        },
        scrollableContainer: function scrollableContainer() {
            var selector = '.Polaris-Scrollable';
            var closest = null;
            if (this.activator.closest) {
                closest = this.activator.closest(selector);
            } else {
                var matches = document.querySelectorAll(selector);
                var i = void 0;
                var el = this.activator;
                do {
                    el = el.parentElement;
                    i = matches.length;
                    while (--i >= 0 && matches.item(i) !== el) {
                        continue;
                    }
                } while (i < 0 && el);
                closest = el;
            }

            return closest || document;
        }
    },
    watch: {
        active: function active() {
            this.$nextTick(this.handleMeasurement);
            setTimeout(this.handleMeasurement, 500);
        }
    },
    mounted: function mounted() {
        window.addEventListener('resize', this.handleMeasurement);
        window.addEventListener('scroll', this.handleMeasurement);
        this.handleMeasurement();
    },

    methods: {
        handleMeasurement: function handleMeasurement() {
            var activator = document.getElementById(this.activatorId);
            if (!activator) {
                return;
            }

            var activatorRect = activator.getBoundingClientRect();
            var currentOverlayRect = this.$refs.overlay.getBoundingClientRect();
            var scrollableElement = !this.scrollableElement || this.scrollableElement === document ? document.body : scrollableElement;
            var scrollableContainerRect = scrollableElement.getBoundingClientRect();

            var overlayRect = currentOverlayRect;
            if (this.fullWidth) {
                overlayRect.width = activatorRect.width;
            }

            if (scrollableElement === document.body) {
                scrollableContainerRect = {
                    height: document.body.scrollHeight,
                    width: scrollableContainerRect.width,
                    top: scrollableContainerRect.top,
                    bottom: scrollableContainerRect.bottom
                };
            }

            var overlayMargins = this.$refs.overlay.firstElementChild ? this.getMarginsForNode(this.$refs.overlay.firstElementChild) : { activator: 0, container: 0, horizontal: 0 };

            var containerRect = {
                top: window.scrollY,
                left: window.scrollX,
                height: window.innerHeight,
                width: window.innerWidth
            };

            console.log({
                containerRect: containerRect,
                test: 'b'
            });

            var zIndexForLayer = 10;
            var verticalPosition = this.calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, this.preferredPosition);
            var horizontalPosition = this.calculateHorizontalPosition(activatorRect, overlayRect, containerRect);

            this.measuring = false;
            this.left = horizontalPosition, this.top = verticalPosition.top;
            this.height = verticalPosition.height;
            this.width = this.fullWidth ? overlayRect.width : null;
            this.positioning = verticalPosition.positioning;
            this.zIndex = zIndexForLayer;

            this.tipPosition = activatorRect.left + activatorRect.width / 2 - this.left;
        },
        getMarginsForNode: function getMarginsForNode(node) {
            var styles = window.getComputedStyle(node);
            return {
                activator: parseFloat(styles.marginTop || ''),
                container: parseFloat(styles.marginBottom || ''),
                horizontal: parseFloat(styles.marginLeft || '')
            };
        },
        calculateHorizontalPosition: function calculateHorizontalPosition(activatorRect, overlayRect, containerRect) {
            var maximum = containerRect.width - overlayRect.width;
            var center = {
                x: activatorRect.left + activatorRect.width / 2,
                y: activatorRect.top + activatorRect.height / 2
            };
            return Math.min(maximum, Math.max(0, center.x - overlayRect.width / 2));
        },
        calculateVerticalPosition: function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition) {
            var activatorTop = activatorRect.top;
            var activatorBottom = activatorTop + activatorRect.height;
            var spaceAbove = activatorRect.top;
            var spaceBelow = containerRect.height - activatorRect.top - activatorRect.height;

            var desiredHeight = overlayRect.height;
            var verticalMargins = overlayMargins.activator + overlayMargins.container;
            var minimumSpaceToScroll = overlayMargins.container;
            var distanceToTopScroll = activatorRect.top - Math.max(scrollableContainerRect.top, 0);
            var distanceToBottomScroll = containerRect.top + Math.min(containerRect.height, scrollableContainerRect.top + scrollableContainerRect.height) - (activatorRect.top + activatorRect.height);

            var enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll;
            var enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll;

            var heightIfBelow = Math.min(spaceBelow, desiredHeight);
            var heightIfAbove = Math.min(spaceAbove, desiredHeight);

            var positionIfAbove = {
                height: heightIfAbove - verticalMargins,
                top: activatorTop + containerRect.top - heightIfAbove,
                positioning: 'above'
            };

            var positionIfBelow = {
                height: heightIfBelow - verticalMargins,
                top: activatorBottom + containerRect.top,
                positioning: 'bottom'
            };

            console.log({
                activatorBottom: activatorBottom,
                containerRect: containerRect
            });

            if (preferredPosition === 'above') {
                return (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow;
            }

            if (preferredPosition === 'below') {
                return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove;
            }

            if (enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll) {
                return spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow;
            }

            return distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    ref: "overlay",
    staticClass: "Polaris-PositionedOverlay",
    style: (_vm.containerStyle)
  }, [_vm._t("overlay", null, {
    measuring: _vm.measuring,
    left: _vm.left,
    desiredHeight: _vm.height,
    positioning: _vm.positioning,
    tipPosition: _vm.tipPosition
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-567fd64e", esExports)
  }
}

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-positioned-overlay', {
    attrs: {
      "full-width": _vm.fullWidth,
      "active": _vm.active,
      "preferred-position": _vm.preferredPosition,
      "activator-id": _vm.activatorId
    },
    on: {
      "scrollout": _vm.handleScrollOut
    },
    scopedSlots: _vm._u([{
      key: "overlay",
      fn: function(props) {
        return [_vm._t("overlay", null, {
          data: props
        })]
      }
    }])
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-514b7b0a", esExports)
  }
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    ref: "container",
    attrs: {
      "tag": _vm.activatorWrapper || 'div'
    }
  }, [_vm._t("activator", null, {
    activate: _vm.onActivate
  }), _vm._v(" "), _c('polaris-popover-overlay', {
    attrs: {
      "id": _vm.realId + 'Overlay',
      "active": _vm.active,
      "activator-id": _vm.activatorId,
      "preferred-position": _vm.preferredPosition
    },
    on: {
      "close": _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "overlay",
      fn: function(props) {
        return [_c('div', {
          ref: "content",
          class: _vm.classes
        }, [(!props.data.measuring) ? _c('div', {
          staticClass: "Polaris-Popover__Tip",
          style: ({
            left: props.data.tipPosition + 'px'
          })
        }) : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "Polaris-Popover__FocusTracker",
          attrs: {
            "tabindex": "0"
          },
          on: {
            "focus": _vm.handleFocusFirstItem
          }
        }), _vm._v(" "), _c('div', {
          staticClass: "Polaris-Popover__Wrapper"
        }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
          staticClass: "Polaris-Popover__FocusTracker",
          attrs: {
            "tabindex": "0"
          },
          on: {
            "focus": _vm.handleFocusLastItem
          }
        })])]
      }
    }])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17a09496", esExports)
  }
}

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageAction_vue__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageAction_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageAction_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1883578_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPageAction_vue__ = __webpack_require__(212);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageAction_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1883578_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPageAction_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPageAction.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPageAction.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1883578", Component.options)
  } else {
    hotAPI.reload("data-v-c1883578", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DynamicTemplate = __webpack_require__(208);

var _DynamicTemplate2 = _interopRequireDefault(_DynamicTemplate);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisUnstyledLink = __webpack_require__(9);

var _PolarisUnstyledLink2 = _interopRequireDefault(_PolarisUnstyledLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    components: {
        DynamicTemplate: _DynamicTemplate2.default,
        PolarisIcon: _PolarisIcon2.default,
        PolarisButton: _PolarisButton2.default,
        PolarisUnstyledLink: _PolarisUnstyledLink2.default
    },
    props: {
        icon: String,
        url: String,
        external: Boolean,
        disclosure: Boolean,
        accessibilityLabel: String,
        disabled: Boolean
    },
    computed: {
        classes: function classes() {
            var r = {
                'Polaris-Page__Action': 1,
                'Polaris-Page__Action--disabled': this.disabled,
                'Polaris-Page__Action--iconOnly': this.icon && this.emptyChildren
            };
            return r;
        },
        emptyChildren: function emptyChildren() {
            return !!this.$slots.default;
        }
    },
    methods: {
        handleMouseUp: function handleMouseUp() {
            console.log('todo');
        },
        onAction: function onAction() {
            this.$emit('click');
            this.$emit('action');
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTemplate_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTemplate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTemplate_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DynamicTemplate_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DynamicTemplate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-072d9030", Component.options)
  } else {
    hotAPI.reload("data-v-072d9030", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    render: function render(createElement) {
        var validSlot = this.$slots.active;
        console.log('valid slot', validSlot);
        if (validSlot) {
            return validSlot[0];
        } else {
            console.log('returned empty div');
            return createElement('div');
        }
    },

    props: {}
};
module.exports = exports['default'];

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        url: String,
        external: Boolean
    }
};
module.exports = exports["default"];

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": _vm.url,
      "target": _vm.external ? '_blank' : '',
      "rel": _vm.external ? 'noopener noreferrer' : '',
      "data-polaris-unstyled": "true"
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d5dc025", esExports)
  }
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-template', [(_vm.url) ? _c('template', {
    slot: "active"
  }, [_c('polaris-unstyled-link', {
    staticClass: "Polaris-Page__Action",
    attrs: {
      "external": _vm.external,
      "url": _vm.url,
      "aria-label": _vm.accessibilityLabel
    },
    on: {
      "mouse-up": _vm.handleMouseUp
    }
  }, [(_vm.icon || _vm.disclosure) ? [_c('span', {
    staticClass: "Polaris-Page__ActionContent"
  }, [(_vm.icon) ? _c('span', {
    staticClass: "Polaris-Page__ActionIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.icon
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('span', [(_vm.icon || _vm.disclosure) ? _vm._t("default") : _vm._e()], 2), _vm._v(" "), (_vm.disclosure) ? _c('span', {
    staticClass: "Polaris-Page__ActionIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": "caretDown"
    }
  })], 1) : _vm._e()])] : _vm._e(), _vm._v(" "), (!_vm.icon && !_vm.disclosure) ? [(!_vm.icon && !_vm.disclosure) ? _vm._t("default") : _vm._e()] : _vm._e()], 2)], 1) : _vm._e(), _vm._v(" "), (!_vm.url) ? _c('template', {
    slot: "active"
  }, [_c('button', {
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.accessibilityLabel,
      "disabled": _vm.disabled,
      "type": "button"
    },
    on: {
      "click": _vm.onAction,
      "mouse-up": _vm.handleMouseUp
    }
  }, [(_vm.icon || _vm.disclosure) ? [_c('span', {
    staticClass: "Polaris-Page__ActionContent"
  }, [(_vm.icon) ? _c('span', {
    staticClass: "Polaris-Page__ActionIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.icon
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('span', [(_vm.icon || _vm.disclosure) ? _vm._t("default") : _vm._e()], 2), _vm._v(" "), (_vm.disclosure) ? _c('span', {
    staticClass: "Polaris-Page__ActionIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": "caretDown"
    }
  })], 1) : _vm._e()])] : _vm._e(), _vm._v(" "), (!_vm.icon && !_vm.disclosure) ? [(!_vm.icon && !_vm.disclosure) ? _vm._t("default") : _vm._e()] : _vm._e()], 2)]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c1883578", esExports)
  }
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [(_vm.hasBreadcrumbs || _vm.pagination) ? _c('div', {
    staticClass: "Polaris-Page__Navigation"
  }, [(_vm.breadcrumbs.length > 0) ? _c('polaris-breadcrumbs', {
    attrs: {
      "breadcrumbs": _vm.breadcrumbs
    }
  }) : _vm._e(), _vm._v(" "), (_vm.pagination) ? _c('div', {
    staticClass: "Polaris-Page__Pagination"
  }, [_c('polaris-pagination', {
    attrs: {
      "plain": "",
      "has-next": _vm.pagination.hasNext,
      "has-previous": _vm.pagination.hasPrevious,
      "next-url": _vm.pagination.nextURL,
      "previous-url": _vm.pagination.previousURL
    }
  })], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.primaryAction) ? [_c('div', {
    staticClass: "Polaris-Page__MainContent"
  }, [_c('div', {
    staticClass: "Polaris-Page__TitleAndActions"
  }, [_c('div', {
    staticClass: "Polaris-Page__Title"
  }, [_c('polaris-display-text', {
    attrs: {
      "size": "large",
      "element": "h1"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.title) + "\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__Actions"
  }, [_c('div', {
    staticClass: "Polaris-Page__PrimaryAction"
  }, [_c('polaris-button', {
    attrs: {
      "primary": "",
      "accessibility-label": _vm.primaryAction.accessibiltyLabel,
      "url": _vm.primaryAction.url,
      "external": _vm.primaryAction.external,
      "disabled": _vm.primaryAction.disabled,
      "destructive": _vm.primaryAction.destructive,
      "icon": _vm.primaryAction.icon,
      "loading": _vm.primaryAction.loading
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.primaryAction, true)
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.primaryAction.content) + "\n                        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__SecondaryActions"
  }, [(_vm.hasRollup) ? _c('div', {
    staticClass: "Polaris-Page__Rollup"
  }, [_c('polaris-popover', {
    attrs: {
      "active": _vm.rollupOpen
    },
    on: {
      "close": _vm.handleRollupToggle
    }
  }, [_c('template', {
    slot: "activator"
  }, [_c('polaris-button', {
    attrs: {
      "disclosure": ""
    },
    on: {
      "click": _vm.handleRollupToggle
    }
  }, [_vm._v("\n                                        Actions\n                                    ")])], 1), _vm._v(" "), _c('polaris-action-list', {
    attrs: {
      "items": _vm.secondaryActions,
      "sections": _vm.actionGroupsAsListSections
    },
    on: {
      "action-any-item": _vm.handleRollupToggle
    }
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__IndividualActions"
  }, [_vm._l((_vm.secondaryActions), function(action) {
    return _c('polaris-page-action', {
      attrs: {
        "accessibility-label": action.accessibiltyLabel,
        "url": action.url,
        "external": action.external,
        "disabled": action.disabled,
        "destructive": action.destructive,
        "icon": action.icon,
        "loading": action.loading
      },
      on: {
        "click": function($event) {
          _vm.handleAction(action, true)
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(action.content) + "\n                            ")])
  }), _vm._v(" "), _vm._l((_vm.actionGroups), function(group) {
    return _c('div', {
      staticClass: "Polaris-Page__ActionGroup"
    }, [_c('polaris-popover', {
      attrs: {
        "active": group.title === _vm.openActionGroup
      },
      on: {
        "close": function($event) {
          _vm.handleActionGroupClose(group)
        }
      }
    }, [_c('template', {
      slot: "activator"
    }, [_c('polaris-page-action', {
      attrs: {
        "disclosure": "",
        "icon": group.icon
      },
      on: {
        "action": function($event) {
          _vm.handleActionGroupOpen(group)
        }
      }
    }, [_vm._v("\n                                            " + _vm._s(group.title) + "\n                                        ")])], 1), _vm._v(" "), _c('polaris-action-list', {
      attrs: {
        "items": group.actions
      },
      on: {
        "action-any-item": function($event) {
          _vm.handleActionGroupClose(group)
        }
      }
    }), _vm._v(" "), (group.details) ? _c('div', {
      staticClass: "Polaris-Page__Details"
    }, [_vm._v("\n                                        " + _vm._s(group.details) + "\n                                    ")]) : _vm._e()], 2)], 1)
  })], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__PrimaryAction"
  }, [_c('polaris-button', {
    attrs: {
      "primary": "",
      "accessibility-label": _vm.primaryAction.accessibiltyLabel,
      "url": _vm.primaryAction.url,
      "external": _vm.primaryAction.external,
      "disabled": _vm.primaryAction.disabled,
      "destructive": _vm.primaryAction.destructive,
      "icon": _vm.primaryAction.icon,
      "loading": _vm.primaryAction.loading
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.primaryAction, true)
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.primaryAction.content) + "\n                ")])], 1)])] : _vm._e(), _vm._v(" "), (!_vm.primaryAction) ? [_c('div', {
    staticClass: "Polaris-Page__Title"
  }, [_c('polaris-display-text', {
    attrs: {
      "size": "large",
      "element": "h1"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__Actions"
  }, [_c('div', {
    staticClass: "Polaris-Page__SecondaryActions"
  }, [(_vm.hasRollup) ? _c('div', {
    staticClass: "Polaris-Page__Rollup"
  }, [_c('polaris-popover', {
    attrs: {
      "active": _vm.rollupOpen
    },
    on: {
      "close": _vm.handleRollupToggle
    }
  }, [_c('template', {
    slot: "activator"
  }, [_c('polaris-button', {
    attrs: {
      "disclosure": ""
    },
    on: {
      "click": _vm.handleRollupToggle
    }
  }, [_vm._v("\n                                Actions\n                            ")])], 1), _vm._v(" "), _c('polaris-action-list', {
    attrs: {
      "items": _vm.secondaryActions,
      "sections": _vm.actionGroupsAsListSections
    },
    on: {
      "action-any-item": _vm.handleRollupToggle
    }
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__IndividualActions"
  }, [_vm._l((_vm.secondaryActions), function(action) {
    return _c('polaris-page-action', {
      attrs: {
        "accessibility-label": action.accessibiltyLabel,
        "url": action.url,
        "external": action.external,
        "disabled": action.disabled,
        "destructive": action.destructive,
        "icon": action.icon,
        "loading": action.loading
      },
      on: {
        "click": function($event) {
          _vm.handleAction(action, true)
        }
      }
    }, [_vm._v("\n                            " + _vm._s(action.content) + "\n                    ")])
  }), _vm._v(" "), _vm._l((_vm.actionGroups), function(group) {
    return _c('div', {
      staticClass: "Polaris-Page__ActionGroup"
    }, [_c('polaris-popover', {
      attrs: {
        "active": group.title === _vm.openActionGroup
      },
      on: {
        "close": function($event) {
          _vm.handleActionGroupClose(group)
        }
      }
    }, [_c('template', {
      slot: "activator"
    }, [_c('polaris-page-action', {
      attrs: {
        "disclosure": "",
        "icon": group.icon
      },
      on: {
        "action": function($event) {
          _vm.handleActionGroupOpen(group)
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(group.title) + "\n                                ")])], 1), _vm._v(" "), _c('polaris-action-list', {
      attrs: {
        "items": group.actions
      },
      on: {
        "action-any-item": function($event) {
          _vm.handleActionGroupClose(group)
        }
      }
    }), _vm._v(" "), (group.details) ? _c('div', {
      staticClass: "Polaris-Page__Details"
    }, [_vm._v("\n                                " + _vm._s(group.details) + "\n                            ")]) : _vm._e()], 2)], 1)
  })], 2)])])] : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b28d73ca", esExports)
  }
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_c('polaris-page-header', {
    attrs: {
      "title": _vm.title,
      "icon": _vm.icon,
      "breadcrumbs": _vm.breadcrumbs,
      "separator": _vm.separator,
      "primary-action": _vm.primaryAction,
      "secondary-actions": _vm.secondaryActions,
      "pagination": _vm.pagination,
      "action-groups": _vm.actionGroups
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Page__Content"
  }, [_vm._t("default")], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3edb4e6e", esExports)
  }
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageActions_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageActions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageActions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bec645f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPageActions_vue__ = __webpack_require__(220);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPageActions_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bec645f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPageActions_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPageActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPageActions.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bec645f", Component.options)
  } else {
    hotAPI.reload("data-v-4bec645f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisStack = __webpack_require__(32);

var _PolarisStack2 = _interopRequireDefault(_PolarisStack);

var _PolarisButtonGroup = __webpack_require__(7);

var _PolarisButtonGroup2 = _interopRequireDefault(_PolarisButtonGroup);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisStack: _PolarisStack2.default,
        PolarisButtonGroup: _PolarisButtonGroup2.default,
        PolarisButton: _PolarisButton2.default
    },
    props: {
        primaryAction: Object,
        secondaryActions: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisStackItem = __webpack_require__(33);

var _PolarisStackItem2 = _interopRequireDefault(_PolarisStackItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    polarisName: 'Stack',
    render: function render(createElement) {
        return createElement('div', {
            'class': this.classes
        }, _ComponentHelpers2.default.wrapNodesWithComponent(createElement, this.$slots.default, _PolarisStackItem2.default));
    },

    props: {
        vertical: Boolean,
        wrap: Boolean,
        spacing: {
            type: String,
            default: 'tight',
            validator: function validator(v) {
                return ['extraTight', 'tight', 'loose', 'extraLoose', 'none'].indexOf(v) != -1;
            }
        },
        alignment: {
            type: String,
            default: 'leading',
            validator: function validator(v) {
                return ['leading', 'trailing', 'center', 'fill', 'baseline'].indexOf(v) != -1;
            }
        },
        distribution: {
            type: String,
            default: 'leading',
            validator: function validator(v) {
                return ['equalSpacing', 'leading', 'trailing', 'center', 'fill', 'baseline', 'fillEvenly'].indexOf(v) != -1;
            }
        }
    },
    computed: {
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-Stack', ['vertical', 'spacing', 'alignment', 'distribution'], this);
            r['Polaris-Stack--noWrap'] = !this.wrap;
            return r;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    polarisName: 'StackItem',
    props: {
        fill: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'Polaris-Stack__Item': true,
                'Polaris-Stack__Item--fill': this.fill
            };
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb245328", esExports)
  }
}

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-PageActions"
  }, [_c('polaris-stack', {
    attrs: {
      "spacing": "tight",
      "distribution": _vm.secondaryActions.length > 0 ? 'equalSpacing' : 'trailing'
    }
  }, [(_vm.secondaryActions.length > 0) ? _c('polaris-stack-item', [_c('polaris-button-group', _vm._l((_vm.secondaryActions), function(action, index) {
    return _c('polaris-button', {
      key: "action",
      attrs: {
        "accessibility-label": action.accessibilityLabel,
        "url": action.url,
        "disabled": action.disabled,
        "destructive": action.destructive
      },
      on: {
        "click": function($event) {
          _vm.handleAction(action)
        }
      },
      slot: index
    }, [_vm._v("\n                    " + _vm._s(action.content) + "\n                ")])
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.primaryAction) ? _c('polaris-stack-item', [_c('polaris-button', {
    attrs: {
      "accessibility-label": _vm.primaryAction.accessibilityLabel,
      "url": _vm.primaryAction.url,
      "disabled": _vm.primaryAction.disabled,
      "destructive": _vm.primaryAction.destructive,
      "primary": ""
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.primaryAction)
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.primaryAction.content) + "\n            ")])], 1) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4bec645f", esExports)
  }
}

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCaption_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCaption_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCaption_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6e77152_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCaption_vue__ = __webpack_require__(223);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCaption_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6e77152_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCaption_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisCaption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisCaption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d6e77152", Component.options)
  } else {
    hotAPI.reload("data-v-d6e77152", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "Polaris-Caption"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d6e77152", esExports)
  }
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = {
    props: {
        element: {
            type: String,
            default: 'p'
        },
        size: {
            type: String,
            default: 'default',
            validator: function validator(v) {
                return ['default', 'small', 'medium', 'large', 'extraLarge'].indexOf(v) !== -1;
            }
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-DisplayText', ['size'], this);
        }
    },
    components: {
        DynamicTag: _DynamicTag2.default
    }
};
module.exports = exports['default'];

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    class: _vm.classes,
    attrs: {
      "tag": _vm.element
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-212cfd80", esExports)
  }
}

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFooterHelp_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFooterHelp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFooterHelp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25b76f9b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisFooterHelp_vue__ = __webpack_require__(229);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFooterHelp_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25b76f9b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisFooterHelp_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisFooterHelp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisFooterHelp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25b76f9b", Component.options)
  } else {
    hotAPI.reload("data-v-25b76f9b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _footerHelp = __webpack_require__(228);

var _footerHelp2 = _interopRequireDefault(_footerHelp);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    components: {
        PolarisIcon: _PolarisIcon2.default
    },
    data: function data() {
        return {
            helpIcon: _footerHelp2.default
        };
    }
};
module.exports = exports['default'];

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"#FFF\"></circle><path d=\"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-4a1 1 0 1 0 0 2 1 1 0 1 0 0-2m0-10C8.346 4 7 5.346 7 7a1 1 0 1 0 2 0 1.001 1.001 0 1 1 1.591.808C9.58 8.548 9 9.616 9 10.737V11a1 1 0 1 0 2 0v-.263c0-.653.484-1.105.773-1.317A3.013 3.013 0 0 0 13 7c0-1.654-1.346-3-3-3\" fill=\"currentColor\"></path></svg>"

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-FooterHelp"
  }, [_c('div', {
    staticClass: "Polaris-FooterHelp__Content"
  }, [_c('div', {
    staticClass: "Polaris-FooterHelp__Icon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": "help",
      "color": "teal",
      "backdrop": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-FooterHelp__Text"
  }, [_vm._t("default")], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25b76f9b", esExports)
  }
}

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisVisuallyHidden_vue__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisVisuallyHidden_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisVisuallyHidden_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22ea3bf6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisVisuallyHidden_vue__ = __webpack_require__(232);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisVisuallyHidden_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22ea3bf6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisVisuallyHidden_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisVisuallyHidden.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisVisuallyHidden.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22ea3bf6", Component.options)
  } else {
    hotAPI.reload("data-v-22ea3bf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "Polaris-VisuallyHidden"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22ea3bf6", esExports)
  }
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        lines: {
            type: Number,
            default: 3
        }
    }
};
module.exports = exports["default"];

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-SkeletonBodyTextContainer"
  }, _vm._l((_vm.lines), function(i) {
    return _c('div', {
      staticClass: "Polaris-SkeletonBodyText"
    })
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fafdc3b", esExports)
  }
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        size: {
            type: String,
            validate: function validate(s) {
                return ['small', 'medium', 'large', 'extraLarge'].indexOf(s) > -1;
            }
        }
    },
    computed: {
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-SkeletonDisplayText', ['size'], this);
            r['Polaris-SkeletonDisplayText'] = false;
            r['Polaris-SkeletonDisplayText__DisplayText'] = true;
            return r;
        }
    }
}; //
//
//
//

module.exports = exports['default'];

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c251073", esExports)
  }
}

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonPage_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonPage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonPage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_456b524a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSkeletonPage_vue__ = __webpack_require__(239);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSkeletonPage_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_456b524a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSkeletonPage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSkeletonPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSkeletonPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-456b524a", Component.options)
  } else {
    hotAPI.reload("data-v-456b524a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisDisplayText = __webpack_require__(34);

var _PolarisDisplayText2 = _interopRequireDefault(_PolarisDisplayText);

var _PolarisSkeletonDisplayText = __webpack_require__(36);

var _PolarisSkeletonDisplayText2 = _interopRequireDefault(_PolarisSkeletonDisplayText);

var _PolarisSkeletonBodyText = __webpack_require__(35);

var _PolarisSkeletonBodyText2 = _interopRequireDefault(_PolarisSkeletonBodyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//

exports.default = {
    components: {
        PolarisDisplayText: _PolarisDisplayText2.default,
        PolarisSkeletonDisplayText: _PolarisSkeletonDisplayText2.default,
        PolarisSkeletonBodyText: _PolarisSkeletonBodyText2.default
    },
    props: {
        title: String,
        fullWidth: Boolean,
        secondaryActions: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-SkeletonPage', ['fullWidth'], this);
        },
        headerClasses: function headerClasses() {
            return {
                'Polaris-SkeletonPage__Header': 1,
                'Polaris-SkeletonPage__Header--hasSecondaryActions': this.secondaryActions.length > 0
            };
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    attrs: {
      "role": "status",
      "aria-label": "Page loading"
    }
  }, [_c('div', {
    class: _vm.headerClasses
  }, [(_vm.title) ? _c('polaris-display-text', {
    attrs: {
      "size": "large",
      "element": "h1"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]) : _vm._e(), _vm._v(" "), (!_vm.title) ? _c('polaris-skeleton-display-text', {
    attrs: {
      "size": "large"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-SkeletonPage__Actions"
  }, _vm._l((_vm.secondaryActions), function(action) {
    return _c('div', {
      staticClass: "Polaris-SkeletonPage__Action",
      style: ({
        width: (Math.round(Math.random() * 40 + 60)) + 'px'
      })
    }, [_c('polaris-skeleton-body-text', {
      attrs: {
        "lines": 1
      }
    })], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-SkeletonPage__Content"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-456b524a", esExports)
  }
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _checkbox = __webpack_require__(241);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxErrorIcon = __webpack_require__(242);

var _checkboxErrorIcon2 = _interopRequireDefault(_checkboxErrorIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    model: {
        prop: 'checked',
        event: 'change'
    },
    components: {
        PolarisIcon: _PolarisIcon2.default
    },
    props: {
        label: String,
        labelHidden: Boolean,
        checked: {
            type: [Boolean, String],
            default: false,
            validator: function validator(v) {
                console.log({ v: v });
                return v && typeof v === 'string' ? v === 'indeterminate' : true;
            }
        },
        helpText: String,
        id: String,
        name: String,
        value: String,
        error: [Boolean, String],
        disabled: Boolean
    },
    data: function data() {
        return {
            checkboxErrorIcon: _checkboxErrorIcon2.default
        };
    },

    computed: {
        checkIcon: function checkIcon() {
            return this.indeterminate ? 'subtract' : 'checkmark';
        },
        indeterminate: function indeterminate() {
            return this.checked == 'indeterminate';
        },
        realId: function realId() {
            return this.id || 'Checkbox' + this._uid;
        },
        helpTextId: function helpTextId() {
            if (!this.helpText) {
                return null;
            }
            return this.realId + 'HelpText';
        },
        errorId: function errorId() {
            if (!this.error || typeof this.error != 'string') {
                return null;
            }
            return this.realId + 'Error';
        },
        inputClasses: function inputClasses() {
            return {
                'Polaris-Checkbox__Input': true,
                'Polaris-Checkbox__Input--checked': this.checked,
                'Polaris-Checkbox__Input--indeterminate': this.indeterminate
            };
        },
        labelClasses: function labelClasses() {
            return {
                'Polaris-Choice': true,
                'Polaris-Choice--labelHidden': this.labelHidden
            };
        },
        checkboxClasses: function checkboxClasses() {
            return {
                'Polaris-Checkbox': true,
                'Polaris-Checkbox--error': this.error
            };
        }
    },
    methods: {
        onChange: function onChange(e) {
            var target = e.target || e.srcElement;
            this.$emit('change', target.checked);
        },
        onFocus: function onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.$emit('blur', e);
        }
    }
}; //
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
//

module.exports = exports['default'];

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"Polaris-Icon__Svg\" viewBox=\"0 0 20 20\"><g fill-rule=\"evenodd\"><path d=\"M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0\"></path><path d=\"M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0\"></path></g></svg>"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"Polaris-Icon__Svg\" viewBox=\"0 0 20 20\"><path d=\"M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', {
    class: _vm.labelClasses,
    attrs: {
      "for": _vm.realId
    }
  }, [_c('span', {
    staticClass: "Polaris-Choice__Control"
  }, [_c('div', {
    class: _vm.checkboxClasses
  }, [_c('input', {
    class: _vm.inputClasses,
    attrs: {
      "type": "checkbox",
      "id": _vm.realId,
      "name": _vm.name,
      "aria-invald": _vm.error == true,
      "aria-describedBy": _vm.helpTextId + ' ' + _vm.errorId,
      "role": "checkbox",
      "aria-checked": _vm.indeterminate ? 'mixed' : (_vm.checked ? 'true' : null),
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "blur": _vm.onBlur
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Checkbox__Backdrop"
  }), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Checkbox__Icon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.checkIcon
    }
  })], 1)])]), _vm._v(" "), _c('span', {
    staticClass: "Polaris-Choice__Label"
  }, [_vm._v("\n            " + _vm._s(_vm.label) + "    \n        ")])]), _vm._v(" "), (_vm.helpText || _vm.$slots.helpText || (_vm.error && (typeof _vm.error == 'string'))) ? _c('div', {
    staticClass: "Polaris-Choice__Descriptions"
  }, [(_vm.error && (typeof _vm.error == 'string')) ? _c('div', {
    staticClass: "Polaris-Choice__Error",
    attrs: {
      "id": "errorId"
    }
  }, [_c('div', {
    staticClass: "Polaris-Choice__ErrorIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.checkboxErrorIcon
    }
  })], 1), _vm._v("\n            " + _vm._s(_vm.error) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.helpText || _vm.$slots.helpText) ? _c('div', {
    staticClass: "Polaris-Choice__HelpText",
    attrs: {
      "id": _vm.helpTextId
    }
  }, [_vm._t("helpText", [_vm._v(_vm._s(_vm.helpText))])], 2) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-457adbbc", esExports)
  }
}

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoiceList_vue__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoiceList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoiceList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b81ec704_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisChoiceList_vue__ = __webpack_require__(251);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoiceList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b81ec704_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisChoiceList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisChoiceList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisChoiceList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b81ec704", Component.options)
  } else {
    hotAPI.reload("data-v-b81ec704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisCheckbox = __webpack_require__(37);

var _PolarisCheckbox2 = _interopRequireDefault(_PolarisCheckbox);

var _PolarisRadioButton = __webpack_require__(38);

var _PolarisRadioButton2 = _interopRequireDefault(_PolarisRadioButton);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    model: {
        prop: 'selected',
        event: 'change'
    },
    components: {
        PolarisCheckbox: _PolarisCheckbox2.default,
        PolarisRadioButton: _PolarisRadioButton2.default
    },
    props: {
        title: String,
        titleHidden: Boolean,
        choices: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        selected: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        name: String,
        allowMultiple: Boolean,
        disabled: Boolean
    },
    computed: {
        finalName: function finalName() {
            return this.allowMultiple ? this.name + '[]' : this.name;
        },
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-ChoiceList', ['titleHidden'], this);
        }
    },
    methods: {
        choiceIsSelected: function choiceIsSelected(choice) {
            if (!this.selected) {
                return false;
            }
            return this.selected.indexOf(choice.value) >= 0;
        },
        handleChange: function handleChange(e, choice) {
            var newSelected = [];

            if (e) {
                if (this.allowMultiple) {
                    newSelected = (this.selected || []).slice();
                    newSelected.push(choice.value);
                } else {
                    newSelected = [choice.value];
                }
            } else {
                newSelected = (this.selected || []).slice().filter(function (item) {
                    return item !== choice.value;
                });
            }

            this.$emit('change', newSelected);
        }
    }

}; //
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
//

module.exports = exports['default'];

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisChoice = __webpack_require__(247);

var _PolarisChoice2 = _interopRequireDefault(_PolarisChoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    model: {
        prop: 'checked',
        event: 'change'
    },
    components: {
        PolarisChoice: _PolarisChoice2.default
    },
    props: {
        label: String,
        labelHidden: Boolean,
        helpText: String,
        checked: Boolean,
        id: String,
        name: String,
        value: String,
        disabled: Boolean
    },
    computed: {
        realId: function realId() {
            return this.id || 'PolarisRadioButton' + this._uid;
        }
    },
    methods: {
        onChange: function onChange(e) {
            var target = e.target || e.srcElement;
            this.$emit('change', target.checked);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoice_vue__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07695ac0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisChoice_vue__ = __webpack_require__(249);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisChoice_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07695ac0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisChoice_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisChoice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisChoice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07695ac0", Component.options)
  } else {
    hotAPI.reload("data-v-07695ac0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alertIcon = __webpack_require__(39);

var _alertIcon2 = _interopRequireDefault(_alertIcon);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//

exports.default = {
    props: {
        id: String,
        label: String,
        error: [String, Boolean],
        children: String,
        labelHidden: Boolean,
        helpText: String
    },
    data: function data() {
        return {
            alertIcon: _alertIcon2.default
        };
    },

    computed: {
        labelClasses: function labelClasses() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Choice', ['labelHidden'], this);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', {
    class: _vm.labelClasses,
    attrs: {
      "for": _vm.id
    }
  }, [_c('span', {
    staticClass: "Polaris-Choice__Control"
  }, [(!_vm.$slots.children) ? _vm._t("default", [_vm._v("\n                " + _vm._s(_vm.children) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm._t("children")], 2), _vm._v(" "), _c('span', {
    staticClass: "Polaris-Choice__Label"
  }, [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")])]), _vm._v(" "), (typeof _vm.error === 'string' || _vm.helpText || _vm.$slots.helpText) ? _c('div', {
    staticClass: "Polaris-Choice__Descriptions"
  }, [(typeof _vm.error === 'string') ? _c('div', {
    staticClass: "Polaris-Choice__Error",
    attrs: {
      "id": _vm.id + 'Error'
    }
  }, [_c('div', {
    staticClass: "Polaris-Choice__ErrorIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.alertIcon
    }
  }), _vm._v("\n                " + _vm._s(_vm.error) + "\n            ")], 1)]) : _vm._e(), _vm._v(" "), (_vm.helpText || _vm.$slots.helpText) ? _c('div', {
    staticClass: "Polaris-Choice__HelpText",
    attrs: {
      "id": _vm.id + 'HelpText'
    }
  }, [_vm._t("helpText", [_vm._v(_vm._s(_vm.helpText))])], 2) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07695ac0", esExports)
  }
}

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-choice', {
    attrs: {
      "label": _vm.label,
      "label-hidden": _vm.labelHidden,
      "id": _vm.realId,
      "help-text": _vm.helpText
    }
  }, [(_vm.$slots.helpText) ? _c('template', {
    slot: "helpText"
  }, [_vm._t("helpText")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-RadioButton"
  }, [_c('input', {
    staticClass: "Polaris-RadioButton__Input",
    attrs: {
      "id": _vm.realId,
      "name": _vm.name,
      "type": "radio",
      "disabled": _vm.disabled,
      "aria-describedby": _vm.helpText ? _vm.id + 'HelpText' : ''
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "blur": _vm.onBlur
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "Polaris-RadioButton__Backdrop"
  }), _vm._v(" "), _c('div', {
    staticClass: "Polaris-RadioButton__Icon"
  })])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a93fa704", esExports)
  }
}

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fieldset', {
    class: _vm.classes
  }, [(_vm.title) ? _c('legend', {
    staticClass: "Polaris-ChoiceList__Title"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "Polaris-ChoiceList__Choices"
  }, _vm._l((_vm.choices), function(choice) {
    return _c('li', [(_vm.allowMultiple) ? _c('polaris-checkbox', {
      attrs: {
        "name": _vm.finalName,
        "value": choice.value,
        "label": choice.label,
        "helpText": choice.helpText,
        "disabled": _vm.disabled,
        "checked": _vm.choiceIsSelected(choice)
      },
      on: {
        "change": function($event) {
          _vm.handleChange($event, choice)
        }
      }
    }) : _vm._e(), _vm._v(" "), (!_vm.allowMultiple) ? _c('polaris-radio-button', {
      attrs: {
        "name": _vm.finalName,
        "value": choice.value,
        "label": choice.label,
        "helpText": choice.helpText,
        "disabled": _vm.disabled,
        "checked": _vm.choiceIsSelected(choice)
      },
      on: {
        "change": function($event) {
          _vm.handleChange($event, choice)
        }
      }
    }) : _vm._e()], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b81ec704", esExports)
  }
}

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPicker_vue__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8efe0d7c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPicker_vue__ = __webpack_require__(264);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8efe0d7c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPicker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisColorPicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisColorPicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8efe0d7c", Component.options)
  } else {
    hotAPI.reload("data-v-8efe0d7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HSBColor = __webpack_require__(17);

var _HSBColor2 = _interopRequireDefault(_HSBColor);

var _PolarisColorPickerAlphaPicker = __webpack_require__(255);

var _PolarisColorPickerAlphaPicker2 = _interopRequireDefault(_PolarisColorPickerAlphaPicker);

var _PolarisColorPickerHuePicker = __webpack_require__(261);

var _PolarisColorPickerHuePicker2 = _interopRequireDefault(_PolarisColorPickerHuePicker);

var _PolarisColorPickerSlidable = __webpack_require__(18);

var _PolarisColorPickerSlidable2 = _interopRequireDefault(_PolarisColorPickerSlidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//
//
//

exports.default = {
    model: {
        prop: 'color',
        event: 'change'
    },
    components: {
        PolarisColorPickerAlphaPicker: _PolarisColorPickerAlphaPicker2.default,
        PolarisColorPickerHuePicker: _PolarisColorPickerHuePicker2.default,
        PolarisColorPickerSlidable: _PolarisColorPickerSlidable2.default
    },
    props: {
        color: {
            type: Object,
            default: function _default() {
                return new _HSBColor2.default(0, 1, 1, 1);
            }
        },
        allowAlpha: Boolean
    },
    data: function data() {
        return {
            pickerSize: 0
        };
    },
    mounted: function mounted() {
        this.pickerSize = this.$refs.palette.clientWidth;
    },

    computed: {
        draggerX: function draggerX() {
            return Math.max(0, Math.min(this.pickerSize, this.color.saturation * this.pickerSize));
        },
        draggerY: function draggerY() {
            return Math.max(0, Math.min(this.pickerSize, this.pickerSize - this.color.brightness * this.pickerSize));
        },
        colorLayerStyle: function colorLayerStyle() {
            var hsbColor = new _HSBColor2.default(this.color.hue, 1, 1, this.color.alpha);
            var rgbColor = hsbColor.toRGB();
            return {
                background: rgbColor.toCssString()
            };
        }
    },
    methods: {
        handleHueChange: function handleHueChange(e) {
            var newColor = new _HSBColor2.default(e, this.color.saturation, this.color.brightness, this.color.alpha);

            this.$emit('change', newColor);
        },
        handleAlphaChange: function handleAlphaChange(e) {
            var newColor = new _HSBColor2.default(this.color.hue, this.color.saturation, this.color.brightness, e);

            this.$emit('change', newColor);
        },
        handleDraggerMove: function handleDraggerMove(e) {
            var saturation = Math.max(0, Math.min(1, e.x / this.pickerSize));
            var brightness = Math.max(0, Math.min(1, 1 - e.y / this.pickerSize));

            var newColor = new _HSBColor2.default(this.color.hue, saturation, brightness, this.color.alpha);

            this.$emit('change', newColor);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HSBColor = __webpack_require__(17);

var _HSBColor2 = _interopRequireDefault(_HSBColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RGBColor = function () {
    function RGBColor(red, green, blue) {
        var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        _classCallCheck(this, RGBColor);

        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    _createClass(RGBColor, [{
        key: 'toCssString',
        value: function toCssString() {
            return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
        }
    }, {
        key: 'toHSB',
        value: function toHSB() {
            var r = this.red / 255;
            var g = this.green / 255;
            var b = this.blue / 255;

            var largestComponent = Math.max(r, g, b);
            var smallestComponent = Math.min(r, g, b);

            var delta = largestComponent - smallestComponent;
            var saturation = largestComponent === 0 ? 0 : delta / largestComponent;

            var huePercentage = 0;
            switch (largestComponent) {
                case r:
                    huePercentage = (g - b) / delta % 6;
                    break;
                case g:
                    huePercentage = (b - r) / delta + 2;
                    break;
                case b:
                    huePercentage = (r - g) / delta + 4;
                    break;
            }

            var hue = Math.round(huePercentage / 6 * 360);

            return new _HSBColor2.default(Math.min(0, Math.max(360, hue)), Math.min(0, Math.max(1, saturation)), Math.min(0, Math.max(1, largestComponent)), this.alpha);
        }
    }]);

    return RGBColor;
}();

exports.default = RGBColor;
module.exports = exports['default'];

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerAlphaPicker_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerAlphaPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerAlphaPicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de0591cc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPickerAlphaPicker_vue__ = __webpack_require__(260);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerAlphaPicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de0591cc_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPickerAlphaPicker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisColorPickerAlphaPicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisColorPickerAlphaPicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de0591cc", Component.options)
  } else {
    hotAPI.reload("data-v-de0591cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HSBColor = __webpack_require__(17);

var _HSBColor2 = _interopRequireDefault(_HSBColor);

var _PolarisColorPickerSlidable = __webpack_require__(18);

var _PolarisColorPickerSlidable2 = _interopRequireDefault(_PolarisColorPickerSlidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var VERTICAL_PADDING = 13;

exports.default = {
    model: {
        prop: 'alpha',
        event: 'change'
    },
    components: {
        PolarisColorPickerSlidable: _PolarisColorPickerSlidable2.default
    },
    props: {
        color: {
            type: Object,
            default: function _default() {
                return new _HSBColor2.default(0, 1, 1, 1);
            }
        },
        alpha: Number
    },
    data: function data() {
        return {
            dragging: false,
            sliderHeight: 0,
            draggerHeight: 0
        };
    },
    mounted: function mounted() {
        this.sliderHeight = this.$refs.slider.clientHeight;
    },

    computed: {
        offset: function offset() {
            return this.offsetForAlpha(this.alpha, this.sliderHeight, this.draggerHeight);
        },
        background: function background() {
            var hslColor = new _HSBColor2.default(this.color.hue, this.color.saturation, this.color.brightness, this.color.alpha);
            var rgbColor = hslColor.toRGB();
            var rgb = rgbColor.red + ', ' + rgbColor.green + ', ' + rgbColor.blue;

            return {
                background: 'linear-gradient(to top, rgba(' + rgb + ', 0) 18px, rgba(' + rgb + ', 1) calc(100% - 18px))'
            };
        }
    },
    methods: {
        handleDraggerHeight: function handleDraggerHeight(e) {
            this.draggerHeight = e;
        },
        onChange: function onChange(e) {
            this.$emit('change', this.alphaForOffset(e.y, this.sliderHeight));
        },
        alphaForOffset: function alphaForOffset(offset, sliderHeight) {
            var selectionHeight = offset - VERTICAL_PADDING;
            var slideableArea = sliderHeight - 2 * VERTICAL_PADDING;
            return Math.max(0, Math.min(1, 1 - selectionHeight / slideableArea));
        },
        offsetForAlpha: function offsetForAlpha(alpha, sliderHeight, draggerHeight) {
            var slideableArea = sliderHeight - (draggerHeight + VERTICAL_PADDING);
            return Math.max(0, Math.min(sliderHeight - draggerHeight, (1 - alpha) * slideableArea) + VERTICAL_PADDING);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(258);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        draggerX: Number,
        draggerY: Number
    },
    data: function data() {
        return {
            dragging: false
        };
    },
    mounted: function mounted() {
        console.log('draggerheight', this.$refs.dragger.clientWidth);
        this.$emit('draggerheight', this.$refs.dragger.clientWidth);

        window.addEventListener('mousemove', this.handleMove);
        window.addEventListener('touchmove', this.handleMove);
        window.addEventListener('mouseup', this.endDrag);
        window.addEventListener('touchend', this.endDrag);
        window.addEventListener('touchcancel', this.endDrag);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('mousemove', this.handleMove);
        window.removeEventListener('touchmove', this.handleMove);
        window.removeEventListener('mouseup', this.endDrag);
        window.removeEventListener('touchend', this.endDrag);
        window.removeEventListener('touchcancel', this.endDrag);
    },

    computed: {
        draggerStyle: function draggerStyle() {
            return {
                transform: 'translate3d(' + this.draggerX + 'px, ' + this.draggerY + 'px, 0)'
            };
        }
    },
    methods: {
        startDrag: function startDrag(e) {
            if (e.type === 'mousedown') {
                this.handleDraggerMove(e.clientX, e.clientY);
            }
            this.dragging = true;
        },
        handleMove: function handleMove(e) {
            if (!this.dragging) {
                return;
            }
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();

            if (e.type === 'mousemove') {
                this.handleDraggerMove(e.clientX, e.clientY);
                return;
            }

            this.handleDraggerMove(e.touches[0].clientX, e.touches[1].clientY);
        },
        endDrag: function endDrag() {
            this.dragging = false;
        },
        handleDraggerMove: function handleDraggerMove(x, y) {
            var rect = this.$refs.track.getBoundingClientRect();
            this.$emit('change', {
                x: x - rect.left,
                y: y - rect.top
            });
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_258__;

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "track",
    staticClass: "Polaris-ColorPicker__Slidable",
    on: {
      "mousedown": _vm.startDrag,
      "touchstart": _vm.startDrag
    }
  }, [_c('div', {
    ref: "dragger",
    staticClass: "Polaris-ColorPicker__Dragger",
    style: (_vm.draggerStyle)
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-beea5e20", esExports)
  }
}

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "slider",
    staticClass: "Polaris-ColorPicker__AlphaPicker"
  }, [_c('div', {
    staticClass: "Polaris-ColorPicker__ColorLayer",
    style: (_vm.background)
  }), _vm._v(" "), _c('polaris-color-picker-slidable', {
    attrs: {
      "dragger-y": _vm.offset,
      "dragger-x": 0
    },
    on: {
      "change": _vm.onChange,
      "draggerheight": _vm.handleDraggerHeight
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de0591cc", esExports)
  }
}

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerHuePicker_vue__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerHuePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerHuePicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_344db098_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPickerHuePicker_vue__ = __webpack_require__(263);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisColorPickerHuePicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_344db098_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisColorPickerHuePicker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisColorPickerHuePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisColorPickerHuePicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-344db098", Component.options)
  } else {
    hotAPI.reload("data-v-344db098", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisColorPickerSlidable = __webpack_require__(18);

var _PolarisColorPickerSlidable2 = _interopRequireDefault(_PolarisColorPickerSlidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERTICAL_PADDING = 13; //
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

exports.default = {
    components: {
        PolarisColorPickerSlidable: _PolarisColorPickerSlidable2.default
    },
    model: {
        prop: 'hue',
        event: 'change'
    },
    props: {
        hue: Number
    },
    data: function data() {
        return {
            dragging: false,
            sliderHeight: 0,
            draggerHeight: 0
        };
    },
    mounted: function mounted() {
        this.sliderHeight = this.$refs.picker.clientHeight;
    },

    computed: {
        offset: function offset() {
            return this.offsetForHue(this.hue, this.sliderHeight, this.draggerHeight);
        }
    },
    methods: {
        handleDraggerHeight: function handleDraggerHeight(e) {
            this.draggerHeight = e;
        },
        handleChange: function handleChange(e) {
            this.$emit('change', this.hueForOffset(e.y, this.sliderHeight));
        },
        offsetForHue: function offsetForHue(hue, sliderHeight, draggerHeight) {
            var slidableArea = sliderHeight - VERTICAL_PADDING;
            return Math.max(VERTICAL_PADDING, Math.min(sliderHeight - draggerHeight, hue / 360 * slidableArea));
        },
        hueForOffset: function hueForOffset(offset, sliderHeight) {
            var selectionHeight = offset - VERTICAL_PADDING;
            var slidableArea = sliderHeight - 2 * VERTICAL_PADDING;
            return Math.max(0, Math.min(360, selectionHeight / slidableArea * 360));
        }
    }

};
module.exports = exports['default'];

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "picker",
    staticClass: "Polaris-ColorPicker__HuePicker"
  }, [_c('polaris-color-picker-slidable', {
    attrs: {
      "dragger-y": _vm.offset,
      "dragger-x": 0
    },
    on: {
      "change": _vm.handleChange,
      "draggerheight": _vm.handleDraggerHeight
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-344db098", esExports)
  }
}

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-ColorPicker"
  }, [_c('div', {
    ref: "palette",
    staticClass: "Polaris-ColorPicker__MainColor"
  }, [_c('div', {
    staticClass: "Polaris-ColorPicker__ColorLayer",
    style: (_vm.colorLayerStyle)
  }), _vm._v(" "), _c('polaris-color-picker-slidable', {
    attrs: {
      "dragger-x": _vm.draggerX,
      "dragger-y": _vm.draggerY
    },
    on: {
      "change": _vm.handleDraggerMove
    }
  })], 1), _vm._v(" "), _c('polaris-color-picker-hue-picker', {
    attrs: {
      "hue": _vm.color.hue
    },
    on: {
      "change": _vm.handleHueChange
    }
  }), _vm._v(" "), (_vm.allowAlpha) ? _c('polaris-color-picker-alpha-picker', {
    attrs: {
      "alpha": _vm.color.alpha
    },
    on: {
      "change": _vm.handleAlphaChange
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8efe0d7c", esExports)
  }
}

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePicker_vue__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac77140a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePicker_vue__ = __webpack_require__(276);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac77140a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePicker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisDatePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisDatePicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac77140a", Component.options)
  } else {
    hotAPI.reload("data-v-ac77140a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisDatePickerMonth = __webpack_require__(267);

var _PolarisDatePickerMonth2 = _interopRequireDefault(_PolarisDatePickerMonth);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _dateUtils = __webpack_require__(19);

var _dateUtils2 = _interopRequireDefault(_dateUtils);

var _arrowLeft = __webpack_require__(40);

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _arrowRight = __webpack_require__(41);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    model: {
        prop: 'selected',
        event: 'change'
    },
    components: {
        PolarisButton: _PolarisButton2.default,
        PolarisDatePickerMonth: _PolarisDatePickerMonth2.default
    },
    props: {
        selected: [Date, Object],
        month: {
            type: Number,
            default: function _default() {
                return new Date().getMonth();
            }
        },
        year: {
            type: Number,
            default: function _default() {
                return new Date().getFullYear();
            }
        },
        disableDatesBefore: Date,
        disableDatesAfter: Date,
        multiMonth: Boolean
    },
    data: function data() {
        return {
            arrowLeft: _arrowLeft2.default,
            arrowRight: _arrowRight2.default,

            hoverDate: null,
            focusDate: null
        };
    },

    computed: {
        allowRange: function allowRange() {
            return this.selected && !(this.selected instanceof Date);
        },
        prevMonthChangeLabel: function prevMonthChangeLabel() {
            var prevMonthName = _dateUtils2.default.months[this.prevMonth];
            return 'Show previous month, ' + prevMonthName + ' ' + this.prevMonthYear;
        },
        nextMonthChangeLabel: function nextMonthChangeLabel() {
            var nextMonthName = _dateUtils2.default.months[this.nextMonth];
            return 'Show next month, ' + nextMonthName + ' ' + this.nextMonthYear;
        },
        prevMonth: function prevMonth() {
            var month = this.month;
            if (month == 0) {
                month = 11;
            } else {
                month--;
            }
            return month;
        },
        prevMonthYear: function prevMonthYear() {
            var month = this.month;
            var year = this.year;
            if (month == 0) {
                year--;
            }
            return year;
        },
        nextMonth: function nextMonth() {
            var month = this.month;
            if (month == 11) {
                month = 0;
            } else {
                month++;
            }
            return month;
        },
        nextMonthYear: function nextMonthYear() {
            var month = this.month;
            var year = this.year;
            if (month == 11) {
                year++;
            }
            return year;
        }
    },
    methods: {
        handleDateSelection: function handleDateSelection(e) {
            this.hoverDate = e.end;
            this.focusDate = new Date(e.end);

            if (this.allowRange) {
                this.$emit('change', e);
            } else {
                this.$emit('change', e.end);
            }
        },
        handleKeyDown: function handleKeyDown(e) {},
        handleKeyUp: function handleKeyUp(e) {},
        handlePrevMonthClick: function handlePrevMonthClick() {
            this.focusDate = null;
            this.$emit('monthchange', {
                month: this.prevMonth,
                year: this.prevMonthYear
            });
        },
        handleNextMonthClick: function handleNextMonthClick() {
            this.focusDate = null;
            this.$emit('monthchange', {
                month: this.nextMonth,
                year: this.nextMonthYear
            });
        },
        handleFocus: function handleFocus() {},
        handleHover: function handleHover() {}
    }
}; //
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
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerMonth_vue__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerMonth_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerMonth_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2368d116_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePickerMonth_vue__ = __webpack_require__(275);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerMonth_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2368d116_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePickerMonth_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisDatePickerMonth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisDatePickerMonth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2368d116", Component.options)
  } else {
    hotAPI.reload("data-v-2368d116", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _PolarisDatePickerWeekday = __webpack_require__(269);

var _PolarisDatePickerWeekday2 = _interopRequireDefault(_PolarisDatePickerWeekday);

var _PolarisDatePickerDay = __webpack_require__(272);

var _PolarisDatePickerDay2 = _interopRequireDefault(_PolarisDatePickerDay);

var _dateUtils = __webpack_require__(19);

var _dateUtils2 = _interopRequireDefault(_dateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    components: {
        PolarisDatePickerWeekday: _PolarisDatePickerWeekday2.default,
        PolarisDatePickerDay: _PolarisDatePickerDay2.default
    },
    data: function data() {
        return {
            weekdays: _dateUtils2.default.weekdays.slice()
        };
    },

    props: {
        focusedDate: Date,
        selected: [Date, Object],
        hoverDate: Date,
        month: Number,
        year: Number,
        disableDatesBefore: Date,
        disableDatesAfter: Date,
        allowRange: Boolean,
        monthName: String,
        weekdayName: String
    },
    computed: {
        titleClasses: function titleClasses() {
            return {
                'Polaris-DatePicker__Title': 1,
                'Polaris-DatePicker__Month--current': this.current
            };
        },
        current: function current() {
            return new Date().getMonth() === this.month;
        },
        weeks: function weeks() {
            var firstOfMonth = new Date(this.year, this.month, 1);
            var firstDayOfWeek = firstOfMonth.getDay();
            var weeks = [[]];

            var currentWeek = weeks[0];
            var currentDate = firstOfMonth;

            for (var i = 0; i < firstDayOfWeek; i++) {
                currentWeek.push(null);
            }

            while (currentDate.getMonth() === this.month) {
                if (currentWeek.length === 7) {
                    currentWeek = [];
                    weeks.push(currentWeek);
                }

                currentWeek.push(currentDate);
                currentDate = new Date(this.year, this.month, currentDate.getDate() + 1);
            }

            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }

            return weeks;
        },
        realMonthName: function realMonthName() {
            return _dateUtils2.default.months[this.month];
        }
    },
    methods: {
        handleHoverEmptyDay: function handleHoverEmptyDay() {
            var lastDayOfMonth = new Date(this.year, this.month + 1, 0);
            this.$emit('hover', lastDayOfMonth);
        },
        handleHover: function handleHover(day) {
            this.$emit('hover', day);
        },
        handleFocus: function handleFocus(day) {
            this.$emit('focus', day);
        },
        handleDayClick: function handleDayClick(day) {
            var newValue = null;
            if (!this.selected) {
                newValue = {
                    start: day,
                    end: day
                };
            } else {
                var start = this.selected.start;
                var end = this.selected.end;
                if (end && start !== end) {
                    newValue = {
                        start: day,
                        end: day
                    };
                } else if (start) {
                    if (day < start) {
                        newValue = {
                            start: day,
                            end: day
                        };
                    } else {
                        newValue = {
                            start: start,
                            end: day
                        };
                    }
                } else if (end) {
                    if (day < end) {
                        newValue = {
                            start: day,
                            end: end
                        };
                    } else {
                        newValue = {
                            start: day,
                            end: day
                        };
                    }
                } else {
                    newValue = {
                        start: day,
                        end: day
                    };
                }
            }
            this.$emit('change', newValue);
        },
        dateIsDisabled: function dateIsDisabled(day) {
            if (this.disableDatesBefore && day < this.disableDatesBefore || this.disableDatesAfter && day > this.disableDatesAfter) {
                return true;
            }
            return false;
        },
        dateIsSelected: function dateIsSelected(day) {
            if (!day) {
                return false;
            }
            if (this.selected instanceof Date) {
                return this.isSameDay(day, this.selected);
            }
            var start = this.selected.start;
            var end = this.selected.end;
            return Boolean(start && this.isSameDay(start, day) || end && this.isSameDay(end, day));
        },
        dateIsInRange: function dateIsInRange(day) {
            if (!day) {
                return false;
            }
            var start = this.selected.start;
            var end = this.selected.end;
            return Boolean(start && day > start && end && day < end);
        },
        isSameDay: function isSameDay(day1, day2) {
            return day1.getDate() === day2.getDate() && day1.getMonth() === day2.getMonth() && day1.getFullYear() === day2.getFullYear();
        },
        abbreviateWeekday: function abbreviateWeekday(day) {
            return day.substring(0, 2);
        },
        isInHoveringRange: function isInHoveringRange(day) {
            if (!this.allowRange) {
                return false;
            }
            if (!day) {
                return false;
            }

            return Boolean(this.selected.start === this.selected.end && day > this.selected.start && day <= this.hoverDate);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerWeekday_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerWeekday_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerWeekday_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75fa2cdd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePickerWeekday_vue__ = __webpack_require__(271);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerWeekday_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75fa2cdd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePickerWeekday_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisDatePickerWeekday.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisDatePickerWeekday.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75fa2cdd", Component.options)
  } else {
    hotAPI.reload("data-v-75fa2cdd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        label: {
            type: String,
            validate: function validate(v) {
                return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(v) > -1;
            }
        },
        title: String,
        current: Boolean
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-DatePicker__Weekday', ['current'], this);
        }
    }
}; //
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.label
    }
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75fa2cdd", esExports)
  }
}

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerDay_vue__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerDay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerDay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d71fdd1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePickerDay_vue__ = __webpack_require__(274);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDatePickerDay_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d71fdd1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDatePickerDay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisDatePickerDay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisDatePickerDay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d71fdd1", Component.options)
  } else {
    hotAPI.reload("data-v-6d71fdd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _dateUtils = __webpack_require__(19);

var _dateUtils2 = _interopRequireDefault(_dateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//

exports.default = {
    props: {
        focused: Boolean,
        day: Date,
        selected: Boolean,
        inRange: Boolean,
        inHoveringRange: Boolean,
        disabled: Boolean
    },
    computed: {
        dayNumber: function dayNumber() {
            return this.day ? this.day.getDate() : null;
        },
        today: function today() {
            return _dateUtils2.default.isSameDay(this.day, new Date());
        },
        accessibilityLabel: function accessibilityLabel() {
            if (!this.day) {
                return null;
            }
            return [this.today ? 'Today' : '', _dateUtils2.default.months[this.day.getMonth()], this.day.getDate(), this.day.getFullYear()].join(' ');
        },
        classes: function classes() {
            if (!this.day) {
                return 'Polaris-DatePicker__EmptyDay';
            }
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-DatePicker__Day', ['selected', 'disabled', 'today'], this);

            if ((this.inRange || this.inHoveringRange) && !this.disabled) {
                r['Polaris-DatePicker__Day--inRange'] = true;
            }
            return r;
        },
        tabIndex: function tabIndex() {
            if ((this.focused || this.selected || this.day === 1) && !this.disabled) {
                return 0;
            }
            return -1;
        }
    },
    methods: {
        onFocus: function onFocus() {
            this.$emit('focus', this.day);
        },
        handleHover: function handleHover() {
            this.$emit('hover', this.day);
        },
        handleClick: function handleClick() {
            if (!this.disabled) {
                this.$emit('click', this.day);
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    ref: "button",
    class: _vm.classes,
    attrs: {
      "tabindex": _vm.tabIndex,
      "aria-label": _vm.accessibilityLabel,
      "aria-selected": _vm.selected,
      "aria-disabled": _vm.disabled,
      "role": "gridcell"
    },
    on: {
      "focus": _vm.onFocus,
      "mouseover": _vm.handleHover,
      "click": _vm.handleClick
    }
  }, [_vm._v("\n    " + _vm._s(_vm.dayNumber) + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d71fdd1", esExports)
  }
}

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-DatePicker__Month",
    attrs: {
      "role": "grid"
    }
  }, [_c('div', {
    class: _vm.titleClasses
  }, [_vm._v("\n        " + _vm._s(_vm.realMonthName) + " " + _vm._s(_vm.year) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "Polaris-DatePicker__WeekHeadings",
    attrs: {
      "role": "rowheader"
    }
  }, _vm._l((_vm.weekdays), function(dayName, dayIndex) {
    return _c('polaris-date-picker-weekday', {
      key: dayIndex,
      attrs: {
        "title": _vm.abbreviateWeekday(dayName),
        "current": _vm.current && new Date().getDay() === dayIndex,
        "label": dayName
      }
    })
  })), _vm._v(" "), _vm._l((_vm.weeks), function(week, index) {
    return _c('div', [_c('div', {
      key: "index",
      staticClass: "Polaris-DatePicker__Week",
      attrs: {
        "role": "row"
      }
    }, [_vm._l((week), function(day, dayIndex) {
      return [(!day) ? _c('polaris-date-picker-day', {
        key: dayIndex,
        on: {
          "hover": _vm.handleHoverEmptyDay
        }
      }) : _vm._e(), _vm._v(" "), (day) ? _c('polaris-date-picker-day', {
        attrs: {
          "focused": _vm.focusedDate && _vm.isSameDay(_vm.focusedDate, day),
          "day": day,
          "selected": _vm.selected && _vm.dateIsSelected(day),
          "in-range": _vm.selected && _vm.dateIsInRange(day),
          "disabled": _vm.dateIsDisabled(day),
          "in-hovering-range": _vm.selected && _vm.hoverDate && _vm.isInHoveringRange(day)
        },
        on: {
          "focus": function($event) {
            _vm.handleFocus(day)
          },
          "click": function($event) {
            _vm.handleDayClick(day)
          },
          "hover": function($event) {
            _vm.handleHover(day)
          }
        }
      }) : _vm._e()]
    })], 2)])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2368d116", esExports)
  }
}

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-DatePicker",
    on: {
      "keydown": _vm.handleKeyDown,
      "keyup": _vm.handleKeyUp
    }
  }, [_c('div', {
    staticClass: "Polaris-DatePicker__Header"
  }, [_c('polaris-button', {
    attrs: {
      "plain": "",
      "icon": _vm.arrowLeft,
      "accessibility-label": _vm.prevMonthChangeLabel
    },
    on: {
      "click": _vm.handlePrevMonthClick
    }
  }), _vm._v(" "), _c('polaris-button', {
    attrs: {
      "plain": "",
      "icon": _vm.arrowRight,
      "accessibility-label": _vm.nextMonthChangeLabel
    },
    on: {
      "click": _vm.handleNextMonthClick
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-DatePicker__MonthContainer"
  }, [_c('polaris-date-picker-month', {
    attrs: {
      "focused-date": _vm.focusDate,
      "month": _vm.month,
      "year": _vm.year,
      "selected": _vm.selected,
      "hover-date": _vm.hoverDate,
      "disable-dates-before": _vm.disableDatesBefore,
      "disable-dates-after": _vm.disableDatesAfter,
      "allow-range": _vm.allowRange
    },
    on: {
      "focus": _vm.handleFocus,
      "change": _vm.handleDateSelection,
      "hover": _vm.handleHover
    }
  }), _vm._v(" "), (_vm.multiMonth) ? _c('polaris-date-picker-month', {
    attrs: {
      "focused-date": _vm.focusDate,
      "month": _vm.nextMonth,
      "year": _vm.nextMonthYear,
      "selected": _vm.selected,
      "hover-date": _vm.hoverDate,
      "disable-dates-before": _vm.disableDatesBefore,
      "disable-dates-after": _vm.disableDatesAfter,
      "allow-range": _vm.allowRange
    },
    on: {
      "focus": _vm.handleFocus,
      "change": _vm.handleDateSelection,
      "hover": _vm.handleHover
    }
  }) : _vm._e()], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ac77140a", esExports)
  }
}

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayout_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayout_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayout_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisFormLayout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-797ff42d", Component.options)
  } else {
    hotAPI.reload("data-v-797ff42d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisFormLayoutGroup = __webpack_require__(42);

var _PolarisFormLayoutGroup2 = _interopRequireDefault(_PolarisFormLayoutGroup);

var _PolarisFormLayoutItem = __webpack_require__(43);

var _PolarisFormLayoutItem2 = _interopRequireDefault(_PolarisFormLayoutItem);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    render: function render(createElement) {
        return createElement('div', { 'class': 'Polaris-FormLayout' }, _ComponentHelpers2.default.wrapNodesWithComponent(createElement, this.$slots.default, _PolarisFormLayoutItem2.default, [_PolarisFormLayoutGroup2.default]));
    },

    props: {}
};
module.exports = exports['default'];

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisFormLayoutGroupItemWrapper = __webpack_require__(280);

var _PolarisFormLayoutGroupItemWrapper2 = _interopRequireDefault(_PolarisFormLayoutGroupItemWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    polarisName: 'FormLayoutGroup',
    components: {
        PolarisFormLayoutGroupItemWrapper: _PolarisFormLayoutGroupItemWrapper2.default
    },
    props: {
        children: String,
        condensed: Boolean,
        title: String,
        helpText: String
    },
    computed: {
        id: function id() {
            return 'PolarisFormLayoutGroup' + this._uid;
        },
        classes: function classes() {
            return {
                'Polaris-FormLayout--condensed': this.condensed
            };
        }
    }
}; //
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
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroupItemWrapper_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroupItemWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroupItemWrapper_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisFormLayoutGroupItemWrapper_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisFormLayoutGroupItemWrapper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ad107ce", Component.options)
  } else {
    hotAPI.reload("data-v-6ad107ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisFormLayoutItem = __webpack_require__(43);

var _PolarisFormLayoutItem2 = _interopRequireDefault(_PolarisFormLayoutItem);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    render: function render(createElement) {
        return createElement('div', {
            'class': 'Polaris-FormLayout__Items'
        }, _ComponentHelpers2.default.wrapNodesWithComponent(createElement, this.$slots.default, _PolarisFormLayoutItem2.default));
    },

    props: {}
};
module.exports = exports['default'];

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-FormLayout__Item"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f9e58140", esExports)
  }
}

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    attrs: {
      "role": "group",
      "aria-labelledBy": _vm.title ? _vm.id + 'Title' : null,
      "aria-describedby": _vm.helpText ? _vm.id + 'HelpText' : null
    }
  }, [(_vm.title) ? _c('div', {
    staticClass: "Polaris-FormLayout__Title",
    attrs: {
      "id": _vm.id + 'Title'
    }
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('polaris-form-layout-group-item-wrapper', [_vm._t("default")], 2), _vm._v(" "), (_vm.helpText || _vm.$slots.helpText) ? _c('div', {
    staticClass: "Polaris-FormLayout__HelpText",
    attrs: {
      "id": _vm.id + 'helpText'
    }
  }, [_vm._t("helpText", [_vm._v("\n            " + _vm._s(_vm.helpText) + "\n        ")])], 2) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0875e502", esExports)
  }
}

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSelect_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f66be6ca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSelect_vue__ = __webpack_require__(292);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisSelect_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f66be6ca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisSelect_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f66be6ca", Component.options)
  } else {
    hotAPI.reload("data-v-f66be6ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisLabelled = __webpack_require__(44);

var _PolarisLabelled2 = _interopRequireDefault(_PolarisLabelled);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _arrowUpDown = __webpack_require__(291);

var _arrowUpDown2 = _interopRequireDefault(_arrowUpDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
        PolarisLabelled: _PolarisLabelled2.default
    },
    data: function data() {
        return {
            arrowUpDown: _arrowUpDown2.default
        };
    },

    props: {
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        groups: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        label: String,
        labelAction: Object,
        labelHidden: Boolean,
        helpText: String,
        id: String,
        name: String,
        error: [Boolean, String],
        disabled: Boolean,
        value: String,
        placeholder: String
    },
    computed: {
        realId: function realId() {
            return this.id || 'PolarisSelect' + this._uid;
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-Select', ['disabled'], this);

            if (this.error) {
                r['Polaris-Select--error'] = true;
            }

            if (this.value == null && this.placeholder != null) {
                r['Polaris-Select--placeholder'] = true;
            }

            return r;
        },
        describedBy: function describedBy() {
            var r = [];
            if (this.helpText || this.$slots.helpText) {
                r.push(this.realId + 'HelpText');
            }
            if (this.error && typeof this.error == 'string') {
                r.push(this.realId + 'Error');
            }
            return r;
        }
    },
    methods: {
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onChange: function onChange(e) {
            this.$emit('change', e.currentTarget.value);
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisLabel = __webpack_require__(287);

var _PolarisLabel2 = _interopRequireDefault(_PolarisLabel);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _alertIcon = __webpack_require__(39);

var _alertIcon2 = _interopRequireDefault(_alertIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisIcon: _PolarisIcon2.default,
        PolarisLabel: _PolarisLabel2.default
    },
    props: {
        id: String,
        label: String,
        error: [Boolean, String],
        action: Object,
        helpText: String,
        children: String,
        labelHidden: Boolean
    },
    data: function data() {
        return {
            alertIcon: _alertIcon2.default
        };
    },

    computed: {
        classes: function classes() {
            var r = {
                'Polaris-Labelled': true,
                'Polaris-Labelled--hidden': this.labelHidden
            };
            return r;
        }
    },
    methods: {
        handleAction: function handleAction(action, handleUrl) {
            if (action.onAction) {
                action.onAction();
            }
            if (handleUrl && action.url) {
                window.location.href = action.url;
            }
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabel_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_464697a5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLabel_vue__ = __webpack_require__(289);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLabel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_464697a5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLabel_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisLabel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisLabel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-464697a5", Component.options)
  } else {
    hotAPI.reload("data-v-464697a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        children: String,
        id: String,
        hidden: Boolean
    },
    computed: {
        classes: function classes() {
            return {
                'Polaris-Label': true,
                'Polaris-Label--hidden': this.hidden
            };
        }
    },
    methods: {
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_c('label', {
    staticClass: "Polaris-Label__Text",
    attrs: {
      "id": _vm.id + 'Label',
      "for": _vm.id
    }
  }, [(!_vm.$slots.children) ? _vm._t("default", [_vm._v(_vm._s(_vm.children))]) : _vm._e(), _vm._v(" "), _vm._t("children")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-464697a5", esExports)
  }
}

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [(_vm.label) ? _c('div', {
    staticClass: "Polaris-Labelled__LabelWrapper"
  }, [_c('polaris-label', {
    attrs: {
      "id": _vm.id,
      "hidden": false,
      "action": _vm.action
    }
  }, [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]), _vm._v(" "), (_vm.action) ? _c('polaris-button', {
    attrs: {
      "plain": "",
      "accessibility-label": _vm.action.accessibiltyLabel,
      "url": _vm.action.url,
      "external": _vm.action.external,
      "disabled": _vm.action.disabled,
      "destructive": _vm.action.destructive,
      "icon": _vm.action.icon,
      "loading": _vm.action.loading
    },
    on: {
      "click": function($event) {
        _vm.handleAction(_vm.action, true)
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.action.content) + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm._t("children"), _vm._v(" "), (!_vm.$slots.children) ? _vm._t("default", [_vm._v(_vm._s(_vm.children))]) : _vm._e(), _vm._v(" "), (_vm.error && typeof _vm.error == 'string') ? _c('div', {
    staticClass: "Polaris-Labelled__Error",
    attrs: {
      "id": _vm.id + 'Error'
    }
  }, [_c('div', {
    staticClass: "Polaris-Labelled__ErrorIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.alertIcon
    }
  })], 1), _vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]) : _vm._e(), _vm._v(" "), (_vm.helpText || _vm.$slots.helpText) ? _c('div', {
    staticClass: "Polaris-Labelled__HelpText",
    attrs: {
      "id": _vm.id + 'HelpText'
    }
  }, [_vm._t("helpText", [_vm._v(_vm._s(_vm.helpText))])], 2) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7abb8a14", esExports)
  }
}

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z\" fill=\"#637381\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-labelled', {
    attrs: {
      "id": _vm.realId,
      "label": _vm.label,
      "error": _vm.error,
      "action": _vm.labelAction,
      "label-hidden": _vm.labelHidden,
      "help-text": _vm.helpText
    }
  }, [(_vm.$slots.helpText) ? _c('template', {
    slot: "helpText"
  }, [_vm._t("helpText")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.classes
  }, [_c('select', {
    staticClass: "Polaris-Select__Input",
    attrs: {
      "id": _vm.realId,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "aria-invalid": !!_vm.error,
      "aria-describedby": _vm.describedBy
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "change": _vm.onChange
    }
  }, [(!_vm.value && _vm.placeholder) ? _c('option', {
    attrs: {
      "label": _vm.placeholder,
      "disabled": "",
      "hidden": ""
    },
    domProps: {
      "value": null
    }
  }) : _vm._e(), _vm._v(" "), (_vm.options) ? [_vm._l((_vm.options), function(option) {
    return [(typeof option == 'string') ? _c('option', {
      key: option,
      domProps: {
        "value": option
      }
    }, [_vm._v("\n                        " + _vm._s(option) + "\n                    ")]) : _vm._e(), _vm._v(" "), (typeof option != 'string') ? _c('option', {
      key: option.value,
      attrs: {
        "disabled": option.disabled
      },
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n                        " + _vm._s(option.label) + "\n                    ")]) : _vm._e()]
  })] : _vm._e(), _vm._v(" "), (!_vm.options && _vm.groups) ? [_vm._l((_vm.groups), function(group) {
    return [(!group.hasOwnProperty('title')) ? [_vm._l((group), function(option) {
      return [(typeof option == 'string') ? _c('option', {
        key: option,
        domProps: {
          "value": option
        }
      }, [_vm._v("\n                                " + _vm._s(option) + "\n                            ")]) : _vm._e(), _vm._v(" "), (typeof option != 'string') ? _c('option', {
        key: option.value,
        attrs: {
          "disabled": option.disabled
        },
        domProps: {
          "value": option.value
        }
      }, [_vm._v("\n                                " + _vm._s(option.label) + "\n                            ")]) : _vm._e()]
    })] : _vm._e(), _vm._v(" "), (group.hasOwnProperty('title')) ? [_c('optgroup', {
      key: group.title,
      attrs: {
        "label": group.title
      }
    }, [_vm._l((group.options), function(option) {
      return [(typeof option == 'string') ? _c('option', {
        key: option,
        domProps: {
          "value": option
        }
      }, [_vm._v("\n                                    " + _vm._s(option) + "\n                                ")]) : _vm._e(), _vm._v(" "), (typeof option != 'string') ? _c('option', {
        key: option.value,
        attrs: {
          "disabled": option.disabled
        },
        domProps: {
          "value": option.value
        }
      }, [_vm._v("\n                                    " + _vm._s(option.label) + "\n                                ")]) : _vm._e()]
    })], 2)] : _vm._e()]
  })] : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Select__Icon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.arrowUpDown
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Select__Backdrop"
  })])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f66be6ca", esExports)
  }
}

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTag_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTag_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_726f478b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTag_vue__ = __webpack_require__(296);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTag_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_726f478b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTag_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-726f478b", Component.options)
  } else {
    hotAPI.reload("data-v-726f478b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _cancelSmall = __webpack_require__(295);

var _cancelSmall2 = _interopRequireDefault(_cancelSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//

exports.default = {
    data: function data() {
        return {
            cancelSmall: _cancelSmall2.default
        };
    },

    methods: {
        components: {
            PolarisIcon: _PolarisIcon2.default
        },
        onRemove: function onRemove() {
            this.$emit('remove');
        },
        handleMouseUp: function handleMouseUp(e) {
            e.currentTarget.blur();
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.414 10l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 8.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a.999.999 0 1 0 1.414 1.414L10 11.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "Polaris-Tag"
  }, [_c('span', [_vm._t("default")], 2), _vm._v(" "), _c('button', {
    staticClass: "Polaris-Tag__Button",
    attrs: {
      "aria-label": "Remove"
    },
    on: {
      "click": _vm.onRemove,
      "mouseUp": _vm.handleMouseUp
    }
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.cancelSmall
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-726f478b", esExports)
  }
}

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextField_vue__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextField_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_172bef7e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextField_vue__ = __webpack_require__(313);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextField_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_172bef7e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextField_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTextField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTextField.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-172bef7e", Component.options)
  } else {
    hotAPI.reload("data-v-172bef7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisTextFieldResizer = __webpack_require__(299);

var _PolarisTextFieldResizer2 = _interopRequireDefault(_PolarisTextFieldResizer);

var _PolarisTextFieldSpinner = __webpack_require__(302);

var _PolarisTextFieldSpinner2 = _interopRequireDefault(_PolarisTextFieldSpinner);

var _PolarisLabelled = __webpack_require__(44);

var _PolarisLabelled2 = _interopRequireDefault(_PolarisLabelled);

var _PolarisConnected = __webpack_require__(307);

var _PolarisConnected2 = _interopRequireDefault(_PolarisConnected);

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//

exports.default = {
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
        DynamicTag: _DynamicTag2.default,
        PolarisTextFieldResizer: _PolarisTextFieldResizer2.default,
        PolarisTextFieldSpinner: _PolarisTextFieldSpinner2.default,
        PolarisLabelled: _PolarisLabelled2.default,
        PolarisConnected: _PolarisConnected2.default
    },
    props: {
        prefix: String,
        suffix: String,
        placeholder: String,
        value: [String, Number],
        helpText: String,
        label: String,
        labelAction: Object,
        labelHidden: Boolean,
        disabled: Boolean,
        readOnly: Boolean,
        autoFocus: Boolean,
        multiline: [Boolean, Number],
        error: [Boolean, String],
        connectedRight: String,
        connectedLeft: String,
        type: String,
        name: String,
        id: String,
        step: String,
        autoComplete: Boolean,
        max: Number,
        maxLength: Number,
        min: Number,
        minLength: Number,
        pattern: String,
        spellCheck: Boolean,
        focused: Boolean
    },
    data: function data() {
        return {
            height: null,
            focus: false
        };
    },

    watch: {
        focused: function focused() {
            if (this.focused && !this.focus) {
                this.$refs.input.focus();
            } else if (!this.focused && this.focus) {
                this.$refs.input.blur();
            }
        }
    },
    computed: {
        realId: function realId() {
            return this.id || 'PolarisTextField' + this._uid;
        },
        describedBy: function describedBy() {
            var r = [];
            if (this.error && typeof this.error === 'string') {
                r.push(this.realId + 'Error');
            }
            if (this.helpText) {
                r.push(this.realId + 'HelpText');
            }
            return r.join(' ');
        },
        labelledBy: function labelledBy() {
            var r = [];
            if (this.prefix) {
                r.push(this.realId + 'Prefix');
            }
            if (this.suffix) {
                r.push(this.realId + 'Suffix');
            }
            return r.join(' ');
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-TextField', ['disabled', 'readOnly', 'multiline', 'focus'], this);

            if (this.error) {
                r['Polaris-TextField--error'] = true;
            }

            if (this.value) {
                r['Polaris-TextField--hasValue'] = true;
            }

            return r;
        }
    },
    methods: {
        onFocus: function onFocus() {
            this.focus = true;
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.focus = false;
            this.$emit('blur');
        },
        onClick: function onClick() {
            this.$refs.input.focus();
        },
        handleExpandingResize: function handleExpandingResize(e) {
            this.height = e;
        },
        handleChange: function handleChange(e) {
            console.log('newValue', e);
            var target = e.target || e.srcElement;
            this.$emit('change', target.value);
        },
        handleInputFocus: function handleInputFocus() {
            this.$refs.input.focus();
        },
        handleNumberChange: function handleNumberChange(steps) {
            var numericValue = this.value ? parseFloat(this.value) : 0;
            if (isNaN(numericValue)) {
                return;
            }

            var min = this.min || -Infinity;
            var max = this.max || +Infinity;
            var step = this.step || 1;

            var newValue = Math.min(max, Math.max(min, numericValue + steps * step));
            console.log('newValue', newValue);
            console.log('numericValue', numericValue);
            this.$emit('change', newValue);
        }
    }

};
module.exports = exports['default'];

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldResizer_vue__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldResizer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldResizer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02e09a10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextFieldResizer_vue__ = __webpack_require__(301);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldResizer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02e09a10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextFieldResizer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTextFieldResizer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTextFieldResizer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02e09a10", Component.options)
  } else {
    hotAPI.reload("data-v-02e09a10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var ENTITIES_TO_REPLACE = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\n': '<br>'
};

var REPLACE_REGEX = /[\n&<>]/g;

exports.default = {
    props: {
        contents: String,
        currentHeight: Number,
        minimumLines: Number
    },
    mounted: function mounted() {
        this.handleHeightCheck();
    },

    computed: {
        finalContents: function finalContents() {
            return this.contents ? this.contents.replace(REPLACE_REGEX, this.replaceEntity) + '<br>' : '<br>';
        },
        minimumLinesContent: function minimumLinesContent() {
            var content = '';
            for (var line = 0; line < this.minimumLines; line++) {
                content += '<br>';
            }
            return content;
        }
    },
    methods: {
        replaceEntity: function replaceEntity(entity) {
            return ENTITIES_TO_REPLACE[entity] || entity;
        },
        handleHeightCheck: function handleHeightCheck() {
            if (this.$refs.dummyInput == null || this.$refs.minimumLines == null) {
                return;
            }

            var contentHeight = this.$refs.dummyInput.offsetHeight;
            var minimumHeight = this.$refs.minimumLines ? this.$refs.minimumLines.offsetHeight : 0;
            var newHeight = Math.max(contentHeight, minimumHeight);

            if (this.currentHeight != newHeight) {
                this.$emit('heightchange', newHeight);
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-TextField__Resizer",
    attrs: {
      "aria-hidden": ""
    }
  }, [_c('div', {
    ref: "dummyInput",
    staticClass: "Polaris-TextField__DummyInput",
    domProps: {
      "innerHTML": _vm._s(_vm.finalContents)
    }
  }), _vm._v(" "), (_vm.minimumLines) ? _c('div', {
    staticClass: "Polaris-TextField__DummyInput",
    domProps: {
      "innerHTML": _vm._s(_vm.minimumLinesContent)
    }
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02e09a10", esExports)
  }
}

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldSpinner_vue__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldSpinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e48272a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextFieldSpinner_vue__ = __webpack_require__(306);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextFieldSpinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e48272a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextFieldSpinner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTextFieldSpinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTextFieldSpinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e48272a", Component.options)
  } else {
    hotAPI.reload("data-v-4e48272a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _caretUp = __webpack_require__(304);

var _caretUp2 = _interopRequireDefault(_caretUp);

var _caretDown = __webpack_require__(305);

var _caretDown2 = _interopRequireDefault(_caretDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisIcon: _PolarisIcon2.default
    },
    data: function data() {
        return {
            caretUp: _caretUp2.default,
            caretDown: _caretDown2.default
        };
    },

    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },
        handleStep: function handleStep(value) {
            this.$emit('change', value);
        }
    }
}; //
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
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 12l-5-5-5 5z\" fill=\"#212B35\"></path></svg>"

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 8l5 5 5-5z\" fill=\"#212B35\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-TextField__Spinner",
    attrs: {
      "aria-hidden": ""
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "Polaris-TextField__Segment",
    attrs: {
      "role": "button",
      "tabindex": "-1"
    },
    on: {
      "click": function($event) {
        _vm.handleStep(1)
      }
    }
  }, [_c('div', {
    staticClass: "Polaris-TextField__SpinnerIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.caretUp
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "Polaris-TextField__Segment",
    attrs: {
      "role": "button",
      "tabindex": "-1"
    },
    on: {
      "click": function($event) {
        _vm.handleStep(-1)
      }
    }
  }, [_c('div', {
    staticClass: "Polaris-TextField__SpinnerIcon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.caretDown
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e48272a", esExports)
  }
}

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnected_vue__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnected_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnected_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d561768c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisConnected_vue__ = __webpack_require__(312);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnected_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d561768c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisConnected_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisConnected.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisConnected.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d561768c", Component.options)
  } else {
    hotAPI.reload("data-v-d561768c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisConnectedItem = __webpack_require__(309);

var _PolarisConnectedItem2 = _interopRequireDefault(_PolarisConnectedItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisConnectedItem: _PolarisConnectedItem2.default
    },
    props: {
        left: String,
        right: String,
        children: String
    },
    data: function data() {
        return {
            focused: String
        };
    }
}; //
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
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnectedItem_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnectedItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnectedItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e310fd26_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisConnectedItem_vue__ = __webpack_require__(311);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisConnectedItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e310fd26_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisConnectedItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisConnectedItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisConnectedItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e310fd26", Component.options)
  } else {
    hotAPI.reload("data-v-e310fd26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        position: {
            type: String,
            validate: function validate(v) {
                return ['Left', 'Primary', 'Right'].indexOf(v) > -1;
            }
        },
        children: String
    },
    data: function data() {
        return {
            focused: false
        };
    },

    computed: {
        classes: function classes() {
            return {
                'Polaris-Connected__Item': true,
                'Polaris-Connected__Item--focused': this.focused,
                'Polaris-Connected__Item--primary': this.position == 'Primary',
                'Polaris-Connected__Item--connection': this.position != 'Primary'
            };
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    on: {
      "blur": function($event) {
        _vm.focused = false
      },
      "focus": function($event) {
        _vm.focused = true
      }
    }
  }, [(!_vm.$slots.children) ? _vm._t("default", [_vm._v(_vm._s(_vm.children))]) : _vm._e(), _vm._v(" "), _vm._t("children")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e310fd26", esExports)
  }
}

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-Connected"
  }, [(_vm.$slots.left || _vm.left) ? _c('polaris-connected-item', {
    attrs: {
      "position": "Left"
    }
  }, [_vm._t("left", [_vm._v(_vm._s(_vm.left))])], 2) : _vm._e(), _vm._v(" "), _c('polaris-connected-item', {
    attrs: {
      "position": "Primary"
    }
  }, [(!_vm.$slots.children) ? _vm._t("default", [_vm._v("\n           " + _vm._s(_vm.children) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm._t("children")], 2), _vm._v(" "), (_vm.$slots.right || _vm.right) ? _c('polaris-connected-item', {
    attrs: {
      "position": "Right"
    }
  }, [_vm._t("right", [_vm._v(_vm._s(_vm.right))])], 2) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d561768c", esExports)
  }
}

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('polaris-labelled', {
    attrs: {
      "label": _vm.label,
      "id": _vm.realId,
      "error": _vm.error,
      "action": _vm.labelAction,
      "label-hidden": _vm.labelHidden,
      "help-text": _vm.helpText
    }
  }, [(_vm.$slots.helpText) ? _c('template', {
    slot: "helpText"
  }, [_vm._t("helpText")], 2) : _vm._e(), _vm._v(" "), _c('polaris-connected', [_c('template', {
    slot: "left"
  }, [_vm._t("connectedLeft", [_vm._v(_vm._s(_vm.connectedLeft))])], 2), _vm._v(" "), _c('template', {
    slot: "right"
  }, [_vm._t("connectedRight", [_vm._v(_vm._s(_vm.connectedRight))])], 2), _vm._v(" "), _c('div', {
    class: _vm.classes,
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "click": _vm.onClick
    }
  }, [(_vm.prefix) ? _c('div', {
    staticClass: "Polaris-TextField__Prefix",
    attrs: {
      "id": _vm.realId + 'Prefix'
    }
  }, [_vm._v("\n                " + _vm._s(_vm.prefix) + "\n            ")]) : _vm._e(), _vm._v(" "), _c('dynamic-tag', {
    ref: "input",
    staticClass: "Polaris-TextField__Input",
    style: ({
      height: (_vm.multiline && _vm.height) ? _vm.height + 'px' : null
    }),
    attrs: {
      "tag": _vm.multiline ? 'textarea' : 'input',
      "name": _vm.name,
      "id": _vm.realId,
      "type": _vm.type,
      "disabled": _vm.disabled,
      "readonly": _vm.readOnly,
      "autofocus": _vm.autoFocus,
      "value": _vm.value,
      "placeholder": _vm.placeholder,
      "on": {
        change: _vm.handleChange
      },
      "autocomplete": _vm.autoComplete,
      "aria-describedby": _vm.describedBy,
      "aria-labelledby": _vm.labelledBy,
      "aria-invalid": Boolean(_vm.error)
    }
  }), _vm._v(" "), (_vm.suffix) ? _c('div', {
    staticClass: "Polaris-TextField__Suffix",
    attrs: {
      "id": _vm.realId + 'Suffix'
    }
  }, [_vm._v("\n                " + _vm._s(_vm.suffix) + "\n            ")]) : _vm._e(), _vm._v(" "), (_vm.type === 'number' && !_vm.disabled) ? _c('polaris-text-field-spinner', {
    on: {
      "change": _vm.handleNumberChange
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-TextField__Backdrop"
  }), _vm._v(" "), (_vm.multiline) ? _c('polaris-text-field-resizer', {
    attrs: {
      "contents": _vm.value || _vm.placeholder,
      "current-height": _vm.height,
      "minimum-lines": (typeof _vm.multiline === 'number') ? _vm.multiline : 1
    },
    on: {
      "heightchange": _vm.handleExpandingResize
    }
  }) : _vm._e()], 1)], 2)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-172bef7e", esExports)
  }
}

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCollapsible_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCollapsible_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCollapsible_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9eff520a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCollapsible_vue__ = __webpack_require__(321);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisCollapsible_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9eff520a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisCollapsible_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisCollapsible.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisCollapsible.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9eff520a", Component.options)
  } else {
    hotAPI.reload("data-v-9eff520a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _CollapseTransition = __webpack_require__(45);

var _CollapseTransition2 = _interopRequireDefault(_CollapseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    components: {
        PolarisVueCollapseTransition: _CollapseTransition2.default
    },
    props: {
        open: Boolean
    },
    data: function data() {
        return {
            height: null,
            animationState: 'idle'
        };
    },

    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Collapsible', ['open'], this);
        },
        displayHeight: function displayHeight() {
            return this.open ? 'auto' : 0;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("4713614c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-99631868\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CollapseTransition.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-99631868\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CollapseTransition.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.PolarisVue-CollapseTransition--show {\n  transition: height 0.5s;\n}\n.PolarisVue-CollapseTransition--hide {\n  height: 0;\n  overflow: hidden;\n}\n", "", {"version":3,"sources":["/home/kiran-price/_polaris_vue/live/src/components/transitions/CollapseTransition.vue"],"names":[],"mappings":";AAAA;EACE,wBAAwB;CAAE;AAE5B;EACE,UAAU;EACV,iBAAiB;CAAE","file":"CollapseTransition.vue","sourcesContent":[".PolarisVue-CollapseTransition--show {\n  transition: height 0.5s; }\n\n.PolarisVue-CollapseTransition--hide {\n  height: 0;\n  overflow: hidden; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 318 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "PolarisVue-CollapseTransition",
      "enter-active-class": "PolarisVue-CollapseTransition--show",
      "leave-active-class": "PolarisVue-CollapseTransition--show",
      "enter-class": "PolarisVue-CollapseTransition--hide",
      "leave-to-class": "PolarisVue-CollapseTransition--hide"
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-99631868", esExports)
  }
}

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrapper",
    class: _vm.classes,
    style: ({
      height: _vm.displayHeight
    }),
    attrs: {
      "aria-hidden": !_vm.open
    }
  }, [_c('div', {
    ref: "heightNode"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9eff520a", esExports)
  }
}

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisScrollable_vue__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisScrollable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisScrollable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_588afc46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisScrollable_vue__ = __webpack_require__(324);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisScrollable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_588afc46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisScrollable_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisScrollable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisScrollable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-588afc46", Component.options)
  } else {
    hotAPI.reload("data-v-588afc46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//

var MAX_SCROLL_DISTANCE = 100;
var DELTA_THRESHOLD = 0.2;
var DELTA_PERCENTAGE = 0.2;
var EVENTS_TO_LOCK = ['scroll', 'touchmove', 'wheel'];
var PREFERS_REDUCED_MOTION = false;

exports.default = {
    props: {
        vertical: {
            type: Boolean,
            default: true
        },
        horizontal: Boolean,
        shadow: Boolean,
        hint: Boolean
    },
    computed: {
        topShadow: function topShadow() {
            var scrollArea = this.$refs.scrollArea;
            if (!scrollArea) {
                return false;
            }

            var scrollTop = scrollArea.scrollTop;
            return scrollTop > 0;
        },
        bottomShadow: function bottomShadow() {
            var scrollArea = this.$refs.scrollArea;
            if (!scrollArea) {
                return false;
            }

            return !(scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight);
        },
        classes: function classes() {
            var r = {
                'Polaris-Scrollable': true,
                'Polaris-Scrollable--vertical': this.vertical,
                'Polaris-Scrollable--horizontal': this.horizontal,
                'Polaris-Scrollable--hasTopShadow': this.topShadow,
                'Polaris-Scrollable--hasBottomShadow': this.bottomShadow
            };
            return r;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scrollArea",
    class: _vm.classes,
    on: {
      "scroll": function($event) {
        _vm.$forceUpdate()
      }
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-588afc46", esExports)
  }
}

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDescriptionList_vue__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDescriptionList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDescriptionList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7f6f5aa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDescriptionList_vue__ = __webpack_require__(327);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisDescriptionList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7f6f5aa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisDescriptionList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisDescriptionList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisDescriptionList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7f6f5aa", Component.options)
  } else {
    hotAPI.reload("data-v-d7f6f5aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }
};
module.exports = exports["default"];

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', {
    staticClass: "Polaris-DescriptionList"
  }, [_vm._l((_vm.items), function(item) {
    return [_c('dt', {
      staticClass: "Polaris-DescriptionList__Term"
    }, [_vm._v("\n            " + _vm._s(item.term) + "\n        ")]), _vm._v(" "), _c('dd', {
      staticClass: "Polaris-DescriptionList__Description"
    }, [_vm._v("\n            " + _vm._s(item.description) + "\n        ")])]
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d7f6f5aa", esExports)
  }
}

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisList_vue__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bd5fcfd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisList_vue__ = __webpack_require__(330);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bd5fcfd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bd5fcfd", Component.options)
  } else {
    hotAPI.reload("data-v-5bd5fcfd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DynamicTag = __webpack_require__(5);

var _DynamicTag2 = _interopRequireDefault(_DynamicTag);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = {
    components: {
        DynamicTag: _DynamicTag2.default
    },
    props: {
        type: {
            type: String,
            default: 'bullet'
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClas('Polaris-List', ['type'], this);
        },
        tag: function tag() {
            return this.type == 'bullet' ? 'ul' : 'ol';
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dynamic-tag', {
    attrs: {
      "tag": _vm.tag
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5bd5fcfd", esExports)
  }
}

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72db3fa0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisListItem_vue__ = __webpack_require__(332);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72db3fa0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisListItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisListItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisListItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72db3fa0", Component.options)
  } else {
    hotAPI.reload("data-v-72db3fa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "Polaris-List__Item"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72db3fa0", esExports)
  }
}

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceList_vue__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a9effaa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisResourceList_vue__ = __webpack_require__(337);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisResourceList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a9effaa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisResourceList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisResourceList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisResourceList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a9effaa", Component.options)
  } else {
    hotAPI.reload("data-v-6a9effaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisResourceListItem = __webpack_require__(46);

var _PolarisResourceListItem2 = _interopRequireDefault(_PolarisResourceListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisResourceListItem: _PolarisResourceListItem2.default
    },
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }
}; //
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
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisUnstyledLink = __webpack_require__(9);

var _PolarisUnstyledLink2 = _interopRequireDefault(_PolarisUnstyledLink);

var _PolarisThumbnail = __webpack_require__(31);

var _PolarisThumbnail2 = _interopRequireDefault(_PolarisThumbnail);

var _PolarisButtonGroup = __webpack_require__(7);

var _PolarisButtonGroup2 = _interopRequireDefault(_PolarisButtonGroup);

var _PolarisButtonGroupItem = __webpack_require__(13);

var _PolarisButtonGroupItem2 = _interopRequireDefault(_PolarisButtonGroupItem);

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisPopover = __webpack_require__(16);

var _PolarisPopover2 = _interopRequireDefault(_PolarisPopover);

var _PolarisBadge = __webpack_require__(30);

var _PolarisBadge2 = _interopRequireDefault(_PolarisBadge);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//

exports.default = {
    components: {
        PolarisUnstyledLink: _PolarisUnstyledLink2.default,
        PolarisThumbnail: _PolarisThumbnail2.default,
        PolarisButtonGroup: _PolarisButtonGroup2.default,
        PolarisButtonGroupItem: _PolarisButtonGroupItem2.default,
        PolarisButton: _PolarisButton2.default,
        PolarisPopover: _PolarisPopover2.default,
        PolarisBadge: _PolarisBadge2.default
    },
    props: {
        url: String,
        media: Object,
        attributeOne: String,
        attributeTwo: String,
        attributeThree: String,
        badges: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        exceptions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        actions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        persistActions: Boolean
    },
    data: function data() {
        return {
            actionsMenuVisible: false,
            focused: false
        };
    },

    computed: {
        realId: function realId() {
            return 'PolarisResourceListItem' + this._uid;
        },
        classes: function classes() {
            var r = _ComponentHelpers2.default.makeComponentClass('Polaris-ResourceList__Item', ['focused', 'persistActions', 'mediaType', 'mediaSize'], this);

            if (this.url) {
                r['Polaris-ResourceList__Item--link'] = true;
            }

            return r;
        }
    },
    methods: {
        exceptionItemClass: function exceptionItemClass(ex) {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-ResourceList__ExceptionItem', ['status'], ex);
        },
        onMouseEnter: function onMouseEnter() {
            this.focused = true;
        },
        onMouseLeave: function onMouseLeave() {
            this.focused = false;
        },
        onFocus: function onFocus() {
            this.focused = true;
        },
        onBlur: function onBlur(e) {
            if (!this.$refs.element || !this.$refs.element.contains(e.relatedTarget)) {
                this.focused = false;
            }
        },
        onExpandActions: function onExpandActions() {
            this.actionsMenuVisible = !this.actionsMenuVisible;
        },
        onCloseActions: function onCloseActions() {
            this.actionsMenuVisible = false;
        },
        handleAction: function handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "element",
    class: _vm.classes,
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "mouseenter": _vm.onMouseEnter,
      "mouseleave": _vm.onMouseLeave
    }
  }, [(_vm.url) ? _c('polaris-unstyled-link', {
    staticClass: "Polaris-ResourceList__Link",
    attrs: {
      "aria-describedby": _vm.realId,
      "url": _vm.url
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-ResourceList__Container",
    attrs: {
      "id": _vm.realId
    }
  }, [(_vm.media || _vm.$slots.media) ? [_c('div', {
    staticClass: "Polaris-ResourceList__Media"
  }, [_vm._t("media", [_c('polaris-thumbnail', {
    attrs: {
      "source": _vm.media.source,
      "alt": _vm.media.alt,
      "size": _vm.media.size
    }
  })])], 2)] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "Polaris-ResourceList__Content"
  }, [_c('div', {
    staticClass: "Polaris-ResourceList__Attributes"
  }, [_c('p', {
    staticClass: "Polaris-ResourceList__AttributeOne"
  }, [_vm._v("\n                    " + _vm._s(_vm.attributeOne) + "\n                ")]), _vm._v(" "), (_vm.attributeTwo || _vm.$slots.attributeTwo) ? _c('div', {
    staticClass: "Polaris-ResourceList__AttributeTwo"
  }, [_vm._t("attributeTwo", [_vm._v("\n                        " + _vm._s(_vm.attributeTwo) + "\n                    ")])], 2) : _vm._e(), _vm._v(" "), (_vm.badges) ? _c('div', {
    staticClass: "Polaris-ResourceList__Badge"
  }, _vm._l((_vm.badges), function(badge, i) {
    return _c('polaris-badge', {
      key: ("badge_" + (i + badge.content + badge.status)),
      attrs: {
        "status": badge.status
      }
    }, [_vm._v("\n                        " + _vm._s(badge.content) + "\n                    ")])
  })) : _vm._e(), _vm._v(" "), (_vm.attributeThree || _vm.$slots.attributeThree) ? _c('div', {
    staticClass: "Polaris-ResourceList__AttributeThree"
  }, [_vm._t("attributeThree", [_vm._v("\n                        " + _vm._s(_vm.attributeThree) + "\n                    ")])], 2) : _vm._e()]), _vm._v(" "), (_vm.exceptions) ? _c('ul', {
    staticClass: "Polaris-ResourceList__Exceptions"
  }, _vm._l((_vm.exceptions), function(ex) {
    return _c('li', {
      key: "ex",
      class: _vm.exceptionItemClass(ex)
    }, [(ex.title) ? _c('div', {
      staticClass: "Polaris-ResourceList__Title"
    }, [_vm._v("\n                        " + _vm._s(ex.title) + "\n                    ")]) : _vm._e(), _vm._v(" "), (ex.description) ? _c('div', {
      staticClass: "Polaris-ResourceList__Description"
    }, [_vm._v("\n                        " + _vm._s(ex.description) + "\n                    ")]) : _vm._e()])
  })) : _vm._e()]), _vm._v(" "), (_vm.actions) ? [(_vm.persistActions) ? [_c('div', {
    staticClass: "Polaris-ResourceList__Actions"
  }, [_c('polaris-button-group', _vm._l((_vm.actions), function(action) {
    return _c('polaris-button-group-item', {
      attrs: {
        "plain": ""
      }
    }, [_c('polaris-button', {
      attrs: {
        "url": action.url,
        "destructive": action.destructive,
        "disabled": action.disabled,
        "icon": action.icon,
        "accessibility-label": action.accessibilityLabel,
        "size": "slim",
        "plain": ""
      },
      on: {
        "click": function($event) {
          _vm.handleAction(action)
        }
      }
    }, [_vm._v("\n                                " + _vm._s(action.content) + "\n                            ")])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-ResourceList__Disclosure"
  }, [_c('polaris-popover', {
    attrs: {
      "active": _vm.actionsMenuVisible
    },
    on: {
      "click": _vm.onCloseActions
    }
  }, [_c('polaris-button', {
    attrs: {
      "aria-label": "Actions dropdown",
      "plain": "",
      "icon": "horizontalDots"
    },
    on: {
      "click": _vm.onExpandActions
    },
    slot: "activator"
  }), _vm._v(" "), _c('polaris-action-list', {
    attrs: {
      "items": _vm.actions
    }
  })], 1)], 1)] : _vm._e(), _vm._v(" "), (!_vm.persistActions) ? _c('div', {
    staticClass: "Polaris-ResourceList__Actions"
  }, [_c('polaris-button-group', {
    attrs: {
      "segmented": ""
    }
  }, _vm._l((_vm.actions), function(action) {
    return _c('polaris-button', {
      key: "action",
      attrs: {
        "primary": action.primary,
        "url": action.url,
        "destructive": action.destructive,
        "disabled": action.disabled,
        "icon": action.icon,
        "size": "slim",
        "accessibility-label": action.accessibilityLabel
      },
      on: {
        "click": function($event) {
          _vm.handleAction(action)
        }
      }
    }, [_vm._v("\n                        " + _vm._s(action.content) + "\n                    ")])
  }))], 1) : _vm._e()] : _vm._e()], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70fb9c5e", esExports)
  }
}

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "Polaris-ResourceList"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      staticClass: "Polaris-ResourceList__ItemWrapper"
    }, [_vm._t("item", [_c('polaris-resource-list-item', {
      attrs: {
        "url": item.url,
        "media": item.media,
        "attribute-one": item.attributeOne,
        "attribute-two": item.attributeTwo,
        "attribute-three": item.attributeThree,
        "badges": item.badges,
        "exceptions": item.exceptions,
        "actions": item.actions,
        "persist-actions": item.persistActions
      }
    })], {
      item: item,
      index: index
    })], 2)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a9effaa", esExports)
  }
}

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLink_vue__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ceee59_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLink_vue__ = __webpack_require__(340);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLink_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ceee59_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLink_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52ceee59", Component.options)
  } else {
    hotAPI.reload("data-v-52ceee59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        url: String,
        external: Boolean
    },
    methods: {
        onClick: function onClick(e) {
            this.$emit('click', e);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "Polaris-Link",
    attrs: {
      "href": _vm.url,
      "target": _vm.external ? '_blank' : ''
    },
    on: {
      "click": _vm.onClick
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52ceee59", esExports)
  }
}

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPagination_vue__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_89a2968e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPagination_vue__ = __webpack_require__(343);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisPagination_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_89a2968e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisPagination_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisPagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisPagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89a2968e", Component.options)
  } else {
    hotAPI.reload("data-v-89a2968e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisButton = __webpack_require__(3);

var _PolarisButton2 = _interopRequireDefault(_PolarisButton);

var _PolarisUnstyledLink = __webpack_require__(9);

var _PolarisUnstyledLink2 = _interopRequireDefault(_PolarisUnstyledLink);

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

var _arrowRight = __webpack_require__(41);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _arrowLeft = __webpack_require__(40);

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        PolarisButton: _PolarisButton2.default,
        PolarisUnstyledLink: _PolarisUnstyledLink2.default
    },
    props: {
        hasNext: Boolean,
        hasPrevious: Boolean,
        nextURL: String,
        previousURL: String,
        plain: Boolean,
        accessibilityLabel: String
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Pagination', ['plain'], this);
        }
    },
    data: function data() {
        return {
            arrowRight: _arrowRight2.default,
            arrowLeft: _arrowLeft2.default
        };
    },

    methods: {
        handleMouseUp: function handleMouseUp(e) {
            var target = e.target || e.srcElement;
            target.blur();
        },
        onNext: function onNext() {
            this.$emit('next');
        },
        onPrevious: function onPrevious() {
            this.$emit('previous');
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.accessibilityLabel || 'Pagination'
    }
  }, [(_vm.previousURL) ? _c('polaris-unstyled-link', {
    staticClass: "Polaris-Pagination__Button",
    attrs: {
      "url": _vm.previousURL,
      "aria-label": "Previous"
    },
    on: {
      "mouseup": _vm.handleMouseUp
    }
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.arrowLeft
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.previousURL) ? _c('polaris-button', {
    staticClass: "Polaris-Pagination__Button",
    attrs: {
      "disabled": !_vm.hasPrevious
    },
    on: {
      "click": _vm.onPrevious,
      "mouseup": _vm.handleMouseUp
    }
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.arrowLeft
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.nextURL) ? _c('polaris-unstyled-link', {
    staticClass: "Polaris-Pagination__Button",
    attrs: {
      "url": _vm.nextURL,
      "aria-label": "Next"
    },
    on: {
      "mouseup": _vm.handleMouseUp
    }
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.arrowRight
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.nextURL) ? _c('polaris-button', {
    staticClass: "Polaris-Pagination__Button",
    attrs: {
      "disabled": !_vm.hasNext
    },
    on: {
      "click": _vm.onNext,
      "mouseup": _vm.handleMouseUp
    }
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.arrowRight
    }
  })], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-89a2968e", esExports)
  }
}

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTabs_vue__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52c5e046_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTabs_vue__ = __webpack_require__(346);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTabs_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52c5e046_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTabs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52c5e046", Component.options)
  } else {
    hotAPI.reload("data-v-52c5e046", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//
//
//
//
//
//
//
//

exports.default = {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: ['value'],
    data: function data() {
        return {
            activeTab: null
        };
    },
    mounted: function mounted() {
        this.loadActiveTab();
    },

    computed: {
        tabNames: function tabNames() {
            return Object.keys(this.$slots);
        }
    },
    watch: {
        tabNames: function tabNames() {
            this.loadActiveTab();
        },
        activeTab: function activeTab() {
            this.$emit('change', this.activeTab);
        },
        value: function value() {
            this.activeTab = this.value;
        }
    },
    methods: {
        loadActiveTab: function loadActiveTab() {
            if (!this.activeTab && this.tabNames.length > 0) {
                this.activeTab = this.tabNames[0];
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('ul', {
    staticClass: "Polaris-Tabs",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.tabNames), function(name) {
    return _c('li', {
      staticClass: "Polaris-Tabs__TabContainer",
      attrs: {
        "role": "presentation"
      }
    }, [_c('button', {
      class: {
        'Polaris-Tabs__Tab': 1, 'Polaris-Tabs__Tab--selected': _vm.activeTab == name
      },
      attrs: {
        "role": "tab",
        "tabindex": "-1"
      },
      on: {
        "click": function($event) {
          _vm.activeTab = name
        }
      }
    }, [_c('span', {
      staticClass: "Polaris-Tabs__Title"
    }, [_vm._v(_vm._s(name))])])])
  }))]), _vm._v(" "), _vm._l((_vm.tabNames), function(name) {
    return (name == _vm.activeTab) ? _c('div', {
      staticStyle: {
        "padding": "1.6rem"
      }
    }, [_vm._t(name)], 2) : _vm._e()
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52c5e046", esExports)
  }
}

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextContainer_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextContainer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextContainer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6be92985_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextContainer_vue__ = __webpack_require__(349);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisTextContainer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6be92985_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisTextContainer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisTextContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisTextContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6be92985", Component.options)
  } else {
    hotAPI.reload("data-v-6be92985", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        spacing: {
            type: String,
            validate: function validate(s) {
                return ['tight', 'loose'].indexOf(s) > -1;
            },

            default: 'tight'
        }
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-TextContainer', ['spacing'], this);
        }
    }

}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6be92985", esExports)
  }
}

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBreadcrumbs_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBreadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBreadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e45367e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisBreadcrumbs_vue__ = __webpack_require__(353);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisBreadcrumbs_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e45367e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisBreadcrumbs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisBreadcrumbs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisBreadcrumbs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e45367e", Component.options)
  } else {
    hotAPI.reload("data-v-0e45367e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PolarisUnstyledLink = __webpack_require__(9);

var _PolarisUnstyledLink2 = _interopRequireDefault(_PolarisUnstyledLink);

var _PolarisIcon = __webpack_require__(2);

var _PolarisIcon2 = _interopRequireDefault(_PolarisIcon);

var _chevronIcon = __webpack_require__(352);

var _chevronIcon2 = _interopRequireDefault(_chevronIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        /**
         * This takes an array of actions, but only shows the last one in the array
         * for some reason.
         */
        breadcrumbs: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            chevronIcon: _chevronIcon2.default
        };
    },

    computed: {
        breadcrumbAction: function breadcrumbAction() {
            if (this.breadcrumbs.length < 1) {
                return null;
            }
            return this.breadcrumbs[this.breadcrumbs.length - 1];
        }
    }
}; //
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

module.exports = exports['default'];

/***/ }),
/* 352 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16\" fill=\"#31373D\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    attrs: {
      "role": "navigation"
    }
  }, [(_vm.breadcrumbAction) ? _c('polaris-unstyled-link', {
    staticClass: "Polaris-Breadcrumbs__Breadcrumb",
    attrs: {
      "url": _vm.breadcrumbAction.url
    }
  }, [_c('span', {
    staticClass: "Polaris-Breadcrumbs__Icon"
  }, [_c('polaris-icon', {
    attrs: {
      "source": _vm.chevronIcon
    }
  })], 1), _vm._v("\n        " + _vm._s(_vm.breadcrumbAction.content) + "\n    ")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e45367e", esExports)
  }
}

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutSection_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutSection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutSection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fea06e8_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLayoutSection_vue__ = __webpack_require__(356);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutSection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fea06e8_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLayoutSection_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisLayoutSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisLayoutSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fea06e8", Component.options)
  } else {
    hotAPI.reload("data-v-9fea06e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        secondary: Boolean,
        fullWidth: Boolean
    },
    computed: {
        classes: function classes() {
            return _ComponentHelpers2.default.makeComponentClass('Polaris-Layout__Section', ['secondary', 'fullWidth'], this);
        }
    }
}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9fea06e8", esExports)
  }
}

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutAnnotatedSection_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutAnnotatedSection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutAnnotatedSection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d86e296_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLayoutAnnotatedSection_vue__ = __webpack_require__(359);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PolarisLayoutAnnotatedSection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d86e296_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PolarisLayoutAnnotatedSection_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PolarisLayoutAnnotatedSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PolarisLayoutAnnotatedSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d86e296", Component.options)
  } else {
    hotAPI.reload("data-v-4d86e296", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentHelpers = __webpack_require__(1);

var _ComponentHelpers2 = _interopRequireDefault(_ComponentHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        title: String,
        description: String
    },
    computed: {}
}; //
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
//
//
//

module.exports = exports['default'];

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Polaris-Layout__AnnotatedSection"
  }, [_c('div', {
    staticClass: "Polaris-Layout__AnnotationWrapper"
  }, [_c('div', {
    staticClass: "Polaris-Layout__Annotation"
  }, [_c('polaris-text-container', [_c('polaris-heading', {
    attrs: {
      "tag": "h2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.title) + "\n                ")]), _vm._v(" "), (_vm.description) ? _c('p', [_vm._v(_vm._s(_vm.description))]) : _vm._e(), _vm._v(" "), _vm._t("description")], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "Polaris-Layout__AnnotationContent"
  }, [_vm._t("default")], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d86e296", esExports)
  }
}

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeTransition_vue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeTransition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeTransition_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7144095b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FadeTransition_vue__ = __webpack_require__(364);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(361)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeTransition_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7144095b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FadeTransition_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/transitions/FadeTransition.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FadeTransition.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7144095b", Component.options)
  } else {
    hotAPI.reload("data-v-7144095b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("d5b021fe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7144095b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FadeTransition.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7144095b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FadeTransition.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.PolarisVue-FadeTransition--show {\n  transition: opacity 0.5s;\n}\n.PolarisVue-FadeTransition--hide {\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/home/kiran-price/_polaris_vue/live/src/components/transitions/FadeTransition.vue"],"names":[],"mappings":";AAAA;EACE,yBAAyB;CAAE;AAE7B;EACE,WAAW;CAAE","file":"FadeTransition.vue","sourcesContent":[".PolarisVue-FadeTransition--show {\n  transition: opacity 0.5s; }\n\n.PolarisVue-FadeTransition--hide {\n  opacity: 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "PolarisVue-FadeTransition",
      "enter-active-class": "PolarisVue-FadeTransition--show",
      "leave-active-class": "PolarisVue-FadeTransition--show",
      "enter-class": "PolarisVue-FadeTransition--hide",
      "leave-to-class": "PolarisVue-FadeTransition--hide"
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7144095b", esExports)
  }
}

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeUpTransition_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeUpTransition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeUpTransition_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76fc7556_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FadeUpTransition_vue__ = __webpack_require__(369);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(366)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FadeUpTransition_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76fc7556_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FadeUpTransition_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/transitions/FadeUpTransition.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FadeUpTransition.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76fc7556", Component.options)
  } else {
    hotAPI.reload("data-v-76fc7556", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("5ddb9d9b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fc7556\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FadeUpTransition.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76fc7556\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FadeUpTransition.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(true);
// imports


// module
exports.push([module.i, "\n.PolarisVue-FadeUpTransition--show {\n  transition: opacity 0.5s, transform 0.5s;\n}\n.PolarisVue-FadeUpTransition--hide {\n  opacity: 0;\n  transform: translateY(30px);\n}\n", "", {"version":3,"sources":["/home/kiran-price/_polaris_vue/live/src/components/transitions/FadeUpTransition.vue"],"names":[],"mappings":";AAAA;EACE,yCAAyC;CAAE;AAE7C;EACE,WAAW;EACX,4BAA4B;CAAE","file":"FadeUpTransition.vue","sourcesContent":[".PolarisVue-FadeUpTransition--show {\n  transition: opacity 0.5s, transform 0.5s; }\n\n.PolarisVue-FadeUpTransition--hide {\n  opacity: 0;\n  transform: translateY(30px); }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "PolarisVue-FadeUpTransition",
      "enter-active-class": "PolarisVue-FadeUpTransition--show",
      "leave-active-class": "PolarisVue-FadeUpTransition--show",
      "enter-class": "PolarisVue-FadeUpTransition--hide",
      "leave-to-class": "PolarisVue-FadeUpTransition--hide"
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76fc7556", esExports)
  }
}

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logLevel = __webpack_require__(48);

var _logLevel2 = _interopRequireDefault(_logLevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Log = function () {
    function Log() {
        _classCallCheck(this, Log);

        this.loggers = [];
    }

    _createClass(Log, [{
        key: 'addLogger',
        value: function addLogger(logger) {
            this.loggers.push(logger);
        }
    }, {
        key: 'send',
        value: function send(level, tag, text) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.loggers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var logger = _step.value;

                    logger.send(level, tag, text);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'sendObject',
        value: function sendObject(level, tag, text, object) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.loggers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var logger = _step2.value;

                    logger.sendObject(level, tag, text, object);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return Log;
}();

// Expose log levels on Log


var levelMap = _logLevel2.default.getMap();
for (var key in levelMap) {
    Log.prototype[levelMap[key]] = key;
}

exports.default = new Log();
module.exports = exports['default'];

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(47);

var _config2 = _interopRequireDefault(_config);

var _logLevel = __webpack_require__(48);

var _logLevel2 = _interopRequireDefault(_logLevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsoleLogger = function () {
    function ConsoleLogger() {
        _classCallCheck(this, ConsoleLogger);

        this.level = _logLevel2.default.DEBUG;
    }

    _createClass(ConsoleLogger, [{
        key: 'setLogLevel',
        value: function setLogLevel(level) {
            this.level = level;
        }
    }, {
        key: 'send',
        value: function send(level, tag, text) {
            if (level < this.level) {
                return;
            }

            var fn = console.log;
            if (console.error && level == _logLevel2.default.ERROR || console.error && level == _logLevel2.default.FATAL) {
                fn = console.error;
            }
            if (console.warn && level == _logLevel2.default.WARN) {
                fn = console.warn;
            }
            if (console.info && level == _logLevel2.default.INFO) {
                fn = console.info;
            }
            if (console.debug && level == _logLevel2.default.DEBUG) {
                fn = console.debug;
            }
            // Binding back to console because iOS Safari is weird
            fn.bind(console)(_config2.default.logPrefix + _logLevel2.default.levelToString(level) + ': ' + '[' + tag + '] ' + text);
        }
    }, {
        key: 'sendObject',
        value: function sendObject(level, tag, text, object) {
            if (level < this.level) {
                return;
            }

            var fn = console.log;
            if (console.error && level == _logLevel2.default.ERROR || console.error && level == _logLevel2.default.FATAL) {
                fn = console.error;
            }
            if (console.warn && level == _logLevel2.default.WARN) {
                fn = console.warn;
            }
            if (console.info && level == _logLevel2.default.INFO) {
                fn = console.info;
            }
            if (console.debug && level == this.DEBUG) {
                fn = console.debug;
            }
            fn.bind(console)(_config2.default.logPrefix + _logLevel2.default.levelToString(level) + ': ' + '[' + tag + '] ' + text, object);
        }
    }]);

    return ConsoleLogger;
}();

exports.default = ConsoleLogger;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=polaris-vue.js.map
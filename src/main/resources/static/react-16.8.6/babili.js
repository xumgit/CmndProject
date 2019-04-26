(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Babel"));
	else if(typeof define === 'function' && define.amd)
		define(["Babel"], factory);
	else if(typeof exports === 'object')
		exports["Babili"] = factory(require("Babel"));
	else
		root["Babili"] = factory(root["Babel"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_88__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.version = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.transform = transform;

	var _babelStandalone = __webpack_require__(88);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	(0, _babelStandalone.registerPlugins)({
	  'minify-constant-folding': __webpack_require__(29),
	  'minify-dead-code-elimination': __webpack_require__(30),
	  'minify-empty-function': __webpack_require__(32),
	  'minify-flip-comparisons': __webpack_require__(34),
	  'minify-guarded-expressions': __webpack_require__(35),
	  'minify-infinity': __webpack_require__(36),
	  'minify-mangle-names': __webpack_require__(41),
	  'minify-replace': __webpack_require__(44),
	  'minify-simplify': __webpack_require__(48),
	  'minify-type-constructors': __webpack_require__(50),
	  'transform-inline-environment-variables': __webpack_require__(56),
	  'transform-member-expression-literals': __webpack_require__(10),
	  'transform-merge-sibling-variables': __webpack_require__(11),
	  'transform-minify-booleans': __webpack_require__(12),
	  'transform-node-env-inline': __webpack_require__(57),
	  'transform-property-literals': __webpack_require__(13),
	  'transform-remove-console': __webpack_require__(14),
	  'transform-remove-debugger': __webpack_require__(15),
	  'transform-simplify-comparison-operators': __webpack_require__(16),
	  'transform-undefined-to-void': __webpack_require__(17)
	});
	(0, _babelStandalone.registerPreset)('babili', __webpack_require__(62));

	function transform(code) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return (0, _babelStandalone.transform)(code, _extends({}, options, {
	    presets: [].concat(_toConsumableArray(options.presets || []), ['babili'])
	  }));
	}

	var version = exports.version = ("0.0.10");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var NotImplementedError = Error("NotImplementedError");

	var Collapser = function () {
	  function Collapser() {
	    _classCallCheck(this, Collapser);
	  }

	  _createClass(Collapser, [{
	    key: "isInitTypeValid",
	    value: function isInitTypeValid() {
	      throw NotImplementedError;
	    }
	  }, {
	    key: "isExpressionTypeValid",
	    value: function isExpressionTypeValid() {
	      throw NotImplementedError;
	    }
	  }, {
	    key: "getExpressionChecker",
	    value: function getExpressionChecker() {
	      throw NotImplementedError;
	    }
	  }, {
	    key: "extractAssignment",
	    value: function extractAssignment() {
	      throw NotImplementedError;
	    }
	  }, {
	    key: "addSuccessfully",
	    value: function addSuccessfully() {
	      throw NotImplementedError;
	    }
	  }, {
	    key: "isSizeSmaller",
	    value: function isSizeSmaller() {
	      return true;
	    }
	  }]);

	  return Collapser;
	}();

	module.exports = Collapser;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var VOID_0 = function VOID_0(t) {
	  return t.unaryExpression("void", t.numericLiteral(0), true);
	};

	// Types as Symbols - for comparing types
	// init must be empty object -
	// computing this involves checking object.keys() to be of length 0
	// skipped otherwise
	var types = {};
	var typeSymbols = function typeSymbols(t) {
	  // don't recompute
	  if (Object.keys(types).length < 1) {
	    t.TYPES.forEach(function (type) {
	      types[type] = Symbol.for(type);
	    });
	  }
	  return types;
	};

	var isNodeOfType = function isNodeOfType(t, node, typeSymbol) {
	  return (typeof typeSymbol === "undefined" ? "undefined" : _typeof(typeSymbol)) !== "symbol" ? false : t["is" + Symbol.keyFor(typeSymbol)](node);
	};

	var isPatternMatchesPath = function isPatternMatchesPath(t) {
	  return function _isPatternMatchesPath(patternValue, inputPath) {
	    if (Array.isArray(patternValue)) {
	      for (var i = 0; i < patternValue.length; i++) {
	        if (_isPatternMatchesPath(patternValue[i], inputPath)) {
	          return true;
	        }
	      }
	      return false;
	    }
	    if (typeof patternValue === "function") {
	      return patternValue(inputPath);
	    }
	    if (isNodeOfType(t, inputPath.node, patternValue)) return true;
	    var evalResult = inputPath.evaluate();
	    if (!evalResult.confident || !inputPath.isPure()) return false;
	    return evalResult.value === patternValue;
	  };
	};

	module.exports = {
	  VOID_0: VOID_0,
	  // Types as Symbols
	  typeSymbols: typeSymbols,
	  // This is required for resolving type aliases
	  isNodeOfType: isNodeOfType,
	  isPatternMatchesPath: isPatternMatchesPath
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	module.exports = function evaluate(path) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$tdz = _ref.tdz,
	      tdz = _ref$tdz === undefined ? false : _ref$tdz;

	  if (!tdz) {
	    return baseEvaluate(path);
	  }

	  if (path.isReferencedIdentifier()) {
	    return evaluateIdentifier(path);
	  }

	  var state = {
	    confident: true
	  };

	  // prepare
	  path.traverse({
	    Scope: function Scope(scopePath) {
	      scopePath.skip();
	    },
	    ReferencedIdentifier: function ReferencedIdentifier(idPath) {
	      var binding = idPath.scope.getBinding(idPath.node.name);
	      // don't deopt globals
	      // let babel take care of it
	      if (!binding) return;

	      var evalResult = evaluateIdentifier(idPath);
	      if (!evalResult.confident) {
	        state.confident = evalResult.confident;
	        state.deoptPath = evalResult.deoptPath;
	      }
	    }
	  });

	  if (!state.confident) {
	    return state;
	  }

	  return baseEvaluate(path);
	};

	function baseEvaluate(path) {
	  try {
	    return path.evaluate();
	  } catch (e) {
	    return {
	      confident: false,
	      error: e
	    };
	  }
	}

	// Original Source:
	// https://github.com/babel/babel/blob/master/packages/babel-traverse/src/path/evaluation.js
	// modified for Babel-minify use
	function evaluateIdentifier(path) {
	  if (!path.isReferencedIdentifier()) {
	    throw new Error("Expected ReferencedIdentifier. Got " + path.type);
	  }

	  var node = path.node;

	  var binding = path.scope.getBinding(node.name);

	  if (!binding) {
	    return deopt(path);
	  }

	  if (binding.constantViolations.length > 0) {
	    return deopt(binding.path);
	  }

	  // referenced in a different scope - deopt
	  if (shouldDeoptBasedOnScope(binding, path)) {
	    return deopt(path);
	  }

	  // let/var/const referenced before init
	  // or "var" referenced in an outer scope
	  var flowEvalResult = evaluateBasedOnControlFlow(binding, path);

	  if (flowEvalResult.confident) {
	    return flowEvalResult;
	  }

	  if (flowEvalResult.shouldDeopt) {
	    return deopt(path);
	  }

	  return path.evaluate();
	}

	// check if referenced in a different fn scope
	// we can't determine if this function is called sync or async
	// if the binding is in program scope
	// all it's references inside a different function should be deopted
	function shouldDeoptBasedOnScope(binding, refPath) {
	  if (binding.scope.path.isProgram() && refPath.scope !== binding.scope) {
	    return true;
	  }
	  return false;
	}

	function evaluateBasedOnControlFlow(binding, refPath) {
	  if (binding.kind === "var") {
	    // early-exit
	    var declaration = binding.path.parentPath;
	    if (declaration.parentPath.isIfStatement() || declaration.parentPath.isLoop() || declaration.parentPath.isSwitchCase()) {
	      return { shouldDeopt: true };
	    }

	    var blockParent = binding.path.scope.getBlockParent().path;
	    var fnParent = binding.path.getFunctionParent();

	    if (blockParent === fnParent) {
	      if (!fnParent.isProgram()) blockParent = blockParent.get("body");
	    }

	    // detect Usage Outside Init Scope
	    if (!blockParent.get("body").some(function (stmt) {
	      return stmt.isAncestor(refPath);
	    })) {
	      return { shouldDeopt: true };
	    }

	    // Detect usage before init
	    var stmts = fnParent.isProgram() ? fnParent.get("body") : fnParent.get("body").get("body");

	    var compareResult = compareBindingAndReference({
	      binding: binding,
	      refPath: refPath,
	      stmts: stmts
	    });

	    if (compareResult.reference && compareResult.binding) {
	      if (compareResult.reference.scope === "current" && compareResult.reference.idx < compareResult.binding.idx) {
	        return { confident: true, value: void 0 };
	      }

	      return { shouldDeopt: true };
	    }
	  } else if (binding.kind === "let" || binding.kind === "const") {
	    // binding.path is the declarator
	    var declarator = binding.path;
	    var _declaration = declarator.parentPath;

	    if (_declaration.parentPath.isIfStatement() || _declaration.parentPath.isLoop() || _declaration.parentPath.isSwitchCase()) {
	      return { shouldDeopt: true };
	    }

	    var scopePath = declarator.scope.path;
	    if (scopePath.isFunction() || scopePath.isCatchClause()) {
	      scopePath = scopePath.get("body");
	    }

	    // Detect Usage before Init
	    var _stmts = scopePath.get("body");

	    var _compareResult = compareBindingAndReference({
	      binding: binding,
	      refPath: refPath,
	      stmts: _stmts
	    });

	    if (_compareResult.reference && _compareResult.binding) {
	      if (_compareResult.reference.scope === "current" && _compareResult.reference.idx < _compareResult.binding.idx) {
	        throw new Error("ReferenceError: Used " + refPath.node.name + ": " + (binding.kind + " binding before declaration"));
	      }
	      if (_compareResult.reference.scope === "other") {
	        return { shouldDeopt: true };
	      }
	    }
	  }

	  return { confident: false, shouldDeopt: false };
	}

	function compareBindingAndReference(_ref2) {
	  var binding = _ref2.binding,
	      refPath = _ref2.refPath,
	      stmts = _ref2.stmts;

	  var state = {
	    binding: null,
	    reference: null
	  };

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = stmts.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _ref3 = _step.value;

	      var _ref4 = _slicedToArray(_ref3, 2);

	      var idx = _ref4[0];
	      var stmt = _ref4[1];

	      if (stmt.isAncestor(binding.path)) {
	        state.binding = { idx: idx };
	      }
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = binding.referencePaths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var ref = _step2.value;

	          if (ref === refPath && stmt.isAncestor(ref)) {
	            state.reference = {
	              idx: idx,
	              scope: binding.path.scope === ref.scope ? "current" : "other"
	            };
	            break;
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

	  return state;
	}

	function deopt(deoptPath) {
	  return {
	    confident: false,
	    deoptPath: deoptPath
	  };
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	var flipSeen = Symbol("flipSeen");

	module.exports = function (t) {
	  return {
	    hasSeen: function hasSeen(node) {
	      return !!node[flipSeen];
	    },


	    // Takes an expressions and determines if it has
	    // more nodes that could benifit from flipping than not.
	    shouldFlip: function shouldFlip(topNode) {
	      var savings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      visit(topNode);
	      return savings > 0;

	      function visit(node) {
	        if (t.isUnaryExpression(node, { operator: "!" })) {
	          savings++;
	          return;
	        }

	        if (t.isLogicalExpression(node)) {
	          visit(node.left);
	          visit(node.right);
	          return;
	        }

	        if (!(t.isBinaryExpression(node) && t.EQUALITY_BINARY_OPERATORS.indexOf(node.operator) > -1)) {
	          // Binary expressions wouldn't hurut because we know how to flip them
	          savings--;
	        }
	      }
	    },
	    flip: function flip(node, resultNotUsed) {
	      var lastNodeDesc = void 0;
	      var ret = visit(node);

	      ret[flipSeen] = true;

	      if (resultNotUsed && lastNodeDesc) {
	        var _lastNodeDesc = lastNodeDesc,
	            parent = _lastNodeDesc.parent,
	            key = _lastNodeDesc.key;

	        if (parent && key && t.isUnaryExpression(parent[key], { operator: "!" })) {
	          parent[key] = parent[key].argument;
	        }
	      }

	      return ret;

	      function visit(node, parent, key) {
	        lastNodeDesc = { parent: parent, key: key };

	        if (t.isUnaryExpression(node, { operator: "!" })) {
	          return node.argument;
	        }

	        if (t.isLogicalExpression(node)) {
	          node.operator = node.operator === "&&" ? "||" : "&&";
	          node.left = visit(node.left, node, "left");
	          node.right = visit(node.right, node, "right");
	          return node;
	        }

	        if (t.isBinaryExpression(node)) {
	          var operator = void 0;
	          switch (node.operator) {
	            case "!==":
	              operator = "===";
	              break;
	            case "===":
	              operator = "!==";
	              break;
	            case "!=":
	              operator = "==";
	              break;
	            case "==":
	              operator = "!=";
	              break;
	          }

	          if (operator) {
	            node.operator = operator;
	            return node;
	          }

	          // Falls through to unary expression
	        }

	        return t.unaryExpression("!", node, true);
	      }
	    }
	  };
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (t) {
	  return function isVoid0(expr) {
	    return t.isUnaryExpression(expr, { operator: "void" }) && t.isNumericLiteral(expr.argument, { value: 0 });
	  };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var EVAL_SCOPE_MARKER = Symbol("evalInScope");

	module.exports = {
	  EVAL_SCOPE_MARKER: EVAL_SCOPE_MARKER,
	  getEvalScopes: getEvalScopes,
	  markEvalScopes: markEvalScopes,
	  isMarked: isMarked,
	  hasEval: hasEval
	};

	function getEvalScopes(path) {
	  var evalScopes = new Set();

	  function add(scope) {
	    var evalScope = scope;
	    do {
	      evalScopes.add(evalScope);
	    } while (evalScope = evalScope.parent);
	  }

	  path.traverse({
	    CallExpression: function CallExpression(evalPath) {
	      var callee = evalPath.get("callee");

	      if (callee.isIdentifier() && callee.node.name === "eval" && !callee.scope.getBinding("eval")) {
	        add(callee.scope);
	      }
	    }
	  });

	  return evalScopes;
	}

	function markEvalScopes(path) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EVAL_SCOPE_MARKER;

	  var evalScopes = getEvalScopes(path);
	  [].concat(_toConsumableArray(evalScopes)).forEach(function (scope) {
	    scope[key] = true;
	  });
	}

	function isMarked(scope) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EVAL_SCOPE_MARKER;

	  return Object.prototype.hasOwnProperty.call(scope, key);
	}

	function hasEval(scope) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EVAL_SCOPE_MARKER;

	  if (!isMarked(scope, key)) {
	    markEvalScopes(scope, key);
	  }
	  return scope[key];
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var FALLBACK_HANDLER = Symbol("fallback handler");

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var undef = t.unaryExpression("void", t.numericLiteral(0));

	  function isUndef(ob) {
	    return ob === undefined || t.isIdentifier(ob, { name: "undefined" }) || t.isUnaryExpression(ob, { operator: "void" });
	  }

	  function defaultZero(cb) {
	    return function () {
	      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.numericLiteral(0);

	      if (t.isNumericLiteral(i)) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        return cb.call.apply(cb, [this, this, i.value].concat(args));
	      }
	    };
	  }

	  return {
	    ArrayExpression: {
	      members: _defineProperty({
	        length: function length() {
	          if (this.elements.some(function (el) {
	            return t.isSpreadElement(el);
	          })) {
	            return;
	          }
	          return t.numericLiteral(this.elements.length);
	        }
	      }, FALLBACK_HANDLER, function (i) {
	        if (this.elements.some(function (el) {
	          return t.isSpreadElement(el);
	        })) {
	          return;
	        }
	        if (typeof i === "number" || i.match(/^\d+$/)) {
	          return this.elements[i] || undef;
	        }
	      }),
	      calls: {
	        join: function join() {
	          var sep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.stringLiteral(",");

	          if (!t.isStringLiteral(sep)) return;
	          var bad = false;
	          var str = this.elements.map(function (el) {
	            if (!t.isLiteral(el)) {
	              bad = true;
	              return;
	            }
	            return el.value;
	          }).join(sep.value);
	          return bad ? undefined : t.stringLiteral(str);
	        },
	        push: function push() {
	          return t.numericLiteral(this.elements.length + arguments.length);
	        },
	        shift: function shift() {
	          if (this.elements.length === 0) {
	            return undef;
	          }
	          return t.numericLiteral(this.elements.length - 1);
	        },
	        slice: function slice() {
	          var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.numericLiteral(0);
	          var end = arguments[1];

	          if (!t.isNumericLiteral(start) || end && !t.isNumericLiteral(end)) {
	            return;
	          }
	          return t.arrayExpression(this.elements.slice(start.value, end && end.value));
	        },
	        pop: function pop() {
	          return this.elements[this.elements.length - 1] || undef;
	        },
	        reverse: function reverse() {
	          return t.arrayExpression(this.elements.reverse());
	        },
	        splice: function splice(start, end) {
	          var _elements$slice;

	          if (!t.isNumericLiteral(start) || end && !t.isNumericLiteral(end)) {
	            return;
	          }

	          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	            args[_key2 - 2] = arguments[_key2];
	          }

	          if (end) {
	            args.unshift(end.value);
	          }
	          return t.arrayExpression((_elements$slice = this.elements.slice()).splice.apply(_elements$slice, [start.value].concat(args)));
	        }
	      }
	    },
	    StringLiteral: {
	      members: _defineProperty({
	        length: function length() {
	          return t.numericLiteral(this.value.length);
	        }
	      }, FALLBACK_HANDLER, function (i) {
	        if (typeof i === "number" || i.match(/^\d+$/)) {
	          var ch = this.value[i];
	          return ch ? t.stringLiteral(ch) : undef;
	        }
	      }),
	      calls: {
	        split: function split() {
	          var sep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undef;

	          var realSep = null;
	          if (t.isStringLiteral(sep)) {
	            realSep = sep.value;
	          }
	          if (isUndef(sep)) {
	            realSep = sep;
	          }
	          if (realSep !== null) {
	            return t.arrayExpression(this.value.split(realSep).map(function (str) {
	              return t.stringLiteral(str);
	            }));
	          }
	        },

	        charAt: defaultZero(function (_ref2, i) {
	          var value = _ref2.value;
	          return t.stringLiteral(value.charAt(i));
	        }),
	        charCodeAt: defaultZero(function (_ref3, i) {
	          var value = _ref3.value;
	          return t.numericLiteral(value.charCodeAt(i));
	        }),
	        codePointAt: defaultZero(function (_ref4, i) {
	          var value = _ref4.value;
	          return t.numericLiteral(value.codePointAt(i));
	        })
	      }
	    }
	  };
	};
	module.exports.FALLBACK_HANDLER = FALLBACK_HANDLER;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = isLabelIdentifier;

	function isLabelIdentifier(path) {
	  var node = path.node;

	  return path.parentPath.isLabeledStatement({ label: node }) || path.parentPath.isBreakStatement({ label: node }) || path.parentPath.isContinueStatement({ label: node });
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _toArray(arr) {
	  return Array.isArray(arr) ? arr : Array.from(arr);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var LEAF_NODE = Symbol("LEAF_NODE");

	module.exports = function () {
	  function PatternMatch(patterns) {
	    _classCallCheck(this, PatternMatch);

	    this.decisionTree = this.makeDecisionTree(patterns);
	  }

	  _createClass(PatternMatch, [{
	    key: "handle",
	    value: function handle(input, isMatch) {
	      var result = this.match(input, isMatch);

	      if (!result.match) {
	        throw new Error("No Match Found for " + input.toString());
	      }

	      if (typeof result.value !== "function") {
	        throw new Error("Expecting a function. Instead got - " + result.value.toString());
	      }

	      result.value.call(null, input, result.keys);
	    }
	  }, {
	    key: "match",
	    value: function match(input) {
	      var isMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
	        return a === b;
	      };

	      var current = this.decisionTree;
	      var result = {
	        match: false,
	        value: void 0,
	        keys: []
	      };

	      // to handle falsy keys
	      var NO_MATCH = Symbol("NO_MATCH");

	      for (var i = 0; i < input.length; i++) {
	        var matchedKey = NO_MATCH;

	        // because map doesn't support custom key equal function
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = current.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            if (isMatch(key, input[i])) {
	              matchedKey = key;
	              result.keys.push(matchedKey);
	              break;
	            }
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

	        if (matchedKey !== NO_MATCH) {
	          current = current.get(matchedKey);

	          if (i === input.length - 1) {
	            if (current.has(LEAF_NODE)) {
	              result.match = true;
	              result.value = current.get(LEAF_NODE);
	            }
	            break;
	          }
	        } else {
	          break;
	        }
	      }
	      return result;
	    }
	  }, {
	    key: "makeDecisionTree",
	    value: function makeDecisionTree(patterns) {
	      // order of keys in a Map is the order of insertion
	      var root = new Map();

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = patterns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var pattern = _step2.value;

	          make(root, pattern);
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

	      return root;

	      function make(parent, pattern) {
	        if (pattern.length < 2) {
	          throw new Error("at least 2 elements required in a pattern");
	        }

	        if (pattern.length === 2) {
	          if (parent.has(pattern[0])) {
	            var pattern0 = parent.get(pattern[0]);
	            if (!pattern0.has(LEAF_NODE)) {
	              pattern0.set(LEAF_NODE, pattern[1]);
	            }
	            // here we don't handle duplicates
	            // this pattern would have already been matched
	          } else {
	            parent.set(pattern[0], new Map([[LEAF_NODE, pattern[1]]]));
	          }

	          return parent;
	        }

	        var _pattern = _toArray(pattern),
	            current = _pattern[0],
	            rest = _pattern.slice(1);

	        if (parent.has(current)) {
	          make(parent.get(current), rest);
	        } else {
	          parent.set(current, make(new Map(), rest));
	        }
	        return parent;
	      }
	    }
	  }]);

	  return PatternMatch;
	}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  return {
	    name: "transform-member-expression-literals",
	    visitor: {
	      // foo['bar'] -> foo.bar
	      MemberExpression: {
	        exit: function exit(_ref2) {
	          var node = _ref2.node;

	          var prop = node.property;
	          if (!node.computed || !t.isStringLiteral(prop)) {
	            return;
	          }

	          if (prop.value.match(/^\d+$/)) {
	            var newProp = parseInt(prop.value, 10);
	            if (newProp.toString() === prop.value) {
	              node.property = t.numericLiteral(newProp);
	              node.computed = false;
	            }
	          } else if (t.isValidIdentifier(prop.value)) {
	            node.property = t.identifier(prop.value);
	            node.computed = false;
	          }
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  function liftDeclaration(path, body, kind) {
	    if (body[0] && body[0].isVariableDeclaration({ kind: kind })) {
	      if (body[0].node.declarations.length > 1) {
	        return;
	      }

	      if (body[1] && body[1].isVariableDeclaration({ kind: kind })) {
	        return;
	      }

	      var firstNode = body[0].node.declarations[0];

	      if (!t.isIdentifier(firstNode.id) || !firstNode.init) {
	        return;
	      }

	      var init = path.get("init");
	      if (!init.isVariableDeclaration({ kind: kind })) {
	        return;
	      }

	      init.pushContainer("declarations", t.variableDeclarator(firstNode.id));

	      body[0].replaceWith(t.assignmentExpression("=", t.clone(firstNode.id), t.clone(firstNode.init)));
	    }
	  }

	  return {
	    name: "transform-merge-sibling-variables",
	    visitor: {
	      ForStatement: function ForStatement(path) {
	        // Lift declarations to the loop initializer
	        var body = path.get("body");
	        body = body.isBlockStatement() ? body.get("body") : [body];

	        liftDeclaration(path, body, "var");
	        liftDeclaration(path, body, "let");
	      },

	      VariableDeclaration: {
	        enter: [
	        // concat variables of the same kind with their siblings
	        function (path) {
	          if (!path.inList) {
	            return;
	          }

	          var node = path.node;

	          var sibling = path.getSibling(path.key + 1);

	          while (sibling.isVariableDeclaration({ kind: node.kind })) {
	            node.declarations = node.declarations.concat(sibling.node.declarations);
	            sibling.remove();

	            sibling = path.getSibling(path.key + 1);
	          }
	        },

	        // concat `var` declarations next to for loops with it's initialisers.
	        // block-scoped `let` and `const` are not moved because the for loop
	        // is a different block scope.
	        function (path) {
	          if (!path.inList) {
	            return;
	          }

	          var node = path.node;

	          if (node.kind !== "var") {
	            return;
	          }

	          var next = path.getSibling(path.key + 1);
	          if (!next.isForStatement()) {
	            return;
	          }

	          var init = next.get("init");
	          if (!init.isVariableDeclaration({ kind: node.kind })) {
	            return;
	          }

	          init.node.declarations = node.declarations.concat(init.node.declarations);
	          path.remove();
	        }]
	      }
	    }
	  };
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var TRUE = t.unaryExpression("!", t.numericLiteral(0), true);
	  var FALSE = t.unaryExpression("!", t.numericLiteral(1), true);

	  return {
	    name: "transform-minify-booleans",
	    visitor: {
	      // shorten booleans to a negation
	      // true -> !0
	      // false -> !1
	      BooleanLiteral: function BooleanLiteral(path) {
	        path.replaceWith(path.node.value ? TRUE : FALSE);
	      }
	    }
	  };
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _require = __webpack_require__(59),
	    reduceStaticPropertyNameES5 = _require.reduceStaticPropertyNameES5;

	module.exports = function (_ref) {
	  var t = _ref.types;

	  return {
	    name: "transform-property-literals",
	    visitor: {
	      // { 'foo': 'bar' } -> { foo: 'bar' }
	      ObjectProperty: {
	        exit: function exit(path) {
	          var key = path.get("key");
	          if (!key.isStringLiteral()) {
	            return;
	          }

	          var newNode = t.clone(path.node);
	          newNode.key = reduceStaticPropertyNameES5(t, key.node);
	          newNode.computed = false;

	          path.replaceWith(newNode);
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  return {
	    name: "transform-remove-console",
	    visitor: {
	      CallExpression: function CallExpression(path) {
	        var callee = path.get("callee");

	        if (!callee.isMemberExpression()) return;

	        if (isConsole(callee)) {
	          // console.log()
	          if (path.parentPath.isExpressionStatement()) {
	            path.remove();
	          } else {
	            path.replaceWith(createVoid0());
	          }
	        } else if (isConsoleBind(callee)) {
	          // console.log.bind()
	          path.replaceWith(createNoop());
	        }
	      },

	      MemberExpression: {
	        exit: function exit(path) {
	          if (isConsole(path) && !path.parentPath.isMemberExpression()) {
	            if (path.parentPath.isAssignmentExpression() && path.parentKey === "left") {
	              path.parentPath.get("right").replaceWith(createNoop());
	            } else {
	              path.replaceWith(createNoop());
	            }
	          }
	        }
	      }
	    }
	  };

	  function isGlobalConsoleId(id) {
	    var name = "console";
	    return id.isIdentifier({ name: name }) && !id.scope.getBinding(name) && id.scope.hasGlobal(name);
	  }

	  function isConsole(memberExpr) {
	    var object = memberExpr.get("object");
	    if (isGlobalConsoleId(object)) return true;

	    var property = memberExpr.get("property");
	    return isGlobalConsoleId(object.get("object")) && (property.isIdentifier({ name: "call" }) || property.isIdentifier({ name: "apply" }));
	  }

	  function isConsoleBind(memberExpr) {
	    var object = memberExpr.get("object");
	    return object.isMemberExpression() && isGlobalConsoleId(object.get("object")) && memberExpr.get("property").isIdentifier({ name: "bind" });
	  }

	  function createNoop() {
	    return t.functionExpression(null, [], t.blockStatement([]));
	  }

	  function createVoid0() {
	    return t.unaryExpression("void", t.numericLiteral(0));
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function () {
	  return {
	    name: "transform-remove-debugger",
	    visitor: {
	      DebuggerStatement: function DebuggerStatement(path) {
	        path.remove();
	      }
	    }
	  };
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function () {
	  return {
	    name: "transform-simplify-comparison-operators",
	    visitor: {
	      // simplify comparison operations if we're 100% certain
	      // that each value will always be of the same type
	      BinaryExpression: function BinaryExpression(path) {
	        var node = path.node;

	        var op = node.operator;
	        if (op !== "===" && op !== "!==") {
	          return;
	        }

	        var left = path.get("left");
	        var right = path.get("right");
	        var strictMatch = left.baseTypeStrictlyMatches(right);
	        if (strictMatch) {
	          node.operator = node.operator.slice(0, -1);
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var VOID_0 = t.unaryExpression("void", t.numericLiteral(0), true);

	  return {
	    name: "transform-undefined-to-void",
	    visitor: {
	      ReferencedIdentifier: function ReferencedIdentifier(path) {
	        if (path.node.name === "undefined") {
	          path.replaceWith(VOID_0);
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 18 */
4,
/* 19 */
5,
/* 20 */
6,
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var FALLBACK_HANDLER = Symbol("fallback handler");

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var undef = t.unaryExpression("void", t.numericLiteral(0));

	  function isUndef(ob) {
	    return ob === undefined || t.isIdentifier(ob, { name: "undefined" }) || t.isUnaryExpression(ob, { operator: "void" });
	  }

	  function defaultZero(cb) {
	    return function () {
	      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.numericLiteral(0);

	      if (t.isNumericLiteral(i)) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        return cb.call.apply(cb, [this, this, i.value].concat(args));
	      }
	    };
	  }

	  return {
	    ArrayExpression: {
	      members: _defineProperty({
	        length: function length() {
	          return t.numericLiteral(this.elements.length);
	        }
	      }, FALLBACK_HANDLER, function (i) {
	        if (typeof i === "number" || i.match(/^\d+$/)) {
	          return this.elements[i] || undef;
	        }
	      }),
	      calls: {
	        join: function join() {
	          var sep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.stringLiteral(",");

	          if (!t.isStringLiteral(sep)) return;
	          var bad = false;
	          var str = this.elements.map(function (el) {
	            if (!t.isLiteral(el)) {
	              bad = true;
	              return;
	            }
	            return el.value;
	          }).join(sep.value);
	          return bad ? undefined : t.stringLiteral(str);
	        },
	        push: function push() {
	          return t.numericLiteral(this.elements.length + arguments.length);
	        },
	        shift: function shift() {
	          if (this.elements.length === 0) {
	            return undef;
	          }
	          return t.numericLiteral(this.elements.length - 1);
	        },
	        slice: function slice() {
	          var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.numericLiteral(0);
	          var end = arguments[1];

	          if (!t.isNumericLiteral(start) || end && !t.isNumericLiteral(end)) {
	            return;
	          }
	          return t.arrayExpression(this.elements.slice(start.value, end && end.value));
	        },
	        pop: function pop() {
	          return this.elements[this.elements.length - 1] || undef;
	        },
	        reverse: function reverse() {
	          return t.arrayExpression(this.elements.reverse());
	        },
	        splice: function splice(start, end) {
	          var _elements$slice;

	          if (!t.isNumericLiteral(start) || end && !t.isNumericLiteral(end)) {
	            return;
	          }

	          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	            args[_key2 - 2] = arguments[_key2];
	          }

	          if (end) {
	            args.unshift(end.value);
	          }
	          return t.arrayExpression((_elements$slice = this.elements.slice()).splice.apply(_elements$slice, [start.value].concat(args)));
	        }
	      }
	    },
	    StringLiteral: {
	      members: _defineProperty({
	        length: function length() {
	          return t.numericLiteral(this.value.length);
	        }
	      }, FALLBACK_HANDLER, function (i) {
	        if (typeof i === "number" || i.match(/^\d+$/)) {
	          var ch = this.value[i];
	          return ch ? t.stringLiteral(ch) : undef;
	        }
	      }),
	      calls: {
	        split: function split() {
	          var sep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undef;

	          var realSep = null;
	          if (t.isStringLiteral(sep)) {
	            realSep = sep.value;
	          }
	          if (isUndef(sep)) {
	            realSep = sep;
	          }
	          if (realSep !== null) {
	            return t.arrayExpression(this.value.split(realSep).map(function (str) {
	              return t.stringLiteral(str);
	            }));
	          }
	        },

	        charAt: defaultZero(function (_ref2, i) {
	          var value = _ref2.value;
	          return t.stringLiteral(value.charAt(i));
	        }),
	        charCodeAt: defaultZero(function (_ref3, i) {
	          var value = _ref3.value;
	          return t.numericLiteral(value.charCodeAt(i));
	        }),
	        codePointAt: defaultZero(function (_ref4, i) {
	          var value = _ref4.value;
	          return t.numericLiteral(value.codePointAt(i));
	        })
	      }
	    }
	  };
	};
	module.exports.FALLBACK_HANDLER = FALLBACK_HANDLER;

/***/ }),
/* 22 */
8,
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	/*
	  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
	  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

	    // See `tools/generate-identifier-regex.js`.
	    ES5Regex = {
	        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
	    };

	    ES6Regex = {
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	    };

	    function isDecimalDigit(ch) {
	        return 0x30 <= ch && ch <= 0x39; // 0..9
	    }

	    function isHexDigit(ch) {
	        return 0x30 <= ch && ch <= 0x39 || // 0..9
	        0x61 <= ch && ch <= 0x66 || // a..f
	        0x41 <= ch && ch <= 0x46; // A..F
	    }

	    function isOctalDigit(ch) {
	        return ch >= 0x30 && ch <= 0x37; // 0..7
	    }

	    // 7.2 White Space

	    NON_ASCII_WHITESPACES = [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF];

	    function isWhiteSpace(ch) {
	        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 || ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
	    }

	    // 7.3 Line Terminators

	    function isLineTerminator(ch) {
	        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
	    }

	    // 7.6 Identifier Names and Identifiers

	    function fromCodePoint(cp) {
	        if (cp <= 0xFFFF) {
	            return String.fromCharCode(cp);
	        }
	        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
	        var cu2 = String.fromCharCode((cp - 0x10000) % 0x400 + 0xDC00);
	        return cu1 + cu2;
	    }

	    IDENTIFIER_START = new Array(0x80);
	    for (ch = 0; ch < 0x80; ++ch) {
	        IDENTIFIER_START[ch] = ch >= 0x61 && ch <= 0x7A || // a..z
	        ch >= 0x41 && ch <= 0x5A || // A..Z
	        ch === 0x24 || ch === 0x5F; // $ (dollar) and _ (underscore)
	    }

	    IDENTIFIER_PART = new Array(0x80);
	    for (ch = 0; ch < 0x80; ++ch) {
	        IDENTIFIER_PART[ch] = ch >= 0x61 && ch <= 0x7A || // a..z
	        ch >= 0x41 && ch <= 0x5A || // A..Z
	        ch >= 0x30 && ch <= 0x39 || // 0..9
	        ch === 0x24 || ch === 0x5F; // $ (dollar) and _ (underscore)
	    }

	    function isIdentifierStartES5(ch) {
	        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
	    }

	    function isIdentifierPartES5(ch) {
	        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
	    }

	    function isIdentifierStartES6(ch) {
	        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
	    }

	    function isIdentifierPartES6(ch) {
	        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
	    }

	    module.exports = {
	        isDecimalDigit: isDecimalDigit,
	        isHexDigit: isHexDigit,
	        isOctalDigit: isOctalDigit,
	        isWhiteSpace: isWhiteSpace,
	        isLineTerminator: isLineTerminator,
	        isIdentifierStartES5: isIdentifierStartES5,
	        isIdentifierPartES5: isIdentifierPartES5,
	        isIdentifierStartES6: isIdentifierStartES6,
	        isIdentifierPartES6: isIdentifierPartES6
	    };
	})();
	/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}();

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/** Built-in value references. */
	var _Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache();
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	/**
	 * The base implementation of `_.some` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function baseSome(collection, predicate) {
	  var result;

	  baseEach(collection, function (value, index, collection) {
	    result = predicate(value, index, collection);
	    return !result;
	  });
	  return !!result;
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function (collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while (fromRight ? index-- : ++index < length) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	          return seen.add(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	  getTag = function getTag(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag;
	        case mapCtorString:
	          return mapTag;
	        case promiseCtorString:
	          return promiseTag;
	        case setCtorString:
	          return setTag;
	        case weakMapCtorString:
	          return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function (string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Checks if `predicate` returns truthy for **any** element of `collection`.
	 * Iteration is stopped once `predicate` returns truthy. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.some([null, 0, 'yes', false], Boolean);
	 * // => true
	 *
	 * var users = [
	 *   { 'user': 'barney', 'active': true },
	 *   { 'user': 'fred',   'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.some(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.some(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.some(users, 'active');
	 * // => true
	 */
	function some(collection, predicate, guard) {
	  var func = isArray(collection) ? arraySome : baseSome;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = some;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(87)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (t) {
	  // If we can't remove the expression we'll just replace it with an empty statement.
	  function removeOrVoid(path) {
	    // If we are working with the expression of an expression statement we want to deal
	    // with the expression statement instead.
	    if (path.parentPath.isExpressionStatement({ expression: path.node })) {
	      path = path.parentPath;
	    }

	    // If we are working with a variable declarator and there is only one then
	    // we need to look at the parent.
	    if (path.isVariableDeclarator() && path.parent.declarations[0] === path.node && path.parent.declarations.length === 1) {
	      path = path.parentPath;
	    }

	    if (!path.inList && path.scope.path.type !== "ForStatement") {
	      path.replaceWith(t.emptyStatement());
	    } else {
	      path.remove();
	    }
	  }

	  return removeOrVoid;
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (t) {
	  return function toMultipleSequenceExpressions(statements) {
	    var retStatements = [];
	    var bailed = void 0;
	    do {
	      var res = convert(statements);
	      bailed = res.bailed;
	      var seq = res.seq,
	          bailedAtIndex = res.bailedAtIndex;

	      if (seq) {
	        retStatements.push(t.expressionStatement(seq));
	      }
	      if (bailed && statements[bailedAtIndex]) {
	        retStatements.push(statements[bailedAtIndex]);
	      }
	      if (bailed) {
	        statements = statements.slice(bailedAtIndex + 1);
	        if (!statements.length) {
	          bailed = false;
	        }
	      }
	    } while (bailed);

	    return retStatements;

	    function convert(nodes) {
	      var exprs = [];

	      var _loop = function _loop(i) {
	        var bail = function bail() {
	          var seq = void 0;
	          if (exprs.length === 1) {
	            seq = exprs[0];
	          } else if (exprs.length) {
	            seq = t.sequenceExpression(exprs);
	          }

	          return {
	            seq: seq,
	            bailed: true,
	            bailedAtIndex: i
	          };
	        };

	        var node = nodes[i];
	        if (t.isExpression(node)) {
	          exprs.push(node);
	        } else if (t.isExpressionStatement(node)) {
	          if (node.expression) exprs.push(node.expression);
	        } else if (t.isIfStatement(node)) {
	          var consequent = void 0;
	          if (node.consequent) {
	            var _res = convert([node.consequent]);
	            if (_res.bailed) {
	              return {
	                v: bail()
	              };
	            }
	            consequent = _res.seq;
	          }
	          var alternate = void 0;
	          if (node.alternate) {
	            var _res2 = convert([node.alternate]);
	            if (_res2.bailed) {
	              return {
	                v: bail()
	              };
	            }
	            alternate = _res2.seq;
	          }

	          if (!alternate && !consequent) {
	            exprs.push(node.test);
	          } else if (!alternate) {
	            exprs.push(t.logicalExpression("&&", node.test, consequent));
	          } else if (!consequent) {
	            exprs.push(t.logicalExpression("||", node.test, alternate));
	          } else {
	            exprs.push(t.conditionalExpression(node.test, consequent, alternate));
	          }
	        } else if (t.isBlockStatement(node)) {
	          var _res3 = convert(node.body);
	          if (_res3.bailed) {
	            return {
	              v: bail()
	            };
	          }
	          if (_res3.seq) {
	            exprs.push(_res3.seq);
	          }
	        } else {
	          return {
	            v: bail()
	          };
	        }
	      };

	      for (var i = 0; i < nodes.length; i++) {
	        var _ret = _loop(i);

	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }

	      var seq = void 0;
	      if (exprs.length === 1) {
	        seq = exprs[0];
	      } else if (exprs.length) {
	        seq = t.sequenceExpression(exprs);
	      }

	      /* eslint-disable no-self-assign */
	      seq = seq;
	      return { seq: seq };
	    }
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var evaluate = __webpack_require__(28);
	// Assuming all the static methods from below array are side effect free evaluation
	// except Math.random
	var VALID_CALLEES = ["String", "Number", "Math"];
	var INVALID_METHODS = ["random"];

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var BuiltInReplacer = function () {
	    function BuiltInReplacer(program) {
	      _classCallCheck(this, BuiltInReplacer);

	      this.program = program;
	      // map<expr_name, path[]>;
	      this.pathsToUpdate = new Map();
	    }

	    _createClass(BuiltInReplacer, [{
	      key: "run",
	      value: function run() {
	        this.collect();
	        this.replace();
	      }
	    }, {
	      key: "collect",
	      value: function collect() {
	        var context = this;

	        var collectVisitor = {
	          MemberExpression: function MemberExpression(path) {
	            if (path.parentPath.isCallExpression()) {
	              return;
	            }

	            if (!isComputed(path) && isBuiltin(path) && !path.getFunctionParent().isProgram()) {
	              var expName = memberToString(path.node);
	              addToMap(context.pathsToUpdate, expName, path);
	            }
	          },


	          CallExpression: {
	            exit: function exit(path) {
	              var callee = path.get("callee");
	              if (!callee.isMemberExpression()) {
	                return;
	              }

	              // computed property should be not optimized
	              // Math[max]() -> Math.max()
	              if (!isComputed(callee) && isBuiltin(callee)) {
	                var result = evaluate(path);
	                // deopt when we have side effecty evaluate-able arguments
	                // Math.max(foo(), 1) --> untouched
	                // Math.floor(1) --> 1
	                if (result.confident && hasPureArgs(path)) {
	                  path.replaceWith(t.valueToNode(result.value));
	                } else if (!callee.getFunctionParent().isProgram()) {
	                  var expName = memberToString(callee.node);
	                  addToMap(context.pathsToUpdate, expName, callee);
	                }
	              }
	            }
	          }
	        };

	        this.program.traverse(collectVisitor);
	      }
	    }, {
	      key: "replace",
	      value: function replace() {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = this.pathsToUpdate[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _ref2 = _step.value;

	            var _ref3 = _slicedToArray(_ref2, 2);

	            var expName = _ref3[0];
	            var paths = _ref3[1];

	            // transform only if there is more than 1 occurence
	            if (paths.length <= 1) {
	              continue;
	            }

	            var segmentsMap = getSegmentedSubPaths(paths);
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	              for (var _iterator2 = segmentsMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var _ref4 = _step2.value;

	                var _ref5 = _slicedToArray(_ref4, 2);

	                var parent = _ref5[0];
	                var subpaths = _ref5[1];

	                if (subpaths.length <= 1) {
	                  continue;
	                }
	                var uniqueIdentifier = parent.scope.generateUidIdentifier(expName);
	                var newNode = t.variableDeclaration("var", [t.variableDeclarator(uniqueIdentifier, subpaths[0].node)]);

	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                  for (var _iterator3 = subpaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var path = _step3.value;

	                    path.replaceWith(t.clone(uniqueIdentifier));
	                  }
	                  // hoist the created var to the top of the function scope
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

	                parent.get("body").unshiftContainer("body", newNode);
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
	    }]);

	    return BuiltInReplacer;
	  }();

	  return {
	    name: "minify-builtins",
	    visitor: {
	      Program: function Program(path) {
	        var builtInReplacer = new BuiltInReplacer(path);
	        builtInReplacer.run();
	      }
	    }
	  };

	  function memberToString(memberExpr) {
	    var object = memberExpr.object,
	        property = memberExpr.property;

	    var result = "";

	    if (t.isIdentifier(object)) result += object.name;
	    if (t.isMemberExpression(object)) result += memberToString(object);
	    if (t.isIdentifier(property)) result += property.name;

	    return result;
	  }

	  function isBuiltin(memberExpr) {
	    var _memberExpr$node = memberExpr.node,
	        object = _memberExpr$node.object,
	        property = _memberExpr$node.property;

	    if (t.isIdentifier(object) && t.isIdentifier(property) && VALID_CALLEES.indexOf(object.name) >= 0 && INVALID_METHODS.indexOf(property.name) < 0) {
	      return true;
	    }
	    return false;
	  }
	};

	function addToMap(map, key, value) {
	  if (!map.has(key)) {
	    map.set(key, []);
	  }
	  map.get(key).push(value);
	}

	// Creates a segmented map that contains the earliest common Ancestor
	// as the key and array of subpaths that are descendats of the LCA as value
	function getSegmentedSubPaths(paths) {
	  var segments = new Map();

	  // Get earliest Path in tree where paths intersect
	  paths[0].getDeepestCommonAncestorFrom(paths, function (lastCommon, index, ancestries) {
	    // found the LCA
	    if (!lastCommon.isProgram()) {
	      var fnParent = void 0;
	      if (lastCommon.isFunction() && lastCommon.get("body").isBlockStatement()) {
	        segments.set(lastCommon, paths);
	        return;
	      } else if (!(fnParent = lastCommon.getFunctionParent()).isProgram() && fnParent.get("body").isBlockStatement()) {
	        segments.set(fnParent, paths);
	        return;
	      }
	    }
	    // Deopt and construct segments otherwise

	    var _loop = function _loop(ancestor) {
	      var fnPath = getChildFuncion(ancestor);
	      if (fnPath === void 0) {
	        return "continue";
	      }
	      var validDescendants = paths.filter(function (p) {
	        return p.isDescendant(fnPath);
	      });
	      segments.set(fnPath, validDescendants);
	    };

	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	      for (var _iterator4 = ancestries[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var ancestor = _step4.value;

	        var _ret = _loop(ancestor);

	        if (_ret === "continue") continue;
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	          _iterator4.return();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }
	  });
	  return segments;
	}

	function getChildFuncion() {
	  var ancestors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var _iteratorNormalCompletion5 = true;
	  var _didIteratorError5 = false;
	  var _iteratorError5 = undefined;

	  try {
	    for (var _iterator5 = ancestors[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	      var path = _step5.value;

	      if (path.isFunction() && path.get("body").isBlockStatement()) {
	        return path;
	      }
	    }
	  } catch (err) {
	    _didIteratorError5 = true;
	    _iteratorError5 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion5 && _iterator5.return) {
	        _iterator5.return();
	      }
	    } finally {
	      if (_didIteratorError5) {
	        throw _iteratorError5;
	      }
	    }
	  }
	}

	function hasPureArgs(path) {
	  var args = path.get("arguments");
	  var _iteratorNormalCompletion6 = true;
	  var _didIteratorError6 = false;
	  var _iteratorError6 = undefined;

	  try {
	    for (var _iterator6 = args[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	      var arg = _step6.value;

	      if (!arg.isPure()) {
	        return false;
	      }
	    }
	  } catch (err) {
	    _didIteratorError6 = true;
	    _iteratorError6 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion6 && _iterator6.return) {
	        _iterator6.return();
	      }
	    } finally {
	      if (_didIteratorError6) {
	        throw _iteratorError6;
	      }
	    }
	  }

	  return true;
	}

	function isComputed(path) {
	  var node = path.node;

	  return node.computed;
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function evaluate(path) {
	  try {
	    return path.evaluate();
	  } catch (e) {
	    return {
	      confident: false,
	      error: e
	    };
	  }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var evaluate = __webpack_require__(3);

	var _require = __webpack_require__(7),
	    FALLBACK_HANDLER = _require.FALLBACK_HANDLER;

	function getName(member) {
	  if (member.computed) {
	    switch (member.property.type) {
	      case "StringLiteral":
	      case "NumericLiteral":
	        return member.property.value;
	      case "TemplateLiteral":
	        return;
	    }
	  } else {
	    return member.property.name;
	  }
	}

	function swap(path, member, handlers) {
	  var key = getName(member);
	  if (key === undefined) return;
	  var handler = handlers[key];
	  if (typeof handler !== "function" || !Object.hasOwnProperty.call(handlers, key)) {
	    if (typeof handlers[FALLBACK_HANDLER] === "function") {
	      handler = handlers[FALLBACK_HANDLER].bind(member.object, key);
	    } else {
	      return false;
	    }
	  }

	  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    args[_key - 3] = arguments[_key];
	  }

	  var replacement = handler.apply(member.object, args);
	  if (replacement) {
	    path.replaceWith(replacement);
	    return true;
	  }
	  return false;
	}

	module.exports = function (babel) {
	  var replacements = __webpack_require__(7)(babel);
	  var seen = Symbol("seen");
	  var t = babel.types,
	      traverse = babel.traverse;

	  return {
	    name: "minify-constant-folding",
	    visitor: {
	      // Evaluate string expressions that are next to each other
	      // but are not actually a binary expression.
	      // "a" + b + "c" + "d" -> "a" + b + "cd"
	      BinaryExpression: function BinaryExpression(path) {
	        var literal = void 0,
	            bin = void 0;
	        if (path.get("right").isStringLiteral()) {
	          literal = path.get("right");
	          if (path.get("left").isBinaryExpression({ operator: "+" })) {
	            bin = path.get("left");
	          } else {
	            return;
	          }
	        } else if (path.get("left").isStringLiteral()) {
	          literal = path.get("left");
	          if (path.get("right").isBinaryExpression({ operator: "+" })) {
	            bin = path.get("right");
	          } else {
	            return;
	          }
	        } else {
	          return;
	        }

	        var relevant = getLeaf(bin, literal.key);

	        if (!relevant) {
	          return;
	        }

	        var value = literal.key === "right" ? relevant.node.value + literal.node.value : literal.node.value + relevant.node.value;

	        relevant.replaceWith(t.stringLiteral(value));
	        path.replaceWith(bin.node);

	        function getLeaf(path, direction) {
	          if (path.isStringLiteral()) {
	            return path;
	          } else if (path.isBinaryExpression({ operator: "+" })) {
	            return getLeaf(path.get(direction), direction);
	          }
	        }
	      },


	      // TODO: look into evaluating binding too (could result in more code, but gzip?)
	      Expression: function Expression(path, _ref) {
	        var _ref$opts = _ref.opts;
	        _ref$opts = _ref$opts === undefined ? {} : _ref$opts;
	        var _ref$opts$tdz = _ref$opts.tdz,
	            tdz = _ref$opts$tdz === undefined ? false : _ref$opts$tdz;
	        var node = path.node;

	        if (node[seen]) {
	          return;
	        }

	        if (path.isLiteral()) {
	          return;
	        }

	        if (!path.isPure()) {
	          return;
	        }

	        if (traverse.hasType(node, path.scope, "Identifier", t.FUNCTION_TYPES)) {
	          return;
	        }

	        // -0 maybe compared via dividing and then checking against -Infinity
	        // Also -X will always be -X.
	        if (t.isUnaryExpression(node, { operator: "-" }) && t.isNumericLiteral(node.argument)) {
	          return;
	        }

	        // We have a transform that converts true/false to !0/!1
	        if (t.isUnaryExpression(node, { operator: "!" }) && t.isNumericLiteral(node.argument)) {
	          if (node.argument.value === 0 || node.argument.value === 1) {
	            return;
	          }
	        }

	        // void 0 is used for undefined.
	        if (t.isUnaryExpression(node, { operator: "void" }) && t.isNumericLiteral(node.argument, { value: 0 })) {
	          return;
	        }

	        var res = evaluate(path, { tdz: tdz });
	        if (res.confident) {
	          // Avoid fractions because they can be longer than the original expression.
	          // There is also issues with number percision?
	          if (typeof res.value === "number" && !Number.isInteger(res.value)) {
	            return;
	          }

	          // Preserve -0
	          if (typeof res.value === "number" && res.value === 0) {
	            if (1 / res.value === -Infinity) {
	              var _node2 = t.unaryExpression("-", t.numericLiteral(0), true);
	              _node2[seen] = true;
	              path.replaceWith(_node2);
	              return;
	            }
	          }

	          var _node = t.valueToNode(res.value);
	          _node[seen] = true;
	          path.replaceWith(_node);
	        }
	      },
	      CallExpression: function CallExpression(path) {
	        var node = path.node;
	        var member = node.callee;

	        if (t.isMemberExpression(member)) {
	          var helpers = replacements[member.object.type];
	          if (!helpers || !helpers.calls) return;
	          swap.apply(undefined, [path, member, helpers.calls].concat(_toConsumableArray(node.arguments)));
	        }
	      },
	      MemberExpression: function MemberExpression(path) {
	        var member = path.node;

	        var helpers = replacements[member.object.type];
	        if (!helpers || !helpers.members) return;
	        swap(path, member, helpers.members);
	      }
	    }
	  };
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var some = __webpack_require__(24);

	var _require = __webpack_require__(6),
	    markEvalScopes = _require.markEvalScopes,
	    hasEval = _require.hasEval;

	var removeUseStrict = __webpack_require__(31);
	var evaluate = __webpack_require__(3);

	function prevSiblings(path) {
	  var parentPath = path.parentPath;
	  var siblings = [];

	  var key = parentPath.key;

	  while ((path = parentPath.getSibling(--key)).type) {
	    siblings.push(path);
	  }
	  return siblings;
	}

	function forEachAncestor(path, callback) {
	  while (path = path.parentPath) {
	    callback(path);
	  }
	}

	module.exports = function (_ref) {
	  var t = _ref.types,
	      traverse = _ref.traverse;

	  var removeOrVoid = __webpack_require__(25)(t);
	  var shouldRevisit = Symbol("shouldRevisit");

	  // this is used for tracking fn params that can be removed
	  // as traversal takes place from left and
	  // unused params can be removed only on the right
	  var markForRemoval = Symbol("markForRemoval");

	  var main = {
	    // remove side effectless statement
	    ExpressionStatement: function ExpressionStatement(path) {
	      if (path.get("expression").isPure()) {
	        removeOrVoid(path);
	      }
	    },


	    Function: {
	      // Let's take all the vars in a function that are not in the top level scope and hoist them
	      // with the first var declaration in the top-level scope. This transform in itself may
	      // not yield much returns (or even can be marginally harmful to size). However it's great
	      // for taking away statements from blocks that can be only expressions which the `simplify`
	      // plugin can turn into other things (e.g. if => conditional).
	      exit: function exit(path) {
	        // This hurts gzip size.
	        if (!this.optimizeRawSize) {
	          return;
	        }

	        var node = path.node,
	            scope = path.scope;

	        var seen = new Set();
	        var declars = [];
	        var mutations = [];

	        var _loop = function _loop(name) {
	          var binding = scope.bindings[name];
	          if (!binding.path.isVariableDeclarator()) {
	            return "continue";
	          }

	          var declarPath = binding.path.parentPath;
	          if (seen.has(declarPath)) {
	            return "continue";
	          }
	          seen.add(declarPath);

	          if (declarPath.parentPath.isForInStatement()) {
	            return "continue";
	          }

	          if (declarPath.parentPath.parentPath.isFunction()) {
	            return "continue";
	          }

	          if (!declarPath.node || !declarPath.node.declarations) {
	            return "continue";
	          }

	          var assignmentSequence = [];

	          var _loop2 = function _loop2(declar) {
	            declars.push(declar);
	            if (declar.init) {
	              assignmentSequence.push(t.assignmentExpression("=", declar.id, declar.init));
	              mutations.push(function () {
	                declar.init = null;
	              });
	            }
	          };

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = declarPath.node.declarations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var declar = _step2.value;

	              _loop2(declar);
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

	          if (assignmentSequence.length) {
	            mutations.push(function () {
	              return declarPath.replaceWith(t.sequenceExpression(assignmentSequence));
	            });
	          } else {
	            mutations.push(function () {
	              return removeOrVoid(declarPath);
	            });
	          }
	        };

	        for (var name in scope.bindings) {
	          var _ret = _loop(name);

	          if (_ret === "continue") continue;
	        }

	        if (declars.length) {
	          mutations.forEach(function (f) {
	            return f();
	          });
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = node.body.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var statement = _step.value;

	              if (t.isVariableDeclaration(statement)) {
	                var _statement$declaratio;

	                (_statement$declaratio = statement.declarations).push.apply(_statement$declaratio, declars);
	                return;
	              }
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

	          var varDecl = t.variableDeclaration("var", declars);
	          node.body.body.unshift(varDecl);
	        }
	      }
	    },

	    // Remove bindings with no references.
	    Scope: {
	      exit: function exit(path) {
	        if (path.node[shouldRevisit]) {
	          delete path.node[shouldRevisit];
	          path.visit();
	        }
	      },
	      enter: function enter(path) {
	        var _this = this;

	        if (path.isProgram()) {
	          return;
	        }

	        if (hasEval(path.scope)) {
	          return;
	        }

	        var scope = path.scope;

	        // if the scope is created by a function, we obtain its
	        // parameter list

	        var canRemoveParams = path.isFunction() && path.node.kind !== "set";
	        var paramsList = canRemoveParams ? path.get("params") : [];

	        for (var i = paramsList.length - 1; i >= 0; i--) {
	          var param = paramsList[i];

	          if (param.isIdentifier()) {
	            var binding = scope.bindings[param.node.name];
	            if (!binding) continue;

	            if (binding.referenced) {
	              // when the first binding is referenced (right to left)
	              // exit without marking anything after this
	              break;
	            }

	            binding[markForRemoval] = true;
	            continue;
	          } else if (param.isAssignmentPattern()) {
	            var left = param.get("left");
	            var right = param.get("right");

	            if (left.isIdentifier() && right.isPure()) {
	              var _binding = scope.bindings[left.node.name];
	              if (_binding.referenced) {
	                // when the first binding is referenced (right to left)
	                // exit without marking anything after this
	                break;
	              }

	              _binding[markForRemoval] = true;
	              continue;
	            }
	          }

	          // other patterns - assignment, object have side-effects
	          // and cannot be safely removed
	          break;
	        }

	        var _loop3 = function _loop3(name) {
	          var binding = scope.bindings[name];

	          if (!binding.referenced && binding.kind !== "module") {
	            if (binding.kind === "param" && (_this.keepFnArgs || !binding[markForRemoval])) {
	              return "continue";
	            } else if (binding.path.isVariableDeclarator()) {
	              var declaration = binding.path.parentPath;
	              var maybeBlockParent = declaration.parentPath;
	              if (maybeBlockParent && maybeBlockParent.isForXStatement({
	                left: declaration.node
	              })) {
	                // Can't remove if in a for-in/for-of/for-await statement `for (var x in wat)`.
	                return "continue";
	              }
	            } else if (!scope.isPure(binding.path.node)) {
	              // TODO: AssignmentPattern are marked as impure and unused ids aren't removed yet
	              return "continue";
	            } else if (binding.path.isFunctionExpression() || binding.path.isClassExpression()) {
	              // `bar(function foo() {})` foo is not referenced but it's used.
	              return "continue";
	            }

	            var mutations = [];
	            var bail = false;
	            // Make sure none of the assignments value is used
	            binding.constantViolations.forEach(function (p) {
	              if (bail || p === binding.path) {
	                return;
	              }

	              if (!p.parentPath.isExpressionStatement()) {
	                bail = true;
	              }

	              if (p.isAssignmentExpression() && !p.get("right").isPure()) {
	                mutations.push(function () {
	                  return p.replaceWith(p.get("right"));
	                });
	              } else {
	                mutations.push(function () {
	                  return removeOrVoid(p);
	                });
	              }
	            });

	            if (bail) {
	              return "continue";
	            }

	            if (binding.path.isVariableDeclarator()) {
	              if (!binding.path.get("id").isIdentifier()) {
	                // deopt for object and array pattern
	                return "continue";
	              }

	              // if declarator has some impure init expression
	              // var x = foo();
	              // => foo();
	              if (binding.path.node.init && !scope.isPure(binding.path.node.init) && binding.path.parentPath.node.declarations) {
	                // binding path has more than one declarations
	                if (binding.path.parentPath.node.declarations.length !== 1) {
	                  return "continue";
	                }
	                binding.path.parentPath.replaceWith(binding.path.node.init);
	              } else {
	                updateReferences(binding.path, _this);
	                removeOrVoid(binding.path);
	              }
	            } else {
	              updateReferences(binding.path, _this);
	              removeOrVoid(binding.path);
	            }

	            mutations.forEach(function (f) {
	              return f();
	            });
	            scope.removeBinding(name);
	          } else if (binding.constant) {
	            if (binding.path.isFunctionDeclaration() || binding.path.isVariableDeclarator() && binding.path.get("init").isFunction()) {
	              var _ret4 = function () {
	                var fun = binding.path.isFunctionDeclaration() ? binding.path : binding.path.get("init");
	                var allInside = true;
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                  for (var _iterator3 = binding.referencePaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var ref = _step3.value;

	                    if (!ref.find(function (p) {
	                      return p.node === fun.node;
	                    })) {
	                      allInside = false;
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

	                if (allInside) {
	                  scope.removeBinding(name);
	                  updateReferences(binding.path, _this);
	                  removeOrVoid(binding.path);
	                  return {
	                    v: "continue"
	                  };
	                }
	              }();

	              if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
	            }

	            if (binding.references === 1 && binding.kind !== "param" && binding.kind !== "module" && binding.constant) {
	              var replacement = binding.path.node;
	              var replacementPath = binding.path;
	              var isReferencedBefore = false;

	              var refPath = binding.referencePaths[0];

	              if (t.isVariableDeclarator(replacement)) {
	                var _prevSiblings = prevSiblings(replacementPath);
	                // traverse ancestors of a reference checking if it's before declaration
	                forEachAncestor(refPath, function (ancestor) {
	                  if (_prevSiblings.indexOf(ancestor) > -1) {
	                    isReferencedBefore = true;
	                  }
	                });

	                // deopt if reference is in different scope than binding
	                // since we don't know if it's sync or async execution
	                // (i.e. whether value has been assigned to a reference or not)
	                if (isReferencedBefore && refPath.scope !== binding.scope) {
	                  return "continue";
	                }

	                // simulate hoisting by replacing value
	                // with undefined if declaration is after reference
	                replacement = isReferencedBefore ? t.unaryExpression("void", t.numericLiteral(0), true) : replacement.init;

	                // Bail out for ArrayPattern and ObjectPattern
	                // TODO: maybe a more intelligent approach instead of simply bailing out
	                if (!replacementPath.get("id").isIdentifier()) {
	                  return "continue";
	                }
	                replacementPath = replacementPath.get("init");
	              }

	              if (!replacement) {
	                return "continue";
	              }

	              if (!scope.isPure(replacement, true) && !isReferencedBefore) {
	                return "continue";
	              }

	              var _bail = false;

	              if (replacementPath.isIdentifier()) {
	                _bail = refPath.scope.getBinding(replacement.name) !== scope.getBinding(replacement.name);
	              } else {
	                replacementPath.traverse({
	                  Function: function Function(path) {
	                    path.skip();
	                  },
	                  ReferencedIdentifier: function ReferencedIdentifier(_ref2) {
	                    var node = _ref2.node;

	                    if (_bail) {
	                      return;
	                    }
	                    _bail = refPath.scope.getBinding(node.name) !== scope.getBinding(node.name);
	                  }
	                });
	              }

	              if (_bail) {
	                return "continue";
	              }

	              var parent = binding.path.parent;
	              if (t.isVariableDeclaration(parent)) {
	                parent = binding.path.parentPath.parent;
	              }

	              // 1. Make sure we share the parent with the node. In other words it's lexically defined
	              // and not in an if statement or otherwise.
	              // 2. If the replacement is an object then we have to make sure we are not in a loop or a function
	              // because otherwise we'll be inlining and doing a lot more allocation than we have to
	              // which would also could affect correctness in that they are not the same reference.
	              var mayLoop = false;
	              var sharesRoot = refPath.find(function (_ref3) {
	                var node = _ref3.node;

	                if (!mayLoop) {
	                  mayLoop = t.isWhileStatement(node) || t.isFor(node) || t.isFunction(node);
	                }
	                return node === parent;
	              });

	              // Anything that inherits from Object.
	              var isObj = function isObj(n) {
	                return t.isFunction(n) || t.isObjectExpression(n) || t.isArrayExpression(n);
	              };
	              var isReplacementObj = isObj(replacement) || some(replacement, isObj);

	              if (!sharesRoot || isReplacementObj && mayLoop) {
	                return "continue";
	              }

	              var replaced = replace(binding.referencePaths[0], {
	                binding: binding,
	                scope: scope,
	                replacement: replacement,
	                replacementPath: replacementPath
	              });

	              if (replaced) {
	                scope.removeBinding(name);
	                if (binding.path.node) {
	                  removeOrVoid(binding.path);
	                }
	              }
	            }
	          }
	        };

	        for (var name in scope.bindings) {
	          var _ret3 = _loop3(name);

	          if (_ret3 === "continue") continue;
	        } // end-for-of
	      }
	    },

	    // Remove unreachable code.
	    BlockStatement: function BlockStatement(path) {
	      var paths = path.get("body");

	      var purge = false;

	      for (var i = 0; i < paths.length; i++) {
	        var p = paths[i];

	        if (!purge && p.isCompletionStatement()) {
	          purge = true;
	          continue;
	        }

	        if (purge && !canExistAfterCompletion(p)) {
	          removeOrVoid(p);
	        }
	      }
	    },


	    // Double check unreachable code and remove return statements that
	    // have no semantic meaning
	    ReturnStatement: function ReturnStatement(path) {
	      var node = path.node;

	      if (!path.inList) {
	        return;
	      }

	      // Not last in its block? (See BlockStatement visitor)
	      if (path.container.length - 1 !== path.key && !canExistAfterCompletion(path.getSibling(path.key + 1)) && path.parentPath.isBlockStatement()) {
	        // This is probably a new oppurtinity by some other transform
	        // let's call the block visitor on this again before proceeding.
	        path.parentPath.pushContext(path.context);
	        path.parentPath.visit();
	        path.parentPath.popContext();

	        return;
	      }

	      if (node.argument) {
	        return;
	      }

	      var noNext = true;
	      var parentPath = path.parentPath;
	      while (parentPath && !parentPath.isFunction() && noNext) {
	        // https://github.com/babel/minify/issues/265
	        if (hasLoopParent(parentPath)) {
	          noNext = false;
	          break;
	        }

	        var nextPath = parentPath.getSibling(parentPath.key + 1);
	        if (nextPath.node) {
	          if (nextPath.isReturnStatement()) {
	            nextPath.pushContext(path.context);
	            nextPath.visit();
	            nextPath.popContext();
	            if (parentPath.getSibling(parentPath.key + 1).node) {
	              noNext = false;
	              break;
	            }
	          } else {
	            noNext = false;
	            break;
	          }
	        }

	        parentPath = parentPath.parentPath;
	      }

	      if (noNext) {
	        removeOrVoid(path);
	      }
	    },
	    ConditionalExpression: function ConditionalExpression(path) {
	      var node = path.node;

	      var evaluateTest = path.get("test").evaluateTruthy();
	      if (evaluateTest === true) {
	        path.replaceWith(node.consequent);
	      } else if (evaluateTest === false) {
	        path.replaceWith(node.alternate);
	      }
	    },


	    SwitchStatement: {
	      exit: function exit(path) {
	        var evaluated = evaluate(path.get("discriminant"), { tdz: this.tdz });

	        if (!evaluated.confident) return;

	        var discriminant = evaluated.value;
	        var cases = path.get("cases");

	        var matchingCaseIndex = -1;
	        var defaultCaseIndex = -1;

	        for (var i = 0; i < cases.length; i++) {
	          var test = cases[i].get("test");

	          // handle default case
	          if (test.node === null) {
	            defaultCaseIndex = i;
	            continue;
	          }

	          var testResult = evaluate(test, { tdz: this.tdz });

	          // if we are not able to deternine a test during
	          // compile time, we terminate immediately
	          if (!testResult.confident) return;

	          if (testResult.value === discriminant) {
	            matchingCaseIndex = i;
	            break;
	          }
	        }

	        var result = void 0;

	        if (matchingCaseIndex === -1) {
	          if (defaultCaseIndex === -1) {
	            path.skip();
	            path.replaceWithMultiple(extractVars(path));
	            return;
	          } else {
	            result = getStatementsUntilBreak(defaultCaseIndex);
	          }
	        } else {
	          result = getStatementsUntilBreak(matchingCaseIndex);
	        }

	        if (result.bail) return;

	        // we extract vars from the entire switch statement
	        // and there will be duplicates which
	        // will be again removed by DCE
	        replaceSwitch([].concat(_toConsumableArray(extractVars(path)), _toConsumableArray(result.statements)));

	        function getStatementsUntilBreak(start) {
	          var result = {
	            bail: false,
	            statements: []
	          };

	          for (var _i = start; _i < cases.length; _i++) {
	            var consequent = cases[_i].get("consequent");

	            for (var j = 0; j < consequent.length; j++) {
	              var _isBreaking = isBreaking(consequent[j], path);
	              if (_isBreaking.bail) {
	                result.bail = true;
	                return result;
	              }
	              if (_isBreaking.break) {
	                // compute no more
	                // exit out of the loop
	                return result;
	              } else {
	                result.statements.push(consequent[j].node);
	              }
	            }
	          }

	          return result;
	        }

	        function replaceSwitch(statements) {
	          var isBlockRequired = false;

	          for (var _i2 = 0; _i2 < statements.length; _i2++) {
	            if (t.isVariableDeclaration(statements[_i2], { kind: "let" })) {
	              isBlockRequired = true;
	              break;
	            }
	            if (t.isVariableDeclaration(statements[_i2], { kind: "const" })) {
	              isBlockRequired = true;
	              break;
	            }
	          }

	          if (isBlockRequired) {
	            path.replaceWith(t.BlockStatement(statements));
	          } else {
	            path.replaceWithMultiple(statements);
	          }
	        }
	      }
	    },

	    WhileStatement: function WhileStatement(path) {
	      var test = path.get("test");
	      var result = evaluate(test, { tdz: this.tdz });
	      if (result.confident && test.isPure() && !result.value) {
	        path.remove();
	      }
	    },
	    ForStatement: function ForStatement(path) {
	      var test = path.get("test");
	      if (!test.isPure()) return;

	      var result = evaluate(test, { tdz: this.tdz });
	      if (result.confident) {
	        if (result.value) {
	          test.remove();
	        } else {
	          path.remove();
	        }
	      }
	    },
	    DoWhileStatement: function DoWhileStatement(path) {
	      var test = path.get("test");
	      var result = evaluate(test, { tdz: this.tdz });
	      if (result.confident && test.isPure() && !result.value) {
	        var body = path.get("body");

	        if (body.isBlockStatement()) {
	          var stmts = body.get("body");
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = stmts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var stmt = _step4.value;

	              var _isBreaking = isBreaking(stmt, path);
	              if (_isBreaking.bail || _isBreaking.break) return;
	              var _isContinuing = isContinuing(stmt, path);
	              if (_isContinuing.bail || isContinuing.continue) return;
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }

	          path.replaceWith(body.node);
	        } else if (body.isBreakStatement()) {
	          var _isBreaking2 = isBreaking(body, path);
	          if (_isBreaking2.bail) return;
	          if (_isBreaking2.break) path.remove();
	        } else if (body.isContinueStatement()) {
	          return;
	        } else {
	          path.replaceWith(body.node);
	        }
	      }
	    },


	    // Join assignment and definition when in sequence.
	    // var x; x = 1; -> var x = 1;
	    AssignmentExpression: function AssignmentExpression(path) {
	      if (!path.get("left").isIdentifier() || !path.parentPath.isExpressionStatement()) {
	        return;
	      }

	      var prev = path.parentPath.getSibling(path.parentPath.key - 1);
	      if (!(prev && prev.isVariableDeclaration())) {
	        return;
	      }

	      var declars = prev.node.declarations;
	      if (declars.length !== 1 || declars[0].init || declars[0].id.name !== path.get("left").node.name) {
	        return;
	      }
	      declars[0].init = path.node.right;
	      removeOrVoid(path);
	    },


	    // Remove named function expression name. While this is dangerous as it changes
	    // `function.name` all minifiers do it and hence became a standard.
	    FunctionExpression: function FunctionExpression(path) {
	      if (!this.keepFnName) {
	        removeUnreferencedId(path);
	      }
	    },


	    // remove class names
	    ClassExpression: function ClassExpression(path) {
	      if (!this.keepClassName) {
	        removeUnreferencedId(path);
	      }
	    },


	    // Put the `var` in the left if feasible.
	    ForInStatement: function ForInStatement(path) {
	      var left = path.get("left");
	      if (!left.isIdentifier()) {
	        return;
	      }

	      var binding = path.scope.getBinding(left.node.name);
	      if (!binding) {
	        return;
	      }

	      if (binding.scope.getFunctionParent() !== path.scope.getFunctionParent()) {
	        return;
	      }

	      if (!binding.path.isVariableDeclarator()) {
	        return;
	      }

	      if (binding.path.parentPath.parentPath.isForInStatement({
	        left: binding.path.parent
	      })) {
	        return;
	      }

	      // If it has company then it's probably more efficient to keep.
	      if (binding.path.parent.declarations.length > 1) {
	        return;
	      }

	      // meh
	      if (binding.path.node.init) {
	        return;
	      }

	      removeOrVoid(binding.path);
	      path.node.left = t.variableDeclaration("var", [t.variableDeclarator(left.node)]);
	      binding.path = path.get("left").get("declarations")[0];
	    }
	  };

	  return {
	    name: "minify-dead-code-elimination",
	    visitor: {
	      Function: {
	        exit: function exit(path) {
	          /**
	           * Use exit handler to traverse in a dfs post-order fashion
	           * to remove use strict
	           */
	          var body = path.get("body");
	          if (body.isBlockStatement()) {
	            removeUseStrict(body);
	          }
	        }
	      },
	      IfStatement: {
	        exit: function exit(path, _ref4) {
	          var _ref4$opts = _ref4.opts;
	          _ref4$opts = _ref4$opts === undefined ? {} : _ref4$opts;
	          var _ref4$opts$tdz = _ref4$opts.tdz,
	              tdz = _ref4$opts$tdz === undefined ? false : _ref4$opts$tdz;

	          var consequent = path.get("consequent");
	          var alternate = path.get("alternate");
	          var test = path.get("test");

	          var evalResult = evaluate(test, { tdz: tdz });
	          var isPure = test.isPure();

	          var replacements = [];
	          if (evalResult.confident && !isPure && test.isSequenceExpression()) {
	            replacements.push(t.expressionStatement(extractSequenceImpure(test)));
	          }

	          // we can check if a test will be truthy 100% and if so then we can inline
	          // the consequent and completely ignore the alternate
	          //
	          //   if (true) { foo; } -> { foo; }
	          //   if ("foo") { foo; } -> { foo; }
	          //
	          if (evalResult.confident && evalResult.value) {
	            path.replaceWithMultiple([].concat(replacements, _toConsumableArray(toStatements(consequent)), _toConsumableArray(extractVars(alternate))));
	            return;
	          }

	          // we can check if a test will be falsy 100% and if so we can inline the
	          // alternate if there is one and completely remove the consequent
	          //
	          //   if ("") { bar; } else { foo; } -> { foo; }
	          //   if ("") { bar; } ->
	          //
	          if (evalResult.confident && !evalResult.value) {
	            if (alternate.node) {
	              path.replaceWithMultiple([].concat(replacements, _toConsumableArray(toStatements(alternate)), _toConsumableArray(extractVars(consequent))));
	              return;
	            } else {
	              path.replaceWithMultiple([].concat(replacements, _toConsumableArray(extractVars(consequent))));
	            }
	          }

	          // remove alternate blocks that are empty
	          //
	          //   if (foo) { foo; } else {} -> if (foo) { foo; }
	          //
	          if (alternate.isBlockStatement() && !alternate.node.body.length) {
	            alternate.remove();
	            // For if-statements babel-traverse replaces with an empty block
	            path.node.alternate = null;
	          }

	          // if the consequent block is empty turn alternate blocks into a consequent
	          // and flip the test
	          //
	          //   if (foo) {} else { bar; } -> if (!foo) { bar; }
	          //
	          if (consequent.isBlockStatement() && !consequent.node.body.length && alternate.isBlockStatement() && alternate.node.body.length) {
	            consequent.replaceWith(alternate.node);
	            alternate.remove();
	            // For if-statements babel-traverse replaces with an empty block
	            path.node.alternate = null;
	            test.replaceWith(t.unaryExpression("!", test.node, true));
	          }
	        }
	      },

	      EmptyStatement: function EmptyStatement(path) {
	        if (path.parentPath.isBlockStatement() || path.parentPath.isProgram()) {
	          path.remove();
	        }
	      },


	      Program: {
	        exit: function exit(path) {
	          var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	              _ref5$opts = _ref5.opts;

	          _ref5$opts = _ref5$opts === undefined ? {} : _ref5$opts;
	          var _ref5$opts$optimizeRa = _ref5$opts.optimizeRawSize,
	              optimizeRawSize = _ref5$opts$optimizeRa === undefined ? false : _ref5$opts$optimizeRa,
	              _ref5$opts$keepFnName = _ref5$opts.keepFnName,
	              keepFnName = _ref5$opts$keepFnName === undefined ? false : _ref5$opts$keepFnName,
	              _ref5$opts$keepClassN = _ref5$opts.keepClassName,
	              keepClassName = _ref5$opts$keepClassN === undefined ? false : _ref5$opts$keepClassN,
	              _ref5$opts$keepFnArgs = _ref5$opts.keepFnArgs,
	              keepFnArgs = _ref5$opts$keepFnArgs === undefined ? false : _ref5$opts$keepFnArgs,
	              _ref5$opts$tdz = _ref5$opts.tdz,
	              tdz = _ref5$opts$tdz === undefined ? false : _ref5$opts$tdz;

	          (traverse.clearCache || traverse.cache.clear)();
	          path.scope.crawl();

	          markEvalScopes(path);

	          // We need to run this plugin in isolation.
	          path.traverse(main, {
	            functionToBindings: new Map(),
	            optimizeRawSize: optimizeRawSize,
	            keepFnName: keepFnName,
	            keepClassName: keepClassName,
	            keepFnArgs: keepFnArgs,
	            tdz: tdz
	          });
	        }
	      }
	    }
	  };

	  function toStatements(path) {
	    var node = path.node;

	    if (path.isBlockStatement()) {
	      var hasBlockScoped = false;

	      for (var i = 0; i < node.body.length; i++) {
	        var bodyNode = node.body[i];
	        if (t.isBlockScoped(bodyNode)) {
	          hasBlockScoped = true;
	        }
	      }

	      if (!hasBlockScoped) {
	        return node.body;
	      }
	    }
	    return [node];
	  }

	  // Extracts vars from a path
	  // Useful for removing blocks or paths that can contain
	  // variable declarations inside them
	  // Note:
	  // drops are inits
	  // extractVars({ var x = 5, y = x }) => var x, y;
	  function extractVars(path) {
	    var declarators = [];

	    if (path.isVariableDeclaration({ kind: "var" })) {
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = path.node.declarations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var decl = _step5.value;

	          declarators.push(t.variableDeclarator(decl.id));
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	    } else {
	      path.traverse({
	        VariableDeclaration: function VariableDeclaration(varPath) {
	          if (!varPath.isVariableDeclaration({ kind: "var" })) return;
	          if (!isSameFunctionScope(varPath, path)) return;

	          var _iteratorNormalCompletion6 = true;
	          var _didIteratorError6 = false;
	          var _iteratorError6 = undefined;

	          try {
	            for (var _iterator6 = varPath.node.declarations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	              var _decl = _step6.value;

	              declarators.push(t.variableDeclarator(_decl.id));
	            }
	          } catch (err) {
	            _didIteratorError6 = true;
	            _iteratorError6 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                _iterator6.return();
	              }
	            } finally {
	              if (_didIteratorError6) {
	                throw _iteratorError6;
	              }
	            }
	          }
	        }
	      });
	    }

	    if (declarators.length <= 0) return [];

	    return [t.variableDeclaration("var", declarators)];
	  }

	  function replace(path, options) {
	    var replacement = options.replacement,
	        replacementPath = options.replacementPath,
	        scope = options.scope,
	        binding = options.binding;

	    // Same name, different binding.

	    if (scope.getBinding(path.node.name) !== binding) {
	      return;
	    }

	    // We don't want to move code around to different scopes because:
	    // 1. Original bindings that is referenced could be shadowed
	    // 2. Moving defintions to potentially hot code is bad
	    if (scope !== path.scope) {
	      if (t.isClass(replacement) || t.isFunction(replacement)) {
	        return;
	      }

	      var bail = false;
	      traverse(replacement, {
	        Function: function Function(path) {
	          if (bail) {
	            return;
	          }
	          bail = true;
	          path.stop();
	        }
	      }, scope);

	      if (bail) {
	        return;
	      }
	    }

	    // Avoid recursion.
	    if (path.find(function (_ref6) {
	      var node = _ref6.node;
	      return node === replacement;
	    })) {
	      return;
	    }

	    // https://github.com/babel/minify/issues/611
	    // this is valid only for FunctionDeclaration where we convert
	    // function declaration to expression in the next step
	    if (replacementPath.isFunctionDeclaration()) {
	      var fnName = replacementPath.get("id").node.name;
	      for (var name in replacementPath.scope.bindings) {
	        if (name === fnName) {
	          return;
	        }
	      }
	    }

	    // https://github.com/babel/minify/issues/130
	    if (!t.isExpression(replacement)) {
	      t.toExpression(replacement);
	    }

	    // We don't remove fn name here, we let the FnExpr & ClassExpr visitors
	    // check its references and remove unreferenced ones
	    // if (t.isFunction(replacement)) {
	    //   replacement.id = null;
	    // }

	    path.replaceWith(replacement);
	    return true;
	  }

	  function updateReferences(fnToDeletePath) {
	    if (!fnToDeletePath.isFunction()) {
	      return;
	    }

	    fnToDeletePath.traverse({
	      ReferencedIdentifier: function ReferencedIdentifier(path) {
	        var node = path.node,
	            scope = path.scope;

	        var binding = scope.getBinding(node.name);

	        if (!binding || !binding.path.isFunction() || binding.scope === scope || !binding.constant) {
	          return;
	        }

	        var index = binding.referencePaths.indexOf(path);
	        if (index === -1) {
	          return;
	        }
	        binding.references--;
	        binding.referencePaths.splice(index, 1);
	        if (binding.references === 0) {
	          binding.referenced = false;
	        }

	        if (binding.references <= 1 && binding.scope.path.node) {
	          binding.scope.path.node[shouldRevisit] = true;
	        }
	      }
	    });
	  }

	  function removeUnreferencedId(path) {
	    var id = path.get("id").node;
	    if (!id) {
	      return;
	    }

	    var node = path.node,
	        scope = path.scope;

	    var binding = scope.getBinding(id.name);

	    // Check if shadowed or is not referenced.
	    if (binding && (binding.path.node !== node || !binding.referenced)) {
	      node.id = null;
	    }
	  }

	  // path1 -> path2
	  // is path1 an ancestor of path2
	  function isAncestor(path1, path2) {
	    return !!path2.findParent(function (parent) {
	      return parent === path1;
	    });
	  }

	  function isSameFunctionScope(path1, path2) {
	    return path1.scope.getFunctionParent() === path2.scope.getFunctionParent();
	  }

	  function isBreaking(stmt, path) {
	    return isControlTransfer(stmt, path, "break");
	  }

	  function isContinuing(stmt, path) {
	    return isControlTransfer(stmt, path, "continue");
	  }

	  // tells if a "stmt" is a break/continue statement
	  function isControlTransfer(stmt, path) {
	    var _result;

	    var control = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break";
	    var _break$continue = {
	      break: "BreakStatement",
	      continue: "ContinueStatement"
	    },
	        type = _break$continue[control];

	    if (!type) {
	      throw new Error("Can only handle break and continue statements");
	    }
	    var checker = "is" + type;

	    if (stmt[checker]()) {
	      return _isControlTransfer(stmt, path);
	    }

	    var isTransferred = false;
	    var result = (_result = {}, _defineProperty(_result, control, false), _defineProperty(_result, "bail", false), _result);

	    stmt.traverse(_defineProperty({}, type, function (cPath) {
	      // if we already detected a break/continue statement,
	      if (isTransferred) return;

	      result = _isControlTransfer(cPath, path);

	      if (result.bail || result[control]) {
	        isTransferred = true;
	      }
	    }));

	    return result;

	    function _isControlTransfer(cPath, path) {
	      var _ref8;

	      var label = cPath.get("label");

	      if (label.node !== null) {
	        // labels are fn scoped and not accessible by inner functions
	        // path is the switch statement
	        if (!isSameFunctionScope(path, cPath)) {
	          // we don't have to worry about this break statement
	          return {
	            break: false,
	            bail: false
	          };
	        }

	        // here we handle the break labels
	        // if they are outside switch, we bail out
	        // if they are within the case, we keep them
	        var labelPath = void 0;
	        if (path.scope.getLabel) {
	          labelPath = getLabel(label.node.name, path);
	        } else {
	          labelPath = path.scope.getBinding(label.node.name).path;
	        }
	        var _isAncestor = isAncestor(labelPath, path);

	        return _defineProperty({
	          bail: _isAncestor
	        }, control, _isAncestor);
	      }

	      // set the flag that it is indeed breaking
	      var isCTransfer = true;

	      // this flag is to capture
	      // switch(0) { case 0: while(1) if (x) break; }
	      var possibleRunTimeControlTransfer = false;

	      // and compute if it's breaking the correct thing
	      var parent = cPath.parentPath;

	      while (parent !== stmt.parentPath) {
	        // loops and nested switch cases
	        if (parent.isLoop() || parent.isSwitchCase()) {
	          // invalidate all the possible runtime breaks captured
	          // while (1) { if (x) break; }
	          possibleRunTimeControlTransfer = false;

	          // and set that it's not breaking our switch statement
	          isCTransfer = false;
	          break;
	        }
	        //
	        // this is a special case and depends on
	        // the fact that SwitchStatement is handled in the
	        // exit hook of the traverse
	        //
	        // switch (0) {
	        //   case 0: if (x) break;
	        // }
	        //
	        // here `x` is runtime only.
	        // in this case, we need to bail out. So we depend on exit hook
	        // of switch so that, it would have visited the IfStatement first
	        // before the SwitchStatement and would have removed the
	        // IfStatement if it was a compile time determined
	        //
	        if (parent.isIfStatement()) {
	          possibleRunTimeControlTransfer = true;
	        }
	        parent = parent.parentPath;
	      }

	      return _ref8 = {}, _defineProperty(_ref8, control, possibleRunTimeControlTransfer || isCTransfer), _defineProperty(_ref8, "bail", possibleRunTimeControlTransfer), _ref8;
	    }
	  }

	  // things that are hoisted
	  function canExistAfterCompletion(path) {
	    return path.isFunctionDeclaration() || path.isVariableDeclaration({ kind: "var" });
	  }

	  function getLabel(name, _path) {
	    var label = void 0,
	        path = _path;
	    do {
	      label = path.scope.getLabel(name);
	      if (label) {
	        return label;
	      }
	    } while (path = path.parentPath);
	    return null;
	  }

	  function hasLoopParent(path) {
	    var parent = path;
	    do {
	      if (parent.isLoop()) {
	        return true;
	      }
	    } while (parent = parent.parentPath);
	    return false;
	  }

	  function extractSequenceImpure(seq) {
	    var expressions = seq.get("expressions");
	    var result = [];
	    for (var i = 0; i < expressions.length; i++) {
	      if (!expressions[i].isPure()) {
	        result.push(expressions[i].node);
	      }
	    }
	    return t.sequenceExpression(result);
	  }
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = removeUseStrict;

	var newIssueUrl = "https://github.com/babel/minify/issues/new";

	var useStrict = "use strict";

	/**
	 * Remove redundant use strict
	 * If the parent has a "use strict" directive, it is not required in
	 * the children
	 *
	 * @param {NodePath} block BlockStatement
	 */
	function removeUseStrict(block) {
	  if (!block.isBlockStatement()) {
	    throw new Error("Received " + block.type + ". Expected BlockStatement. " + ("Please report at " + newIssueUrl));
	  }

	  var useStricts = getUseStrictDirectives(block);

	  // early exit
	  if (useStricts.length < 1) return;

	  // only keep the first use strict
	  if (useStricts.length > 1) {
	    for (var i = 1; i < useStricts.length; i++) {
	      useStricts[i].remove();
	    }
	  }

	  // check if parent has an use strict
	  if (hasStrictParent(block)) {
	    useStricts[0].remove();
	  }
	}

	function hasStrictParent(path) {
	  return path.findParent(function (parent) {
	    return parent.isBlockStatement() && isStrict(parent);
	  });
	}

	function isStrict(block) {
	  return getUseStrictDirectives(block).length > 0;
	}

	function getUseStrictDirectives(block) {
	  var dir = block.get("directives");
	  return Array.isArray(dir) ? dir.filter(function (directive) {
	    return directive.node.value.value === useStrict;
	  }) : [];
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var removeOrVoid = __webpack_require__(33)(t);

	  var visitor = {
	    // Remove the call if it stands on it's own.
	    ExpressionStatement: function ExpressionStatement(path) {
	      var node = path.node;

	      if (isEmptyFunction(node.expression)) {
	        removeOrVoid(path);
	      }
	    },

	    // If we're not in an expression statement we can't remove
	    // the call.
	    CallExpression: function CallExpression(path) {
	      var node = path.node;

	      if (isEmptyFunction(node)) {
	        path.replaceWith(t.booleanLiteral(false));
	      }
	    }
	  };

	  return {
	    name: "minify-empty-function",
	    visitor: {
	      // Unfortunately we have to do it in a seperate pass to ensure that
	      // the expression statements are removed otherwise the calls may
	      // end in conditionals or sequence expressions.
	      Program: function Program(path) {
	        path.traverse(visitor, {});
	      }
	    }
	  };

	  function isEmptyFunction(node) {
	    return t.isCallExpression(node) && t.isIdentifier(node.callee, { name: "emptyFunction" });
	  }
	};

/***/ }),
/* 33 */
25,
/* 34 */
[89, 5],
/* 35 */
[90, 4],
/* 36 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var INFINITY = t.binaryExpression("/", t.numericLiteral(1), t.numericLiteral(0));
	  return {
	    name: "minify-infinity",
	    visitor: {
	      // Infinity -> 1 / 0
	      Identifier: function Identifier(path) {
	        if (path.node.name !== "Infinity") {
	          return;
	        }

	        // It's a referenced identifier
	        if (path.scope.getBinding("Infinity")) {
	          return;
	        }

	        if (path.parentPath.isObjectProperty({ key: path.node })) {
	          return;
	        }

	        if (path.parentPath.isMemberExpression()) {
	          return;
	        }

	        if (path.isLVal() && !path.parentPath.isExpressionStatement()) {
	          return;
	        }

	        path.replaceWith(INFINITY);
	      }
	    }
	  };
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function bfsTraverseCreator(_ref) {
	  var t = _ref.types,
	      traverse = _ref.traverse;

	  function getFields(path) {
	    return t.VISITOR_KEYS[path.type];
	  }

	  return function bfsTraverse(path, _visitor) {
	    if (!path.node) {
	      throw new Error("Not a valid path");
	    }
	    var visitor = traverse.explode(_visitor);

	    var queue = [path];
	    var current = void 0;

	    while (queue.length > 0) {
	      current = queue.shift();

	      // call
	      if (visitor && visitor[current.type] && Array.isArray(visitor[current.type].enter)) {
	        var fns = visitor[current.type].enter;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var fn = _step.value;

	            if (typeof fn === "function") fn(current);
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

	      var fields = getFields(current);

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var field = _step2.value;

	          var child = current.get(field);

	          if (Array.isArray(child)) {
	            // visit container left to right
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	              for (var _iterator3 = child[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var c = _step3.value;

	                if (c.node) queue.push(c);
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
	          } else {
	            if (child.node) queue.push(child);
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
	    }
	  };
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var CHARSET = ("abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_").split("");

	module.exports = function () {
	  function Charset(shouldConsider) {
	    var _this = this;

	    _classCallCheck(this, Charset);

	    this.shouldConsider = shouldConsider;
	    this.chars = CHARSET.slice();
	    this.frequency = {};
	    this.chars.forEach(function (c) {
	      _this.frequency[c] = 0;
	    });
	    this.finalized = false;
	  }

	  _createClass(Charset, [{
	    key: "consider",
	    value: function consider(str) {
	      var _this2 = this;

	      if (!this.shouldConsider) {
	        return;
	      }

	      str.split("").forEach(function (c) {
	        if (_this2.frequency[c] != null) {
	          _this2.frequency[c]++;
	        }
	      });
	    }
	  }, {
	    key: "sort",
	    value: function sort() {
	      var _this3 = this;

	      if (this.shouldConsider) {
	        this.chars = this.chars.sort(function (a, b) {
	          return _this3.frequency[b] - _this3.frequency[a];
	        });
	      }

	      this.finalized = true;
	    }
	  }, {
	    key: "getIdentifier",
	    value: function getIdentifier(num) {
	      if (!this.finalized) {
	        throw new Error("Should sort first");
	      }

	      var ret = "";
	      num++;
	      do {
	        num--;
	        ret += this.chars[num % this.chars.length];
	        num = Math.floor(num / this.chars.length);
	      } while (num > 0);
	      return ret;
	    }
	  }]);

	  return Charset;
	}();

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	// Set that counts
	module.exports = function () {
	  function CountedSet() {
	    _classCallCheck(this, CountedSet);

	    // because you can't simply extend Builtins yet
	    this.map = new Map();
	  }

	  _createClass(CountedSet, [{
	    key: "keys",
	    value: function keys() {
	      return [].concat(_toConsumableArray(this.map.keys()));
	    }
	  }, {
	    key: "has",
	    value: function has(value) {
	      return this.map.has(value);
	    }
	  }, {
	    key: "add",
	    value: function add(value) {
	      if (!this.has(value)) {
	        this.map.set(value, 0);
	      }
	      this.map.set(value, this.map.get(value) + 1);
	    }
	  }, {
	    key: "delete",
	    value: function _delete(value) {
	      if (!this.has(value)) return;
	      var count = this.map.get(value);
	      if (count <= 1) {
	        this.map.delete(value);
	      } else {
	        this.map.set(value, count - 1);
	      }
	    }
	  }]);

	  return CountedSet;
	}();

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";

	// this fixes a bug where converting let to var
	// doesn't change the binding's scope to function scope
	// https://github.com/babel/babel/issues/4818

	module.exports = function (mangler) {
	  mangler.program.traverse({
	    VariableDeclaration: function VariableDeclaration(path) {
	      if (path.node.kind !== "var") {
	        return;
	      }
	      var fnScope = path.scope.getFunctionParent();
	      var bindingIds = path.getOuterBindingIdentifierPaths();

	      for (var name in bindingIds) {
	        var binding = path.scope.getBinding(name);

	        // var isn't hoisted to fnScope
	        if (binding.scope !== fnScope) {
	          var existingBinding = fnScope.bindings[name];
	          // make sure we are clear that the fnScope doesn't already have
	          // an existing binding
	          if (!existingBinding) {
	            // move binding to the function scope

	            // update our scopeTracker first before
	            // we mutate the scope
	            mangler.scopeTracker.moveBinding(binding, fnScope);

	            fnScope.bindings[name] = binding;
	            binding.scope = fnScope;
	            delete binding.scope.bindings[name];
	          } else {
	            // we need a new binding that's valid in both the scopes
	            // binding.scope and fnScope
	            var newName = fnScope.generateUid(binding.scope.generateUid(name));

	            // rename binding in the original scope
	            mangler.rename(binding.scope, binding, name, newName);

	            // move binding to fnScope as newName

	            // update our scopeTracker first before
	            // we mutate the scope
	            mangler.scopeTracker.moveBinding(binding, fnScope);

	            fnScope.bindings[newName] = binding;
	            binding.scope = fnScope;
	            delete binding.scope.bindings[newName];
	          }
	        }
	      }
	    }
	  });
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var Charset = __webpack_require__(38);
	var ScopeTracker = __webpack_require__(42);
	var isLabelIdentifier = __webpack_require__(8);
	var bfsTraverseCreator = __webpack_require__(37);
	var fixupVarScoping = __webpack_require__(40);

	var _require = __webpack_require__(6),
	    markEvalScopes = _require.markEvalScopes,
	    isEvalScopesMarked = _require.isMarked,
	    hasEval = _require.hasEval;

	var newIssueUrl = "https://github.com/babel/minify/issues/new";

	module.exports = function (babel) {
	  var t = babel.types,
	      traverse = babel.traverse;

	  var bfsTraverse = bfsTraverseCreator(babel);
	  var hop = Object.prototype.hasOwnProperty;

	  var Mangler = function () {
	    function Mangler(charset, program) {
	      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	          _ref$blacklist = _ref.blacklist,
	          blacklist = _ref$blacklist === undefined ? {} : _ref$blacklist,
	          _ref$keepFnName = _ref.keepFnName,
	          keepFnName = _ref$keepFnName === undefined ? false : _ref$keepFnName,
	          _ref$keepClassName = _ref.keepClassName,
	          keepClassName = _ref$keepClassName === undefined ? false : _ref$keepClassName,
	          _ref$eval = _ref.eval,
	          _eval = _ref$eval === undefined ? false : _ref$eval,
	          _ref$topLevel = _ref.topLevel,
	          topLevel = _ref$topLevel === undefined ? false : _ref$topLevel;

	      _classCallCheck(this, Mangler);

	      this.charset = charset;
	      this.program = program;

	      // user passed options
	      this.blacklist = toObject(blacklist);
	      this.keepFnName = keepFnName;
	      this.keepClassName = keepClassName;
	      this.topLevel = topLevel;
	      this.eval = _eval;

	      // tracking
	      this.visitedScopes = new Set();
	      this.scopeTracker = new ScopeTracker();
	      this.renamedNodes = new Set();
	    }

	    /**
	     * Run the mangler
	     */

	    _createClass(Mangler, [{
	      key: "run",
	      value: function run() {
	        this.crawlScope();
	        this.collect();
	        this.fixup();
	        this.charset.sort();
	        this.mangle();
	      }

	      /**
	       * Tells if a variable name is blacklisted
	       * @param {String} name
	       */

	    }, {
	      key: "isBlacklist",
	      value: function isBlacklist(name) {
	        return hop.call(this.blacklist, name) && this.blacklist[name];
	      }

	      /**
	       * Clears traverse cache and recrawls the AST
	       *
	       * to recompute the bindings, references, other scope information
	       * and paths because the other transformations in the same pipeline
	       * (other plugins and presets) changes the AST and does NOT update
	       * the scope objects
	       */

	    }, {
	      key: "crawlScope",
	      value: function crawlScope() {
	        (traverse.clearCache || traverse.cache.clear)();
	        this.program.scope.crawl();
	      }

	      /**
	       * Re-crawling comes with a side-effect that let->var conversion
	       * reverts the update of the binding information (block to fn scope).
	       * This function takes care of it by updating it again.
	       *
	       * TODO: This is unnecessary work and needs to be fixed in babel.
	       * https://github.com/babel/babel/issues/4818
	       *
	       * When this is removed, remember to remove fixup's dependency in
	       * ScopeTracker
	       */

	    }, {
	      key: "fixup",
	      value: function fixup() {
	        fixupVarScoping(this);
	      }

	      /**
	       * A single pass through the AST to collect info for
	       *
	       * 1. Scope Tracker
	       * 2. Unsafe Scopes (direct eval scopes)
	       * 3. Charset considerations for better gzip compression
	       *
	       * Traversed in the same fashion(BFS) the mangling is done
	       */

	    }, {
	      key: "collect",
	      value: function collect() {
	        var mangler = this;
	        var scopeTracker = mangler.scopeTracker;

	        scopeTracker.addScope(this.program.scope);

	        /**
	         * Same usage as in DCE, whichever runs first
	         */
	        if (!isEvalScopesMarked(mangler.program.scope)) {
	          markEvalScopes(mangler.program);
	        }

	        /**
	         * The visitors to be used in traversal.
	         *
	         * Note: BFS traversal supports only the `enter` handlers, `exit`
	         * handlers are simply dropped without Errors
	         *
	         * Collects items defined in the ScopeTracker
	         */
	        var collectVisitor = {
	          Scopable: function Scopable(_ref2) {
	            var scope = _ref2.scope;

	            scopeTracker.addScope(scope);

	            // Collect bindings defined in the scope
	            Object.keys(scope.bindings).forEach(function (name) {
	              scopeTracker.addBinding(scope.bindings[name]);
	            });
	          },

	          /**
	           * This is necessary because, in Babel, the scope.references
	           * does NOT contain the references in that scope. Only the program
	           * scope (top most level) contains all the references.
	           *
	           * We collect the references in a fashion where all the scopes between
	           * and including the referenced scope and scope where it is declared
	           * is considered as scope referencing that identifier
	           */
	          ReferencedIdentifier: function ReferencedIdentifier(path) {
	            if (isLabelIdentifier(path)) return;
	            var scope = path.scope,
	                name = path.node.name;

	            var binding = scope.getBinding(name);
	            if (!binding) {
	              // Do not collect globals as they are already available via
	              // babel's API
	              if (scope.hasGlobal(name)) return;
	              // This should NOT happen ultimately. Panic if this code block is
	              // reached
	              throw new Error("Binding not found for ReferencedIdentifier \"" + name + "\" " + ("present in \"" + path.parentPath.type + "\". ") + ("Please report this at " + newIssueUrl));
	            } else {
	              // Add it to our scope tracker if everything is fine
	              scopeTracker.addReference(scope, binding, name);
	            }
	          },


	          /**
	           * This is useful to detect binding ids and add them to the
	           * scopeTracker's bindings
	           *
	           * TODO:
	           *
	           * This visitor is probably unnecessary. It was added to capture the
	           * bindings that was not present in scope.bindings. But, now, it looks
	           * like the unit and smoke tests pass without this.
	           */
	          BindingIdentifier: function BindingIdentifier(path) {
	            if (isLabelIdentifier(path)) return;

	            var scope = path.scope,
	                name = path.node.name;

	            var binding = scope.getBinding(name);

	            /**
	             * We have already captured the bindings when traversing through
	             * Scopables, if a binding identifier doesn't have a binding, it
	             * probably means that another transformation created a new binding,
	             * refer https://github.com/babel/minify/issues/549 for example -
	             * binding created by plugin transform-es2015-function-name
	             *
	             * So we just don't care about bindings that do not exist
	             *
	             * TODO:
	             *
	             * this deopts in DCE as this name can be removed for this particular
	             * case (es2015-function-name)
	             */
	            if (!binding) return;

	            /**
	             * Detect constant violations
	             *
	             * If it's a constant violation, then add the Identifier Path as
	             * a Reference instead of Binding - This is because the ScopeTracker
	             * tracks these Re-declaration and mutation of variables as References
	             * as it is simple to rename them
	             */
	            if (binding.identifier === path.node) {
	              scopeTracker.addBinding(binding);
	            } else {
	              // constant violation
	              scopeTracker.addReference(scope, binding, name);
	            }
	          }
	        };

	        /**
	         * These visitors are for collecting the Characters used in the program
	         * to measure the frequency and generate variable names for mangling so
	         * as to improve the gzip compression - as gzip likes repetition
	         */
	        if (this.charset.shouldConsider) {
	          collectVisitor.Identifier = function Identifer(path) {
	            var node = path.node;

	            // We don't mangle properties, so we collect them as they contribute
	            // to the frequency of characters

	            if (path.parentPath.isMemberExpression({ property: node }) || path.parentPath.isObjectProperty({ key: node })) {
	              mangler.charset.consider(node.name);
	            }
	          };
	          collectVisitor.Literal = function Literal(_ref3) {
	            var node = _ref3.node;

	            mangler.charset.consider(String(node.value));
	          };
	        }

	        // Traverse the AST
	        bfsTraverse(mangler.program, collectVisitor);
	      }

	      /**
	       * Tells if a binding is exported as a NamedExport - so as to NOT mangle
	       *
	       * Babel treats NamedExports as a binding referenced by this NamedExport decl
	       * @param {Binding} binding
	       */

	    }, {
	      key: "isExportedWithName",
	      value: function isExportedWithName(binding) {
	        // short circuit
	        if (!this.topLevel) {
	          return false;
	        }

	        var refs = binding.referencePaths;

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = refs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var ref = _step.value;

	            if (ref.isExportNamedDeclaration()) {
	              return true;
	            }
	          }

	          // default
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

	        return false;
	      }

	      /**
	       * Mangle the scope
	       * @param {Scope} scope
	       */

	    }, {
	      key: "mangleScope",
	      value: function mangleScope(scope) {
	        var mangler = this;
	        var scopeTracker = mangler.scopeTracker;

	        // Unsafe Scope

	        if (!mangler.eval && hasEval(scope)) return;

	        // Already visited
	        // This is because for a function, in Babel, the function and
	        // the function body's BlockStatement has the same scope, and will
	        // be visited twice by the Scopable handler, and we want to mangle
	        // it only once
	        if (mangler.visitedScopes.has(scope)) return;
	        mangler.visitedScopes.add(scope);

	        // Helpers to generate names
	        var i = 0;
	        function getNext() {
	          return mangler.charset.getIdentifier(i++);
	        }
	        function resetNext() {
	          i = 0;
	        }

	        var bindings = scopeTracker.bindings.get(scope);
	        var names = [].concat(_toConsumableArray(bindings.keys()));

	        /**
	         * 1. Iterate through the list of BindingIdentifiers
	         * 2. Rename each of them in-place
	         * 3. Update the scope tree.
	         */
	        for (var _i = 0; _i < names.length; _i++) {
	          var oldName = names[_i];
	          var binding = bindings.get(oldName);

	          // Names which should NOT be mangled
	          if (
	          // arguments - for non-strict mode
	          oldName === "arguments" ||
	          // labels
	          binding.path.isLabeledStatement() ||
	          // ClassDeclaration has binding in two scopes
	          //   1. The scope in which it is declared
	          //   2. The class's own scope
	          binding.path.isClassDeclaration() && binding.path === scope.path ||
	          // blacklisted
	          mangler.isBlacklist(oldName) || (
	          // function names
	          mangler.keepFnName ? isFunction(binding.path) : false) || (
	          // class names
	          mangler.keepClassName ? isClass(binding.path) : false) ||
	          // named export
	          mangler.isExportedWithName(binding)) {
	            continue;
	          }

	          var next = void 0;
	          do {
	            next = getNext();
	          } while (!t.isValidIdentifier(next) || scopeTracker.hasBinding(scope, next) || scope.hasGlobal(next) || scopeTracker.hasReference(scope, next) || !scopeTracker.canUseInReferencedScopes(binding, next));

	          // Reset so variables which are removed can be reused
	          resetNext();

	          // Once we detected a valid `next` Identifier which could be used,
	          // call the renamer
	          mangler.rename(scope, binding, oldName, next);
	        }
	      }

	      /**
	       * The mangle function that traverses through all the Scopes in a BFS
	       * fashion - calls mangleScope
	       */

	    }, {
	      key: "mangle",
	      value: function mangle() {
	        var mangler = this;

	        bfsTraverse(this.program, {
	          Scopable: function Scopable(path) {
	            if (!path.isProgram() || mangler.topLevel) mangler.mangleScope(path.scope);
	          }
	        });
	      }

	      /**
	       * Given a NodePath, collects all the Identifiers which are BindingIdentifiers
	       * and replaces them with the new name
	       *
	       * For example,
	       *   var a = 1, { b } = c; // a and b are BindingIdentifiers
	       *
	       * @param {NodePath} path
	       * @param {String} oldName
	       * @param {String} newName
	       * @param {Function} predicate
	       */

	    }, {
	      key: "renameBindingIds",
	      value: function renameBindingIds(path, oldName, newName) {
	        var predicate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
	          return true;
	        };

	        var bindingIds = path.getBindingIdentifierPaths(true, false);
	        for (var name in bindingIds) {
	          if (name !== oldName) continue;
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = bindingIds[name][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var idPath = _step2.value;

	              if (predicate(idPath)) {
	                this.renamedNodes.add(idPath.node);
	                idPath.replaceWith(t.identifier(newName));
	                this.renamedNodes.add(idPath.node);
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
	        }
	      }

	      /**
	       * The Renamer:
	       * Renames the following for one Binding in a Scope
	       *
	       * 1. Binding in that Scope
	       * 2. All the Binding's constant violations
	       * 3. All its References
	       * 4. Updates mangler.scopeTracker
	       * 5. Updates Babel's Scope tracking
	       *
	       * @param {Scope} scope
	       * @param {Binding} binding
	       * @param {String} oldName
	       * @param {String} newName
	       */

	    }, {
	      key: "rename",
	      value: function rename(scope, binding, oldName, newName) {
	        var mangler = this;
	        var scopeTracker = mangler.scopeTracker;

	        // rename at the declaration level

	        this.renameBindingIds(binding.path, oldName, newName, function (idPath) {
	          return idPath.node === binding.identifier;
	        });

	        // update mangler's ScopeTracker
	        scopeTracker.renameBinding(scope, oldName, newName);

	        // update all constant violations
	        var violations = binding.constantViolations;
	        for (var i = 0; i < violations.length; i++) {
	          if (violations[i].isLabeledStatement()) continue;

	          this.renameBindingIds(violations[i], oldName, newName);
	          scopeTracker.updateReference(violations[i].scope, binding, oldName, newName);
	        }

	        // update all referenced places
	        var refs = binding.referencePaths;
	        for (var _i2 = 0; _i2 < refs.length; _i2++) {
	          var path = refs[_i2];

	          var node = path.node;

	          if (!path.isIdentifier()) {
	            // Ideally, this should not happen
	            // it happens in these places now -
	            // case 1: Export Statements
	            // This is a bug in babel
	            // https://github.com/babel/babel/pull/3629
	            // case 2: Replacements in other plugins
	            // eg: https://github.com/babel/minify/issues/122
	            // replacement in dce from `x` to `!x` gives referencePath as `!x`
	            path.traverse({
	              ReferencedIdentifier: function ReferencedIdentifier(refPath) {
	                if (refPath.node.name !== oldName) {
	                  return;
	                }
	                var actualBinding = refPath.scope.getBinding(oldName);
	                if (actualBinding !== binding) {
	                  return;
	                }
	                mangler.renamedNodes.add(refPath.node);
	                refPath.replaceWith(t.identifier(newName));
	                mangler.renamedNodes.add(refPath.node);

	                scopeTracker.updateReference(refPath.scope, binding, oldName, newName);
	              }
	            });
	          } else if (!isLabelIdentifier(path)) {
	            if (path.node.name === oldName) {
	              mangler.renamedNodes.add(path.node);
	              path.replaceWith(t.identifier(newName));
	              mangler.renamedNodes.add(path.node);
	              scopeTracker.updateReference(path.scope, binding, oldName, newName);
	            } else if (mangler.renamedNodes.has(path.node)) {
	              // already renamed,
	              // just update the references
	              scopeTracker.updateReference(path.scope, binding, oldName, newName);
	            } else {
	              throw new Error("Unexpected Rename Error: " + ("Trying to replace \"" + node.name + "\": from \"" + oldName + "\" to \"" + newName + "\". ") + ("Please report it at " + newIssueUrl));
	            }
	          }
	          // else label identifier - silently ignore
	        }

	        // update babel's scope tracking
	        var bindings = scope.bindings;

	        bindings[newName] = binding;
	        delete bindings[oldName];
	      }
	    }]);

	    return Mangler;
	  }();

	  return {
	    name: "minify-mangle-names",
	    visitor: {
	      /**
	       * Mangler is run as a single pass. It's the same pattern as used in DCE
	       */
	      Program: {
	        exit: function exit(path) {
	          // If the source code is small then we're going to assume that the user
	          // is running on this on single files before bundling. Therefore we
	          // need to achieve as much determinisim and we will not do any frequency
	          // sorting on the character set. Currently the number is pretty arbitrary.
	          var shouldConsiderSource = path.getSource().length > 70000;

	          var charset = new Charset(shouldConsiderSource);

	          var mangler = new Mangler(charset, path, this.opts);
	          mangler.run();
	        }
	      }
	    }
	  };
	};

	// convert value to object
	function toObject(value) {
	  if (!Array.isArray(value)) {
	    return value;
	  }

	  var map = {};
	  for (var i = 0; i < value.length; i++) {
	    map[value[i]] = true;
	  }
	  return map;
	}

	// for keepFnName
	function isFunction(path) {
	  return path.isFunctionExpression() || path.isFunctionDeclaration();
	}

	// for keepClassName
	function isClass(path) {
	  return path.isClassExpression() || path.isClassDeclaration();
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var CountedSet = __webpack_require__(39);
	var isLabelIdentifier = __webpack_require__(8);

	var newIssueUrl = "https://github.com/babel/minify/issues/new";

	/**
	 * ScopeTracker
	 *   references: Map<Scope, CountedSet<String> >
	 *   bindings: Map<Scope, Map<String, Binding> >
	 */
	module.exports = function () {
	  function ScopeTracker() {
	    _classCallCheck(this, ScopeTracker);

	    this.references = new Map();
	    this.bindings = new Map();
	  }

	  /**
	   * Register a new Scope and initiliaze it with empty sets
	   * @param {Scope} scope
	   */

	  _createClass(ScopeTracker, [{
	    key: "addScope",
	    value: function addScope(scope) {
	      if (!this.references.has(scope)) {
	        this.references.set(scope, new CountedSet());
	      }
	      if (!this.bindings.has(scope)) {
	        this.bindings.set(scope, new Map());
	      }
	    }

	    /**
	     * Add reference to all Scopes between and including the ReferencedScope
	     * and Binding's Scope
	     * @param {Scope} scope
	     * @param {Binding} binding
	     * @param {String} name
	     */

	  }, {
	    key: "addReference",
	    value: function addReference(scope, binding, name) {
	      var parent = scope;
	      do {
	        this.references.get(parent).add(name);
	        if (!binding) {
	          throw new Error("Binding Not Found for " + name + " during scopeTracker.addRefernce. " + ("Please report at " + newIssueUrl));
	        }
	        if (binding.scope === parent) break;
	      } while (parent = parent.parent);
	    }

	    /**
	     * has a Reference in the given {Scope} or a child Scope
	     *
	     * Refer {addReference} to know why the following call will be valid
	     * for detecting references in child Scopes
	     *
	     * @param {Scope} scope
	     * @param {String} name
	     */

	  }, {
	    key: "hasReference",
	    value: function hasReference(scope, name) {
	      return this.references.get(scope).has(name);
	    }

	    /**
	     * Update reference count in all scopes between and including the
	     * Referenced Scope and the Binding's Scope
	     *
	     * @param {Scope} scope
	     * @param {Binding} binding
	     * @param {String} oldName
	     * @param {String} newName
	     */

	  }, {
	    key: "updateReference",
	    value: function updateReference(scope, binding, oldName, newName) {
	      var parent = scope;
	      do {
	        var ref = this.references.get(parent);

	        ref.delete(oldName);
	        ref.add(newName);

	        if (!binding) {
	          // Something went wrong - panic
	          throw new Error("Binding Not Found during scopeTracker.updateRefernce " + ("while updating \"" + oldName + "\" to \"" + newName + "\". ") + ("Please report at " + newIssueUrl));
	        }

	        if (binding.scope === parent) break;
	      } while (parent = parent.parent);
	    }

	    /**
	     * has either a Binding or a Reference
	     * @param {Scope} scope
	     * @param {Binding} binding
	     * @param {String} name
	     */

	  }, {
	    key: "hasBindingOrReference",
	    value: function hasBindingOrReference(scope, binding, name) {
	      return this.hasReference(scope, name) || this.hasBinding(scope, name);
	    }

	    /**
	     * For a Binding visit all places where the Binding is used and detect
	     * if the newName {next} can be used in all these places
	     *
	     * 1. binding's own scope
	     * 2. constant violations' scopes
	     * 3. referencePaths' scopes
	     *
	     * @param {Binding} binding
	     * @param {String} next
	     */

	  }, {
	    key: "canUseInReferencedScopes",
	    value: function canUseInReferencedScopes(binding, next) {
	      var tracker = this;

	      if (tracker.hasBindingOrReference(binding.scope, binding, next)) {
	        return false;
	      }

	      // Safari raises a syntax error for a `let` or `const` declaration in a
	      // `for` loop initialization that shadows a parent function's parameter.
	      // https://github.com/babel/minify/issues/559
	      // https://bugs.webkit.org/show_bug.cgi?id=171041
	      // https://trac.webkit.org/changeset/217200/webkit/trunk/Source
	      var maybeDecl = binding.path.parentPath;
	      var isBlockScoped = maybeDecl.isVariableDeclaration({ kind: "let" }) || maybeDecl.isVariableDeclaration({ kind: "const" });
	      if (isBlockScoped) {
	        var maybeFor = maybeDecl.parentPath;
	        var isForLoopBinding = maybeFor.isForStatement({ init: maybeDecl.node }) || maybeFor.isForXStatement({ left: maybeDecl.node });
	        if (isForLoopBinding) {
	          var fnParent = maybeFor.getFunctionParent();
	          if (fnParent.isFunction({ body: maybeFor.parent })) {
	            var parentFunctionBinding = this.bindings.get(fnParent.scope).get(next);
	            if (parentFunctionBinding) {
	              var parentFunctionHasParamBinding = parentFunctionBinding.kind === "param";
	              if (parentFunctionHasParamBinding) {
	                return false;
	              }
	            }
	          }
	        }
	      }

	      for (var i = 0; i < binding.constantViolations.length; i++) {
	        var violation = binding.constantViolations[i];
	        if (tracker.hasBindingOrReference(violation.scope, binding, next)) {
	          return false;
	        }
	      }

	      for (var _i = 0; _i < binding.referencePaths.length; _i++) {
	        var ref = binding.referencePaths[_i];
	        if (!ref.isIdentifier()) {
	          var canUse = true;
	          ref.traverse({
	            ReferencedIdentifier: function ReferencedIdentifier(path) {
	              if (path.node.name !== next) return;
	              if (tracker.hasBindingOrReference(path.scope, binding, next)) {
	                canUse = false;
	              }
	            }
	          });
	          if (!canUse) {
	            return canUse;
	          }
	        } else if (!isLabelIdentifier(ref)) {
	          if (tracker.hasBindingOrReference(ref.scope, binding, next)) {
	            return false;
	          }
	        }
	      }

	      return true;
	    }

	    /**
	     * Add a binding to Tracker in binding's own Scope
	     * @param {Binding} binding
	     */

	  }, {
	    key: "addBinding",
	    value: function addBinding(binding) {
	      if (!binding) {
	        return;
	      }

	      var bindings = this.bindings.get(binding.scope);
	      var existingBinding = bindings.get(binding.identifier.name);

	      if (existingBinding && existingBinding !== binding) {
	        throw new Error("scopeTracker.addBinding: " + ("Binding \"" + existingBinding.identifier.name + "\" already exists. ") + ("Trying to add \"" + binding.identifier.name + "\" again."));
	      }

	      bindings.set(binding.identifier.name, binding);
	    }

	    /**
	     * Moves Binding from it's own Scope to {toScope}
	     *
	     * required for fixup-var-scope
	     *
	     * @param {Binding} binding
	     * @param {Scope} toScope
	     */

	  }, {
	    key: "moveBinding",
	    value: function moveBinding(binding, toScope) {
	      this.bindings.get(binding.scope).delete(binding.identifier.name);
	      this.bindings.get(toScope).set(binding.identifier.name, binding);
	    }

	    /**
	     * has a Binding in the current {Scope}
	     * @param {Scope} scope
	     * @param {String} name
	     */

	  }, {
	    key: "hasBinding",
	    value: function hasBinding(scope, name) {
	      return this.bindings.get(scope).has(name);
	    }

	    /**
	     * Update the ScopeTracker on rename
	     * @param {Scope} scope
	     * @param {String} oldName
	     * @param {String} newName
	     */

	  }, {
	    key: "renameBinding",
	    value: function renameBinding(scope, oldName, newName) {
	      var bindings = this.bindings.get(scope);
	      bindings.set(newName, bindings.get(oldName));
	      bindings.delete(oldName);
	    }
	  }]);

	  return ScopeTracker;
	}();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  return {
	    name: "minify-numeric-literals",
	    visitor: {
	      NumericLiteral: function NumericLiteral(path) {
	        if (!path.node.extra) return;

	        var exponential = path.node.value.toExponential().replace(/\+/g, "").replace(/e0/, "");

	        if (path.node.extra.raw.length > exponential.length) {
	          var literal = t.numericLiteral(path.node.value);
	          literal.extra = {
	            raw: exponential,
	            rawValue: path.node.value
	          };
	          path.replaceWith(literal);
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var NO_MEMBER = Symbol("no member");

	  var replaceVisitor = {
	    ReferencedIdentifier: function ReferencedIdentifier(path) {
	      var _path = path,
	          node = _path.node;

	      var optionsMap = this.replacements[node.name];
	      if (!optionsMap) {
	        return;
	      }

	      var options = void 0;
	      if (path.parentPath.isMemberExpression({ object: node })) {
	        var property = path.parent.property;

	        var key = t.isIdentifier(property) && property.name;
	        if (typeof key === "string") {
	          options = optionsMap[key];
	          path = path.parentPath;
	        }
	      }

	      if (!options) {
	        options = optionsMap[NO_MEMBER];
	      }

	      if (!options) {
	        return;
	      }

	      path.replaceWith(options.node);
	    }
	  };

	  return {
	    name: "minify-replace",
	    visitor: {
	      Program: function Program(path) {
	        /**
	           Replacements is an array of objects like this:
	           {
	             identifierName: 'console',
	             member: 'log', // optional
	             replacement: {
	               type: 'identifier',
	               value: '',
	             },
	           }
	        **/

	        if (!this.opts.replacements) {
	          // No replacements. Bail.
	          return;
	        }

	        var map = Object.create(null);
	        this.opts.replacements.forEach(function (_ref2) {
	          var identifierName = _ref2.identifierName,
	              replacement = _ref2.replacement,
	              member = _ref2.member;

	          if (path.scope.globals[identifierName]) {
	            // Convert to a node, we only allow identifiers and literals as replacements
	            if (!replacement.type.match(/literal|identifier/i)) {
	              throw new Error("Only literals and identifier are supported as replacements");
	            }

	            var node = t[replacement.type](replacement.value);
	            var options = {
	              identifierName: identifierName,
	              node: node,
	              member: member
	            };

	            if (!map[identifierName]) {
	              map[identifierName] = {};
	            }

	            if (member && map[identifierName][member]) {
	              throw new Error("Replacement collision " + identifierName + "." + member);
	            }
	            map[identifierName][member || NO_MEMBER] = options;
	          }
	        });

	        path.traverse(replaceVisitor, { replacements: map });
	      }
	    }
	  };
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";

	var operators = new Set(["+", "-", "*", "%", "<<", ">>", ">>>", "&", "|", "^", "/", "**"]);

	var updateOperators = new Set(["+", "-"]);

	module.exports = function (t) {
	  function simplify(path) {
	    var rightExpr = path.get("right");
	    var leftExpr = path.get("left");

	    if (path.node.operator !== "=") {
	      return;
	    }

	    var canBeUpdateExpression = rightExpr.get("right").isNumericLiteral() && rightExpr.get("right").node.value === 1 && updateOperators.has(rightExpr.node.operator);

	    if (leftExpr.isMemberExpression()) {
	      var leftPropNames = getPropNames(leftExpr);
	      var rightPropNames = getPropNames(rightExpr.get("left"));

	      if (!leftPropNames || leftPropNames.indexOf(undefined) > -1 || !rightPropNames || rightPropNames.indexOf(undefined) > -1 || !operators.has(rightExpr.node.operator) || !areArraysEqual(leftPropNames, rightPropNames)) {
	        return;
	      }
	    } else {
	      if (!rightExpr.isBinaryExpression() || !operators.has(rightExpr.node.operator) || leftExpr.node.name !== rightExpr.node.left.name) {
	        return;
	      }
	    }

	    var newExpression = void 0;

	    // special case x=x+1 --> ++x
	    if (canBeUpdateExpression) {
	      newExpression = t.updateExpression(rightExpr.node.operator + rightExpr.node.operator, t.clone(leftExpr.node), true /* prefix */
	      );
	    } else {
	      newExpression = t.assignmentExpression(rightExpr.node.operator + "=", t.clone(leftExpr.node), t.clone(rightExpr.node.right));
	    }

	    path.replaceWith(newExpression);
	  }

	  return {
	    simplify: simplify
	  };
	};

	function areArraysEqual(arr1, arr2) {
	  return arr1.every(function (value, index) {
	    return String(value) === String(arr2[index]);
	  });
	}

	function getPropNames(path) {
	  if (!path.isMemberExpression()) {
	    return;
	  }

	  var obj = path.get("object");

	  var prop = path.get("property");
	  var propNames = [getName(prop.node)];

	  while (obj.type === "MemberExpression") {
	    var node = obj.get("property").node;
	    if (node) {
	      propNames.push(getName(node));
	    }
	    obj = obj.get("object");
	  }
	  propNames.push(getName(obj.node));

	  return propNames;
	}

	function getName(node) {
	  if (node.type === "ThisExpression") {
	    return "this";
	  }
	  if (node.type === "Super") {
	    return "super";
	  }
	  if (node.type === "NullLiteral") {
	    return "null";
	  }
	  // augment identifiers so that they don't match
	  // string/number literals
	  // but still match against each other
	  return node.name ? node.name + "_" : node.value /* Literal */;
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var h = __webpack_require__(2);
	var PatternMatch = __webpack_require__(9);

	module.exports = function (t) {
	  // small abstractions
	  var not = function not(node) {
	    return t.unaryExpression("!", node);
	  };
	  var notnot = function notnot(node) {
	    return not(not(node));
	  };
	  var or = function or(a, b) {
	    return t.logicalExpression("||", a, b);
	  };
	  var and = function and(a, b) {
	    return t.logicalExpression("&&", a, b);
	  };

	  function simplifyPatterns(path) {
	    var test = path.get("test");
	    var consequent = path.get("consequent");
	    var alternate = path.get("alternate");

	    var _h$typeSymbols = h.typeSymbols(t),
	        EX = _h$typeSymbols.Expression,
	        LE = _h$typeSymbols.LogicalExpression;

	    // Convention:
	    // ===============
	    // for each pattern [test, consequent, alternate, handler(expr, cons, alt)]


	    var matcher = new PatternMatch([[LE, true, false, function (e) {
	      return e;
	    }], [EX, true, false, function (e) {
	      return notnot(e);
	    }], [EX, false, true, function (e) {
	      return not(e);
	    }], [LE, true, EX, function (e, c, a) {
	      return or(e, a);
	    }], [EX, true, EX, function (e, c, a) {
	      return or(notnot(e), a);
	    }], [EX, false, EX, function (e, c, a) {
	      return and(not(e), a);
	    }], [EX, EX, true, function (e, c) {
	      return or(not(e), c);
	    }], [LE, EX, false, function (e, c) {
	      return and(e, c);
	    }], [EX, EX, false, function (e, c) {
	      return and(notnot(e), c);
	    }]]);

	    var result = matcher.match([test, consequent, alternate], h.isPatternMatchesPath(t));

	    if (result.match) {
	      path.replaceWith(result.value(test.node, consequent.node, alternate.node));
	    }
	  }

	  return {
	    simplifyPatterns: simplifyPatterns
	  };
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var REPLACED = Symbol("replaced");
	var h = __webpack_require__(2);

	module.exports = function (t) {
	  function mergeNestedIfs(path) {
	    var consequent = path.get("consequent");
	    var alternate = path.get("alternate");

	    // not nested if
	    if (!consequent.isIfStatement()) return;

	    // there are no alternate nodes in both the if statements (nested)
	    if (alternate.node || consequent.get("alternate").node) return;

	    var test = path.get("test");
	    test.replaceWith(t.logicalExpression("&&", test.node, consequent.get("test").node));

	    consequent.replaceWith(t.clone(consequent.get("consequent").node));
	  }

	  // No alternate, make into a guarded expression
	  function toGuardedExpression(path) {
	    var node = path.node;

	    if (node.consequent && !node.alternate && node.consequent.type === "ExpressionStatement") {
	      var op = "&&";
	      if (t.isUnaryExpression(node.test, { operator: "!" })) {
	        node.test = node.test.argument;
	        op = "||";
	      }

	      path.replaceWith(t.expressionStatement(t.logicalExpression(op, node.test, node.consequent.expression)));
	      return REPLACED;
	    }
	  }

	  // both consequent and alternate are expressions, turn into ternary
	  function toTernary(path) {
	    var node = path.node;

	    if (t.isExpressionStatement(node.consequent) && t.isExpressionStatement(node.alternate)) {
	      path.replaceWith(t.conditionalExpression(node.test, node.consequent.expression, node.alternate.expression));
	      return REPLACED;
	    }
	  }

	  // consequent and alternate are return -- conditional.
	  function toConditional(path) {
	    var node = path.node;

	    if (t.isReturnStatement(node.consequent) && t.isReturnStatement(node.alternate)) {
	      if (!node.consequent.argument && !node.alternate.argument) {
	        path.replaceWith(t.expressionStatement(node.test));
	        return REPLACED;
	      }

	      path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || h.VOID_0(t), node.alternate.argument || h.VOID_0(t))));
	      return REPLACED;
	    }
	  }

	  // There is nothing after this If block. And one or both
	  // of the consequent and alternate are either expression statment
	  // or return statements.
	  function toReturn(path) {
	    var node = path.node;

	    if (!path.getSibling(path.key + 1).node && path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.isFunction()) {
	      // Only the consequent is a return, void the alternate.
	      if (t.isReturnStatement(node.consequent) && t.isExpressionStatement(node.alternate)) {
	        if (!node.consequent.argument) {
	          path.replaceWith(t.expressionStatement(t.logicalExpression("||", node.test, node.alternate.expression)));
	          return REPLACED;
	        }

	        path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || h.VOID_0(t), t.unaryExpression("void", node.alternate.expression, true))));
	        return REPLACED;
	      }

	      // Only the alternate is a return, void the consequent.
	      if (t.isReturnStatement(node.alternate) && t.isExpressionStatement(node.consequent)) {
	        if (!node.alternate.argument) {
	          path.replaceWith(t.expressionStatement(t.logicalExpression("&&", node.test, node.consequent.expression)));
	          return REPLACED;
	        }

	        path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, t.unaryExpression("void", node.consequent.expression, true), node.alternate.argument || h.VOID_0(t))));
	        return REPLACED;
	      }

	      if (t.isReturnStatement(node.consequent) && !node.alternate) {
	        if (!node.consequent.argument) {
	          path.replaceWith(t.expressionStatement(node.test));
	          return REPLACED;
	        }

	        // This would only be worth it if the previous statement was an if
	        // because then we may merge to create a conditional.
	        if (path.getSibling(path.key - 1).isIfStatement()) {
	          path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || h.VOID_0(t), h.VOID_0(t))));
	          return REPLACED;
	        }
	      }

	      if (t.isReturnStatement(node.alternate) && !node.consequent) {
	        if (!node.alternate.argument) {
	          path.replaceWith(t.expressionStatement(node.test));
	          return REPLACED;
	        }

	        // Same as above.
	        if (path.getSibling(path.key - 1).isIfStatement()) {
	          path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.alternate.argument || h.VOID_0(t), h.VOID_0(t))));
	          return REPLACED;
	        }
	      }
	    }

	    var next = path.getSibling(path.key + 1);

	    // If the next satatement(s) is an if statement and we can simplify that
	    // to potentailly be an expression (or a return) then this will make it
	    // easier merge.
	    if (next.isIfStatement()) {
	      next.pushContext(path.context);
	      next.visit();
	      next.popContext();
	      next = path.getSibling(path.key + 1);
	    }

	    // Some other visitor might have deleted our node. OUR NODE ;_;
	    if (!path.node) {
	      return;
	    }

	    // No alternate but the next statement is a return
	    // also turn into a return conditional
	    if (t.isReturnStatement(node.consequent) && !node.alternate && next.isReturnStatement()) {
	      var nextArg = next.node.argument || h.VOID_0(t);
	      next.remove();
	      path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || h.VOID_0(t), nextArg)));
	      return REPLACED;
	    }

	    // Next is the last expression, turn into a return while void'ing the exprs
	    if (path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.isFunction() && !path.getSibling(path.key + 2).node && t.isReturnStatement(node.consequent) && !node.alternate && next.isExpressionStatement()) {
	      var nextExpr = next.node.expression;
	      next.remove();

	      if (node.consequent.argument) {
	        path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument, t.unaryExpression("void", nextExpr, true))));
	        return REPLACED;
	      }

	      path.replaceWith(t.logicalExpression("||", node.test, nextExpr));
	      return REPLACED;
	    }
	  }

	  // Remove else for if-return
	  function removeUnnecessaryElse(path) {
	    var node = path.node;

	    var consequent = path.get("consequent");
	    var alternate = path.get("alternate");

	    if (consequent.node && alternate.node && (consequent.isReturnStatement() || consequent.isBlockStatement() && t.isReturnStatement(consequent.node.body[consequent.node.body.length - 1])) && (
	    // don't hoist declarations
	    // TODO: validate declarations after fixing scope issues
	    alternate.isBlockStatement() ? !alternate.get("body").some(function (stmt) {
	      return stmt.isVariableDeclaration({ kind: "let" }) || stmt.isVariableDeclaration({ kind: "const" });
	    }) : true)) {
	      path.insertAfter(alternate.isBlockStatement() ? alternate.node.body.map(function (el) {
	        return t.clone(el);
	      }) : t.clone(alternate.node));
	      node.alternate = null;
	      return REPLACED;
	    }
	  }

	  function runTransforms(path) {
	    // ordered
	    var transforms = [toGuardedExpression, toTernary, toConditional, toReturn, removeUnnecessaryElse];

	    // run each of the replacement till we replace something
	    // which is identified by the Symbol(REPLACED) that each of the
	    // functions return when they replace something
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = transforms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var transform = _step.value;

	        if (transform(path) === REPLACED) {
	          break;
	        }
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

	  // If the consequent is if and the altenrate is not then
	  // switch them out. That way we know we don't have to print
	  // a block.x
	  function switchConsequent(path) {
	    var node = path.node;

	    if (!node.alternate) {
	      return;
	    }

	    if (!t.isIfStatement(node.consequent)) {
	      return;
	    }

	    if (t.isIfStatement(node.alternate)) {
	      return;
	    }

	    node.test = t.unaryExpression("!", node.test, true);
	    var _ref = [node.consequent, node.alternate];
	    node.alternate = _ref[0];
	    node.consequent = _ref[1];
	  }

	  // Make if statements with conditional returns in the body into
	  // an if statement that guards the rest of the block.
	  function conditionalReturnToGuards(path) {
	    var node = path.node;

	    if (!path.inList || !path.get("consequent").isBlockStatement() || node.alternate) {
	      return;
	    }

	    var ret = void 0;
	    var test = void 0;
	    var exprs = [];
	    var statements = node.consequent.body;

	    for (var i = 0, statement; statement = statements[i]; i++) {
	      if (t.isExpressionStatement(statement)) {
	        exprs.push(statement.expression);
	      } else if (t.isIfStatement(statement)) {
	        if (i < statements.length - 1) {
	          // This isn't the last statement. Bail.
	          return;
	        }
	        if (statement.alternate) {
	          return;
	        }
	        if (!t.isReturnStatement(statement.consequent)) {
	          return;
	        }
	        ret = statement.consequent;
	        test = statement.test;
	      } else {
	        return;
	      }
	    }

	    if (!test || !ret) {
	      return;
	    }

	    exprs.push(test);

	    var expr = exprs.length === 1 ? exprs[0] : t.sequenceExpression(exprs);

	    var replacement = t.logicalExpression("&&", node.test, expr);

	    path.replaceWith(t.ifStatement(replacement, ret, null));
	  }

	  return {
	    mergeNestedIfs: mergeNestedIfs,
	    simplify: runTransforms,
	    switchConsequent: switchConsequent,
	    conditionalReturnToGuards: conditionalReturnToGuards
	  };
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var flipExpressions = __webpack_require__(4)(t);
	  var toMultipleSequenceExpressions = __webpack_require__(26)(t);
	  var ifStatement = __webpack_require__(47)(t);
	  var conditionalExpression = __webpack_require__(46)(t);
	  var logicalExpression = __webpack_require__(49)(t);
	  var assignmentExpression = __webpack_require__(45)(t);

	  var VOID_0 = t.unaryExpression("void", t.numericLiteral(0), true);
	  var condExprSeen = Symbol("condExprSeen");
	  var seqExprSeen = Symbol("seqExprSeen");
	  var shouldRevisit = Symbol("shouldRevisit");

	  return {
	    name: "minify-simplify",
	    visitor: {
	      Statement: {
	        exit: function exit(path) {
	          if (path.node[shouldRevisit]) {
	            delete path.node[shouldRevisit];
	            path.visit();
	          }
	        }
	      },

	      // CallExpression(path) {
	      // const { node } = path;

	      /* (function() {})() -> !function() {}()
	        There is a bug in babel in printing this. Disabling for now.
	        if (t.isFunctionExpression(node.callee) &&
	            (t.isExpressionStatement(parent) ||
	             (t.isSequenceExpression(parent) && parent.expressions[0] === node))
	        ) {
	          path.replaceWith(
	            t.callExpression(
	              t.unaryExpression("!", node.callee, true),
	              node.arguments
	            )
	          );
	          return;
	        }*/
	      // },

	      UnaryExpression: {
	        enter: [
	        // Demorgans.
	        function (path) {
	          var node = path.node;

	          if (node.operator !== "!" || flipExpressions.hasSeen(node)) {
	            return;
	          }

	          var expr = node.argument;

	          // We need to make sure that the return type will always be boolean.
	          if (!(t.isLogicalExpression(expr) || t.isConditionalExpression(expr) || t.isBinaryExpression(expr))) {
	            return;
	          }
	          if (t.isBinaryExpression(expr) && t.COMPARISON_BINARY_OPERATORS.indexOf(expr.operator) === -1) {
	            return;
	          }

	          if (flipExpressions.shouldFlip(expr, 1)) {
	            var newNode = flipExpressions.flip(expr);
	            path.replaceWith(newNode);
	          }
	        },

	        // !(a, b, c) -> a, b, !c
	        function (path) {
	          var node = path.node;

	          if (node.operator !== "!") {
	            return;
	          }

	          if (!t.isSequenceExpression(node.argument)) {
	            return;
	          }

	          var seq = node.argument.expressions;
	          var expr = seq[seq.length - 1];
	          seq[seq.length - 1] = t.unaryExpression("!", expr, true);
	          path.replaceWith(node.argument);
	        },

	        // !(a ? b : c) -> a ? !b : !c
	        function (path) {
	          var node = path.node;

	          if (node.operator !== "!") {
	            return;
	          }

	          if (!t.isConditional(node.argument)) {
	            return;
	          }

	          var cond = node.argument;
	          cond.alternate = t.unaryExpression("!", cond.alternate, true);
	          cond.consequent = t.unaryExpression("!", cond.consequent, true);
	          path.replaceWith(node.argument);
	        }]
	      },

	      LogicalExpression: {
	        exit: logicalExpression.simplifyPatterns
	      },

	      AssignmentExpression: assignmentExpression.simplify,

	      ConditionalExpression: {
	        enter: [
	        // !foo ? 'foo' : 'bar' -> foo ? 'bar' : 'foo'
	        // foo !== 'lol' ? 'foo' : 'bar' -> foo === 'lol' ? 'bar' : 'foo'
	        function flipIfOrConditional(path) {
	          var node = path.node;

	          if (!path.get("test").isLogicalExpression()) {
	            flipNegation(node);
	            return;
	          }

	          if (flipExpressions.shouldFlip(node.test)) {
	            node.test = flipExpressions.flip(node.test);
	            var _ref2 = [node.consequent, node.alternate];
	            node.alternate = _ref2[0];
	            node.consequent = _ref2[1];
	          }
	        }, conditionalExpression.simplifyPatterns],

	        exit: [
	        // a ? x = foo : b ? x = bar : x = baz;
	        // x = a ? foo : b ? bar : baz;
	        function (topPath) {
	          if (!topPath.parentPath.isExpressionStatement() && !topPath.parentPath.isSequenceExpression()) {
	            return;
	          }

	          var mutations = [];
	          var firstLeft = null;
	          var operator = null;
	          function visit(path) {
	            if (path.isConditionalExpression()) {
	              var _bail = visit(path.get("consequent"));
	              if (_bail) {
	                return true;
	              }
	              _bail = visit(path.get("alternate"));
	              return _bail;
	            }

	            if (operator == null) {
	              operator = path.node.operator;
	            } else if (path.node.operator !== operator) {
	              return true;
	            }

	            if (!path.isAssignmentExpression() || !(path.get("left").isIdentifier() || path.get("left").isMemberExpression())) {
	              return true;
	            }

	            var left = path.get("left").node;
	            if (firstLeft == null) {
	              firstLeft = left;
	            } else if (!t.isNodesEquivalent(left, firstLeft)) {
	              return true;
	            }

	            mutations.push(function () {
	              return path.replaceWith(path.get("right").node);
	            });
	          }

	          var bail = visit(topPath);
	          if (bail) {
	            return;
	          }

	          mutations.forEach(function (f) {
	            return f();
	          });
	          topPath.replaceWith(t.assignmentExpression(operator, firstLeft, topPath.node));
	        },

	        // bar ? void 0 : void 0
	        // (bar, void 0)
	        // TODO: turn this into general equiv check
	        function (path) {
	          var node = path.node;

	          if (isVoid0(node.consequent) && isVoid0(node.alternate)) {
	            path.replaceWith(t.sequenceExpression([path.node.test, VOID_0]));
	          }
	        },

	        // bar ? void 0 : foo ? void 0 : <etc>
	        // bar || foo : void 0
	        // TODO: turn this into general equiv check
	        function (path) {
	          var node = path.node;

	          if (node[condExprSeen] || !isVoid0(node.consequent)) {
	            return;
	          }

	          node[condExprSeen] = true;

	          var tests = [node.test];
	          var mutations = [];
	          var alt = void 0;

	          var _loop = function _loop(next) {
	            next.node[condExprSeen] = true;
	            alt = next.node.alternate;

	            if (isVoid0(next.node.consequent)) {
	              tests.push(next.node.test);
	              mutations.push(function () {
	                return next.remove();
	              });
	            } else {
	              alt = next.node;
	              return "break";
	            }
	          };

	          for (var next = path.get("alternate"); next.isConditionalExpression(); next = next.get("alternate")) {
	            var _ret = _loop(next);

	            if (_ret === "break") break;
	          }

	          if (tests.length === 1) {
	            return;
	          }

	          var test = tests.reduce(function (expr, curTest) {
	            return t.logicalExpression("||", expr, curTest);
	          });

	          path.replaceWith(t.conditionalExpression(test, VOID_0, alt));
	        }]
	      },

	      // concat
	      VariableDeclaration: {
	        enter: [
	        // Put vars with no init at the top.
	        function (path) {
	          var node = path.node;

	          if (node.declarations.length < 2) {
	            return;
	          }

	          var inits = [];
	          var empty = [];
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = node.declarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var decl = _step.value;

	              if (!decl.init) {
	                empty.push(decl);
	              } else {
	                inits.push(decl);
	              }
	            }

	            // This is based on exprimintation but there is a significant
	            // imrpovement when we place empty vars at the top in smaller
	            // files. Whereas it hurts in larger files.
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

	          if (this.fitsInSlidingWindow) {
	            node.declarations = empty.concat(inits);
	          } else {
	            node.declarations = inits.concat(empty);
	          }
	        }]
	      },

	      Function: {
	        exit: function exit(path) {
	          earlyReturnTransform(path);

	          if (!path.node[shouldRevisit]) {
	            return;
	          }

	          delete path.node[shouldRevisit];
	          path.visit();
	        }
	      },

	      For: {
	        enter: earlyContinueTransform,
	        exit: earlyContinueTransform
	      },

	      ForStatement: {
	        // Merge previous expressions in the init part of the for.
	        enter: function enter(path) {
	          var node = path.node;

	          if (!path.inList || node.init && !t.isExpression(node.init)) {
	            return;
	          }

	          var prev = path.getSibling(path.key - 1);
	          var consumed = false;
	          if (prev.isVariableDeclaration()) {
	            var referencedOutsideLoop = false;

	            // we don't care if vars are referenced outside the loop as they are fn scope
	            if (prev.node.kind === "let" || prev.node.kind === "const") {
	              var ids = Object.keys(prev.getBindingIdentifiers());

	              idloop: for (var i = 0; i < ids.length; i++) {
	                var binding = prev.scope.bindings[ids[i]];
	                // TODO
	                // Temporary Fix
	                // if there is no binding, we assume it is referenced outside
	                // and deopt to avoid bugs
	                if (!binding) {
	                  referencedOutsideLoop = true;
	                  break idloop;
	                }
	                var refs = binding.referencePaths;
	                for (var j = 0; j < refs.length; j++) {
	                  if (!isAncestor(path, refs[j])) {
	                    referencedOutsideLoop = true;
	                    break idloop;
	                  }
	                }
	              }
	            }

	            if (!node.init && !referencedOutsideLoop) {
	              node.init = prev.node;
	              consumed = true;
	            }
	          } else if (prev.isExpressionStatement()) {
	            var expr = prev.node.expression;
	            if (node.init) {
	              if (t.isSequenceExpression(expr)) {
	                expr.expressions.push(node.init);
	                node.init = expr;
	              } else {
	                node.init = t.sequenceExpression([expr, node.init]);
	              }
	            } else {
	              node.init = expr;
	            }
	            consumed = true;
	          }
	          if (consumed) {
	            prev.remove();
	          }
	        },
	        exit: function exit(path) {
	          var node = path.node;

	          if (!node.test) {
	            return;
	          }

	          if (!path.get("body").isBlockStatement()) {
	            var bodyNode = path.get("body").node;
	            if (!t.isIfStatement(bodyNode)) {
	              return;
	            }

	            if (t.isBreakStatement(bodyNode.consequent, { label: null })) {
	              node.test = t.logicalExpression("&&", node.test, t.unaryExpression("!", bodyNode.test, true));
	              node.body = bodyNode.alternate || t.emptyStatement();
	              return;
	            }

	            if (t.isBreakStatement(bodyNode.alternate, { label: null })) {
	              node.test = t.logicalExpression("&&", node.test, bodyNode.test);
	              node.body = bodyNode.consequent || t.emptyStatement();
	              return;
	            }

	            return;
	          }

	          var statements = node.body.body;
	          var exprs = [];
	          var ifStatement = null;
	          var breakAt = null;
	          var i = 0;
	          for (var statement; statement = statements[i]; i++) {
	            if (t.isIfStatement(statement)) {
	              if (t.isBreakStatement(statement.consequent, { label: null })) {
	                ifStatement = statement;
	                breakAt = "consequent";
	              } else if (t.isBreakStatement(statement.alternate, { label: null })) {
	                ifStatement = statement;
	                breakAt = "alternate";
	              }
	              break;
	            }

	            // A statement appears before the break statement then bail.
	            if (!t.isExpressionStatement(statement)) {
	              return;
	            }

	            exprs.push(statement.expression);
	          }

	          if (!ifStatement) {
	            return;
	          }

	          var rest = [];

	          if (breakAt === "consequent") {
	            if (t.isBlockStatement(ifStatement.alternate)) {
	              rest.push.apply(rest, _toConsumableArray(ifStatement.alternate.body));
	            } else if (ifStatement.alternate) {
	              rest.push(ifStatement.alternate);
	            }
	          } else {
	            if (t.isBlockStatement(ifStatement.consequent)) {
	              rest.push.apply(rest, _toConsumableArray(ifStatement.consequent.body));
	            } else if (ifStatement.consequent) {
	              rest.push(ifStatement.consequent);
	            }
	          }

	          rest.push.apply(rest, _toConsumableArray(statements.slice(i + 1)));

	          var test = breakAt === "consequent" ? t.unaryExpression("!", ifStatement.test, true) : ifStatement.test;
	          var expr = void 0;
	          if (exprs.length === 1) {
	            expr = t.sequenceExpression([exprs[0], test]);
	          } else if (exprs.length) {
	            exprs.push(test);
	            expr = t.sequenceExpression(exprs);
	          } else {
	            expr = test;
	          }

	          node.test = t.logicalExpression("&&", node.test, expr);
	          if (rest.length === 1) {
	            node.body = rest[0];
	          } else if (rest.length) {
	            node.body = t.blockStatement(rest);
	          } else {
	            node.body = t.emptyStatement();
	          }
	        }
	      },

	      Program: function Program(path) {
	        // An approximation of the resultant gzipped code after minification
	        this.fitsInSlidingWindow = path.getSource().length / 10 < 33000;

	        var node = path.node;

	        var statements = toMultipleSequenceExpressions(node.body);
	        if (!statements.length) {
	          return;
	        }
	        node.body = statements;

	        // this additional traversal is horrible but it's done to fix
	        // https://github.com/babel/minify/issues/323
	        // in which type annotation somehow gets messed up
	        // during sequence expression transformation
	        path.traverse({
	          Identifier: function Identifier(path) {
	            path.getTypeAnnotation();
	          }
	        });
	      },


	      BlockStatement: {
	        enter: function enter(path) {
	          var node = path.node,
	              parent = path.parent;

	          var top = [];
	          var bottom = [];

	          for (var i = 0; i < node.body.length; i++) {
	            var bodyNode = node.body[i];
	            if (t.isFunctionDeclaration(bodyNode)) {
	              top.push(bodyNode);
	            } else {
	              bottom.push(bodyNode);
	            }
	          }

	          var statements = top.concat(toMultipleSequenceExpressions(bottom));

	          if (!statements.length) {
	            return;
	          }

	          if (statements.length > 1 || needsBlock(node, parent) || node.directives) {
	            node.body = statements;
	            return;
	          }

	          if (statements.length) {
	            path.replaceWith(statements[0]);
	            return;
	          }
	        },
	        exit: function exit(path) {
	          var node = path.node,
	              parent = path.parent;

	          if (t.isArrowFunctionExpression(parent) && node.body.length === 1 && t.isReturnStatement(node.body[0]) && node.body[0].argument !== null) {
	            path.replaceWith(node.body[0].argument);
	            return;
	          }

	          if (needsBlock(node, parent)) {
	            return;
	          }

	          if (node.body.length === 1) {
	            path.get("body")[0].inList = false;
	            path.replaceWith(node.body[0]);
	            return;
	          }

	          if (node.body.length === 0) {
	            path.replaceWith(t.emptyStatement());
	            return;
	          }

	          // Check if oppurtinties to merge statements are available.
	          var statements = node.body;
	          if (!statements.length) {
	            return;
	          }

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = statements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var statement = _step2.value;

	              if (!t.isExpressionStatement(statement)) {
	                return;
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

	          path.visit();
	        }
	      },

	      ThrowStatement: createPrevExpressionEater("throw"),

	      // Try to merge previous statements into a sequence
	      ReturnStatement: {
	        enter: [createPrevExpressionEater("return"),

	        // Remove return if last statement with no argument.
	        // Replace return with `void` argument with argument.
	        function (path) {
	          var node = path.node;

	          if (!path.parentPath.parentPath.isFunction() || path.getSibling(path.key + 1).node) {
	            return;
	          }

	          if (!node.argument) {
	            path.remove();
	            return;
	          }

	          if (t.isUnaryExpression(node.argument, { operator: "void" })) {
	            path.replaceWith(node.argument.argument);
	          }
	        }]
	      },

	      // turn blocked ifs into single statements
	      IfStatement: {
	        exit: [ifStatement.mergeNestedIfs, ifStatement.simplify, ifStatement.switchConsequent, ifStatement.conditionalReturnToGuards, createPrevExpressionEater("if")]
	      },

	      WhileStatement: function WhileStatement(path) {
	        var node = path.node;

	        path.replaceWith(t.forStatement(null, node.test, null, node.body));
	      },


	      ForInStatement: createPrevExpressionEater("for-in"),

	      // Flatten sequence expressions.
	      SequenceExpression: {
	        exit: function exit(path) {
	          if (path.node[seqExprSeen]) {
	            return;
	          }

	          function flatten(node) {
	            node[seqExprSeen] = true;
	            var ret = [];
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	              for (var _iterator3 = node.expressions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var n = _step3.value;

	                if (t.isSequenceExpression(n)) {
	                  ret.push.apply(ret, _toConsumableArray(flatten(n)));
	                } else {
	                  ret.push(n);
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

	            return ret;
	          }

	          path.node.expressions = flatten(path.node);
	        }
	      },

	      SwitchCase: function SwitchCase(path) {
	        var node = path.node;

	        if (!node.consequent.length) {
	          return;
	        }

	        node.consequent = toMultipleSequenceExpressions(node.consequent);
	      },


	      SwitchStatement: {
	        exit: [
	        // Convert switch statements with all returns in their cases
	        // to return conditional.
	        function (path) {
	          var node = path.node;

	          // Need to be careful of side-effects.

	          if (!t.isIdentifier(node.discriminant)) {
	            return;
	          }

	          if (!node.cases.length) {
	            return;
	          }

	          var consTestPairs = [];
	          var fallThru = [];
	          var defaultRet = void 0;
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = node.cases[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var switchCase = _step4.value;

	              if (switchCase.consequent.length > 1) {
	                return;
	              }

	              var cons = switchCase.consequent[0];

	              // default case
	              if (!switchCase.test) {
	                if (!t.isReturnStatement(cons)) {
	                  return;
	                }
	                defaultRet = cons;
	                continue;
	              }

	              if (!switchCase.consequent.length) {
	                fallThru.push(switchCase.test);
	                continue;
	              }

	              // TODO: can we void it?
	              if (!t.isReturnStatement(cons)) {
	                return;
	              }

	              var test = t.binaryExpression("===", node.discriminant, switchCase.test);

	              if (fallThru.length && !defaultRet) {
	                test = fallThru.reduceRight(function (right, test) {
	                  return t.logicalExpression("||", t.binaryExpression("===", node.discriminant, test), right);
	                }, test);
	              }
	              fallThru = [];

	              consTestPairs.push([test, cons.argument || VOID_0]);
	            }

	            // Bail if we have any remaining fallthrough
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }

	          if (fallThru.length) {
	            return;
	          }

	          // We need the default to be there to make sure there is an oppurtinity
	          // not to return.
	          if (!defaultRet) {
	            if (path.inList) {
	              var nextPath = path.getSibling(path.key + 1);
	              if (nextPath.isReturnStatement()) {
	                defaultRet = nextPath.node;
	                nextPath.remove();
	              } else if (!nextPath.node && path.parentPath.parentPath.isFunction()) {
	                // If this is the last statement in a function we just fake a void return.
	                defaultRet = t.returnStatement(VOID_0);
	              } else {
	                return;
	              }
	            } else {
	              return;
	            }
	          }

	          var cond = consTestPairs.reduceRight(function (alt, _ref3) {
	            var _ref4 = _slicedToArray(_ref3, 2),
	                test = _ref4[0],
	                cons = _ref4[1];

	            return t.conditionalExpression(test, cons, alt);
	          }, defaultRet.argument || VOID_0);

	          path.replaceWith(t.returnStatement(cond));

	          // Maybe now we can merge with some previous switch statement.
	          if (path.inList) {
	            var prev = path.getSibling(path.key - 1);
	            if (prev.isSwitchStatement()) {
	              prev.visit();
	            }
	          }
	        },

	        // Convert switches into conditionals.
	        function (path) {
	          var node = path.node;

	          // Need to be careful of side-effects.

	          if (!t.isIdentifier(node.discriminant)) {
	            return;
	          }

	          if (!node.cases.length) {
	            return;
	          }

	          var exprTestPairs = [];
	          var fallThru = [];
	          var defaultExpr = void 0;
	          var _iteratorNormalCompletion5 = true;
	          var _didIteratorError5 = false;
	          var _iteratorError5 = undefined;

	          try {
	            for (var _iterator5 = node.cases[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	              var switchCase = _step5.value;

	              if (!switchCase.test) {
	                if (switchCase.consequent.length !== 1) {
	                  return;
	                }
	                if (!t.isExpressionStatement(switchCase.consequent[0])) {
	                  return;
	                }
	                defaultExpr = switchCase.consequent[0].expression;
	                continue;
	              }

	              if (!switchCase.consequent.length) {
	                fallThru.push(switchCase.test);
	                continue;
	              }

	              var _switchCase$consequen = _slicedToArray(switchCase.consequent, 2),
	                  cons = _switchCase$consequen[0],
	                  breakStatement = _switchCase$consequen[1];

	              if (switchCase === node.cases[node.cases.length - 1]) {
	                if (breakStatement && !t.isBreakStatement(breakStatement)) {
	                  return;
	                }
	              } else if (!t.isBreakStatement(breakStatement)) {
	                return;
	              }

	              if (!t.isExpressionStatement(cons) || switchCase.consequent.length > 2) {
	                return;
	              }

	              var test = t.binaryExpression("===", node.discriminant, switchCase.test);
	              if (fallThru.length && !defaultExpr) {
	                test = fallThru.reduceRight(function (right, test) {
	                  return t.logicalExpression("||", t.binaryExpression("===", node.discriminant, test), right);
	                }, test);
	              }
	              fallThru = [];

	              exprTestPairs.push([test, cons.expression]);
	            }
	          } catch (err) {
	            _didIteratorError5 = true;
	            _iteratorError5 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	              }
	            } finally {
	              if (_didIteratorError5) {
	                throw _iteratorError5;
	              }
	            }
	          }

	          if (fallThru.length) {
	            return;
	          }

	          var cond = exprTestPairs.reduceRight(function (alt, _ref5) {
	            var _ref6 = _slicedToArray(_ref5, 2),
	                test = _ref6[0],
	                cons = _ref6[1];

	            return t.conditionalExpression(test, cons, alt);
	          }, defaultExpr || VOID_0);

	          path.replaceWith(cond);
	        }, function (path) {
	          var node = path.node;

	          if (!node.cases.length) {
	            return;
	          }

	          var lastCase = path.get("cases")[node.cases.length - 1];
	          if (!lastCase.node.consequent.length) {
	            return;
	          }

	          var potentialBreak = lastCase.get("consequent")[lastCase.node.consequent.length - 1];
	          if (t.isBreakStatement(potentialBreak) && potentialBreak.node.label === null) {
	            potentialBreak.remove();
	          }
	        }, createPrevExpressionEater("switch")]
	      }
	    }
	  };

	  function flipNegation(node) {
	    if (!node.consequent || !node.alternate) {
	      return;
	    }

	    var test = node.test;
	    var flip = false;

	    if (t.isBinaryExpression(test)) {
	      if (test.operator === "!==") {
	        test.operator = "===";
	        flip = true;
	      }

	      if (test.operator === "!=") {
	        test.operator = "==";
	        flip = true;
	      }
	    }

	    if (t.isUnaryExpression(test, { operator: "!" })) {
	      node.test = test.argument;
	      flip = true;
	    }

	    if (flip) {
	      var consequent = node.consequent;
	      node.consequent = node.alternate;
	      node.alternate = consequent;
	    }
	  }

	  function needsBlock(node, parent) {
	    return t.isFunction(parent) && node === parent.body || t.isTryStatement(parent) || t.isCatchClause(parent) || t.isSwitchStatement(parent) || isSingleBlockScopeDeclaration(node) && (t.isIfStatement(parent) || t.isLoop(parent));
	  }

	  function isSingleBlockScopeDeclaration(block) {
	    return t.isBlockStatement(block) && block.body.length === 1 && (t.isVariableDeclaration(block.body[0], { kind: "let" }) || t.isVariableDeclaration(block.body[0], { kind: "const" }) || t.isFunctionDeclaration(block.body[0]));
	  }

	  function isVoid0(expr) {
	    return expr === VOID_0 || t.isUnaryExpression(expr, { operator: "void" }) && t.isNumericLiteral(expr.argument, { value: 0 });
	  }

	  function earlyReturnTransform(path) {
	    var node = path.node;

	    if (!t.isBlockStatement(node.body)) {
	      return;
	    }

	    for (var i = node.body.body.length; i >= 0; i--) {
	      var statement = node.body.body[i];
	      if (t.isIfStatement(statement) && !statement.alternate && t.isReturnStatement(statement.consequent) && !statement.consequent.argument) {
	        genericEarlyExitTransform(path.get("body").get("body")[i]);
	      }
	    }
	  }

	  function earlyContinueTransform(path) {
	    var node = path.node;

	    if (!t.isBlockStatement(node.body)) {
	      return;
	    }

	    for (var i = node.body.body.length; i >= 0; i--) {
	      var statement = node.body.body[i];
	      if (t.isIfStatement(statement) && !statement.alternate && t.isContinueStatement(statement.consequent) && !statement.consequent.label) {
	        genericEarlyExitTransform(path.get("body").get("body")[i]);
	      }
	    }

	    // We may have reduced the body to a single statement.
	    if (node.body.body.length === 1 && !needsBlock(node.body, node)) {
	      path.get("body").replaceWith(node.body.body[0]);
	    }
	  }

	  function genericEarlyExitTransform(path) {
	    var node = path.node;

	    var statements = path.parentPath.get(path.listKey).slice(path.key + 1).filter(function (stmt) {
	      return !stmt.isFunctionDeclaration();
	    });

	    // deopt for any block scoped bindings
	    // issue#399
	    var deopt = !statements.every(function (stmt) {
	      if (!(stmt.isVariableDeclaration({ kind: "let" }) || stmt.isVariableDeclaration({ kind: "const" }))) {
	        return true;
	      }
	      var ids = Object.keys(stmt.getBindingIdentifiers());
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;

	      try {
	        for (var _iterator6 = ids[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var id = _step6.value;

	          var binding = path.scope.getBinding(id);

	          // TODO
	          // Temporary Fix
	          // if there is no binding, we assume it is referenced outside
	          // and deopt to avoid bugs
	          if (!binding) {
	            return false;
	          }

	          var refs = [].concat(_toConsumableArray(binding.referencePaths), _toConsumableArray(binding.constantViolations));
	          var _iteratorNormalCompletion7 = true;
	          var _didIteratorError7 = false;
	          var _iteratorError7 = undefined;

	          try {
	            for (var _iterator7 = refs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	              var ref = _step7.value;

	              if (!ref.isIdentifier()) return false;
	              var fnParent = ref.getFunctionParent();

	              // TODO
	              // Usage of scopes and bindings in simplify plugin results in
	              // undefined bindings because scope changes are not updated in the
	              // scope tree. So, we deopt whenever we encounter one such issue
	              // and not perform the transformation
	              if (!fnParent) {
	                return false;
	              }
	              if (fnParent.scope !== path.scope) return false;
	            }
	          } catch (err) {
	            _didIteratorError7 = true;
	            _iteratorError7 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                _iterator7.return();
	              }
	            } finally {
	              if (_didIteratorError7) {
	                throw _iteratorError7;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }

	      return true;
	    });

	    if (deopt) {
	      path.visit();
	      return false;
	    }

	    if (!statements.length) {
	      path.replaceWith(t.expressionStatement(node.test));
	      return;
	    }

	    var test = node.test;
	    if (t.isBinaryExpression(test) && test.operator === "!==") {
	      test.operator = "===";
	    } else if (t.isBinaryExpression(test) && test.operator === "!=") {
	      test.operator = "==";
	    } else if (t.isUnaryExpression(test, { operator: "!" })) {
	      node.test = test.argument;
	    } else {
	      node.test = t.unaryExpression("!", node.test, true);
	    }

	    path.get("consequent").replaceWith(t.blockStatement(statements.map(function (stmt) {
	      return t.clone(stmt.node);
	    })));

	    var l = statements.length;
	    while (l-- > 0) {
	      if (!statements[l].isFunctionDeclaration()) {
	        path.getSibling(path.key + 1).remove();
	      }
	    }

	    // this should take care of removing the block
	    path.visit();
	  }

	  function createPrevExpressionEater(keyword) {
	    var key = void 0;
	    switch (keyword) {
	      case "switch":
	        key = "discriminant";
	        break;
	      case "throw":
	      case "return":
	        key = "argument";
	        break;
	      case "if":
	        key = "test";
	        break;
	      case "for-in":
	        key = "right";
	        break;
	    }

	    return function (path) {
	      if (!path.inList) {
	        return;
	      }

	      var node = path.node;

	      var prev = path.getSibling(path.key - 1);
	      if (!prev.isExpressionStatement()) {
	        return;
	      }

	      var seq = prev.node.expression;
	      if (node[key]) {
	        if (t.isSequenceExpression(seq)) {
	          seq.expressions.push(node[key]);
	        } else {
	          seq = t.sequenceExpression([seq, node[key]]);
	        }
	      } else {
	        if (t.isSequenceExpression(seq)) {
	          var lastExpr = seq.expressions[seq.expressions.length - 1];
	          seq.expressions[seq.expressions.length - 1] = t.unaryExpression("void", lastExpr, true);
	        } else {
	          seq = t.unaryExpression("void", seq, true);
	        }
	      }

	      if (seq) {
	        node[key] = seq;
	        prev.remove();

	        // Since we were able to merge some stuff it's possible that this has opened
	        // oppurtinties for other transforms to happen.
	        // TODO: Look into changing the traversal order from bottom to up to avoid
	        // having to revisit things.
	        if (path.parentPath.parent) {
	          path.parentPath.parent[shouldRevisit] = true;
	        }
	      }
	    };
	  }

	  // path1 -> path2
	  // is path1 an ancestor of path2
	  function isAncestor(path1, path2) {
	    return !!path2.findParent(function (parent) {
	      return parent === path1;
	    });
	  }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var h = __webpack_require__(2);
	var PatternMatch = __webpack_require__(9);

	module.exports = function (t) {
	  var OP_AND = function OP_AND(input) {
	    return input === "&&";
	  };
	  var OP_OR = function OP_OR(input) {
	    return input === "||";
	  };

	  function simplifyPatterns(path) {
	    // cache of path.evaluate()
	    var evaluateMemo = new Map();

	    var TRUTHY = function TRUTHY(input) {
	      // !NaN and !undefined are truthy
	      // separate check here as they are considered impure by babel
	      if (input.isUnaryExpression() && input.get("argument").isIdentifier()) {
	        if (input.node.argument.name === "NaN" || input.node.argument.name === "undefined") {
	          return true;
	        }
	      }
	      var evalResult = input.evaluate();
	      evaluateMemo.set(input, evalResult);
	      return evalResult.confident && input.isPure() && evalResult.value;
	    };

	    var FALSY = function FALSY(input) {
	      // NaN and undefined are falsy
	      // separate check here as they are considered impure by babel
	      if (input.isIdentifier()) {
	        if (input.node.name === "NaN" || input.node.name === "undefined") {
	          return true;
	        }
	      }
	      var evalResult = input.evaluate();
	      evaluateMemo.set(input, evalResult);
	      return evalResult.confident && input.isPure() && !evalResult.value;
	    };

	    var _h$typeSymbols = h.typeSymbols(t),
	        EX = _h$typeSymbols.Expression;

	    // Convention:
	    // [left, operator, right, handler(leftNode, rightNode)]


	    var matcher = new PatternMatch([[TRUTHY, OP_AND, EX, function (l, r) {
	      return r;
	    }], [FALSY, OP_AND, EX, function (l) {
	      return l;
	    }], [TRUTHY, OP_OR, EX, function (l) {
	      return l;
	    }], [FALSY, OP_OR, EX, function (l, r) {
	      return r;
	    }]]);

	    var left = path.get("left");
	    var right = path.get("right");
	    var operator = path.node.operator;

	    var result = matcher.match([left, operator, right], h.isPatternMatchesPath(t));

	    if (result.match) {
	      // here we are sure that left.evaluate is always confident becuase
	      // it satisfied one of TRUTHY/FALSY paths
	      var value = void 0;
	      if (evaluateMemo.has(left)) {
	        value = evaluateMemo.get(left).value;
	      } else {
	        value = left.evaluate().value;
	      }
	      path.replaceWith(result.value(t.valueToNode(value), right.node));
	    }
	  }

	  return {
	    simplifyPatterns: simplifyPatterns
	  };
	};

/***/ }),
/* 50 */
[91, 5],
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Collapser = __webpack_require__(1);

	var ArrayCollapser = function (_Collapser) {
	  _inherits(ArrayCollapser, _Collapser);

	  function ArrayCollapser() {
	    _classCallCheck(this, ArrayCollapser);

	    return _possibleConstructorReturn(this, (ArrayCollapser.__proto__ || Object.getPrototypeOf(ArrayCollapser)).apply(this, arguments));
	  }

	  _createClass(ArrayCollapser, [{
	    key: "isInitTypeValid",
	    value: function isInitTypeValid(init) {
	      return init.isArrayExpression();
	    }
	  }, {
	    key: "isExpressionTypeValid",
	    value: function isExpressionTypeValid(expr) {
	      return expr.isCallExpression();
	    }
	  }, {
	    key: "getExpressionChecker",
	    value: function getExpressionChecker(objName, checkReference) {
	      return function (expr) {
	        // checks expr is of form:
	        // foo.push(rval1, ...nrvals)

	        var callee = expr.get("callee");

	        if (!callee.isMemberExpression()) {
	          return false;
	        }

	        var obj = callee.get("object"),
	            prop = callee.get("property");
	        if (!obj.isIdentifier() || obj.node.name !== objName || !prop.isIdentifier() || prop.node.name !== "push") {
	          return false;
	        }

	        var args = expr.get("arguments");
	        if (args.some(checkReference)) {
	          return false;
	        }
	        return true;
	      };
	    }
	  }, {
	    key: "extractAssignment",
	    value: function extractAssignment(expr) {
	      return expr.node.arguments;
	    }
	  }, {
	    key: "addSuccessfully",
	    value: function addSuccessfully(t, args, init) {
	      args.map(function (a) {
	        return init.elements.push(a);
	      });
	      return true;
	    }
	  }]);

	  return ArrayCollapser;
	}(Collapser);

	module.exports = ArrayCollapser;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Collapser = __webpack_require__(1);

	var ArrayPropertyCollapser = function (_Collapser) {
	  _inherits(ArrayPropertyCollapser, _Collapser);

	  function ArrayPropertyCollapser() {
	    _classCallCheck(this, ArrayPropertyCollapser);

	    return _possibleConstructorReturn(this, (ArrayPropertyCollapser.__proto__ || Object.getPrototypeOf(ArrayPropertyCollapser)).apply(this, arguments));
	  }

	  _createClass(ArrayPropertyCollapser, [{
	    key: "isInitTypeValid",
	    value: function isInitTypeValid(init) {
	      return init.isArrayExpression();
	    }
	  }, {
	    key: "isExpressionTypeValid",
	    value: function isExpressionTypeValid(expr) {
	      return expr.isAssignmentExpression();
	    }
	  }, {
	    key: "getExpressionChecker",
	    value: function getExpressionChecker(objName, checkReference) {
	      return function (expr) {
	        // checks expr is of form:
	        // foo[num] = rval

	        var left = expr.get("left");

	        if (!left.isMemberExpression()) {
	          return false;
	        }

	        var obj = left.get("object"),
	            prop = left.get("property");
	        if (!obj.isIdentifier() || obj.node.name !== objName) {
	          return false;
	        }

	        var checkIndex = function checkIndex(num) {
	          return Number.isInteger(num) && num >= 0;
	        };

	        if (!(prop.isNumericLiteral() || prop.isStringLiteral()) || !checkIndex(Number(prop.node.value))) {
	          return false;
	        }

	        var right = expr.get("right");
	        if (checkReference(right)) {
	          return false;
	        }

	        return true;
	      };
	    }
	  }, {
	    key: "extractAssignment",
	    value: function extractAssignment(expr) {
	      return [expr.node.left.property.value, expr.get("right")];
	    }
	  }, {
	    key: "addSuccessfully",
	    value: function addSuccessfully(t, _ref, init) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          index = _ref2[0],
	          rval = _ref2[1];

	      var elements = init.elements;
	      for (var i = elements.length; i <= index; i++) {
	        elements.push(null);
	      }
	      if (elements[index] !== null) {
	        return false;
	      }
	      elements[index] = rval.node;
	      return true;
	    }
	  }, {
	    key: "isSizeSmaller",
	    value: function isSizeSmaller(_ref3) {
	      var newInit = _ref3.newInit,
	          oldInit = _ref3.oldInit,
	          varDecl = _ref3.varDecl,
	          assignments = _ref3.assignments,
	          statements = _ref3.statements;

	      var anyUndefined = function anyUndefined(args) {
	        return args.some(function (a) {
	          return a === undefined;
	        });
	      };

	      // We make an inexact calculation of how much space we save.
	      // It's inexact because we don't know how whitespaces will get minimized,
	      // and other factors.
	      if (anyUndefined([statements[statements.length - 1].node.end, varDecl.node.end])) {
	        return false;
	      }
	      var statementsLength = statements[statements.length - 1].node.end - varDecl.node.end;

	      // Approx. formula of the change in `init`'s length =
	      // (# commas added) + (size of all the new rvals added), where
	      // # commas added = (difference between the lengths of the old and new arrays)

	      var numCommaAdded = newInit.elements.length - oldInit.elements.length;
	      if (anyUndefined(assignments.map(function (_ref4) {
	        var _ref5 = _slicedToArray(_ref4, 2),
	            rval = _ref5[1];

	        return rval.node.end;
	      })) || anyUndefined(assignments.map(function (_ref6) {
	        var _ref7 = _slicedToArray(_ref6, 2),
	            rval = _ref7[1];

	        return rval.node.start;
	      }))) {
	        return false;
	      }
	      var sizeOfRvals = assignments.map(function (_ref8) {
	        var _ref9 = _slicedToArray(_ref8, 2),
	            rval = _ref9[1];

	        return rval.node.end - rval.node.start + 1;
	      }).reduce(function (a, b) {
	        return a + b;
	      }, 0); // add 1 for space in front // sum

	      return numCommaAdded + sizeOfRvals < statementsLength;
	    }
	  }]);

	  return ArrayPropertyCollapser;
	}(Collapser);

	module.exports = ArrayPropertyCollapser;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	var COLLAPSERS = [__webpack_require__(54), __webpack_require__(51), __webpack_require__(52), __webpack_require__(55)].map(function (Collapser) {
	  return new Collapser();
	});

	function getFunctionParent(path, scopeParent) {
	  var parent = path.findParent(function (p) {
	    return p.isFunction();
	  });
	  // don"t traverse higher than the function the var is defined in.
	  return parent === scopeParent ? null : parent;
	}

	function getFunctionReferences(path, scopeParent) {
	  var references = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

	  for (var func = getFunctionParent(path, scopeParent); func; func = getFunctionParent(func, scopeParent)) {
	    var id = func.node.id;
	    var binding = id && func.scope.getBinding(id.name);

	    if (!binding) {
	      continue;
	    }

	    binding.referencePaths.forEach(function (path) {
	      if (!references.has(path)) {
	        references.add(path);
	        getFunctionReferences(path, scopeParent, references);
	      }
	    });
	  }
	  return references;
	}

	function getIdAndFunctionReferences(name, parent) {
	  // Returns false if there's an error. Otherwise returns a list of references.
	  var binding = parent.scope.getBinding(name);
	  if (!binding) {
	    return false;
	  }

	  var references = binding.referencePaths.reduce(function (references, ref) {
	    references.add(ref);
	    getFunctionReferences(ref, parent, references);
	    return references;
	  }, new Set());

	  return Array.from(references);
	}

	function validateTopLevel(path) {
	  // Ensures the structure is of the form (roughly):
	  // {
	  //   ...
	  //   var foo = expr;
	  //   ...
	  // }
	  // returns null if not of this form
	  // otherwise returns [foo as string, ?rval, index of the variable declaration]

	  var declarations = path.get("declarations");
	  if (declarations.length !== 1) {
	    return;
	  }

	  var declaration = declarations[0];
	  var id = declaration.get("id"),
	      init = declaration.get("init");
	  if (!id.isIdentifier()) {
	    return;
	  }

	  var parent = path.parentPath;
	  if (!parent.isBlockParent() || !parent.isScopable()) {
	    return;
	  }

	  var body = parent.get("body");
	  if (!Array.isArray(body)) {
	    return;
	  }
	  var startIndex = body.indexOf(path);
	  if (startIndex === -1) {
	    return;
	  }

	  return [id.node.name, init, startIndex];
	}

	function collectExpressions(path, isExprTypeValid) {
	  // input: ExprStatement => 'a | SequenceExpression
	  // SequenceExpression => 'a list
	  // Validates 'a is of the right type
	  // returns null if found inconsistency, else returns Array<"a>
	  if (path.isExpressionStatement()) {
	    var exprs = collectExpressions(path.get("expression"), isExprTypeValid);
	    return exprs !== null ? exprs : null;
	  }

	  if (path.isSequenceExpression()) {
	    var _exprs = path.get("expressions").map(function (p) {
	      return collectExpressions(p, isExprTypeValid);
	    });
	    if (_exprs.some(function (e) {
	      return e === null;
	    })) {
	      return null;
	    } else {
	      return _exprs.reduce(function (s, n) {
	        return s.concat(n);
	      }, []); // === Array.flatten
	    }
	  }

	  if (isExprTypeValid(path)) {
	    return [path];
	  }

	  return null;
	}

	function getContiguousStatementsAndExpressions(body, start, end, isExprTypeValid, checkExpr) {
	  var statements = [];
	  var allExprs = [];
	  for (var i = start; i < end; i++) {
	    var exprs = collectExpressions(body[i], isExprTypeValid);
	    if (exprs === null || !exprs.every(function (e) {
	      return checkExpr(e);
	    })) {
	      break;
	    }
	    statements.push(body[i]);
	    allExprs = allExprs.concat(exprs);
	  }
	  return [statements, allExprs];
	}

	function getReferenceChecker(references) {
	  // returns a function s.t. given an expr, returns true iff expr is an ancestor of a reference
	  return function (expr) {
	    return references.some(function (r) {
	      return r === expr || r.isDescendant(expr);
	    });
	  };
	}

	function tryUseCollapser(t, collapser, varDecl, topLevel, checkReference) {
	  // Returns true iff successfully used the collapser. Otherwise returns undefined.
	  var _topLevel = _slicedToArray(topLevel, 3),
	      name = _topLevel[0],
	      init = _topLevel[1],
	      startIndex = _topLevel[2];

	  var body = varDecl.parentPath.get("body");
	  if (!collapser.isInitTypeValid(init)) {
	    return;
	  }

	  var _getContiguousStateme = getContiguousStatementsAndExpressions(body, startIndex + 1, body.length, collapser.isExpressionTypeValid, collapser.getExpressionChecker(name, checkReference)),
	      _getContiguousStateme2 = _slicedToArray(_getContiguousStateme, 2),
	      statements = _getContiguousStateme2[0],
	      exprs = _getContiguousStateme2[1];

	  if (statements.length === 0) {
	    return;
	  }

	  var assignments = exprs.map(function (e) {
	    return collapser.extractAssignment(e);
	  });
	  var oldInit = init.node;
	  var newInit = t.cloneDeep(oldInit);
	  if (!assignments.every(function (assignment) {
	    return collapser.addSuccessfully(t, assignment, newInit);
	  })) {
	    return;
	  }

	  // some collapses may increase the size
	  if (!collapser.isSizeSmaller({
	    newInit: newInit,
	    oldInit: oldInit,
	    varDecl: varDecl,
	    assignments: assignments,
	    statements: statements
	  })) {
	    return;
	  }

	  init.replaceWith(newInit);
	  statements.forEach(function (s) {
	    return s.remove();
	  });
	  return true;
	}

	module.exports = function (_ref) {
	  var t = _ref.types;

	  return {
	    name: "transform-inline-consecutive-adds",
	    visitor: {
	      VariableDeclaration: function VariableDeclaration(varDecl) {
	        var topLevel = validateTopLevel(varDecl);
	        if (!topLevel) {
	          return;
	        }

	        var _topLevel2 = _slicedToArray(topLevel, 1),
	            name = _topLevel2[0];

	        var references = getIdAndFunctionReferences(name, varDecl.parentPath);
	        if (references === false) {
	          return;
	        }
	        var checkReference = getReferenceChecker(references);

	        if (COLLAPSERS.some(function (c) {
	          return tryUseCollapser(t, c, varDecl, topLevel, checkReference);
	        })) {
	          return;
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Collapser = __webpack_require__(1);

	var ObjectCollapser = function (_Collapser) {
	  _inherits(ObjectCollapser, _Collapser);

	  function ObjectCollapser() {
	    _classCallCheck(this, ObjectCollapser);

	    return _possibleConstructorReturn(this, (ObjectCollapser.__proto__ || Object.getPrototypeOf(ObjectCollapser)).apply(this, arguments));
	  }

	  _createClass(ObjectCollapser, [{
	    key: "isInitTypeValid",
	    value: function isInitTypeValid(init) {
	      return init.isObjectExpression();
	    }
	  }, {
	    key: "isExpressionTypeValid",
	    value: function isExpressionTypeValid(expr) {
	      return expr.isAssignmentExpression();
	    }
	  }, {
	    key: "getExpressionChecker",
	    value: function getExpressionChecker(objName, checkReference) {
	      return function (expr) {
	        // checks expr is of form:
	        // foo.a = rval | foo[a] = rval

	        var left = expr.get("left");
	        if (!left.isMemberExpression()) {
	          return false;
	        }

	        var obj = left.get("object"),
	            prop = left.get("property");
	        if (!obj.isIdentifier() || obj.node.name !== objName) {
	          return false;
	        }
	        if (!prop.isIdentifier() && checkReference(prop)) {
	          return false;
	        }
	        if (left.node.computed && !(prop.isStringLiteral() || prop.isNumericLiteral())) {
	          return false;
	        }

	        var right = expr.get("right");
	        if (checkReference(right)) {
	          return false;
	        }

	        return true;
	      };
	    }
	  }, {
	    key: "extractAssignment",
	    value: function extractAssignment(expr) {
	      return [expr.node.left.property, expr.node.right];
	    }
	  }, {
	    key: "addSuccessfully",
	    value: function addSuccessfully(t, _ref, init) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          left = _ref2[0],
	          right = _ref2[1];

	      init.properties.push(t.objectProperty(left, right));
	      return true;
	    }
	  }]);

	  return ObjectCollapser;
	}(Collapser);

	module.exports = ObjectCollapser;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Collapser = __webpack_require__(1);

	var SetCollapser = function (_Collapser) {
	  _inherits(SetCollapser, _Collapser);

	  function SetCollapser() {
	    _classCallCheck(this, SetCollapser);

	    return _possibleConstructorReturn(this, (SetCollapser.__proto__ || Object.getPrototypeOf(SetCollapser)).apply(this, arguments));
	  }

	  _createClass(SetCollapser, [{
	    key: "isInitTypeValid",
	    value: function isInitTypeValid(init) {
	      return init.isNewExpression() && init.get("callee").isIdentifier() && init.node.callee.name === "Set" && (
	      // other iterables might not be append-able
	      init.node.arguments.length === 0 || init.node.arguments.length === 1 && init.get("arguments")[0].isArrayExpression());
	    }
	  }, {
	    key: "isExpressionTypeValid",
	    value: function isExpressionTypeValid(expr) {
	      return expr.isCallExpression();
	    }
	  }, {
	    key: "getExpressionChecker",
	    value: function getExpressionChecker(objName, checkReference) {
	      return function (expr) {
	        // checks expr is of form:
	        // foo.add(rval)

	        var callee = expr.get("callee");

	        if (!callee.isMemberExpression()) {
	          return false;
	        }

	        var obj = callee.get("object"),
	            prop = callee.get("property");
	        if (!obj.isIdentifier() || obj.node.name !== objName || !prop.isIdentifier() || prop.node.name !== "add") {
	          return false;
	        }

	        var args = expr.get("arguments");
	        if (args.length !== 1) {
	          return false;
	        }
	        if (checkReference(args[0])) {
	          return false;
	        }
	        return true;
	      };
	    }
	  }, {
	    key: "extractAssignment",
	    value: function extractAssignment(expr) {
	      return expr.node.arguments[0];
	    }
	  }, {
	    key: "addSuccessfully",
	    value: function addSuccessfully(t, arg, init) {
	      if (init.arguments.length === 0) {
	        init.arguments.push(t.arrayExpression());
	      }
	      init.arguments[0].elements.push(arg);
	      return true;
	    }
	  }]);

	  return SetCollapser;
	}(Collapser);

	module.exports = SetCollapser;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*istanbul ignore next*/"use strict";

	exports.__esModule = true;

	exports.default = function ( /*istanbul ignore next*/_ref) {
	  /*istanbul ignore next*/var t = _ref.types;

	  return {
	    visitor: { /*istanbul ignore next*/
	      MemberExpression: function MemberExpression(path) {
	        if (path.get("object").matchesPattern("process.env")) {
	          var key = path.toComputedKey();
	          if (t.isStringLiteral(key)) {
	            path.replaceWith(t.valueToNode(process.env[key.value]));
	          }
	        }
	      }
	    }
	  };
	};

	/*istanbul ignore next*/module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(86)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";

	exports.__esModule = true;

	exports.default = function ( /*istanbul ignore next*/_ref) {
	  /*istanbul ignore next*/var t = _ref.types;

	  return {
	    visitor: { /*istanbul ignore next*/
	      MemberExpression: function MemberExpression(path) {
	        if (path.matchesPattern("process.env.NODE_ENV")) {
	          path.replaceWith(t.valueToNode(("production")));

	          if (path.parentPath.isBinaryExpression()) {
	            var evaluated = path.parentPath.evaluate();
	            if (evaluated.confident) {
	              path.parentPath.replaceWith(t.valueToNode(evaluated.value));
	            }
	          }
	        }
	      }
	    }
	  };
	};

	/*istanbul ignore next*/module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Original Source:
	 * https://github.com/shapesecurity/shift-codegen-js/blob/0d09bd8a/src/coderep.js#L122
	 *
	 * The following function is an exact copy of the original implementation
	 *
	 * LICENSE

	Copyright 2014 Shape Security, Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

	 */

	module.exports = function escapeStringLiteral(stringValue) {
	  var result = "";
	  var nSingle = 0,
	      nDouble = 0;
	  for (var i = 0, l = stringValue.length; i < l; ++i) {
	    var ch = stringValue[i];
	    if (ch === '"') {
	      ++nDouble;
	    } else if (ch === "'") {
	      ++nSingle;
	    }
	  }
	  var delim = nDouble > nSingle ? "'" : '"';
	  result += delim;
	  for (var _i = 0; _i < stringValue.length; _i++) {
	    var _ch = stringValue.charAt(_i);
	    switch (_ch) {
	      case delim:
	        result += "\\" + delim;
	        break;
	      case "\n":
	        result += "\\n";
	        break;
	      case "\r":
	        result += "\\r";
	        break;
	      case "\\":
	        result += "\\\\";
	        break;
	      case "\u2028":
	        result += "\\u2028";
	        break;
	      case "\u2029":
	        result += "\\u2029";
	        break;
	      default:
	        result += _ch;
	        break;
	    }
	  }
	  result += delim;
	  return result;
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _require = __webpack_require__(84),
	    keyword = _require.keyword;

	var escapeStringLiteral = __webpack_require__(58);

	module.exports = {
	  reduceStaticPropertyNameES5: reduceStaticPropertyNameES5
	};

	/**
	 *
	 * Original Source:
	 * https://github.com/shapesecurity/shift-codegen-js/blob/0d09bd8a/src/minimal-codegen.js#L635
	 *
	 * This implementation modifies the original source in the following ways
	 * + Check for ES5 Identifier name instead of ES6 Identifier name
	 * + Use Babel-Types & Babel's AST instead of ShiftAST
	 *
	 * LICENSE

	Copyright 2014 Shape Security, Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

	 */
	function reduceStaticPropertyNameES5(t, node) {
	  if (keyword.isIdentifierNameES5(node.value)) {
	    return t.Identifier(node.value);
	  }
	  var n = parseFloat(node.value);
	  if (n >= 0 && n.toString() === node.value) {
	    return t.NumericLiteral(n);
	  }
	  return t.Identifier(escapeStringLiteral(node.value));
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	function createRegExpLiteral(args, prettify, t) {
	  var evaluatedArgs = args.map(function (a) {
	    return a.evaluate();
	  });
	  if (!evaluatedArgs.every(function (a) {
	    return a.confident && typeof a.value === "string";
	  })) {
	    return;
	  }
	  var pattern = evaluatedArgs.length >= 1 && evaluatedArgs[0].value !== "" ? evaluatedArgs[0].value : "(?:)";
	  var flags = evaluatedArgs.length >= 2 ? evaluatedArgs[1].value : "";

	  pattern = new RegExp(pattern).source;
	  if (prettify) {
	    pattern = pattern.replace(/\n/g, "\\n").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/[\b]/g, "[\\b]").replace(/\v/g, "\\v").replace(/\f/g, "\\f").replace(/\r/g, "\\r");
	  }
	  return t.regExpLiteral(pattern, flags);
	}

	function maybeReplaceWithRegExpLiteral(path, t) {
	  if (!t.isIdentifier(path.node.callee, { name: "RegExp" })) {
	    return;
	  }
	  var regExpLiteral = createRegExpLiteral(path.get("arguments"), true, t);
	  if (regExpLiteral) {
	    path.replaceWith(regExpLiteral);
	  }
	}

	module.exports = function (_ref) {
	  var t = _ref.types;

	  return {
	    name: "transform-regexp-constructors",
	    visitor: {
	      NewExpression: function NewExpression(path) {
	        maybeReplaceWithRegExpLiteral(path, t);
	      },
	      CallExpression: function CallExpression(path) {
	        // equivalent to `new RegExp()` according to §21.2.3
	        maybeReplaceWithRegExpLiteral(path, t);
	      }
	    }
	  };
	};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	function isPureAndUndefined(rval) {
	  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { hasBinding: function hasBinding() {
	      return false;
	    } };

	  if (rval.isIdentifier() && rval.node.name === "undefined") {
	    // deopt right away if undefined is a local binding
	    if (scope.hasBinding(rval.node.name, true /* no globals */)) {
	      return false;
	    }
	    return true;
	  }

	  if (!rval.isPure()) {
	    return false;
	  }
	  var evaluation = rval.evaluate();
	  return evaluation.confident === true && evaluation.value === undefined;
	}

	function getLoopParent(path, scopeParent) {
	  var parent = path.findParent(function (p) {
	    return p.isLoop() || p === scopeParent;
	  });
	  // don't traverse higher than the function the var is defined in.
	  return parent === scopeParent ? null : parent;
	}

	function getFunctionParent(path, scopeParent) {
	  var parent = path.findParent(function (p) {
	    return p.isFunction();
	  });
	  // don't traverse higher than the function the var is defined in.
	  return parent === scopeParent ? null : parent;
	}

	function getFunctionReferences(path, scopeParent) {
	  var references = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

	  for (var func = getFunctionParent(path, scopeParent); func; func = getFunctionParent(func, scopeParent)) {
	    var id = func.node.id;
	    var binding = id && func.scope.getBinding(id.name);

	    if (!binding) {
	      continue;
	    }

	    binding.referencePaths.forEach(function (path) {
	      if (!references.has(path)) {
	        references.add(path);
	        getFunctionReferences(path, scopeParent, references);
	      }
	    });
	  }
	  return references;
	}

	function hasViolation(declarator, scope, start) {
	  var binding = scope.getBinding(declarator.node.id.name);
	  if (!binding) {
	    return true;
	  }

	  var scopeParent = declarator.getFunctionParent();

	  var violation = binding.constantViolations.some(function (v) {
	    // return 'true' if we cannot guarantee the violation references
	    // the initialized identifier after
	    var violationStart = v.node.start;
	    if (violationStart === undefined || violationStart < start) {
	      return true;
	    }

	    var references = getFunctionReferences(v, scopeParent);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = references[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var ref = _step.value;

	        if (ref.node.start === undefined || ref.node.start < start) {
	          return true;
	        }
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

	    for (var loop = getLoopParent(declarator, scopeParent); loop; loop = getLoopParent(loop, scopeParent)) {
	      if (loop.node.end === undefined || loop.node.end > violationStart) {
	        return true;
	      }
	    }
	  });

	  return violation;
	}

	module.exports = function () {
	  return {
	    name: "transform-remove-undefined",
	    visitor: {
	      SequenceExpression: function SequenceExpression(path) {
	        var expressions = path.get("expressions");

	        for (var i = 0; i < expressions.length; i++) {
	          var expr = expressions[i];
	          if (!isPureAndUndefined(expr, path.scope)) continue;

	          // last value
	          if (i === expressions.length - 1) {
	            if (path.parentPath.isExpressionStatement()) {
	              expr.remove();
	            }
	          } else {
	            expr.remove();
	          }
	        }
	      },
	      ReturnStatement: function ReturnStatement(path) {
	        if (path.node.argument !== null) {
	          if (isPureAndUndefined(path.get("argument"), path.scope)) {
	            path.node.argument = null;
	          }
	        }
	      },
	      VariableDeclaration: function VariableDeclaration(path) {
	        switch (path.node.kind) {
	          case "const":
	            break;
	          case "let":
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	              for (var _iterator2 = path.get("declarations")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var declarator = _step2.value;

	                if (isPureAndUndefined(declarator.get("init"))) {
	                  declarator.node.init = null;
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

	            break;
	          case "var":
	            var start = path.node.start;
	            if (start === undefined) {
	              // This is common for plugin-generated nodes
	              break;
	            }
	            var scope = path.scope;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	              for (var _iterator3 = path.get("declarations")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var _declarator = _step3.value;

	                if (isPureAndUndefined(_declarator.get("init")) && !hasViolation(_declarator, scope, start)) {
	                  _declarator.node.init = null;
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

	            break;
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var isPlainObject = __webpack_require__(85);

	// the flat plugin map
	// This is to prevent dynamic requires - require('babel-plugin-' + name);
	// as it suffers during bundling of this code with webpack/browserify
	// sorted by option name
	// prettier-ignore
	var PLUGINS = [
	// [optionname,         plugin,                                                          default],
	["booleans", __webpack_require__(12), true], ["builtIns", __webpack_require__(27), true], ["consecutiveAdds", __webpack_require__(53), true], ["deadcode", __webpack_require__(67), true], ["evaluate", __webpack_require__(66), true], ["flipComparisons", __webpack_require__(69), true], ["guards", __webpack_require__(70), true], ["infinity", __webpack_require__(71), true], ["mangle", __webpack_require__(76), true], ["memberExpressions", __webpack_require__(10), true], ["mergeVars", __webpack_require__(11), true], ["numericLiterals", __webpack_require__(43), true], ["propertyLiterals", __webpack_require__(13), true], ["regexpConstructors", __webpack_require__(60), true], ["removeConsole", __webpack_require__(14), false], ["removeDebugger", __webpack_require__(15), false], ["removeUndefined", __webpack_require__(61), true], ["replace", __webpack_require__(78), true], ["simplify", __webpack_require__(79), true], ["simplifyComparisons", __webpack_require__(16), true], ["typeConstructors", __webpack_require__(81), true], ["undefinedToVoid", __webpack_require__(17), true]];

	var PROXIES = {
	  keepFnName: ["mangle", "deadcode"],
	  keepClassName: ["mangle", "deadcode"]
	};

	module.exports = preset;

	function preset(context) {
	  var _opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var opts = isPlainObject(_opts) ? _opts : {};

	  // validate options
	  var validOptions = [].concat(_toConsumableArray(PLUGINS.map(function (p) {
	    return p[0];
	  })), _toConsumableArray(Object.keys(PROXIES)));
	  for (var name in opts) {
	    if (validOptions.indexOf(name) < 0) {
	      throw new Error("Invalid option \"" + name + "\"");
	    }
	  }

	  // build a plugins map from the plugin table above
	  var pluginsMap = PLUGINS.reduce(function (acc, _ref) {
	    var _ref2 = _slicedToArray(_ref, 3),
	        name = _ref2[0],
	        plugin = _ref2[1],
	        defaultValue = _ref2[2];

	    return Object.assign(acc, _defineProperty({}, name, {
	      plugin: plugin,
	      options: null,
	      enabled: defaultValue
	    }));
	  }, {});

	  // handle plugins and their options
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = PLUGINS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _ref3 = _step.value;

	      var _ref4 = _slicedToArray(_ref3, 1);

	      var _name = _ref4[0];

	      if (isPlainObject(opts[_name])) {
	        pluginsMap[_name].options = opts[_name];
	      } else if (opts[_name] !== void 0) {
	        pluginsMap[_name].enabled = !!opts[_name];
	      }
	    }

	    // handle proxies
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

	  for (var proxyname in PROXIES) {
	    if (opts[proxyname] !== void 0) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = PROXIES[proxyname][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var to = _step2.value;

	          if (!pluginsMap[to].options) {
	            pluginsMap[to].options = {};
	          }
	          if (!hop(pluginsMap[to].options, proxyname)) {
	            pluginsMap[to].options[proxyname] = opts[proxyname];
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
	    }
	  }

	  // get the array of plugins
	  var plugins = Object.keys(pluginsMap).map(function (name) {
	    return pluginsMap[name];
	  }).filter(function (plugin) {
	    return plugin.enabled;
	  }).map(function (plugin) {
	    return plugin.options ? [plugin.plugin, plugin.options] : plugin.plugin;
	  });

	  return {
	    minified: true,
	    comments: false,
	    presets: [{ plugins: plugins }],
	    passPerPreset: true
	  };
	}

	function hop(o, key) {
	  return Object.prototype.hasOwnProperty.call(o, key);
	}

/***/ }),
/* 63 */
28,
/* 64 */
25,
/* 65 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (t) {
	  return function toMultipleSequenceExpressions(statements) {
	    var retStatements = [];
	    var bailed = void 0;
	    do {
	      var res = convert(statements);
	      bailed = res.bailed;
	      var seq = res.seq,
	          bailedAtIndex = res.bailedAtIndex;

	      if (seq) {
	        retStatements.push(t.expressionStatement(seq));
	      }
	      if (bailed && statements[bailedAtIndex]) {
	        retStatements.push(statements[bailedAtIndex]);
	      }
	      if (bailed) {
	        statements = statements.slice(bailedAtIndex + 1);
	        if (!statements.length) {
	          bailed = false;
	        }
	      }
	    } while (bailed);

	    return retStatements;

	    function convert(nodes) {
	      var exprs = [];

	      var _loop = function _loop(i) {
	        var bail = function bail() {
	          var seq = void 0;
	          if (exprs.length === 1) {
	            seq = exprs[0];
	          } else if (exprs.length) {
	            seq = t.sequenceExpression(exprs);
	          }

	          return {
	            seq: seq,
	            bailed: true,
	            bailedAtIndex: i
	          };
	        };

	        var node = nodes[i];
	        if (t.isExpression(node)) {
	          exprs.push(node);
	        } else if (t.isExpressionStatement(node)) {
	          exprs.push(node.expression);
	        } else if (t.isIfStatement(node)) {
	          var consequent = void 0;
	          if (node.consequent) {
	            var _res = convert([node.consequent]);
	            if (_res.bailed) {
	              return {
	                v: bail()
	              };
	            }
	            consequent = _res.seq;
	          }
	          var alternate = void 0;
	          if (node.alternate) {
	            var _res2 = convert([node.alternate]);
	            if (_res2.bailed) {
	              return {
	                v: bail()
	              };
	            }
	            alternate = _res2.seq;
	          }

	          if (!alternate && !consequent) {
	            exprs.push(node.test);
	          } else if (!alternate) {
	            exprs.push(t.logicalExpression("&&", node.test, consequent));
	          } else if (!consequent) {
	            exprs.push(t.logicalExpression("||", node.test, alternate));
	          } else {
	            exprs.push(t.conditionalExpression(node.test, consequent, alternate));
	          }
	        } else if (t.isBlockStatement(node)) {
	          var _res3 = convert(node.body);
	          if (_res3.bailed) {
	            return {
	              v: bail()
	            };
	          }
	          if (_res3.seq) {
	            exprs.push(_res3.seq);
	          }
	        } else {
	          return {
	            v: bail()
	          };
	        }
	      };

	      for (var i = 0; i < nodes.length; i++) {
	        var _ret = _loop(i);

	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }

	      var seq = void 0;
	      if (exprs.length === 1) {
	        seq = exprs[0];
	      } else if (exprs.length) {
	        seq = t.sequenceExpression(exprs);
	      }

	      /* eslint-disable no-self-assign */
	      seq = seq;
	      return { seq: seq };
	    }
	  };
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var evaluate = __webpack_require__(63);

	var _require = __webpack_require__(21),
	    FALLBACK_HANDLER = _require.FALLBACK_HANDLER;

	function getName(member) {
	  if (member.computed) {
	    switch (member.property.type) {
	      case "StringLiteral":
	      case "NumericLiteral":
	        return member.property.value;
	      case "TemplateLiteral":
	        return;
	    }
	  } else {
	    return member.property.name;
	  }
	}

	function swap(path, member, handlers) {
	  var key = getName(member);
	  if (key === undefined) return;
	  var handler = handlers[key];
	  if (typeof handler !== "function" || !Object.hasOwnProperty.call(handlers, key)) {
	    if (typeof handlers[FALLBACK_HANDLER] === "function") {
	      handler = handlers[FALLBACK_HANDLER].bind(member.object, key);
	    } else {
	      return false;
	    }
	  }

	  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    args[_key - 3] = arguments[_key];
	  }

	  var replacement = handler.apply(member.object, args);
	  if (replacement) {
	    path.replaceWith(replacement);
	    return true;
	  }
	  return false;
	}

	module.exports = function (babel) {
	  var replacements = __webpack_require__(21)(babel);
	  var seen = Symbol("seen");
	  var t = babel.types,
	      traverse = babel.traverse;

	  return {
	    name: "minify-constant-folding",
	    visitor: {
	      // Evaluate string expressions that are next to each other
	      // but are not actually a binary expression.
	      // "a" + b + "c" + "d" -> "a" + b + "cd"
	      BinaryExpression: function BinaryExpression(path) {
	        var literal = void 0,
	            bin = void 0;
	        if (path.get("right").isStringLiteral()) {
	          literal = path.get("right");
	          if (path.get("left").isBinaryExpression({ operator: "+" })) {
	            bin = path.get("left");
	          } else {
	            return;
	          }
	        } else if (path.get("left").isStringLiteral()) {
	          literal = path.get("left");
	          if (path.get("right").isBinaryExpression({ operator: "+" })) {
	            bin = path.get("right");
	          } else {
	            return;
	          }
	        } else {
	          return;
	        }

	        var relevant = getLeaf(bin, literal.key);

	        if (!relevant) {
	          return;
	        }

	        var value = literal.key === "right" ? relevant.node.value + literal.node.value : literal.node.value + relevant.node.value;

	        relevant.replaceWith(t.stringLiteral(value));
	        path.replaceWith(bin.node);

	        function getLeaf(path, direction) {
	          if (path.isStringLiteral()) {
	            return path;
	          } else if (path.isBinaryExpression({ operator: "+" })) {
	            return getLeaf(path.get(direction), direction);
	          }
	        }
	      },


	      // TODO: look into evaluating binding too (could result in more code, but gzip?)
	      Expression: function Expression(path) {
	        var node = path.node;

	        if (node[seen]) {
	          return;
	        }

	        if (path.isLiteral()) {
	          return;
	        }

	        if (!path.isPure()) {
	          return;
	        }

	        if (traverse.hasType(node, path.scope, "Identifier", t.FUNCTION_TYPES)) {
	          return;
	        }

	        // -0 maybe compared via dividing and then checking against -Infinity
	        // Also -X will always be -X.
	        if (t.isUnaryExpression(node, { operator: "-" }) && t.isNumericLiteral(node.argument)) {
	          return;
	        }

	        // We have a transform that converts true/false to !0/!1
	        if (t.isUnaryExpression(node, { operator: "!" }) && t.isNumericLiteral(node.argument)) {
	          if (node.argument.value === 0 || node.argument.value === 1) {
	            return;
	          }
	        }

	        // void 0 is used for undefined.
	        if (t.isUnaryExpression(node, { operator: "void" }) && t.isNumericLiteral(node.argument, { value: 0 })) {
	          return;
	        }

	        var res = evaluate(path);
	        if (res.confident) {
	          // Avoid fractions because they can be longer than the original expression.
	          // There is also issues with number percision?
	          if (typeof res.value === "number" && !Number.isInteger(res.value)) {
	            return;
	          }

	          // Preserve -0
	          if (typeof res.value === "number" && res.value === 0) {
	            if (1 / res.value === -Infinity) {
	              var _node2 = t.unaryExpression("-", t.numericLiteral(0), true);
	              _node2[seen] = true;
	              path.replaceWith(_node2);
	              return;
	            }
	          }

	          var _node = t.valueToNode(res.value);
	          _node[seen] = true;
	          path.replaceWith(_node);
	        }
	      },
	      CallExpression: function CallExpression(path) {
	        var node = path.node;
	        var member = node.callee;

	        if (t.isMemberExpression(member)) {
	          var helpers = replacements[member.object.type];
	          if (!helpers || !helpers.calls) return;
	          swap.apply(undefined, [path, member, helpers.calls].concat(_toConsumableArray(node.arguments)));
	        }
	      },
	      MemberExpression: function MemberExpression(path) {
	        var member = path.node;

	        var helpers = replacements[member.object.type];
	        if (!helpers || !helpers.members) return;
	        swap(path, member, helpers.members);
	      }
	    }
	  };
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var some = __webpack_require__(24);

	var _require = __webpack_require__(20),
	    markEvalScopes = _require.markEvalScopes,
	    hasEval = _require.hasEval;

	var removeUseStrict = __webpack_require__(68);

	function prevSiblings(path) {
	  var parentPath = path.parentPath;
	  var siblings = [];

	  var key = parentPath.key;

	  while ((path = parentPath.getSibling(--key)).type) {
	    siblings.push(path);
	  }
	  return siblings;
	}

	function forEachAncestor(path, callback) {
	  while (path = path.parentPath) {
	    callback(path);
	  }
	}

	module.exports = function (_ref) {
	  var t = _ref.types,
	      traverse = _ref.traverse;

	  var removeOrVoid = __webpack_require__(64)(t);
	  var shouldRevisit = Symbol("shouldRevisit");

	  // this is used for tracking fn params that can be removed
	  // as traversal takes place from left and
	  // unused params can be removed only on the right
	  var markForRemoval = Symbol("markForRemoval");

	  var main = {
	    // remove side effectless statement
	    ExpressionStatement: function ExpressionStatement(path) {
	      if (path.get("expression").isPure()) {
	        removeOrVoid(path);
	      }
	    },


	    Function: {
	      // Let's take all the vars in a function that are not in the top level scope and hoist them
	      // with the first var declaration in the top-level scope. This transform in itself may
	      // not yield much returns (or even can be marginally harmful to size). However it's great
	      // for taking away statements from blocks that can be only expressions which the `simplify`
	      // plugin can turn into other things (e.g. if => conditional).
	      exit: function exit(path) {
	        // This hurts gzip size.
	        if (!this.optimizeRawSize) {
	          return;
	        }

	        var node = path.node,
	            scope = path.scope;

	        var seen = new Set();
	        var declars = [];
	        var mutations = [];

	        var _loop = function _loop(name) {
	          var binding = scope.bindings[name];
	          if (!binding.path.isVariableDeclarator()) {
	            return "continue";
	          }

	          var declarPath = binding.path.parentPath;
	          if (seen.has(declarPath)) {
	            return "continue";
	          }
	          seen.add(declarPath);

	          if (declarPath.parentPath.isForInStatement()) {
	            return "continue";
	          }

	          if (declarPath.parentPath.parentPath.isFunction()) {
	            return "continue";
	          }

	          if (!declarPath.node || !declarPath.node.declarations) {
	            return "continue";
	          }

	          var assignmentSequence = [];

	          var _loop2 = function _loop2(declar) {
	            declars.push(declar);
	            if (declar.init) {
	              assignmentSequence.push(t.assignmentExpression("=", declar.id, declar.init));
	              mutations.push(function () {
	                declar.init = null;
	              });
	            }
	          };

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = declarPath.node.declarations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var declar = _step2.value;

	              _loop2(declar);
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

	          if (assignmentSequence.length) {
	            mutations.push(function () {
	              return declarPath.replaceWith(t.sequenceExpression(assignmentSequence));
	            });
	          } else {
	            mutations.push(function () {
	              return removeOrVoid(declarPath);
	            });
	          }
	        };

	        for (var name in scope.bindings) {
	          var _ret = _loop(name);

	          if (_ret === "continue") continue;
	        }

	        if (declars.length) {
	          mutations.forEach(function (f) {
	            return f();
	          });
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = node.body.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var statement = _step.value;

	              if (t.isVariableDeclaration(statement)) {
	                var _statement$declaratio;

	                (_statement$declaratio = statement.declarations).push.apply(_statement$declaratio, declars);
	                return;
	              }
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

	          var varDecl = t.variableDeclaration("var", declars);
	          node.body.body.unshift(varDecl);
	        }
	      }
	    },

	    // Remove bindings with no references.
	    Scope: {
	      exit: function exit(path) {
	        if (path.node[shouldRevisit]) {
	          delete path.node[shouldRevisit];
	          path.visit();
	        }
	      },
	      enter: function enter(path) {
	        var _this = this;

	        if (path.isProgram()) {
	          return;
	        }

	        if (hasEval(path.scope)) {
	          return;
	        }

	        var scope = path.scope;

	        // if the scope is created by a function, we obtain its
	        // parameter list

	        var canRemoveParams = path.isFunction() && path.node.kind !== "set";
	        var paramsList = canRemoveParams ? path.get("params") : [];

	        for (var i = paramsList.length - 1; i >= 0; i--) {
	          var param = paramsList[i];

	          if (param.isIdentifier()) {
	            var binding = scope.bindings[param.node.name];
	            if (!binding) continue;

	            if (binding.referenced) {
	              // when the first binding is referenced (right to left)
	              // exit without marking anything after this
	              break;
	            }

	            binding[markForRemoval] = true;
	            continue;
	          } else if (param.isAssignmentPattern()) {
	            var left = param.get("left");
	            var right = param.get("right");

	            if (left.isIdentifier() && right.isPure()) {
	              var _binding = scope.bindings[left.node.name];
	              if (_binding.referenced) {
	                // when the first binding is referenced (right to left)
	                // exit without marking anything after this
	                break;
	              }

	              _binding[markForRemoval] = true;
	              continue;
	            }
	          }

	          // other patterns - assignment, object have side-effects
	          // and cannot be safely removed
	          break;
	        }

	        var _loop3 = function _loop3(name) {
	          var binding = scope.bindings[name];

	          if (!binding.referenced && binding.kind !== "module") {
	            if (binding.kind === "param" && (_this.keepFnArgs || !binding[markForRemoval])) {
	              return "continue";
	            } else if (binding.path.isVariableDeclarator()) {
	              if (binding.path.parentPath.parentPath && binding.path.parentPath.parentPath.isForXStatement()) {
	                // Can't remove if in a for-in/for-of/for-await statement `for (var x in wat)`.
	                return "continue";
	              }
	            } else if (!scope.isPure(binding.path.node)) {
	              // TODO: AssignmentPattern are marked as impure and unused ids aren't removed yet
	              return "continue";
	            } else if (binding.path.isFunctionExpression() || binding.path.isClassExpression()) {
	              // `bar(function foo() {})` foo is not referenced but it's used.
	              return "continue";
	            }

	            var mutations = [];
	            var bail = false;
	            // Make sure none of the assignments value is used
	            binding.constantViolations.forEach(function (p) {
	              if (bail || p === binding.path) {
	                return;
	              }

	              if (!p.parentPath.isExpressionStatement()) {
	                bail = true;
	              }

	              if (p.isAssignmentExpression() && !p.get("right").isPure()) {
	                mutations.push(function () {
	                  return p.replaceWith(p.get("right"));
	                });
	              } else {
	                mutations.push(function () {
	                  return removeOrVoid(p);
	                });
	              }
	            });

	            if (bail) {
	              return "continue";
	            }

	            if (binding.path.isVariableDeclarator() && binding.path.node.init && !scope.isPure(binding.path.node.init) && binding.path.parentPath.node.declarations) {
	              if (binding.path.parentPath.node.declarations.length !== 1) {
	                return "continue";
	              }
	              // Bail out for ArrayPattern and ObjectPattern
	              if (!binding.path.get("id").isIdentifier()) {
	                return "continue";
	              }

	              binding.path.parentPath.replaceWith(binding.path.node.init);
	            } else {
	              updateReferences(binding.path, _this);
	              removeOrVoid(binding.path);
	            }

	            mutations.forEach(function (f) {
	              return f();
	            });
	            scope.removeBinding(name);
	          } else if (binding.constant) {
	            if (binding.path.isFunctionDeclaration() || binding.path.isVariableDeclarator() && binding.path.get("init").isFunction()) {
	              var _ret4 = function () {
	                var fun = binding.path.isFunctionDeclaration() ? binding.path : binding.path.get("init");
	                var allInside = true;
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                  for (var _iterator3 = binding.referencePaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var ref = _step3.value;

	                    if (!ref.find(function (p) {
	                      return p.node === fun.node;
	                    })) {
	                      allInside = false;
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

	                if (allInside) {
	                  scope.removeBinding(name);
	                  updateReferences(binding.path, _this);
	                  removeOrVoid(binding.path);
	                  return {
	                    v: "continue"
	                  };
	                }
	              }();

	              if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
	            }

	            if (binding.references === 1 && binding.kind !== "param" && binding.kind !== "module" && binding.constant) {
	              var replacement = binding.path.node;
	              var replacementPath = binding.path;
	              var isReferencedBefore = false;

	              if (binding.referencePaths.length > 1) {
	                throw new Error("Expected only one reference");
	              }
	              var refPath = binding.referencePaths[0];

	              if (t.isVariableDeclarator(replacement)) {
	                var _prevSiblings = prevSiblings(replacementPath);

	                // traverse ancestors of a reference checking if it's before declaration
	                forEachAncestor(refPath, function (ancestor) {
	                  if (_prevSiblings.indexOf(ancestor) > -1) {
	                    isReferencedBefore = true;
	                  }
	                });

	                // deopt if reference is in different scope than binding
	                // since we don't know if it's sync or async execition
	                // (i.e. whether value has been assigned to a reference or not)
	                if (isReferencedBefore && refPath.scope !== binding.scope) {
	                  return "continue";
	                }

	                // simulate hoisting by replacing value
	                // with undefined if declaration is after reference
	                replacement = isReferencedBefore ? t.unaryExpression("void", t.numericLiteral(0), true) : replacement.init;

	                // Bail out for ArrayPattern and ObjectPattern
	                // TODO: maybe a more intelligent approach instead of simply bailing out
	                if (!replacementPath.get("id").isIdentifier()) {
	                  return "continue";
	                }
	                replacementPath = replacementPath.get("init");
	              }

	              if (!replacement) {
	                return "continue";
	              }

	              if (!scope.isPure(replacement, true) && !isReferencedBefore) {
	                return "continue";
	              }

	              var _bail = false;

	              if (replacementPath.isIdentifier()) {
	                _bail = refPath.scope.getBinding(replacement.name) !== scope.getBinding(replacement.name);
	              } else {
	                replacementPath.traverse({
	                  Function: function Function(path) {
	                    path.skip();
	                  },
	                  ReferencedIdentifier: function ReferencedIdentifier(_ref2) {
	                    var node = _ref2.node;

	                    if (_bail) {
	                      return;
	                    }
	                    _bail = refPath.scope.getBinding(node.name) !== scope.getBinding(node.name);
	                  }
	                });
	              }

	              if (_bail) {
	                return "continue";
	              }

	              var parent = binding.path.parent;
	              if (t.isVariableDeclaration(parent)) {
	                parent = binding.path.parentPath.parent;
	              }

	              // 1. Make sure we share the parent with the node. In other words it's lexically defined
	              // and not in an if statement or otherwise.
	              // 2. If the replacement is an object then we have to make sure we are not in a loop or a function
	              // because otherwise we'll be inlining and doing a lot more allocation than we have to
	              // which would also could affect correctness in that they are not the same reference.
	              var mayLoop = false;
	              var sharesRoot = refPath.find(function (_ref3) {
	                var node = _ref3.node;

	                if (!mayLoop) {
	                  mayLoop = t.isWhileStatement(node) || t.isFor(node) || t.isFunction(node);
	                }
	                return node === parent;
	              });

	              // Anything that inherits from Object.
	              var isObj = function isObj(n) {
	                return t.isFunction(n) || t.isObjectExpression(n) || t.isArrayExpression(n);
	              };
	              var isReplacementObj = isObj(replacement) || some(replacement, isObj);

	              if (!sharesRoot || isReplacementObj && mayLoop) {
	                return "continue";
	              }

	              var replaced = replace(binding.referencePaths[0], {
	                binding: binding,
	                scope: scope,
	                replacement: replacement
	              });

	              if (replaced) {
	                scope.removeBinding(name);
	                if (binding.path.node) {
	                  removeOrVoid(binding.path);
	                }
	              }
	            }
	          }
	        };

	        for (var name in scope.bindings) {
	          var _ret3 = _loop3(name);

	          if (_ret3 === "continue") continue;
	        }
	      }
	    },

	    // Remove unreachable code.
	    BlockStatement: function BlockStatement(path) {
	      var paths = path.get("body");

	      var purge = false;

	      for (var i = 0; i < paths.length; i++) {
	        var p = paths[i];

	        if (!purge && p.isCompletionStatement()) {
	          purge = true;
	          continue;
	        }

	        if (purge && !canExistAfterCompletion(p)) {
	          removeOrVoid(p);
	        }
	      }
	    },


	    // Double check unreachable code and remove return statements that
	    // have no semantic meaning
	    ReturnStatement: function ReturnStatement(path) {
	      var node = path.node;

	      if (!path.inList) {
	        return;
	      }

	      // Not last in its block? (See BlockStatement visitor)
	      if (path.container.length - 1 !== path.key && !canExistAfterCompletion(path.getSibling(path.key + 1)) && path.parentPath.isBlockStatement()) {
	        // This is probably a new oppurtinity by some other transform
	        // let's call the block visitor on this again before proceeding.
	        path.parentPath.pushContext(path.context);
	        path.parentPath.visit();
	        path.parentPath.popContext();

	        return;
	      }

	      if (node.argument) {
	        return;
	      }

	      var noNext = true;
	      var parentPath = path.parentPath;
	      while (parentPath && !parentPath.isFunction() && noNext) {
	        // https://github.com/babel/babili/issues/265
	        if (hasLoopParent(parentPath)) {
	          noNext = false;
	          break;
	        }

	        var nextPath = parentPath.getSibling(parentPath.key + 1);
	        if (nextPath.node) {
	          if (nextPath.isReturnStatement()) {
	            nextPath.pushContext(path.context);
	            nextPath.visit();
	            nextPath.popContext();
	            if (parentPath.getSibling(parentPath.key + 1).node) {
	              noNext = false;
	              break;
	            }
	          } else {
	            noNext = false;
	            break;
	          }
	        }

	        parentPath = parentPath.parentPath;
	      }

	      if (noNext) {
	        removeOrVoid(path);
	      }
	    },
	    ConditionalExpression: function ConditionalExpression(path) {
	      var node = path.node;

	      var evaluateTest = path.get("test").evaluateTruthy();
	      if (evaluateTest === true) {
	        path.replaceWith(node.consequent);
	      } else if (evaluateTest === false) {
	        path.replaceWith(node.alternate);
	      }
	    },


	    SwitchStatement: {
	      exit: function exit(path) {
	        var evaluated = path.get("discriminant").evaluate();

	        if (!evaluated.confident) return;

	        var discriminant = evaluated.value;
	        var cases = path.get("cases");

	        var matchingCaseIndex = -1;
	        var defaultCaseIndex = -1;

	        for (var i = 0; i < cases.length; i++) {
	          var test = cases[i].get("test");

	          // handle default case
	          if (test.node === null) {
	            defaultCaseIndex = i;
	            continue;
	          }

	          var testResult = test.evaluate();

	          // if we are not able to deternine a test during
	          // compile time, we terminate immediately
	          if (!testResult.confident) return;

	          if (testResult.value === discriminant) {
	            matchingCaseIndex = i;
	            break;
	          }
	        }

	        var result = void 0;

	        if (matchingCaseIndex === -1) {
	          if (defaultCaseIndex === -1) {
	            path.skip();
	            path.replaceWithMultiple(extractVars(path));
	            return;
	          } else {
	            result = getStatementsUntilBreak(defaultCaseIndex);
	          }
	        } else {
	          result = getStatementsUntilBreak(matchingCaseIndex);
	        }

	        if (result.bail) return;

	        // we extract vars from the entire switch statement
	        // and there will be duplicates which
	        // will be again removed by DCE
	        replaceSwitch([].concat(_toConsumableArray(extractVars(path)), _toConsumableArray(result.statements)));

	        function getStatementsUntilBreak(start) {
	          var result = {
	            bail: false,
	            statements: []
	          };

	          for (var _i = start; _i < cases.length; _i++) {
	            var consequent = cases[_i].get("consequent");

	            for (var j = 0; j < consequent.length; j++) {
	              var _isBreaking = isBreaking(consequent[j], path);
	              if (_isBreaking.bail) {
	                result.bail = true;
	                return result;
	              }
	              if (_isBreaking.break) {
	                // compute no more
	                // exit out of the loop
	                return result;
	              } else {
	                result.statements.push(consequent[j].node);
	              }
	            }
	          }

	          return result;
	        }

	        function replaceSwitch(statements) {
	          var isBlockRequired = false;

	          for (var _i2 = 0; _i2 < statements.length; _i2++) {
	            if (t.isVariableDeclaration(statements[_i2], { kind: "let" })) {
	              isBlockRequired = true;
	              break;
	            }
	            if (t.isVariableDeclaration(statements[_i2], { kind: "const" })) {
	              isBlockRequired = true;
	              break;
	            }
	          }

	          if (isBlockRequired) {
	            path.replaceWith(t.BlockStatement(statements));
	          } else {
	            path.replaceWithMultiple(statements);
	          }
	        }
	      }
	    },

	    WhileStatement: function WhileStatement(path) {
	      var test = path.get("test");
	      var result = test.evaluate();
	      if (result.confident && test.isPure() && !result.value) {
	        path.remove();
	      }
	    },
	    ForStatement: function ForStatement(path) {
	      var test = path.get("test");
	      if (!test.isPure()) return;

	      var result = test.evaluate();
	      if (result.confident) {
	        if (result.value) {
	          test.remove();
	        } else {
	          path.remove();
	        }
	      }
	    },
	    DoWhileStatement: function DoWhileStatement(path) {
	      var test = path.get("test");
	      var result = test.evaluate();
	      if (result.confident && test.isPure() && !result.value) {
	        var body = path.get("body");

	        if (body.isBlockStatement()) {
	          var stmts = body.get("body");
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = stmts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var stmt = _step4.value;

	              var _isBreaking = isBreaking(stmt, path);
	              if (_isBreaking.bail || _isBreaking.break) return;
	              var _isContinuing = isContinuing(stmt, path);
	              if (_isContinuing.bail || isContinuing.continue) return;
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }

	          path.replaceWith(body.node);
	        } else if (body.isBreakStatement()) {
	          var _isBreaking2 = isBreaking(body, path);
	          if (_isBreaking2.bail) return;
	          if (_isBreaking2.break) path.remove();
	        } else if (body.isContinueStatement()) {
	          return;
	        } else {
	          path.replaceWith(body.node);
	        }
	      }
	    },


	    // Join assignment and definition when in sequence.
	    // var x; x = 1; -> var x = 1;
	    AssignmentExpression: function AssignmentExpression(path) {
	      if (!path.get("left").isIdentifier() || !path.parentPath.isExpressionStatement()) {
	        return;
	      }

	      var prev = path.parentPath.getSibling(path.parentPath.key - 1);
	      if (!(prev && prev.isVariableDeclaration())) {
	        return;
	      }

	      var declars = prev.node.declarations;
	      if (declars.length !== 1 || declars[0].init || declars[0].id.name !== path.get("left").node.name) {
	        return;
	      }
	      declars[0].init = path.node.right;
	      removeOrVoid(path);
	    },


	    // Remove named function expression name. While this is dangerous as it changes
	    // `function.name` all minifiers do it and hence became a standard.
	    FunctionExpression: function FunctionExpression(path) {
	      if (!this.keepFnName) {
	        removeUnreferencedId(path);
	      }
	    },


	    // remove class names
	    ClassExpression: function ClassExpression(path) {
	      if (!this.keepClassName) {
	        removeUnreferencedId(path);
	      }
	    },


	    // Put the `var` in the left if feasible.
	    ForInStatement: function ForInStatement(path) {
	      var left = path.get("left");
	      if (!left.isIdentifier()) {
	        return;
	      }

	      var binding = path.scope.getBinding(left.node.name);
	      if (!binding) {
	        return;
	      }

	      if (binding.scope.getFunctionParent() !== path.scope.getFunctionParent()) {
	        return;
	      }

	      if (!binding.path.isVariableDeclarator()) {
	        return;
	      }

	      if (binding.path.parentPath.parentPath.isForInStatement({
	        left: binding.path.parent
	      })) {
	        return;
	      }

	      // If it has company then it's probably more efficient to keep.
	      if (binding.path.parent.declarations.length > 1) {
	        return;
	      }

	      // meh
	      if (binding.path.node.init) {
	        return;
	      }

	      removeOrVoid(binding.path);
	      path.node.left = t.variableDeclaration("var", [t.variableDeclarator(left.node)]);
	      binding.path = path.get("left").get("declarations")[0];
	    }
	  };

	  return {
	    name: "minify-dead-code-elimination",
	    visitor: {
	      Function: {
	        exit: function exit(path) {
	          /**
	           * Use exit handler to traverse in a dfs post-order fashion
	           * to remove use strict
	           */
	          var body = path.get("body");
	          if (body.isBlockStatement()) {
	            removeUseStrict(body);
	          }
	        }
	      },
	      IfStatement: {
	        exit: function exit(path) {
	          var consequent = path.get("consequent");
	          var alternate = path.get("alternate");
	          var test = path.get("test");

	          var evalResult = test.evaluate();
	          var isPure = test.isPure();

	          var replacements = [];

	          if (evalResult.confident && !isPure && test.isSequenceExpression()) {
	            replacements.push(t.expressionStatement(extractSequenceImpure(test)));
	          }

	          // we can check if a test will be truthy 100% and if so then we can inline
	          // the consequent and completely ignore the alternate
	          //
	          //   if (true) { foo; } -> { foo; }
	          //   if ("foo") { foo; } -> { foo; }
	          //
	          if (evalResult.confident && evalResult.value) {
	            path.replaceWithMultiple([].concat(replacements, _toConsumableArray(toStatements(consequent)), _toConsumableArray(extractVars(alternate))));
	            return;
	          }

	          // we can check if a test will be falsy 100% and if so we can inline the
	          // alternate if there is one and completely remove the consequent
	          //
	          //   if ("") { bar; } else { foo; } -> { foo; }
	          //   if ("") { bar; } ->
	          //
	          if (evalResult.confident && !evalResult.value) {
	            if (alternate.node) {
	              path.replaceWithMultiple([].concat(replacements, _toConsumableArray(toStatements(alternate)), _toConsumableArray(extractVars(consequent))));
	              return;
	            } else {
	              path.replaceWithMultiple([].concat(replacements, _toConsumableArray(extractVars(consequent))));
	            }
	          }

	          // remove alternate blocks that are empty
	          //
	          //   if (foo) { foo; } else {} -> if (foo) { foo; }
	          //
	          if (alternate.isBlockStatement() && !alternate.node.body.length) {
	            alternate.remove();
	            // For if-statements babel-traverse replaces with an empty block
	            path.node.alternate = null;
	          }

	          // if the consequent block is empty turn alternate blocks into a consequent
	          // and flip the test
	          //
	          //   if (foo) {} else { bar; } -> if (!foo) { bar; }
	          //
	          if (consequent.isBlockStatement() && !consequent.node.body.length && alternate.isBlockStatement() && alternate.node.body.length) {
	            consequent.replaceWith(alternate.node);
	            alternate.remove();
	            // For if-statements babel-traverse replaces with an empty block
	            path.node.alternate = null;
	            test.replaceWith(t.unaryExpression("!", test.node, true));
	          }
	        }
	      },

	      EmptyStatement: function EmptyStatement(path) {
	        if (path.parentPath.isBlockStatement() || path.parentPath.isProgram()) {
	          path.remove();
	        }
	      },


	      Program: {
	        exit: function exit(path) {
	          var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	              _ref4$opts = _ref4.opts;

	          _ref4$opts = _ref4$opts === undefined ? {} : _ref4$opts;
	          var _ref4$opts$optimizeRa = _ref4$opts.optimizeRawSize,
	              optimizeRawSize = _ref4$opts$optimizeRa === undefined ? false : _ref4$opts$optimizeRa,
	              _ref4$opts$keepFnName = _ref4$opts.keepFnName,
	              keepFnName = _ref4$opts$keepFnName === undefined ? false : _ref4$opts$keepFnName,
	              _ref4$opts$keepClassN = _ref4$opts.keepClassName,
	              keepClassName = _ref4$opts$keepClassN === undefined ? false : _ref4$opts$keepClassN,
	              _ref4$opts$keepFnArgs = _ref4$opts.keepFnArgs,
	              keepFnArgs = _ref4$opts$keepFnArgs === undefined ? false : _ref4$opts$keepFnArgs;

	          traverse.clearCache();
	          path.scope.crawl();

	          markEvalScopes(path);

	          // We need to run this plugin in isolation.
	          path.traverse(main, {
	            functionToBindings: new Map(),
	            optimizeRawSize: optimizeRawSize,
	            keepFnName: keepFnName,
	            keepClassName: keepClassName,
	            keepFnArgs: keepFnArgs
	          });
	        }
	      }
	    }
	  };

	  function toStatements(path) {
	    var node = path.node;

	    if (path.isBlockStatement()) {
	      var hasBlockScoped = false;

	      for (var i = 0; i < node.body.length; i++) {
	        var bodyNode = node.body[i];
	        if (t.isBlockScoped(bodyNode)) {
	          hasBlockScoped = true;
	        }
	      }

	      if (!hasBlockScoped) {
	        return node.body;
	      }
	    }
	    return [node];
	  }

	  // Extracts vars from a path
	  // Useful for removing blocks or paths that can contain
	  // variable declarations inside them
	  // Note:
	  // drops are inits
	  // extractVars({ var x = 5, y = x }) => var x, y;
	  function extractVars(path) {
	    var declarators = [];

	    if (path.isVariableDeclaration({ kind: "var" })) {
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = path.node.declarations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var decl = _step5.value;

	          declarators.push(t.variableDeclarator(decl.id));
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	    } else {
	      path.traverse({
	        VariableDeclaration: function VariableDeclaration(varPath) {
	          if (!varPath.isVariableDeclaration({ kind: "var" })) return;
	          if (!isSameFunctionScope(varPath, path)) return;

	          var _iteratorNormalCompletion6 = true;
	          var _didIteratorError6 = false;
	          var _iteratorError6 = undefined;

	          try {
	            for (var _iterator6 = varPath.node.declarations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	              var _decl = _step6.value;

	              declarators.push(t.variableDeclarator(_decl.id));
	            }
	          } catch (err) {
	            _didIteratorError6 = true;
	            _iteratorError6 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                _iterator6.return();
	              }
	            } finally {
	              if (_didIteratorError6) {
	                throw _iteratorError6;
	              }
	            }
	          }
	        }
	      });
	    }

	    if (declarators.length <= 0) return [];

	    return [t.variableDeclaration("var", declarators)];
	  }

	  function replace(path, options) {
	    var replacement = options.replacement,
	        scope = options.scope,
	        binding = options.binding;

	    // Same name, different binding.

	    if (scope.getBinding(path.node.name) !== binding) {
	      return;
	    }

	    // We don't want to move code around to different scopes because:
	    // 1. Original bindings that is referenced could be shadowed
	    // 2. Moving defintions to potentially hot code is bad
	    if (scope !== path.scope) {
	      if (t.isClass(replacement) || t.isFunction(replacement)) {
	        return;
	      }

	      var bail = false;
	      traverse(replacement, {
	        Function: function Function(path) {
	          if (bail) {
	            return;
	          }
	          bail = true;
	          path.stop();
	        }
	      }, scope);

	      if (bail) {
	        return;
	      }
	    }

	    // Avoid recursion.
	    if (path.find(function (_ref5) {
	      var node = _ref5.node;
	      return node === replacement;
	    })) {
	      return;
	    }

	    // https://github.com/babel/babili/issues/130
	    if (!t.isExpression(replacement)) {
	      t.toExpression(replacement);
	    }

	    // We don't remove fn name here, we let the FnExpr & ClassExpr visitors
	    // check its references and remove unreferenced ones
	    // if (t.isFunction(replacement)) {
	    //   replacement.id = null;
	    // }

	    path.replaceWith(replacement);
	    return true;
	  }

	  function updateReferences(fnToDeletePath) {
	    if (!fnToDeletePath.isFunction()) {
	      return;
	    }

	    fnToDeletePath.traverse({
	      ReferencedIdentifier: function ReferencedIdentifier(path) {
	        var node = path.node,
	            scope = path.scope;

	        var binding = scope.getBinding(node.name);

	        if (!binding || !binding.path.isFunction() || binding.scope === scope || !binding.constant) {
	          return;
	        }

	        var index = binding.referencePaths.indexOf(path);
	        if (index === -1) {
	          return;
	        }
	        binding.references--;
	        binding.referencePaths.splice(index, 1);
	        if (binding.references === 0) {
	          binding.referenced = false;
	        }

	        if (binding.references <= 1 && binding.scope.path.node) {
	          binding.scope.path.node[shouldRevisit] = true;
	        }
	      }
	    });
	  }

	  function removeUnreferencedId(path) {
	    var id = path.get("id").node;
	    if (!id) {
	      return;
	    }

	    var node = path.node,
	        scope = path.scope;

	    var binding = scope.getBinding(id.name);

	    // Check if shadowed or is not referenced.
	    if (binding && (binding.path.node !== node || !binding.referenced)) {
	      node.id = null;
	    }
	  }

	  // path1 -> path2
	  // is path1 an ancestor of path2
	  function isAncestor(path1, path2) {
	    return !!path2.findParent(function (parent) {
	      return parent === path1;
	    });
	  }

	  function isSameFunctionScope(path1, path2) {
	    return path1.scope.getFunctionParent() === path2.scope.getFunctionParent();
	  }

	  function isBreaking(stmt, path) {
	    return isControlTransfer(stmt, path, "break");
	  }

	  function isContinuing(stmt, path) {
	    return isControlTransfer(stmt, path, "continue");
	  }

	  // tells if a "stmt" is a break/continue statement
	  function isControlTransfer(stmt, path) {
	    var _result;

	    var control = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break";
	    var _break$continue = {
	      break: "BreakStatement",
	      continue: "ContinueStatement"
	    },
	        type = _break$continue[control];

	    if (!type) {
	      throw new Error("Can only handle break and continue statements");
	    }
	    var checker = "is" + type;

	    if (stmt[checker]()) {
	      return _isControlTransfer(stmt, path);
	    }

	    var isTransferred = false;
	    var result = (_result = {}, _defineProperty(_result, control, false), _defineProperty(_result, "bail", false), _result);

	    stmt.traverse(_defineProperty({}, type, function (cPath) {
	      // if we already detected a break/continue statement,
	      if (isTransferred) return;

	      result = _isControlTransfer(cPath, path);

	      if (result.bail || result[control]) {
	        isTransferred = true;
	      }
	    }));

	    return result;

	    function _isControlTransfer(cPath, path) {
	      var _ref7;

	      var label = cPath.get("label");

	      if (label.node !== null) {
	        // labels are fn scoped and not accessible by inner functions
	        // path is the switch statement
	        if (!isSameFunctionScope(path, cPath)) {
	          // we don't have to worry about this break statement
	          return {
	            break: false,
	            bail: false
	          };
	        }

	        // here we handle the break labels
	        // if they are outside switch, we bail out
	        // if they are within the case, we keep them
	        var labelPath = void 0;
	        if (path.scope.getLabel) {
	          labelPath = getLabel(label.node.name, path);
	        } else {
	          labelPath = path.scope.getBinding(label.node.name).path;
	        }
	        var _isAncestor = isAncestor(labelPath, path);

	        return _defineProperty({
	          bail: _isAncestor
	        }, control, _isAncestor);
	      }

	      // set the flag that it is indeed breaking
	      var isCTransfer = true;

	      // this flag is to capture
	      // switch(0) { case 0: while(1) if (x) break; }
	      var possibleRunTimeControlTransfer = false;

	      // and compute if it's breaking the correct thing
	      var parent = cPath.parentPath;

	      while (parent !== stmt.parentPath) {
	        // loops and nested switch cases
	        if (parent.isLoop() || parent.isSwitchCase()) {
	          // invalidate all the possible runtime breaks captured
	          // while (1) { if (x) break; }
	          possibleRunTimeControlTransfer = false;

	          // and set that it's not breaking our switch statement
	          isCTransfer = false;
	          break;
	        }
	        //
	        // this is a special case and depends on
	        // the fact that SwitchStatement is handled in the
	        // exit hook of the traverse
	        //
	        // switch (0) {
	        //   case 0: if (x) break;
	        // }
	        //
	        // here `x` is runtime only.
	        // in this case, we need to bail out. So we depend on exit hook
	        // of switch so that, it would have visited the IfStatement first
	        // before the SwitchStatement and would have removed the
	        // IfStatement if it was a compile time determined
	        //
	        if (parent.isIfStatement()) {
	          possibleRunTimeControlTransfer = true;
	        }
	        parent = parent.parentPath;
	      }

	      return _ref7 = {}, _defineProperty(_ref7, control, possibleRunTimeControlTransfer || isCTransfer), _defineProperty(_ref7, "bail", possibleRunTimeControlTransfer), _ref7;
	    }
	  }

	  // things that are hoisted
	  function canExistAfterCompletion(path) {
	    return path.isFunctionDeclaration() || path.isVariableDeclaration({ kind: "var" });
	  }

	  function getLabel(name, _path) {
	    var label = void 0,
	        path = _path;
	    do {
	      label = path.scope.getLabel(name);
	      if (label) {
	        return label;
	      }
	    } while (path = path.parentPath);
	    return null;
	  }

	  function hasLoopParent(path) {
	    var parent = path;
	    do {
	      if (parent.isLoop()) {
	        return true;
	      }
	    } while (parent = parent.parentPath);
	    return false;
	  }

	  function extractSequenceImpure(seq) {
	    var expressions = seq.get("expressions");
	    var result = [];
	    for (var i = 0; i < expressions.length; i++) {
	      if (!expressions[i].isPure()) {
	        result.push(expressions[i].node);
	      }
	    }
	    return t.sequenceExpression(result);
	  }
	};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = removeUseStrict;

	var newIssueUrl = "https://github.com/babel/babili/issues/new";

	var useStrict = "use strict";

	/**
	 * Remove redundant use strict
	 * If the parent has a "use strict" directive, it is not required in
	 * the children
	 *
	 * @param {NodePath} block BlockStatement
	 */
	function removeUseStrict(block) {
	  if (!block.isBlockStatement()) {
	    throw new Error("Received " + block.type + ". Expected BlockStatement. " + ("Please report at " + newIssueUrl));
	  }

	  var useStricts = getUseStrictDirectives(block);

	  // early exit
	  if (useStricts.length < 1) return;

	  // only keep the first use strict
	  if (useStricts.length > 1) {
	    for (var i = 1; i < useStricts.length; i++) {
	      useStricts[i].remove();
	    }
	  }

	  // check if parent has an use strict
	  if (hasStrictParent(block)) {
	    useStricts[0].remove();
	  }
	}

	function hasStrictParent(path) {
	  return path.findParent(function (parent) {
	    return parent.isBlockStatement() && isStrict(parent);
	  });
	}

	function isStrict(block) {
	  return getUseStrictDirectives(block).length > 0;
	}

	function getUseStrictDirectives(block) {
	  return block.get("directives").filter(function (directive) {
	    return directive.node.value.value === useStrict;
	  });
	}

/***/ }),
/* 69 */
[89, 19],
/* 70 */
[90, 18],
/* 71 */
36,
/* 72 */
37,
/* 73 */
38,
/* 74 */
39,
/* 75 */
40,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var Charset = __webpack_require__(73);
	var ScopeTracker = __webpack_require__(77);
	var isLabelIdentifier = __webpack_require__(22);
	var bfsTraverseCreator = __webpack_require__(72);
	var fixupVarScoping = __webpack_require__(75);

	var _require = __webpack_require__(20),
	    markEvalScopes = _require.markEvalScopes,
	    isEvalScopesMarked = _require.isMarked,
	    hasEval = _require.hasEval;

	var newIssueUrl = "https://github.com/babel/babili/issues/new";

	module.exports = function (babel) {
	  var t = babel.types,
	      traverse = babel.traverse;

	  var bfsTraverse = bfsTraverseCreator(babel);
	  var hop = Object.prototype.hasOwnProperty;

	  var Mangler = function () {
	    function Mangler(charset, program) {
	      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	          _ref$blacklist = _ref.blacklist,
	          blacklist = _ref$blacklist === undefined ? {} : _ref$blacklist,
	          _ref$keepFnName = _ref.keepFnName,
	          keepFnName = _ref$keepFnName === undefined ? false : _ref$keepFnName,
	          _ref$keepClassName = _ref.keepClassName,
	          keepClassName = _ref$keepClassName === undefined ? false : _ref$keepClassName,
	          _ref$eval = _ref.eval,
	          _eval = _ref$eval === undefined ? false : _ref$eval,
	          _ref$topLevel = _ref.topLevel,
	          topLevel = _ref$topLevel === undefined ? false : _ref$topLevel;

	      _classCallCheck(this, Mangler);

	      this.charset = charset;
	      this.program = program;

	      // user passed options
	      this.blacklist = toObject(blacklist);
	      this.keepFnName = keepFnName;
	      this.keepClassName = keepClassName;
	      this.topLevel = topLevel;
	      this.eval = _eval;

	      // tracking
	      this.visitedScopes = new Set();
	      this.scopeTracker = new ScopeTracker();
	      this.renamedNodes = new Set();
	    }

	    /**
	     * Run the mangler
	     */

	    _createClass(Mangler, [{
	      key: "run",
	      value: function run() {
	        this.crawlScope();
	        this.collect();
	        this.fixup();
	        this.charset.sort();
	        this.mangle();
	      }

	      /**
	       * Tells if a variable name is blacklisted
	       * @param {String} name
	       */

	    }, {
	      key: "isBlacklist",
	      value: function isBlacklist(name) {
	        return hop.call(this.blacklist, name) && this.blacklist[name];
	      }

	      /**
	       * Clears traverse cache and recrawls the AST
	       *
	       * to recompute the bindings, references, other scope information
	       * and paths because the other transformations in the same pipeline
	       * (other plugins and presets) changes the AST and does NOT update
	       * the scope objects
	       */

	    }, {
	      key: "crawlScope",
	      value: function crawlScope() {
	        traverse.clearCache();
	        this.program.scope.crawl();
	      }

	      /**
	       * Re-crawling comes with a side-effect that let->var conversion
	       * reverts the update of the binding information (block to fn scope).
	       * This function takes care of it by updating it again.
	       *
	       * TODO: This is unnecessary work and needs to be fixed in babel.
	       * https://github.com/babel/babel/issues/4818
	       *
	       * When this is removed, remember to remove fixup's dependency in
	       * ScopeTracker
	       */

	    }, {
	      key: "fixup",
	      value: function fixup() {
	        fixupVarScoping(this);
	      }

	      /**
	       * A single pass through the AST to collect info for
	       *
	       * 1. Scope Tracker
	       * 2. Unsafe Scopes (direct eval scopes)
	       * 3. Charset considerations for better gzip compression
	       *
	       * Traversed in the same fashion(BFS) the mangling is done
	       */

	    }, {
	      key: "collect",
	      value: function collect() {
	        var mangler = this;
	        var scopeTracker = mangler.scopeTracker;

	        scopeTracker.addScope(this.program.scope);

	        /**
	         * Same usage as in DCE, whichever runs first
	         */
	        if (!isEvalScopesMarked(mangler.program.scope)) {
	          markEvalScopes(mangler.program);
	        }

	        /**
	         * The visitors to be used in traversal.
	         *
	         * Note: BFS traversal supports only the `enter` handlers, `exit`
	         * handlers are simply dropped without Errors
	         *
	         * Collects items defined in the ScopeTracker
	         */
	        var collectVisitor = {
	          Scopable: function Scopable(_ref2) {
	            var scope = _ref2.scope;

	            scopeTracker.addScope(scope);

	            // Collect bindings defined in the scope
	            Object.keys(scope.bindings).forEach(function (name) {
	              scopeTracker.addBinding(scope.bindings[name]);
	            });
	          },

	          /**
	           * This is necessary because, in Babel, the scope.references
	           * does NOT contain the references in that scope. Only the program
	           * scope (top most level) contains all the references.
	           *
	           * We collect the references in a fashion where all the scopes between
	           * and including the referenced scope and scope where it is declared
	           * is considered as scope referencing that identifier
	           */
	          ReferencedIdentifier: function ReferencedIdentifier(path) {
	            if (isLabelIdentifier(path)) return;
	            var scope = path.scope,
	                name = path.node.name;

	            var binding = scope.getBinding(name);
	            if (!binding) {
	              // Do not collect globals as they are already available via
	              // babel's API
	              if (scope.hasGlobal(name)) return;
	              // This should NOT happen ultimately. Panic if this code block is
	              // reached
	              throw new Error("Binding not found for ReferencedIdentifier \"" + name + "\" " + ("present in \"" + path.parentPath.type + "\". ") + ("Please report this at " + newIssueUrl));
	            } else {
	              // Add it to our scope tracker if everything is fine
	              scopeTracker.addReference(scope, binding, name);
	            }
	          },


	          /**
	           * This is useful to detect binding ids and add them to the
	           * scopeTracker's bindings
	           *
	           * TODO:
	           *
	           * This visitor is probably unnecessary. It was added to capture the
	           * bindings that was not present in scope.bindings. But, now, it looks
	           * like the unit and smoke tests pass without this.
	           */
	          BindingIdentifier: function BindingIdentifier(path) {
	            if (isLabelIdentifier(path)) return;

	            var scope = path.scope,
	                name = path.node.name;

	            var binding = scope.getBinding(name);

	            /**
	             * We have already captured the bindings when traversing through
	             * Scopables, if a binding identifier doesn't have a binding, it
	             * probably means that another transformation created a new binding,
	             * refer https://github.com/babel/babili/issues/549 for example -
	             * binding created by plugin transform-es2015-function-name
	             *
	             * So we just don't care about bindings that do not exist
	             *
	             * TODO:
	             *
	             * this deopts in DCE as this name can be removed for this particular
	             * case (es2015-function-name)
	             */
	            if (!binding) return;

	            /**
	             * Detect constant violations
	             *
	             * If it's a constant violation, then add the Identifier Path as
	             * a Reference instead of Binding - This is because the ScopeTracker
	             * tracks these Re-declaration and mutation of variables as References
	             * as it is simple to rename them
	             */
	            if (binding.identifier === path.node) {
	              scopeTracker.addBinding(binding);
	            } else {
	              // constant violation
	              scopeTracker.addReference(scope, binding, name);
	            }
	          }
	        };

	        /**
	         * These visitors are for collecting the Characters used in the program
	         * to measure the frequency and generate variable names for mangling so
	         * as to improve the gzip compression - as gzip likes repetition
	         */
	        if (this.charset.shouldConsider) {
	          collectVisitor.Identifier = function Identifer(path) {
	            var node = path.node;

	            // We don't mangle properties, so we collect them as they contribute
	            // to the frequency of characters

	            if (path.parentPath.isMemberExpression({ property: node }) || path.parentPath.isObjectProperty({ key: node })) {
	              mangler.charset.consider(node.name);
	            }
	          };
	          collectVisitor.Literal = function Literal(_ref3) {
	            var node = _ref3.node;

	            mangler.charset.consider(String(node.value));
	          };
	        }

	        // Traverse the AST
	        bfsTraverse(mangler.program, collectVisitor);
	      }

	      /**
	       * Tells if a binding is exported as a NamedExport - so as to NOT mangle
	       *
	       * Babel treats NamedExports as a binding referenced by this NamedExport decl
	       * @param {Binding} binding
	       */

	    }, {
	      key: "isExportedWithName",
	      value: function isExportedWithName(binding) {
	        // short circuit
	        if (!this.topLevel) {
	          return false;
	        }

	        var refs = binding.referencePaths;

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = refs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var ref = _step.value;

	            if (ref.isExportNamedDeclaration()) {
	              return true;
	            }
	          }

	          // default
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

	        return false;
	      }

	      /**
	       * Mangle the scope
	       * @param {Scope} scope
	       */

	    }, {
	      key: "mangleScope",
	      value: function mangleScope(scope) {
	        var mangler = this;
	        var scopeTracker = mangler.scopeTracker;

	        // Unsafe Scope

	        if (!mangler.eval && hasEval(scope)) return;

	        // Already visited
	        // This is because for a function, in Babel, the function and
	        // the function body's BlockStatement has the same scope, and will
	        // be visited twice by the Scopable handler, and we want to mangle
	        // it only once
	        if (mangler.visitedScopes.has(scope)) return;
	        mangler.visitedScopes.add(scope);

	        // Helpers to generate names
	        var i = 0;
	        function getNext() {
	          return mangler.charset.getIdentifier(i++);
	        }
	        function resetNext() {
	          i = 0;
	        }

	        var bindings = scopeTracker.bindings.get(scope);
	        var names = [].concat(_toConsumableArray(bindings.keys()));

	        /**
	         * 1. Iterate through the list of BindingIdentifiers
	         * 2. Rename each of them in-place
	         * 3. Update the scope tree.
	         */
	        for (var _i = 0; _i < names.length; _i++) {
	          var oldName = names[_i];
	          var binding = bindings.get(oldName);

	          // Names which should NOT be mangled
	          if (
	          // arguments - for non-strict mode
	          oldName === "arguments" ||
	          // labels
	          binding.path.isLabeledStatement() ||
	          // ClassDeclaration has binding in two scopes
	          //   1. The scope in which it is declared
	          //   2. The class's own scope
	          binding.path.isClassDeclaration() && binding.path === scope.path ||
	          // blacklisted
	          mangler.isBlacklist(oldName) || (
	          // function names
	          mangler.keepFnName ? isFunction(binding.path) : false) || (
	          // class names
	          mangler.keepClassName ? isClass(binding.path) : false) ||
	          // named export
	          mangler.isExportedWithName(binding)) {
	            continue;
	          }

	          var next = void 0;
	          do {
	            next = getNext();
	          } while (!t.isValidIdentifier(next) || scopeTracker.hasBinding(scope, next) || scope.hasGlobal(next) || scopeTracker.hasReference(scope, next) || !scopeTracker.canUseInReferencedScopes(binding, next));

	          // Reset so variables which are removed can be reused
	          resetNext();

	          // Once we detected a valid `next` Identifier which could be used,
	          // call the renamer
	          mangler.rename(scope, binding, oldName, next);
	        }
	      }

	      /**
	       * The mangle function that traverses through all the Scopes in a BFS
	       * fashion - calls mangleScope
	       */

	    }, {
	      key: "mangle",
	      value: function mangle() {
	        var mangler = this;

	        bfsTraverse(this.program, {
	          Scopable: function Scopable(path) {
	            if (!path.isProgram() || mangler.topLevel) mangler.mangleScope(path.scope);
	          }
	        });
	      }

	      /**
	       * Given a NodePath, collects all the Identifiers which are BindingIdentifiers
	       * and replaces them with the new name
	       *
	       * For example,
	       *   var a = 1, { b } = c; // a and b are BindingIdentifiers
	       *
	       * @param {NodePath} path
	       * @param {String} oldName
	       * @param {String} newName
	       * @param {Function} predicate
	       */

	    }, {
	      key: "renameBindingIds",
	      value: function renameBindingIds(path, oldName, newName) {
	        var predicate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
	          return true;
	        };

	        var bindingIds = path.getBindingIdentifierPaths(true, false);
	        for (var name in bindingIds) {
	          if (name !== oldName) continue;
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = bindingIds[name][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var idPath = _step2.value;

	              if (predicate(idPath)) {
	                this.renamedNodes.add(idPath.node);
	                idPath.replaceWith(t.identifier(newName));
	                this.renamedNodes.add(idPath.node);
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
	        }
	      }

	      /**
	       * The Renamer:
	       * Renames the following for one Binding in a Scope
	       *
	       * 1. Binding in that Scope
	       * 2. All the Binding's constant violations
	       * 3. All its References
	       * 4. Updates mangler.scopeTracker
	       * 5. Updates Babel's Scope tracking
	       *
	       * @param {Scope} scope
	       * @param {Binding} binding
	       * @param {String} oldName
	       * @param {String} newName
	       */

	    }, {
	      key: "rename",
	      value: function rename(scope, binding, oldName, newName) {
	        var mangler = this;
	        var scopeTracker = mangler.scopeTracker;

	        // rename at the declaration level

	        this.renameBindingIds(binding.path, oldName, newName, function (idPath) {
	          return idPath.node === binding.identifier;
	        });

	        // update mangler's ScopeTracker
	        scopeTracker.renameBinding(scope, oldName, newName);

	        // update all constant violations
	        var violations = binding.constantViolations;
	        for (var i = 0; i < violations.length; i++) {
	          if (violations[i].isLabeledStatement()) continue;

	          this.renameBindingIds(violations[i], oldName, newName);
	          scopeTracker.updateReference(violations[i].scope, binding, oldName, newName);
	        }

	        // update all referenced places
	        var refs = binding.referencePaths;
	        for (var _i2 = 0; _i2 < refs.length; _i2++) {
	          var path = refs[_i2];

	          var node = path.node;

	          if (!path.isIdentifier()) {
	            // Ideally, this should not happen
	            // it happens in these places now -
	            // case 1: Export Statements
	            // This is a bug in babel
	            // https://github.com/babel/babel/pull/3629
	            // case 2: Replacements in other plugins
	            // eg: https://github.com/babel/babili/issues/122
	            // replacement in dce from `x` to `!x` gives referencePath as `!x`
	            path.traverse({
	              ReferencedIdentifier: function ReferencedIdentifier(refPath) {
	                if (refPath.node.name !== oldName) {
	                  return;
	                }
	                var actualBinding = refPath.scope.getBinding(oldName);
	                if (actualBinding !== binding) {
	                  return;
	                }
	                mangler.renamedNodes.add(refPath.node);
	                refPath.replaceWith(t.identifier(newName));
	                mangler.renamedNodes.add(refPath.node);

	                scopeTracker.updateReference(refPath.scope, binding, oldName, newName);
	              }
	            });
	          } else if (!isLabelIdentifier(path)) {
	            if (path.node.name === oldName) {
	              mangler.renamedNodes.add(path.node);
	              path.replaceWith(t.identifier(newName));
	              mangler.renamedNodes.add(path.node);
	              scopeTracker.updateReference(path.scope, binding, oldName, newName);
	            } else if (mangler.renamedNodes.has(path.node)) {
	              // already renamed,
	              // just update the references
	              scopeTracker.updateReference(path.scope, binding, oldName, newName);
	            } else {
	              throw new Error("Unexpected Rename Error: " + ("Trying to replace \"" + node.name + "\": from \"" + oldName + "\" to \"" + newName + "\". ") + ("Please report it at " + newIssueUrl));
	            }
	          }
	          // else label identifier - silently ignore
	        }

	        // update babel's scope tracking
	        var bindings = scope.bindings;

	        bindings[newName] = binding;
	        delete bindings[oldName];
	      }
	    }]);

	    return Mangler;
	  }();

	  return {
	    name: "minify-mangle-names",
	    visitor: {
	      /**
	       * Mangler is run as a single pass. It's the same pattern as used in DCE
	       */
	      Program: {
	        exit: function exit(path) {
	          // If the source code is small then we're going to assume that the user
	          // is running on this on single files before bundling. Therefore we
	          // need to achieve as much determinisim and we will not do any frequency
	          // sorting on the character set. Currently the number is pretty arbitrary.
	          var shouldConsiderSource = path.getSource().length > 70000;

	          var charset = new Charset(shouldConsiderSource);

	          var mangler = new Mangler(charset, path, this.opts);
	          mangler.run();
	        }
	      }
	    }
	  };
	};

	// convert value to object
	function toObject(value) {
	  if (!Array.isArray(value)) {
	    return value;
	  }

	  var map = {};
	  for (var i = 0; i < value.length; i++) {
	    map[value[i]] = true;
	  }
	  return map;
	}

	// for keepFnName
	function isFunction(path) {
	  return path.isFunctionExpression() || path.isFunctionDeclaration();
	}

	// for keepClassName
	function isClass(path) {
	  return path.isClassExpression() || path.isClassDeclaration();
	}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var CountedSet = __webpack_require__(74);
	var isLabelIdentifier = __webpack_require__(22);

	var newIssueUrl = "https://github.com/babel/babili/issues/new";

	/**
	 * ScopeTracker
	 *   references: Map<Scope, CountedSet<String> >
	 *   bindings: Map<Scope, Map<String, Binding> >
	 */
	module.exports = function () {
	  function ScopeTracker() {
	    _classCallCheck(this, ScopeTracker);

	    this.references = new Map();
	    this.bindings = new Map();
	  }

	  /**
	   * Register a new Scope and initiliaze it with empty sets
	   * @param {Scope} scope
	   */

	  _createClass(ScopeTracker, [{
	    key: "addScope",
	    value: function addScope(scope) {
	      if (!this.references.has(scope)) {
	        this.references.set(scope, new CountedSet());
	      }
	      if (!this.bindings.has(scope)) {
	        this.bindings.set(scope, new Map());
	      }
	    }

	    /**
	     * Add reference to all Scopes between and including the ReferencedScope
	     * and Binding's Scope
	     * @param {Scope} scope
	     * @param {Binding} binding
	     * @param {String} name
	     */

	  }, {
	    key: "addReference",
	    value: function addReference(scope, binding, name) {
	      var parent = scope;
	      do {
	        this.references.get(parent).add(name);
	        if (!binding) {
	          throw new Error("Binding Not Found for " + name + " during scopeTracker.addRefernce. " + ("Please report at " + newIssueUrl));
	        }
	        if (binding.scope === parent) break;
	      } while (parent = parent.parent);
	    }

	    /**
	     * has a Reference in the given {Scope} or a child Scope
	     *
	     * Refer {addReference} to know why the following call will be valid
	     * for detecting references in child Scopes
	     *
	     * @param {Scope} scope
	     * @param {String} name
	     */

	  }, {
	    key: "hasReference",
	    value: function hasReference(scope, name) {
	      return this.references.get(scope).has(name);
	    }

	    /**
	     * Update reference count in all scopes between and including the
	     * Referenced Scope and the Binding's Scope
	     *
	     * @param {Scope} scope
	     * @param {Binding} binding
	     * @param {String} oldName
	     * @param {String} newName
	     */

	  }, {
	    key: "updateReference",
	    value: function updateReference(scope, binding, oldName, newName) {
	      var parent = scope;
	      do {
	        var ref = this.references.get(parent);

	        ref.delete(oldName);
	        ref.add(newName);

	        if (!binding) {
	          // Something went wrong - panic
	          throw new Error("Binding Not Found during scopeTracker.updateRefernce " + ("while updating \"" + oldName + "\" to \"" + newName + "\". ") + ("Please report at " + newIssueUrl));
	        }

	        if (binding.scope === parent) break;
	      } while (parent = parent.parent);
	    }

	    /**
	     * has either a Binding or a Reference
	     * @param {Scope} scope
	     * @param {Binding} binding
	     * @param {String} name
	     */

	  }, {
	    key: "hasBindingOrReference",
	    value: function hasBindingOrReference(scope, binding, name) {
	      return this.hasReference(scope, name) || this.hasBinding(scope, name);
	    }

	    /**
	     * For a Binding visit all places where the Binding is used and detect
	     * if the newName {next} can be used in all these places
	     *
	     * 1. binding's own scope
	     * 2. constant violations' scopes
	     * 3. referencePaths' scopes
	     *
	     * @param {Binding} binding
	     * @param {String} next
	     */

	  }, {
	    key: "canUseInReferencedScopes",
	    value: function canUseInReferencedScopes(binding, next) {
	      var tracker = this;

	      if (tracker.hasBindingOrReference(binding.scope, binding, next)) {
	        return false;
	      }

	      // Safari raises a syntax error for a `let` or `const` declaration in a
	      // `for` loop initialization that shadows a parent function's parameter.
	      // https://github.com/babel/babili/issues/559
	      // https://bugs.webkit.org/show_bug.cgi?id=171041
	      // https://trac.webkit.org/changeset/217200/webkit/trunk/Source
	      var maybeDecl = binding.path.parentPath;
	      var isBlockScoped = maybeDecl.isVariableDeclaration({ kind: "let" }) || maybeDecl.isVariableDeclaration({ kind: "const" });
	      if (isBlockScoped) {
	        var maybeFor = maybeDecl.parentPath;
	        var isForLoopBinding = maybeFor.isForStatement({ init: maybeDecl.node }) || maybeFor.isForXStatement({ left: maybeDecl.node });
	        if (isForLoopBinding) {
	          var fnParent = maybeFor.getFunctionParent();
	          if (fnParent.isFunction({ body: maybeFor.parent })) {
	            var parentFunctionBinding = this.bindings.get(fnParent.scope).get(next);
	            if (parentFunctionBinding) {
	              var parentFunctionHasParamBinding = parentFunctionBinding.kind === "param";
	              if (parentFunctionHasParamBinding) {
	                return false;
	              }
	            }
	          }
	        }
	      }

	      for (var i = 0; i < binding.constantViolations.length; i++) {
	        var violation = binding.constantViolations[i];
	        if (tracker.hasBindingOrReference(violation.scope, binding, next)) {
	          return false;
	        }
	      }

	      for (var _i = 0; _i < binding.referencePaths.length; _i++) {
	        var ref = binding.referencePaths[_i];
	        if (!ref.isIdentifier()) {
	          var canUse = true;
	          ref.traverse({
	            ReferencedIdentifier: function ReferencedIdentifier(path) {
	              if (path.node.name !== next) return;
	              if (tracker.hasBindingOrReference(path.scope, binding, next)) {
	                canUse = false;
	              }
	            }
	          });
	          if (!canUse) {
	            return canUse;
	          }
	        } else if (!isLabelIdentifier(ref)) {
	          if (tracker.hasBindingOrReference(ref.scope, binding, next)) {
	            return false;
	          }
	        }
	      }

	      return true;
	    }

	    /**
	     * Add a binding to Tracker in binding's own Scope
	     * @param {Binding} binding
	     */

	  }, {
	    key: "addBinding",
	    value: function addBinding(binding) {
	      if (!binding) {
	        return;
	      }

	      var bindings = this.bindings.get(binding.scope);
	      var existingBinding = bindings.get(binding.identifier.name);

	      if (existingBinding && existingBinding !== binding) {
	        throw new Error("scopeTracker.addBinding: " + ("Binding \"" + existingBinding.identifier.name + "\" already exists. ") + ("Trying to add \"" + binding.identifier.name + "\" again."));
	      }

	      bindings.set(binding.identifier.name, binding);
	    }

	    /**
	     * Moves Binding from it's own Scope to {toScope}
	     *
	     * required for fixup-var-scope
	     *
	     * @param {Binding} binding
	     * @param {Scope} toScope
	     */

	  }, {
	    key: "moveBinding",
	    value: function moveBinding(binding, toScope) {
	      this.bindings.get(binding.scope).delete(binding.identifier.name);
	      this.bindings.get(toScope).set(binding.identifier.name, binding);
	    }

	    /**
	     * has a Binding in the current {Scope}
	     * @param {Scope} scope
	     * @param {String} name
	     */

	  }, {
	    key: "hasBinding",
	    value: function hasBinding(scope, name) {
	      return this.bindings.get(scope).has(name);
	    }

	    /**
	     * Update the ScopeTracker on rename
	     * @param {Scope} scope
	     * @param {String} oldName
	     * @param {String} newName
	     */

	  }, {
	    key: "renameBinding",
	    value: function renameBinding(scope, oldName, newName) {
	      var bindings = this.bindings.get(scope);
	      bindings.set(newName, bindings.get(oldName));
	      bindings.delete(oldName);
	    }
	  }]);

	  return ScopeTracker;
	}();

/***/ }),
/* 78 */
44,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var PatternMatch = __webpack_require__(80);

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var flipExpressions = __webpack_require__(18)(t);
	  var toMultipleSequenceExpressions = __webpack_require__(65)(t);

	  var VOID_0 = t.unaryExpression("void", t.numericLiteral(0), true);
	  var condExprSeen = Symbol("condExprSeen");
	  var seqExprSeen = Symbol("seqExprSeen");
	  var shouldRevisit = Symbol("shouldRevisit");

	  // Types as symbols for comparisions
	  var types = {};
	  t.TYPES.forEach(function (type) {
	    types[type] = Symbol.for(type);
	  });
	  var isNodeOfType = function isNodeOfType(node, typeSymbol) {
	    if ((typeof typeSymbol === "undefined" ? "undefined" : _typeof(typeSymbol)) !== "symbol") return false;
	    return t["is" + Symbol.keyFor(typeSymbol)](node);
	  };

	  // small abstractions
	  var not = function not(node) {
	    return t.unaryExpression("!", node);
	  };
	  var notnot = function notnot(node) {
	    return not(not(node));
	  };
	  var or = function or(a, b) {
	    return t.logicalExpression("||", a, b);
	  };
	  var and = function and(a, b) {
	    return t.logicalExpression("&&", a, b);
	  };

	  var operators = new Set(["+", "-", "*", "%", "<<", ">>", ">>>", "&", "|", "^", "/", "**"]);

	  var updateOperators = new Set(["+", "-"]);

	  function areArraysEqual(arr1, arr2) {
	    return arr1.every(function (value, index) {
	      return String(value) === String(arr2[index]);
	    });
	  }

	  function getName(node) {
	    if (node.type === "ThisExpression") {
	      return "this";
	    }
	    if (node.type === "Super") {
	      return "super";
	    }
	    if (node.type === "NullLiteral") {
	      return "null";
	    }
	    // augment identifiers so that they don't match
	    // string/number literals
	    // but still match against each other
	    return node.name ? node.name + "_" : node.value /* Literal */;
	  }

	  function getPropNames(path) {
	    if (!path.isMemberExpression()) {
	      return;
	    }

	    var obj = path.get("object");

	    var prop = path.get("property");
	    var propNames = [getName(prop.node)];

	    while (obj.type === "MemberExpression") {
	      var node = obj.get("property").node;
	      if (node) {
	        propNames.push(getName(node));
	      }
	      obj = obj.get("object");
	    }
	    propNames.push(getName(obj.node));

	    return propNames;
	  }
	  var OP_AND = function OP_AND(input) {
	    return input === "&&";
	  };
	  var OP_OR = function OP_OR(input) {
	    return input === "||";
	  };

	  return {
	    name: "minify-simplify",
	    visitor: {
	      Statement: {
	        exit: function exit(path) {
	          if (path.node[shouldRevisit]) {
	            delete path.node[shouldRevisit];
	            path.visit();
	          }
	        }
	      },

	      // CallExpression(path) {
	      // const { node } = path;

	      /* (function() {})() -> !function() {}()
	        There is a bug in babel in printing this. Disabling for now.
	        if (t.isFunctionExpression(node.callee) &&
	            (t.isExpressionStatement(parent) ||
	             (t.isSequenceExpression(parent) && parent.expressions[0] === node))
	        ) {
	          path.replaceWith(
	            t.callExpression(
	              t.unaryExpression("!", node.callee, true),
	              node.arguments
	            )
	          );
	          return;
	        }*/
	      // },

	      UnaryExpression: {
	        enter: [
	        // Demorgans.
	        function (path) {
	          var node = path.node;

	          if (node.operator !== "!" || flipExpressions.hasSeen(node)) {
	            return;
	          }

	          var expr = node.argument;

	          // We need to make sure that the return type will always be boolean.
	          if (!(t.isLogicalExpression(expr) || t.isConditionalExpression(expr) || t.isBinaryExpression(expr))) {
	            return;
	          }
	          if (t.isBinaryExpression(expr) && t.COMPARISON_BINARY_OPERATORS.indexOf(expr.operator) === -1) {
	            return;
	          }

	          if (flipExpressions.shouldFlip(expr, 1)) {
	            var newNode = flipExpressions.flip(expr);
	            path.replaceWith(newNode);
	          }
	        },

	        // !(a, b, c) -> a, b, !c
	        function (path) {
	          var node = path.node;

	          if (node.operator !== "!") {
	            return;
	          }

	          if (!t.isSequenceExpression(node.argument)) {
	            return;
	          }

	          var seq = node.argument.expressions;
	          var expr = seq[seq.length - 1];
	          seq[seq.length - 1] = t.unaryExpression("!", expr, true);
	          path.replaceWith(node.argument);
	        },

	        // !(a ? b : c) -> a ? !b : !c
	        function (path) {
	          var node = path.node;

	          if (node.operator !== "!") {
	            return;
	          }

	          if (!t.isConditional(node.argument)) {
	            return;
	          }

	          var cond = node.argument;
	          cond.alternate = t.unaryExpression("!", cond.alternate, true);
	          cond.consequent = t.unaryExpression("!", cond.consequent, true);
	          path.replaceWith(node.argument);
	        }]
	      },

	      LogicalExpression: {
	        exit: function exit(path) {
	          // cache of path.evaluate()
	          var evaluateMemo = new Map();

	          var TRUTHY = function TRUTHY(input) {
	            // !NaN and !undefined are truthy
	            // separate check here as they are considered impure by babel
	            if (input.isUnaryExpression() && input.get("argument").isIdentifier()) {
	              if (input.node.argument.name === "NaN" || input.node.argument.name === "undefined") {
	                return true;
	              }
	            }
	            var evalResult = input.evaluate();
	            evaluateMemo.set(input, evalResult);
	            return evalResult.confident && input.isPure() && evalResult.value;
	          };

	          var FALSY = function FALSY(input) {
	            // NaN and undefined are falsy
	            // separate check here as they are considered impure by babel
	            if (input.isIdentifier()) {
	              if (input.node.name === "NaN" || input.node.name === "undefined") {
	                return true;
	              }
	            }
	            var evalResult = input.evaluate();
	            evaluateMemo.set(input, evalResult);
	            return evalResult.confident && input.isPure() && !evalResult.value;
	          };

	          var EX = types.Expression;

	          // Convention:
	          // [left, operator, right, handler(leftNode, rightNode)]

	          var matcher = new PatternMatch([[TRUTHY, OP_AND, EX, function (l, r) {
	            return r;
	          }], [FALSY, OP_AND, EX, function (l) {
	            return l;
	          }], [TRUTHY, OP_OR, EX, function (l) {
	            return l;
	          }], [FALSY, OP_OR, EX, function (l, r) {
	            return r;
	          }]]);

	          var left = path.get("left");
	          var right = path.get("right");
	          var operator = path.node.operator;

	          var result = matcher.match([left, operator, right], isPatternMatchesPath);

	          if (result.match) {
	            // here we are sure that left.evaluate is always confident becuase
	            // it satisfied one of TRUTHY/FALSY paths
	            var value = void 0;
	            if (evaluateMemo.has(left)) {
	              value = evaluateMemo.get(left).value;
	            } else {
	              value = left.evaluate().value;
	            }
	            path.replaceWith(result.value(t.valueToNode(value), right.node));
	          }
	        }
	      },

	      AssignmentExpression: function AssignmentExpression(path) {
	        var rightExpr = path.get("right");
	        var leftExpr = path.get("left");

	        if (path.node.operator !== "=") {
	          return;
	        }

	        var canBeUpdateExpression = rightExpr.get("right").isNumericLiteral() && rightExpr.get("right").node.value === 1 && updateOperators.has(rightExpr.node.operator);

	        if (leftExpr.isMemberExpression()) {
	          var leftPropNames = getPropNames(leftExpr);
	          var rightPropNames = getPropNames(rightExpr.get("left"));

	          if (!leftPropNames || leftPropNames.indexOf(undefined) > -1 || !rightPropNames || rightPropNames.indexOf(undefined) > -1 || !operators.has(rightExpr.node.operator) || !areArraysEqual(leftPropNames, rightPropNames)) {
	            return;
	          }
	        } else {
	          if (!rightExpr.isBinaryExpression() || !operators.has(rightExpr.node.operator) || leftExpr.node.name !== rightExpr.node.left.name) {
	            return;
	          }
	        }

	        var newExpression = void 0;

	        // special case x=x+1 --> ++x
	        if (canBeUpdateExpression) {
	          newExpression = t.updateExpression(rightExpr.node.operator + rightExpr.node.operator, t.clone(leftExpr.node), true /* prefix */
	          );
	        } else {
	          newExpression = t.assignmentExpression(rightExpr.node.operator + "=", t.clone(leftExpr.node), t.clone(rightExpr.node.right));
	        }

	        path.replaceWith(newExpression);
	      },


	      ConditionalExpression: {
	        enter: [
	        // !foo ? 'foo' : 'bar' -> foo ? 'bar' : 'foo'
	        // foo !== 'lol' ? 'foo' : 'bar' -> foo === 'lol' ? 'bar' : 'foo'
	        function flipIfOrConditional(path) {
	          var node = path.node;

	          if (!path.get("test").isLogicalExpression()) {
	            flipNegation(node);
	            return;
	          }

	          if (flipExpressions.shouldFlip(node.test)) {
	            node.test = flipExpressions.flip(node.test);
	            var _ref2 = [node.consequent, node.alternate];
	            node.alternate = _ref2[0];
	            node.consequent = _ref2[1];
	          }
	        }, function simplifyPatterns(path) {
	          var test = path.get("test");
	          var consequent = path.get("consequent");
	          var alternate = path.get("alternate");

	          var EX = types.Expression,
	              LE = types.LogicalExpression;

	          // Convention:
	          // ===============
	          // for each pattern [test, consequent, alternate, handler(expr, cons, alt)]

	          var matcher = new PatternMatch([[LE, true, false, function (e) {
	            return e;
	          }], [EX, true, false, function (e) {
	            return notnot(e);
	          }], [EX, false, true, function (e) {
	            return not(e);
	          }], [LE, true, EX, function (e, c, a) {
	            return or(e, a);
	          }], [EX, true, EX, function (e, c, a) {
	            return or(notnot(e), a);
	          }], [EX, false, EX, function (e, c, a) {
	            return and(not(e), a);
	          }], [EX, EX, true, function (e, c) {
	            return or(not(e), c);
	          }], [LE, EX, false, function (e, c) {
	            return and(e, c);
	          }], [EX, EX, false, function (e, c) {
	            return and(notnot(e), c);
	          }]]);

	          var result = matcher.match([test, consequent, alternate], isPatternMatchesPath);

	          if (result.match) {
	            path.replaceWith(result.value(test.node, consequent.node, alternate.node));
	          }
	        }],

	        exit: [
	        // a ? x = foo : b ? x = bar : x = baz;
	        // x = a ? foo : b ? bar : baz;
	        function (topPath) {
	          if (!topPath.parentPath.isExpressionStatement() && !topPath.parentPath.isSequenceExpression()) {
	            return;
	          }

	          var mutations = [];
	          var firstLeft = null;
	          var operator = null;
	          function visit(path) {
	            if (path.isConditionalExpression()) {
	              var _bail = visit(path.get("consequent"));
	              if (_bail) {
	                return true;
	              }
	              _bail = visit(path.get("alternate"));
	              return _bail;
	            }

	            if (operator == null) {
	              operator = path.node.operator;
	            } else if (path.node.operator !== operator) {
	              return true;
	            }

	            if (!path.isAssignmentExpression() || !(path.get("left").isIdentifier() || path.get("left").isMemberExpression())) {
	              return true;
	            }

	            var left = path.get("left").node;
	            if (firstLeft == null) {
	              firstLeft = left;
	            } else if (!t.isNodesEquivalent(left, firstLeft)) {
	              return true;
	            }

	            mutations.push(function () {
	              return path.replaceWith(path.get("right").node);
	            });
	          }

	          var bail = visit(topPath);
	          if (bail) {
	            return;
	          }

	          mutations.forEach(function (f) {
	            return f();
	          });
	          topPath.replaceWith(t.assignmentExpression(operator, firstLeft, topPath.node));
	        },

	        // bar ? void 0 : void 0
	        // (bar, void 0)
	        // TODO: turn this into general equiv check
	        function (path) {
	          var node = path.node;

	          if (isVoid0(node.consequent) && isVoid0(node.alternate)) {
	            path.replaceWith(t.sequenceExpression([path.node.test, VOID_0]));
	          }
	        },

	        // bar ? void 0 : foo ? void 0 : <etc>
	        // bar || foo : void 0
	        // TODO: turn this into general equiv check
	        function (path) {
	          var node = path.node;

	          if (node[condExprSeen] || !isVoid0(node.consequent)) {
	            return;
	          }

	          node[condExprSeen] = true;

	          var tests = [node.test];
	          var mutations = [];
	          var alt = void 0;

	          var _loop = function _loop(next) {
	            next.node[condExprSeen] = true;
	            alt = next.node.alternate;

	            if (isVoid0(next.node.consequent)) {
	              tests.push(next.node.test);
	              mutations.push(function () {
	                return next.remove();
	              });
	            } else {
	              alt = next.node;
	              return "break";
	            }
	          };

	          for (var next = path.get("alternate"); next.isConditionalExpression(); next = next.get("alternate")) {
	            var _ret = _loop(next);

	            if (_ret === "break") break;
	          }

	          if (tests.length === 1) {
	            return;
	          }

	          var test = tests.reduce(function (expr, curTest) {
	            return t.logicalExpression("||", expr, curTest);
	          });

	          path.replaceWith(t.conditionalExpression(test, VOID_0, alt));
	        }]
	      },

	      // concat
	      VariableDeclaration: {
	        enter: [
	        // Put vars with no init at the top.
	        function (path) {
	          var node = path.node;

	          if (node.declarations.length < 2) {
	            return;
	          }

	          var inits = [];
	          var empty = [];
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = node.declarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var decl = _step.value;

	              if (!decl.init) {
	                empty.push(decl);
	              } else {
	                inits.push(decl);
	              }
	            }

	            // This is based on exprimintation but there is a significant
	            // imrpovement when we place empty vars at the top in smaller
	            // files. Whereas it hurts in larger files.
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

	          if (this.fitsInSlidingWindow) {
	            node.declarations = empty.concat(inits);
	          } else {
	            node.declarations = inits.concat(empty);
	          }
	        }]
	      },

	      Function: {
	        exit: function exit(path) {
	          earlyReturnTransform(path);

	          if (!path.node[shouldRevisit]) {
	            return;
	          }

	          delete path.node[shouldRevisit];
	          path.visit();
	        }
	      },

	      For: {
	        enter: earlyContinueTransform,
	        exit: earlyContinueTransform
	      },

	      ForStatement: {
	        // Merge previous expressions in the init part of the for.
	        enter: function enter(path) {
	          var node = path.node;

	          if (!path.inList || node.init && !t.isExpression(node.init)) {
	            return;
	          }

	          var prev = path.getSibling(path.key - 1);
	          var consumed = false;
	          if (prev.isVariableDeclaration()) {
	            var referencedOutsideLoop = false;

	            // we don't care if vars are referenced outside the loop as they are fn scope
	            if (prev.node.kind === "let" || prev.node.kind === "const") {
	              var ids = Object.keys(prev.getBindingIdentifiers());

	              idloop: for (var i = 0; i < ids.length; i++) {
	                var binding = prev.scope.bindings[ids[i]];
	                // TODO
	                // Temporary Fix
	                // if there is no binding, we assume it is referenced outside
	                // and deopt to avoid bugs
	                if (!binding) {
	                  referencedOutsideLoop = true;
	                  break idloop;
	                }
	                var refs = binding.referencePaths;
	                for (var j = 0; j < refs.length; j++) {
	                  if (!isAncestor(path, refs[j])) {
	                    referencedOutsideLoop = true;
	                    break idloop;
	                  }
	                }
	              }
	            }

	            if (!node.init && !referencedOutsideLoop) {
	              node.init = prev.node;
	              consumed = true;
	            }
	          } else if (prev.isExpressionStatement()) {
	            var expr = prev.node.expression;
	            if (node.init) {
	              if (t.isSequenceExpression(expr)) {
	                expr.expressions.push(node.init);
	                node.init = expr;
	              } else {
	                node.init = t.sequenceExpression([expr, node.init]);
	              }
	            } else {
	              node.init = expr;
	            }
	            consumed = true;
	          }
	          if (consumed) {
	            prev.remove();
	          }
	        },
	        exit: function exit(path) {
	          var node = path.node;

	          if (!node.test) {
	            return;
	          }

	          if (!path.get("body").isBlockStatement()) {
	            var bodyNode = path.get("body").node;
	            if (!t.isIfStatement(bodyNode)) {
	              return;
	            }

	            if (t.isBreakStatement(bodyNode.consequent, { label: null })) {
	              node.test = t.logicalExpression("&&", node.test, t.unaryExpression("!", bodyNode.test, true));
	              node.body = bodyNode.alternate || t.emptyStatement();
	              return;
	            }

	            if (t.isBreakStatement(bodyNode.alternate, { label: null })) {
	              node.test = t.logicalExpression("&&", node.test, bodyNode.test);
	              node.body = bodyNode.consequent || t.emptyStatement();
	              return;
	            }

	            return;
	          }

	          var statements = node.body.body;
	          var exprs = [];
	          var ifStatement = null;
	          var breakAt = null;
	          var i = 0;
	          for (var statement; statement = statements[i]; i++) {
	            if (t.isIfStatement(statement)) {
	              if (t.isBreakStatement(statement.consequent, { label: null })) {
	                ifStatement = statement;
	                breakAt = "consequent";
	              } else if (t.isBreakStatement(statement.alternate, { label: null })) {
	                ifStatement = statement;
	                breakAt = "alternate";
	              }
	              break;
	            }

	            // A statement appears before the break statement then bail.
	            if (!t.isExpressionStatement(statement)) {
	              return;
	            }

	            exprs.push(statement.expression);
	          }

	          if (!ifStatement) {
	            return;
	          }

	          var rest = [];

	          if (breakAt === "consequent") {
	            if (t.isBlockStatement(ifStatement.alternate)) {
	              rest.push.apply(rest, _toConsumableArray(ifStatement.alternate.body));
	            } else if (ifStatement.alternate) {
	              rest.push(ifStatement.alternate);
	            }
	          } else {
	            if (t.isBlockStatement(ifStatement.consequent)) {
	              rest.push.apply(rest, _toConsumableArray(ifStatement.consequent.body));
	            } else if (ifStatement.consequent) {
	              rest.push(ifStatement.consequent);
	            }
	          }

	          rest.push.apply(rest, _toConsumableArray(statements.slice(i + 1)));

	          var test = breakAt === "consequent" ? t.unaryExpression("!", ifStatement.test, true) : ifStatement.test;
	          var expr = void 0;
	          if (exprs.length === 1) {
	            expr = t.sequenceExpression([exprs[0], test]);
	          } else if (exprs.length) {
	            exprs.push(test);
	            expr = t.sequenceExpression(exprs);
	          } else {
	            expr = test;
	          }

	          node.test = t.logicalExpression("&&", node.test, expr);
	          if (rest.length === 1) {
	            node.body = rest[0];
	          } else if (rest.length) {
	            node.body = t.blockStatement(rest);
	          } else {
	            node.body = t.emptyStatement();
	          }
	        }
	      },

	      Program: function Program(path) {
	        // An approximation of the resultant gzipped code after minification
	        this.fitsInSlidingWindow = path.getSource().length / 10 < 33000;

	        var node = path.node;

	        var statements = toMultipleSequenceExpressions(node.body);
	        if (!statements.length) {
	          return;
	        }
	        node.body = statements;

	        // this additional traversal is horrible but it's done to fix
	        // https://github.com/babel/babili/issues/323
	        // in which type annotation somehow gets messed up
	        // during sequence expression transformation
	        path.traverse({
	          Identifier: function Identifier(path) {
	            path.getTypeAnnotation();
	          }
	        });
	      },


	      BlockStatement: {
	        enter: function enter(path) {
	          var node = path.node,
	              parent = path.parent;

	          var top = [];
	          var bottom = [];

	          for (var i = 0; i < node.body.length; i++) {
	            var bodyNode = node.body[i];
	            if (t.isFunctionDeclaration(bodyNode)) {
	              top.push(bodyNode);
	            } else {
	              bottom.push(bodyNode);
	            }
	          }

	          var statements = top.concat(toMultipleSequenceExpressions(bottom));

	          if (!statements.length) {
	            return;
	          }

	          if (statements.length > 1 || needsBlock(node, parent) || node.directives) {
	            node.body = statements;
	            return;
	          }

	          if (statements.length) {
	            path.replaceWith(statements[0]);
	            return;
	          }
	        },
	        exit: function exit(path) {
	          var node = path.node,
	              parent = path.parent;

	          if (needsBlock(node, parent)) {
	            return;
	          }

	          if (node.body.length === 1) {
	            path.get("body")[0].inList = false;
	            path.replaceWith(node.body[0]);
	            return;
	          }

	          if (node.body.length === 0) {
	            path.replaceWith(t.emptyStatement());
	            return;
	          }

	          // Check if oppurtinties to merge statements are available.
	          var statements = node.body;
	          if (!statements.length) {
	            return;
	          }

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = statements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var statement = _step2.value;

	              if (!t.isExpressionStatement(statement)) {
	                return;
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

	          path.visit();
	        }
	      },

	      ThrowStatement: createPrevExpressionEater("throw"),

	      // Try to merge previous statements into a sequence
	      ReturnStatement: {
	        enter: [createPrevExpressionEater("return"),

	        // Remove return if last statement with no argument.
	        // Replace return with `void` argument with argument.
	        function (path) {
	          var node = path.node;

	          if (!path.parentPath.parentPath.isFunction() || path.getSibling(path.key + 1).node) {
	            return;
	          }

	          if (!node.argument) {
	            path.remove();
	            return;
	          }

	          if (t.isUnaryExpression(node.argument, { operator: "void" })) {
	            path.replaceWith(node.argument.argument);
	          }
	        }]
	      },

	      // turn blocked ifs into single statements
	      IfStatement: {
	        exit: [
	        // Merge nested if statements if possible
	        function (_ref3) {
	          var node = _ref3.node;

	          if (!t.isIfStatement(node.consequent)) {
	            return;
	          }

	          if (node.alternate || node.consequent.alternate) {
	            return;
	          }

	          node.test = t.logicalExpression("&&", node.test, node.consequent.test);
	          node.consequent = node.consequent.consequent;
	        }, function (path) {
	          var node = path.node;

	          // No alternate, make into a guarded expression

	          if (node.consequent && !node.alternate && node.consequent.type === "ExpressionStatement") {
	            var op = "&&";
	            if (t.isUnaryExpression(node.test, { operator: "!" })) {
	              node.test = node.test.argument;
	              op = "||";
	            }

	            path.replaceWith(t.expressionStatement(t.logicalExpression(op, node.test, node.consequent.expression)));
	            return;
	          }

	          // Easy, both are expressions, turn into ternary
	          if (t.isExpressionStatement(node.consequent) && t.isExpressionStatement(node.alternate)) {
	            path.replaceWith(t.conditionalExpression(node.test, node.consequent.expression, node.alternate.expression));
	            return;
	          }

	          // Easy: consequent and alternate are return -- conditional.
	          if (t.isReturnStatement(node.consequent) && t.isReturnStatement(node.alternate)) {
	            if (!node.consequent.argument && !node.alternate.argument) {
	              path.replaceWith(t.expressionStatement(node.test));
	              return;
	            }

	            path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || VOID_0, node.alternate.argument || VOID_0)));
	            return;
	          }

	          // There is nothing after this block. And one or both
	          // of the consequent and alternate are either expression statment
	          // or return statements.
	          if (!path.getSibling(path.key + 1).node && path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.isFunction()) {
	            // Only the consequent is a return, void the alternate.
	            if (t.isReturnStatement(node.consequent) && t.isExpressionStatement(node.alternate)) {
	              if (!node.consequent.argument) {
	                path.replaceWith(t.expressionStatement(t.logicalExpression("||", node.test, node.alternate.expression)));
	                return;
	              }

	              path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || VOID_0, t.unaryExpression("void", node.alternate.expression, true))));
	              return;
	            }

	            // Only the alternate is a return, void the consequent.
	            if (t.isReturnStatement(node.alternate) && t.isExpressionStatement(node.consequent)) {
	              if (!node.alternate.argument) {
	                path.replaceWith(t.expressionStatement(t.logicalExpression("&&", node.test, node.consequent.expression)));
	                return;
	              }

	              path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, t.unaryExpression("void", node.consequent.expression, true), node.alternate.argument || VOID_0)));
	              return;
	            }

	            if (t.isReturnStatement(node.consequent) && !node.alternate) {
	              if (!node.consequent.argument) {
	                path.replaceWith(t.expressionStatement(node.test));
	                return;
	              }

	              // This would only be worth it if the previous statement was an if
	              // because then we may merge to create a conditional.
	              if (path.getSibling(path.key - 1).isIfStatement()) {
	                path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || VOID_0, VOID_0)));
	                return;
	              }
	            }

	            if (t.isReturnStatement(node.alternate) && !node.consequent) {
	              if (!node.alternate.argument) {
	                path.replaceWith(t.expressionStatement(node.test));
	                return;
	              }

	              // Same as above.
	              if (path.getSibling(path.key - 1).isIfStatement()) {
	                path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.alternate.argument || VOID_0, VOID_0)));
	                return;
	              }
	            }
	          }

	          var next = path.getSibling(path.key + 1);

	          // If the next satatement(s) is an if statement and we can simplify that
	          // to potentailly be an expression (or a return) then this will make it
	          // easier merge.
	          if (next.isIfStatement()) {
	            next.pushContext(path.context);
	            next.visit();
	            next.popContext();
	            next = path.getSibling(path.key + 1);
	          }

	          // Some other visitor might have deleted our node. OUR NODE ;_;
	          if (!path.node) {
	            return;
	          }

	          // No alternate but the next statement is a return
	          // also turn into a return conditional
	          if (t.isReturnStatement(node.consequent) && !node.alternate && next.isReturnStatement()) {
	            var nextArg = next.node.argument || VOID_0;
	            next.remove();
	            path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument || VOID_0, nextArg)));
	            return;
	          }

	          // Next is the last expression, turn into a return while void'ing the exprs
	          if (path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.isFunction() && !path.getSibling(path.key + 2).node && t.isReturnStatement(node.consequent) && !node.alternate && next.isExpressionStatement()) {
	            var nextExpr = next.node.expression;
	            next.remove();
	            if (node.consequent.argument) {
	              path.replaceWith(t.returnStatement(t.conditionalExpression(node.test, node.consequent.argument, t.unaryExpression("void", nextExpr, true))));
	              return;
	            }

	            path.replaceWith(t.logicalExpression("||", node.test, nextExpr));
	            return;
	          }

	          if (node.consequent && node.alternate && (t.isReturnStatement(node.consequent) || t.isBlockStatement(node.consequent) && t.isReturnStatement(node.consequent.body[node.consequent.body.length - 1]))) {
	            path.insertAfter(t.isBlockStatement(node.alternate) ? node.alternate.body : node.alternate);
	            node.alternate = null;
	            return;
	          }
	        },

	        // If the consequent is if and the altenrate is not then
	        // switch them out. That way we know we don't have to print
	        // a block.x
	        function (path) {
	          var node = path.node;

	          if (!node.alternate) {
	            return;
	          }

	          if (!t.isIfStatement(node.consequent)) {
	            return;
	          }

	          if (t.isIfStatement(node.alternate)) {
	            return;
	          }

	          node.test = t.unaryExpression("!", node.test, true);
	          var _ref4 = [node.consequent, node.alternate];
	          node.alternate = _ref4[0];
	          node.consequent = _ref4[1];
	        },

	        // Make if statements with conditional returns in the body into
	        // an if statement that guards the rest of the block.
	        function (path) {
	          var node = path.node;

	          if (!path.inList || !path.get("consequent").isBlockStatement() || node.alternate) {
	            return;
	          }

	          var ret = void 0;
	          var test = void 0;
	          var exprs = [];
	          var statements = node.consequent.body;

	          for (var i = 0, statement; statement = statements[i]; i++) {
	            if (t.isExpressionStatement(statement)) {
	              exprs.push(statement.expression);
	            } else if (t.isIfStatement(statement)) {
	              if (i < statements.length - 1) {
	                // This isn't the last statement. Bail.
	                return;
	              }
	              if (statement.alternate) {
	                return;
	              }
	              if (!t.isReturnStatement(statement.consequent)) {
	                return;
	              }
	              ret = statement.consequent;
	              test = statement.test;
	            } else {
	              return;
	            }
	          }

	          if (!test || !ret) {
	            return;
	          }

	          exprs.push(test);

	          var expr = exprs.length === 1 ? exprs[0] : t.sequenceExpression(exprs);

	          var replacement = t.logicalExpression("&&", node.test, expr);

	          path.replaceWith(t.ifStatement(replacement, ret, null));
	        }, createPrevExpressionEater("if")]
	      },

	      WhileStatement: function WhileStatement(path) {
	        var node = path.node;

	        path.replaceWith(t.forStatement(null, node.test, null, node.body));
	      },


	      ForInStatement: createPrevExpressionEater("for-in"),

	      // Flatten sequence expressions.
	      SequenceExpression: {
	        exit: function exit(path) {
	          if (path.node[seqExprSeen]) {
	            return;
	          }

	          function flatten(node) {
	            node[seqExprSeen] = true;
	            var ret = [];
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	              for (var _iterator3 = node.expressions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var n = _step3.value;

	                if (t.isSequenceExpression(n)) {
	                  ret.push.apply(ret, _toConsumableArray(flatten(n)));
	                } else {
	                  ret.push(n);
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

	            return ret;
	          }

	          path.node.expressions = flatten(path.node);
	        }
	      },

	      SwitchCase: function SwitchCase(path) {
	        var node = path.node;

	        if (!node.consequent.length) {
	          return;
	        }

	        node.consequent = toMultipleSequenceExpressions(node.consequent);
	      },


	      SwitchStatement: {
	        exit: [
	        // Convert switch statements with all returns in their cases
	        // to return conditional.
	        function (path) {
	          var node = path.node;

	          // Need to be careful of side-effects.

	          if (!t.isIdentifier(node.discriminant)) {
	            return;
	          }

	          if (!node.cases.length) {
	            return;
	          }

	          var consTestPairs = [];
	          var fallThru = [];
	          var defaultRet = void 0;
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = node.cases[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var switchCase = _step4.value;

	              if (switchCase.consequent.length > 1) {
	                return;
	              }

	              var cons = switchCase.consequent[0];

	              // default case
	              if (!switchCase.test) {
	                if (!t.isReturnStatement(cons)) {
	                  return;
	                }
	                defaultRet = cons;
	                continue;
	              }

	              if (!switchCase.consequent.length) {
	                fallThru.push(switchCase.test);
	                continue;
	              }

	              // TODO: can we void it?
	              if (!t.isReturnStatement(cons)) {
	                return;
	              }

	              var test = t.binaryExpression("===", node.discriminant, switchCase.test);

	              if (fallThru.length && !defaultRet) {
	                test = fallThru.reduceRight(function (right, test) {
	                  return t.logicalExpression("||", t.binaryExpression("===", node.discriminant, test), right);
	                }, test);
	              }
	              fallThru = [];

	              consTestPairs.push([test, cons.argument || VOID_0]);
	            }

	            // Bail if we have any remaining fallthrough
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }

	          if (fallThru.length) {
	            return;
	          }

	          // We need the default to be there to make sure there is an oppurtinity
	          // not to return.
	          if (!defaultRet) {
	            if (path.inList) {
	              var nextPath = path.getSibling(path.key + 1);
	              if (nextPath.isReturnStatement()) {
	                defaultRet = nextPath.node;
	                nextPath.remove();
	              } else if (!nextPath.node && path.parentPath.parentPath.isFunction()) {
	                // If this is the last statement in a function we just fake a void return.
	                defaultRet = t.returnStatement(VOID_0);
	              } else {
	                return;
	              }
	            } else {
	              return;
	            }
	          }

	          var cond = consTestPairs.reduceRight(function (alt, _ref5) {
	            var _ref6 = _slicedToArray(_ref5, 2),
	                test = _ref6[0],
	                cons = _ref6[1];

	            return t.conditionalExpression(test, cons, alt);
	          }, defaultRet.argument || VOID_0);

	          path.replaceWith(t.returnStatement(cond));

	          // Maybe now we can merge with some previous switch statement.
	          if (path.inList) {
	            var prev = path.getSibling(path.key - 1);
	            if (prev.isSwitchStatement()) {
	              prev.visit();
	            }
	          }
	        },

	        // Convert switches into conditionals.
	        function (path) {
	          var node = path.node;

	          // Need to be careful of side-effects.

	          if (!t.isIdentifier(node.discriminant)) {
	            return;
	          }

	          if (!node.cases.length) {
	            return;
	          }

	          var exprTestPairs = [];
	          var fallThru = [];
	          var defaultExpr = void 0;
	          var _iteratorNormalCompletion5 = true;
	          var _didIteratorError5 = false;
	          var _iteratorError5 = undefined;

	          try {
	            for (var _iterator5 = node.cases[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	              var switchCase = _step5.value;

	              if (!switchCase.test) {
	                if (switchCase.consequent.length !== 1) {
	                  return;
	                }
	                if (!t.isExpressionStatement(switchCase.consequent[0])) {
	                  return;
	                }
	                defaultExpr = switchCase.consequent[0].expression;
	                continue;
	              }

	              if (!switchCase.consequent.length) {
	                fallThru.push(switchCase.test);
	                continue;
	              }

	              var _switchCase$consequen = _slicedToArray(switchCase.consequent, 2),
	                  cons = _switchCase$consequen[0],
	                  breakStatement = _switchCase$consequen[1];

	              if (switchCase === node.cases[node.cases.length - 1]) {
	                if (breakStatement && !t.isBreakStatement(breakStatement)) {
	                  return;
	                }
	              } else if (!t.isBreakStatement(breakStatement)) {
	                return;
	              }

	              if (!t.isExpressionStatement(cons) || switchCase.consequent.length > 2) {
	                return;
	              }

	              var test = t.binaryExpression("===", node.discriminant, switchCase.test);
	              if (fallThru.length && !defaultExpr) {
	                test = fallThru.reduceRight(function (right, test) {
	                  return t.logicalExpression("||", t.binaryExpression("===", node.discriminant, test), right);
	                }, test);
	              }
	              fallThru = [];

	              exprTestPairs.push([test, cons.expression]);
	            }
	          } catch (err) {
	            _didIteratorError5 = true;
	            _iteratorError5 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	              }
	            } finally {
	              if (_didIteratorError5) {
	                throw _iteratorError5;
	              }
	            }
	          }

	          if (fallThru.length) {
	            return;
	          }

	          var cond = exprTestPairs.reduceRight(function (alt, _ref7) {
	            var _ref8 = _slicedToArray(_ref7, 2),
	                test = _ref8[0],
	                cons = _ref8[1];

	            return t.conditionalExpression(test, cons, alt);
	          }, defaultExpr || VOID_0);

	          path.replaceWith(cond);
	        }, function (path) {
	          var node = path.node;

	          if (!node.cases.length) {
	            return;
	          }

	          var lastCase = path.get("cases")[node.cases.length - 1];
	          if (!lastCase.node.consequent.length) {
	            return;
	          }

	          var potentialBreak = lastCase.get("consequent")[lastCase.node.consequent.length - 1];
	          if (t.isBreakStatement(potentialBreak) && potentialBreak.node.label === null) {
	            potentialBreak.remove();
	          }
	        }, createPrevExpressionEater("switch")]
	      }
	    }
	  };

	  function flipNegation(node) {
	    if (!node.consequent || !node.alternate) {
	      return;
	    }

	    var test = node.test;
	    var flip = false;

	    if (t.isBinaryExpression(test)) {
	      if (test.operator === "!==") {
	        test.operator = "===";
	        flip = true;
	      }

	      if (test.operator === "!=") {
	        test.operator = "==";
	        flip = true;
	      }
	    }

	    if (t.isUnaryExpression(test, { operator: "!" })) {
	      node.test = test.argument;
	      flip = true;
	    }

	    if (flip) {
	      var consequent = node.consequent;
	      node.consequent = node.alternate;
	      node.alternate = consequent;
	    }
	  }

	  function needsBlock(node, parent) {
	    return t.isFunction(parent) && node === parent.body || t.isTryStatement(parent) || t.isCatchClause(parent) || t.isSwitchStatement(parent) || isSingleBlockScopeDeclaration(node) && t.isIfStatement(parent);
	  }

	  function isSingleBlockScopeDeclaration(block) {
	    return t.isBlockStatement(block) && block.body.length === 1 && (t.isVariableDeclaration(block.body[0], { kind: "let" }) || t.isVariableDeclaration(block.body[0], { kind: "const" }) || t.isFunctionDeclaration(block.body[0]));
	  }

	  function isVoid0(expr) {
	    return expr === VOID_0 || t.isUnaryExpression(expr, { operator: "void" }) && t.isNumericLiteral(expr.argument, { value: 0 });
	  }

	  function earlyReturnTransform(path) {
	    var node = path.node;

	    if (!t.isBlockStatement(node.body)) {
	      return;
	    }

	    for (var i = node.body.body.length; i >= 0; i--) {
	      var statement = node.body.body[i];
	      if (t.isIfStatement(statement) && !statement.alternate && t.isReturnStatement(statement.consequent) && !statement.consequent.argument) {
	        genericEarlyExitTransform(path.get("body").get("body")[i]);
	      }
	    }
	  }

	  function earlyContinueTransform(path) {
	    var node = path.node;

	    if (!t.isBlockStatement(node.body)) {
	      return;
	    }

	    for (var i = node.body.body.length; i >= 0; i--) {
	      var statement = node.body.body[i];
	      if (t.isIfStatement(statement) && !statement.alternate && t.isContinueStatement(statement.consequent) && !statement.consequent.label) {
	        genericEarlyExitTransform(path.get("body").get("body")[i]);
	      }
	    }

	    // We may have reduced the body to a single statement.
	    if (node.body.body.length === 1) {
	      path.get("body").replaceWith(node.body.body[0]);
	    }
	  }

	  function genericEarlyExitTransform(path) {
	    var node = path.node;

	    var statements = path.parentPath.get(path.listKey).slice(path.key + 1).filter(function (stmt) {
	      return !stmt.isFunctionDeclaration();
	    });

	    // deopt for any block scoped bindings
	    // issue#399
	    var deopt = !statements.every(function (stmt) {
	      if (!(stmt.isVariableDeclaration({ kind: "let" }) || stmt.isVariableDeclaration({ kind: "const" }))) {
	        return true;
	      }
	      var ids = Object.keys(stmt.getBindingIdentifiers());
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;

	      try {
	        for (var _iterator6 = ids[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var id = _step6.value;

	          var binding = path.scope.getBinding(id);

	          // TODO
	          // Temporary Fix
	          // if there is no binding, we assume it is referenced outside
	          // and deopt to avoid bugs
	          if (!binding) {
	            return false;
	          }

	          var refs = [].concat(_toConsumableArray(binding.referencePaths), _toConsumableArray(binding.constantViolations));
	          var _iteratorNormalCompletion7 = true;
	          var _didIteratorError7 = false;
	          var _iteratorError7 = undefined;

	          try {
	            for (var _iterator7 = refs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	              var ref = _step7.value;

	              if (!ref.isIdentifier()) return false;
	              var fnParent = ref.getFunctionParent();

	              // TODO
	              // Usage of scopes and bindings in simplify plugin results in
	              // undefined bindings because scope changes are not updated in the
	              // scope tree. So, we deopt whenever we encounter one such issue
	              // and not perform the transformation
	              if (!fnParent) {
	                return false;
	              }
	              if (fnParent.scope !== path.scope) return false;
	            }
	          } catch (err) {
	            _didIteratorError7 = true;
	            _iteratorError7 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                _iterator7.return();
	              }
	            } finally {
	              if (_didIteratorError7) {
	                throw _iteratorError7;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }

	      return true;
	    });

	    if (deopt) {
	      path.visit();
	      return false;
	    }

	    if (!statements.length) {
	      path.replaceWith(t.expressionStatement(node.test));
	      return;
	    }

	    var test = node.test;
	    if (t.isBinaryExpression(test) && test.operator === "!==") {
	      test.operator = "===";
	    } else if (t.isBinaryExpression(test) && test.operator === "!=") {
	      test.operator = "==";
	    } else if (t.isUnaryExpression(test, { operator: "!" })) {
	      node.test = test.argument;
	    } else {
	      node.test = t.unaryExpression("!", node.test, true);
	    }

	    path.get("consequent").replaceWith(t.blockStatement(statements.map(function (stmt) {
	      return t.clone(stmt.node);
	    })));

	    var l = statements.length;
	    while (l-- > 0) {
	      if (!statements[l].isFunctionDeclaration()) {
	        path.getSibling(path.key + 1).remove();
	      }
	    }

	    // this should take care of removing the block
	    path.visit();
	  }

	  function createPrevExpressionEater(keyword) {
	    var key = void 0;
	    switch (keyword) {
	      case "switch":
	        key = "discriminant";
	        break;
	      case "throw":
	      case "return":
	        key = "argument";
	        break;
	      case "if":
	        key = "test";
	        break;
	      case "for-in":
	        key = "right";
	        break;
	    }

	    return function (path) {
	      if (!path.inList) {
	        return;
	      }

	      var node = path.node;

	      var prev = path.getSibling(path.key - 1);
	      if (!prev.isExpressionStatement()) {
	        return;
	      }

	      var seq = prev.node.expression;
	      if (node[key]) {
	        if (t.isSequenceExpression(seq)) {
	          seq.expressions.push(node[key]);
	        } else {
	          seq = t.sequenceExpression([seq, node[key]]);
	        }
	      } else {
	        if (t.isSequenceExpression(seq)) {
	          var lastExpr = seq.expressions[seq.expressions.length - 1];
	          seq.expressions[seq.expressions.length - 1] = t.unaryExpression("void", lastExpr, true);
	        } else {
	          seq = t.unaryExpression("void", seq, true);
	        }
	      }

	      if (seq) {
	        node[key] = seq;
	        prev.remove();

	        // Since we were able to merge some stuff it's possible that this has opened
	        // oppurtinties for other transforms to happen.
	        // TODO: Look into changing the traversal order from bottom to up to avoid
	        // having to revisit things.
	        if (path.parentPath.parent) {
	          path.parentPath.parent[shouldRevisit] = true;
	        }
	      }
	    };
	  }

	  function isPatternMatchesPath(patternValue, inputPath) {
	    if (Array.isArray(patternValue)) {
	      for (var i = 0; i < patternValue.length; i++) {
	        if (isPatternMatchesPath(patternValue[i], inputPath)) {
	          return true;
	        }
	      }
	      return false;
	    }
	    if (typeof patternValue === "function") {
	      return patternValue(inputPath);
	    }
	    if (isNodeOfType(inputPath.node, patternValue)) return true;
	    var evalResult = inputPath.evaluate();
	    if (!evalResult.confident || !inputPath.isPure()) return false;
	    return evalResult.value === patternValue;
	  }

	  // path1 -> path2
	  // is path1 an ancestor of path2
	  function isAncestor(path1, path2) {
	    return !!path2.findParent(function (parent) {
	      return parent === path1;
	    });
	  }
	};

/***/ }),
/* 80 */
9,
/* 81 */
[91, 19],
/* 82 */
/***/ (function(module, exports) {

	'use strict';

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    function isExpression(node) {
	        if (node == null) {
	            return false;
	        }
	        switch (node.type) {
	            case 'ArrayExpression':
	            case 'AssignmentExpression':
	            case 'BinaryExpression':
	            case 'CallExpression':
	            case 'ConditionalExpression':
	            case 'FunctionExpression':
	            case 'Identifier':
	            case 'Literal':
	            case 'LogicalExpression':
	            case 'MemberExpression':
	            case 'NewExpression':
	            case 'ObjectExpression':
	            case 'SequenceExpression':
	            case 'ThisExpression':
	            case 'UnaryExpression':
	            case 'UpdateExpression':
	                return true;
	        }
	        return false;
	    }

	    function isIterationStatement(node) {
	        if (node == null) {
	            return false;
	        }
	        switch (node.type) {
	            case 'DoWhileStatement':
	            case 'ForInStatement':
	            case 'ForStatement':
	            case 'WhileStatement':
	                return true;
	        }
	        return false;
	    }

	    function isStatement(node) {
	        if (node == null) {
	            return false;
	        }
	        switch (node.type) {
	            case 'BlockStatement':
	            case 'BreakStatement':
	            case 'ContinueStatement':
	            case 'DebuggerStatement':
	            case 'DoWhileStatement':
	            case 'EmptyStatement':
	            case 'ExpressionStatement':
	            case 'ForInStatement':
	            case 'ForStatement':
	            case 'IfStatement':
	            case 'LabeledStatement':
	            case 'ReturnStatement':
	            case 'SwitchStatement':
	            case 'ThrowStatement':
	            case 'TryStatement':
	            case 'VariableDeclaration':
	            case 'WhileStatement':
	            case 'WithStatement':
	                return true;
	        }
	        return false;
	    }

	    function isSourceElement(node) {
	        return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
	    }

	    function trailingStatement(node) {
	        switch (node.type) {
	            case 'IfStatement':
	                if (node.alternate != null) {
	                    return node.alternate;
	                }
	                return node.consequent;

	            case 'LabeledStatement':
	            case 'ForStatement':
	            case 'ForInStatement':
	            case 'WhileStatement':
	            case 'WithStatement':
	                return node.body;
	        }
	        return null;
	    }

	    function isProblematicIfStatement(node) {
	        var current;

	        if (node.type !== 'IfStatement') {
	            return false;
	        }
	        if (node.alternate == null) {
	            return false;
	        }
	        current = node.consequent;
	        do {
	            if (current.type === 'IfStatement') {
	                if (current.alternate == null) {
	                    return true;
	                }
	            }
	            current = trailingStatement(current);
	        } while (current);

	        return false;
	    }

	    module.exports = {
	        isExpression: isExpression,
	        isStatement: isStatement,
	        isIterationStatement: isIterationStatement,
	        isSourceElement: isSourceElement,
	        isProblematicIfStatement: isProblematicIfStatement,

	        trailingStatement: trailingStatement
	    };
	})();
	/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    var code = __webpack_require__(23);

	    function isStrictModeReservedWordES6(id) {
	        switch (id) {
	            case 'implements':
	            case 'interface':
	            case 'package':
	            case 'private':
	            case 'protected':
	            case 'public':
	            case 'static':
	            case 'let':
	                return true;
	            default:
	                return false;
	        }
	    }

	    function isKeywordES5(id, strict) {
	        // yield should not be treated as keyword under non-strict mode.
	        if (!strict && id === 'yield') {
	            return false;
	        }
	        return isKeywordES6(id, strict);
	    }

	    function isKeywordES6(id, strict) {
	        if (strict && isStrictModeReservedWordES6(id)) {
	            return true;
	        }

	        switch (id.length) {
	            case 2:
	                return id === 'if' || id === 'in' || id === 'do';
	            case 3:
	                return id === 'var' || id === 'for' || id === 'new' || id === 'try';
	            case 4:
	                return id === 'this' || id === 'else' || id === 'case' || id === 'void' || id === 'with' || id === 'enum';
	            case 5:
	                return id === 'while' || id === 'break' || id === 'catch' || id === 'throw' || id === 'const' || id === 'yield' || id === 'class' || id === 'super';
	            case 6:
	                return id === 'return' || id === 'typeof' || id === 'delete' || id === 'switch' || id === 'export' || id === 'import';
	            case 7:
	                return id === 'default' || id === 'finally' || id === 'extends';
	            case 8:
	                return id === 'function' || id === 'continue' || id === 'debugger';
	            case 10:
	                return id === 'instanceof';
	            default:
	                return false;
	        }
	    }

	    function isReservedWordES5(id, strict) {
	        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
	    }

	    function isReservedWordES6(id, strict) {
	        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
	    }

	    function isRestrictedWord(id) {
	        return id === 'eval' || id === 'arguments';
	    }

	    function isIdentifierNameES5(id) {
	        var i, iz, ch;

	        if (id.length === 0) {
	            return false;
	        }

	        ch = id.charCodeAt(0);
	        if (!code.isIdentifierStartES5(ch)) {
	            return false;
	        }

	        for (i = 1, iz = id.length; i < iz; ++i) {
	            ch = id.charCodeAt(i);
	            if (!code.isIdentifierPartES5(ch)) {
	                return false;
	            }
	        }
	        return true;
	    }

	    function decodeUtf16(lead, trail) {
	        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	    }

	    function isIdentifierNameES6(id) {
	        var i, iz, ch, lowCh, check;

	        if (id.length === 0) {
	            return false;
	        }

	        check = code.isIdentifierStartES6;
	        for (i = 0, iz = id.length; i < iz; ++i) {
	            ch = id.charCodeAt(i);
	            if (0xD800 <= ch && ch <= 0xDBFF) {
	                ++i;
	                if (i >= iz) {
	                    return false;
	                }
	                lowCh = id.charCodeAt(i);
	                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
	                    return false;
	                }
	                ch = decodeUtf16(ch, lowCh);
	            }
	            if (!check(ch)) {
	                return false;
	            }
	            check = code.isIdentifierPartES6;
	        }
	        return true;
	    }

	    function isIdentifierES5(id, strict) {
	        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
	    }

	    function isIdentifierES6(id, strict) {
	        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
	    }

	    module.exports = {
	        isKeywordES5: isKeywordES5,
	        isKeywordES6: isKeywordES6,
	        isReservedWordES5: isReservedWordES5,
	        isReservedWordES6: isReservedWordES6,
	        isRestrictedWord: isRestrictedWord,
	        isIdentifierNameES5: isIdentifierNameES5,
	        isIdentifierNameES6: isIdentifierNameES6,
	        isIdentifierES5: isIdentifierES5,
	        isIdentifierES6: isIdentifierES6
	    };
	})();
	/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	  'use strict';

	  exports.ast = __webpack_require__(82);
	  exports.code = __webpack_require__(23);
	  exports.keyword = __webpack_require__(83);
	})();
	/* vim: set sw=4 ts=4 et tw=80 : */

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var isVoid0 = __webpack_require__(__webpack_module_template_argument_0__)(t);

	  return {
	    name: "minify-flip-comparisons",
	    visitor: {
	      // flip comparisons with a pure right hand value, this ensures
	      // consistency with comparisons and increases the length of
	      // strings that gzip can match
	      // typeof blah === 'function' -> 'function' === typeof blah
	      BinaryExpression: function BinaryExpression(path) {
	        var node = path.node;
	        var right = node.right,
	            left = node.left;

	        // Make sure we have a constant on the right.

	        if (!t.isLiteral(right) && !isVoid0(right) && !(t.isUnaryExpression(right) && t.isLiteral(right.argument)) && !t.isObjectExpression(right) && !t.isArrayExpression(right)) {
	          return;
	        }

	        // Commutative operators.
	        if (t.EQUALITY_BINARY_OPERATORS.indexOf(node.operator) >= 0 || ["*", "^", "&", "|"].indexOf(node.operator) >= 0) {
	          node.left = right;
	          node.right = left;
	          return;
	        }

	        if (t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(node.operator) >= 0) {
	          node.left = right;
	          node.right = left;
	          var operator = void 0;
	          switch (node.operator) {
	            case ">":
	              operator = "<";
	              break;
	            case "<":
	              operator = ">";
	              break;
	            case ">=":
	              operator = "<=";
	              break;
	            case "<=":
	              operator = ">=";
	              break;
	          }
	          node.operator = operator;
	          return;
	        }
	      }
	    }
	  };
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	"use strict";

	module.exports = function (_ref) {
	  var t = _ref.types;

	  var flipExpressions = __webpack_require__(__webpack_module_template_argument_0__)(t);

	  return {
	    name: "minify-guarded-expressions",
	    visitor: {
	      // Convert guarded expressions
	      // !a && b() --> a || b();
	      // This could change the return result of the expression so we only do it
	      // on things where the result is ignored.
	      LogicalExpression: {
	        enter: [function (path) {
	          var node = path.node;

	          var left = path.get("left");
	          var right = path.get("right");

	          // issues - 171, 174, 176
	          // we assume that it is returned/assigned/part of a bigger expression
	          // or utilized somehow
	          // we check if we shouldBail only when evaluating
	          // the rightside of the expression;
	          // if the left side is evaluated to be deterministic,
	          // we can safely replace the entire expression
	          var shouldBail = !path.parentPath.isExpressionStatement();

	          if (node.operator === "&&") {
	            var leftTruthy = left.evaluateTruthy();
	            if (leftTruthy === false) {
	              // Short-circuit
	              path.replaceWith(node.left);
	            } else if (leftTruthy === true && left.isPure()) {
	              path.replaceWith(node.right);
	            } else if (right.evaluateTruthy() === false && right.isPure() && !shouldBail) {
	              path.replaceWith(node.left);
	            }
	          } else if (node.operator === "||") {
	            var _leftTruthy = left.evaluateTruthy();
	            if (_leftTruthy === false && left.isPure()) {
	              path.replaceWith(node.right);
	            } else if (_leftTruthy === true) {
	              // Short-circuit
	              path.replaceWith(node.left);
	            } else if (right.evaluateTruthy() === false && right.isPure() && !shouldBail) {
	              path.replaceWith(node.left);
	            }
	          }
	        }, function (path) {
	          var node = path.node;

	          if (flipExpressions.hasSeen(node)) {
	            return;
	          }

	          if (!path.parentPath.isExpressionStatement() && !(path.parentPath.isSequenceExpression() && path.parentPath.parentPath.isExpressionStatement())) {
	            return;
	          }

	          // Start counting savings from one since we can ignore the last
	          // expression.
	          if (flipExpressions.shouldFlip(node, 1)) {
	            var newNode = flipExpressions.flip(node, true);
	            path.replaceWith(newNode);
	          }
	        }]
	      }
	    }
	  };
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	"use strict";

	function replaceArray(t, path) {
	  var node = path.node;
	  // arguments is taken :(

	  var constructorArgs = path.get("arguments");
	  if (t.isIdentifier(node.callee, { name: "Array" }) && !path.scope.getBinding("Array")) {
	    if (constructorArgs.length === 0) {
	      // Array() -> []
	      path.replaceWith(t.arrayExpression([]));
	    } else if (constructorArgs.length === 1) {
	      var arg = constructorArgs[0];
	      var result = arg.evaluate();

	      if (result.confident) {
	        if (typeof result.value === "number") {
	          if (result.value >= 0 && result.value <= 6 && result.value % 1 === 0) {
	            // "Array(7)" is shorter than "[,,,,,,,]"
	            path.replaceWith(t.arrayExpression(Array(result.value).fill(null)));
	          } else {
	            dropNewIfPresent();
	          }
	        } else {
	          // Array("Asdf"), Array(true), Array(false)
	          path.replaceWith(t.arrayExpression([t.valueToNode(result.value)]));
	        }
	      } else {
	        var transformables = ["ArrayExpression", "ObjectExpression", "FunctionExpression", "ArrowFunctionExpression", "ClassExpression"];
	        if (transformables.indexOf(arg.node.type) !== -1) {
	          // Array([]), Array({})
	          // Array(()=>{}), Array(class{}), Array(function(){})
	          path.replaceWith(t.arrayExpression([arg.node]));
	        } else {
	          // Array(x); Array(a.b);
	          dropNewIfPresent();
	        }
	      }
	    } else {
	      // Array(2,3), Array(a,b) => [2,3], [a,b]
	      path.replaceWith(t.arrayExpression(node.arguments));
	    }
	    return true;
	  }

	  function dropNewIfPresent() {
	    if (path.isNewExpression()) {
	      path.replaceWith(t.callExpression(node.callee, node.arguments));
	    }
	  }
	}

	function replaceObject(t, path) {
	  var node = path.node;

	  if (t.isIdentifier(node.callee, { name: "Object" }) && !path.scope.getBinding("Object")) {
	    var isVoid0 = __webpack_require__(__webpack_module_template_argument_0__)(t);
	    var arg = node.arguments[0];
	    var binding = arg && t.isIdentifier(arg) && path.scope.getBinding(arg.name);

	    // Object() -> {}
	    if (node.arguments.length === 0) {
	      path.replaceWith(t.objectExpression([]));

	      // Object([]) -> []
	    } else if (arg.type === "ArrayExpression" || t.isFunctionExpression(arg)) {
	      path.replaceWith(arg);

	      // Object(null) -> {}
	    } else if (isVoid0(arg) || arg.name === "undefined" || arg.type === "NullLiteral" || arg.type === "ObjectExpression" && arg.properties.length === 0) {
	      path.replaceWith(t.objectExpression([]));

	      // Object(localFn) -> localFn
	    } else if (binding && binding.path.isFunction()) {
	      path.replaceWith(arg);

	      // Object({a:b}) -> {a:b}
	    } else if (arg.type === "ObjectExpression") {
	      path.replaceWith(arg);

	      // new Object(a) -> Object(a)
	    } else if (node.type === "NewExpression") {
	      path.replaceWith(t.callExpression(node.callee, node.arguments));
	    }
	    return true;
	  }
	}

	function defaults() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$boolean = _ref.boolean,
	      boolean = _ref$boolean === undefined ? true : _ref$boolean,
	      _ref$number = _ref.number,
	      number = _ref$number === undefined ? true : _ref$number,
	      _ref$string = _ref.string,
	      string = _ref$string === undefined ? true : _ref$string,
	      _ref$array = _ref.array,
	      array = _ref$array === undefined ? true : _ref$array,
	      _ref$object = _ref.object,
	      object = _ref$object === undefined ? true : _ref$object;

	  return {
	    boolean: boolean,
	    number: number,
	    string: string,
	    array: array,
	    object: object
	  };
	}

	module.exports = function (_ref2) {
	  var t = _ref2.types;

	  return {
	    name: "minify-type-constructors",
	    visitor: {
	      CallExpression: function CallExpression(path) {
	        var node = path.node;

	        var opts = defaults(this.opts);

	        // Boolean(foo) -> !!foo
	        if (opts.boolean && t.isIdentifier(node.callee, { name: "Boolean" }) && node.arguments.length === 1 && !path.scope.getBinding("Boolean")) {
	          path.replaceWith(t.unaryExpression("!", t.unaryExpression("!", node.arguments[0], true), true));
	          return;
	        }

	        // Number(foo) -> +foo
	        if (opts.number && t.isIdentifier(node.callee, { name: "Number" }) && node.arguments.length === 1 && !path.scope.getBinding("Number")) {
	          path.replaceWith(t.unaryExpression("+", node.arguments[0], true));
	          return;
	        }

	        // String(foo) -> foo + ''
	        if (opts.string && t.isIdentifier(node.callee, { name: "String" }) && node.arguments.length === 1 && !path.scope.getBinding("String")) {
	          path.replaceWith(t.binaryExpression("+", node.arguments[0], t.stringLiteral("")));
	          return;
	        }

	        // Array() -> []
	        if (opts.array && replaceArray(t, path)) {
	          return;
	        }

	        // Object() -> {}
	        if (opts.object && replaceObject(t, path)) {
	          return;
	        }
	      },
	      NewExpression: function NewExpression(path) {
	        var opts = defaults(this.opts);

	        // new Array() -> []
	        if (opts.array && replaceArray(t, path)) {
	          return;
	        }

	        // new Object() -> {}
	        if (opts.object && replaceObject(t, path)) {
	          return;
	        }
	      }
	    }
	  };
	};

/***/ })
/******/ ])))
});
;
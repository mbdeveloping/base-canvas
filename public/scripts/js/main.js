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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/es/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es/Actor.js":
/*!*************************!*\
  !*** ./src/es/Actor.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Actor; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/es/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Actor =
/*#__PURE__*/
function () {
  function Actor() {
    _classCallCheck(this, Actor);

    this.height = 100, this.width = 50, this.color = 'black', this.position = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0), this.velocity = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](), this.jumpDistance = 25;
    this.speed = 5;
  }

  _createClass(Actor, [{
    key: "moveLeft",
    value: function moveLeft() {
      this.velocity.setX(-this.speed);
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.velocity.setX(this.speed);
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.velocity.setY(-this.speed);
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.velocity.setY(this.speed);
    }
  }, {
    key: "stop",
    value: function stop(debug) {
      this.velocity.setX(0);

      if (debug) {
        this.velocity.y = 0;
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      // console.log('jumping!');
      this.velocity.setY(-this.jumpDistance);
    }
  }, {
    key: "attack",
    value: function attack() {
      console.log('attacking!');
    }
  }, {
    key: "update",
    value: function update(step) {
      // this.position.x += Math.ceil(this.velocity.x * step);
      // this.position.y += Math.ceil(this.velocity.y * step);
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "left",
    get: function get() {
      return this.position.x;
    }
  }, {
    key: "right",
    get: function get() {
      return this.position.x + this.width;
    }
  }, {
    key: "top",
    get: function get() {
      return this.position.y;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.position.y + this.height;
    }
  }]);

  return Actor;
}();



/***/ }),

/***/ "./src/es/Controller.js":
/*!******************************!*\
  !*** ./src/es/Controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.left = {
      active: false
    }, this.right = {
      active: false
    }, this.jump = {
      active: false
    }, this.up = {
      active: false
    }, this.down = {
      active: false
    }, this.attack = {
      active: false
    };
  }

  _createClass(Controller, [{
    key: "keyEvent",
    value: function keyEvent(event) {
      switch (event.keyCode) {
        case 65:
          event.type === 'keydown' ? this.left.active = true : this.left.active = false; //A

          break;

        case 68:
          event.type === 'keydown' ? this.right.active = true : this.right.active = false; //D

          break;

        case 32:
          event.type === 'keydown' ? this.jump.active = true : this.jump.active = false; //SPACE

          break;

        case 13:
          event.type === 'keydown' ? this.attack.active = true : this.attack.active = false; //ENTER

          break;
        //debug

        case 87:
          event.type === 'keydown' ? this.up.active = true : this.up.active = false; //W

          break;

        case 83:
          event.type === 'keydown' ? this.down.active = true : this.down.active = false; //W

          break;
      }
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/es/Engine.js":
/*!**************************!*\
  !*** ./src/es/Engine.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Engine =
/*#__PURE__*/
function () {
  function Engine(game) {
    _classCallCheck(this, Engine);

    this.game = game, this.currentTime = 0, this.deltaTime = 0, this.lastTime = this.timestamp(), this.step = 1 / 60;
  }

  _createClass(Engine, [{
    key: "timestamp",
    value: function timestamp() {
      return window.performance && window.performance.currentTime ? window.performance.currentTime() : new Date().getTime();
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this = this;

      this.currentTime = this.timestamp();
      this.deltaTime = this.deltaTime + Math.min(1, (this.currentTime - this.lastTime) / 1000);

      while (this.deltaTime > this.step) {
        this.deltaTime = this.deltaTime - this.step;
        this.game.update(this.step, this.currentTime);
      }

      this.game.render();
      this.lastTime = this.currentTime;
      requestAnimationFrame(function () {
        return _this.gameLoop();
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.gameLoop();
      });
    }
  }]);

  return Engine;
}();



/***/ }),

/***/ "./src/es/Game.js":
/*!************************!*\
  !*** ./src/es/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/es/index.js");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./World */ "./src/es/World.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.debug = false, //disables gravity and let player freely walk around canvas
    this.canvas = null, this.context = null, this.canvasWidth = 1300, this.canvasHeight = 650, this.world = new _World__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvasWidth, this.canvasHeight, this.canvasWidth, this.canvasHeight, this.debug);
  }

  _createClass(Game, [{
    key: "update",
    value: function update(step, currentTime) {
      this.world.update(step, currentTime); //movements

      if (_index__WEBPACK_IMPORTED_MODULE_0__["controller"].left.active) {
        this.world.player.moveLeft();
      } else if (_index__WEBPACK_IMPORTED_MODULE_0__["controller"].right.active) {
        this.world.player.moveRight();
      } else if (this.debug && _index__WEBPACK_IMPORTED_MODULE_0__["controller"].up.active) {
        this.world.player.moveUp();
      } else if (this.debug && _index__WEBPACK_IMPORTED_MODULE_0__["controller"].down.active) {
        this.world.player.moveDown();
      } else {
        this.world.player.stop(this.debug);
      } //attack


      if (_index__WEBPACK_IMPORTED_MODULE_0__["controller"].attack.active) {
        this.world.player.attack();
      }

      if (_index__WEBPACK_IMPORTED_MODULE_0__["controller"].jump.active && this.world.player.isOnGround) {
        this.world.player.isOnGround = false;
        this.world.player.jump();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.world.render(this.context);
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      this.canvas = document.createElement('canvas');
      document.getElementById('body').appendChild(this.canvas);
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;
      this.context = this.canvas.getContext('2d');
    }
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "init",
    value: function init() {
      this.createCanvas();
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/es/Player.js":
/*!**************************!*\
  !*** ./src/es/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ "./src/es/Actor.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Player =
/*#__PURE__*/
function (_Actor) {
  _inherits(Player, _Actor);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this));
    _this.color = 'red';
    return _this;
  }

  return Player;
}(_Actor__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/es/Vector.js":
/*!**************************!*\
  !*** ./src/es/Vector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2D; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector2D =
/*#__PURE__*/
function () {
  function Vector2D() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2D);

    this.x = x, this.y = y;
  }

  _createClass(Vector2D, [{
    key: "setX",
    value: function setX(posX) {
      this.x = posX;
    }
  }, {
    key: "setY",
    value: function setY(posY) {
      this.y = posY;
    }
  }, {
    key: "getX",
    get: function get() {
      return this.x;
    }
  }, {
    key: "getY",
    get: function get() {
      return this.y;
    }
  }]);

  return Vector2D;
}();



/***/ }),

/***/ "./src/es/World.js":
/*!*************************!*\
  !*** ./src/es/World.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return World; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/es/Vector.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/es/Player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var World =
/*#__PURE__*/
function () {
  function World(width, height, canvasWidth, canvasHeight, debug) {
    _classCallCheck(this, World);

    this.debug = debug, this.width = width, this.height = height, this.position = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0), this.canvasWidth = canvasWidth, this.canvasHeight = canvasHeight, this.gravity = 1, this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"](), this.actors = [], this.enemies = [];
  } //temp


  _createClass(World, [{
    key: "createSky",
    value: function createSky(ctx) {
      ctx.fillStyle = 'skyblue';
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(step, currentTime) {
      if (this.debug) {
        this.gravity = 0;
      }
    }
  }, {
    key: "render",
    value: function render(ctx) {
      this.createSky(ctx);
    }
  }]);

  return World;
}();



/***/ }),

/***/ "./src/es/index.js":
/*!*************************!*\
  !*** ./src/es/index.js ***!
  \*************************/
/*! exports provided: controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controller", function() { return controller; });
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/es/Controller.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/es/Game.js");
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Engine */ "./src/es/Engine.js");




var controller = new _Controller__WEBPACK_IMPORTED_MODULE_1__["default"]();
var game = new _Game__WEBPACK_IMPORTED_MODULE_2__["default"]();
var engine = new _Engine__WEBPACK_IMPORTED_MODULE_3__["default"](game);
game.init();
engine.start();
window.addEventListener('keydown', function (event) {
  return controller.keyEvent(event);
});
window.addEventListener('keyup', function (event) {
  return controller.keyEvent(event);
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
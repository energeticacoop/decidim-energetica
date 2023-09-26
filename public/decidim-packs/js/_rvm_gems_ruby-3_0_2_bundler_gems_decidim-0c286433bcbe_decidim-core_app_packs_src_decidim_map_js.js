"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["_rvm_gems_ruby-3_0_2_bundler_gems_decidim-0c286433bcbe_decidim-core_app_packs_src_decidim_map_js"],{

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_map_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/map/factory */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/factory.js");

$(function () {
  // Load the map controller factory method in the document.ready handler to
  // allow overriding it by any script that is loaded before the document is
  // ready.
  var $mapElements = $("[data-decidim-map]");
  if ($mapElements.length < 1 && $("#map").length > 0) {
    throw new Error("DEPRECATION: Please update your maps customizations or include 'decidim/map/legacy.js' for legacy support!");
  }
  $mapElements.each(function (_i, el) {
    var $map = $(el);
    var mapId = $map.attr("id");
    if (!mapId) {
      mapId = "map-".concat(Math.random().toString(36).substr(2, 9));
      $map.attr("id", mapId);
    }
    var mapConfig = $map.data("decidim-map");
    var ctrl = window.Decidim.createMapController(mapId, mapConfig);
    var map = ctrl.load();
    $map.data("map", map);
    $map.data("map-controller", ctrl);
    $map.trigger("configure.decidim", [map, mapConfig]);
    ctrl.start();

    // Indicates the map is loaded with the map objects initialized and ready
    // to be used.
    $map.trigger("ready.decidim", [map, mapConfig]);
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/drag_marker.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/drag_marker.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapDragMarkerController; }
/* harmony export */ });
/* harmony import */ var src_decidim_map_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/map/controller */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var MapDragMarkerController = /*#__PURE__*/function (_MapController) {
  _inherits(MapDragMarkerController, _MapController);
  var _super = _createSuper(MapDragMarkerController);
  function MapDragMarkerController() {
    _classCallCheck(this, MapDragMarkerController);
    return _super.apply(this, arguments);
  }
  _createClass(MapDragMarkerController, [{
    key: "start",
    value: function start() {
      if (this.config.marker) {
        this.addMarker(this.config.marker);
      } else {
        this.map.fitWorld();
      }
    }
  }, {
    key: "addMarker",
    value: function addMarker(markerData) {
      var _this = this;
      if (markerData.latitude === null || markerData.longitude === null) {
        return;
      }
      var coordinates = {
        lat: markerData.latitude,
        lng: markerData.longitude
      };
      this.triggerEvent("coordinates", [coordinates]);
      this.marker = L.marker(coordinates, {
        icon: this.createIcon(),
        keyboard: true,
        title: markerData.title,
        draggable: true
      });
      this.marker.on("drag", function (ev) {
        _this.triggerEvent("coordinates", [ev.target.getLatLng()]);
      });
      this.marker.addTo(this.map);
      var zoom = parseInt(this.config.zoom, 10) || 14;
      this.map.setView(coordinates, zoom);
    }
  }, {
    key: "getMarker",
    value: function getMarker() {
      return this.marker;
    }
  }, {
    key: "removeMarker",
    value: function removeMarker() {
      if (this.marker) {
        this.marker.remove();
        this.marker = null;
      }
    }
  }]);
  return MapDragMarkerController;
}(src_decidim_map_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/static.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/static.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapStaticController; }
/* harmony export */ });
/* harmony import */ var src_decidim_map_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/map/controller */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var openLink = window.open;
var MapStaticController = /*#__PURE__*/function (_MapController) {
  _inherits(MapStaticController, _MapController);
  var _super = _createSuper(MapStaticController);
  function MapStaticController() {
    _classCallCheck(this, MapStaticController);
    return _super.apply(this, arguments);
  }
  _createClass(MapStaticController, [{
    key: "start",
    value: function start() {
      var _this = this;
      this.map.removeControl(this.map.zoomControl);
      this.map.dragging.disable();
      this.map.touchZoom.disable();
      this.map.doubleClickZoom.disable();
      this.map.scrollWheelZoom.disable();
      this.map.boxZoom.disable();
      this.map.keyboard.disable();
      if (this.map.tap) {
        this.map.tap.disable();
      }
      if (this.config.zoom) {
        this.map.setZoom(this.config.zoom);
      } else {
        this.map.setZoom(15);
      }
      if (this.config.latitude && this.config.longitude) {
        var coordinates = [this.config.latitude, this.config.longitude];
        this.map.panTo(coordinates);
        var marker = L.marker(coordinates, {
          icon: this.createIcon(),
          keyboard: true,
          title: this.config.title
        }).addTo(this.map);
        marker._icon.removeAttribute("tabindex");
      }
      if (this.config.link) {
        this.map._container.addEventListener("click", function (ev) {
          ev.preventDefault();
          _this.map._container.focus();
          openLink(_this.config.link, "_blank");
        });
      }
    }
  }]);
  return MapStaticController;
}(src_decidim_map_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/factory.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/factory.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_map_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/map/icon */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/icon.js");
/* harmony import */ var src_decidim_map_controller_markers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/map/controller/markers */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/markers.js");
/* harmony import */ var src_decidim_map_controller_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/map/controller/static */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/static.js");
/* harmony import */ var src_decidim_map_controller_drag_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/map/controller/drag_marker */ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/controller/drag_marker.js");





/**
 * A factory method that creates a new map controller instance. This method
 * can be overridden in order to return different types of maps for
 * differently configured map elements.
 *
 * For instance, one map could pass an extra `type` configuration with the
 * value "custom" for the map element, this factory method would identify
 * it and then return a different controller for that map than the default.
 * This would allow this types of maps to function differently.
 *
 * An example how to use in the ERB view:
 *   <%= dynamic_map_for type: "custom" do %>
 *     <%= javascript_pack_tag "map_customization" %>
 *   <% end %>
 *
 * And then the actual customization at `map_customization.js.es6`:
 *   var originalCreateMapController = window.Decidim.createMapController;
 *   window.Decidim.createMapController = (mapId, config) => {
 *     if (config.type === "custom") {
 *       // Obviously you need to implement CustomMapController for this to
 *       // work. You can find an example at:
 *       // decidim-dev/app/packs/src/decidim/dev/test/custom_map_factory.js
 *       return new window.Decidim.CustomMapController(mapId, config);
 *     }
 *
 *     return originalCreateMapController(mapId, config);
 *   }
 *
 * @param {string} mapId The ID of the map element.
 * @param {Object} config The map configuration object.
 * @returns {MapController} The controller for the map.
 */
var createMapController = function createMapController(mapId, config) {
  if (config.type === "static") {
    return new src_decidim_map_controller_static__WEBPACK_IMPORTED_MODULE_2__["default"](mapId, config);
  } else if (config.type === "drag-marker") {
    return new src_decidim_map_controller_drag_marker__WEBPACK_IMPORTED_MODULE_3__["default"](mapId, config);
  }
  return new src_decidim_map_controller_markers__WEBPACK_IMPORTED_MODULE_1__["default"](mapId, config);
};
window.Decidim.createMapController = createMapController;

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/icon.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/map/icon.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet-svgicon */ "./node_modules/leaflet-svgicon/index.js");

L.DivIcon.SVGIcon = leaflet_svgicon__WEBPACK_IMPORTED_MODULE_0__.SVGIcon;
L.DivIcon.SVGIcon.DecidimIcon = L.DivIcon.SVGIcon.extend({
  options: {
    fillColor: "#ef604d",
    opacity: 0
  },
  _createPathDescription: function _createPathDescription() {
    return "M14 1.17a11.685 11.685 0 0 0-11.685 11.685c0 11.25 10.23 20.61 10.665 21a1.5 1.5 0 0 0 2.025 0c0.435-.435 10.665-9.81 10.665-21A11.685 11.685 0 0 0 14 1.17Zm0 17.415A5.085 5.085 0 1 1 19.085 13.5 5.085 5.085 0 0 1 14 18.585Z";
  },
  _createCircle: function _createCircle() {
    return "";
  },
  // Improved version of the _createSVG, essentially the same as in later
  // versions of Leaflet. It adds the `px` values after the width and height
  // CSS making the focus borders work correctly across all browsers.
  _createSVG: function _createSVG() {
    var path = this._createPath();
    var circle = this._createCircle();
    var text = this._createText();
    var className = "".concat(this.options.className, "-svg");
    var style = "width:".concat(this.options.iconSize.x, "px; height:").concat(this.options.iconSize.y, "px;");
    var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" class=\"".concat(className, "\" style=\"").concat(style, "\">").concat(path).concat(circle).concat(text, "</svg>");
    return svg;
  }
});

/***/ })

}]);
//# sourceMappingURL=_rvm_gems_ruby-3_0_2_bundler_gems_decidim-0c286433bcbe_decidim-core_app_packs_src_decidim_map_js.js.map
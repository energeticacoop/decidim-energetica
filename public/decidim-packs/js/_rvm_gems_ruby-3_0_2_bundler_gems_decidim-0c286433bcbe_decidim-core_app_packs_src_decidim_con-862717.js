"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["_rvm_gems_ruby-3_0_2_bundler_gems_decidim-0c286433bcbe_decidim-core_app_packs_src_decidim_con-862717"],{

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/configuration.js":
/*!***************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/configuration.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Configuration; }
/* harmony export */ });
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
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
var Configuration = /*#__PURE__*/function () {
  function Configuration() {
    _classCallCheck(this, Configuration);
    this.config = {};
  }
  _createClass(Configuration, [{
    key: "set",
    value: function set(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (_typeof(key) === "object") {
        this.config = _objectSpread(_objectSpread({}, this.config), key);
      } else {
        this.config[key] = value;
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.config[key];
    }
  }]);
  return Configuration;
}();


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/confirm.js":
/*!*********************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/confirm.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs-exposed.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
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
/**
 * A custom confirm dialog for Decidim based on Foundation reveals.
 *
 * Note that this needs to be loaded before the application JS in order for
 * it to gain control over the confirm events BEFORE rails-ujs is loaded.
 */


var TEMPLATE_HTML = null;
var ConfirmDialog = /*#__PURE__*/function () {
  function ConfirmDialog(sourceElement) {
    _classCallCheck(this, ConfirmDialog);
    this.$modal = $(TEMPLATE_HTML);
    this.$source = sourceElement;
    this.$content = $(".confirm-modal-content", this.$modal);
    this.$buttonConfirm = $("[data-confirm-ok]", this.$modal);
    this.$buttonCancel = $("[data-confirm-cancel]", this.$modal);

    // Avoid duplicate IDs and append the new modal to the body
    var titleId = "confirm-modal-title-".concat(Math.random().toString(36).substring(7));
    this.$modal.removeAttr("id");
    $("#confirm-modal-title", this.$modal).attr("id", titleId);
    this.$modal.attr("aria-labelledby", titleId);
    $("body").append(this.$modal);
    this.$modal.foundation();
  }
  _createClass(ConfirmDialog, [{
    key: "confirm",
    value: function confirm(message) {
      var _this = this;
      this.$content.html(message);
      this.$buttonConfirm.off("click");
      this.$buttonCancel.off("click");
      return new Promise(function (resolve) {
        _this.$buttonConfirm.on("click", function (ev) {
          ev.preventDefault();
          _this.$modal.foundation("close");
          resolve(true);
          _this.$source.focus();
        });
        _this.$buttonCancel.on("click", function (ev) {
          ev.preventDefault();
          _this.$modal.foundation("close");
          resolve(false);
          _this.$source.focus();
        });
        _this.$modal.foundation("open").on("closed.zf.reveal", function () {
          _this.$modal.remove();
        });
      });
    }
  }]);
  return ConfirmDialog;
}(); // Override the default confirm dialog by Rails
// See:
// https://github.com/rails/rails/blob/fba1064153d8e2f4654df7762a7d3664b93e9fc8/actionview/app/assets/javascripts/rails-ujs/features/confirm.coffee
//
// There is apparently a better way coming in Rails 6:
// https://github.com/rails/rails/commit/e9aa7ecdee0aa7bb4dcfa5046881bde2f1fe21cc#diff-e1aaa45200e9adcbcb8baf1c5375b5d1
//
// The old approach is broken according to https://github.com/rails/rails/issues/36686#issuecomment-514213323
// so for the moment this needs to be executed **before** Rails.start()
var allowAction = function allowAction(ev, element) {
  var message = $(element).data("confirm");
  if (!message) {
    return true;
  }
  if (!_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().fire(element, "confirm")) {
    return false;
  }
  if (TEMPLATE_HTML === null) {
    TEMPLATE_HTML = $("#confirm-modal")[0].outerHTML;
    $("#confirm-modal").remove();
  }
  var dialog = new ConfirmDialog($(element));
  dialog.confirm(message).then(function (answer) {
    var completed = _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().fire(element, "confirm:complete", [answer]);
    if (answer && completed) {
      // Allow the event to propagate normally and re-dispatch it without
      // the confirm data attribute which the Rails internal method is
      // checking.
      $(element).data("confirm", null);
      $(element).removeAttr("data-confirm");

      // The submit button click events won't do anything if they are
      // dispatched as is. In these cases, just submit the underlying form.
      if (ev.type === "click" && ($(element).is('button[type="submit"]') || $(element).is('input[type="submit"]'))) {
        $(element).parents("form").submit();
      } else {
        var origEv = ev.originalEvent || ev;
        var newEv = origEv;
        if (typeof Event === "function") {
          // Clone the event because otherwise some click events may not
          // work properly when re-dispatched.
          newEv = new origEv.constructor(origEv.type, origEv);
        }
        ev.target.dispatchEvent(newEv);
      }
    }
  });
  return false;
};
var handleConfirm = function handleConfirm(ev, element) {
  if (!allowAction(ev, element)) {
    _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().stopEverything(ev);
  }
};
var getMatchingEventTarget = function getMatchingEventTarget(ev, selector) {
  var target = ev.target;
  while (!(!(target instanceof Element) || _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().matches(target, selector))) {
    target = target.parentNode;
  }
  if (target instanceof Element) {
    return target;
  }
  return null;
};
var handleDocumentEvent = function handleDocumentEvent(ev, matchSelectors) {
  return matchSelectors.some(function (currentSelector) {
    var target = getMatchingEventTarget(ev, currentSelector);
    if (target === null) {
      return false;
    }
    handleConfirm(ev, target);
    return true;
  });
};
document.addEventListener("click", function (ev) {
  return handleDocumentEvent(ev, [(_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().linkClickSelector), (_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().buttonClickSelector), (_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formInputClickSelector)]);
});
document.addEventListener("change", function (ev) {
  return handleDocumentEvent(ev, [(_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().inputChangeSelector)]);
});
document.addEventListener("submit", function (ev) {
  return handleDocumentEvent(ev, [(_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formSubmitSelector)]);
});

// This is needed for the confirm dialog to work with Foundation Abide.
// Abide registers its own submit click listeners since Foundation 5.6.x
// which will be handled before the document listeners above. This would
// break the custom confirm functionality when used with Foundation Abide.
document.addEventListener("DOMContentLoaded", function () {
  $((_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formInputClickSelector)).on("click.confirm", function (ev) {
    handleConfirm(ev, getMatchingEventTarget(ev, (_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formInputClickSelector)));
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/input_tags.js":
/*!************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/bundler/gems/decidim-0c286433bcbe/decidim-core/app/packs/src/decidim/input_tags.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-tagsinput */ "./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js");
/* harmony import */ var bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $tagContainer = $(".js-tags-container");

  // Initialize
  $tagContainer.tagsinput({
    tagClass: "input__tag",
    trimValue: true
  });
});

/***/ })

}]);
//# sourceMappingURL=_rvm_gems_ruby-3_0_2_bundler_gems_decidim-0c286433bcbe_decidim-core_app_packs_src_decidim_con-862717.js.map
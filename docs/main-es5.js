function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 0,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tracker/tracker.component */
    "./src/app/tracker/tracker.component.ts");
    /* harmony import */


    var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service/auth-guard.service */
    "./src/app/service/auth-guard.service.ts");
    /* harmony import */


    var _registerlogin_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registerlogin/login/login.component */
    "./src/app/registerlogin/login/login.component.ts");
    /* harmony import */


    var _registerlogin_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registerlogin/register/register.component */
    "./src/app/registerlogin/register/register.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./comingsoon/comingsoon.component */
    "./src/app/comingsoon/comingsoon.component.ts");

    var routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
      canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'tracker',
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_4__["TrackerComponent"],
      canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'login',
      component: _registerlogin_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: '',
      component: _registerlogin_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'register',
      component: _registerlogin_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
      path: 'users',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
      canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'coming-soon',
      component: _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_9__["ComingsoonComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'coronapractice';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tracker/tracker.component */
    "./src/app/tracker/tracker.component.ts");
    /* harmony import */


    var _registerlogin_registerlogin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./registerlogin/registerlogin.component */
    "./src/app/registerlogin/registerlogin.component.ts");
    /* harmony import */


    var _registerlogin_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./registerlogin/login/login.component */
    "./src/app/registerlogin/login/login.component.ts");
    /* harmony import */


    var _registerlogin_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./registerlogin/register/register.component */
    "./src/app/registerlogin/register/register.component.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _dashboard_news_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/news/news.component */
    "./src/app/dashboard/news/news.component.ts");
    /* harmony import */


    var _dashboard_charts_charts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dashboard/charts/charts.component */
    "./src/app/dashboard/charts/charts.component.ts");
    /* harmony import */


    var _user_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-service.service */
    "./src/app/user-service.service.ts");
    /* harmony import */


    var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./dashboard/sidebar/sidebar.component */
    "./src/app/dashboard/sidebar/sidebar.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./comingsoon/comingsoon.component */
    "./src/app/comingsoon/comingsoon.component.ts");

    function tokenGetter() {
      return localStorage.getItem("jwt");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_user_service_service__WEBPACK_IMPORTED_MODULE_17__["UserService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ["localhost:5001"],
          blacklistedRoutes: []
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_10__["TrackerComponent"], _registerlogin_registerlogin_component__WEBPACK_IMPORTED_MODULE_11__["RegisterloginComponent"], _registerlogin_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _registerlogin_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _dashboard_news_news_component__WEBPACK_IMPORTED_MODULE_15__["NewsComponent"], _dashboard_charts_charts_component__WEBPACK_IMPORTED_MODULE_16__["ChartsComponent"], _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"], _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_20__["ComingsoonComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_10__["TrackerComponent"], _registerlogin_registerlogin_component__WEBPACK_IMPORTED_MODULE_11__["RegisterloginComponent"], _registerlogin_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _registerlogin_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _dashboard_news_news_component__WEBPACK_IMPORTED_MODULE_15__["NewsComponent"], _dashboard_charts_charts_component__WEBPACK_IMPORTED_MODULE_16__["ChartsComponent"], _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"], _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_20__["ComingsoonComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ["localhost:5001"],
              blacklistedRoutes: []
            }
          })],
          providers: [_user_service_service__WEBPACK_IMPORTED_MODULE_17__["UserService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comingsoon/comingsoon.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/comingsoon/comingsoon.component.ts ***!
    \****************************************************/

  /*! exports provided: ComingsoonComponent */

  /***/
  function srcAppComingsoonComingsoonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComingsoonComponent", function () {
      return ComingsoonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ComingsoonComponent = /*#__PURE__*/function () {
      function ComingsoonComponent() {
        _classCallCheck(this, ComingsoonComponent);
      }

      _createClass(ComingsoonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComingsoonComponent;
    }();

    ComingsoonComponent.ɵfac = function ComingsoonComponent_Factory(t) {
      return new (t || ComingsoonComponent)();
    };

    ComingsoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComingsoonComponent,
      selectors: [["app-comingsoon"]],
      decls: 98,
      vars: 0,
      consts: [[1, "coming-soon"], ["id", "eb56cac1-988a-4970-8192-095cb31178d1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "880.92", "height", "737.5", "viewBox", "0 0 880.92 737.5"], ["id", "b5b2e68b-c285-4ac0-b26c-c5e680cf112d", "x1", "194", "y1", "524", "x2", "194", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "gray", "stop-opacity", "0.25"], ["offset", "0.54", "stop-color", "gray", "stop-opacity", "0.12"], ["offset", "1", "stop-color", "gray", "stop-opacity", "0.1"], ["id", "3e855d09-ea58-4275-8d16-3996ecf7bf97", "x1", "256.5", "y1", "341", "x2", "256.5", "y2", "261", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "cf2af733-ecbd-4844-bce5-a175ed323afb", "x1", "698.41", "y1", "686.91", "x2", "698.41", "y2", "411", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "41d3ff72-5c81-40b1-a081-9da170d960ca", "x1", "521", "y1", "592.5", "x2", "564", "y2", "592.5", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "861d31c1-c685-4668-90c5-63e7f330b62f", "x1", "864", "y1", "667", "x2", "864", "y2", "506", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "95aca10b-5f5c-4c4a-b42d-5e0345d77cda", "x1", "587", "y1", "666", "x2", "587", "y2", "505", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "447533d7-1588-4f38-833a-a610814ab16b", "x1", "818.5", "y1", "672", "x2", "818.5", "y2", "507", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "ff2ef3d2-e251-4fff-9ce5-91d443983582", "x1", "692.5", "y1", "520", "x2", "692.5", "y2", "503", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "3aee67b7-7918-445b-a8b6-3ab74317d2c0", "x1", "696.5", "y1", "492", "x2", "696.5", "y2", "407", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "6f730dc9-6dcb-4b79-bb23-db206ebc09d2", "x1", "696.5", "y1", "503", "x2", "696.5", "y2", "482", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["id", "fad0dffe-d445-4baa-a242-e8cd9004e0b5", "x1", "695", "y1", "448", "x2", "695", "y2", "438", 0, "xlink", "href", "#b5b2e68b-c285-4ac0-b26c-c5e680cf112d"], ["width", "388", "height", "524", "fill", "url(#b5b2e68b-c285-4ac0-b26c-c5e680cf112d)"], ["x", "23", "y", "8", "width", "358", "height", "506", "fill", "#fff"], ["x", "6", "y", "8", "width", "17", "height", "506", "fill", "#f5f5f5"], ["x", "82", "y", "383", "width", "240", "height", "6", "fill", "#e0e0e0"], ["x", "82", "y", "406", "width", "240", "height", "6", "fill", "#69f0ae", "opacity", "0.4"], ["x", "82", "y", "429", "width", "240", "height", "6", "fill", "#ff0", "opacity", "0.4"], ["x", "82", "y", "452", "width", "240", "height", "6", "fill", "#e0e0e0"], ["x", "82", "y", "475", "width", "240", "height", "6", "fill", "#e0e0e0"], ["d", "M321.09,171.55c.1-1.11.16-2.23.16-3.36a37.33,37.33,0,0,0-1.45-10.3l-4.35.21-2-5.48,2.81-3.07a37.72,37.72,0,0,0-8.9-10.44l-3.43,2.66-4.78-3.34.55-4.13a37.17,37.17,0,0,0-13.27-3.45L285.14,135h-5.83l-1.92-3.7a37.33,37.33,0,0,0-18.13,8.63l2,3.84-4.12,4.12-4-1.25a37.29,37.29,0,0,0-5.73,12.46l3.88,2-1,5.74-4,1.25s0,.06,0,.09a37.25,37.25,0,0,0,2.49,13.4l4.32-.59,2.46,5.28-2.53,3.3a37.76,37.76,0,0,0,9.76,9.64l3.19-3,5.05,2.92-.18,4.18a37.28,37.28,0,0,0,12.9,2.29l.63,0,.92-4.25,5.81-.51,2.24,3.52a37.32,37.32,0,0,0,12.38-5.9l-1.68-4,4.47-3.75,3.84,1.59a37.45,37.45,0,0,0,6.79-11.92l-3.68-2.32,1.51-5.63Zm-37.3,24.68a28,28,0,1,1,28-28A28.07,28.07,0,0,1,283.79,196.23Z", "transform", "translate(-159.54 -82)", "fill", "#1fc92a"], ["d", "M367.09,240.55c.1-1.11.16-2.23.16-3.36a37.33,37.33,0,0,0-1.45-10.3l-4.35.21-2-5.48,2.81-3.07a37.72,37.72,0,0,0-8.9-10.44l-3.43,2.66-4.78-3.34.55-4.13a37.17,37.17,0,0,0-13.27-3.45L331.14,204h-5.83l-1.92-3.7a37.33,37.33,0,0,0-18.13,8.63l2,3.84-4.12,4.12-4-1.25a37.29,37.29,0,0,0-5.73,12.46l3.88,2-1,5.74-4,1.25s0,.06,0,.09a37.25,37.25,0,0,0,2.49,13.4l4.32-.59,2.46,5.28-2.53,3.3a37.76,37.76,0,0,0,9.76,9.64l3.19-3,5.05,2.92-.18,4.18a37.28,37.28,0,0,0,12.9,2.29l.63,0,.92-4.25,5.81-.51,2.24,3.52a37.32,37.32,0,0,0,12.38-5.9l-1.68-4,4.47-3.75,3.84,1.59a37.45,37.45,0,0,0,6.79-11.92l-3.68-2.32,1.51-5.63Zm-37.3,24.68a28,28,0,1,1,28-28A28.07,28.07,0,0,1,329.79,265.23Z", "transform", "translate(-159.54 -82)", "fill", "#1fc92a", "opacity", "0.6"], ["d", "M414.09,171.55c.1-1.11.16-2.23.16-3.36a37.33,37.33,0,0,0-1.45-10.3l-4.35.21-2-5.48,2.81-3.07a37.72,37.72,0,0,0-8.9-10.44l-3.43,2.66-4.78-3.34.55-4.13a37.17,37.17,0,0,0-13.27-3.45L378.14,135h-5.83l-1.92-3.7a37.33,37.33,0,0,0-18.13,8.63l2,3.84-4.12,4.12-4-1.25a37.29,37.29,0,0,0-5.73,12.46l3.88,2-1,5.74-4,1.25s0,.06,0,.09a37.25,37.25,0,0,0,2.49,13.4l4.32-.59,2.46,5.28-2.53,3.3a37.76,37.76,0,0,0,9.76,9.64l3.19-3,5.05,2.92-.18,4.18a37.28,37.28,0,0,0,12.9,2.29l.63,0,.92-4.25,5.81-.51,2.24,3.52a37.32,37.32,0,0,0,12.38-5.9l-1.68-4,4.47-3.75,3.84,1.59a37.45,37.45,0,0,0,6.79-11.92l-3.68-2.32,1.51-5.63Zm-37.3,24.68a28,28,0,1,1,28-28A28.07,28.07,0,0,1,376.79,196.23Z", "transform", "translate(-159.54 -82)", "fill", "#1fc92a", "opacity", "0.4"], ["d", "M471.09,240.55c.1-1.11.16-2.23.16-3.36a37.33,37.33,0,0,0-1.45-10.3l-4.35.21-2-5.48,2.81-3.07a37.72,37.72,0,0,0-8.9-10.44l-3.43,2.66-4.78-3.34.55-4.13a37.17,37.17,0,0,0-13.27-3.45L435.14,204h-5.83l-1.92-3.7a37.33,37.33,0,0,0-18.13,8.63l2,3.84-4.12,4.12-4-1.25a37.29,37.29,0,0,0-5.73,12.46l3.88,2-1,5.74-4,1.25s0,.06,0,.09a37.25,37.25,0,0,0,2.49,13.4l4.32-.59,2.46,5.28-2.53,3.3a37.76,37.76,0,0,0,9.76,9.64l3.19-3,5.05,2.92-.18,4.18a37.28,37.28,0,0,0,12.9,2.29l.63,0,.92-4.25,5.81-.51,2.24,3.52a37.32,37.32,0,0,0,12.38-5.9l-1.68-4,4.47-3.75,3.84,1.59a37.45,37.45,0,0,0,6.79-11.92l-3.68-2.32,1.51-5.63Zm-37.3,24.68a28,28,0,1,1,28-28A28.07,28.07,0,0,1,433.79,265.23Z", "transform", "translate(-159.54 -82)", "fill", "#1fc92a"], ["x1", "161.25", "y1", "22", "x2", "155.25", "y2", "22", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10"], ["x1", "142.54", "y1", "22", "x2", "72.61", "y2", "22", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10", "stroke-dasharray", "12.71 12.71"], ["points", "66.25 22 60.25 22 60.25 28", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10"], ["x1", "60.25", "y1", "39.33", "x2", "60.25", "y2", "124.33", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10", "stroke-dasharray", "11.33 11.33"], ["x1", "60.25", "y1", "130", "x2", "60.25", "y2", "136", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10"], ["points", "207.75 222.5 343.75 222.5 343.75 103.5", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10", "stroke-dasharray", "12"], ["x", "103", "y", "261", "width", "307", "height", "80", "fill", "url(#3e855d09-ea58-4275-8d16-3996ecf7bf97)"], ["x", "106", "y", "266", "width", "300", "height", "71", "fill", "#1fc92a"], ["x", "186", "y", "283", "width", "88", "height", "4", "fill", "#1fc92a"], ["x", "186", "y", "292", "width", "88", "height", "4", "opacity", "0.2"], ["x", "186", "y", "307", "width", "172", "height", "4", "fill", "#fff"], ["cx", "140", "cy", "301", "r", "19", "fill", "#1fc92a"], ["cx", "140", "cy", "301", "r", "19", "opacity", "0.2"], ["d", "M763.66,564a1.34,1.34,0,0,0,.18-1.54c-4.3-8.61-8.61-6.45-21.33-31.06-13.54-26.17-10.17-34.94-15.24-39.94-2-2-4.06-8.68-6.78-9.85l-1.76-7.06a9.07,9.07,0,0,0,4.67-.72c2.8-1.24,4.93-3.6,6.82-6a45.56,45.56,0,0,0,7-11.84,32.36,32.36,0,0,0,2-9.73h0a33.28,33.28,0,0,0-.09-5,20.09,20.09,0,0,0,8.65-3.65,15,15,0,0,0,5.48-9.85h0c0-.39.09-.77.11-1.16a12.11,12.11,0,0,0,0-1.38,15,15,0,0,0-6.9-11.72,19.57,19.57,0,0,0-12-2.49A52.21,52.21,0,0,0,722.32,414c-1,.32-2.44.73-3.75,1.3a27.77,27.77,0,0,0-8.76-1.43c-4.86,0-9.62,1.28-14.31,2.54l-15.79,4.23c-3.5.94-7.15,2-9.76,4.47a8.26,8.26,0,0,0-.65.71l-.12.15a8.84,8.84,0,0,0-.57.81h0c-1.56,2.52-1.9,5.86,0,8.08A9.62,9.62,0,0,0,672,437.2a37.8,37.8,0,0,0,4.77,1.82,26,26,0,0,0-4.49,14.64c0,.3,0,.59,0,.89s0,.59,0,.89a26.09,26.09,0,0,0,26.09,26.09h.43l.76,6.12a54,54,0,0,0-8.91,12.46,13.89,13.89,0,0,0-4.37,10.76c-.05,4.34,1.13,9.65,2.28,17l-37.09-15.76-23.16,49.88,17.82,6.57c-8.37.38-13,6.5-12.93,12.73a12.32,12.32,0,0,0,3.66,9.21c6.45,6.45,14.28,73.63,14.28,73.63h3.26v7.05c-13.21.8-26.61,2.43-26.61,5.74a10.77,10.77,0,0,0,4.22,8.21c-.19-.23-.38-.48-.56-.74a14.26,14.26,0,0,0,3.38,2.57h71.75V672.14h.12v-1.79s-2.6,0-6.64.07v-6.34h3.26c2.91-26.22-9.78-60.24-12.53-67.2,4.47,0,9.17-.06,13.83-.32,19.79.89,53.82.67,60.67-10.75C772.9,573.19,766.81,566.44,763.66,564ZM664.23,595.6s1.49.15,4,.34c2.69,7.67,4.68,20.27,6.09,32.57A216.36,216.36,0,0,0,664.23,595.6Zm28.63-116.44a26.17,26.17,0,0,0,5.55.6h.2l.16,1.31A25.89,25.89,0,0,1,692.86,479.15ZM680.54,670.61H680v-.26s-2.33,0-6,.06v-6.33h6.52Z", "transform", "translate(-159.54 -82)", "fill", "url(#cf2af733-ecbd-4844-bce5-a175ed323afb)"], ["points", "537.03 512 521 672 540.03 673 564 512 537.03 512", "fill", "url(#41d3ff72-5c81-40b1-a081-9da170d960ca)"], ["points", "538 512 526 670 538 670 555 512 538 512", "fill", "#1fc92a"], ["points", "865.16 506 880.92 667 862.16 667 847.08 506 865.16 506", "fill", "url(#861d31c1-c685-4668-90c5-63e7f330b62f)"], ["points", "865 507 877 665 865 665 848 507 865 507", "fill", "#1fc92a"], ["points", "583.9 505 569 666 588.9 666 605 505 583.9 505", "fill", "url(#95aca10b-5f5c-4c4a-b42d-5e0345d77cda)"], ["points", "585 505 573 663 585 663 602 505 585 505", "fill", "#1fc92a"], ["points", "821.69 507 837 672 818.69 672 800 507 821.69 507", "fill", "url(#447533d7-1588-4f38-833a-a610814ab16b)"], ["points", "821 512 833 670 821 670 804 512 821 512", "fill", "#1fc92a"], ["x", "513", "y", "503", "width", "359", "height", "17", "fill", "url(#ff2ef3d2-e251-4fff-9ce5-91d443983582)"], ["x", "516", "y", "503", "width", "288", "height", "15", "fill", "#1fc92a"], ["x", "804", "y", "503", "width", "66", "height", "15", "fill", "#1fc92a"], ["x", "804.46", "y", "503", "width", "66", "height", "15", "opacity", "0.2"], ["x", "629", "y", "407", "width", "135", "height", "85", "fill", "url(#3aee67b7-7918-445b-a8b6-3ab74317d2c0)"], ["x", "632", "y", "410", "width", "126", "height", "79", "fill", "#fff"], ["x", "676", "y", "482", "width", "41", "height", "21", "fill", "url(#6f730dc9-6dcb-4b79-bb23-db206ebc09d2)"], ["x", "677.5", "y", "482", "width", "35", "height", "21", "fill", "#fff"], ["x", "758", "y", "410", "width", "4", "height", "79", "fill", "#f5f5f5"], ["x", "712", "y", "482", "width", "3", "height", "21", "fill", "#f5f5f5"], ["x", "690", "y", "438", "width", "10", "height", "10", "fill", "url(#fad0dffe-d445-4baa-a242-e8cd9004e0b5)"], ["x", "691", "y", "439", "width", "8", "height", "8", "fill", "#f5f5f5"], ["points", "499.84 430.1 565.23 457.89 543.22 499.7 478.58 475.88 499.84 430.1", "fill", "#1fc92a"], ["x", "502.52", "y", "563.62", "width", "17.96", "height", "14.96", "fill", "#f8c198"], ["x", "526.47", "y", "563.62", "width", "17.96", "height", "14.96", "fill", "#f8c198"], ["cx", "542.87", "cy", "376.5", "r", "23.94", "fill", "#f8c198"], ["points", "565.31 410.92 544.36 410.92 541.37 386.98 559.33 386.98 565.31 410.92", "fill", "#f8c198"], ["d", "M736.89,558.83s12,6,3,21-68.84,9-68.84,9,15,35.91,12,62.85H659.07S651.89,590,646,584c-7.63-7.63-1.86-22.22,13.11-19.23S736.89,558.83,736.89,558.83Z", "transform", "translate(-159.54 -82)", "fill", "#263238"], ["opacity", "0.2"], ["d", "M675.95,588.22s10.52,1,23.39,1.17c-9.34.1-18-.38-23.22-.75Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M670.71,564.85c23.37-.45,66.18-6.56,66.18-6.56a9,9,0,0,1,.9.55C725.6,560.5,688.6,565.27,670.71,564.85Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M657.75,564.05c-10.19,1.55-13.34,13-6.88,19.45,5.92,5.92,13.11,67.57,13.11,67.57h-4.9S651.89,589.42,646,583.5C638.56,576.1,643.78,562.15,657.75,564.05Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M686,657.59s-47.89,0-47.89,6,6,9,6,9H686Z", "transform", "translate(-159.54 -82)", "fill", "#263238"], ["d", "M685.54,657.36V659c-8.34.06-46.25.65-46.25,6a9.13,9.13,0,0,0,2.24,5.9,9.89,9.89,0,0,1-3.88-7.53C637.65,657.36,685.54,657.36,685.54,657.36Z", "transform", "translate(-159.54 -82)", "fill", "#fff", "opacity", "0.2"], ["d", "M760.83,558.83s12,6,3,21-68.84,9-68.84,9,15,35.91,12,62.85H683s-3-62.85-12-68.84-3-21,12-18S760.83,558.83,760.83,558.83Z", "transform", "translate(-159.54 -82)", "fill", "#263238"], ["d", "M710,657.59s-47.89,0-47.89,6,6,9,6,9H710Z", "transform", "translate(-159.54 -82)", "fill", "#263238"], ["d", "M720.64,484h7.28c2.87,0,4.92,7.2,7,9.22,4.66,4.59,1.56,12.63,14,36.65,11.68,22.58,15.63,20.61,19.58,28.5S698,565.9,698,565.9s3.79-15.12,3-26.21c-1.64-22.79-7.56-30.68.34-38.58C701.32,501.11,709.79,484,720.64,484Z", "transform", "translate(-159.54 -82)", "fill", "#ff5252"], ["points", "501.47 441.54 491.66 462.8 498.2 466.07 508.01 444.81 501.47 441.54", "fill", "#fff"], ["d", "M702.41,436.2a24.23,24.23,0,0,1,2.45.12,23.94,23.94,0,0,0,0,47.64,24.23,24.23,0,0,1-2.45.12,23.94,23.94,0,1,1,0-47.89Z", "transform", "translate(-159.54 -82)", "fill", "#fff", "opacity", "0.2"], ["d", "M676.29,432.31c2.4-2.3,5.75-3.24,9-4.1l14.49-3.88c4.31-1.15,8.67-2.32,13.13-2.33a25.48,25.48,0,0,1,8,1.31c1.2-.52,2.55-.9,3.44-1.19a47.91,47.91,0,0,1,11.11-2.68,18,18,0,0,1,11,2.29,13.55,13.55,0,0,1,1.19,22.12,18.43,18.43,0,0,1-7.93,3.35A30.08,30.08,0,0,1,738,460.67a41.81,41.81,0,0,1-6.39,10.87c-1.73,2.21-3.69,4.37-6.26,5.51s-5.88,1-7.86-1c-1.46-1.47-2-3.63-2.33-5.67-1.51-8.08-3-17.37-10-21.68-4.39-2.7-9.28-2.44-14.18-2.41a29.55,29.55,0,0,1-12.71-2.91,8.83,8.83,0,0,1-3.18-2.14C672.89,438.72,673.89,434.61,676.29,432.31Z", "transform", "translate(-159.54 -82)", "fill", "#fccc63"], ["d", "M746.49,425a18,18,0,0,0-11-2.29,47.91,47.91,0,0,0-11.11,2.68c-.89.3-2.24.67-3.44,1.19a25.48,25.48,0,0,0-8-1.31c-4.46,0-8.82,1.17-13.13,2.33l-14.49,3.88c-3.21.86-6.56,1.8-9,4.1a8.12,8.12,0,0,0-2.19,3.86,7.54,7.54,0,0,1,2.19-7.13c2.4-2.3,5.75-3.24,9-4.1l14.49-3.88c4.31-1.15,8.67-2.32,13.13-2.33a25.48,25.48,0,0,1,8,1.31c1.2-.52,2.55-.9,3.44-1.19a47.91,47.91,0,0,1,11.11-2.68,18,18,0,0,1,11,2.29,13.79,13.79,0,0,1,6.33,10.75,13,13,0,0,1-.11,2.33A13.79,13.79,0,0,0,746.49,425Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M739.88,450.44c0,.44,0,.87,0,1.31,0-.43,0-.85-.09-1.28Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M701,540c-1.64-22.79-7.56-30.68.34-38.58,0,0,8.46-17.11,19.32-17.11h7.28a3.33,3.33,0,0,1,2.4,1.63h-4.77c-10.86,0-19.32,17.11-19.32,17.11-7.9,7.9-2,15.79-.34,38.58.64,8.89-1.67,20.37-2.61,24.57-3.3,0-5.29,0-5.29,0S701.78,551.08,701,540Z", "transform", "translate(-159.54 -82)", "fill", "#fff", "opacity", "0.2"], ["x", "703.52", "y", "507.19", "width", "26.16", "height", "17.98", "transform", "translate(1273.66 950.37) rotate(-180)", "fill", "#ff5252"], ["d", "M694.66,564.85c23.37-.45,66.18-6.56,66.18-6.56a9,9,0,0,1,.9.55C749.54,560.5,712.55,565.27,694.66,564.85Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M681.75,564.06c-10.26,1.56-13.42,13.09-5.8,18.17,9,6,12,68.84,12,68.84H683s-3-62.85-12-68.84C662.32,576.42,667.72,562.14,681.75,564.06Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M699.89,588.22s10.52,1,23.39,1.17c-9.34.1-18-.38-23.22-.75Z", "transform", "translate(-159.54 -82)", "fill", "#fff"], ["d", "M727.91,519.92v28.63a18.28,18.28,0,0,1-19,18.28c-12.65-.49-27.24-.68-28.91,1-1.39,1.39-4.7,4.06-7.86,6.52a4.64,4.64,0,0,1-7.47-4.1c.4-4.81,1.91-9.93,6.34-11.4,3.57-1.19,10-1.91,16.38-2.34a21,21,0,0,0,19.53-21V519.92Z", "transform", "translate(-159.54 -82)", "fill", "#f8c198"], ["d", "M664.7,570.23c.4-4.81,1.91-9.93,6.34-11.4,3.57-1.19,10-1.91,16.38-2.34a21,21,0,0,0,19.53-21V519.92h21v1.63H710.23v15.57a21,21,0,0,1-19.53,21c-6.42.43-12.82,1.15-16.38,2.34-4.43,1.48-5.95,6.6-6.34,11.4a4.62,4.62,0,0,0,1.11,3.44A4.67,4.67,0,0,1,664.7,570.23Z", "transform", "translate(-159.54 -82)", "fill", "#fff", "opacity", "0.2"], ["d", "M710.06,657.36V659c-8.34.06-46.25.65-46.25,6a9.13,9.13,0,0,0,2.24,5.9,9.89,9.89,0,0,1-3.88-7.53C662.17,657.36,710.06,657.36,710.06,657.36Z", "transform", "translate(-159.54 -82)", "fill", "#fff", "opacity", "0.2"], ["points", "233 518 233 736 618 736 618 452 629 452", "fill", "none", "stroke", "#1fc92a", "stroke-miterlimit", "10", "stroke-width", "3", "opacity", "0.5"]],
      template: function ComingsoonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "linearGradient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "linearGradient", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "linearGradient", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "linearGradient", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "linearGradient", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "linearGradient", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "linearGradient", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "linearGradient", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "linearGradient", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "linearGradient", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "linearGradient", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rect", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "rect", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "rect", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "polyline", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polyline", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "rect", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "rect", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rect", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "rect", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "polygon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "polygon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polygon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "polygon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "polygon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "polygon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "polygon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rect", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "polygon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "circle", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "polygon", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "polygon", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rect", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "g", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "polyline", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Coming soon...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".coming-soon[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #330033;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n\n.coming-soon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 30%;\n}\n\n\n.coming-soon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: \"Dosis\", sans-serif;\n    font-weight: 700;\n    letter-spacing: 2px;\n    line-height: 5px;\n    color: white;\n    font-size: 40px;\n    text-shadow: 5px 4px 2px green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nc29vbi9jb21pbmdzb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdTVDQUF1NUM7QUFDMzVDOzs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21pbmdzb29uL2NvbWluZ3Nvb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21pbmctc29vbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMwMDMzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzQwNCcgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzNTA1JyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nNScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG5cbi5jb21pbmctc29vbiBzdmcge1xuICAgIHdpZHRoOiAzMCU7XG59XG4uY29taW5nLXNvb24gcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtc2hhZG93OiA1cHggNHB4IDJweCBncmVlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingsoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comingsoon',
          templateUrl: './comingsoon.component.html',
          styleUrls: ['./comingsoon.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/charts/charts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/dashboard/charts/charts.component.ts ***!
    \******************************************************/

  /*! exports provided: ChartsComponent */

  /***/
  function srcAppDashboardChartsChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsComponent", function () {
      return ChartsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! node_modules/chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_service_corona_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/corona.service */
    "./src/app/service/corona.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChartsComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", country_r2.Country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r2.Country, " ");
      }
    }

    function ChartsComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Specific data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmed Cases:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recovered Cases:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Deaths: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", ctx_r1.getConfirmed(), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", ctx_r1.getRecovered(), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", ctx_r1.getDeath(), "");
      }
    } //
    // >>>>>>> 9d07a3afaae2f068bafa61d6d05b1548dff09c9d


    var ChartsComponent = /*#__PURE__*/function () {
      function ChartsComponent(corona) {
        _classCallCheck(this, ChartsComponent);

        this.corona = corona;
        this.confirmArray = [];
        this.recoverArray = [];
        this.deathArray = [];
        this.days = [];
        this.day = 0;
      }

      _createClass(ChartsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.corona.getCountries().subscribe(function (data) {
            _this.countries = data;
          });
        }
      }, {
        key: "getCountry",
        value: function getCountry(country) {
          this.country = country;
        }
      }, {
        key: "getInfo",
        value: function getInfo() {
          var _this2 = this;

          alert("Information has been received!");
          this.day = 0;
          this.corona.getInfoByCountries(this.country).subscribe(function (data) {
            var _iterator = _createForOfIteratorHelper(data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var element = _step.value;
                _this2.day = _this2.day + 1;

                _this2.days.push(_this2.day);

                _this2.confirmArray.push(element.Confirmed);

                _this2.recoverArray.push(element.Recovered);

                _this2.deathArray.push(element.Deaths);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            console.log(_this2.confirmArray);
          }); // this.myChart.update();
        }
      }, {
        key: "getConfirmed",
        value: function getConfirmed() {
          return this.confirmArray[this.day - 1];
        }
      }, {
        key: "getRecovered",
        value: function getRecovered() {
          return this.recoverArray[this.day - 1];
        }
      }, {
        key: "getDeath",
        value: function getDeath() {
          return this.deathArray[this.day - 1];
        }
      }, {
        key: "showChart",
        value: function showChart() {
          // var button = document.getElementById("showButton");
          // // if (this.myChart != undefined) {
          // //     this.myChart.destroy();
          // // }
          this.myChart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]("myChart", {
            type: 'line',
            data: {
              labels: this.days,
              datasets: [{
                data: this.confirmArray,
                label: "Confirmed",
                borderColor: "yellow",
                fontColor: "#eee",
                fill: true
              }, {
                data: this.recoverArray,
                label: "Recovered",
                borderColor: "green",
                fontColor: "#eee",
                fill: true
              }, {
                data: this.deathArray,
                label: "Deaths",
                borderColor: "red",
                fontColor: "#eee",
                fill: true
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                onClick: function onClick(e) {
                  return e.stopPropagation();
                }
              },
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Total # of Days',
                    fontColor: '#eee'
                  },
                  gridLines: {
                    display: true,
                    color: '#aaa',
                    lineWidth: 1
                  },
                  ticks: {
                    fontColor: "white"
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: '# of People',
                    fontColor: '#eee'
                  },
                  gridLines: {
                    display: true,
                    color: '#aaa',
                    lineWidth: 1
                  },
                  ticks: {
                    fontColor: "white"
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          alert("Information has been cleared! Now you can search for new information.");
          this.confirmArray = [];
          this.deathArray = [];
          this.recoverArray = [];
          this.days = [];
          this.myChart.destroy();
        }
      }]);

      return ChartsComponent;
    }();

    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
      return new (t || ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_corona_service__WEBPACK_IMPORTED_MODULE_2__["CoronaService"]));
    };

    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsComponent,
      selectors: [["app-charts"]],
      decls: 18,
      vars: 2,
      consts: [[1, "charts"], [1, "charts-data"], [1, "chart"], [1, "custom-select"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "getInfo", 1, "btn", "btn-primary", 3, "click"], ["id", "showButton", 1, "btn", "btn-warning", 3, "click"], ["id", "clear", 1, "btn", "btn-danger", 3, "click"], [1, "canvas"], ["id", "myChart", "width", "400", "height", "700"], [1, "data"], ["class", "table", 4, "ngIf"], [3, "value"], [1, "table"], [1, "inside"], [1, "data-title"], [1, "confirmed"], [1, "recovered"], [1, "death"]],
      template: function ChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChartsComponent_Template_select_change_4_listener($event) {
            return ctx.getCountry($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChartsComponent_option_7_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_Template_button_click_8_listener() {
            return ctx.getInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_Template_button_click_10_listener() {
            return ctx.showChart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Show Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_Template_button_click_12_listener() {
            return ctx.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "canvas", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChartsComponent_div_17_Template, 16, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getConfirmed() && ctx.myChart);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".charts[_ngcontent-%COMP%] {\n    width: 100%;\n    height: calc(100px + 100%);\n\n}\n.title[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100px;\n    font-family: \"Dosis\", sans-serif;\n    text-align: center;\n    font-size: 25px;\n    letter-spacing: 1px;\n    color: #eee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.title[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n    text-shadow: 1px 2px 2px #111;\n    width: 80%;\n    height: 90%;\n    margin: 0;\n\n}\n.charts-data[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n.chart[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n.canvas[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\nselect[_ngcontent-%COMP%] {\n    background: #333;\n    color: white;\n}\noption[_ngcontent-%COMP%] {\n    border-top: 1px solid #eee;\n}\n.topic[_ngcontent-%COMP%] {\n    font-family: 'Lato', sans-serif;\n    color: #32cd32;\n    text-shadow: 1px 2px 2px green;\n    padding: 20px 0;\n\n}\nbutton.btn-primary[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 2px solid #6B92C2;\n    outline: none;\n}\nbutton.btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #6B92C2;\n    \n}\nbutton.btn-warning[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 2px solid #E3CA14;\n    outline: none;\n\n}\nbutton.btn-warning[_ngcontent-%COMP%]:hover {\n    background-color: #E3CA14;\n}\nbutton.btn-danger[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 2px solid red;\n    outline: none;\n\n}\nbutton.btn-danger[_ngcontent-%COMP%]:hover {\n    background-color: red;\n}\n.data[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.table[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 45%;\n    font-family: \"Pacifico\", sans-serif;\n    background-color: #ddd;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n.table[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n    z-index: 1;\n    width: 95%;\n    height: 95%;\n    background-color: #222;\n}\n.table[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    color: white;\n    font-size: 2em;\n    letter-spacing: 5px;\n}\n.confirmed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: yellow;\n    text-decoration: underline;\n}\n.recovered[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: green;\n    text-decoration: underline;\n}\n.death[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: red;\n    text-decoration: underline;\n}\n.inside[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    color: white;\n    padding: 20px;\n    padding-left: 40px;\n    font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTOztBQUViO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGFBQWE7O0FBRWpCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsYUFBYTs7QUFFakI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDBweCArIDEwMCUpO1xuXG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIC5oZWFkIHtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAycHggIzExMTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG1hcmdpbjogMDtcblxufVxuXG4uY2hhcnRzLWRhdGEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuXG4uY2hhcnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jYW52YXMge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxub3B0aW9uIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnRvcGljIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMzJjZDMyO1xuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDJweCBncmVlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG5cbn1cblxuYnV0dG9uLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNkI5MkMyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZCOTJDMjtcbiAgICBcbn1cblxuYnV0dG9uLmJ0bi13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTNDQTE0O1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuYnV0dG9uLmJ0bi13YXJuaW5nOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNDQTE0O1xufVxuXG5idXR0b24uYnRuLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuYnV0dG9uLmJ0bi1kYW5nZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YWJsZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBmb250LWZhbWlseTogXCJQYWNpZmljb1wiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhYmxlIC5pbnNpZGUge1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xufVxuLnRhYmxlIC5pbnNpZGUgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLmNvbmZpcm1lZCBzcGFuIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucmVjb3ZlcmVkIHNwYW4ge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5kZWF0aCBzcGFuIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW5zaWRlIGRpdiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-charts',
          templateUrl: './charts.component.html',
          styleUrls: ['./charts.component.css']
        }]
      }], function () {
        return [{
          type: src_app_service_corona_service__WEBPACK_IMPORTED_MODULE_2__["CoronaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/dashboard/news/news.component.ts");
    /* harmony import */


    var _charts_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./charts/charts.component */
    "./src/app/dashboard/charts/charts.component.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(jwtHelper, router) {
        var _this3 = this;

        _classCallCheck(this, DashboardComponent);

        this.jwtHelper = jwtHelper;
        this.router = router;

        this.logOut = function () {
          localStorage.removeItem("jwt");

          _this3.router.navigate(['/login']);
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).scroll(function () {
              var $nav = jquery__WEBPACK_IMPORTED_MODULE_1__(".navbar");
              $nav.toggleClass('fixed', jquery__WEBPACK_IMPORTED_MODULE_1__(this).scrollTop() > $nav.height());
            });
          });
        }
      }, {
        key: "isScrolled",
        value: function isScrolled() {}
      }, {
        key: "isUserAuthenticated",
        value: function isUserAuthenticated() {
          var token = localStorage.getItem("jwt");

          if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 116,
      vars: 0,
      consts: [[1, "landing-page"], ["id", "nb", 1, "navbar"], [1, "brand", 2, "font-family", "'Pacifico', cursive", "color", "#eeeeee"], ["routerLink", "dashboard"], ["id", "n"], [1, "two"], [1, "middle"], ["routerLink", "/"], ["routerLink", "/coming-soon"], [1, "adjust"], [1, "fas", "fa-adjust"], ["id", "logout"], ["id", "lo", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "svg-1"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "1440", "height", "889", "preserveAspectRatio", "xMidYMid", "viewBox", "0 0 1440 889", 2, "z-index", "1", "margin-right", "-2px", "display", "block", "background-repeat-y", "initial", "background-repeat-x", "initial", "background-color", "rgb(34, 38, 41)", "animation-play-state", "paused"], ["transform", "", 2, "animation-play-state", "paused"], ["id", "lg-0.012126053275919535", "x1", "0", "x2", "1", "y1", "0", "y2", "0", 2, "animation-play-state", "paused"], ["stop-color", "#04c94c", "offset", "0", 2, "animation-play-state", "paused"], ["stop-color", "#0aea02", "offset", "1", 2, "animation-play-state", "paused"], ["fill", "url(#lg-0.012126053275919535)", "opacity", "0.4", "d", "M 0 0 L 0 812.538 Q 120 717.665 240 700.744 T 480 436.3 T 720 361.632 T 960 162.491 T 1200 -23.0893 T 1440 -176.628 L 1440 0 Z", 2, "opacity", "0.4", "animation-play-state", "paused"], ["fill", "url(#lg-0.012126053275919535)", "opacity", "0.4", "d", "M 0 0 L 0 864.027 Q 120 715.498 240 683.298 T 480 511.019 T 720 366.545 T 960 148.405 T 1200 -20.4666 T 1440 -130.571 L 1440 0 Z", 2, "opacity", "0.4", "animation-play-state", "paused"], ["fill", "url(#lg-0.012126053275919535)", "opacity", "0.4", "d", "M 0 0 L 0 866.112 Q 120 636.931 240 617.992 T 480 537.169 T 720 352.043 T 960 218.536 T 1200 81.8999 T 1440 -95.0324 L 1440 0 Z", 2, "opacity", "0.4", "animation-play-state", "paused"], [1, "svg"], ["id", "fc98b6f9-21a0-4a6d-bd35-cd8a18cd4eab", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "854.55666", "height", "577.89722", "viewBox", "0 0 854.55666 577.89722", 1, "medical"], ["x", "151.55666", "y", "268", "width", "110", "height", "123", "fill", "#ccc"], ["points", "95.557 576 39.557 576 33.557 528 101.557 528 95.557 576", "fill", "#8b4513"], ["d", "M380.72875,702.28371,378.839,728.11866a8.22428,8.22428,0,0,0,8.69988,8.80928l13.26993-.80373a4.19488,4.19488,0,0,0,3.8153-5.2044L397.25817,701.457Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["d", "M491.72431,717.56077c15.6176,3.6534,26.77411,8.84633,34.103,15.87434a15.03539,15.03539,0,0,0,9.62359,4.1254c4.59653.24174,8.35492-.27349,11.17944-1.53511h.00045a4.43019,4.43019,0,0,0,2.62469-3.65076,4.50814,4.50814,0,0,0-1.88846-4.16687l-37.03954-26.3546-15.73318,6.294-3.67016,3.67016a3.63415,3.63415,0,0,0,.8002,5.74346Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["d", "M443.66188,295.74594l-105.87329-.98031c.26623-15.42064,3.85407-30.56331,11.69669-44.11378,5.15076-8.89946,5.03948-18.58474,3.7982-26.7444-1.91555-12.592,2.53886-25.47548,12.43708-33.49119a39.916,39.916,0,0,1,26.84266-8.88134l2.0558.08566a40.00777,40.00777,0,0,1,32.87054,19.76983,33.32736,33.32736,0,0,1,3.96134,20.30073c-.67106,6.60129.93466,13.26982,4.6906,20.00186C442.62144,256.47558,444.02465,275.3918,443.66188,295.74594Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#2f2e41"], ["d", "M514.49653,703.22772l-20.77878,5.42055-101.1836-220.4357,6.324,215.01515H378.07935c-22.2035-101.15879-62.29053-217.90681-44.26782-254.76585l107.50757-6.324Z", "transform", "translate(-172.72167 -161.05139)", "fill", "rgb(100,149,237)"], ["cx", "218.90906", "cy", "69.68505", "r", "28.00618", "fill", "#ffb9b9"], ["d", "M416.0232,282.23167l-46.07467-2.71028c4.51541-10.36377,6.31912-20.34363,4.51712-29.813H408.7958C408.718,256.979,412.33611,269.55581,416.0232,282.23167Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#ffb9b9"], ["points", "272.211 289.217 171.028 296.445 181.417 117.115 199.034 112.146 218.909 116.663 238.784 106.725 251.432 111.243 272.211 289.217", "fill", "rgb(100,149,237)"], ["d", "M360.91428,579.45849l-69.112-15.80994c20.5506-68.14818,57.57349-224.05122,45.623-279.61l36.137-16.26165Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["d", "M327.48755,382.51184l-26.19932-16.26165,22.3434-65.4394a30.87113,30.87113,0,0,1,13.49426-16.02839l7.52674-4.35758-4.51713,65.95Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["d", "M505.01057,564.552c-21.81327,12.62013-76.33909,19.65509-100.28018,10.8411-1.76169-61.57277-5.21664-235.739,5.87226-309.42306l39.7507,16.26165-3.6137,48.78495C427.73558,372.74951,482.91928,518.10538,505.01057,564.552Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["points", "329.127 213.33 304.734 205.199 272.211 168.158 277.632 121.18 331.837 197.068 329.127 213.33", "fill", "#e6e6e6"], ["d", "M425.40285,409.54533a6.78537,6.78537,0,0,0,8.10524,5.11221l20.706-4.68917-2.99259-13.21656-20.70643,4.68828a6.77693,6.77693,0,0,0-5.11221,8.10524Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#ffb9b9"], ["d", "M416.0232,223.509c-15.55574-6.3965-30.9192-6.85936-46.07467-.90342l-6.324-22.58563h57.8192Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#2f2e41"], ["d", "M444.02938,394.25637l11.74452,21.6822c19.7541-5.50955,36.87412-22.87878,53.30208-43.3644l-4.51713-14.4548-28.00617,7.2274Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["d", "M435.44684,349.53683h-3.6137c0-51.11057-10.52349-86.7288-20.77877-86.7288l-.90343-3.6137c9.197,0,15.06047,14.824,18.35964,27.26023C432.9836,303.31394,435.44684,325.71693,435.44684,349.53683Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#3f3d56"], ["d", "M352.33174,336.88888H348.718c0-46.80915,10.59628-75.8877,26.19933-75.8877l-.90343,3.6137C363.22136,264.61488,352.33174,286.96274,352.33174,336.88888Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#3f3d56"], ["cx", "260.91832", "cy", "189.38886", "r", "9.03425", "fill", "#3f3d56"], ["d", "M337.87694,358.57108h-3.6137c0-12.95189,7.29489-23.48905,16.26165-23.48905v3.6137C343.5507,338.69573,337.87694,347.61176,337.87694,358.57108Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#3f3d56"], ["d", "M366.78654,358.57108h-3.6137c0-10.95932-5.67376-19.87535-12.64795-19.87535V335.082C359.49165,335.082,366.78654,345.61919,366.78654,358.57108Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#3f3d56"], ["cx", "192.25802", "cy", "198.42311", "r", "3.6137", "fill", "#3f3d56"], ["cx", "163.34842", "cy", "198.42311", "r", "3.6137", "fill", "#3f3d56"], ["points", "118.177 165.193 140.724 169.219 192.258 242.495 164.88 236.053 118.177 165.193", "fill", "#rgb(100,149,237)"], ["d", "M286.8996,325.34727a1.91768,1.91768,0,0,0-1.5735,2.971l48.17135,73.08788a1.91143,1.91143,0,0,0,1.16016.81035l22.4127,5.27321a1.91439,1.91439,0,0,0,2.00447-2.9648L306.1856,329.32314a1.90335,1.90335,0,0,0-1.22941-.783l-17.69531-3.16023A2.07607,2.07607,0,0,0,286.8996,325.34727Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#3f3d56"], ["d", "M316.94907,377.60432l1.33881,13.48521,21.12638-2.09711a6.77573,6.77573,0,0,0-1.33837-13.48521Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#ffb9b9"], ["d", "M298.57839,376.04229a17.42694,17.42694,0,0,0,17.40637,17.31065h3.47387l2.529-21.07565-20.93979-7.53839Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#e6e6e6"], ["x", "442.55666", "width", "412", "height", "217", "fill", "#e6e6e6"], ["d", "M627.27833,366.05139h388v-193h-388Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#fff"], ["x", "484.55666", "y", "40", "width", "138", "height", "138", "fill", "#3f3d56"], ["cx", "589.55666", "cy", "99", "r", "4", "fill", "#89d42a"], ["cx", "574.55666", "cy", "85", "r", "4", "fill", "#89d42a"], ["d", "M745.27833,260.05139a7.95011,7.95011,0,0,0-4.16785,1.181,25.12434,25.12434,0,0,0-3.86474-4.53583c.01708-.21344.03259-.42731.03259-.64514a7.99417,7.99417,0,0,0-13.54682-5.7569,24.50673,24.50673,0,0,0-6.46264-.05639c.00146-.06269.00946-.12366.00946-.18671a8,8,0,1,0-13.2594,6.01813,25.14047,25.14047,0,0,0-3.62439,3.83362,7.99939,7.99939,0,1,0-5.11621,14.14825l.02533-.00128c-.01313.33258-.02533.66546-.02533,1.00128a25.045,25.045,0,0,0,.72363,5.973,14.99382,14.99382,0,1,0,19.56885,18.57819,24.97131,24.97131,0,0,0,16.34241-2.42426,8.00091,8.00091,0,1,0,10.492-10.492,24.85715,24.85715,0,0,0,2.84784-10.63617l.02527.00128a8,8,0,0,0,0-16Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#89d42a"], ["x", "530.55666", "y", "37", "width", "40", "height", "6", "fill", "#e6e6e6"], ["x", "660.55666", "y", "40", "width", "138", "height", "138", "fill", "#3f3d56"], ["cx", "755.75666", "cy", "131.8", "r", "1.8", "fill", "#89d42a"], ["cx", "749.00666", "cy", "125.5", "r", "1.8", "fill", "#89d42a"], ["d", "M920.82833,292.85139a3.57749,3.57749,0,0,0-1.87553.53144,11.30621,11.30621,0,0,0-1.73914-2.04113c.00769-.096.01467-.19228.01467-.29031a3.59737,3.59737,0,0,0-6.09607-2.5906,11.02775,11.02775,0,0,0-2.90819-.02538c.00066-.02821.00426-.05565.00426-.084a3.6,3.6,0,1,0-5.96673,2.70816,11.31327,11.31327,0,0,0-1.631,1.72513,3.59972,3.59972,0,1,0-2.30229,6.36671l.0114-.00058c-.00591.14966-.0114.29946-.0114.45058a11.27051,11.27051,0,0,0,.32563,2.68783,6.74722,6.74722,0,1,0,8.806,8.36019,11.23714,11.23714,0,0,0,7.35409-1.09092,3.60041,3.60041,0,1,0,4.7214-4.7214,11.18577,11.18577,0,0,0,1.28153-4.78628l.01137.00058a3.6,3.6,0,0,0,0-7.2Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#89d42a"], ["cx", "769.87848", "cy", "97.64171", "r", "1.8", "fill", "#89d42a"], ["cx", "774.11285", "cy", "89.43667", "r", "1.8", "fill", "#89d42a"], ["d", "M940.52643,251.32953a3.57751,3.57751,0,0,0-1.01994-1.66125,11.3064,11.3064,0,0,0,1.49326-2.22732c.09454-.01863.18907-.038.28342-.06458a3.59737,3.59737,0,0,0,.84112-6.57006,11.02787,11.02787,0,0,0-.76391-2.80619c.02733-.007.05472-.011.082-.01867a3.6,3.6,0,1,0-4.22419-5.00922,11.3133,11.3133,0,0,0-2.10265-1.10227,3.59973,3.59973,0,1,0-6.75243-.49024l.00365.01082c-.14566.03488-.29134.0702-.4368.11117a11.27,11.27,0,0,0-2.49892,1.042,6.74722,6.74722,0,1,0-5.66009,10.74251,11.2371,11.2371,0,0,0,3.04357,6.783,3.60041,3.60041,0,1,0,5.82448,3.26477,11.1857,11.1857,0,0,0,4.95446-.06389l.00252.0111a3.6,3.6,0,1,0,6.93042-1.95173Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#89d42a"], ["cx", "700.16182", "cy", "73.18149", "r", "1.8", "fill", "#89d42a"], ["cx", "690.95808", "cy", "73.91887", "r", "1.8", "fill", "#89d42a"], ["d", "M867.72564,239.88258a3.57754,3.57754,0,0,0-.87207,1.74343,11.306,11.306,0,0,0-2.68-.0918c-.06574-.07044-.13212-.14048-.20451-.20657a3.59737,3.59737,0,0,0-6.02337,2.75542,11.02762,11.02762,0,0,0-1.97953,2.13065c-.02039-.01951-.03822-.04067-.05918-.05979a3.6,3.6,0,1,0-2.02291,6.23247,11.31355,11.31355,0,0,0,.17439,2.36765,3.59972,3.59972,0,1,0,3.14968,5.99292l.00726-.00881c.10655.10527.21348.21033.32508.31221a11.26967,11.26967,0,0,0,2.20457,1.57173,6.74722,6.74722,0,1,0,12.11144-.86672,11.23714,11.23714,0,0,0,4.15267-6.16668,3.60041,3.60041,0,1,0-.30355-6.67017,11.18565,11.18565,0,0,0-2.67072-4.17348l.00809-.008a3.6,3.6,0,1,0-5.31735-4.85445Z", "transform", "translate(-172.72167 -161.05139)", "fill", "#89d42a"], ["x", "706.55666", "y", "37", "width", "40", "height", "6", "fill", "#e6e6e6"], ["d", "M197.89809,671.2944c14.41965,19.311,44.352,21.34353,44.352,21.34353s6.55352-29.27679-7.86613-48.5878-44.352-21.34353-44.352-21.34353S183.47844,651.98339,197.89809,671.2944Z", "transform", "translate(-172.72167 -161.05139)", "fill", "green"], ["d", "M271.35481,678.554c-9.51509,12.74275-29.26658,14.08395-29.26658,14.08395s-4.32447-19.31887,5.19063-32.06162,29.26658-14.084,29.26658-14.084S280.86991,665.81122,271.35481,678.554Z", "transform", "translate(-172.72167 -161.05139)", "fill", "green"], ["y", "575.6565", "width", "519.55666", "height", "2.24072", "fill", "#3f3d56"], [1, "landing-content"], [1, "covid"], [1, "footer"], [1, "social-icons"], ["href", "https://www.facebook.com/phillip.nguyen.2901/"], [1, "fab", "fa-facebook"], ["href", "https://www.instagram.com/philnguyen2901/"], [1, "fab", "fa-instagram"], ["href", "https://github.com/phuclinh9802"], [1, "fab", "fa-github-alt"], ["href", "https://www.linkedin.com/in/philswe/"], [1, "fab", "fa-linkedin-in"], ["href", "https://www.reddit.com/user/phuclinh9802"], [1, "fab", "fa-reddit"], [1, "copyright"], [1, "providers"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "US Corona Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_25_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "linearGradient", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "stop", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "stop", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "rect", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "polygon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "circle", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "polygon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "polygon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "circle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "circle", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "polygon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "circle", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "circle", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "rect", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "rect", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "circle", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "circle", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "circle", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "circle", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "circle", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "circle", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "rect", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "rect", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " World Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "A real-time tracking app to help people analyze the danger of Coronavirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "app-news");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-charts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\xA9 2020 Phillip Nguyen. All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Data provided by NewsAPI, COVID19API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Icons provided by undraw.co, loading.io & Fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Background provided by svgbackgrounds.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_5__["ChartsComponent"]],
      styles: [".loader[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n    position: fixed;\n    z-index: 99; \n    width: 100%;\n    height: 100%;\n    background-color: #222;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n\n.loader[_ngcontent-%COMP%] {\n    -webkit-animation: hide 0.5s;\n            animation: hide 0.5s;\n    -webkit-animation-delay: 7s;\n            animation-delay: 7s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n\n\n\n.loader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fff;\n    font-family: monospace;\n    overflow: hidden; \n    border-right: .15em solid #61892F; \n    white-space: nowrap; \n    margin: 0 auto; \n    letter-spacing: .15em;\n    -webkit-animation: \n      typing 5s steps(50, end),\n      blink-caret .75s step-end infinite;\n            animation: \n      typing 5s steps(50, end),\n      blink-caret .75s step-end infinite;\n  }\n\n\n.main[_ngcontent-%COMP%] {\n  background-color: transparent;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  -webkit-animation: appear 0.5s;\n          animation: appear 0.5s;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  z-index: 2;\n}\n\n\n.main.scrolled[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  transition: background-color 200ms linear;\n}\n\n\n.navbar[_ngcontent-%COMP%] {\n  \n  \n  position: fixed;\n  width: 100%;\n  height: 60px;\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 1px;\n  \n}\n\n\n.fixed[_ngcontent-%COMP%] {\n  background-color: #222629 !important;\n  transition: background-color 200ms linear;\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  padding-top: 5px;\n  list-style: none;\n\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span#n[_ngcontent-%COMP%] {\n  color: red;\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  padding: 20px;\n  color: #eee;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);\n\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.middle[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n\n.navbar[_ngcontent-%COMP%]   a#lo[_ngcontent-%COMP%] {\n  \n  cursor: pointer;\n  color: #eeeeee;\n  border-radius: 4px;\n  transition: 0.3s;\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  margin-right: auto;\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7){\n  margin-left: auto;\n}\n\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a#lo[_ngcontent-%COMP%]:hover {\n  background-color: #DC143C;\n  opacity: 1;\n}\n\n\n\n\n\n.landing-page[_ngcontent-%COMP%] {\n  position: relative;\n  \n  \n  width: 100%;\n  height: calc(100vh);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: #222629;\n  z-index: 2;\n  overflow: hidden; \n  \n}\n\n\n.svg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\nsvg[_ngcontent-%COMP%] { \n  width: 100%;\n}\n\n\n.svg-1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: -1;\n}\n\n\n.svg-1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: -15%;\n}\n\n\nsvg.one[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\nsvg.medical[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n\n.landing-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Dosis\", sans-serif;\n  color: #eee;\n\n}\n\n\n.landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 70px;\n  text-shadow: 1px 2px 2px #333;\n}\n\n\n.landing-content[_ngcontent-%COMP%]   .covid[_ngcontent-%COMP%] {\n  \n  color: rgb(178,34,34);\n\n  text-shadow: 1px 3px 2px red;\n}\n\n\n.landing-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #eee;\n  font-size: 22px;\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: repeat(2, 1fr);\n  color: white;\n  font-family: cursive;\n  background-color: black;\n}\n\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: white;\n  margin: 0 25px;\n  font-size: 2em;\n}\n\n\n.copyright[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin: 8px 0;\n}\n\n\n.copyright[_ngcontent-%COMP%]   p.providers[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  color: #aaa\n}\n\n\n\n\n\n@-webkit-keyframes typing {\n    from { width: 0 }\n    to { width: 47% }\n}\n\n\n@keyframes typing {\n    from { width: 0 }\n    to { width: 47% }\n}\n\n\n\n\n\n@-webkit-keyframes blink-caret {\n    from, to { border-color: transparent }\n    50% { border-color: #61892F }\n}\n\n\n@keyframes blink-caret {\n    from, to { border-color: transparent }\n    50% { border-color: #61892F }\n}\n\n\n@-webkit-keyframes appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n\n\n@keyframes appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n\n\n@-webkit-keyframes hide {\n   \n   100% {\n     z-index: -99;\n     opacity: 0;\n   }\n }\n\n\n@keyframes hide {\n   \n   100% {\n     z-index: -99;\n     opacity: 0;\n   }\n }\n\n\n@media only screen and (max-width: 1440px) {\n  .landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n  .landing-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #eee;\n    font-size: 20px;\n  }\n\n  svg[_ngcontent-%COMP%] { \n    width: 90%;\n  }\n\n  .svg-1[_ngcontent-%COMP%] {\n    width: 160%;\n  }\n}\n\n\n@media only screen and (max-width: 1080px) {\n  .landing-page[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 55px;\n  }\n  .landing-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  svg[_ngcontent-%COMP%] { \n    width: 80%;\n  }\n  .svg-1[_ngcontent-%COMP%] {\n    width: 180%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7O0FBR0Y7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7O0FBQ0E7Ozs7R0FJRzs7O0FBRUg7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7SUFDckI7O3dDQUVvQztZQUZwQzs7d0NBRW9DO0VBQ3RDOzs7QUFFRjtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5Q0FBeUM7QUFDM0M7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUNBQXlDO0FBQzNDOzs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsdURBQXVEOztBQUV6RDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7O0FBRUE7Ozs7R0FJRzs7O0FBQ0g7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOzs7QUFJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsV0FBVzs7QUFFYjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7O0VBRXJCLDRCQUE0QjtBQUM5Qjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Y7QUFDRjs7O0FBR0Esc0JBQXNCOzs7QUFDdEI7SUFDSSxPQUFPLFNBQVM7SUFDaEIsS0FBSyxXQUFXO0FBQ3BCOzs7QUFIQTtJQUNJLE9BQU8sU0FBUztJQUNoQixLQUFLLFdBQVc7QUFDcEI7OztBQUVBLGlDQUFpQzs7O0FBQ2pDO0lBQ0ksV0FBVywwQkFBMEI7SUFDckMsTUFBTSxzQkFBc0I7QUFDaEM7OztBQUhBO0lBQ0ksV0FBVywwQkFBMEI7SUFDckMsTUFBTSxzQkFBc0I7QUFDaEM7OztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0Y7OztBQVJBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0Y7OztBQUVDO0dBQ0U7O01BRUc7R0FDSDtLQUNFLFlBQVk7S0FDWixVQUFVO0dBQ1o7Q0FDRjs7O0FBUkE7R0FDRTs7TUFFRztHQUNIO0tBQ0UsWUFBWTtLQUNaLFVBQVU7R0FDWjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuXG4ubG9hZGVyIHtcbiAgICBhbmltYXRpb246IGhpZGUgMC41cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDdzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLyogLmxvYWRlci5oaWRkZW4ge1xuICAgIGFuaW1hdGlvbjogb3V0IDAuNXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn0gKi9cblxuLmxvYWRlciBoMiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkICM2MTg5MkY7IFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICBsZXR0ZXItc3BhY2luZzogLjE1ZW07XG4gICAgYW5pbWF0aW9uOiBcbiAgICAgIHR5cGluZyA1cyBzdGVwcyg1MCwgZW5kKSxcbiAgICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG4gIH1cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBhbmltYXRpb246IGFwcGVhciAwLjVzO1xuICBhbmltYXRpb24tZGVsYXk6IDdzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgei1pbmRleDogMjtcbn1cblxuLm1haW4uc2Nyb2xsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG4ubmF2YmFyIHtcbiAgLyogbGVmdDogMjAwcHg7ICovXG4gIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7ICovXG59XG5cbi5maXhlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI2MjkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG59XG5cblxuLm5hdmJhciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG59XG5cbi5uYXZiYXIgdWwgbGkgc3BhbiNuIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5uYXZiYXIgdWwgbGkgYXtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC42LCAtMC4yOCwgMC43MzUsIDAuMDQ1KTtcblxufVxuXG4ubmF2YmFyIHVsIGxpIGE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5uYXZiYXIgdWwgbGkubWlkZGxlIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLm5hdmJhciBhI2xvIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0RDMTQzQzsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubmF2YmFyIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uYXZiYXIgdWwgbGk6bnRoLWNoaWxkKDcpe1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm5hdmJhciB1bCBsaSBhI2xvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDMTQzQztcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogLm1haW4tMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUwcHggLSA3MHB4KTtcbn0gKi9cbi5sYW5kaW5nLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGxlZnQ6IDIwMHB4OyAqL1xuICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjYyOTtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyAqL1xufVxuXG5cblxuLnN2ZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc3ZnIHsgXG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5zdmctMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc3ZnLTEgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNSU7XG59XG5zdmcub25lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnN2Zy5tZWRpY2FsIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5sYW5kaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNlZWU7XG5cbn1cblxuLmxhbmRpbmctY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMnB4ICMzMzM7XG59XG5cbi5sYW5kaW5nLWNvbnRlbnQgLmNvdmlkIHtcbiAgLyogY29sb3I6ICMzMmNkMzI7ICovXG4gIGNvbG9yOiByZ2IoMTc4LDM0LDM0KTtcblxuICB0ZXh0LXNoYWRvdzogMXB4IDNweCAycHggcmVkO1xufVxuXG4ubGFuZGluZy1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1pY29ucyBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5cblxuLmNvcHlyaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0IHB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5jb3B5cmlnaHQgcC5wcm92aWRlcnMge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNhYWFcbn1cblxuXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xuQGtleWZyYW1lcyB0eXBpbmcge1xuICAgIGZyb20geyB3aWR0aDogMCB9XG4gICAgdG8geyB3aWR0aDogNDclIH1cbn1cblxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBibGluay1jYXJldCB7XG4gICAgZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cbiAgICA1MCUgeyBib3JkZXItY29sb3I6ICM2MTg5MkYgfVxufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuIEBrZXlmcmFtZXMgaGlkZSB7XG4gICAvKiAwJSB7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICB9ICovXG4gICAxMDAlIHtcbiAgICAgei1pbmRleDogLTk5O1xuICAgICBvcGFjaXR5OiAwO1xuICAgfVxuIH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmxhbmRpbmctY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG4gIC5sYW5kaW5nLWNvbnRlbnQgcCB7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgc3ZnIHsgXG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5zdmctMSB7XG4gICAgd2lkdGg6IDE2MCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmxhbmRpbmctcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5sYW5kaW5nLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgfVxuICAubGFuZGluZy1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBzdmcgeyBcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5zdmctMSB7XG4gICAgd2lkdGg6IDE4MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/news/news.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/news/news.component.ts ***!
    \**************************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppDashboardNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_news_service_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/news-service/news.service */
    "./src/app/news-service/news.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewsComponent_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Published at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.news[ctx_r0.isImage()].publishedAt, "MM/dd/yyyy"), "");
      }
    }

    function NewsComponent_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx_r1.news[ctx_r1.isImage()].author, "");
      }
    }

    function NewsComponent_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.news[ctx_r2.isImage()].description, "...");
      }
    }

    function NewsComponent_div_18_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Published at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, n_r4.publishedAt, "MM/dd/yyyy"), "");
      }
    }

    function NewsComponent_div_18_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", n_r4.author, "");
      }
    }

    function NewsComponent_div_18_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", n_r4.description, " ...");
      }
    }

    function NewsComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewsComponent_div_18_p_5_Template, 3, 4, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewsComponent_div_18_p_6_Template, 2, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsComponent_div_18_p_7_Template, 2, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", n_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r4.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", n_r4.publishedAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", n_r4.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", n_r4.description);
      }
    }

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent(newsService) {
        _classCallCheck(this, NewsComponent);

        this.newsService = newsService;
        this.index = this.getRandomInt(19);
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.newsService.getAllNews().subscribe(function (data) {
            _this4.news = data.articles;
          });
        }
      }, {
        key: "getNews",
        value: function getNews(news) {
          this.news = news;
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }
      }, {
        key: "isImage",
        value: function isImage() {
          while (this.news[this.index].urlToImage == null) {
            this.index = this.getRandomInt(19);
          }

          return this.index;
        }
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_news_service_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 20,
      vars: 11,
      consts: [[1, "news"], [1, "headlines"], [1, "image"], [3, "href"], ["alt", "", 1, "img-head", 3, "src"], [1, "not-img"], [1, "header"], [1, "title", 3, "href"], [4, "ngIf"], [1, "another-news"], [1, "latest"], ["aria-hidden", "true", 1, "fa", "fa-star"], [1, "box"], ["class", "component", 4, "ngFor", "ngForOf"], [1, "component"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewsComponent_p_9_Template, 3, 4, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewsComponent_p_10_Template, 2, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewsComponent_p_11_Template, 2, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Other News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NewsComponent_div_18_Template, 8, 5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.news[ctx.isImage()].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.news[ctx.isImage()].urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.news[ctx.isImage()].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.news[ctx.index].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.news[ctx.isImage()].publishedAt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.news[ctx.isImage()].author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.news[ctx.isImage()].description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 8, ctx.news, 1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".news[_ngcontent-%COMP%] {\n    position: relative;\n    \n    width: 100%;\n    height: calc(100%);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    overflow: hidden;\n    margin-top: 20px;\n}\n.headlines[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 10px;\n    font-family: 'Oswald', sans-serif;\n}\n.headlines[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n.image[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 90%;\n    height: 400px;\n}\nimg[_ngcontent-%COMP%] {\n    \n    width: 100%;\n    height: 400px;\n    border: 1px solid #eee;\n}\n.not-img[_ngcontent-%COMP%] {\n    padding: 5px 62px;\n    letter-spacing: 1px;\n    font-weight: 200;\n}\n.another-news[_ngcontent-%COMP%] {\n    color: #eee;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Oswald', sans-serif;\n}\n.component[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]  {\n    font-family: 'Noto Sans', sans-serif;\n    color: #111;\n    font-size: 12px;\n}\n.latest[_ngcontent-%COMP%] {\n    font-family: 'Lato', sans-serif;\n    color: #32cd32;\n    padding-bottom: 20px;\n    text-shadow: 1px 2px 2px green;\n}\n.box[_ngcontent-%COMP%] {\n    height: 500px;\n    width: 80%;\n    border: 1px solid #eee;\n    overflow: scroll;\n    overflow-x: hidden;\n}\n.box[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 10px;\n}\n.box[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey; \n    border-radius: 10px;\n}\n.box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: rgba(255,255,255,0.5);\n    border-radius: 4px;\n}\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #eee;\n}\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #eee;\n    font-family: 'Noto Sans';\n    font-weight: 400;\n}\n.component[_ngcontent-%COMP%] {\n    border-bottom: 1px dashed #ddd;\n    padding: 10px;\n}\n.component[_ngcontent-%COMP%]:hover {\n    background: rgba(255,255,255,0.1);\n}\n@media only screen and (max-width: 1440px) {\n    .not-img[_ngcontent-%COMP%] {\n        padding: 5px 32px;\n    }\n}\n@media only screen and (max-width: 1080px) {\n    .news[_ngcontent-%COMP%] {\n        grid-template-columns: auto;\n        grid-template-rows: repeat(2, 1fr);\n    }\n\n    .image[_ngcontent-%COMP%] {\n        width: 80%;\n        height: 400px;\n    }\n    \n    img[_ngcontent-%COMP%] {\n        \n        width: 100%;\n        height: 400px;\n        border: 1px solid #eee;\n    }\n\n    .not-img[_ngcontent-%COMP%] {\n        padding: 5px 100px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUVBO0lBQ0k7eUJBQ3FCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtJQUNqQjs7SUFFQTtRQUNJOzZCQUNxQjtRQUNyQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBsZWZ0OiAyMDBweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5oZWFkbGluZXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGxpbmVzIC50aXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLmltYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5pbWcge1xuICAgIC8qIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cblxuLm5vdC1pbWcge1xuICAgIHBhZGRpbmc6IDVweCA2MnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5hbm90aGVyLW5ld3Mge1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG59XG5cbi5jb21wb25lbnQgcCAge1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzExMTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYXRlc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMmNkMzI7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMnB4IGdyZWVuO1xufVxuLmJveCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuLmJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG4uYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJveCBwIHtcbiAgICBjb2xvcjogI2VlZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29tcG9uZW50IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbXBvbmVudDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5ub3QtaW1nIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDMycHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgICAubmV3cyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgICBcbiAgICBpbWcge1xuICAgICAgICAvKiBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICB9XG5cbiAgICAubm90LWltZyB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMDBweDtcbiAgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.css']
        }]
      }], function () {
        return [{
          type: src_app_news_service_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/sidebar/sidebar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppDashboardSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 20,
      vars: 0,
      consts: [["id", "sb", 1, "sidebar"], ["href", ""], [1, "fas", "fa-home"], [1, "fas", "fa-address-card"], [1, "fas", "fa-address-book"], [1, "fas", "fa-sign-in-alt"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phillip Nguyen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Chart & Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    background: #333;\n    width: 200px;\n    height: 100%; \n    padding: 20px 0;\n    transition: 0.5s;\n    border-right: 1px solid #61892F;\n}\n\n.sidebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    text-align: center;\n    color: #eee;\n    font-weight: 700;\n    letter-spacing: 2px;\n    margin-bottom: 30px;\n    font-family: 'Pacifico', cursive;\n}\n\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-bottom: 1px solid #61892F;\n    display: block;\n    font-family: 'Abel', sans-serif;\n}\n\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #eee;\n    text-decoration: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzYxODkyRjtcbn1cblxuLnNpZGViYXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG59XG5cbi5zaWRlYmFyIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uc2lkZWJhciB1bCBsaSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYxODkyRjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogJ0FiZWwnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lkZWJhciBsaSBhe1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXIgbGkgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news-service/news.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/news-service/news.service.ts ***!
    \**********************************************/

  /*! exports provided: NewsService */

  /***/
  function srcAppNewsServiceNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsService", function () {
      return NewsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NewsService = /*#__PURE__*/function () {
      function NewsService(http) {
        _classCallCheck(this, NewsService);

        this.http = http;
      }

      _createClass(NewsService, [{
        key: "getAllNews",
        value: function getAllNews() {
          var url = "http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=25acb99ee9c14efa9cbc84ee5761722b";
          return this.http.get(url);
        }
      }]);

      return NewsService;
    }();

    NewsService.ɵfac = function NewsService_Factory(t) {
      return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NewsService,
      factory: NewsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registerlogin/login/login.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registerlogin/login/login.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppRegisterloginLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid username or password.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(http, router) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.router = router;
        this.invalidLogin = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(form) {
          var _this5 = this;

          var credentials = JSON.stringify(form.value); //Windows: https://localhost:5001/api/login, Mac: https://localhost:5001/api/auth/login

          this.http.post("https://localhost:5001/api/auth/login", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          }).subscribe(function (response) {
            var token = response.token;
            localStorage.setItem("jwt", token);
            _this5.invalidLogin = false;

            _this5.router.navigate(["/dashboard"]);
          }, function (err) {
            _this5.invalidLogin = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 19,
      vars: 1,
      consts: [[1, "wrapper"], [1, "form-signin", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "container-fluid"], [1, "form-signin-heading"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "email", "id", "username", "name", "username", "ngModel", "", "placeholder", "Username", "required", "", "autofocus", "", 1, "form-control"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [1, "register"], ["routerLink", "/register"], [1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.login(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Don't have account yet? Sign up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    font-family: 'Nunito', sans-serif;\n}\n\nform[_ngcontent-%COMP%] {\n    position: absolute;\n    top : 30%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px;\n    border: 1px solid #61892F;\n    border-radius: 2px;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    color: white;\n}\n\ninput[_ngcontent-%COMP%] {\n    background-color: #222629;\n    font-family: monospace;\n    font-size: 18px;\n    border: none;\n    border-bottom: 2px solid #474B4F;\n    transition: 0.3s ease-in;\n    margin-bottom: 20px;\n    color: #eee;\n    padding-left: 5px;\n}\n\ninput[type=\"email\"][_ngcontent-%COMP%]:focus, input[type=\"password\"][_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-bottom: 3px solid #86C232;\n}\n\nbutton[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid #86C232;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: white;\n    border-radius: 5px;\n    margin-top: 5px;\n    transition: 0.4s ease-in-out;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #61892F;\n    border: 1px solid #61892F;\n}\n\n.register[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 15px;\n}\n\n.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    transition: 0.3s;\n}\n\n.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #61892F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJsb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVybG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCA6IDMwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjE4OTJGO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNjI5O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ3NEI0RjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogI2VlZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM4NkMyMzI7XG59XG5cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NkMyMzI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxODkyRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjE4OTJGO1xufVxuXG5cbi5yZWdpc3RlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucmVnaXN0ZXIgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5yZWdpc3RlciBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzYxODkyRjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registerlogin/register/register.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/registerlogin/register/register.component.ts ***!
    \**************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterloginRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user-service.service */
    "./src/app/user-service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(userService, http, toastr) {
        _classCallCheck(this, RegisterComponent);

        this.userService = userService;
        this.http = http;
        this.toastr = toastr;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //   register() {
        //     this.userService.onRegister().subscribe(
        //       (res:any) => {
        //         if (res.succeeded) {
        //            console.log("Success!!");
        //            this.userService.formModel.reset();
        //         }
        //         else {
        //           console.log('Please try again, thank you!');
        //         }
        //   })
        // }

      }, {
        key: "register",
        value: function register(registerForm) {
          var _this6 = this;

          var credentials = JSON.stringify(registerForm.value);
          this.http.post("https://localhost:5001/api/auth/register", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          }).subscribe(function (response) {
            var res = response.firstName;

            _this6.toastr.success("You have registered! Welcome to the club!", "Registration successful");
          }, function (err) {
            console.log("Please try again!");
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 22,
      vars: 0,
      consts: [[1, "wrapper"], [1, "form-signup", 3, "ngSubmit"], ["registerForm", "ngForm"], [1, "container-fluid"], [1, "form-signin-heading"], ["type", "email", "id", "UserName", "name", "UserName", "ngModel", "", "placeholder", "abc123", "required", "", "autofocus", "", 1, "form-control"], ["type", "text", "id", "FirstName", "name", "FirstName", "ngModel", "", "placeholder", "John", "required", "", "autofocus", "", 1, "form-control"], ["type", "text", "id", "LastName", "name", "LastName", "ngModel", "", "placeholder", "Carpenter", "required", "", "autofocus", "", 1, "form-control"], ["type", "password", "id", "Password", "name", "Password", "ngModel", "", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [1, "login"], ["routerLink", "/login"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.register(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    font-family: 'Nunito', sans-serif;\n}\n\nform[_ngcontent-%COMP%] {\n    position: absolute;\n    top : 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 50px 80px;\n    border: 1px solid #61892F;\n    border-radius: 2px;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    color: white;\n}\n\ninput[_ngcontent-%COMP%] {\n    background-color: #222629;\n    font-family: monospace;\n    font-size: 18px;\n    border: none;\n    border-bottom: 2px solid #474B4F;\n    transition: 0.3s ease-in;\n    margin-bottom: 20px;\n    color: #eee;\n    padding-left: 5px;\n}\n\ninput[type=\"email\"][_ngcontent-%COMP%]:focus, input[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"password\"][_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-bottom: 3px solid #86C232;\n}\n\nbutton[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid #86C232;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: white;\n    border-radius: 5px;\n    margin-top: 5px;\n    transition: 0.4s ease-in-out;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #61892F;\n    border: 1px solid #61892F;\n}\n\n.login[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 15px;\n}\n\n.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    transition: 0.3s;\n}\n\n.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #61892F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJsb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVybG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCA6IDM1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcGFkZGluZzogNTBweCA4MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTg5MkY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI2Mjk7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDc0QjRGO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM4NkMyMzI7XG59XG5cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NkMyMzI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxODkyRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjE4OTJGO1xufVxuXG5cbi5sb2dpbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubG9naW4gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5sb2dpbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzYxODkyRjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registerlogin/registerlogin.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/registerlogin/registerlogin.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterloginComponent */

  /***/
  function srcAppRegisterloginRegisterloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterloginComponent", function () {
      return RegisterloginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterloginComponent = /*#__PURE__*/function () {
      function RegisterloginComponent() {
        _classCallCheck(this, RegisterloginComponent);
      }

      _createClass(RegisterloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterloginComponent;
    }();

    RegisterloginComponent.ɵfac = function RegisterloginComponent_Factory(t) {
      return new (t || RegisterloginComponent)();
    };

    RegisterloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterloginComponent,
      selectors: [["app-registerlogin"]],
      decls: 2,
      vars: 0,
      template: function RegisterloginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registerlogin works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVybG9naW4vcmVnaXN0ZXJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registerlogin',
          templateUrl: './registerlogin.component.html',
          styleUrls: ['./registerlogin.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/auth-guard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/auth-guard.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServiceAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router, jwtHelper) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.jwtHelper = jwtHelper;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          var token = localStorage.getItem("jwt"); // Check if the token is legit and is not expired

          if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
          } // Else, navigate back to login page


          this.router.navigate(["login"]);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/corona.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/corona.service.ts ***!
    \*******************************************/

  /*! exports provided: CoronaService */

  /***/
  function srcAppServiceCoronaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoronaService", function () {
      return CoronaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CoronaService = /*#__PURE__*/function () {
      function CoronaService(http) {
        _classCallCheck(this, CoronaService);

        this.http = http;
      }

      _createClass(CoronaService, [{
        key: "getCountries",
        value: function getCountries() {
          var url = "https://api.covid19api.com/countries";
          return this.http.get(url);
        }
      }, {
        key: "getInfoByCountries",
        value: function getInfoByCountries(country) {
          var url = "https://api.covid19api.com/total/dayone/country/" + country;
          return this.http.get(url);
        }
      }]);

      return CoronaService;
    }();

    CoronaService.ɵfac = function CoronaService_Factory(t) {
      return new (t || CoronaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CoronaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CoronaService,
      factory: CoronaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoronaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tracker/tracker.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tracker/tracker.component.ts ***!
    \**********************************************/

  /*! exports provided: TrackerComponent */

  /***/
  function srcAppTrackerTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerComponent", function () {
      return TrackerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TrackerComponent = /*#__PURE__*/function () {
      function TrackerComponent() {
        _classCallCheck(this, TrackerComponent);
      }

      _createClass(TrackerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TrackerComponent;
    }();

    TrackerComponent.ɵfac = function TrackerComponent_Factory(t) {
      return new (t || TrackerComponent)();
    };

    TrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrackerComponent,
      selectors: [["app-tracker"]],
      decls: 0,
      vars: 0,
      template: function TrackerComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrZXIvdHJhY2tlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tracker',
          templateUrl: './tracker.component.html',
          styleUrls: ['./tracker.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-service.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/user-service.service.ts ***!
    \*****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, formBuilder) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.formBuilder = formBuilder;
        this.uri = "https://localhost:5001/api";
        this.formModel = this.formBuilder.group({
          UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          FirstName: [''],
          LastName: [''],
          Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
      }

      _createClass(UserService, [{
        key: "onRegister",
        value: function onRegister() {
          var httpBody = {
            UserName: this.formModel.value.UserName,
            FirstName: this.formModel.value.FirstName,
            LastName: this.formModel.value.LastName,
            Password: this.formModel.value.Password
          }; // /auth/register - Mac, /register - Windows

          return this.http.post(this.uri + "/auth/register", httpBody);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent() {
        _classCallCheck(this, UsersComponent);
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)();
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 0,
      vars: 0,
      template: function UsersComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/phucnguyen/Projects/projectpractice/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg=="

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NET_STATUS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADING_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOME_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CURRENT_MOVIE; });
/* unused harmony export CURRENT_TAG */
/* unused harmony export CURRENT_SEE_MORE */

var NET_STATUS = 'NET_STATUS';

var LOADING_FLAG = 'LOADING_FLAG';

var HOME_DATA = 'HOME_DATA';

var CURRENT_MOVIE = 'CURRENT_MOVIE';

var CURRENT_TAG = 'CURRENT_TAG';

var CURRENT_SEE_MORE = 'CURRENT_SEE_MORE';



/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_movieDetail__ = __webpack_require__(67);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */].Store({
	state: {
		netStatus: '',
		loadingFlag: true
	},
	mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* mutations */],
	actions: __WEBPACK_IMPORTED_MODULE_4__actions___default.a,
	modules: {
		home: __WEBPACK_IMPORTED_MODULE_2__modules_home__["a" /* default */],
		movieDetail: __WEBPACK_IMPORTED_MODULE_5__modules_movieDetail__["a" /* default */]
	}
}));

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hotMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commingSoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return top250; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return usBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return currentMovie; });
/* unused harmony export getTagData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serverConfig__ = __webpack_require__(64);



var Ajax = function Ajax(url) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('\u9519\u8BEF: ' + xhr.status);
        }
      }
    };
  });
};

var hotMovie = function hotMovie(count, start) {
  return Ajax(__WEBPACK_IMPORTED_MODULE_1__serverConfig__["a" /* default */] + '/v2/movie/in_theaters?count=' + count + '&start=' + start);
};

var commingSoon = function commingSoon(count, start) {
  return Ajax(__WEBPACK_IMPORTED_MODULE_1__serverConfig__["a" /* default */] + '/v2/movie/coming_soon?count=' + count + '&start=' + start);
};

var top250 = function top250(count, start) {
  return Ajax(__WEBPACK_IMPORTED_MODULE_1__serverConfig__["a" /* default */] + '/v2/movie/top250?count=' + count + '&start=' + start);
};

var usBox = function usBox(count, start) {
  return Ajax(__WEBPACK_IMPORTED_MODULE_1__serverConfig__["a" /* default */] + '/v2/movie/us_box?count=' + count + '&start=' + start);
};

var currentMovie = function currentMovie(currentMovieId) {
  return Ajax(__WEBPACK_IMPORTED_MODULE_1__serverConfig__["a" /* default */] + '/v2/movie/subject/' + currentMovieId);
};

var getTagData = function getTagData(tag, count, start) {
  return Ajax(__WEBPACK_IMPORTED_MODULE_1__serverConfig__["a" /* default */] + '/v2/movie/search?tag=' + tag + '&count=' + count + '&start=' + start);
};

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII="

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_home__ = __webpack_require__(62);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [__WEBPACK_IMPORTED_MODULE_2__routes_home__["a" /* default */]]
}));

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(118)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var prefixCls = 'ivu-icon';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        classes: function classes() {
            return prefixCls + ' ' + prefixCls + '-' + this.type;
        },
        styles: function styles() {
            var style = {};

            if (this.size) {
                style['font-size'] = this.size + 'px';
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_assist__ = __webpack_require__(123);





var prefixCls = 'ivu-spin';

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Spin',
    props: {
        size: {
            validator: function validator(value) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_assist__["a" /* oneOf */])(value, ['small', 'large']);
            }
        },
        fix: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showText: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-' + this.size, !!this.size), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-fix', this.fix), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixCls + '-show-text', this.showText), _ref)];
        },
        mainClasses: function mainClasses() {
            return prefixCls + '-main';
        },
        dotClasses: function dotClasses() {
            return prefixCls + '-dot';
        },
        textClasses: function textClasses() {
            return prefixCls + '-text';
        }
    },
    mounted: function mounted() {
        this.showText = this.$slots.default !== undefined;
    }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Common_Loading__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Common_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Common_Loading__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    Loading: __WEBPACK_IMPORTED_MODULE_1__components_Common_Loading___default.a
  },
  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapState */])({
    loadingFlag: function loadingFlag(state) {
      return state.loadingFlag;
    }
  })
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iview_src_components_spin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview_src_components_icon__ = __webpack_require__(121);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Loading',

  components: {
    Spin: __WEBPACK_IMPORTED_MODULE_0_iview_src_components_spin__["a" /* default */],
    Icon: __WEBPACK_IMPORTED_MODULE_1_iview_src_components_icon__["a" /* default */]
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_starActive_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_starActive_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_starActive_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_starGrey_png__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_starGrey_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_starGrey_png__);





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      starActive: __WEBPACK_IMPORTED_MODULE_0__assets_starActive_png___default.a
    };
  },

  props: ['grade'],
  methods: {
    star: function star(n) {
      return 2 * n - 1 > this.grade ? __WEBPACK_IMPORTED_MODULE_1__assets_starGrey_png___default.a : __WEBPACK_IMPORTED_MODULE_0__assets_starActive_png___default.a;
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pageHeader__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pageHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pageHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pageFooter__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pageFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pageFooter__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    pageHeader: __WEBPACK_IMPORTED_MODULE_0__pageHeader___default.a,
    pageFooter: __WEBPACK_IMPORTED_MODULE_1__pageFooter___default.a
  },
  data: function data() {
    return {};
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movieItems__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movieItems___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__movieItems__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(19);




/* harmony default export */ __webpack_exports__["default"] = ({
        computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])({
                homeData: function homeData(state) {
                        return state.home.homeData;
                }
        }),
        components: {
                movieItems: __WEBPACK_IMPORTED_MODULE_0__movieItems___default.a
        }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_starActive_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_starActive_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_starActive_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_starGrey_png__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_starGrey_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_starGrey_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(19);







/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'detail',
    data: function data() {
        return {};
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        info: function info() {
            var _current_movie = this.current_movie,
                directors = _current_movie.directors,
                countries = _current_movie.countries,
                year = _current_movie.year,
                genres = _current_movie.genres,
                casts = _current_movie.casts;

            var arr = [];
            Array.prototype.push.call(arr, genres.reduce(function (pre, cur) {
                return pre / cur;
            }), directors.map(function (val) {
                return val.name + '(\u5BFC\u6F14)';
            }).join('/'), casts.map(function (val) {
                return val.name;
            }).join('/'), year + '\u5E74( ' + countries.reduce(function (pre, cur) {
                return pre / cur;
            }) + ' )\u4E0A\u6620');
            return arr.join('/');
        },
        person_info: function person_info() {
            var _current_movie2 = this.current_movie,
                directors = _current_movie2.directors,
                casts = _current_movie2.casts;

            directors.forEach(function (val) {
                val.isDirectors = true;
            });
            casts.forEach(function (val) {
                val.isDirectors = false;
            });
            return Array.prototype.concat(directors, casts);
        }
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* mapState */])({
        current_movie: function current_movie(state) {
            return state.movieDetail.currentMovie[this.$route.params.pageId];
        }
    })),
    methods: {
        star: function star(n) {
            return 2 * n - 1 > this.current_movie.rating.average ? __WEBPACK_IMPORTED_MODULE_2__assets_starGrey_png___default.a : __WEBPACK_IMPORTED_MODULE_1__assets_starActive_png___default.a;
        }
    }

});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_star__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_star__);




/* harmony default export */ __webpack_exports__["default"] = ({
            props: ['detail'],
            components: {
                        Star: __WEBPACK_IMPORTED_MODULE_0__common_star___default.a
            },
            computed: {
                        average: function average() {
                                    return (this.detail.subject ? this.detail.subject : this.detail).rating.average;
                        }
            }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_lazyload__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_lazyload__);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_iview___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_lazyload___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_mutation_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movieDetail__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__server__ = __webpack_require__(30);









/* harmony default export */ __webpack_exports__["a"] = ({
  path: '/',
  redirect: '/main',
  name: 'Home',
  component: __WEBPACK_IMPORTED_MODULE_3__components_home___default.a,
  children: [__WEBPACK_IMPORTED_MODULE_5__movieDetail__["a" /* default */], {
    path: 'main',
    component: __WEBPACK_IMPORTED_MODULE_6__components_main___default.a
  }],
  beforeEnter: function beforeEnter(to, before, next) {
    if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(__WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].state.home.homeData).length !== 0) {
      __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_4__store_mutation_types__["a" /* LOADING_FLAG */], false);
      next();
      return;
    }
    __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_4__store_mutation_types__["a" /* LOADING_FLAG */], true);
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__server__["a" /* hotMovie */])(8, 0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__server__["b" /* commingSoon */])(8, 0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__server__["c" /* top250 */])(8, 0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__server__["d" /* usBox */])(8, 0)]).then(function (homeData) {
      __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_4__store_mutation_types__["b" /* HOME_DATA */], homeData);
      __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_4__store_mutation_types__["a" /* LOADING_FLAG */], false);
    });
    next();
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_movieDetail__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_movieDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_movieDetail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__ = __webpack_require__(8);







/* harmony default export */ __webpack_exports__["a"] = ({
       path: 'movieDetail/:pageId',
       component: __WEBPACK_IMPORTED_MODULE_2__components_movieDetail___default.a,
       beforeEnter: function beforeEnter(to, before, next) {
              var pageId = to.params.pageId;
              if (__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].state.movieDetail.currentMovie['$(id)']) {
                     __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["a" /* LOADING_FLAG */], false);
                     next();
                     return;
              }
              __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["a" /* LOADING_FLAG */], true);
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__server__["e" /* currentMovie */])(pageId).then(function (currentMovieDetail) {
                     var id = pageId;
                     __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["c" /* CURRENT_MOVIE */], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, '' + id, currentMovieDetail), __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].state.movieDetail.currentMovie));
                     __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */].commit(__WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["a" /* LOADING_FLAG */], false);
              });
              next();
       }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('');

/***/ }),
/* 65 */
/***/ (function(module, exports) {



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(8);



var state = {
	homeData: {}
};

var getters = {};

var actions = {};

var mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* HOME_DATA */], function (state, homeData) {
	state.homeData = homeData;
});

/* harmony default export */ __webpack_exports__["a"] = ({ state: state, getters: getters, actions: actions, mutations: mutations });

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(8);



var state = {
  currentMovie: {}
};
var getters = {};
var actions = {};
var mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* CURRENT_MOVIE */], function (state, current_movie) {

  state.currentMovie = current_movie;
});

/* harmony default export */ __webpack_exports__["a"] = ({ state: state, getters: getters, actions: actions, mutations: mutations });

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mutations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(8);



var mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* LOADING_FLAG */], function (state, loadingFlag) {
     state.loadingFlag = loadingFlag;
});

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/doubanIcon.2909610.png";

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIyMUZGOTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIyMUZGQTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMjIxRkY3NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMjIxRkY4NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlyY+wAAAYBQTFRFBa8QAKoAFdkhLsg4E8YeAMYBALEAN9JBAMoJErAcB8wTBsYSg9qIB9ITB88TWthijt+TBbAQB84TAM0ABsASBsQS////BsISALsABsoTBscTBrkRBroRBbYRBr4SdNt7b+V3SuFTBbQRBbMR5frmALIJoeOl7fvuE7sdBrwSKbwzCcgWTNRUeOh/FNAf0fbUxvXJHbUnt+i6QsVKSstTk+uYoOylcN13tvK6yu/N8/z0Y9psverAo++oAKMAwuzF+v77AK8LbNVxUsdaAbcKdNN74vbjYMtnrOawxu3JvvPB2/XdGMAjVs5fCNMW2fnbac9wBboQAtEQC7MUOsJDB80WB7oTB7gT/P/8BrYSBLYRBawQB9cUB9YUB9QUB9UUBa0QBrcRQtpLBrwRB64SBbURV+JfC9gYDdYab8919/33BrYUqvGvBc4SBrMTCK8PBrsTBrQSELwbBbEQ+/77BbgRBbgSCK8T6PnqBMsOBbwQA84NC70V2PTazvDQ////esWf9QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAEbUlEQVR42uzb/V/aRhzA8Ts0B2yM0rI6NrcpKoJYmIA4yxR8SBWcWmmpXS3Wyaabm9s6Hzasq/zrDTjygM038Y7c+Wr7+a25+H2TiIEqQY3OooeJcM3VxdzhwamRKwzq+PfhvqvqROFsFIDnss6orVyJETN4wkG2Rc++HU5UHW8/ehV+WKtyyDXdCR9WOZUwwtxcVb6E61WOrejgGk/4l6gKJ6pcq7XhiSrnsv/Drm3ePWzBWe7udrgF8z/g5iGjxrQAd3tQgfd3BORqoNyvIuCdFXQoxN0ZRIkXQqqhsBjYjdxiYBdyfYB5wclPzHvEGDA6CcDrQebW12ng8+TsClPT4SDNEful2T7GTvxBCvhRcIIV/iEJwX6TzoPTrHAuGTSbDsIrrPBvdLDEfKr7qGC/tM/qTnnOaWC/5K4x5fac+QH4jml/SIyd+01ng7CTKfBHQrrJ8JmHojNm+IlHooElzxNL+HMwz/jUNxRlx8/guZawNEh37bglscIJOvg7ZvhbQUccooVDNxbu/QJMD0eXRuByehie23sd2C2Ng4VuOQT3hOAXo5DbqSO2GBa6dy34YzAjbLGvAYb3fS/hu2BG2GJfAwzv+wF+L+DPwIywxb4GGN5XgT8FIwYY3tcIw/u+GzDRw6SLcC8mYLjHITi7MAC2UHQIvtZbH0t49Wswehieu3pz4QFRsI/yfxKWcGwMjGTo4B4Cz42ho5/AXpHJgHW+UVX83tfckCGv4LlHKPYl2FiZ2Ci/psKT+daWsTF4bswKViorvZTbhvyyfCWZvFZ/mfcfaW6xHGoHbnZ61HNZXJE7FzeJdq1ME9nWQLswVn+qRq9OLuOACi/gTbtwv53IpDq6gjc7FmUyoq7Gia15/XZhWa63Rxdx2bi2ibVHdUFk2/CprXRnc5U8NSzJOK2uDeB+e/MUeNdOT3VH5cP/6JdOSUx/3Ti1NW/XLrxLjubaw5dIxPiYFlS3LpPdLsMyntGuEfiZYaWkrpSIbB/+yl7aD5Ty9NrSL6xqZzpgWIG6BlzR5sfwM3X7Fta9flV0C5bwnr30T6FAfkvdHhmuay8QJGJz2h4ID0V0EVzQfv0TIep2HNcekC8fMQTDQyb9TozvZvO6U7qW1zZvaJsz+Y73u3t/m00H4PnHo/f1FZZ0f1AqqZtLc9rm1wX9F1yU1vAQAA+blH/A/GenvsfEbDoEB5jduRimgX3McI4OZj/iEzq4G99jAPYemzT/V2CGrfQiNht+7DWH/5zPY9aGaeDj49vzjJmPbsK3heRFKTFwCsWRkFIoIwaOow0xcAWNioGXUV0MXESNigj33xxqBETAiw3UyP38I/8Kzc/eHvB3460P/Ub5H/LM5eeri885t9z+KHuGr+s9acM5L1e4pN01UODpBvQ3aDzg52aMt6RwkxdPOm7CSXs5nmfDbUdLHJ7bqZm33mjlc9rdyJncWnZ/0Um2kgZuprs4SDl00VhOw3fxKc+yg0w8lfJ2r1S8slyMdjJvBBgAjaD61EhSiREAAAAASUVORK5CYII="

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/doubanicon.2909610.png";

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(146),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(144),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  "data-v-37e20eb1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(148),
  /* scopeId */
  "data-v-b570bfa6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(112)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(114)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(116)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  "data-v-553f4a58",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  "data-v-127c7089",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(117)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(119)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  "data-v-78c8de15",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('pageHeader'), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('pageFooter')], 1)
},staticRenderFns: []}

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "movie-be-on"
  }, [_c('router-link', {
    attrs: {
      "to": ("movieDetail/" + ((_vm.detail.subject ? _vm.detail.subject : _vm.detail).id))
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: ((_vm.detail.subject ? _vm.detail.subject : _vm.detail).images.large),
      expression: "(detail.subject?detail.subject:detail).images.large"
    }],
    staticClass: "movie-img",
    attrs: {
      "alt": "电影图片"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "movie-name"
  }, [_vm._v(_vm._s((_vm.detail.subject ? _vm.detail.subject : _vm.detail).title))]), _vm._v(" "), _c('Star', {
    attrs: {
      "grade": _vm.average
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, _vm._l((_vm.homeData), function(item) {
    return _c('div', {
      key: item.title,
      staticClass: "movie-row"
    }, [_c('h1', {
      staticClass: "movie-title"
    }, [_c('span', {
      staticClass: "movie-text"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('a', {
      staticClass: "movie-more",
      attrs: {
        "href": "#"
      }
    }, [_vm._v("更多")])]), _vm._v(" "), _c('section', {
      staticClass: "movie-all"
    }, _vm._l((item.subjects.slice(0, 8)), function(item) {
      return _c('movieItems', {
        key: item.id,
        attrs: {
          "detail": item
        }
      })
    }))])
  }))
},staticRenderFns: []}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('spin', {
    attrs: {
      "fix": "",
      "size": "small"
    }
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(125),
      "alt": "豆瓣logo"
    }
  }), _vm._v(" "), _c('icon', {
    staticClass: "spinIconLoad",
    attrs: {
      "type": "load-c",
      "size": "120"
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "prompt"
  }, [_vm._v("豆瓣：我们的精神部落")])], 1)
},staticRenderFns: []}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('main', {
    staticClass: "movie_detail"
  }, [_c('div', {
    staticClass: "detail_mixture"
  }, [_c('h1', {
    staticClass: "detail_title"
  }, [_vm._v(_vm._s(_vm.current_movie.title))]), _vm._v(" "), _c('div', {
    staticClass: "detail_grade"
  }, [_c('div', {
    staticClass: "detail_star"
  }, _vm._l((5), function(n) {
    return _c('img', {
      attrs: {
        "src": _vm.star(n)
      }
    })
  })), _vm._v(" "), _c('span', {
    staticClass: "detail_num"
  }, [_vm._v(_vm._s(_vm.current_movie.rating.average))]), _vm._v(" "), _c('span', {
    staticClass: "detail_evaluate_num"
  }, [_vm._v(_vm._s(_vm.current_movie.ratings_count) + "人评价")]), _vm._v(" "), _c('div', {
    staticClass: "detail_type"
  }, [_vm._v(_vm._s(_vm.info))])]), _vm._v(" "), _c('div', {
    staticClass: "detail_img"
  }, [_c('img', {
    attrs: {
      "src": _vm.current_movie.images.small,
      "alt": "未显示"
    }
  })])]), _vm._v(" "), _c('section', {
    staticClass: "story_introduce"
  }, [_c('h2', {
    staticClass: "story_title"
  }, [_vm._v("《" + _vm._s(_vm.current_movie.title) + "》的剧情简介")]), _vm._v(" "), _c('p', {
    staticClass: "story_detail"
  }, [_vm._v("\n         \t" + _vm._s(_vm.current_movie.summary) + "\n            ")])]), _vm._v(" "), _c('section', {
    staticClass: "more_movie"
  }, [_c('h2', {
    staticClass: "moreM_title"
  }, [_vm._v("查看更多豆瓣高分电影电视剧")]), _vm._v(" "), _c('div', {
    staticClass: "movie_tag_wrap"
  }, _vm._l((_vm.current_movie.genres), function(item) {
    return _c('a', {
      staticClass: "movie_tag",
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(item))])
  }))]), _vm._v(" "), _c('section', {
    staticClass: "figure_introduce"
  }, [_c('h2', {
    staticClass: "movie_star"
  }, [_vm._v("影人")]), _vm._v(" "), _c('div', {
    staticClass: "star_wrap_all"
  }, _vm._l((_vm.person_info), function(item) {
    return _c('div', {
      staticClass: "star_wrap_single"
    }, [_c('img', {
      staticClass: "star_pic",
      attrs: {
        "src": item.avatars.small,
        "alt": "none"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "star_name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.isDirectors) ? _c('div', {
      staticClass: "job_title"
    }, [_vm._v("导演")]) : _vm._e()])
  }))])]), _vm._v(" "), _c('article', {
    staticClass: "discuss_all"
  }, [_c('h2', {
    staticClass: "discuss_title"
  }, [_vm._v("\n         \t   " + _vm._s(_vm.current_movie.title) + "的短评（" + _vm._s(_vm.current_movie.comments_count) + "）\n         \t")]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "discuss_person"
  }, [_c('div', {
    staticClass: "user_img_wrap"
  }, [_c('img', {
    staticClass: "headPortrait",
    attrs: {
      "src": __webpack_require__(124)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "discuss_detail"
  }, [_c('div', {
    staticClass: "user_grade"
  }, [_c('span', [_vm._v("小明")]), _vm._v(" "), _c('div', {
    staticClass: "user_star_wrap"
  }, [_c('img', {
    staticClass: "user_star",
    attrs: {
      "src": __webpack_require__(4)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "user_star",
    attrs: {
      "src": __webpack_require__(4)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "user_star",
    attrs: {
      "src": __webpack_require__(4)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "user_star",
    attrs: {
      "src": __webpack_require__(4)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "user_star",
    attrs: {
      "src": __webpack_require__(4)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "discuss_time"
  }, [_vm._v("2017-5-21")]), _vm._v(" "), _c('p', {
    staticClass: "discuss_content"
  }, [_vm._v("好看生生世世水水是是是撒泼都是啊为了看网上")]), _vm._v(" "), _c('div', {
    staticClass: "like_num_wrap"
  }, [_c('img', {
    staticClass: "like_img",
    attrs: {
      "src": __webpack_require__(4)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "like_num"
  }, [_vm._v("1111")])])])])
}]}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('div', {
    staticClass: "footer-container"
  }, [_c('img', {
    staticClass: "footer-icon",
    attrs: {
      "src": __webpack_require__(126)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "footer-text"
  }, [_c('strong', [_vm._v("豆瓣")]), _vm._v(" "), _c('div', [_vm._v("我们的精神部落")])])])])])
}]}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    class: _vm.classes
  }, [_c('div', {
    class: _vm.mainClasses
  }, [_c('span', {
    class: _vm.dotClasses
  }), _vm._v(" "), _c('div', {
    class: _vm.textClasses
  }, [_vm._t("default")], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [(_vm.loadingFlag) ? _c('loading') : _vm._e(), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: _vm.classes,
    style: (_vm.styles)
  })
},staticRenderFns: []}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "home-head"
  }, [_vm._m(0), _vm._v(" "), _c('nav', {
    staticClass: "home-list"
  }, [_c('router-link', {
    staticClass: "home-movie",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" 电影")]), _vm._v(" "), _c('router-link', {
    staticClass: "home-books",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("图书")]), _vm._v(" "), _c('a', {
    staticClass: "home-broadcast",
    attrs: {
      "href": "javascript:void(0);"
    }
  }, [_vm._v("广播")]), _vm._v(" "), _c('a', {
    staticClass: "home-group",
    attrs: {
      "href": "javascript:void(0);"
    }
  }, [_vm._v("小组")]), _vm._v(" "), _vm._m(1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "home-title"
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0);"
    }
  }, [_vm._v("豆瓣")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "home-img",
    attrs: {
      "href": "javascript:void(0);"
    }
  }, [_c('img', {
    staticClass: "home-search",
    attrs: {
      "src": __webpack_require__(127)
    }
  })])
}]}

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "movie-grade-wrap"
  }, [(!_vm.grade) ? _c('div', {
    staticClass: "none-grade"
  }, [_vm._v("暂无评分")]) : _c('div', [_c('div', {
    staticClass: "movie-grade"
  }, _vm._l((5), function(n) {
    return _c('img', {
      staticClass: "movie-star",
      attrs: {
        "src": _vm.star(n)
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "movie-num"
  }, [_vm._v(" " + _vm._s(_vm.grade.toFixed(1)) + " ")])])])
},staticRenderFns: []}

/***/ })
],[61]);
//# sourceMappingURL=app.668fb7f775038150eb7a.js.map
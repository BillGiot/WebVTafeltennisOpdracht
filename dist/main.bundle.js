webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_data_service__ = __webpack_require__("../../../../../src/app/news/news-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_news_detail_news_detail_component__ = __webpack_require__("../../../../../src/app/news/news-detail/news-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__series_series_component__ = __webpack_require__("../../../../../src/app/series/series.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__series_matches_matches_component__ = __webpack_require__("../../../../../src/app/series/matches/matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_add_news_add_news_component__ = __webpack_require__("../../../../../src/app/news/add-news/add-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_register_register_component__ = __webpack_require__("../../../../../src/app/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blog_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/blog/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_logout_logout_component__ = __webpack_require__("../../../../../src/app/user/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__series_serie_service__ = __webpack_require__("../../../../../src/app/series/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__blog_blog_service__ = __webpack_require__("../../../../../src/app/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__news_add_news_news_resolver_service__ = __webpack_require__("../../../../../src/app/news/add-news/news.resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__series_matches_add_match_add_match_component__ = __webpack_require__("../../../../../src/app/series/matches/add-match/add-match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__series_add_serie_add_serie_component__ = __webpack_require__("../../../../../src/app/series/add-serie/add-serie.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_7__news_news_component__["a" /* NewsComponent */] },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_8__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */], resolve: { newsItem: __WEBPACK_IMPORTED_MODULE_22__news_add_news_news_resolver_service__["a" /* NewsResolver */] } },
    { path: 'series', component: __WEBPACK_IMPORTED_MODULE_9__series_series_component__["a" /* SeriesComponent */] },
    { path: 'series/:id', component: __WEBPACK_IMPORTED_MODULE_13__series_matches_matches_component__["a" /* MatchesComponent */] },
    { path: 'blog', canActivate: [__WEBPACK_IMPORTED_MODULE_15__user_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_10__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_19__user_logout_logout_component__["a" /* LogoutComponent */] },
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__series_series_component__["a" /* SeriesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__series_matches_matches_component__["a" /* MatchesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__news_add_news_add_news_component__["a" /* AddNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__blog_add_post_add_post_component__["a" /* AddPostComponent */],
            __WEBPACK_IMPORTED_MODULE_19__user_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_23__series_matches_add_match_add_match_component__["a" /* AddMatchComponent */],
            __WEBPACK_IMPORTED_MODULE_24__series_add_serie_add_serie_component__["a" /* AddSerieComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__news_news_data_service__["a" /* NewsDataService */],
            __WEBPACK_IMPORTED_MODULE_20__series_serie_service__["a" /* SerieService */],
            __WEBPACK_IMPORTED_MODULE_21__blog_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_17__user_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_15__user_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_22__news_add_news_news_resolver_service__["a" /* NewsResolver */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <base href=\"/\">\n</head>\n<app-menu> </app-menu>\n<router-outlet></router-outlet>\n  <app-footer></app-footer> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news_data_service__ = __webpack_require__("../../../../../src/app/news/news-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__series_serie_service__ = __webpack_require__("../../../../../src/app/series/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blog_blog_service__ = __webpack_require__("../../../../../src/app/blog/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__news_news_data_service__["a" /* NewsDataService */], __WEBPACK_IMPORTED_MODULE_10__series_serie_service__["a" /* SerieService */], __WEBPACK_IMPORTED_MODULE_11__blog_blog_service__["a" /* BlogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/add-post/add-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#inputForm {\n    border: solid 1px #e9e9e9;\n    padding: 3%;\n}\n\n#icontext {\n    float: right;\n    margin-left: 5px;\n}\n\n#error{\n    color: red !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form [formGroup]='post' (ngSubmit)='onSubmit()'>\n    <div class=\"row\" id=\"inputForm\">\n      <div class=\"chip\">\n        <i class=\"material-icons\">account_circle</i> <span id=\"icontext\">{{currentUser|async}}</span>\n      </div>\n      <div class=\"input-field\">\n        \n        <textarea id=\"text\" class=\"materialize-textarea\"  formControlName=\"text\" ></textarea>\n        <label for=\"text\">Post</label>\n        <div *ngIf='errorMsg' id=\"error\">{{errorMsg}}</div>\n        <div id=\"error\" *ngIf= 'post.get(\"text\").errors?.minlength && post.get(\"text\").touched'>Minimum length of your message is 20 characters</div>\n\n        <button [disabled]=\"!post.valid\" class=\"btn waves-effect waves-light right\" type=\"submit\">Submit\n          <i class=\"material-icons right\">send</i>\n        </button>\n\n      \n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_model__ = __webpack_require__("../../../../../src/app/blog/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_service__ = __webpack_require__("../../../../../src/app/blog/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPostComponent = (function () {
    function AddPostComponent(dataService, authService, fb) {
        this.dataService = dataService;
        this.authService = authService;
        this.fb = fb;
        this.errorMsg = '';
        this.postAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddPostComponent.prototype.ngOnInit = function () {
        this.post = this.fb.group({
            text: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(20)]]
        });
    };
    Object.defineProperty(AddPostComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.user$;
        },
        enumerable: true,
        configurable: true
    });
    AddPostComponent.prototype.onSubmit = function () {
        var _this = this;
        var currentDate = new Date();
        var currentUser = this.authService.user$.value;
        var text = this.post.value.text;
        var newPost = new __WEBPACK_IMPORTED_MODULE_3__post_model__["a" /* Post */](currentDate, currentUser, text);
        this.dataService.addPost(newPost).subscribe(function (item) {
            _this.postAdded.emit(item);
            _this.post.get('text').setValue('');
            _this.errorMsg = '';
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    return AddPostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddPostComponent.prototype, "postAdded", void 0);
AddPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-post',
        template: __webpack_require__("../../../../../src/app/blog/add-post/add-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/add-post/add-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], AddPostComponent);

var _a, _b, _c;
//# sourceMappingURL=add-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#postDate{\n    font-size: 8px; \n}\n\n#icontext {\n    float: right;\n    margin-left: 5px;\n}\n #sectionPost {\n     margin-top: 10px !important;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Blog feet</h2>\n  <h5>Post your comments below:</h5>\n  <app-add-post (postAdded)='addPost($event)'></app-add-post>\n\n  <div class=\"container\">\n    <h5 *ngIf=\"isEmpty() === true\">What others commented:</h5>\n    <div *ngFor=\"let post of posts\" class=\"row col s12\">\n      <div class=\" col s8\">\n        <div id=\"sectionPost\" class=\"chip\">\n          <i class=\"material-icons\">account_circle</i>\n          <span id=\"icontext\">{{post.user}}</span>\n        </div>\n        <p>{{post.text}}</p>\n        <p>\n          <span id=\"postDate\"> Posted on {{post.date | date}} </span>\n        </p>\n      </div>\n\n      <div class=\"col s4 right\">\n        <button *ngIf = \"isCurrentUser(post.user) === true\" (click)=\"removePost(post)\">\n          <i class=\"material-icons\">delete</i>\n        </button>\n      </div>\n\n      <div class=\"divider\"></div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = (function () {
    function BlogComponent(autservice, dataService) {
        this.autservice = autservice;
        this.dataService = dataService;
        this._posts = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.posts().subscribe(function (items) {
            _this._posts = items;
        });
    };
    Object.defineProperty(BlogComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        enumerable: true,
        configurable: true
    });
    BlogComponent.prototype.isEmpty = function () {
        return this._posts.length === 0;
    };
    BlogComponent.prototype.addPost = function (post) {
        this._posts.push(post);
    };
    BlogComponent.prototype.isCurrentUser = function (username) {
        console.log(username);
        // return JSON.parse(localStorage.getItem('currentUser')).username === this.autservice.user$.getValue();
        return username === this.autservice.user$.getValue();
    };
    BlogComponent.prototype.removePost = function (post) {
        var _this = this;
        this.dataService.removePost(post).subscribe(function (item) {
            _this._posts = _this._posts.filter(function (val) { return val.id !== item.id; });
        });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */]) === "function" && _b || Object])
], BlogComponent);

var _a, _b;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_model__ = __webpack_require__("../../../../../src/app/blog/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogService = (function () {
    function BlogService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._appUrl = '/API/';
    }
    BlogService.prototype.posts = function () {
        return this.http.get(this._appUrl + "blog/", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json().map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_3__post_model__["a" /* Post */].fromJSON(item);
        }); });
    };
    BlogService.prototype.addPost = function (rec) {
        return this.http.post(this._appUrl + "blog", rec, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__post_model__["a" /* Post */].fromJSON(item); });
    };
    BlogService.prototype.removePost = function (rec) {
        return this.http.delete(this._appUrl + "blog/" + rec.id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__post_model__["a" /* Post */].fromJSON(item); });
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], BlogService);

var _a, _b;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/blog/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(date, user, text) {
        this._date = date;
        this._user = user;
        this._text = text;
    }
    Post.fromJSON = function (json) {
        var rec = new Post(json.date, json.user, json.text);
        rec._id = json._id;
        return rec;
    };
    Object.defineProperty(Post.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Post.prototype.toJSON = function () {
        return {
            id: this._id,
            date: this._date,
            user: this._user,
            text: this._text
        };
    };
    return Post;
}());

//# sourceMappingURL=post.model.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer light-blue darken-4\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">VTTL</h5>\n        <p class=\"grey-text text-lighten-4\">Your table tennis platform! </p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Links</h5>\n        <ul>\n          <li><a class=\"grey-text text-lighten-3\" href=\"https://www.vttl.be/\" target=\"_blank\">Visit the official website</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Contact us</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright blue-grey darken-4\" >\n    <div class=\"container\">\n    © 2017 Copyright Stijn De Brauwer\n    <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper light-blue darken-4\">\n      <a routerLink=\"/news\" class=\"brand-logo\"><img src=\"assets/img/customLogo.png\" width=\"100px\" height=\"65px\"></a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      \n      <ul class=\"right hide-on-med-and-down\">\n        <li><a routerLink=\"/news\">News</a></li>\n        <li><a routerLink=\"/series\">Series</a></li>\n        <li><a routerLink=\"/blog\">Blog</a></li>\n        <li> <a *ngIf='(currentUser | async) else routelogin' class=\"item\" routerLinkActive='active' routerLink=\"/logout\">Welcome, {{currentUser|async}}</a></li>\n        <ng-template #routelogin>\n          <li> <a class=\"item\" routerLinkActive='active' routerLink=\"/login\">Log in</a> </li>\n         </ng-template>\n       </ul>\n      \n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a routerLink=\"/news\"><i class=\"material-icons\">explore</i>News</a></li>\n        <li><a routerLink=\"/series\"><i class=\"material-icons\">show_chart</i>Series</a></li>\n        <li><a routerLink=\"/blog\"><i class=\"material-icons\">people</i>Blog</a></li>\n       <li> <a *ngIf='(currentUser | async) else routelogin' class=\"item\" routerLinkActive='active' routerLink=\"/logout\">Welcome {{currentUser|async}}</a></li>\n       <ng-template #routelogin>\n         <li> <a class=\"item\" routerLinkActive='active' routerLink=\"/login\">Log in</a> </li>\n        </ng-template>\n      </ul>\n    </div>\n  </nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(MenuComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.user$;
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/add-news/add-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#addNews{\n    border: solid 1px #e9e9e9;\n    padding: 3%;\n}\n\n.input-field{\n    margin-top: 5% !important;\n}\n\n#error{\n    color: red !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/add-news/add-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"container\">\n  <h4>Add your news:</h4>\n  <div id=\"addNews\" class=\"row\">\n    <form  [formGroup]='newsItem' (ngSubmit)='onSubmit()'>\n      <div class=\"row\">\n     <label  for=\"title\">Title:</label>\n      <input class=\"validate\"  placeholder= \"What's your title?\" id=\"title\" type=\"text\" formControlName=\"title\">\n      <div id=\"error\" *ngIf= 'newsItem.get(\"title\").errors?.required && newsItem.get(\"title\").touched'>\n        Please fill in a title...\n      </div>\n    </div>\n\n      <div class=\"row\">\n      <label for=\"description\">Description:</label>\n      <textarea  class=\"validate\" placeholder= \"Give your short description...\" id=\"description\" type=\"text\" formControlName=\"description\"></textarea>\n      <div id=\"error\" *ngIf=' newsItem.get(\"description\").errors?.required && newsItem.get(\"description\").touched'>\n        Please fill in the description...\n      </div>\n    </div>\n\n      <div class=\"row\">\n     <label for=\"text\">Text:</label>\n      <textarea   class=\"validate\" placeholder= \"Write your article...\" id=\"text\" type=\"text\" formControlName=\"text\"></textarea>\n      <div id=\"error\" *ngIf=' newsItem.get(\"text\").errors?.required && newsItem.get(\"text\").touched'>\n          Please fill in the text...\n        </div>\n      <div id=\"error\" *ngIf=' newsItem.get(\"text\").errors?.minlength && newsItem.get(\"text\").touched'>\n        The text must be at least 20 characters \n      </div>\n    </div>\n\n      <div class=\"row\">\n      <button [disabled]=\"!newsItem.valid\" class = \"btn waves-effect waves-light\" type =\"submit\">Submit</button>\n    </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/add-news/add-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsitem_model__ = __webpack_require__("../../../../../src/app/news/newsitem.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_data_service__ = __webpack_require__("../../../../../src/app/news/news-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewsComponent = (function () {
    function AddNewsComponent(dataService, fb) {
        this.dataService = dataService;
        this.fb = fb;
        this.newsAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddNewsComponent.prototype.ngOnInit = function () {
        this.newsItem = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            text: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(20)]]
        });
    };
    AddNewsComponent.prototype.onSubmit = function () {
        var _this = this;
        var title = this.newsItem.value.title;
        var description = this.newsItem.value.description;
        var text = this.newsItem.value.text;
        var newItem = new __WEBPACK_IMPORTED_MODULE_1__newsitem_model__["a" /* NewsItem */](title, description, text);
        this.dataService.addNewsItem(newItem).subscribe(function (item) {
            _this.newsAdded.emit(item);
            _this.clearFormText();
        });
    };
    AddNewsComponent.prototype.clearFormText = function () {
        this.newsItem.get('description').setValue('');
        this.newsItem.get('title').setValue('');
        this.newsItem.get('text').setValue('');
    };
    return AddNewsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddNewsComponent.prototype, "newsAdded", void 0);
AddNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-news',
        template: __webpack_require__("../../../../../src/app/news/add-news/add-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/add-news/add-news.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__news_data_service__["a" /* NewsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__news_data_service__["a" /* NewsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AddNewsComponent);

var _a, _b;
//# sourceMappingURL=add-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/add-news/news.resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_data_service__ = __webpack_require__("../../../../../src/app/news/news-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsResolver = (function () {
    function NewsResolver(dataService) {
        this.dataService = dataService;
    }
    NewsResolver.prototype.resolve = function (route, state) {
        return this.dataService.getNewsItemById(route.params['id']);
    };
    return NewsResolver;
}());
NewsResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__news_data_service__["a" /* NewsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__news_data_service__["a" /* NewsDataService */]) === "function" && _a || Object])
], NewsResolver);

var _a;
//# sourceMappingURL=news.resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/news/news-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsitem_model__ = __webpack_require__("../../../../../src/app/news/newsitem.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsDataService = (function () {
    function NewsDataService(auth, http) {
        this.auth = auth;
        this.http = http;
        this._appUrl = '/API/';
    }
    NewsDataService.prototype.newsItems = function () {
        return this.http.get(this._appUrl + 'news').map(function (response) {
            return response.json().map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_3__newsitem_model__["a" /* NewsItem */](item.title, item.description, item.text, item._id);
            });
        });
    };
    NewsDataService.prototype.getNewsItemById = function (id) {
        return this.http.get(this._appUrl + "news/" + id)
            .map(function (response) { return response.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_3__newsitem_model__["a" /* NewsItem */].fromJSON(item);
        });
    };
    NewsDataService.prototype.addNewsItem = function (news) {
        return this.http.post(this._appUrl + "news", news, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); })
            .map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__newsitem_model__["a" /* NewsItem */].fromJSON(item); });
    };
    NewsDataService.prototype.removeItem = function (news) {
        return this.http.delete(this._appUrl + "news/" + news.id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__newsitem_model__["a" /* NewsItem */].fromJSON(item); });
    };
    return NewsDataService;
}());
NewsDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], NewsDataService);

var _a, _b;
//# sourceMappingURL=news-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/news/news-detail/news-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news-detail/news-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2>{{newsItem?.title}}</h2>\n</div>\n\n<div class =\"row center\" >\n<img src=\"assets/img/img.jpg\" height=\"400px\">\n\n</div>\n\n<div class=\"row\">\n<p>{{newsItem?.text}}</p>\n<p></p>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/news-detail/news-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_data_service__ = __webpack_require__("../../../../../src/app/news/news-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsDetailComponent = (function () {
    function NewsDetailComponent(route, dataService, authService) {
        this.route = route;
        this.dataService = dataService;
        this.authService = authService;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (item) {
            return _this._newsItem = item['newsItem'];
        });
    };
    Object.defineProperty(NewsDetailComponent.prototype, "newsItem", {
        get: function () {
            return this._newsItem;
        },
        enumerable: true,
        configurable: true
    });
    NewsDetailComponent.prototype.editNewsItem = function (newsItem) {
    };
    return NewsDetailComponent;
}());
NewsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news-detail',
        template: __webpack_require__("../../../../../src/app/news/news-detail/news-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news-detail/news-detail.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__news_data_service__["a" /* NewsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__news_data_service__["a" /* NewsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], NewsDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=news-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    font-size: 22px;\n    margin-left: 2px;\n}\n\np{\n    margin-left:2px;\n}\n\n#item .row:nth-child(2n+1){\n    padding-top: 2%;\n    padding-bottom: 2%;\n    background-color: #ececec;\n}\n\n#index-banner{\n    background-image: url(\"/assets/img/img.jpg\");\n    background-size:  cover;\n    background-repeat: no-repeat;\n    height: 100%;\n}\n\n#index-banner h5{\n    color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index-banner\" class=\"parallax-container\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <h1 class=\"header center white-text text-darken-4\">EXPERIENCE TABLE TENNIS</h1>\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">Get the latest news, matches, live rankings and comments</h5>\n      </div>\n        <br/>\n        <div class=\"row center\">\n          <a (click)= \"scroll(target)\"class=\"btn btn-large\">GET THE LATEST NEWS</a>\n        <br/>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row center\" #target>\n<h2>LATEST UPDATES</h2>\n</div>\n<div class=\"row center\">\n    <div class=\"col s6\" *ngFor=\"let newsitem of newsItems\">\n      <div class=\"card card-panel hoverable\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/img.jpg\">\n          <span class=\"card-title\">{{newsitem.title}}</span>\n        </div>\n        <div class=\"card-content\">\n          <p>{{newsitem.description}}</p>\n        </div>\n        <div class=\"card-action\">\n          <div class = \"row\">\n          <a [routerLink]=\"['./', newsitem.id]\">Read more</a>\n        </div>\n\n        <div *ngIf = \"isRegistered()\" class= \"row\">\n          <div class = \"col s6 left\">\n              <button><i class=\"material-icons\">edit</i></button>\n          </div>\n\n          <div class = \"col s6 right\">\n              <button (click)=\"removeItem(newsitem)\" ><i class=\"material-icons\">delete</i></button>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf =\"isRegistered()\"class=\"row center\">\n\n   <app-add-news (newsAdded) = \"addNewsItem($event)\">\n   </app-add-news>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_data_service__ = __webpack_require__("../../../../../src/app/news/news-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.newsItems().subscribe(function (items) {
            console.log(items);
            _this._newsItems = items;
        });
    };
    Object.defineProperty(NewsComponent.prototype, "newsItems", {
        get: function () {
            return this._newsItems;
        },
        enumerable: true,
        configurable: true
    });
    NewsComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    NewsComponent.prototype.addNewsItem = function (news) {
        this._newsItems.push(news);
    };
    NewsComponent.prototype.removeItem = function (newsitem) {
        var _this = this;
        this.dataService.removeItem(newsitem).subscribe(function (item) {
            _this._newsItems = _this._newsItems.filter(function (val) { return val.id !== item.id; });
        });
    };
    NewsComponent.prototype.isRegistered = function () {
        if (this.authService.user$.getValue()) {
            return true;
        }
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__news_data_service__["a" /* NewsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__news_data_service__["a" /* NewsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], NewsComponent);

var _a, _b;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/newsitem.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItem; });
var NewsItem = (function () {
    function NewsItem(title, description, text, id) {
        this._title = title;
        this._text = text;
        this._description = description;
        this._id = id;
    }
    NewsItem.fromJSON = function (json) {
        var rec = new NewsItem(json.title, json.description, json.text, json._id);
        return rec;
    };
    Object.defineProperty(NewsItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsItem.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsItem.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsItem.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    NewsItem.prototype.toJSON = function () {
        return {
            _id: this._id,
            title: this._title,
            description: this._description,
            text: this._text
        };
    };
    return NewsItem;
}());

//# sourceMappingURL=newsitem.model.js.map

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>404: Page not found</h1>\n  <p>Please select a valid url...</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/series/add-serie/add-serie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/series/add-serie/add-serie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h6>Add Serie</h6>\n  <form [formGroup]='serie' (ngSubmit)='onSubmit()'>\n      <label for=\"name\">Serie name:</label>\n      <input id=\"name\" type=\"text\" formControlName=\"name\">\n      <div id=\"error\" *ngIf= 'serie.get(\"name\").errors?.required && serie.get(\"name\").touched'>Please choose a name</div>\n      <button [disabled]=\"!serie.valid\" type=\"submit\" class=\"btn waves-effect waves-light\"><i class=\"material-icons\">add</i></button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/series/add-serie/add-serie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSerieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serie_model__ = __webpack_require__("../../../../../src/app/series/serie.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serie_service__ = __webpack_require__("../../../../../src/app/series/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSerieComponent = (function () {
    function AddSerieComponent(dataService, authService, fb) {
        this.dataService = dataService;
        this.authService = authService;
        this.fb = fb;
        this.serieAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddSerieComponent.prototype.ngOnInit = function () {
        this.serie = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5)]]
        });
    };
    AddSerieComponent.prototype.onSubmit = function () {
        var _this = this;
        var name = this.serie.value.name;
        var newSerie = new __WEBPACK_IMPORTED_MODULE_2__serie_model__["a" /* Serie */](name);
        this.dataService.addSerie(newSerie).subscribe(function (item) {
            _this.serieAdded.emit(item);
            _this.serie.get('name').setValue('');
        });
    };
    return AddSerieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddSerieComponent.prototype, "serieAdded", void 0);
AddSerieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-serie',
        template: __webpack_require__("../../../../../src/app/series/add-serie/add-serie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/series/add-serie/add-serie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__serie_service__["a" /* SerieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], AddSerieComponent);

var _a, _b, _c;
//# sourceMappingURL=add-serie.component.js.map

/***/ }),

/***/ "../../../../../src/app/series/matches/add-match/add-match.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#addmatch{\n    margin-top: 5%;\n    border: solid 1px #e9e9e9;\n}\n\n#error{\n    color: red !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/series/matches/add-match/add-match.component.html":
/***/ (function(module, exports) {

module.exports = "<div id= \"addmatch\" class=\"row\" >\n <h5>Add a new match to {{serie?.name}}</h5>\n<form [formGroup]='match' (ngSubmit)='onSubmit()'>\n    <div class=\"date\">\n        <h6 >Choose your date:</h6>\n        <input id=\"datepicker\" class= \"center-align\" type=\"date\" placeholder=\"Choose a date\" formControlName=\"date\">\n        <div id=\"error\" *ngIf= 'match.get(\"date\").errors?.required && match.get(\"date\").touched'>Please choose a date</div>\n    </div>\n\n    <div class=\"row\">\n        <label>Player A: </label>\n        <input class= \" center-align\" type=\"text\" formControlName=\"playerA\">\n        <div id=\"error\" *ngIf= 'match.get(\"playerA\").errors?.required && match.get(\"playerA\").touched'>Please fill in a name</div>\n    </div>\n\n    <div class=\"row\">\n        <label>Player B:</label>\n        <input class=\" center-align\" type=\"text\" formControlName=\"playerB\">\n        <div id=\"error\" *ngIf= 'match.get(\"playerB\").errors?.required && match.get(\"playerB\").touched'>Please fill in a name</div>\n    </div>\n\n    <div class=\"row\">\n         <label>Sets player A:</label>\n         <input class= \" center-align\"  type=\"number\"  min=\"0\" max=\"4\" formControlName=\"setsPlayerA\">\n         <div id=\"error\" *ngIf= 'match.get(\"setsPlayerA\").errors?.required && match.get(\"setsPlayerA\").touched'>Please fill in a score</div>\n    </div>\n\n    <div class=\"row\">\n        <label>Sets Player B:</label>\n        <input class=\"center-align\" type=\"number\" min=\"0\" max=\"4\" formControlName=\"setsPlayerB\">\n        <div id=\"error\" *ngIf= 'match.get(\"setsPlayerB\").errors?.required && match.get(\"setsPlayerB\").touched'>Please fill in a score</div>\n    </div>\n\n    <div class=\"row\" *ngIf='errorMsg' id= \"error\" >{{errorMsg}}</div>\n\n<button  [disabled]=\"!match.valid\" class=\"waves-effect waves-light btn\" type= \"submit\">Add your match</button>\n</form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/series/matches/add-match/add-match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serie_service__ = __webpack_require__("../../../../../src/app/series/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_model__ = __webpack_require__("../../../../../src/app/series/matches/match.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serie_model__ = __webpack_require__("../../../../../src/app/series/serie.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddMatchComponent = (function () {
    function AddMatchComponent(route, dataService, authService, fb) {
        this.route = route;
        this.dataService = dataService;
        this.fb = fb;
        this.matchAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errorMsg = '';
    }
    AddMatchComponent.prototype.ngOnInit = function () {
        this.match = this.fb.group({
            date: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            playerA: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            playerB: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            setsPlayerA: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
            setsPlayerB: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]],
        });
    };
    AddMatchComponent.prototype.onSubmit = function () {
        var _this = this;
        var newMatch = new __WEBPACK_IMPORTED_MODULE_2__match_model__["a" /* Match */](this.match.value.date, this.match.value.playerA, this.match.value.playerB, this.match.value.setsPlayerA, this.match.value.setsPlayerB);
        console.log(this.match.value.date, this.match.value.playerA, this.match.value.playerB, this.match.value.setsPlayerA, this.match.value.setsPlayerB);
        console.log(this.serie);
        this.dataService.addMatch(newMatch, this.serie).subscribe(function (item) {
            _this.matchAdded.emit(newMatch);
            _this.match.get('playerA').setValue('');
            _this.match.get('playerB').setValue('');
            _this.match.get('setsPlayerA').setValue('');
            _this.match.get('setsPlayerB').setValue('');
            _this.errorMsg = '';
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    return AddMatchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__serie_model__["a" /* Serie */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__serie_model__["a" /* Serie */]) === "function" && _a || Object)
], AddMatchComponent.prototype, "serie", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddMatchComponent.prototype, "matchAdded", void 0);
AddMatchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-match',
        template: __webpack_require__("../../../../../src/app/series/matches/add-match/add-match.component.html"),
        styles: [__webpack_require__("../../../../../src/app/series/matches/add-match/add-match.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__serie_service__["a" /* SerieService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], AddMatchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-match.component.js.map

/***/ }),

/***/ "../../../../../src/app/series/matches/match.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
var Match = (function () {
    function Match(date, playerA, playerB, setsPlayerA, setsPlayerB, id) {
        this._id = id;
        this._date = date;
        this._playerA = playerA;
        this._playerB = playerB;
        this._setsPlayerA = setsPlayerA;
        this._setsPlayerB = setsPlayerB;
    }
    Object.defineProperty(Match.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "playerA", {
        get: function () {
            return this._playerA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "playerB", {
        get: function () {
            return this._playerB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "setsPlayerA", {
        get: function () {
            return this._setsPlayerA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "setsPlayerB", {
        get: function () {
            return this._setsPlayerB;
        },
        enumerable: true,
        configurable: true
    });
    Match.fromJSON = function (json) {
        var rec = new Match(json.date, json.playerA, json.playerB, json.setsPlayerA, json.setsPlayerB, json._id);
        return rec;
    };
    Match.prototype.toJSON = function () {
        return {
            id: this._id,
            date: this._date,
            playerA: this._playerA,
            playerB: this._playerB,
            setsPlayerA: this._setsPlayerA,
            setsPlayerB: this._setsPlayerB
        };
    };
    return Match;
}());

//# sourceMappingURL=match.model.js.map

/***/ }),

/***/ "../../../../../src/app/series/matches/matches.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#weeks select {\n    opacity: 1;\n    display:  block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/series/matches/matches.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row center col s9\">\n  <h4>{{serie?.title}}</h4>\n  <table class=\"centered highlight bordered responsive-table\">\n    <thead>\n      <tr>\n          <th>Date</th>\n          <th>Player</th>\n          <th>Player</th>\n          <th>Score</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr  *ngFor=\"let match of serie?.matches\">\n        <td>{{match?.date | date}}</td>\n        <td>{{match?.playerA}}</td>\n        <td>{{match?.playerB}}</td>\n        <td>{{match?.setsPlayerA}} - {{match?.setsPlayerB}} </td>\n      </tr>\n    </tbody>\n  </table>\n\n<app-add-match [serie]=\"serie\"  (matchAdded)='addMatch($event)'></app-add-match>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/series/matches/matches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__series_serie_service__ = __webpack_require__("../../../../../src/app/series/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serie_model__ = __webpack_require__("../../../../../src/app/series/serie.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchesComponent = (function () {
    function MatchesComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this._matches = [];
    }
    MatchesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MatchesComponent.prototype, "matches", {
        get: function () {
            return this.serie.matches;
        },
        enumerable: true,
        configurable: true
    });
    MatchesComponent.prototype.addMatch = function (match) {
        this.serie.matches.push(match);
    };
    return MatchesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__serie_model__["a" /* Serie */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__serie_model__["a" /* Serie */]) === "function" && _a || Object)
], MatchesComponent.prototype, "serie", void 0);
MatchesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matches',
        template: __webpack_require__("../../../../../src/app/series/matches/matches.component.html"),
        styles: [__webpack_require__("../../../../../src/app/series/matches/matches.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__series_serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__series_serie_service__["a" /* SerieService */]) === "function" && _c || Object])
], MatchesComponent);

var _a, _b, _c;
//# sourceMappingURL=matches.component.js.map

/***/ }),

/***/ "../../../../../src/app/series/serie.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Serie; });
var Serie = (function () {
    function Serie(name, matches) {
        this._name = name;
        this._matches = matches;
    }
    Serie.fromJSON = function (json) {
        var rec = new Serie(json.name, json.matches);
        rec._id = json._id;
        return rec;
    };
    Object.defineProperty(Serie.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Serie.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    Serie.prototype.toJSON = function () {
        return {
            _id: this._id,
            name: this._name,
            matches: this._matches,
        };
    };
    return Serie;
}());

//# sourceMappingURL=serie.model.js.map

/***/ }),

/***/ "../../../../../src/app/series/serie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serie_model__ = __webpack_require__("../../../../../src/app/series/serie.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matches_match_model__ = __webpack_require__("../../../../../src/app/series/matches/match.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerieService = (function () {
    function SerieService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._appUrl = '/API/';
    }
    SerieService.prototype.series = function () {
        return this.http.get(this._appUrl + "series/").map(function (response) { return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_2__serie_model__["a" /* Serie */].fromJSON(item); }); });
    };
    SerieService.prototype.serie = function (id) {
        return this.http.get(this._appUrl + "series/" + id)
            .map(function (response) { return response.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_2__serie_model__["a" /* Serie */].fromJSON(item);
        });
    };
    SerieService.prototype.addSerie = function (rec) {
        return this.http.post(this._appUrl + "series", rec, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_2__serie_model__["a" /* Serie */].fromJSON(item); });
    };
    SerieService.prototype.addMatch = function (match, serie) {
        return this.http.post(this._appUrl + "series/" + serie.id + "/matches", match)
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_4__matches_match_model__["a" /* Match */].fromJSON(item); });
    };
    return SerieService;
}());
SerieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], SerieService);

var _a, _b;
//# sourceMappingURL=serie.service.js.map

/***/ }),

/***/ "../../../../../src/app/series/series.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seriesRow{\n    margin-bottom: 0;\n}\n\n\n#sidenav{\nmin-height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/series/series.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"seriesRow\" class=\"row\">\n    <div id=\"sidenav\" class=\"col s3 z-depth-2 center-align\">\n        <div id = \"sidebaritem\" class= \"row\">\n            <ul class= \"collection with-header\">\n              <li class=\"collection-header\"  > <h5>Series</h5></li>\n              <a (click)=\"changeSerie(serie)\" *ngFor=\"let serie of series\" class=\"collection-item \" id= \"current\" ><li>{{serie.name}}</li></a>\n            </ul>\n          </div>\n          <div class=\"divider\"></div>\n        <div id=\"sidebaritem\" class = \"row\">\n            <app-add-serie (serieAdded) = \"addSerie($event)\"> </app-add-serie>\n        </div>\n    </div>\n <app-matches [serie]='serie' > </app-matches>\n  \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/series/series.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__series_serie_service__ = __webpack_require__("../../../../../src/app/series/serie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeriesComponent = (function () {
    function SeriesComponent(dataService) {
        this.dataService = dataService;
    }
    SeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.series().subscribe(function (items) {
            _this._series = items;
            _this.serie = items[0];
        });
    };
    SeriesComponent.prototype.changeSerie = function (serie) {
        this.serie = serie;
    };
    Object.defineProperty(SeriesComponent.prototype, "series", {
        get: function () {
            return this._series;
        },
        enumerable: true,
        configurable: true
    });
    SeriesComponent.prototype.addSerie = function (serie) {
        this._series.push(serie);
    };
    return SeriesComponent;
}());
SeriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-series',
        template: __webpack_require__("../../../../../src/app/series/series.component.html"),
        styles: [__webpack_require__("../../../../../src/app/series/series.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__series_serie_service__["a" /* SerieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__series_serie_service__["a" /* SerieService */]) === "function" && _a || Object])
], SeriesComponent);

var _a;
//# sourceMappingURL=series.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.user$.getValue()) {
            return true;
        }
        // Retain the attempted URL for redirection
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._url = '/API/users';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._user$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](currentUser && currentUser.username);
    }
    Object.defineProperty(AuthenticationService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser')).token;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/register", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: res.token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            localStorage.removeItem('currentUser');
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthenticationService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this._url + "/checkusername", { username: username }).map(function (res) { return res.json(); })
            .map(function (item) {
            if (item.username === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#error{\n    color: red !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <form class=\"card-content col s12\" [formGroup]='user' (ngSubmit)='onSubmit()'>\n\n    <div class=\"row\">\n      <h4>Log in</h4>\n    </div>\n\n <div class=\"row\">\n <input class=\"input col s2\" type=\"text\" class=\"validate\" formControlName=\"username\">\n    <label>Username</label>\n </div>     \n\n <div class=\"row\">\n    <input class=\"input col s2\"  type=\"password\" class=\"validate\" formControlName=\"password\">\n    <label>Password</label>\n  </div>\n\n\n    <div class=\"row\">\n      <button  type='submit' class=\"waves-effect waves-light btn\" >Login</button> \n    </div>\n    \n    <div *ngIf='errorMsg' id=\"error\">{{errorMsg}}</div>\n    </form>\n\n\n    <div class=\"row\">\n      <a class='item' routerLink=\"/register\" >Or register</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator() {
    return function (control) {
        console.log(control.value);
        return control.value.length < 12 ? { 'passwordTooShort': { value: control.value.length } } : null;
    };
}
var LoginComponent = (function () {
    // inlog admin ww =  Ditiseentestpassword12
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.user.value.username, this.user.value.password).subscribe(function (val) {
            if (val) {
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                    _this.authService.redirectUrl = undefined;
                }
                else {
                    _this.router.navigate(['/news/']);
                }
            }
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigate(['/news']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/user/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/logout/logout.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#error{\n    color: red;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"card-content\">\n    <div class=\"row\">\n      <h3>Register</h3>\n    </div>\n\n    <div class=\"row\">\n      <label>Username</label>\n      <input id=\"username\" class=\"input col s2\" type=\"text\" class=\"validate\" formControlName='username'>\n      <div class='error' *ngIf='user.get(\"username\").errors?.userAlreadyExists && user.get(\"username\").touched'>\n        This username already exists!\n      </div>\n    </div>\n\n    <div formGroupName='passwordGroup'>\n      <div class=\"row\">\n        <label>Password</label>\n        <input id=\"password\" class=\"input col s2\" type=\"password\" class=\"validate\" formControlName='password'>\n        <div class='error' *ngIf=' passwordControl.errors?.passwordTooShort && passwordControl.touched'>\n          Wachtwoord is te kort, minstens {{passwordControl.errors?.passwordTooShort.requiredLength}} letters\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <label>Confirm password</label>\n        <input id=\"confirmPassword\" class=\"input col s2\" type=\"password\" class=\"validate\" formControlName='confirmPassword'>\n        <div class='error' *ngIf=' user.get(\"passwordGroup\").errors?.passwordsDiffer && user.get(\"passwordGroup\").get(\"confirmPassword\").touched  && user.get(\"passwordGroup\").get(\"password\").touched'>\n          Wachtwoorden moeten hetzelfde zijn\n        </div>\n      </div>\n\n        <div class=\"row\">\n          <button type='submit' class=\"waves-effect waves-light btn\">Register</button>\n        </div>\n    </div>\n\n  </form>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator(length) {
    return function (control) {
        return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
    };
}
function comparePasswords(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
var RegisterComponent = (function () {
    function RegisterComponent(authenticationService, router, fb) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fb = fb;
    }
    Object.defineProperty(RegisterComponent.prototype, "passwordControl", {
        get: function () {
            return this.user.get('passwordGroup').get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5)],
                this.serverSideValidateUsername()],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, passwordValidator(12)]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
            }, { validator: comparePasswords })
        });
    };
    RegisterComponent.prototype.serverSideValidateUsername = function () {
        var _this = this;
        return function (control) {
            return _this.authenticationService.checkUserNameAvailability(control.value).map(function (available) {
                if (available) {
                    return null;
                }
                return { userAlreadyExists: true };
            });
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.register(this.user.value.username, this.passwordControl.value).subscribe(function (val) {
            if (val) {
                _this.router.navigate(['/blog/']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/register/register.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
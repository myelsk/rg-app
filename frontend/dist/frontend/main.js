(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








var routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    {
        path: 'project',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app {\n    margin: 30px auto;\n    width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcCB7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgd2lkdGg6IDcwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['signin']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.signup = function (username, email, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_server + '/api/user', {
            name: username,
            email: email,
            password: password
        }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-Requested-With': 'XMLHttpRequest' }) });
    };
    AuthService.prototype.signin = function (email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_server + '/api/user/signin', {
            email: email,
            password: password
        }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-Requested-With': 'XMLHttpRequest' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return localStorage.setItem('token', res.token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return localStorage.setItem('user_id', res.user_id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.router.navigate(['project']);
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getId = function () {
        return localStorage.getItem('user_id');
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') != null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout-wrap {\n    text-align: center;\n}\n\nbutton {\n    background: #3f65ae;\n    display: inline-block;\n    color: #fff;\n    position: relative;\n    margin-top: 20px;\n    padding: 14px 77px;\n    font-weight: bold;\n    border-radius: 2px;\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXQtd3JhcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMzZjY1YWU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDE0cHggNzdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logout-wrap\">\n    <button (click)=\"onLogout()\">LOGOUT</button>\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LogoutComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['signin']);
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient) {
        this.httpClient = httpClient;
    }
    ProjectService.prototype.get = function (url) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url);
    };
    ProjectService.prototype.post = function (url, project) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url, project);
    };
    ProjectService.prototype.put = function (url, project) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url, project);
    };
    ProjectService.prototype.destroy = function (url) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url);
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    margin: 0;\n}\n\n.project-wrap {\n    height: 50px;\n    background: #3f65ae;\n}\n\n.project-title {\n    line-height: 50px;\n    position: relative;\n    padding-left: 53px;\n    float: left;\n}\n\n.project-actions {\n    float: right;\n    padding: 16px 18px 0 0;\n    color: #98b0d2;\n    display: none;\n}\n\n.project-title p {\n    color: #fff;\n    font-size: 17px;\n}\n\n.fa-calendar-alt {\n    position: absolute;\n    top: 11px;\n    left: 19px;\n    font-size: 24px;\n    color: #1f2b3d;\n}\n\n.project-actions .fa-pencil-alt {\n    cursor: pointer;\n    padding-right: 9px;\n    border-right: 1px solid #98b0d2;\n}\n\n.project-actions .fa-trash-alt {\n    cursor: pointer;\n    padding-left: 7px;\n}\n\n.create-project-wrap {\n    text-align: center;\n}\n\n.create-project-wrap a {\n    text-decoration: none;\n    background: #3f65ae;\n    display: inline-block;\n    color: #fff;\n    position: relative;\n    margin-top: 19px;\n    padding: 14px 53px;\n    font-weight: bold;\n    border-radius: 2px;\n}\n\n.create-project-icon {\n    font-size: 25px;\n    color: #32496f;\n    position: absolute;\n    top: 9px;\n    left: 12px;\n}\n\n.project-title input {\n    width: 527px;\n    color: #fff;\n    border: 0;\n    background: #3f65ae;\n    outline: 0;\n    height: 24px;\n}\n\n.project-title input::-webkit-input-placeholder {\n    color: #fff;\n}\n\n.project-title input::-ms-input-placeholder {\n    color: #fff;\n}\n\n.project-title input::placeholder {\n    color: #fff;\n}\n\n.project-item {\n    margin-bottom: 30px;\n}\n\n.project-item-wrap .project-item:last-child {\n    margin-bottom: 0;\n}\n\n.edit-mode input {\n    border: 1px solid #fff;\n}\n\n.edit-mode button {\n    background: linear-gradient(#94cbae, #508767);\n    border: 1px solid #447557;\n    padding: 4px;\n    margin-left: 2px;\n    color: #fff;\n    border-radius: 4px;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);\n    outline: 0;\n    cursor: pointer;\n}\n\n.create-project-wrap a {\n    cursor: pointer;\n}\n\n.edit-mode button:hover {\n    background: linear-gradient(#508767, #94cbae);\n}\n\n.project-wrap:hover .project-actions {\n    display: block;\n}\n\n.no-projects {\n    text-align: center;\n    padding: 15px 0;\n    background: #ddd;\n    color: #999;\n    border-radius: 5px;\n}\n\n.create-project-form button {\n    background: #3f65ae;\n    color: #fff;\n    border: 0;\n    margin-left: 1px;\n    cursor: pointer;\n    padding: 3px 10px;\n}\n\n.create-project-form input {\n    color: #8e8e8e;\n}\n\n.create-project-form {\n    text-align: center;\n}\n\n.create-project-form {\n    margin-top: 15px;\n}\n\nbutton[disabled] {\n    opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFGRDtJQUNJLFlBQVk7Q0FDZjs7QUFGRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLDhDQUE4QztJQUM5QywwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksOENBQThDO0NBQ2pEOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0LXdyYXAge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y2NWFlO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogNTNweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnByb2plY3QtYWN0aW9ucyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDE2cHggMThweCAwIDA7XG4gICAgY29sb3I6ICM5OGIwZDI7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtdGl0bGUgcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uZmEtY2FsZW5kYXItYWx0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMXB4O1xuICAgIGxlZnQ6IDE5cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMWYyYjNkO1xufVxuXG4ucHJvamVjdC1hY3Rpb25zIC5mYS1wZW5jaWwtYWx0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogOXB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OGIwZDI7XG59XG5cbi5wcm9qZWN0LWFjdGlvbnMgLmZhLXRyYXNoLWFsdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4uY3JlYXRlLXByb2plY3Qtd3JhcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JlYXRlLXByb2plY3Qtd3JhcCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzNmNjVhZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDE5cHg7XG4gICAgcGFkZGluZzogMTRweCA1M3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzMyNDk2ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5cHg7XG4gICAgbGVmdDogMTJweDtcbn1cblxuLnByb2plY3QtdGl0bGUgaW5wdXQge1xuICAgIHdpZHRoOiA1MjdweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogIzNmNjVhZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLnByb2plY3QtdGl0bGUgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnByb2plY3QtaXRlbS13cmFwIC5wcm9qZWN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmVkaXQtbW9kZSBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmVkaXQtbW9kZSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOTRjYmFlLCAjNTA4NzY3KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ3NTU3O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LXdyYXAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWRpdC1tb2RlIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MDg3NjcsICM5NGNiYWUpO1xufVxuXG4ucHJvamVjdC13cmFwOmhvdmVyIC5wcm9qZWN0LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm8tcHJvamVjdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jcmVhdGUtcHJvamVjdC1mb3JtIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzNmNjVhZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG5cbi5jcmVhdGUtcHJvamVjdC1mb3JtIGlucHV0IHtcbiAgICBjb2xvcjogIzhlOGU4ZTtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"projects && projects.length > 0; else noProjects\">\n    <ng-container *ngFor=\"let project of projects\">\n        <div class=\"project-item\" *ngIf=\"project\">\n            <div class=\"project-wrap clearfix\">\n                <div class=\"project-title\">\n                    <i class=\"fas fa-calendar-alt\"></i>\n                    <div *ngIf=\"editing && editId === projects.indexOf(project); else notEditing\" class=\"edit-mode\">\n                        <form #f=\"ngForm\" (ngSubmit)=\"putProject(project)\">\n                            <input type=\"text\" name=\"projectName\" value=\"{{ project.name }}\" [(ngModel)]=\"editValue\"\n                                   class=\"project-text-edit\" required>\n                            <button type=\"submit\" [disabled]=\"!f.valid\">Save</button>\n                            <button (click)=\"onCancelEditing()\">Cancel</button>\n                        </form>\n                    </div>\n                    <ng-template #notEditing>\n                        <input type=\"text\" value=\"{{ project.name }}\" class=\"project-text\" disabled>\n                    </ng-template>\n                </div>\n                <div class=\"project-actions\">\n                    <i class=\"fas fa-pencil-alt\" (click)=\"onEdit(project)\"></i>\n                    <i class=\"far fa-trash-alt\" (click)=\"deleteProject(project)\"></i>\n                </div>\n            </div>\n            <app-task [project_id]=\"project.id\"></app-task>\n        </div>\n    </ng-container>\n</ng-container>\n<ng-template #noProjects>\n    <div class=\"no-projects\">\n        There is no projects yet. Create your first now!\n    </div>\n</ng-template>\n<div *ngIf=\"createMode\" class=\"create-project-form\">\n    <form class=\"add-project-form\" #f=\"ngForm\" (ngSubmit)=\"postProject(projectName)\">\n        <input type=\"text\" name=\"projectName\" [(ngModel)]=\"projectName\" required>\n        <button type=\"submit\" [disabled]=\"!f.valid\">SAVE</button>\n        <button (click)=\"onCancelCreateMode()\">CANCEL</button>\n    </form>\n</div>\n<div class=\"create-project-wrap\">\n    <a (click)=\"onCreateMode()\">\n        <i class=\"fas fa-plus create-project-icon\"></i>\n        Add TODO List\n    </a>\n</div>\n<app-logout></app-logout>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, authService, router) {
        this.projectService = projectService;
        this.authService = authService;
        this.router = router;
        this.editing = false;
        this.createMode = false;
    }
    ProjectComponent.prototype.getProjects = function () {
        return this.projectService.get('/api/projects/' + this.authService.getId() + '?token=' + this.authService.getToken());
    };
    ProjectComponent.prototype.onCreateMode = function () {
        this.createMode = true;
    };
    ProjectComponent.prototype.onCancelCreateMode = function () {
        this.createMode = false;
    };
    ProjectComponent.prototype.postProject = function () {
        var _this = this;
        this.projectService.post('/api/project?token=' + this.authService.getToken(), {
            name: this.projectName,
            user_id: this.authService.getId()
        }).subscribe(function (res) {
            _this.projects.push(res[0]);
            _this.createMode = false;
            _this.projectName = '';
        });
    };
    ProjectComponent.prototype.putProject = function (project) {
        var _this = this;
        this.projectService.put('/api/project/' + project.id + '?token=' + this.authService.getToken(), { name: this.editValue }).subscribe(function (project) {
            var index = _this.projects.map(function (project) { return project.id; }).indexOf(project.id);
            _this.projects[index].name = _this.editValue;
        });
        this.editing = false;
    };
    ProjectComponent.prototype.deleteProject = function (project) {
        var _this = this;
        this.projectService.destroy('/api/project/' + project.id + '?token=' + this.authService.getToken()).subscribe(function (res) {
            var index = _this.projects.indexOf(project);
            if (index > -1) {
                _this.projects.splice(index, 1);
            }
        });
    };
    ProjectComponent.prototype.onCancelEditing = function () {
        this.editValue = '';
        this.editing = false;
    };
    ProjectComponent.prototype.onEdit = function (project) {
        this.editing = true;
        this.editValue = project.name;
        this.editId = this.projects.map(function (project) { return project.id; }).indexOf(project.id);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProjects().subscribe(function (data) {
            _this.projects = data.projects;
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigate(['signin']);
            }
        });
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n    width: 360px;\n    padding: 8% 0 0;\n    margin: auto;\n}\n\n.form {\n    position: relative;\n    z-index: 1;\n    background: #FFFFFF;\n    max-width: 360px;\n    margin: 0 auto 40px;\n    padding: 45px;\n    text-align: center;\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form input {\n    outline: 0;\n    background: #f2f2f2;\n    width: 100%;\n    border: 0;\n    margin: 0 0 15px;\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n}\n\n.form button {\n    text-transform: uppercase;\n    outline: 0;\n    background: #3f65ae;\n    width: 100%;\n    border: 0;\n    padding: 15px;\n    color: #FFFFFF;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.form button:hover, .form button:active, .form button:focus {\n    background: #3f65ae;\n}\n\n.form .message {\n    margin: 15px 0 0;\n    color: #b3b3b3;\n    font-size: 12px;\n}\n\n.form .message a {\n    color: #3f65ae;\n    text-decoration: none;\n}\n\n.form .register-form {\n    display: none;\n}\n\n.container {\n    position: relative;\n    z-index: 1;\n    max-width: 300px;\n    margin: 0 auto;\n}\n\n.container:before, .container:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\n.container .info {\n    margin: 50px auto;\n    text-align: center;\n}\n\n.container .info h1 {\n    margin: 0 0 15px;\n    padding: 0;\n    font-size: 36px;\n    font-weight: 300;\n    color: #1a1a1a;\n}\n\n.container .info span {\n    color: #4d4d4d;\n    font-size: 12px;\n}\n\n.container .info span a {\n    color: #000000;\n    text-decoration: none;\n}\n\n.container .info span .fa {\n    color: #EF3B3A;\n}\n\n[disabled] {\n    opacity: 0.1;\n}\n\n.is-invalid {\n    border: 1px solid red !important;\n}\n\n.validation-message {\n    margin-top: -10px;\n    font-size: 12px;\n    text-align: left;\n    margin-bottom: 7px;\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDJFQUEyRTtDQUM5RTs7QUFFRDtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYWdlIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgcGFkZGluZzogOCUgMCAwO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICMzZjY1YWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0gYnV0dG9uOmhvdmVyLCAuZm9ybSBidXR0b246YWN0aXZlLCAuZm9ybSBidXR0b246Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICMzZjY1YWU7XG59XG5cbi5mb3JtIC5tZXNzYWdlIHtcbiAgICBtYXJnaW46IDE1cHggMCAwO1xuICAgIGNvbG9yOiAjYjNiM2IzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvcm0gLm1lc3NhZ2UgYSB7XG4gICAgY29sb3I6ICMzZjY1YWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9ybSAucmVnaXN0ZXItZm9ybSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb250YWluZXIgLmluZm8ge1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMWExYTFhO1xufVxuXG4uY29udGFpbmVyIC5pbmZvIHNwYW4ge1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gICAgY29sb3I6ICNFRjNCM0E7XG59XG5cbltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuMTtcbn1cblxuLmlzLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4udmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n    <div class=\"form\">\n        <form class=\"login-form\" (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n            <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" email required placeholder=\"Email\"\n                   (keyup)=\"onKeyUpMail()\" #email=\"ngModel\"\n                   [ngClass]=\"{'is-invalid':email.invalid && onKeyUpMailInput}\">\n            <div *ngIf=\"onKeyUpMailInput && email.invalid\">\n                <div *ngIf=\"email.errors.required\" class=\"validation-message\">\n                    Email field is required\n                </div>\n                <div *ngIf=\"email.errors.email\" class=\"validation-message\">\n                    Email should be a valid email address\n                </div>\n            </div>\n            <input type=\"password\" id=\"password\" name=\"password\" ngModel required placeholder=\"Password\">\n            <button type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n            <p class=\"message\">Not registered? <a routerLink=\"/signup\">Create an account</a></p>\n        </form>\n    </div>\n    <div *ngIf=\"error\" class=\"alert\">\n        {{ error }}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
        this.model = {};
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onKeyUpMail = function () {
        this.onKeyUpMailInput = true;
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        this.authService.signin(form.value.email, form.value.password).subscribe(function (res) { }, function (error) {
            _this.error = error.error.error;
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n    width: 360px;\n    padding: 8% 0 0;\n    margin: auto;\n}\n\n.is-invalid {\n    border: 1px solid red !important;\n}\n\n.form {\n    position: relative;\n    z-index: 1;\n    background: #FFFFFF;\n    max-width: 360px;\n    margin: 0 auto 40px;\n    padding: 45px;\n    text-align: center;\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form input {\n    outline: 0;\n    background: #f2f2f2;\n    width: 100%;\n    border: 0;\n    margin: 0 0 15px;\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n}\n\n.form button {\n    font-family: \"Roboto\", sans-serif;\n    text-transform: uppercase;\n    outline: 0;\n    background: #3f65ae;\n    width: 100%;\n    border: 0;\n    padding: 15px;\n    color: #FFFFFF;\n    font-size: 14px;\n    transition: all 0.3 ease;\n    cursor: pointer;\n}\n\n.form button:hover, .form button:active, .form button:focus {\n    background: #3f65ae;\n}\n\n.form .message {\n    margin: 15px 0 0;\n    color: #b3b3b3;\n    font-size: 12px;\n}\n\n.form .message a {\n    color: #3f65ae;\n    text-decoration: none;\n}\n\n/*.form .register-form {*/\n\n/*display: none;*/\n\n/*}*/\n\n.container {\n    position: relative;\n    z-index: 1;\n    max-width: 300px;\n    margin: 0 auto;\n}\n\n.container:before, .container:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\n.container .info {\n    margin: 50px auto;\n    text-align: center;\n}\n\n.container .info h1 {\n    margin: 0 0 15px;\n    padding: 0;\n    font-size: 36px;\n    font-weight: 300;\n    color: #1a1a1a;\n}\n\n.container .info span {\n    color: #4d4d4d;\n    font-size: 12px;\n}\n\n.container .info span a {\n    color: #000000;\n    text-decoration: none;\n}\n\n.container .info span .fa {\n    color: #EF3B3A;\n}\n\n[disabled] {\n    opacity: 0.1;\n}\n\n.validation-message {\n    margin-top: -10px;\n    font-size: 12px;\n    text-align: left;\n    margin-bottom: 7px;\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDJFQUEyRTtDQUM5RTs7QUFFRDtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUVoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCOztBQUVELDBCQUEwQjs7QUFDMUIsa0JBQWtCOztBQUNsQixLQUFLOztBQUNMO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtDQUNmOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIHBhZGRpbmc6IDglIDAgMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLmZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICMzZjY1YWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtIGJ1dHRvbjpob3ZlciwgLmZvcm0gYnV0dG9uOmFjdGl2ZSwgLmZvcm0gYnV0dG9uOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y2NWFlO1xufVxuXG4uZm9ybSAubWVzc2FnZSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtIC5tZXNzYWdlIGEge1xuICAgIGNvbG9yOiAjM2Y2NWFlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyouZm9ybSAucmVnaXN0ZXItZm9ybSB7Ki9cbi8qZGlzcGxheTogbm9uZTsqL1xuLyp9Ki9cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uY29udGFpbmVyIC5pbmZvIHtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIgLmluZm8gaDEge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzFhMWExYTtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIgLmluZm8gc3BhbiAuZmEge1xuICAgIGNvbG9yOiAjRUYzQjNBO1xufVxuXG5bZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAwLjE7XG59XG5cbi52YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICBjb2xvcjogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-page\">\n    <div class=\"form\">\n        <form class=\"register-form\" (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\" novalidate>\n            <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                   [ngClass]=\"{'is-invalid':name.invalid && onKeyUpNameInput}\" required minlength=\"3\"\n                   placeholder=\"Name\" (keyup)=\"onKeyUpName()\">\n            <div *ngIf=\"onKeyUpNameInput && name.invalid\" class=\"validation-message\">\n                Name should have at least 3 characters\n            </div>\n            <input (keyup)=\"onKeyUpMail()\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\"\n                   #email=\"ngModel\" [ngClass]=\"{'is-invalid':email.invalid && onKeyUpMailInput}\" required\n                   placeholder=\"Email\" email>\n            <div *ngIf=\"onKeyUpMailInput && email.invalid\">\n                <div *ngIf=\"email.errors.required\" class=\"validation-message\">\n                    Email field is required\n                </div>\n                <div *ngIf=\"email.errors.email\" class=\"validation-message\">\n                    Email should be a valid email address\n                </div>\n            </div>\n            <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                   [ngClass]=\"{'is-invalid':password.invalid && onKeyUpPasswordInput}\" required minlength=\"6\"\n                   placeholder=\"Password\" (keyup)=\"onKeyUpPassword()\">\n            <div *ngIf=\"onKeyUpPasswordInput && password.invalid\" class=\"validation-message\">\n                Password should be at least 6 characters\n            </div>\n            <button type=\"submit\" [disabled]=\"!f.valid\">Sign Up</button>\n            <p class=\"message\">Already registered? <a routerLink=\"/signin\">Sign In</a></p>\n        </form>\n    </div>\n    <div *ngIf=\"errors\">\n        <div *ngIf=\"errors.email\">\n            <div *ngFor=\"let emailError of errors.email\" class=\"alert\">\n                {{ emailError }}\n            </div>\n        </div>\n        <div *ngIf=\"errors.name\">\n            <div *ngFor=\"let nameError of errors.name\" class=\"alert\">\n                {{ nameError }}\n            </div>\n        </div>\n        <div *ngIf=\"errors.password\">\n            <div *ngFor=\"let passwordError of errors.password\" class=\"alert\">\n                {{ passwordError }}\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
    }
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        this.authService.signup(form.value.name, form.value.email, form.value.password).subscribe(function (response) { return _this.router.navigate(['signin']); }, function (error) {
            _this.errors = error.error.errors;
        });
    };
    SignupComponent.prototype.onKeyUpName = function () {
        this.onKeyUpNameInput = true;
    };
    SignupComponent.prototype.onKeyUpMail = function () {
        this.onKeyUpMailInput = true;
    };
    SignupComponent.prototype.onKeyUpPassword = function () {
        this.onKeyUpPasswordInput = true;
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var TaskService = /** @class */ (function () {
    function TaskService(httpClient) {
        this.httpClient = httpClient;
        this.isDone = false;
    }
    TaskService.prototype.get = function (url) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url);
    };
    TaskService.prototype.post = function (url, task) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url, task, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-Requested-With': 'XMLHttpRequest' }) });
    };
    TaskService.prototype.put = function (url, task) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url, task);
    };
    TaskService.prototype.destroy = function (url) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url);
    };
    TaskService.prototype.completeToggle = function (url, task) {
        this.isDone = !this.isDone;
        task.isDone = this.isDone;
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + url, task);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task {\n    border-bottom: 1px solid #e7ebea;\n    border-right: 2px solid #b1b2a2;\n    border-left: 2px solid #b1b2a2;\n    color: #999;\n    position: relative;\n}\n\n.task:last-child {\n    border-bottom: 2px solid #b1b2a2;\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n}\n\n.task:hover {\n    background: #fcfed5;\n}\n\n.task:hover .edit-deadline {\n    display: block;\n}\n\n.task-body {\n    line-height: 49px;\n    padding-left: 10px;\n    border-left: 1px solid #efdadf;\n    font-weight: 600;\n    font-size: 14px;\n    display: inline-block;\n    padding-right: 23px;\n    width: 555px;\n    border-right: 1px solid #e7ebea;\n}\n\n.done-checkbox {\n    padding: 15px 11px 16px 18px;\n    border-right: 1px solid #efdadf;\n    display: inline-block;\n    margin-right: 4px;\n}\n\n.done-checkbox input {\n    cursor: pointer;\n}\n\n.task:hover .task-actions {\n    display: block;\n}\n\n.task-actions i {\n    cursor: pointer;\n}\n\n.task-actions div {\n    display: inline-block;\n}\n\n/*.task-change-priority {*/\n\n/**/\n\n/*}*/\n\n/*.edit-task {}*/\n\n/*.delete-task {}*/\n\n.task-actions {\n    float: right;\n    font-size: 14px;\n    padding: 13px 13px 21px 19px;\n    /*border-left: 1px solid red;*/\n    display: none;\n}\n\n.delete-task i {\n    padding-left: 10px;\n    border-left: 1px solid #e7ebea;\n    /*display: none;*/\n}\n\n.edit-task i {\n    padding-right: 6px;\n    padding-left: 10px;\n    border-left: 1px solid #e7ebea;\n    /*display: none;*/\n}\n\n.task-change-priority {\n    padding-right: 6px;\n    position: relative;\n    /*display: none;*/\n}\n\n.edit-mode {\n    display: inline-block;\n}\n\n.create-task-wrap {\n    background: linear-gradient(#e1e1e1, #ccc);\n    height: 50px;\n    padding-top: 6px;\n    position: relative;\n    border-bottom: 1px solid #aaa;\n    border-right: 2px solid #b1b2a2;\n    border-left: 2px solid #b1b2a2;\n    box-sizing: border-box;\n}\n\n.create-task-icon {\n    font-size: 25px;\n    color: #588f71;\n    float: left;\n    margin: 5px 15px 0 16px;\n}\n\n.create-task-wrap input {\n    height: 31px;\n    width: 40%;\n    padding-left: 11px;\n    font-size: 13px;\n    padding-bottom: 2px;\n    margin-top: -12px;\n    color: #8e8e8e;\n    outline: 0;\n    box-sizing: border-box;\n}\n\n.add-task-button {\n    height: 31px;\n    position: absolute;\n    top: 8px;\n    right: 10px;\n    width: 108px;\n    padding-bottom: 3px;\n    font-size: 14px;\n    cursor: pointer;\n    background: linear-gradient(#94cbae, #508767);\n    border: 1px solid #447557;\n    border-radius: 4px;\n    color: #fff;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);\n    outline: 0;\n}\n\n.add-task-button:hover {\n    background: linear-gradient(#508767, #94cbae);\n}\n\n.deadline, .deadline-expired {\n    font-weight: 600;\n    font-size: 14px;\n    width: 160px;\n    display: inline-block;\n    margin-left: 10px;\n    position: relative;\n}\n\n.deadline {\n    color: #3f65ae;\n}\n\n.deadline-expired {\n    color: red;\n}\n\n.deadline-done {\n    color: #999;\n}\n\n.done {\n    text-decoration: line-through;\n}\n\n.task:hover input {\n    background: #fcfed5;\n    /*border: 1px solid #8e8e8e;*/\n    outline: 0;\n}\n\n.task-body button {\n    background: #3f65ae;\n    color: #fff;\n    border: 0;\n    margin-left: 1px;\n    cursor: pointer;\n    padding: 2px 6px;\n}\n\n.task-text {\n    color: #999;\n    font-weight: bold;\n    border: 0;\n    background: #fff;\n    outline: 0;\n    width: 350px;\n}\n\n.task-text-edit {\n    outline: 0;\n    color: #999;\n    font-weight: bold;\n    border: 1px solid #8e8e8e;\n    width: 250px;\n}\n\nbutton[disabled] {\n    opacity: 0.3;\n}\n\n.arrow-up {\n    top: -11px;\n    width: 0;\n    right: 5px;\n    position: absolute;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #999;\n    cursor: pointer;\n}\n\n.arrow-down {\n    width: 0;\n    right: 5px;\n    top: -2px;\n    position: absolute;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #999;\n    cursor: pointer;\n}\n\n.no-tasks {\n    text-align: center;\n    padding: 15px 0;\n    background: #ddd;\n    color: #999;\n    border-bottom: 2px solid #b1b2a2;\n    border-right: 2px solid #b1b2a2;\n    border-left: 2px solid #b1b2a2;\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n}\n\n.create-task-wrap button[disabled]:hover {\n    background: linear-gradient(#94cbae, #508767);\n}\n\n.edit-deadline {\n    position: absolute;\n    top: 14px;\n    right: -9px;\n    display: none;\n    cursor: pointer;\n    color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVELDJCQUEyQjs7QUFDM0IsSUFBSTs7QUFDSixLQUFLOztBQUVMLGlCQUFpQjs7QUFFakIsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsOENBQThDO0lBQzlDLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSw4Q0FBOEM7Q0FDakQ7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksOENBQThDO0NBQ2pEOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZWJlYTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYjFiMmEyO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2IxYjJhMjtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjFiMmEyO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG59XG5cbi50YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmZWQ1O1xufVxuXG4udGFzazpob3ZlciAuZWRpdC1kZWFkbGluZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YXNrLWJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZmRhZGY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XG4gICAgd2lkdGg6IDU1NXB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2ViZWE7XG59XG5cbi5kb25lLWNoZWNrYm94IHtcbiAgICBwYWRkaW5nOiAxNXB4IDExcHggMTZweCAxOHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmRhZGY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uZG9uZS1jaGVja2JveCBpbnB1dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzazpob3ZlciAudGFzay1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhc2stYWN0aW9ucyBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWFjdGlvbnMgZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qLnRhc2stY2hhbmdlLXByaW9yaXR5IHsqL1xuLyoqL1xuLyp9Ki9cblxuLyouZWRpdC10YXNrIHt9Ki9cblxuLyouZGVsZXRlLXRhc2sge30qL1xuXG4udGFzay1hY3Rpb25zIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEzcHggMTNweCAyMXB4IDE5cHg7XG4gICAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDsqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kZWxldGUtdGFzayBpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTdlYmVhO1xuICAgIC8qZGlzcGxheTogbm9uZTsqL1xufVxuXG4uZWRpdC10YXNrIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTdlYmVhO1xuICAgIC8qZGlzcGxheTogbm9uZTsqL1xufVxuXG4udGFzay1jaGFuZ2UtcHJpb3JpdHkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLypkaXNwbGF5OiBub25lOyovXG59XG5cbi5lZGl0LW1vZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNyZWF0ZS10YXNrLXdyYXAge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTFlMWUxLCAjY2NjKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2IxYjJhMjtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNiMWIyYTI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNyZWF0ZS10YXNrLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzU4OGY3MTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweCAxNXB4IDAgMTZweDtcbn1cblxuLmNyZWF0ZS10YXNrLXdyYXAgaW5wdXQge1xuICAgIGhlaWdodDogMzFweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTFweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBjb2xvcjogIzhlOGU4ZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICAgIGhlaWdodDogMzFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzk0Y2JhZSwgIzUwODc2Nyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NzU1NztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MDg3NjcsICM5NGNiYWUpO1xufVxuXG4uZGVhZGxpbmUsIC5kZWFkbGluZS1leHBpcmVkIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRlYWRsaW5lIHtcbiAgICBjb2xvcjogIzNmNjVhZTtcbn1cblxuLmRlYWRsaW5lLWV4cGlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5kZWFkbGluZS1kb25lIHtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuLmRvbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udGFzazpob3ZlciBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogI2ZjZmVkNTtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkICM4ZThlOGU7Ki9cbiAgICBvdXRsaW5lOiAwO1xufVxuXG4udGFzay1ib2R5IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzNmNjVhZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMnB4IDZweDtcbn1cblxuLnRhc2stdGV4dCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgb3V0bGluZTogMDtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbi50YXNrLXRleHQtZWRpdCB7XG4gICAgb3V0bGluZTogMDtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGU4ZThlO1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuXG4uYXJyb3ctdXAge1xuICAgIHRvcDogLTExcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM5OTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3ctZG93biB7XG4gICAgd2lkdGg6IDA7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjOTk5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXRhc2tzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiMWIyYTI7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2IxYjJhMjtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNiMWIyYTI7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbn1cblxuLmNyZWF0ZS10YXNrLXdyYXAgYnV0dG9uW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM5NGNiYWUsICM1MDg3NjcpO1xufVxuXG4uZWRpdC1kZWFkbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRweDtcbiAgICByaWdodDogLTlweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzk5OTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-task-wrap\">\n    <i class=\"fas fa-plus create-task-icon\"></i>\n    <form class=\"add-task-form\" (ngSubmit)=\"postTask(f); f.resetForm()\" #f=\"ngForm\">\n        <input type=\"text\" name=\"name\" placeholder=\"Start typing here to create a task...\" ngModel required>\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"dp3\" placeholder=\"Set deadline date\" name=\"deadline\" ngModel required>\n            <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n            <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n        <button class=\"add-task-button\" type=\"submit\" [disabled]=\"!f.valid\">Add Task</button>\n    </form>\n</div>\n<ng-container *ngIf=\"tasks && tasks.length > 0; else noTasks\">\n    <div class=\"task\" *ngFor=\"let task of tasks\">\n        <ng-container *ngIf=\"task\">\n            <div class=\"done-checkbox\">\n                <input type=\"checkbox\" name=\"done-checkbox\" title=\"done-checkbox\" [(ngModel)]=\"task.isDone\"\n                       (click)=\"completeToggle(task)\">\n            </div>\n            <div class=\"task-body\">\n                <div *ngIf=\"editing && editId === task.priority; else notEditing\" class=\"edit-mode\">\n                    <form #edit=\"ngForm\" (ngSubmit)=\"putTask(task)\">\n                        <input type=\"text\" name=\"taskName\" value=\"{{ task.name }}\" [(ngModel)]=\"editValue\"\n                               class=\"task-text-edit\" [class.done]=\"task.isDone\" required>\n                        <button type=\"submit\" [disabled]=\"!edit.valid\">Save</button>\n                        <button (click)=\"onCancelEditing()\">Cancel</button>\n                    </form>\n                </div>\n                <ng-template #notEditing>\n                    <input type=\"text\" value=\"{{ task.name }}\" disabled class=\"task-text\" [class.done]=\"task.isDone\">\n                </ng-template>\n                <span class=\"deadline-expired\" [class.deadline-done]=\"task.isDone\"\n                      *ngIf=\"task.deadline < getCurrentTimestamp()\">\n                    deadline - {{ task.deadline | date }}\n                 </span>\n                <span class=\"deadline\" [class.deadline-done]=\"task.isDone\"\n                      *ngIf=\"task.deadline > getCurrentTimestamp()\">\n                    deadline - {{ task.deadline | date }}\n                 </span>\n                <mat-form-field>\n                    <input (dateChange)=\"putDeadline(task, $event)\" matInput #deadline [matDatepicker]=\"dp3\" placeholder=\"Set deadline date\" name=\"deadline\" ngModel required>\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"task-actions\">\n                <div class=\"task-change-priority\">\n                    <div class=\"arrow-up\" (click)=\"increasePriority(task)\"></div>\n                    <div class=\"arrow-down\" (click)=\"decreasePriority(task)\"></div>\n                </div>\n                <div class=\"edit-task\">\n                    <i class=\"fas fa-pencil-alt\" (click)=\"onEdit(task)\"></i>\n                </div>\n                <div class=\"delete-task\">\n                    <i class=\"far fa-trash-alt\" (click)=\"deleteTask(task)\"></i>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n</ng-container>\n<ng-template #noTasks>\n    <div class=\"no-tasks\">\n        There is no tasks yet. Create your first now!\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService, authService) {
        this.taskService = taskService;
        this.authService = authService;
        this.isDone = false;
        this.editing = false;
    }
    TaskComponent.prototype.postTask = function (form) {
        var _this = this;
        this.taskService.post('/api/task/' + this.project_id + '?token=' + this.authService.getToken(), {
            name: form.value.name,
            deadline: new Date(form.value.deadline).getTime(),
            isDone: false,
            project_id: this.project_id,
            priority: this.tasks === undefined ? 0 : this.tasks.length,
        }).subscribe(function (res) { return _this.tasks.push(res[0]); });
    };
    TaskComponent.prototype.getTasks = function () {
        return this.taskService.get('/api/tasks/' + this.project_id + '?token=' + this.authService.getToken());
    };
    TaskComponent.prototype.onEdit = function (task) {
        this.editing = true;
        this.editValue = task.name;
        this.editId = task.priority;
    };
    TaskComponent.prototype.putTask = function (task) {
        var _this = this;
        this.taskService.put('/api/task/' + task.id + '?token=' + this.authService.getToken(), {
            name: this.editValue,
            isDone: task.isDone,
        }).subscribe(function (task) {
            _this.tasks[task.priority].name = _this.editValue;
        });
        this.editing = false;
    };
    TaskComponent.prototype.onCancelEditing = function () {
        this.editValue = '';
        this.editing = false;
    };
    TaskComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.taskService.destroy('/api/task/' + task.id + '/' + task.priority + '?token=' + this.authService.getToken()).subscribe(function (res) {
            var index = _this.tasks.indexOf(task);
            if (index > -1) {
                _this.tasks.splice(index, 1);
            }
        });
    };
    TaskComponent.prototype.completeToggle = function (task) {
        this.taskService.completeToggle('/api/task/' + task.id + '?token=' + this.authService.getToken(), task).subscribe();
    };
    TaskComponent.prototype.getCurrentTimestamp = function () {
        return new Date().getTime();
    };
    TaskComponent.prototype.increasePriority = function (task) {
        var _a;
        var index = this.tasks.indexOf(task);
        if (index > 0) {
            this.taskService.put('/api/task/increase/' + task.project_id + '/' + index + '?token=' + this.authService.getToken(), { priority: index - 1 }).subscribe();
            this.taskService.put('/api/task/decrease/' + task.project_id + '/' + (index - 1) + '?token=' + this.authService.getToken(), { priority: index }).subscribe();
            _a = [this.tasks[index - 1], this.tasks[index]], this.tasks[index] = _a[0], this.tasks[index - 1] = _a[1];
        }
    };
    TaskComponent.prototype.decreasePriority = function (task) {
        var _a;
        var index = this.tasks.indexOf(task);
        if (index < this.tasks.length - 1) {
            this.taskService.put('/api/task/decrease/' + task.project_id + '/' + index + '?token=' + this.authService.getToken(), { priority: index + 1 }).subscribe();
            this.taskService.put('/api/task/increase/' + task.project_id + '/' + (index + 1) + '?token=' + this.authService.getToken(), { priority: index }).subscribe();
            _a = [this.tasks[index + 1], this.tasks[index]], this.tasks[index] = _a[0], this.tasks[index + 1] = _a[1];
        }
    };
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTasks().subscribe(function (res) {
            _this.tasks = res.tasks.sort(function (a, b) {
                return a.priority - b.priority;
            });
        });
    };
    TaskComponent.prototype.putDeadline = function (task, event) {
        this.taskService.put('/api/task/deadline/' + task.id + '?token=' + this.authService.getToken(), { deadline: new Date(event.value).getTime() }).subscribe(function (res) {
            task.deadline = new Date(event.value).getTime();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TaskComponent.prototype, "project_id", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api_server: 'http://localhost:8085'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/myelsk/www/rg-app/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./end/end.component */ "./src/app/end/end.component.ts");






var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: {},
    },
    {
        path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], data: {},
    },
    {
        path: 'end', component: _end_end_component__WEBPACK_IMPORTED_MODULE_5__["EndComponent"], data: {},
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'beatbot';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./end/end.component */ "./src/app/end/end.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _end_end_component__WEBPACK_IMPORTED_MODULE_9__["EndComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constant.file.ts":
/*!**********************************!*\
  !*** ./src/app/constant.file.ts ***!
  \**********************************/
/*! exports provided: questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
var questions = [
    [{
            "id": 56,
            src: "what direction does the sun rise",
            "index": 0,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'A person who thinks only of himself',
            "index": 1,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'A life history written by somebody else',
            "index": 2,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'One who can speak two languages',
            "index": 3,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'The person who collects coins',
            "index": 4,
            "userAns": '',
            "botAns": ''
        }],
    [
        {
            "id": 56,
            src: 'what is the color of danger',
            "index": 0,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: "Gayatri doesn't know how to read and write .Her friends call her",
            "index": 1,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'Word with the same meaning are called synonyms',
            "index": 2,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'Life history written by oneself',
            "index": 3,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'orange is a color and also a fruit',
            "index": 4,
            "userAns": '',
            "botAns": ''
        }
    ],
    [
        {
            "id": 56,
            src: 'The act of murder of a human being homicide',
            "index": 0,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'One who goes on a journey to a holy place',
            "index": 1,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'The person who works for free ',
            "index": 2,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'A thing that is kept as a reminder of an event',
            "index": 3,
            "userAns": '',
            "botAns": ''
        },
        {
            "id": 56,
            src: 'One who does not believes in god',
            "index": 4,
            "userAns": '',
            "botAns": ''
        }
    ]
];


/***/ }),

/***/ "./src/app/end/end.component.css":
/*!***************************************!*\
  !*** ./src/app/end/end.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZC9lbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/end/end.component.html":
/*!****************************************!*\
  !*** ./src/app/end/end.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  end works!\n</p>\n"

/***/ }),

/***/ "./src/app/end/end.component.ts":
/*!**************************************!*\
  !*** ./src/app/end/end.component.ts ***!
  \**************************************/
/*! exports provided: EndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndComponent", function() { return EndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndComponent = /** @class */ (function () {
    function EndComponent() {
    }
    EndComponent.prototype.ngOnInit = function () {
    };
    EndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end',
            template: __webpack_require__(/*! ./end.component.html */ "./src/app/end/end.component.html"),
            styles: [__webpack_require__(/*! ./end.component.css */ "./src/app/end/end.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndComponent);
    return EndComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Sentence Translation */\n\n.sentence-translation {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(45deg, #4B4168, #03618ae8);\n    overflow: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.translation__box {\n    background: #fff;\n    border-radius: 20px;\n    box-shadow: 0 0 3em rgba(0, 0, 0, 0.3);\n    max-width: 1200px;\n    overflow: auto;\n    position: relative;\n    transition: all .3s ease;\n    width: 90vw;\n    height: 90vh;\n    padding: 16px;\n    box-sizing: border-box;\n}\n\n.translate__info h2,\n.translate__msg h1 {\n    margin: 0;\n    line-height: normal;\n}\n\n.translate__info {\n    padding: 16px;\n    display: flex;\n    align-items: center;\n}\n\n.translate__info h2 {\n    margin-right: auto;\n}\n\n.translate__info .replay-home {\n    width: 32px;\n    height: 32px;\n    cursor: pointer;\n}\n\n.replay-home img {\n    width: 100%;\n}\n\n.translate__msg {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 8px 16px;\n    border: 1px solid #79b5da;\n    background: #d3e2ea;\n    border-radius: 20px;\n    color: #245073;\n    margin-bottom: 16px;\n}\n\n.user-information {\n    display: flex;\n}\n\n/* .user-information>div:first-child {\n    padding-right: 16px;\n}\n\n.user-information>div:last-child {\n    padding-left: 16px;\n} */\n\n.user-information .user-input,\n.user-information .bot-input {\n    flex: 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.user-input h1,\n.bot-input h1 {\n    margin: 0;\n}\n\n/* .user-input span,\n.bot-input span {\n    border: 1px dashed #024f9d;\n    border-radius: 5px;\n    padding: 8px 16px;\n    font-size: 24px;\n} */\n\n.score-card,\n.decide-answer {\n    display: grid;\n    padding: 16px 0;\n    grid-gap: 16px;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.record__audio h2 {\n    margin: 0;\n}\n\n.record__audio .record__audio__bot {\n    flex-direction: row-reverse;\n}\n\n/* .record__audio__bot {\n    flex-direction: row;\n    padding-left: 16px;\n} */\n\n.arrow-image {\n    width: 64px;\n    height: 64px;\n    margin: 0 16px;\n}\n\n.arrow-image img {\n    width: 100%;\n}\n\n.record__audio {\n    display: flex;\n    justify-content: space-around;\n}\n\n.record__audio__user,\n.record__audio__bot {\n    flex: 1 50%;\n}\n\n.record__audio__user,\n.record__audio__bot,\n.question__set__user,\n.question__set__bot,\n.score-card__user,\n.score-card__bot,\n.decide-answer__user,\n.decide-answer__bot {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.audio-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: 16px;\n    cursor: pointer;\n}\n\n.record__audio__bot .audio-container {\n    margin: 0 0 0 16px;\n}\n\n.audio-container .btn {\n    margin-top: 8px;\n}\n\n.audio-icon,\n.bot-icon {\n    width: 64px;\n    height: 64px;\n    background: #d3e2ea;\n    border-radius: 50%;\n    box-sizing: border-box;\n    cursor: pointer;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.audio-icon {\n    padding: 12px;\n}\n\n.bot-icon {\n    padding: 0;\n}\n\n.audio-icon img,\n.bot-icon img {\n    width: 100%;\n}\n\n.question__set__container {\n    padding: 16px 0;\n    /* min-height: 180px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.question__set {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 8px;\n    border-bottom: 1px dashed #024f9d;\n}\n\n.question__set__user, .question__set__bot {\n    flex: 1 1 50%;\n}\n\n.question__set__user {\n    padding-left: 40px;\n}\n\n.question__set__bot {\n    padding-right: 40px;\n}\n\n.question__set__user,\n.question__set__bot {\n    position: relative;\n    flex-wrap: wrap;\n}\n\n.question__status {\n    position: absolute;\n}\n\n.question__status--left {\n    left: 0;\n}\n\n.question__status--right {\n    right: 0;\n}\n\n.icon {\n    position: relative;\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n}\n\n.icon::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 20px;\n    color: white;\n}\n\n.icon--right {\n    border: 1px solid #8cf391;\n    background: #8cf391;\n}\n\n.icon--right::after {\n    content: '\\2713';\n}\n\n.icon--wrong {\n    border: 1px solid #e21f11;\n    background: #e21f11;\n}\n\n.icon--wrong::after {\n    content: '\\2718';\n}\n\n.icon--right,\n.icon--wrong {\n    border-radius: 50%;\n}\n\n.decide-answer__user,\n.decide-answer__bot {\n    justify-content: space-evenly;\n}\n\n.submit-btn {\n    padding: 16px 0;\n    display: flex;\n    justify-content: center;\n}\n\n.m-0 {\n    margin: 0 !important;\n}\n\n.p-0 {\n    padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlCQUF5Qjs7QUFFekI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNEQUFzRDtJQUN0RCxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7O0dBTUc7O0FBRUg7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFNBQVM7QUFDYjs7QUFFQTs7Ozs7O0dBTUc7O0FBRUg7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOzs7Ozs7OztJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBTZW50ZW5jZSBUcmFuc2xhdGlvbiAqL1xuXG4uc2VudGVuY2UtdHJhbnNsYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0QjQxNjgsICMwMzYxOGFlOCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udHJhbnNsYXRpb25fX2JveCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAzZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnRyYW5zbGF0ZV9faW5mbyBoMixcbi50cmFuc2xhdGVfX21zZyBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi50cmFuc2xhdGVfX2luZm8ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHJhbnNsYXRlX19pbmZvIGgyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50cmFuc2xhdGVfX2luZm8gLnJlcGxheS1ob21lIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVwbGF5LWhvbWUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRyYW5zbGF0ZV9fbXNnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc5YjVkYTtcbiAgICBiYWNrZ3JvdW5kOiAjZDNlMmVhO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6ICMyNDUwNzM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnVzZXItaW5mb3JtYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIC51c2VyLWluZm9ybWF0aW9uPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnVzZXItaW5mb3JtYXRpb24+ZGl2Omxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn0gKi9cblxuLnVzZXItaW5mb3JtYXRpb24gLnVzZXItaW5wdXQsXG4udXNlci1pbmZvcm1hdGlvbiAuYm90LWlucHV0IHtcbiAgICBmbGV4OiAxIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlci1pbnB1dCBoMSxcbi5ib3QtaW5wdXQgaDEge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogLnVzZXItaW5wdXQgc3Bhbixcbi5ib3QtaW5wdXQgc3BhbiB7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMwMjRmOWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0gKi9cblxuLnNjb3JlLWNhcmQsXG4uZGVjaWRlLWFuc3dlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgZ3JpZC1nYXA6IDE2cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cblxuLnJlY29yZF9fYXVkaW8gaDIge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnJlY29yZF9fYXVkaW8gLnJlY29yZF9fYXVkaW9fX2JvdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4vKiAucmVjb3JkX19hdWRpb19fYm90IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn0gKi9cblxuLmFycm93LWltYWdlIHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5hcnJvdy1pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVjb3JkX19hdWRpbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnJlY29yZF9fYXVkaW9fX3VzZXIsXG4ucmVjb3JkX19hdWRpb19fYm90IHtcbiAgICBmbGV4OiAxIDUwJTtcbn1cblxuLnJlY29yZF9fYXVkaW9fX3VzZXIsXG4ucmVjb3JkX19hdWRpb19fYm90LFxuLnF1ZXN0aW9uX19zZXRfX3VzZXIsXG4ucXVlc3Rpb25fX3NldF9fYm90LFxuLnNjb3JlLWNhcmRfX3VzZXIsXG4uc2NvcmUtY2FyZF9fYm90LFxuLmRlY2lkZS1hbnN3ZXJfX3VzZXIsXG4uZGVjaWRlLWFuc3dlcl9fYm90IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hdWRpby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWNvcmRfX2F1ZGlvX19ib3QgLmF1ZGlvLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xufVxuXG4uYXVkaW8tY29udGFpbmVyIC5idG4ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmF1ZGlvLWljb24sXG4uYm90LWljb24ge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDNlMmVhO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5hdWRpby1pY29uIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuXG4uYm90LWljb24ge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5hdWRpby1pY29uIGltZyxcbi5ib3QtaWNvbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucXVlc3Rpb25fX3NldF9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgLyogbWluLWhlaWdodDogMTgwcHg7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVlc3Rpb25fX3NldCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMDI0ZjlkO1xufVxuXG4ucXVlc3Rpb25fX3NldF9fdXNlciwgLnF1ZXN0aW9uX19zZXRfX2JvdCB7XG4gICAgZmxleDogMSAxIDUwJTtcbn1cblxuLnF1ZXN0aW9uX19zZXRfX3VzZXIge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnF1ZXN0aW9uX19zZXRfX2JvdCB7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLnF1ZXN0aW9uX19zZXRfX3VzZXIsXG4ucXVlc3Rpb25fX3NldF9fYm90IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucXVlc3Rpb25fX3N0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucXVlc3Rpb25fX3N0YXR1cy0tbGVmdCB7XG4gICAgbGVmdDogMDtcbn1cblxuLnF1ZXN0aW9uX19zdGF0dXMtLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbn1cblxuLmljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaWNvbjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb24tLXJpZ2h0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGNmMzkxO1xuICAgIGJhY2tncm91bmQ6ICM4Y2YzOTE7XG59XG5cbi5pY29uLS1yaWdodDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXDI3MTMnO1xufVxuXG4uaWNvbi0td3Jvbmcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMjFmMTE7XG4gICAgYmFja2dyb3VuZDogI2UyMWYxMTtcbn1cblxuLmljb24tLXdyb25nOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjcxOCc7XG59XG5cbi5pY29uLS1yaWdodCxcbi5pY29uLS13cm9uZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZGVjaWRlLWFuc3dlcl9fdXNlcixcbi5kZWNpZGUtYW5zd2VyX19ib3Qge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucC0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sentence-translation\">\n  <div class=\"translation__box\">\n\n    <div class=\"translate__info\">\n      <h2>Translate the below Sentence</h2>\n      <div class=\"replay-home\">\n        <img src=\"/assets/images/replay-home.svg\" alt=\"Go to Home\" (click)=\"goToLandingPage()\">\n      </div>\n    </div>\n\n    <div class=\"translate__msg\" *ngIf=\"currentQuestion\">\n      <h2 class=\"m-0\">{{currentQuestion.src}} </h2>\n    </div>\n\n    <div class=\"user-information\">\n      <div class=\"user-input\">\n        <h1>User</h1>\n      </div>\n      <div class=\"bot-input\">\n        <h1>Bot</h1>\n      </div>\n    </div>\n\n\n\n    <div class=\"record__audio\">\n      <div class=\"record__audio__user\">\n        <div class=\"audio-container\" (click)=\"startRecording()\" *ngIf=\"showRecord\">\n          <div class=\"audio-icon\"><img src=\"/assets/images/audio-record.svg\" alt=\"\"></div>\n        </div>\n        <div class=\"audio-container\" (click)=\"stopRecording()\" *ngIf=\"!showRecord\">\n          <div class=\"audio-icon\"><img src=\"/assets/images/stop.svg\" alt=\"\"></div>\n        </div>\n        <h2 class=\"audio-printed\" *ngIf=\"currentUserQuestion\">\n          {{currentUserQuestion['src']}}</h2>\n      </div>\n      <div class=\"arrow-image\" (click)=\"checkTheBotAnswer()\">\n        <img src=\"/assets/images/right-arrow.svg\" alt=\"\">\n      </div>\n      <div class=\"record__audio__bot\">\n        <div class=\"audio-container\">\n          <div class=\"bot-icon\"><img src=\"/assets/images/bot.svg\" alt=\"\"></div>\n        </div>\n        <h2 class=\"bot-printed\" *ngIf=\"currentBotQuestion\">\n          {{currentBotQuestion['tgt']}}</h2>\n      </div>\n    </div>\n\n    <div class=\"question__set__container\">\n\n      <div class=\"question__set__user\">\n        <div *ngFor=\"let items of handledUserQuestionSet; let i = index\" class=\"question__set\">\n          <div class=\"question__status question__status--left\" *ngIf=\"items.userAns === 0\">\n            <div class=\"icon icon--wrong\"></div>\n          </div>\n          <div class=\"question__status question__status--left\" *ngIf=\"items.userAns === 1\">\n            <div class=\"icon icon--right\"></div>\n          </div>\n          <h3 class=\"m-0\">Q{{i+1}}. &nbsp;</h3>\n          <p class=\"m-0\">{{items['src']}}</p>\n        </div>\n      </div>\n      <div class=\"question__set__bot\">\n        <div *ngFor=\"let items of handledBotQuestionSet; let i = index\" class=\"question__set\">\n          <div class=\"question__status question__status--right\" *ngIf=\"items.botAns === 0\">\n            <div class=\"icon icon--wrong\"></div>\n          </div>\n          <div class=\"question__status question__status--right\" *ngIf=\"items.botAns=== 1\">\n            <div class=\"icon icon--right\"></div>\n          </div>\n          <h3 class=\"m-0\">Q{{i+1}}. &nbsp;</h3>\n          <p class=\"m-0\">{{items['tgt']}}</p>\n        </div>\n\n      </div>\n\n\n    </div>\n\n\n\n    <div class=\"decide-answer\">\n      <div class=\"decide-answer__user\" *ngIf=\"currentUserQuestion\">\n        <button class=\"btn  btn--small\"\n          [ngClass]=\"[this.currentUserQuestion.userAns === 1 ? 'checkedClass' : 'btn--secondary']\"\n          (click)=\"userCorrectAns()\">Correct\n        </button>\n        <button class=\"btn  btn--small\"\n          [ngClass]=\"[this.currentUserQuestion.userAns === 0 ? 'uncheckedClass' : 'btn--danger']\"\n          (click)=\"userWrongAns()\">Wrong</button>\n      </div>\n      <div class=\"decide-answer__bot\" *ngIf=\"currentBotQuestion\">\n        <button class=\"btn btn--small\"\n          [ngClass]=\"[this.currentBotQuestion.botAns === 1 ? 'checkedClass' : 'btn--secondary']\"\n          (click)=\"botCorrectAns()\">Correct\n        </button>\n        <button class=\"btn  btn--small\"\n          [ngClass]=\"[this.currentBotQuestion.botAns === 0 ? 'uncheckedClass' : 'btn--danger']\"\n          (click)=\"botWrongAns()\">Wrong</button></div>\n    </div>\n\n    <div class=\"score-card\">\n      <div class=\"score-card__user\">\n        <h1>Score: {{usrCorrectAnsCount}}/5</h1>\n      </div>\n      <div class=\"score-card__bot\">\n        <h1>Score: {{botCorrectAnsCount}}/5</h1>\n      </div>\n    </div>\n\n    <div class=\"submit-btn\">\n      <button class=\"btn btn--start\" (click)=\"getNextQuestion()\">{{nextButtonname}}</button>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.file */ "./src/app/constant.file.ts");
/* harmony import */ var _speech_recognition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../speech-recognition.service */ "./src/app/speech-recognition.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(speechService, router) {
        this.speechService = speechService;
        this.router = router;
        this.handledUserQuestionSet = [];
        this.handledBotQuestionSet = [];
        this.questionsSet = _constant_file__WEBPACK_IMPORTED_MODULE_2__["questions"];
        this.botCorrectAnsCount = 0;
        this.usrCorrectAnsCount = 0;
        this.showRecord = true;
        this.nextCount = 1;
        // tslint:disable-next-line: variable-name
        this.recorded_message = '';
        this.recognition = new window.speechRecognition();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.questionSetNumber = Math.floor(Math.random() * 4);
        console.log(this.questionSetNumber, 'questionSetNumber');
        console.log(this.questionsSet, 'questionsSet');
        this.currentQuestion = this.questionsSet[this.questionSetNumber][0];
        console.log(this.currentQuestion, 'currentQuestion');
        this.recognition.lang = 'hi';
        this.nextButtonname = 'NEXT';
    };
    HomeComponent.prototype.goToLandingPage = function () {
        this.router.navigate(['/landing']);
    };
    HomeComponent.prototype.checkTheBotAnswer = function () {
        var _this = this;
        var question = this.currentQuestion;
        this.speechService.getConfig([question])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (response) {
            question.tgt = response['response_body'][0].tgt;
            _this.currentBotQuestion = question;
            // this.handledBotQuestionSet.push(question);
        });
    };
    HomeComponent.prototype.getNextQuestion = function () {
        console.log(this.currentQuestion, 'this.currentQuestion');
        if (this.nextCount >= 6) {
            if (this.usrCorrectAnsCount === this.botCorrectAnsCount) {
                alert('Tie');
                this.router.navigate(['/landing']);
            }
            else if (this.usrCorrectAnsCount > this.botCorrectAnsCount) {
                alert('congratulation you are the Winner');
                this.router.navigate(['/landing']);
            }
            else {
                alert('Winner is Bot');
                this.router.navigate(['/landing']);
            }
        }
        else {
            this.currentQuestion = this.questionsSet[this.questionSetNumber][this.nextCount];
            this.handledBotQuestionSet.push(this.currentBotQuestion);
            this.handledUserQuestionSet.push(this.currentUserQuestion);
            this.nextCount++;
            if (this.handledBotQuestionSet.length === 5) {
                this.nextButtonname = 'SHOW WINNER';
            }
            console.log(this.nextCount, 'this.nextCount');
            console.log(this.handledUserQuestionSet, 'this.handledUserQuestionSet');
            console.log(this.handledBotQuestionSet, 'this.handledBotQuestionSet');
            this.currentBotQuestion = '';
            this.currentUserQuestion = '';
            this.showRecord = true;
        }
    };
    HomeComponent.prototype.botCorrectAns = function () {
        this.currentBotQuestion.botAns = 1;
        this.botCorrectAnsCount++;
    };
    HomeComponent.prototype.botWrongAns = function () {
        this.currentBotQuestion.botAns = 0;
        // if (this.botCorrectAnsCount) {
        //   this.botCorrectAnsCount--;
        // }
    };
    HomeComponent.prototype.userCorrectAns = function () {
        this.currentUserQuestion.userAns = 1;
        this.usrCorrectAnsCount++;
    };
    HomeComponent.prototype.userWrongAns = function () {
        this.currentUserQuestion.userAns = 0;
        // if (this.usrCorrectAnsCount) {
        // this.usrCorrectAnsCount--;
        // }
    };
    HomeComponent.prototype.getTextFromUser = function () {
        var obj = {
            src: this.recorded_message,
            "id": 56,
            "index": 2,
            "userAns": '',
            "botAns": ''
        };
        this.currentUserQuestion = obj;
        this.recorded_message = "";
    };
    HomeComponent.prototype.startRecording = function () {
        var _this = this;
        this.recorded_message = "";
        this.showRecord = false;
        if (window.speechRecognition === undefined) {
            alert('Speech Recogniztion API Not Supported');
        }
        this.recognition.continuous = true;
        this.recognition.onerror = function (error) {
            _this.recorded_message = "";
        };
        this.recognition.onresult = function (event) {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    _this.recorded_message = _this.recorded_message.toString().concat(event.results[i][0].transcript);
                    console.log(_this.recorded_message, 'recorded_message');
                }
            }
        };
        this.recognition.onend = function (event) {
        };
        this.recognition.start();
        console.log(this.recorded_message, 'recorded_message');
    };
    HomeComponent.prototype.stopRecording = function () {
        this.showRecord = true;
        this.recognition.stop();
        this.getTextFromUser();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_speech_recognition_service__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());

window.speechRecognition = window.speechRecognition = window.speechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.webkitSpeechRecognition;


/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing {\n    width: 100%;\n    height: 100%;\n    background: url('/assets/images/Mario-Kart-Tour-bots-e1569594702988.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlFQUF5RTtJQUN6RSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL01hcmlvLUthcnQtVG91ci1ib3RzLWUxNTY5NTk0NzAyOTg4LmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\n  <button class=\"btn btn--primary\" (click)=\"goToHome()\">PLAY</button>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.goToHome = function () {
        this.router.navigate(['/home']);
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/speech-recognition.service.ts":
/*!***********************************************!*\
  !*** ./src/app/speech-recognition.service.ts ***!
  \***********************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SpeechRecognitionService = /** @class */ (function () {
    function SpeechRecognitionService(http) {
        this.http = http;
        this.baseUrl = 'http://50.1.0.11:3003/translator/translation_en';
    }
    SpeechRecognitionService.prototype.getConfig = function (data) {
        return this.http.post(this.baseUrl, data);
    };
    SpeechRecognitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
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

module.exports = __webpack_require__(/*! /Users/icoblr/Desktop/Beatthebot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
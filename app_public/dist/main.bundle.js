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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_list_home_list_component__ = __webpack_require__("../../../../../src/app/home-list/home-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_program_component__ = __webpack_require__("../../../../../src/app/program/program.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/programs', pathMatch: 'full' },
    { path: 'programs', component: __WEBPACK_IMPORTED_MODULE_2__home_list_home_list_component__["a" /* HomeListComponent */] },
    { path: 'programs/:name', component: __WEBPACK_IMPORTED_MODULE_3__program_program_component__["a" /* ProgramComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_data_service__ = __webpack_require__("../../../../../src/app/program-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__("../../../../../src/app/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_list_home_list_component__ = __webpack_require__("../../../../../src/app/home-list/home-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__program_program_component__ = __webpack_require__("../../../../../src/app/program/program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exercise_form_exercise_form_component__ = __webpack_require__("../../../../../src/app/exercise-form/exercise-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__log_form_log_form_component__ = __webpack_require__("../../../../../src/app/log-form/log-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_list_home_list_component__["a" /* HomeListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__program_program_component__["a" /* ProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_9__exercise_form_exercise_form_component__["a" /* ExerciseFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__log_form_log_form_component__["a" /* LogFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_12__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            __WEBPACK_IMPORTED_MODULE_5__program_data_service__["a" /* ProgramDataService */],
            { provide: __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app/app.component.ts":
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
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/exercise-form/exercise-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Exercise Form</h3>\r\n    <form  #exerciseForm=\"ngForm\" (ngSubmit)=\"onSubmit(exerciseForm)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\r\n        required\r\n        [(ngModel)]=\"name\" #mname=\"ngModel\">\r\n        <div *ngIf=\"mname.invalid && (mname.dirty || mname.touched)\"\r\n      class=\"alert alert-danger\">name can't be empty</div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"repstime\">Reps/time</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"repstime\" \r\n        required\r\n        [(ngModel)]=\"repstime\" name=\"repstime\" #mrepstime=\"ngModel\">\r\n        <div *ngIf=\"mrepstime.invalid && (mrepstime.dirty || mrepstime.touched)\"\r\n        class=\"alert alert-danger\">reps/time field can't be empty</div>  \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"sets\">Sets</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"sets\" \r\n        required\r\n        [(ngModel)]=\"sets\" name=\"sets\" #msets=\"ngModel\">\r\n        <div *ngIf=\"msets.invalid && (msets.dirty || msets.touched)\"\r\n        class=\"alert alert-danger\">sets number can't be empty</div>\r\n  \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"description\"\r\n        [(ngModel)]=\"description\" name=\"description\">\r\n        \r\n      </div>\r\n\r\n      \r\n      <button type=\"submit\" class=\"btn btn-success\" \r\n      [disabled]=\"!exerciseForm.control.valid\">\r\n      Add exercise</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/exercise-form/exercise-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exercise__ = __webpack_require__("../../../../../src/app/exercise.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExerciseFormComponent = (function () {
    function ExerciseFormComponent() {
        this.exerciseFormSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ExerciseFormComponent.prototype.onSubmit = function (form) {
        var exercise = new __WEBPACK_IMPORTED_MODULE_1__exercise__["a" /* Exercise */](form.value.name, form.value.repstime, form.value.sets, form.value.description);
        //sending new exercise data to program page
        this.exerciseFormSubmitted.emit(exercise);
        form.reset();
    };
    return ExerciseFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ExerciseFormComponent.prototype, "exerciseFormSubmitted", void 0);
ExerciseFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exercise-form',
        template: __webpack_require__("../../../../../src/app/exercise-form/exercise-form.component.html")
    }),
    __metadata("design:paramtypes", [])
], ExerciseFormComponent);

var _a;
//# sourceMappingURL=exercise-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/exercise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise(name, repstime, sets, description) {
        this.name = name;
        this.repstime = repstime;
        this.sets = sets;
        this.description = description;
    }
    return Exercise;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ "../../../../../src/app/home-list/home-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#program-name-input{\r\n    width:500px;\r\n}\r\n\r\n#add-btn , #program-name-input {\r\n    display:inline-block;\r\n}\r\n\r\n#add-program-box{\r\n    width:800px; \r\n    margin:0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-list/home-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3>Below you can see the workouts list</h3>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8 \" style=\"background: none\">\r\n      <ul class=\"list-group col-4 \">\r\n        <a *ngFor=\"let program of programs\" \r\n        [routerLink]=\"['/programs', program.name]\"\r\n        class=\"list-group-item\">\r\n        {{program.name}}\r\n        </a>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div id=\"add-program-box\">\r\n      <label>Add a new program:</label> \r\n      <input class=\"form-control col-5\" id=\"program-name-input\" #programName placeholder=\"program name\"/>\r\n      &nbsp;\r\n      <button class=\"btn btn-outline-success\" id=\"add-btn\"\r\n        (click)=\"add(programName.value); programName.value=''\">Add</button>\r\n    </div>  \r\n  </div>  \r\n  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home-list/home-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__program_data_service__ = __webpack_require__("../../../../../src/app/program-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeListComponent = (function () {
    function HomeListComponent(programDataService) {
        this.programDataService = programDataService;
    }
    HomeListComponent.prototype.ngOnInit = function () {
        this.getPrograms();
    };
    HomeListComponent.prototype.getPrograms = function () {
        var _this = this;
        this.programDataService
            .getPrograms()
            .then(function (foundPrograms) {
            _this.programs = foundPrograms;
        });
    };
    HomeListComponent.prototype.onSelect = function (program) {
        this.selectedProgram = program;
    };
    HomeListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.programDataService.create(name)
            .then(function (program) {
            _this.programs.push(program);
            _this.selectedProgram = null;
        });
    };
    return HomeListComponent;
}());
HomeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home-list',
        template: __webpack_require__("../../../../../src/app/home-list/home-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-list/home-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__program_data_service__["a" /* ProgramDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__program_data_service__["a" /* ProgramDataService */]) === "function" && _a || Object])
], HomeListComponent);

var _a;
//# sourceMappingURL=home-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/log-form/log-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Log Form</h3>\r\n    <form  #logForm=\"ngForm\" (ngSubmit)=\"onSubmit(logForm)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"username\" \r\n        required\r\n        [(ngModel)]=\"username\" name=\"username\" #musername=\"ngModel\">\r\n        <div *ngIf=\"musername.invalid && (musername.dirty || musername.touched)\"\r\n        class=\"alert alert-danger\">name can't be empty</div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"date\">Date of completion</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"date\" \r\n        required\r\n        [(ngModel)]=\"date\" name=\"date\" #mdate=\"ngModel\">\r\n        <div *ngIf=\"mdate.invalid && (mdate.dirty || mdate.touched)\"\r\n        class=\"alert alert-danger\">date field can't be empty</div>\r\n      </div>\r\n           \r\n      <button type=\"submit\" class=\"btn btn-success\"\r\n      [disabled]=\"!logForm.control.valid\">\r\n        Log workout</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/log-form/log-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log__ = __webpack_require__("../../../../../src/app/log.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogFormComponent = (function () {
    function LogFormComponent() {
        this.logFormSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LogFormComponent.prototype.onSubmit = function (form) {
        var log = new __WEBPACK_IMPORTED_MODULE_1__log__["a" /* Log */](form.value.username, form.value.date);
        //sending new log data to program page
        this.logFormSubmitted.emit(log);
        form.reset();
    };
    return LogFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], LogFormComponent.prototype, "logFormSubmitted", void 0);
LogFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'log-form',
        template: __webpack_require__("../../../../../src/app/log-form/log-form.component.html")
    }),
    __metadata("design:paramtypes", [])
], LogFormComponent);

var _a;
//# sourceMappingURL=log-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/log.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var Log = (function () {
    function Log(username, date) {
        this.username = username;
        this.date = date;
    }
    return Log;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../../../../../src/app/program-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramDataService = (function () {
    function ProgramDataService(http) {
        this.http = http;
        this.apiBaseUrl = '/api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ProgramDataService.prototype.getPrograms = function () {
        var someParam = 1;
        var url = "" + this.apiBaseUrl;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProgramDataService.prototype.getProgram = function (name) {
        var url = this.apiBaseUrl + "programs/" + name;
        return this.http.get(url)
            .toPromise()
            .then(function (program) { return program.json(); })
            .catch(this.handleError);
    };
    ProgramDataService.prototype.getProgram2 = function (name) {
        return this.getPrograms()
            .then(function (programs) { return programs.find(function (program) { return program.name === name; }); })
            .catch(this.handleError);
    };
    ProgramDataService.prototype.handleError = function (error) {
        console.error('sth has gone wrong', error);
        console.log('sth has gone wrong', error);
        return Promise.reject(error.message || error);
    };
    ProgramDataService.prototype.create = function (name) {
        return this.http
            .post(this.apiBaseUrl + "programs", JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //------------------exercises
    ProgramDataService.prototype.createExercise = function (programName, exercise) {
        return this.http
            .post(this.apiBaseUrl + "programs/" + programName + "/exercises", JSON.stringify({
            name: exercise.name,
            repstime: exercise.repstime,
            sets: exercise.sets,
            description: exercise.description
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //------------------logs
    ProgramDataService.prototype.createLog = function (programName, log) {
        return this.http
            .post(this.apiBaseUrl + "programs/" + programName + "/logs", JSON.stringify({
            username: log.username,
            date: log.date
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return ProgramDataService;
}());
ProgramDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProgramDataService);

var _a;
//# sourceMappingURL=program-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/program/program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#ex-name{\r\n    display:inline-block;\r\n    font-size:30px;    \r\n}\r\n#repstimesets{\r\n    display:inline-block;\r\n    \r\n}\r\n\r\n#ex-description{\r\n    font-size:20px;\r\n}\r\n\r\n#ex-list{\r\n    width:700px;\r\n    float:left;\r\n}\r\n#logs-list{\r\n    margin-left:710px;\r\n    width:300px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/program/program.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"program\">\r\n  <h2>{{program.name}} details</h2>\r\n  <!--exercises list-->    \r\n  <div id=\"ex-list\">\r\n    <h5>exercises list</h5>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let exercise of program.exercises\">\r\n        &nbsp;\r\n        <div id=\"ex-name\">{{exercise.name}}</div>\r\n        &nbsp;\r\n        <div id=\"repstimesets\">\r\n          repstime: {{exercise.repstime}} &nbsp; \r\n          sets: {{exercise.sets}} &nbsp; \r\n        </div>\r\n       \r\n        <br>\r\n        <div id=\"ex-description\">{{exercise.description}}</div>\r\n      </li>\r\n    </ul>\r\n    <br>\r\n  </div>\r\n  <div id=\"logs-list\" >\r\n    <h5>logs list</h5>\r\n    <ul class=\"logs list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let log of program.logs\">\r\n        {{log.username}}\r\n        <br>\r\n        {{log.date | date}}\r\n      </li>\r\n    </ul>\r\n    <br>\r\n    \r\n  </div>\r\n  <div class=\"clear\"></div>\r\n\r\n  <!--exercise form-->    \r\n  <div id=\"ex-form\">\r\n    <exercise-form (exerciseFormSubmitted)=\"exerciseFormSubmitted($event)\"></exercise-form>\r\n  </div>\r\n  <br>\r\n\r\n\r\n  <log-form (logFormSubmitted)=\"logFormSubmitted($event)\"></log-form>\r\n  <br>\r\n  <button class=\"btn btn-outline-success\" (click)=\"goBack()\">Back</button> \r\n \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/program/program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_data_service__ = __webpack_require__("../../../../../src/app/program-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgramComponent = (function () {
    function ProgramComponent(route, location, programDataService) {
        this.route = route;
        this.location = location;
        this.programDataService = programDataService;
    }
    ProgramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.programDataService.getProgram(params.get('name'));
        })
            .subscribe(function (program) {
            _this.program = program;
        });
    };
    ProgramComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProgramComponent.prototype.exerciseFormSubmitted = function (exercise) {
        var _this = this;
        this.programDataService
            .createExercise(this.program.name, exercise)
            .then(function (exercise) {
            _this.program.exercises.push(exercise);
        });
    };
    ProgramComponent.prototype.logFormSubmitted = function (log) {
        var _this = this;
        this.programDataService
            .createLog(this.program.name, log)
            .then(function (log) {
            _this.program.logs.push(log);
        });
    };
    return ProgramComponent;
}());
ProgramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'program',
        template: __webpack_require__("../../../../../src/app/program/program.component.html"),
        styles: [__webpack_require__("../../../../../src/app/program/program.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__program_data_service__["a" /* ProgramDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__program_data_service__["a" /* ProgramDataService */]) === "function" && _c || Object])
], ProgramComponent);

var _a, _b, _c;
//# sourceMappingURL=program.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
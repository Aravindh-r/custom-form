webpackJsonp([1,5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_form_list_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';
var CustomFormListComponent = (function () {
    function CustomFormListComponent(customFormListService, router, route) {
        this.customFormListService = customFormListService;
        this.router = router;
        this.route = route;
    }
    CustomFormListComponent.prototype.ngOnInit = function () {
        this.getRegisteredForms();
    };
    /*onScroll1(e) {
      console.log('clickldakfjalf');
    }*/
    CustomFormListComponent.prototype.getRegisteredForms = function () {
        var _this = this;
        this.dataInAPage = 10;
        this.page = 1;
        this.customFormListService.getRegisteredForms().subscribe(function (registeredForms) {
            _this.resultRegisteredForms = registeredForms;
            _this.resultant = _this.resultRegisteredForms;
            _this.resultRegisteredForms = _this.resultRegisteredForms.slice(0, _this.dataInAPage);
            console.log('resultant 1 st page', _this.resultRegisteredForms);
            _this.totalPages = registeredForms.length / _this.dataInAPage;
            //this.resultant=this.totalPages;
            _this.totalPages = Math.round(_this.totalPages);
            console.log('totalPages', _this.totalPages);
            // this.onScroll();
        });
    };
    CustomFormListComponent.prototype.onScroll = function () {
        console.log('onscroll before increement dataInAPage', this.dataInAPage);
        var scrolledValue = this.dataInAPage;
        console.log('scrolledValue', scrolledValue);
        this.dataInAPage += 10;
        console.log('onscroll after increement dataInAPage', this.dataInAPage);
        this.page = this.page + 1;
        console.log('Current page', this.page);
        if (this.page <= this.totalPages) {
            this.resultRegisteredForms = this.resultant.slice(0, this.dataInAPage);
            console.log('resultant 2nd page', this.resultRegisteredForms);
        }
        else {
            alert('no more pages to load');
        }
    };
    CustomFormListComponent.prototype.redirect = function (email) {
        this.router.navigate(['registeredform/' + email]);
    };
    CustomFormListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'custom-form-list',
            template: __webpack_require__(256),
            styles: [__webpack_require__(236)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__custom_form_list_service__["a" /* CustomFormListService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__custom_form_list_service__["a" /* CustomFormListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_form_list_service__["a" /* CustomFormListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
    ], CustomFormListComponent);
    return CustomFormListComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=custom-form-list.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MdSnackBar } from '@angular/material';
var CustomFormListService = (function () {
    function CustomFormListService(http) {
        this.http = http;
    }
    CustomFormListService.prototype.getRegisteredForms = function () {
        return this.http.get('api/v1/customform')
            .map(function (response) { return response.json(); });
    };
    CustomFormListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CustomFormListService);
    return CustomFormListService;
    var _a;
}());

//# sourceMappingURL=custom-form-list.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customform_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SucessDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomFormComponent = (function () {
    function CustomFormComponent(fb, dialog, customformService, router, route) {
        this.fb = fb;
        this.dialog = dialog;
        this.customformService = customformService;
        this.router = router;
        this.route = route;
        this.resultTemplateData = [];
        this.resulTemplateStateData = [];
        this.createForm();
    }
    CustomFormComponent.prototype.createForm = function () {
        this.customForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[a-z0-9.@_-]{14,40}')]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[A-Za-z.-]{5,25}')]],
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[A-Za-z]{4,20}')]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[A-Za-z]{1,10}')]],
            dob: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]],
            addressline1: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]],
            addressline2: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]],
            state: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]],
            city: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[A-Za-z.-]{5,25}')]],
            about: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[A-Za-z0-9.@_/,><={( )!$%^&*`]{30,500}')]],
            pincode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('[0-9]{6,6}')]],
            termscondition: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
        });
    };
    CustomFormComponent.prototype.ngOnInit = function () {
        this.getTemplateData();
    };
    CustomFormComponent.prototype.onsubmit = function (userdata) {
        var _this = this;
        var newFormObj = userdata.value;
        var dobirth = newFormObj.dob;
        var birth = String(this.dateModel).substring(0, 15);
        // get formControlName value as seperate from fromGroup
        console.log(newFormObj);
        var email = newFormObj.email;
        var username = newFormObj.username;
        var firstname = newFormObj.firstname;
        var lastname = newFormObj.lastname;
        var dob = birth;
        var state = newFormObj.state['state'];
        var city = newFormObj.city;
        var addressline1 = newFormObj.addressline1;
        var addressline2 = newFormObj.addressline2;
        var pincode = newFormObj.pincode;
        var about = newFormObj.about;
        var newFormData = { email: email, username: username, firstname: firstname, lastname: lastname, state: state, city: city, dob: dob, addressline1: addressline1, addressline2: addressline2, pincode: pincode, about: about };
        this.customformService.submitFormData(newFormData).subscribe(function (data) {
            if (data.status === 200) {
                _this.dialog.open(SucessDialog);
            }
        });
    };
    CustomFormComponent.prototype.getTemplateData = function () {
        var _this = this;
        this.customformService.getTemplateData().subscribe(function (tempateData) {
            _this.resultTemplateData = tempateData;
        });
    };
    CustomFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'form-custom-form',
            template: __webpack_require__(257),
            styles: [__webpack_require__(237)],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customform_service__["a" /* CustomformService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__customform_service__["a" /* CustomformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__customform_service__["a" /* CustomformService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
    ], CustomFormComponent);
    return CustomFormComponent;
    var _a, _b, _c, _d, _e;
}());

var SucessDialog = (function () {
    function SucessDialog() {
    }
    SucessDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'sucsess-dialog',
            template: "<p>Form Submitted Sucessfully...!!!!</p>",
        }),
        __metadata("design:paramtypes", [])
    ], SucessDialog);
    return SucessDialog;
}());

//# sourceMappingURL=custom-form.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomformService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomformService = (function () {
    function CustomformService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    CustomformService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
    };
    CustomformService.prototype.getTemplateData = function () {
        return this.http.get("api/v1/templates/state")
            .map(function (response) { return response.json(); });
    };
    CustomformService.prototype.getTemplateStateData = function (state) {
        return this.http.get('api/v1/templates/' + state + '/city')
            .map(function (response) { return response.json(); });
    };
    CustomformService.prototype.submitFormData = function (newFormData) {
        var _this = this;
        //console.log('inside serveice',newFormData);
        // const headers = new Headers();
        //         headers.append('Content-Type', 'application/json');
        return this.http.post('api/v1/customform', newFormData)
            .catch(function (err) {
            _this.snackBar.open('Please try again later..!!!', 'internal server error', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        });
    };
    CustomformService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdSnackBar */]) === "function" && _b || Object])
    ], CustomformService);
    return CustomformService;
    var _a, _b;
}());

//# sourceMappingURL=customform.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registered_form_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisteredFormComponent = (function () {
    function RegisteredFormComponent(registeredFormService, router, route) {
        this.registeredFormService = registeredFormService;
        this.router = router;
        this.route = route;
    }
    RegisteredFormComponent.prototype.ngOnInit = function () {
        this.getRegisteredForm(this.route.snapshot.params['email']);
    };
    RegisteredFormComponent.prototype.getRegisteredForm = function (email) {
        var _this = this;
        this.registeredFormService.getRegisteredForm(email).subscribe(function (registeredForm) {
            _this.resultRegisteredForm = registeredForm;
            console.log(registeredForm);
            console.log(_this.resultRegisteredForm);
        });
    };
    RegisteredFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'registered-form',
            template: __webpack_require__(259),
            //styleUrls: ['./registered-form.component.css'],
            providers: [__WEBPACK_IMPORTED_MODULE_2__registered_form_service__["a" /* RegisteredFormService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__registered_form_service__["a" /* RegisteredFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__registered_form_service__["a" /* RegisteredFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
    ], RegisteredFormComponent);
    return RegisteredFormComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=registered-form.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MdSnackBar } from '@angular/material';
var RegisteredFormService = (function () {
    function RegisteredFormService(http) {
        this.http = http;
    }
    RegisteredFormService.prototype.getRegisteredForm = function (email) {
        return this.http.get('api/v1/customform/' + email)
            .map(function (response) { return response.json(); });
    };
    RegisteredFormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], RegisteredFormService);
    return RegisteredFormService;
    var _a;
}());

//# sourceMappingURL=registered-form.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(175);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_form_custom_form_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_form_list_custom_form_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registered_form_registered_form_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/customform',
        pathMatch: 'full'
    },
    {
        path: 'customform',
        component: __WEBPACK_IMPORTED_MODULE_2__custom_form_custom_form_component__["a" /* CustomFormComponent */]
    },
    {
        path: 'customformlist',
        component: __WEBPACK_IMPORTED_MODULE_3__custom_form_list_custom_form_list_component__["a" /* CustomFormListComponent */]
    },
    {
        path: 'registeredform/:email',
        component: __WEBPACK_IMPORTED_MODULE_4__registered_form_registered_form_component__["a" /* RegisteredFormComponent */]
    },
    { path: '**', redirectTo: '/customform' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'custom-root',
            template: __webpack_require__(255),
            styles: [__webpack_require__(235)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_markdown__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__custom_form_customform_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__custom_form_custom_form_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_form_list_custom_form_list_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__custom_form_list_custom_form_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menu_bar_menu_bar_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__registered_form_registered_form_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__registered_form_registered_form_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_infinite_scroll__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { InfiniteScrollModule } from 'angular2-infinite-scroll';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__custom_form_custom_form_component__["a" /* CustomFormComponent */], __WEBPACK_IMPORTED_MODULE_14__custom_form_list_custom_form_list_component__["a" /* CustomFormListComponent */], __WEBPACK_IMPORTED_MODULE_12__custom_form_custom_form_component__["b" /* SucessDialog */], __WEBPACK_IMPORTED_MODULE_15__menu_bar_menu_bar_component__["a" /* MenuBar */], __WEBPACK_IMPORTED_MODULE_16__registered_form_registered_form_component__["a" /* RegisteredFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_markdown__["a" /* MarkdownModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_infinite_scroll__["a" /* InfiniteScrollModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__custom_form_custom_form_component__["a" /* CustomFormComponent */], __WEBPACK_IMPORTED_MODULE_12__custom_form_custom_form_component__["b" /* SucessDialog */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__custom_form_customform_service__["a" /* CustomformService */], __WEBPACK_IMPORTED_MODULE_13__custom_form_list_custom_form_list_service__["a" /* CustomFormListService */], __WEBPACK_IMPORTED_MODULE_17__registered_form_registered_form_service__["a" /* RegisteredFormService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuBar = (function () {
    function MenuBar() {
        this.routinglabels = [
            { logo: 'customform', link: 'customform', label: 'Custom Registration Form' },
            { logo: 'customformlist', link: 'customformlist', label: 'Registrated Forms' }
        ];
    }
    MenuBar.prototype.ngOnInit = function () { };
    MenuBar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'menu-bar',
            template: __webpack_require__(258)
            //styleUrls: ['./menu-bar.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MenuBar);
    return MenuBar;
}());

//# sourceMappingURL=menu-bar.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<menu-bar></menu-bar>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n\n  <!-- <h3 md-Header>LIST OF FORMS</h3> -->\n  <!-- <div infiniteScroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"400\" (scrolled)=\"onScroll()\"> -->\n    <!-- <div> -->\n    <md-list>\n      <!-- <button (scroll)=\"onClick($event)\">click me</button> -->\n      <!-- <div infinite-scroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"400\" (scrolled)=\"onScroll1()\" class=\"results\"> -->\n      <!--  <div data-infinite-scroll debounce  [infiniteScrollDistance]=\"2\"  [infiniteScrollThrottle]=\"300\" (scrolled)=\"onScroll1()\"> -->\n      <div *ngFor=\"let form of resultRegisteredForms\" (click)=\"redirect(form.email)\">\n        <md-list-item>\n          <!-- <img md-list-avatar src=\"...\" alt=\"Desc 1\"> -->\n          <md-icon md-list-icon><i class=\"material-icons\">account_circle</i></md-icon>\n          <!-- <i class=\"material-icons\">contact_mail</i> -->\n          <h3 md-line>{{form.username}}</h3>\n          <h3 md-line>{{form.email}}</h3>\n        </md-list-item>\n        <!-- </div> -->\n      </div>\n    </md-list>\n  <!-- </div> -->\n</div>\n<button (click)=\"onScroll()\">load more.....!!!!</button>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\" fx-flex-fill>\n<!--   <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxFlex=\"100\" fxLayoutWrap fx-flex-fill> -->\n    <md-card class=\"example-card\" >\n      <md-card-content align=\"start center\">\n       <!--  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxFlex=\"100\" fxLayoutWrap>\n          <div fxLayout=\"column\" fxFlex=\"10\"></div> -->\n          <form class=\"container\" fxFlex=\"80\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlexFill [formGroup]=\"customForm\" (ngSubmit)=\"onsubmit(customForm) \" align=\"start center\">\n            <!-- Email id -->\n            <md-input-container>\n              <input type=\"email\" mdInput placeholder=\"Enter Email id\" minlength=\"14\" formControlName=\"email\">\n              <md-hint align=\"start\" class=\"full-width\">\n                <div *ngIf=\"customForm.get('email').hasError('required') && customForm.get('email').touched\" class=\"errorStyle\">\n                  Email is required\n                </div>\n                <div *ngIf=\"customForm.get('email').hasError('pattern') && customForm.get('email')\" class=\"errorStyle\">\n                  Invalid email,please Enter a proper emailid\n                </div>\n              </md-hint>\n            </md-input-container>\n            <!-- Username -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"text\" mdInput placeholder=\"Enter Username\" formControlName=\"username\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('username').hasError('required') && customForm.get('username').touched\" class=\"errorStyle\">\n                    Username is required\n                  </div>\n                  <div *ngIf=\"customForm.get('username').hasError('pattern') && customForm.get('username')\" class=\"errorStyle\">\n                    Invalid username,length of username should be more than 10 characters\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- Firstname -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"text\" mdInput placeholder=\"Enter Firstname\" formControlName=\"firstname\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('firstname').hasError('required') && customForm.get('firstname').touched\" class=\"errorStyle\">\n                    Username is required\n                  </div>\n                  <div *ngIf=\"customForm.get('firstname').hasError('pattern') && customForm.get('username')\" class=\"errorStyle\">\n                    Invalid firstname,length of firstname have atleast 4 characters,No special characters allowed\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- Lastname -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"text\" mdInput placeholder=\"Enter Lastname\" formControlName=\"lastname\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('lastname').hasError('required') && customForm.get('lastname').touched\" class=\"errorStyle\">\n                    lastname is required\n                  </div>\n                  <div *ngIf=\"customForm.get('lastname').hasError('pattern') && customForm.get('lastname')\" class=\"errorStyle\">\n                    Invalid lastname,length of lastname should have atleast 1 characters,No special characters allowed\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- Date Of Birth -->\n            <div>\n              <md-input-container>\n                <input [(ngModel)]=\"dateModel\" mdInput [mdDatepicker]=\"picker\" placeholder=\"Date of Birth\" formControlName=\"dob\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('dob').hasError('required') && customForm.get('dob').touched\" class=\"errorStyle\">\n                    dob is required\n                  </div>\n                </md-hint>\n                <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n                <md-datepicker touchUi=\"true\" #picker></md-datepicker>\n              </md-input-container>\n            </div>\n            <!-- Enter DoorNo/Flat & Area -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"text\" mdInput placeholder=\"Enter DoorNo/Flat & Area\" formControlName=\"addressline1\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('addressline1').hasError('required') && customForm.get('addressline1').touched\" class=\"errorStyle\">\n                    field is required\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- Landmark -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"text\" mdInput placeholder=\"Enter Landmark\" formControlName=\"addressline2\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('addressline2').hasError('required') && customForm.get('addressline2').touched\" class=\"errorStyle\">\n                    Landmark is required\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- Enter city -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"text\" mdInput placeholder=\"Enter city\" formControlName=\"city\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('city').hasError('required') && customForm.get('city').touched\" class=\"errorStyle\">\n                    city is required\n                  </div>\n                  <div *ngIf=\"customForm.get('city').hasError('pattern') && customForm.get('city')\" class=\"errorStyle\">\n                    Invalid city,please Enter a proper city\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- Select State -->\n            <div fxLayout.md=\"column\">\n              <md-select placeholder=\"Select State\" formControlName=\"state\">\n                <md-option *ngFor=\"let states of resultTemplateData\" [value]='states'>\n                  {{ states.state}}\n                </md-option>\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('state').hasError('required') && customForm.get('state').touched\" class=\"errorStyle\">\n                    state is required\n                  </div>\n                </md-hint>\n                <div fxLayoutgap.md=\"column\">\n                </div>\n              </md-select>\n            </div>\n            <!-- Pincode -->\n            <div fxLayout.md=\"column\">\n              <md-input-container>\n                <input type=\"\" mdInput placeholder=\"Pincode\" maxlength=\"6\" formControlName=\"pincode\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('pincode').hasError('required') && customForm.get('pincode').touched\" class=\"errorStyle\">\n                    Pincode is required\n                  </div>\n                  <div *ngIf=\"customForm.get('pincode').hasError('pattern') && customForm.get('pincode')\" class=\"errorStyle\">\n                    Invalid Pincode,length of Pincode should have 6 number without any special characters\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- about -->\n            <div fxLayout.xs=\"row\">\n              <md-input-container class=\"example-full-width\">\n                <textarea mdInput placeholder=\"write about youself\" formControlName=\"about\"></textarea>\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"customForm.get('about').hasError('about') && customForm.get('about').touched\" class=\"errorStyle\">\n                    Field is required\n                  </div>\n                  <div *ngIf=\"customForm.get('about').hasError('pattern') && customForm.get('about')\" class=\"errorStyle\">\n                    Field should aleast contain 30 character special characters (.@_-)\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n            <!-- termscondition -->\n            <div fxLayout.md=\"column\">\n              <md-checkbox color=\"primary\" formControlName=\"termscondition\">I Agreed !!! Terms and Condition</md-checkbox>\n              <md-hint align=\"start\" class=\"full-width\">\n                <div *ngIf=\"customForm.get('termscondition').hasError('termscondition') && customForm.get('termscondition').touched\" class=\"errorStyle\">\n                  Should Agree term and condtion to submit form\n                </div>\n              </md-hint>\n            </div>\n            <!--button  -->\n            <div fxLayout.md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\n              <button md-button>Cancel</button>\n              <button md-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!customForm.valid\">Submit</button>\n            </div>\n          </form>\n          <div fxLayout=\"column\" fxFlex=\"10\"></div>\n        <!-- </div> -->\n      </md-card-content>\n    </md-card>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div [class.dark]=\"isDarkTheme\">\n  <md-sidenav-container fullscreen class=\"sidenav-container\">\n    <md-toolbar color=\"primary\" class=\"mat-elevation-z2\">\n      <span class=\"spacer\"></span>\n      <div class=\"mdc-typography--display4\">\n        <button md-button class=\"hidden-sm-down nav-button\" *ngFor=\"let item of routinglabels\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\n          {{item.label}}\n        </button>\n      </div>\n    </md-toolbar>\n    <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n      <div fxFlex>\n        <router-outlet></router-outlet>\n      </div>\n      </div>\n  </md-sidenav-container>\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n    <div fxFlex=\"50%\" *ngFor=\"let data of resultRegisteredForm\" fx-flex-fill fxLayoutAlign=\"center\">\n      <md-card>\n        <md-list>\n          <md-list-item>\n            <h3 md-line>{{data.firstname}} Profile</h3>\n          </md-list-item>\n          <md-list-item>\n            <h3 md-line>Registered email is : {{data.email}} </h3>\n          </md-list-item>\n          <md-list-item>\n            <h3 md-line>Username : {{data.username}} </h3>\n          </md-list-item>\n          <md-list-item>\n            <h3 md-line>Users First Name is : {{data.firstname}} </h3>\n          </md-list-item>\n          <md-list-item>\n            <h3 md-line>FullName : {{data.firstname}}  {{data.lastname}} </h3>\n          </md-list-item>\n          <md-list-item>\n            <h3 md-line>Date Of Birth : {{data.dob}} </h3>\n          </md-list-item>\n          <md-list-item>\n            <h3 md-line>Address for Commnunication: {{data.addressline1}} ,{{data.addressline2}} ,{{data.city}},{{data.state}},  {{data.pincode}}</h3>\n          </md-list-item>\n           <md-list-item>\n            <h3 md-line>About me : {{data.about}}</h3>\n          </md-list-item>\n        </md-list>\n      </md-card>\n    </div>\n</div>"

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ })

},[304]);
//# sourceMappingURL=main.bundle.js.map
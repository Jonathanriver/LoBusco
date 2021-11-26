(self["webpackChunkLoBusco"] = self["webpackChunkLoBusco"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 9366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 6446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 1659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 9366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 6446);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 6446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 419);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 4494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DashboardPage = class DashboardPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.slideOpts2 = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 4494:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  border: 0px !important;\n  border-bottom-color: transparent !important;\n  background-image: none !important;\n  border-bottom: none !important;\n}\n\n.tarjeta {\n  background-size: cover;\n  background-position: 100% 100%;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBRUksc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL0ltYWdlbmVzL1RBUkpFVEFcXCBQUk9EVUNUT1NcXCBIT01FLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 419:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\"--box-shadow: none !important;\" class=\"ion-no-border\">\n    <ion-toolbar style=\"--background: #E8320F !important;border-radius: -25px;--box-shadow: none !important;\">\n        <ion-buttons slot=\"start\" style=\"color: white;\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title style=\"font-family: 'Berlin_Sans';margin-left: 90px;color: white;\">LoBusco</ion-title>\n        <ion-icon slot=\"end\" name=\"search-outline\" style=\"transform: rotate(90deg) !important;font-size: 20px;margin-right: 12px;color: white;\"></ion-icon>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content style=\"--background: #E8320F;\">\n    <div class=\"ion-text-center\">\n        <ion-slides [options]=\"slideOpts\">\n            <ion-slide>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"7\" class=\"ion-text-left\">\n                            <p style=\"color: white;font-family: 'Berlin_Sans'; font-size: 25px;\">ASADERO JARRIS 20% OFF\n                            </p>\n                            <ion-button color=\"light\" shape=\"round\" style=\"--color: #E8320F !important;--ion-color-contrast:#E8320F !important;font-size: 15px;font-weight: bold;\">\n                                ¡Reservalo ya!</ion-button>\n                        </ion-col>\n                        <ion-col size=\"5\">\n                            <img src=\"../../../assets/Imagenes/BURBUJA PRODUCTO HOME.png\">\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n            <ion-slide>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"7\" class=\"ion-text-left\">\n                            <p style=\"color: white;font-family: 'Berlin_Sans'; font-size: 25px;\">ASADERO JARRIS 20% OFF\n                            </p>\n                            <ion-button color=\"light\" shape=\"round\" style=\"--color: #E8320F !important;--ion-color-contrast:#E8320F !important;font-size: 15px;font-weight: bold;\">\n                                ¡Reservalo ya!</ion-button>\n                        </ion-col>\n                        <ion-col size=\"5\">\n                            <img src=\"../../../assets/Imagenes/BURBUJA PRODUCTO HOME.png\">\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n            <ion-slide>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"7\" class=\"ion-text-left\">\n                            <p style=\"color: white;font-family: 'Berlin_Sans'; font-size: 25px;\">ASADERO JARRIS 20% OFF\n                            </p>\n                            <ion-button color=\"light\" shape=\"round\" style=\"--color: #E8320F !important;--ion-color-contrast:#E8320F !important;font-size: 15px;font-weight: bold;\">\n                                ¡Reservalo ya!</ion-button>\n                        </ion-col>\n                        <ion-col size=\"5\">\n                            <img src=\"../../../assets/Imagenes/BURBUJA PRODUCTO HOME.png\">\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n        </ion-slides>\n\n\n    </div>\n    <div style=\"background: white;border-radius: 46px 46px 0px 0px;height: 100%;\">\n        <div class=\"ion-text-center\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <img src=\"../../../assets/Imagenes/CATEGORIA COMIDA.png\">\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <img src=\"../../../assets/Imagenes/CATEGORIA ELECTRONICA.png\">\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <img src=\"../../../assets/Imagenes/CATEGORIA MUEBLES.png\">\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <img src=\"../../../assets/Imagenes/CATEGORIA SALUD.png\">\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div class=\"ion-text-left\">\n            <h1 style=\"font-family:  'Berlin_Sans';margin: 10px;\">\n                Busco Comida\n            </h1>\n            <ion-item lines=\"none\">\n                <ion-card style=\"width: 100%;box-shadow: 3px 3px 5px rgb(0 0 0 / 37%)\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <img src=\"../../../assets/Imagenes/Danny Broaster.png\" style=\"width: 80px;border: solid 4px white;height: 80px;border-radius: 60px;box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.37);\">\n                            </ion-col>\n                            <ion-col size=\"6\" class=\"ion-text-left\">\n                                <p style=\"font-family: 'Berlin_Sans';color: black;font-size: 20px;\">Danny Broaster</p>\n                                <span><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\"style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\"style=\"color: yellow;\"></ion-icon></span>\n                            </ion-col>\n                            <ion-col size=\"2\" style=\"vertical-align: middle;\">\n                                <ion-icon name=\"chevron-forward-circle-outline\" style=\"margin-top: 30px;margin-right: 2px;font-size: 25px;color: #E8320F;\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-card>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-card style=\"width: 100%;box-shadow: 3px 3px 5px rgb(0 0 0 / 37%)\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <img src=\"../../../assets/Imagenes/Danny Broaster.png\" style=\"width: 80px;border: solid 4px white;height: 80px;border-radius: 60px;box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.37);\">\n                            </ion-col>\n                            <ion-col size=\"6\" class=\"ion-text-left\">\n                                <p style=\"font-family: 'Berlin_Sans';color: black;font-size: 20px;\">Danny Broaster</p>\n                                <span><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\"style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\"style=\"color: yellow;\"></ion-icon></span>\n                            </ion-col>\n                            <ion-col size=\"2\" style=\"vertical-align: middle;\">\n                                <ion-icon name=\"chevron-forward-circle-outline\" style=\"margin-top: 30px;margin-right: 2px;font-size: 25px;color: #E8320F;\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-card>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-card style=\"width: 100%;box-shadow: 3px 3px 5px rgb(0 0 0 / 37%)\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <img src=\"../../../assets/Imagenes/Danny Broaster.png\" style=\"width: 80px;border: solid 4px white;height: 80px;border-radius: 60px;box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.37);\">\n                            </ion-col>\n                            <ion-col size=\"6\" class=\"ion-text-left\">\n                                <p style=\"font-family: 'Berlin_Sans';color: black;font-size: 20px;\">Danny Broaster</p>\n                                <span><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\" style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\"style=\"color: yellow;\"></ion-icon><ion-icon name=\"star\"style=\"color: yellow;\"></ion-icon></span>\n                            </ion-col>\n                            <ion-col size=\"2\" style=\"vertical-align: middle;\">\n                                <ion-icon name=\"chevron-forward-circle-outline\" style=\"margin-top: 30px;margin-right: 2px;font-size: 25px;color: #E8320F;\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-card>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map
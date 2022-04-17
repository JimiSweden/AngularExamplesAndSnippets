"use strict";
(self["webpackChunkAngularExamplesAndSnippets"] = self["webpackChunkAngularExamplesAndSnippets"] || []).push([["main"],{

/***/ 1224:
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 0, consts: [["color", "primary", 1, "wrap-auto-height"], [1, "flexible-spacer"], [1, "flex"], ["mat-icon-button", "", "aria-label", "share with friends", 1, ""], ["mat-button", "", "aria-label", "github repository for this example app", "href", "https://github.com/JimiSweden/AngularExamplesAndSnippets", "target", "_blank"], [1, "mat-button-content-vertical-align-middle"], ["src", "./assets/icons/github-circle-white-transparent.svg", "alt", "github repository for this example app", 1, "logo-icon-image"], ["mat-button", "", "aria-label", "github repository for this example app", "href", "https://www.linkedin.com/in/jimi-lee-friis-b729155/", "target", "_blank"], ["src", "./assets/icons/jimi-avatar-hat.jfif", "alt", "", 1, "rounded-image", "logo-icon-image"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Angular Examples and Snippets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4)(9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7)(13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " LinkedIn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media (max-width: 599px) {\n  .wrap-auto-height[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    height: auto;\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n  }\n}\n\n.flexible-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.logo-icon-image[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEFuZ3VsYXIlMjAxMyUyMEV4YW1wbGVzQW5kU25pcHBldHNcXEFuZ3VsYXJFeGFtcGxlc0FuZFNuaXBwZXRzXFxzcmNcXGFwcFxcYXBwLWhlYWRlclxcYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxtRkFBQTtBQUVBO0VBQ0UsYUFBQTtBQ0RGO0FES0E7d0NBQUE7QUFFQTtFQUVBO0lBQ00sZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQUEsc0JBQUE7RUNISjtBQUNGO0FETUE7Ozs7Ozs7Q0FBQTtBQVFBO0VBQ0UsY0FBQTtBQ0pGO0FET0Esb0RBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0pGIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogbm90ZTogc3R5bGVzIG5vdCBmb3VuZCBoZXJlIGFyZSBwcm9iYWJseSBmb3VuZCBpbiB0aGUgZ2xvYmFsICdhcHAvc3R5bGVzLnNjc3MnICovXHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi8qIG92ZXJyaWRlIGRlZmF1bHQgJ21hdC10b29sYmFyLXJvdydcclxuICogdG8gcHVzaCByaWdodCBidXR0b25zIG9uIHNlY29uZCByb3cgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbi8vIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuLndyYXAtYXV0by1oZWlnaHQge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qIHVzZSB0aGlzIHRvIGFkZCBmbGV4aWJsZSBzcGFjaW5nIGJldHdlZW4gY29udGVudFxyXG5leGFtcGxlOlxyXG48ZGl2PlxyXG4gIDxhLXVzZWZ1bC10YWcgLz5cclxuICA8c3BhbiBjbGFzcz1cImZsZXhpYmxlLXNwYWNlclwiPjwvc3Bhbj5cclxuICA8YS11c2VmdWwtdGFnIC8+XHJcbjxkaXY+XHJcbiovXHJcbi5mbGV4aWJsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4vKiB1c2VkIGluIG1hdC1idXR0b25zIHRvIGZpdCBpbWFnZXMgdXNlZCBhcyBpY29ucyAqL1xyXG4ubG9nby1pY29uLWltYWdlIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luOiAwIDRweCAzcHggMDtcclxufVxyXG5cclxuIiwiLyogbm90ZTogc3R5bGVzIG5vdCBmb3VuZCBoZXJlIGFyZSBwcm9iYWJseSBmb3VuZCBpbiB0aGUgZ2xvYmFsICdhcHAvc3R5bGVzLnNjc3MnICovXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIG92ZXJyaWRlIGRlZmF1bHQgJ21hdC10b29sYmFyLXJvdydcbiAqIHRvIHB1c2ggcmlnaHQgYnV0dG9ucyBvbiBzZWNvbmQgcm93ICovXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLndyYXAtYXV0by1oZWlnaHQge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG59XG4vKiB1c2UgdGhpcyB0byBhZGQgZmxleGlibGUgc3BhY2luZyBiZXR3ZWVuIGNvbnRlbnRcbmV4YW1wbGU6XG48ZGl2PlxuICA8YS11c2VmdWwtdGFnIC8+XG4gIDxzcGFuIGNsYXNzPVwiZmxleGlibGUtc3BhY2VyXCI+PC9zcGFuPlxuICA8YS11c2VmdWwtdGFnIC8+XG48ZGl2PlxuKi9cbi5mbGV4aWJsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLyogdXNlZCBpbiBtYXQtYnV0dG9ucyB0byBmaXQgaW1hZ2VzIHVzZWQgYXMgaWNvbnMgKi9cbi5sb2dvLWljb24taW1hZ2Uge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDA7XG59Il19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/navigation.service */ 9565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// import { ButtonToggleTemplateExampleComponent } from './components/button-toggle-template-example/button-toggle-template-example.component';
// import { ButtonToggleExamplesPageComponent } from './components/button-toggle-examples-page/button-toggle-examples-page.component';
// import { ExamplesPageComponent } from './pages/examples-page/examples-page.component';
// import { ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent } from './examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component';
// import { ButtonToggleDynamicTemplateImplementationExampleComponent } from './examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component';



const routes = [
    // examplesRouteLinks.defaultRoute,
    // ...examplesRouteLinks.routes,
    ...(0,_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.getExamplesRoutes)(),
    /** below are the routes as 'normal'
     * before using configuration from 'exampleRouteLinks' in navigation service
     * keeping for reference */
    /*
    { path: '', redirectTo: 'examples', pathMatch: 'full' },
  
    { path: 'examples', component: ExamplesPageComponent, children: [
        {
          path: '', redirectTo: 'button-toggle',
          pathMatch: 'full'
        },
        {
          path: 'button-toggle',
          component: ButtonToggleExamplesPageComponent
        },
        {
          path: 'button-toggle-template',
          component: ButtonToggleTemplateExampleComponent
        },
        {
          path: 'button-toggle-dynamic',
          component: ButtonToggleDynamicTemplateImplementationExampleComponent
        },
        {
          path: 'button-toggle-dynamic-with-service',
          component: ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent
        },
        { path: '**', redirectTo: 'button-toggle' },
      ]
    },
    */
    //todo: update with start-page later
    { path: '**', redirectTo: 'examples' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header/app-header.component */ 1224);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'AngularExamplesAndSnippets';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header/app-header.component */ 1224);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _components_button_toggle_template_example_button_toggle_template_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button-toggle-template-example/button-toggle-template-example.component */ 5577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_button_toggle_dynamic_template_button_toggle_dynamic_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button-toggle-dynamic-template/button-toggle-dynamic-template.component */ 6368);
/* harmony import */ var _pages_examples_page_button_toggle_examples_page_button_toggle_examples_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/examples-page/button-toggle-examples-page/button-toggle-examples-page.component */ 3608);
/* harmony import */ var _examples_button_toggle_dynamic_template_implementation_example_button_toggle_dynamic_template_implementation_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component */ 8863);
/* harmony import */ var _examples_button_toggle_dynamic_template_implementation_example_with_data_from_service_button_toggle_dynamic_template_implementation_example_with_data_from_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component */ 1016);
/* harmony import */ var _components_navigation_side_nav_mat_nav_list_side_nav_mat_nav_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation/side-nav-mat-nav-list/side-nav-mat-nav-list.component */ 7770);
/* harmony import */ var _pages_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/examples-page/examples-page.component */ 7128);
/* harmony import */ var _components_table_table_with_custom_filtering_table_with_custom_filtering_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/table/table-with-custom-filtering/table-with-custom-filtering.component */ 9243);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shorten.pipe */ 2308);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 2816);
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_button_toggle_template_example_button_toggle_template_example_component__WEBPACK_IMPORTED_MODULE_3__.ButtonToggleTemplateExampleComponent,
        _components_button_toggle_dynamic_template_button_toggle_dynamic_template_component__WEBPACK_IMPORTED_MODULE_4__.ButtonToggleDynamicTemplateComponent,
        _pages_examples_page_button_toggle_examples_page_button_toggle_examples_page_component__WEBPACK_IMPORTED_MODULE_5__.ButtonToggleExamplesPageComponent,
        _examples_button_toggle_dynamic_template_implementation_example_button_toggle_dynamic_template_implementation_example_component__WEBPACK_IMPORTED_MODULE_6__.ButtonToggleDynamicTemplateImplementationExampleComponent,
        _examples_button_toggle_dynamic_template_implementation_example_with_data_from_service_button_toggle_dynamic_template_implementation_example_with_data_from_service_component__WEBPACK_IMPORTED_MODULE_7__.ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent,
        _pages_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_9__.ExamplesPageComponent,
        _components_navigation_side_nav_mat_nav_list_side_nav_mat_nav_list_component__WEBPACK_IMPORTED_MODULE_8__.SideNavMatNavListComponent,
        _components_table_table_with_custom_filtering_table_with_custom_filtering_component__WEBPACK_IMPORTED_MODULE_10__.TableWithCustomFilteringComponent,
        _shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_11__.ShortenPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_pages_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_9__.ExamplesPageComponent, [_components_navigation_side_nav_mat_nav_list_side_nav_mat_nav_list_component__WEBPACK_IMPORTED_MODULE_8__.SideNavMatNavListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterOutlet], []);


/***/ }),

/***/ 6368:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/button-toggle-dynamic-template/button-toggle-dynamic-template.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonToggleDynamicTemplateComponent": () => (/* binding */ ButtonToggleDynamicTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);








function ButtonToggleDynamicTemplateComponent_mat_button_toggle_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", button_r1.value)("matTooltip", button_r1.tooltip ? button_r1.tooltip : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](button_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](button_r1.css);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r1.icon, " ");
} }
const _c0 = ["*"];
/** imagine building the button-groups from your real backend,
 * perhaps saved from a UI building your structure
 */
class ButtonToggleDynamicTemplateComponent {
    constructor() {
        /** you can read the selected group-value here,
         * or you can implement your own subscription on the FormControl being passed */
        this.selectedValueEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.formControlSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    }
    ngOnDestroy() {
        this.formControlSubscription.unsubscribe();
    }
    ngOnInit() {
        var _a, _b;
        /** if not set as input, use value from groupData if it exists */
        if (!this.name) {
            this.name = (_a = this.toggleGroupData.name) !== null && _a !== void 0 ? _a : '';
        }
        /** if not set as input, use value from groupData if it exists */
        if (!this.tooltip) {
            this.tooltip = (_b = this.toggleGroupData.tooltip) !== null && _b !== void 0 ? _b : '';
        }
        /** subscribe to changes for logging */
        this.formControlSubscription = this.toggleGroupData.formControl.valueChanges
            .subscribe((value) => {
            this.selectedValueEventEmitter.next(value);
            this.logChangedSelectedToConsole(value);
        });
    }
    /** logs changes if enabled from input */
    logChangedSelectedToConsole(value) {
        var _a;
        if (!this.logChangesToConsole)
            return;
        let logValue = value === "" ? "'' (empty string)" : value;
        console.debug(`${logValue} | selected choice from '${(_a = this.toggleGroupData.name) !== null && _a !== void 0 ? _a : '(name not set)'}' button-toggle-group :  | ${new Date()}`);
    }
}
ButtonToggleDynamicTemplateComponent.ɵfac = function ButtonToggleDynamicTemplateComponent_Factory(t) { return new (t || ButtonToggleDynamicTemplateComponent)(); };
ButtonToggleDynamicTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonToggleDynamicTemplateComponent, selectors: [["button-toggle-dynamic-template"]], inputs: { name: "name", tooltip: "tooltip", logChangesToConsole: "logChangesToConsole", toggleGroupData: "toggleGroupData" }, outputs: { selectedValueEventEmitter: "selectedValueEventEmitter" }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [[1, "button-group-name"], ["id", "toggle-group", "matTooltipPosition", "right", 3, "formControl", "matTooltip"], ["matTooltipPosition", "below", 3, "value", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipPosition", "below", 3, "value", "matTooltip"]], template: function ButtonToggleDynamicTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonToggleDynamicTemplateComponent_mat_button_toggle_3_Template, 3, 7, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.toggleGroupData.formControl)("matTooltip", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toggleGroupData.buttons);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".button-group-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi10b2dnbGUtZHluYW1pYy10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFuZ3VsYXIlMjAxMyUyMEV4YW1wbGVzQW5kU25pcHBldHNcXEFuZ3VsYXJFeGFtcGxlc0FuZFNuaXBwZXRzXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcYnV0dG9uLXRvZ2dsZS1keW5hbWljLXRlbXBsYXRlXFxidXR0b24tdG9nZ2xlLWR5bmFtaWMtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6ImJ1dHRvbi10b2dnbGUtZHluYW1pYy10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tZ3JvdXAtbmFtZXtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiIsIi5idXR0b24tZ3JvdXAtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });


/***/ }),

/***/ 5577:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/button-toggle-template-example/button-toggle-template-example.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonToggleTemplateExampleComponent": () => (/* binding */ ButtonToggleTemplateExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function ButtonToggleTemplateExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 4)(1, "mat-button-toggle", 5)(2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle", 7)(5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " unpublished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 9)(8, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " radio_button_unchecked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formControlObject_r5 = ctx.formControlObject;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", formControlObject_r5.control)("matTooltip", formControlObject_r5.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("selected value is: ", formControlObject_r5.control.value == "" ? "opt out" : (tmp_2_0 = formControlObject_r5.control.value) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "not selected", "");
} }
function ButtonToggleTemplateExampleComponent_ng_template_12_Template(rf, ctx) { }
function ButtonToggleTemplateExampleComponent_ng_template_16_Template(rf, ctx) { }
function ButtonToggleTemplateExampleComponent_ng_template_20_Template(rf, ctx) { }
const _c0 = function (a0) { return { formControlObject: a0 }; };
// @UntilDestroy()
let ButtonToggleTemplateExampleComponent = class ButtonToggleTemplateExampleComponent {
    constructor() {
        /** form controls allows you to listen to and update values
         * here we are using them to allow user to select options in button-toggle-groups
        */
        this.firstFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        this.secondFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        this.thirdFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        /** objects to be passed into the button-group-template,
         *  allowing additional data such as tooltip */
        this.firstFormControlObject = {
            control: this.firstFormControl,
            tooltip: 'first tooltip'
        };
        this.secondFormControlObject = {
            control: this.secondFormControl,
            tooltip: 'second tooltip'
        };
        this.thirdFormControlObject = {
            control: this.thirdFormControl,
            tooltip: 'third tooltip'
        };
        /** unsubscribing is needed, from what I have found, however some things in Angular are handled internally and I'm not sure it really is needed
         * due to blacklist in @UntilDestroy() this will not be unsubscribed automagically upon component destruction
        */
        this.firstControlSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    ngOnDestroy() {
        this.firstControlSubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToFormControls();
        /** another way of unsubscribing with untilDestroyed. Read https://github.com/ngneat/until-destroy for more options and how to
        * note that the Component is decorated with @UntilDestroy()
       */
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe();
    }
    clearSelectedValues() {
        this.firstFormControl.setValue(undefined);
        this.secondFormControl.setValue(undefined);
        this.thirdFormControl.setValue(undefined);
    }
    /** subscribing to value changes in the FormControls allows us to take action
     *  you can perhaps also  use registerOnChange https://angular.io/api/forms/FormControl#registeronchange,
     *  but I haven't tried it out.
     */
    subscribeToFormControls() {
        /* firstControlSubscription is unsubscribed in the built in way */
        this.firstControlSubscription = this.firstFormControl.valueChanges
            .subscribe(value => {
            console.debug(`selected first choice : ${value} | ${new Date()}`);
            // do you thing ...
        });
        /* second- and thirdControlSubscription are unsubscribed using 'ngneat/until-destroy' */
        this.secondFormControl.valueChanges
            .subscribe(value => {
            console.debug(`selected second choice : ${value} | ${new Date()}`);
            // do you thing ...
        });
        this.thirdFormControl.valueChanges
            .subscribe(value => {
            console.debug(`selected third choice : ${value} | ${new Date()}`);
            // do you thing ...
        });
    }
};
ButtonToggleTemplateExampleComponent.ɵfac = function ButtonToggleTemplateExampleComponent_Factory(t) { return new (t || ButtonToggleTemplateExampleComponent)(); };
ButtonToggleTemplateExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonToggleTemplateExampleComponent, selectors: [["button-toggle-template-example"]], decls: 24, vars: 12, consts: [["buttonGroupTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "padding-top", "2rem"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["matTooltipPosition", "right", 3, "formControl", "matTooltip"], ["value", "true"], [1, "green"], ["value", "false"], [1, "red"], ["value", ""], [1, "gray"]], template: function ButtonToggleTemplateExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Material button-toggle with ng-template and subscribed FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This template lets you reuse the same look and logic from one mat-button-toggle-group injecting the FormControl to be attached. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " buttons value changes are logged in the developer-console. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ButtonToggleTemplateExampleComponent_ng_template_8_Template, 12, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Make your first choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ButtonToggleTemplateExampleComponent_ng_template_12_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Make your second choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ButtonToggleTemplateExampleComponent_ng_template_16_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Make your third choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ButtonToggleTemplateExampleComponent_ng_template_20_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-actions")(22, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonToggleTemplateExampleComponent_Template_button_click_22_listener() { return ctx.clearSelectedValues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Clear Your Choices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.firstFormControlObject));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.secondFormControlObject));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.thirdFormControlObject));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: [".green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #d81b60;\n}\n\n.gray[_ngcontent-%COMP%] {\n  color: #c9c8c8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi10b2dnbGUtdGVtcGxhdGUtZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFuZ3VsYXIlMjAxMyUyMEV4YW1wbGVzQW5kU25pcHBldHNcXEFuZ3VsYXJFeGFtcGxlc0FuZFNuaXBwZXRzXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcYnV0dG9uLXRvZ2dsZS10ZW1wbGF0ZS1leGFtcGxlXFxidXR0b24tdG9nZ2xlLXRlbXBsYXRlLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS10ZW1wbGF0ZS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5yZWQge1xyXG4gIGNvbG9yOiAjZDgxYjYwO1xyXG59XHJcbi5ncmF5e1xyXG4gIGNvbG9yOiAjYzljOGM4O1xyXG59XHJcbiIsIi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4uZ3JheSB7XG4gIGNvbG9yOiAjYzljOGM4O1xufSJdfQ== */"] });
ButtonToggleTemplateExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)({ checkProperties: true, blackList: ['firstControlSubscription'] })
], ButtonToggleTemplateExampleComponent);



/***/ }),

/***/ 7770:
/*!************************************************************************************************!*\
  !*** ./src/app/components/navigation/side-nav-mat-nav-list/side-nav-mat-nav-list.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavMatNavListComponent": () => (/* binding */ SideNavMatNavListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/navigation.service */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 8133);







function SideNavMatNavListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No links found.. hides nav list\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SideNavMatNavListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r2.name, " ");
} }
const _c0 = ["*"];
class SideNavMatNavListComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    ngOnInit() {
        //get links from navigationService if not provided from input
        if (!this.links) {
            if (!this.linksPath) {
                throw new Error("You must provide either links or a linksPath to SideNavMatNavListComponent");
            }
            try {
                this.links = this.navigationService.getLinks(this.linksPath);
            }
            catch (error) {
                console.error(error.message);
            }
        }
    }
}
SideNavMatNavListComponent.ɵfac = function SideNavMatNavListComponent_Factory(t) { return new (t || SideNavMatNavListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
SideNavMatNavListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideNavMatNavListComponent, selectors: [["side-nav-mat-nav-list"]], inputs: { links: "links", linksPath: "linksPath" }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[4, "ngIf"], [1, "side-menu-container"], ["mode", "side", "opened", ""], ["routerLinkActive", "active-link", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active-link"], ["matLine", "", 3, "routerLink"]], template: function SideNavMatNavListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SideNavMatNavListComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-drawer-container", 1)(2, "mat-drawer", 2)(3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideNavMatNavListComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawer, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLine, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContent], styles: [".active-link[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LW1hdC1uYXYtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBbmd1bGFyJTIwMTMlMjBFeGFtcGxlc0FuZFNuaXBwZXRzXFxBbmd1bGFyRXhhbXBsZXNBbmRTbmlwcGV0c1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXHNpZGUtbmF2LW1hdC1uYXYtbGlzdFxcc2lkZS1uYXYtbWF0LW5hdi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTs7Q0FBQSIsImZpbGUiOiJzaWRlLW5hdi1tYXQtbmF2LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWxpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLyogcmVtb3ZlIHBhZGRpbmcgdG8gbWFrZSB0aGUgd2hvbGUgbGluZSBhIGJ1dHRvbiwgY2xpY2thYmxlIHdpdGggYWN0aW9uXHJcblRPRE86IG5vdCB3b3JraW5nIG5vdy5cclxuKi9cclxuLy8gLm5vLXBhZGRpbmcgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3Vze1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbi8vIH1cclxuLy8gLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCxcclxuXHJcblxyXG4vLyAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtdGV4dHtcclxuXHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtdGV4dD4qe1xyXG5cclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG4iLCIuYWN0aXZlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIHJlbW92ZSBwYWRkaW5nIHRvIG1ha2UgdGhlIHdob2xlIGxpbmUgYSBidXR0b24sIGNsaWNrYWJsZSB3aXRoIGFjdGlvblxuVE9ETzogbm90IHdvcmtpbmcgbm93LlxuKi8iXX0= */"] });


/***/ }),

/***/ 8981:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/table/table-with-custom-filtering/sports-activities.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskFactorLevel": () => (/* binding */ RiskFactorLevel),
/* harmony export */   "RiskFactorLevelsWithDescription": () => (/* binding */ RiskFactorLevelsWithDescription),
/* harmony export */   "SportsActivitiesService": () => (/* binding */ SportsActivitiesService),
/* harmony export */   "SportsActivity": () => (/* binding */ SportsActivity)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 *  TODO: class of activity texts.
 *  name, icon?, description, warning/note : remember to bring utilities and water
 */
class SportsActivity {
    constructor(id, name, description, availableForBooking, riskFactorLevel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.availableForBooking = availableForBooking;
        this.riskFactorLevel = riskFactorLevel;
    }
}
class BookingStatus {
    constructor(available) {
        this.available = available;
    }
}
class RiskFactorLevel {
    // low?: { name: string };
    // high?: { name: string };
    // medium?: { name: string };
    //todo: lab with Pick<T> ; https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
    constructor(level) {
        // this[level] = { name: RiskFactorLevelsWithDescription[level] };
        this.value = RiskFactorLevelsWithDescription[level];
    }
}
const RiskFactorLevelsWithDescription = {
    low: "low risk, low premium",
    high: "high risk, high premium",
    medium: "medium risk, medium premium"
};
const winterSportActivities = [
    new SportsActivity(1, "downhill skiing", "fun fast and still under control", //watch out for avalanches if you go offpist
    new BookingStatus(true), new RiskFactorLevel('medium')),
    new SportsActivity(2, "cross-country skiing", "meeting with nature ❄ 🌲, it's nice to go on a tour in the forest as well as in the tracks", //remember to bring utilities and water
    new BookingStatus(true), new RiskFactorLevel('low')),
    new SportsActivity(3, "hiking", "nature is at your feet", // remember to bring utilities and water
    new BookingStatus(true), new RiskFactorLevel('medium')),
    new SportsActivity(4, "paragliding", "you are adventurous! Enjoy the scenery", //- watch out for birds and power-lines
    new BookingStatus(false), new RiskFactorLevel('high')),
    new SportsActivity(5, "snowshoeing", "I bet most of your friends have never tried this. Walk like the Yeti!", //- watch out for birds and power-lines
    new BookingStatus(false), new RiskFactorLevel('low')),
];
class SportsActivitiesService {
    constructor() { }
    /**
     * notes:
     * Observable.from iterates the array and emits each item separately
     * Observable.of only emits once.
     */
    getWinterSportActivities() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(winterSportActivities);
    }
}
SportsActivitiesService.ɵfac = function SportsActivitiesService_Factory(t) { return new (t || SportsActivitiesService)(); };
SportsActivitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SportsActivitiesService, factory: SportsActivitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9243:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/table/table-with-custom-filtering/table-with-custom-filtering.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableWithCustomFilteringComponent": () => (/* binding */ TableWithCustomFilteringComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sports_activities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sports-activities.service */ 8981);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shorten.pipe */ 2308);






















function TableWithCustomFilteringComponent_ng_template_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_ng_template_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " unpublished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_ng_template_1_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " filter_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableWithCustomFilteringComponent_ng_template_1_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const control_r26 = restoredCtx.control; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.filterButtonsStepperAdvance(control_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_ng_template_1_mat_icon_1_Template, 2, 0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableWithCustomFilteringComponent_ng_template_1_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableWithCustomFilteringComponent_ng_template_1_mat_icon_3_Template, 2, 0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r26 = ctx.control;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", control_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r26.value == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r26.value == "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !control_r26.value);
} }
function TableWithCustomFilteringComponent_ng_template_3_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r32.label);
} }
function TableWithCustomFilteringComponent_ng_template_3_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r36, " ");
} }
function TableWithCustomFilteringComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_ng_template_3_mat_label_1_Template, 2, 1, "mat-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function TableWithCustomFilteringComponent_ng_template_3_Template_mat_select_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const data_r32 = restoredCtx.data; return data_r32.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableWithCustomFilteringComponent_ng_template_3_mat_option_5_Template, 2, 2, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r32 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r32.selectedValue == null ? null : data_r32.selectedValue.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r32.selectedValue)("placeholder", data_r32.placeholder)("formControl", data_r32.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r32.selectOptions);
} }
function TableWithCustomFilteringComponent_ng_template_5_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r39.label);
} }
function TableWithCustomFilteringComponent_ng_template_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableWithCustomFilteringComponent_ng_template_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().data; return data_r39.control.setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function TableWithCustomFilteringComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_ng_template_5_mat_label_1_Template, 2, 1, "mat-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableWithCustomFilteringComponent_ng_template_5_button_3_Template, 3, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r39.control.value == null ? null : data_r39.control.value.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", data_r39.placeholder)("formControl", data_r39.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r39.control.value);
} }
function TableWithCustomFilteringComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r46.id);
} }
function TableWithCustomFilteringComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r47.name);
} }
function TableWithCustomFilteringComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "shorten");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r48.description, 40));
} }
function TableWithCustomFilteringComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Available for Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_34_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_34_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " unpublished ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_td_34_mat_icon_1_Template, 2, 0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableWithCustomFilteringComponent_td_34_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r49.availableForBooking.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !element_r49.availableForBooking.available);
} }
function TableWithCustomFilteringComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Risk level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableWithCustomFilteringComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r52.riskFactorLevel.value);
} }
function TableWithCustomFilteringComponent_td_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Add some details here and perhaps an image or so... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const element_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Description: ", element_r53.description, "");
} }
function TableWithCustomFilteringComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_td_39_div_1_Template, 6, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r16.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.expandedElement == element_r53);
} }
function TableWithCustomFilteringComponent_th_41_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a1) { return { placeholder: "Search", control: a1 }; };
const _c1 = function (a0) { return { data: a0 }; };
function TableWithCustomFilteringComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_th_41_ng_template_1_Template, 0, 0, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r17.filterFormControls.id)));
} }
function TableWithCustomFilteringComponent_th_43_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { control: a0 }; };
function TableWithCustomFilteringComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_th_43_ng_template_1_Template, 0, 0, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, ctx_r18.filterFormControls.availableForBooking));
} }
function TableWithCustomFilteringComponent_th_45_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a2) { return { label: "Name : filtered", placeholder: "Search", control: a2 }; };
function TableWithCustomFilteringComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_th_45_ng_template_1_Template, 0, 0, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r19.filterFormControls.name)));
} }
function TableWithCustomFilteringComponent_th_47_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a2) { return { label: "Description : filtered", placeholder: "Search", control: a2 }; };
function TableWithCustomFilteringComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_th_47_ng_template_1_Template, 0, 0, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c4, ctx_r20.filterFormControls.description)));
} }
function TableWithCustomFilteringComponent_th_49_ng_template_1_Template(rf, ctx) { }
const _c5 = function (a2, a3, a4) { return { label: "Risk level : filtered", placeholder: "Risk Level", selectedValue: a2, control: a3, selectOptions: a4 }; };
function TableWithCustomFilteringComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_th_49_ng_template_1_Template, 0, 0, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c5, ctx_r21.filterValues.riskFactorLevel, ctx_r21.filterFormControls.riskFactorLevel, ctx_r21.selectOptions.riskFactorLevels)));
} }
function TableWithCustomFilteringComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 53);
} }
function TableWithCustomFilteringComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 54);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("display-filters-row", !ctx_r23.displayFiltersRow);
} }
function TableWithCustomFilteringComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableWithCustomFilteringComponent_tr_52_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63); const element_r61 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.expandedElement = ctx_r62.expandedElement == element_r61 ? null : element_r61; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded-row", ctx_r24.expandedElement == element_r61);
} }
function TableWithCustomFilteringComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 56);
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden-row", ctx_r25.expandedElement != element_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", element_r64 == ctx_r25.expandedElement ? "expanded" : "collapsed");
} }
const _c6 = function () { return ["idFilter", "availableForBookingFilter", "nameFilter", "descriptionFilter", "riskFactorLevelFilter"]; };
const _c7 = function () { return ["expandedDetail"]; };
const _c8 = function () { return [5, 10, 25, 100]; };
class TableWithCustomFilteringComponent {
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.displayedColumns = ['id', 'availableForBooking', 'name', 'description', 'riskFactorLevel'];
        /** for toggling the filters row visibility  */
        this.displayFiltersRow = true;
        /** used to handle filtering in the table */
        this.filterFormControls = {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            subscriptionId: new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription(),
            availableForBooking: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            subscriptionAvailableForBooking: new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription(),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            subscriptionName: new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription(),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            subscriptionDescription: new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription(),
            riskFactorLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            subscriptionRiskFactorLevel: new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription(),
        };
        /** used to map filter-control values into custom filterPredicate
         * note that they must be strings, since filterPredicate operates on strings
        */
        this.filterValues = {
            id: '',
            name: '',
            description: '',
            availableForBooking: '',
            riskFactorLevel: '',
        };
        /** dropDownFilters */
        this.selectOptions = {
            riskFactorLevels: []
        };
    }
    /** todo: use @UntilDestroy to unsubscribe. */
    ngOnDestroy() {
        this.filterFormControls.subscriptionAvailableForBooking.unsubscribe();
        this.filterFormControls.subscriptionRiskFactorLevel.unsubscribe();
        this.filterFormControls.subscriptionId.unsubscribe();
        this.filterFormControls.subscriptionName.unsubscribe();
        this.filterFormControls.subscriptionDescription.unsubscribe();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        //load table data from service..
        this.tableDataService.getWinterSportActivities()
            .subscribe({
            next: activities => this.onActivitiesFetched(activities),
            error: (e) => console.error(e),
            complete: () => console.info('complete activities')
        });
        this.subscribeToFilterControls();
    }
    onActivitiesFetched(activities) {
        this.activitiesToDisplay = activities;
        this.initializeTable();
        this.createSelectOptions();
    }
    /** builds a list of select options from all values available in the column
     * (only used here for riskFactorLevel)  */
    createSelectOptions() {
        let allRiskFactorEntries = this.activitiesToDisplay
            .filter(a => a.riskFactorLevel.value)
            .map(activity => {
            return activity.riskFactorLevel.value;
            //note: adding '!' to acknowledge to TS we know what we are doing.
            // other options is need to say - value ?? '' - to fool ts we would return an empty string. but it will not happen since it is filtered out.
        });
        //get unique entries, sorted by ascending
        // note: a Set only allows unique values and ignores duplicates.
        this.selectOptions.riskFactorLevels = [...new Set(allRiskFactorEntries)].sort();
    }
    initializeTable() {
        // this.dataSource.data = this.activitiesToDisplay; //todo: use when implementing ObservableDataSource (commented out in bottom)
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.activitiesToDisplay);
        // Set up custom search on course name and columns with active/inactive states.
        this.dataSource.filterPredicate = this.createFilter();
        /* sorting on objects requires overriding the sortingDataAccessor,
        and this has to be "reset" after updating dataSource data.
        */
        this.dataSource.sortingDataAccessor = (sportsActivity, sortHeaderId) => {
            var _a;
            switch (sortHeaderId) {
                //by default sorting will look for column name as defined in 'displayColumns,
                case 'id': return sportsActivity.id;
                case 'name': return sportsActivity.name.toLowerCase();
                case 'availableForBooking': return sportsActivity.availableForBooking.available.toString();
                case 'riskFactorLevel': return (_a = sportsActivity.riskFactorLevel.value) !== null && _a !== void 0 ? _a : '';
                case 'description': return sportsActivity.description;
                default: return ''; //sportsActivity['name'];//fallback
                //default: return sportsActivity[sortHeaderId];//this gives ts error, not sure why, works in other project
            }
        };
    }
    /**
    * Set up custom search on name and columns with boolean and other states.
    */
    createFilter() {
        /**
         * The filter is passed as a string. It will look something like this: "{'name': 'hiking'}".
         * - but it is a string and therefore must be parsed,
         * this function gets called for every row in the table.
         * - && requires all filters to match,
         * - hence if you filter on two columns, they are filtered together; i.e filter1 AND filter2.
         */
        let filterFunction = function (sportsActivity, filter) {
            var _a;
            let searchTerms = JSON.parse(filter);
            return sportsActivity.name.toLowerCase()
                .indexOf(searchTerms.name.toLowerCase()) !== -1
                && sportsActivity.id.toString()
                    .indexOf(searchTerms.id) !== -1
                && sportsActivity.description.toLowerCase()
                    .indexOf(searchTerms.description.toLowerCase()) !== -1
                && sportsActivity.availableForBooking.available.toString()
                    .indexOf(searchTerms.availableForBooking) !== -1
                && ((_a = sportsActivity.riskFactorLevel.value) === null || _a === void 0 ? void 0 : _a.toString().indexOf(searchTerms.riskFactorLevel)) !== -1;
        };
        return filterFunction;
    }
    filterButtonsStepperAdvance(control) {
        if (control.value == 'true') {
            control.setValue('false');
        }
        else if (control.value == 'false') {
            control.setValue('');
        }
        else {
            control.setValue('true');
        }
    }
    clearFilterControls() {
        this.filterFormControls.id.setValue('');
        this.filterFormControls.availableForBooking.setValue('');
        this.filterFormControls.name.setValue('');
        this.filterFormControls.description.setValue('');
        this.filterFormControls.riskFactorLevel.setValue('');
    }
    /** subscribe to Value changes on filters
     * TODO: refactor and have factory method to create each of the subscriptions using props
     * filterFormControls['name']
     * filterFormControls.subscriptions['name']
     * filterValues['name']
     */
    subscribeToFilterControls() {
        this.filterFormControls.subscriptionAvailableForBooking = this.filterFormControls.availableForBooking.valueChanges
            .subscribe(value => {
            this.filterValues.availableForBooking = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.filterFormControls.subscriptionRiskFactorLevel = this.filterFormControls.riskFactorLevel.valueChanges
            .subscribe(value => {
            this.filterValues.riskFactorLevel = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.filterFormControls.subscriptionName = this.filterFormControls.name.valueChanges
            .subscribe(value => {
            this.filterValues.name = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.filterFormControls.subscriptionId = this.filterFormControls.id.valueChanges
            .subscribe(value => {
            this.filterValues.id = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.filterFormControls.subscriptionDescription = this.filterFormControls.description.valueChanges
            .subscribe(value => {
            this.filterValues.description = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
    }
}
TableWithCustomFilteringComponent.ɵfac = function TableWithCustomFilteringComponent_Factory(t) { return new (t || TableWithCustomFilteringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sports_activities_service__WEBPACK_IMPORTED_MODULE_0__.SportsActivitiesService)); };
TableWithCustomFilteringComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableWithCustomFilteringComponent, selectors: [["table-with-custom-filtering"]], viewQuery: function TableWithCustomFilteringComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 55, vars: 11, consts: [["filterButtonsStepper", ""], ["dropDownFilter", ""], ["stringFilter", ""], ["name", "filter-management", 2, "padding-bottom", "2rem", "padding-left", "2rem"], ["color", "primary", "name", "toggle-display-filters-row", 2, "padding-right", "2rem", 3, "ngModel", "ngModelChange"], ["color", "warn", "mat-raised-button", "", "aria-label", "Clear all filters", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortDisableClear", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "availableForBooking"], ["mat-cell", "", "class", "center-content", 4, "matCellDef"], ["matColumnDef", "riskFactorLevel"], ["matColumnDef", "expandedDetail"], ["matColumnDef", "idFilter"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "availableForBookingFilter"], ["mat-header-cell", "", "class", "center-content", 4, "matHeaderCellDef"], ["matColumnDef", "nameFilter"], ["matColumnDef", "descriptionFilter"], ["matColumnDef", "riskFactorLevelFilter"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-header-row", "", "name", "filters-columns", "class", "filters-row", 3, "display-filters-row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "item-row", 3, "expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "item-detail-row", 3, "hidden-row", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of sports-activities", 3, "pageSizeOptions"], ["mat-icon-button", "", "ngDefaultControl", "", 3, "formControl", "click"], ["class", "green", 4, "ngIf"], ["class", "red", 4, "ngIf"], [4, "ngIf"], [1, "green"], [1, "red"], ["appearance", "standard"], [3, "value", "placeholder", "formControl", "valueChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "name", "name-filter", 3, "placeholder", "formControl"], ["mat-button", "", "class", "clear-search-filter-button-alignment", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 1, "clear-search-filter-button-alignment", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center-content"], ["class", "item-detail", 4, "ngIf"], [1, "item-detail"], [1, "item-description"], [2, "font-style", "italic"], ["mat-header-cell", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-header-cell", "", 1, "center-content"], ["mat-header-row", ""], ["mat-header-row", "", "name", "filters-columns", 1, "filters-row"], ["mat-row", "", 1, "item-row", 3, "click"], ["mat-row", "", 1, "item-detail-row"]], template: function TableWithCustomFilteringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableWithCustomFilteringComponent_ng_template_1_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableWithCustomFilteringComponent_ng_template_3_Template, 6, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableWithCustomFilteringComponent_ng_template_5_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card")(8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Material Table with custom filtering, sorting, expandable rows, extra header row ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-card-subtitle")(11, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "    - expandable rows (an extra conditional details-row\n    - - displayed when clicking on a row)\n    - extra header row (to display filters below default headers)\n    - - possible to hide with slide-toggle\n\n    - filterPredicate example with\n    - - button with 'multiple'-states for filtering on boolean (true/false) values (see Available for Booking).\n    - - search field for filtering on all string values.\n    - - search field for filtering on single columns (see Name and Description).\n    - - drop-down/select for filtering on single columns (see Risk level).\n\n    - sorting with custom values (i.e props)\n    - - sorting on objects requires overriding the sortingDataAccessor\n\n    read https://material.angular.io/components/table/overview for more on mat-table\n    read https://material.angular.io/components/sort/overview for more on matSort and mat-sort-header\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card-content")(14, "div", 3)(15, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TableWithCustomFilteringComponent_Template_mat_slide_toggle_ngModelChange_15_listener($event) { return ctx.displayFiltersRow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableWithCustomFilteringComponent_Template_button_click_17_listener() { return ctx.clearFilterControls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Clear all filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "filter_alt_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6)(22, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TableWithCustomFilteringComponent_th_24_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TableWithCustomFilteringComponent_td_25_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](26, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TableWithCustomFilteringComponent_th_27_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TableWithCustomFilteringComponent_td_28_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, TableWithCustomFilteringComponent_th_30_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TableWithCustomFilteringComponent_td_31_Template, 3, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](32, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TableWithCustomFilteringComponent_th_33_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, TableWithCustomFilteringComponent_td_34_Template, 3, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](35, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, TableWithCustomFilteringComponent_th_36_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TableWithCustomFilteringComponent_td_37_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](38, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, TableWithCustomFilteringComponent_td_39_Template, 2, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](40, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, TableWithCustomFilteringComponent_th_41_Template, 2, 6, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](42, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, TableWithCustomFilteringComponent_th_43_Template, 2, 4, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](44, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TableWithCustomFilteringComponent_th_45_Template, 2, 6, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](46, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, TableWithCustomFilteringComponent_th_47_Template, 2, 6, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](48, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, TableWithCustomFilteringComponent_th_49_Template, 2, 8, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, TableWithCustomFilteringComponent_tr_50_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, TableWithCustomFilteringComponent_tr_51_Template, 1, 2, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, TableWithCustomFilteringComponent_tr_52_Template, 1, 2, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, TableWithCustomFilteringComponent_tr_53_Template, 1, 3, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "mat-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.displayFiltersRow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.displayFiltersRow ? "Hide filters row" : "Show filters row", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c8));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator], pipes: [_shared_shorten_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortenPipe], styles: [".mat-column-id[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%], .mat-column-description[_ngcontent-%COMP%], .mat-column-availableForBooking[_ngcontent-%COMP%], .mat-column-riskFactorLevel[_ngcontent-%COMP%], .pad[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n\n.clear-search-filter-button-alignment[_ngcontent-%COMP%] {\n  top: 5px;\n  left: 15px;\n}\n\n.display-filters-row[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-column-id[_ngcontent-%COMP%], .mat-column-idFilter[_ngcontent-%COMP%] {\n  max-width: 50px;\n  min-width: 50px;\n  width: 50px;\n  \n}\n\n.mat-column-id[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%], .mat-column-idFilter[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  max-width: 60px;\n  \n  min-width: 60px;\n  width: 60px;\n}\n\n.mat-column-name[_ngcontent-%COMP%], .mat-column-nameFilter[_ngcontent-%COMP%] {\n  width: 200px;\n  max-width: 200px;\n  min-width: 200px;\n}\n\n.mat-column-name[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%], .mat-column-nameFilter[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.mat-column-description[_ngcontent-%COMP%], .mat-column-descriptionFilter[_ngcontent-%COMP%] {\n  width: 250px;\n  max-width: 480px;\n}\n\n.mat-column-description[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%], .mat-column-descriptionFilter[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.mat-column-riskFactorLevel[_ngcontent-%COMP%], .mat-column-riskFactorLevelFilter[_ngcontent-%COMP%] {\n  width: 200px;\n  max-width: 230px;\n}\n\n.mat-column-availableForBooking[_ngcontent-%COMP%] {\n  justify-content: center;\n  \n  min-width: 48px;\n  max-width: 100px;\n  \n  width: 100px;\n}\n\n\n\n.mat-header-cell.center-content[_ngcontent-%COMP%], .mat-cell.center-content[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  \n}\n\n.mat-header-cell.center-content[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-cell.center-content[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  left: -0.5rem;\n}\n\n.mat-header-row.filters-row[_ngcontent-%COMP%] {\n  background: #efefef;\n}\n\n\n\n.item-detail-row.hidden-row[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\n.mat-row.item-row.expanded-row[_ngcontent-%COMP%] {\n  background: #efefef;\n}\n\n\n\n.mat-row.item-row[_ngcontent-%COMP%]:hover {\n  background: whitesmoke;\n}\n\n\n\n.mat-row.item-detail-row[_ngcontent-%COMP%]:not(.hidden-row) {\n  background: rgba(0, 0, 255, 0.03);\n}\n\n.mat-row.item-row[_ngcontent-%COMP%]:active {\n  background: #efefef;\n}\n\n\n\n.item-row.expanded-row[_ngcontent-%COMP%]    > .mat-cell[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.item-detail[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.item-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXdpdGgtY3VzdG9tLWZpbHRlcmluZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBbmd1bGFyJTIwMTMlMjBFeGFtcGxlc0FuZFNuaXBwZXRzXFxBbmd1bGFyRXhhbXBsZXNBbmRTbmlwcGV0c1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRhYmxlXFx0YWJsZS13aXRoLWN1c3RvbS1maWx0ZXJpbmdcXHRhYmxlLXdpdGgtY3VzdG9tLWZpbHRlcmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0UsZUFBQTtFQUFpQixnQ0FBQTtFQUNqQixlQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURGRTtFQUNFLGdCQUFBO0FDSUo7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURGRTtFQUNFLGdCQUFBO0FDSUo7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFFQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSx3RkFBQTtFQUVBLFlBQUE7QUNERjs7QURJQSw4RUFBQTs7QUFDQTs7RUFHRSxrQkFBQTtFQUVBLHFGQUFBO0FDSEY7O0FESUU7O0VBQ0UsYUFBQTtBQ0RKOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQSxxQkFBQTs7QUFFQTtFQUNFLGFBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0FDSkY7O0FET0E7RUFDRSxtQkFBQTtBQ0pGOztBRE1BLHVFQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUNIRjs7QURNQSxrQ0FBQTs7QUFDQTtFQUNFLGlDQUFBO0FDSEY7O0FETUE7RUFFRSxtQkFBQTtBQ0pGOztBRE9BLDBGQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUNKRjs7QURPQTtFQUVFLGFBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRiIsImZpbGUiOiJ0YWJsZS13aXRoLWN1c3RvbS1maWx0ZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pZCxcclxuLm1hdC1jb2x1bW4tbmFtZSxcclxuLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24sXHJcbi5tYXQtY29sdW1uLWF2YWlsYWJsZUZvckJvb2tpbmcsXHJcbi5tYXQtY29sdW1uLXJpc2tGYWN0b3JMZXZlbCxcclxuLnBhZCB7XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmNsZWFyLXNlYXJjaC1maWx0ZXItYnV0dG9uLWFsaWdubWVudHtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG59XHJcbi5kaXNwbGF5LWZpbHRlcnMtcm93e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWlkLCAubWF0LWNvbHVtbi1pZEZpbHRlciB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICAvKiBmaWx0ZXIgZmllbGQqL1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7IC8qbmVlZHMgc29tIHNwYWNlIGZvciB0aGUgbGFiZWwqL1xyXG4gICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1uYW1lLCAubWF0LWNvbHVtbi1uYW1lRmlsdGVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24sIC5tYXQtY29sdW1uLWRlc2NyaXB0aW9uRmlsdGVyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXJpc2tGYWN0b3JMZXZlbCwgLm1hdC1jb2x1bW4tcmlza0ZhY3RvckxldmVsRmlsdGVye1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG5cclxuLm1hdC1jb2x1bW4tYXZhaWxhYmxlRm9yQm9va2luZyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLypmb3JjZSBpY29uIHNwYWNlIGFyb3VuZCovXHJcblxyXG4gIG1pbi13aWR0aDogNDhweDtcclxuICAvLyBtYXgtd2lkdGg6IDQ4cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAvKiBvdmVycmlkZSBtYXQtY2VsbDogbGFzdCwgYnJlYWtzIHRoZSBcImFsaWdubWVudFwiIHdoZW4gcHJpY2UtY29sdW1ucyBhcmUgbm90IGRpc3BsYXllZCovXHJcbiAgLy8gcGFkZGluZy1yaWdodDogMFxyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLyogcHVzaCBpY29ucyB0b3dhcmRzIGNlbnRlciBvZiBjb2x1bW4gOyBhbGlnbmluZyBpbiBjZW50ZXIgZG9lc24ndCBsb29rIGdvb2QqL1xyXG4ubWF0LWhlYWRlci1jZWxsLmNlbnRlci1jb250ZW50LFxyXG4ubWF0LWNlbGwuY2VudGVyLWNvbnRlbnQgLm1hdC1pY29ue1xyXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcblxyXG4gIC8qIHRoZSBoZWFkZXIgZmlsdGVyIHVzaW5nIGljb24tYnV0dG9uIG5lZWRzIHRvIGJlICdwdWxsZWQgYmFjaycgdG8gYWxpZ24gd2l0aCBpY29ucyovXHJcbiAgLm1hdC1pY29uLWJ1dHRvbntcclxuICAgIGxlZnQ6IC0wLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1hdC1oZWFkZXItcm93LmZpbHRlcnMtcm93e1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi8qIGV4cGFuZGVkIHJvdyAuLi4gKi9cclxuXHJcbi5pdGVtLWRldGFpbC1yb3cuaGlkZGVuLXJvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxufVxyXG5cclxuLm1hdC1yb3cuaXRlbS1yb3cuZXhwYW5kZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcbi8qbm90IHRoYXQgdGhpcyBoYXMgdG8gYmUgYmVsb3cgJ2V4cGFuZGVkIHJvdycgYWJvdmUgdG8gd29yayBwcm9wZXJseSAqL1xyXG4ubWF0LXJvdy5pdGVtLXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLypnaXZlIHRoZSBkZXRhaWwtcm93IGEgaGlnaGxpZ2h0Ki9cclxuLm1hdC1yb3cuaXRlbS1kZXRhaWwtcm93Om5vdCguaGlkZGVuLXJvdykge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMGZmLCAkYWxwaGE6IDAuMDMpO1xyXG59XHJcblxyXG4ubWF0LXJvdy5pdGVtLXJvdzphY3RpdmUge1xyXG4gIC8vIC5tYXQtcm93Lml0ZW0tcm93Om5vdCguZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi8qIHJlbW92ZSBib3JkZXIgYmV0d2VlbiB0aGUgZGVmYXVsdCByb3cgYW5kIHRoZSBleHBhbmRlZCByb3cgd2hlcmUgZGV0YWlscyBhcmUgZGlzcGxheWVkKi9cclxuLml0ZW0tcm93LmV4cGFuZGVkLXJvdz4ubWF0LWNlbGwge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5pdGVtLWRldGFpbCB7XHJcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG4iLCIubWF0LWNvbHVtbi1pZCxcbi5tYXQtY29sdW1uLW5hbWUsXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbixcbi5tYXQtY29sdW1uLWF2YWlsYWJsZUZvckJvb2tpbmcsXG4ubWF0LWNvbHVtbi1yaXNrRmFjdG9yTGV2ZWwsXG4ucGFkIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLmNsZWFyLXNlYXJjaC1maWx0ZXItYnV0dG9uLWFsaWdubWVudCB7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZGlzcGxheS1maWx0ZXJzLXJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtY29sdW1uLWlkLCAubWF0LWNvbHVtbi1pZEZpbHRlciB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgLyogZmlsdGVyIGZpZWxkKi9cbn1cbi5tYXQtY29sdW1uLWlkIC5tYXQtZm9ybS1maWVsZCwgLm1hdC1jb2x1bW4taWRGaWx0ZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICAvKm5lZWRzIHNvbSBzcGFjZSBmb3IgdGhlIGxhYmVsKi9cbiAgbWluLXdpZHRoOiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuLm1hdC1jb2x1bW4tbmFtZSwgLm1hdC1jb2x1bW4tbmFtZUZpbHRlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbi5tYXQtY29sdW1uLW5hbWUgLm1hdC1mb3JtLWZpZWxkLCAubWF0LWNvbHVtbi1uYW1lRmlsdGVyIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5tYXQtY29sdW1uLWRlc2NyaXB0aW9uLCAubWF0LWNvbHVtbi1kZXNjcmlwdGlvbkZpbHRlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbn1cbi5tYXQtY29sdW1uLWRlc2NyaXB0aW9uIC5tYXQtZm9ybS1maWVsZCwgLm1hdC1jb2x1bW4tZGVzY3JpcHRpb25GaWx0ZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLm1hdC1jb2x1bW4tcmlza0ZhY3RvckxldmVsLCAubWF0LWNvbHVtbi1yaXNrRmFjdG9yTGV2ZWxGaWx0ZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMjMwcHg7XG59XG5cbi5tYXQtY29sdW1uLWF2YWlsYWJsZUZvckJvb2tpbmcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLypmb3JjZSBpY29uIHNwYWNlIGFyb3VuZCovXG4gIG1pbi13aWR0aDogNDhweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgLyogb3ZlcnJpZGUgbWF0LWNlbGw6IGxhc3QsIGJyZWFrcyB0aGUgXCJhbGlnbm1lbnRcIiB3aGVuIHByaWNlLWNvbHVtbnMgYXJlIG5vdCBkaXNwbGF5ZWQqL1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi8qIHB1c2ggaWNvbnMgdG93YXJkcyBjZW50ZXIgb2YgY29sdW1uIDsgYWxpZ25pbmcgaW4gY2VudGVyIGRvZXNuJ3QgbG9vayBnb29kKi9cbi5tYXQtaGVhZGVyLWNlbGwuY2VudGVyLWNvbnRlbnQsXG4ubWF0LWNlbGwuY2VudGVyLWNvbnRlbnQgLm1hdC1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAvKiB0aGUgaGVhZGVyIGZpbHRlciB1c2luZyBpY29uLWJ1dHRvbiBuZWVkcyB0byBiZSAncHVsbGVkIGJhY2snIHRvIGFsaWduIHdpdGggaWNvbnMqL1xufVxuLm1hdC1oZWFkZXItY2VsbC5jZW50ZXItY29udGVudCAubWF0LWljb24tYnV0dG9uLFxuLm1hdC1jZWxsLmNlbnRlci1jb250ZW50IC5tYXQtaWNvbiAubWF0LWljb24tYnV0dG9uIHtcbiAgbGVmdDogLTAuNXJlbTtcbn1cblxuLm1hdC1oZWFkZXItcm93LmZpbHRlcnMtcm93IHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLyogZXhwYW5kZWQgcm93IC4uLiAqL1xuLml0ZW0tZGV0YWlsLXJvdy5oaWRkZW4tcm93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1jZWxsIHtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5tYXQtcm93Lml0ZW0tcm93LmV4cGFuZGVkLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi8qbm90IHRoYXQgdGhpcyBoYXMgdG8gYmUgYmVsb3cgJ2V4cGFuZGVkIHJvdycgYWJvdmUgdG8gd29yayBwcm9wZXJseSAqL1xuLm1hdC1yb3cuaXRlbS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4vKmdpdmUgdGhlIGRldGFpbC1yb3cgYSBoaWdobGlnaHQqL1xuLm1hdC1yb3cuaXRlbS1kZXRhaWwtcm93Om5vdCguaGlkZGVuLXJvdykge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4wMyk7XG59XG5cbi5tYXQtcm93Lml0ZW0tcm93OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi8qIHJlbW92ZSBib3JkZXIgYmV0d2VlbiB0aGUgZGVmYXVsdCByb3cgYW5kIHRoZSBleHBhbmRlZCByb3cgd2hlcmUgZGV0YWlscyBhcmUgZGlzcGxheWVkKi9cbi5pdGVtLXJvdy5leHBhbmRlZC1yb3cgPiAubWF0LWNlbGwge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uaXRlbS1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 1016:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent": () => (/* binding */ ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _mock_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock-data.service */ 4881);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_button_toggle_dynamic_template_button_toggle_dynamic_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button-toggle-dynamic-template/button-toggle-dynamic-template.component */ 6368);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);








function ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button-toggle-dynamic-template", 4)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const toggleGroupData_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("toggleGroupData", toggleGroupData_r1)("logChangesToConsole", ctx_r0.logChangesToConsole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("selected value is: ", toggleGroupData_r1.formControl.value == "" ? "opt out" : (tmp_2_0 = toggleGroupData_r1.formControl.value) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "not selected", "");
} }
class ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent {
    constructor(mockDataService) {
        this.mockDataService = mockDataService;
        this.logChangesToConsole = false;
    }
    ngOnInit() {
        this.listOfToggleGroupData = this.mockDataService.getListOfToggleGroupData();
    }
    /** although it is possible to have this reset in the child component (ButtonToggleDynamicTemplateComponent)
     * it is probably better to have the full logic here and not pollute the 'template'
    */
    clearSelectedValues() {
        this.listOfToggleGroupData.forEach(group => group.formControl.setValue(undefined));
    }
}
ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent.ɵfac = function ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent_Factory(t) { return new (t || ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mock_data_service__WEBPACK_IMPORTED_MODULE_0__.MockDataService)); };
ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent, selectors: [["button-toggle-dynamic-template-implementation-example-with-data-from-service"]], decls: 17, vars: 3, consts: [[3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [2, "padding-top", "2rem"], ["name", "", 3, "toggleGroupData", "logChangesToConsole"]], template: function ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Material button-toggle reusable component with dynamically loaded data from service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " with dynamically generated buttons from service lets you reuse the same look and logic injecting props for creating n number of buttons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " - buttons value changes are logged in the developer-console if you set logChangesToConsole. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " - the \"selected value is.. is passed into the template as 'ng-content'\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-content")(10, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) { return ctx.logChangesToConsole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent_ng_container_13_Template, 5, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card-actions")(15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent_Template_button_click_15_listener() { return ctx.clearSelectedValues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Clear Your Choices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.logChangesToConsole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" log changes to console: ", ctx.logChangesToConsole, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listOfToggleGroupData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _components_button_toggle_dynamic_template_button_toggle_dynamic_template_component__WEBPACK_IMPORTED_MODULE_1__.ButtonToggleDynamicTemplateComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tdG9nZ2xlLWR5bmFtaWMtdGVtcGxhdGUtaW1wbGVtZW50YXRpb24tZXhhbXBsZS13aXRoLWRhdGEtZnJvbS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8863:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonToggleDynamicTemplateImplementationExampleComponent": () => (/* binding */ ButtonToggleDynamicTemplateImplementationExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _components_button_toggle_dynamic_template_button_toggle_dynamic_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button-toggle-dynamic-template/button-toggle-dynamic-template.component */ 6368);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);





class ButtonToggleDynamicTemplateImplementationExampleComponent {
    constructor() {
    }
    ngOnInit() {
        /** here we create our toggle-group-buttons
         * if you want to you can listen (subscribe) to the formControl.valueChanges
        */
        this.firstToggleGroupData = {
            name: "Publishing actions",
            tooltip: "select your action",
            formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            buttons: [{
                    value: 'schedule',
                    icon: 'schedule',
                    style: 'color: orange'
                },
                {
                    value: 'published',
                    icon: 'check_circle',
                    css: 'green'
                },
                {
                    value: 'unpublished',
                    icon: 'unpublished',
                    css: 'red'
                },
                {
                    value: '',
                    icon: 'radio_button_unchecked',
                    css: 'gray'
                },
            ]
        };
    }
    /** although it is possible to have this reset in the child component (ButtonToggleDynamicTemplateComponent)
     * it is probably better to have the full logic here and not pollute the 'template'
    */
    clearSelectedValues() {
        this.firstToggleGroupData.formControl.setValue(undefined);
    }
}
ButtonToggleDynamicTemplateImplementationExampleComponent.ɵfac = function ButtonToggleDynamicTemplateImplementationExampleComponent_Factory(t) { return new (t || ButtonToggleDynamicTemplateImplementationExampleComponent)(); };
ButtonToggleDynamicTemplateImplementationExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ButtonToggleDynamicTemplateImplementationExampleComponent, selectors: [["button-toggle-dynamic-template-implementation-example"]], decls: 16, vars: 3, consts: [["name", "", 3, "toggleGroupData", "logChangesToConsole"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ButtonToggleDynamicTemplateImplementationExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Material button-toggle reusable component with dynamically generated buttons and subscribed FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " with dynamically generated buttons and subscribed FormControl lets you reuse the same look and logic injecting props for creating n number of buttons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " - buttons value changes are logged in the developer-console ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " - the \"selected value is.. is passed into the template as 'ng-content'\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-content")(10, "button-toggle-dynamic-template", 0)(11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card-actions")(14, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonToggleDynamicTemplateImplementationExampleComponent_Template_button_click_14_listener() { return ctx.clearSelectedValues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Clear Your Choices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("toggleGroupData", ctx.firstToggleGroupData)("logChangesToConsole", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("selected value is: ", ctx.firstToggleGroupData.formControl.value == "" ? "opt out" : (tmp_2_0 = ctx.firstToggleGroupData.formControl.value) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "not selected", "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _components_button_toggle_dynamic_template_button_toggle_dynamic_template_component__WEBPACK_IMPORTED_MODULE_0__.ButtonToggleDynamicTemplateComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tdG9nZ2xlLWR5bmFtaWMtdGVtcGxhdGUtaW1wbGVtZW50YXRpb24tZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4881:
/*!***********************************************!*\
  !*** ./src/app/examples/mock-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockDataService": () => (/* binding */ MockDataService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MockDataService {
    constructor() { }
    /** data for our toggleButtonGroups
     * in a real world example we would need to
     * 1. fetch data
     * 2. transform data to IButtonToggleGroupData.
     * - at least to new up the FormControl on each groupData
     */
    getListOfToggleGroupData() {
        var groupData = [
            {
                name: "Select your first winter sports activity of choice",
                tooltip: "select your activity",
                formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
                buttons: [{
                        value: 'downhill_skiing',
                        icon: 'downhill_skiing',
                        style: 'color: orange',
                        tooltip: 'watch out for avalanches if you go offpist'
                    },
                    {
                        value: 'hiking',
                        icon: 'hiking',
                        css: 'green',
                        tooltip: 'remember to bring utilities and water'
                    },
                    {
                        value: 'paragliding',
                        icon: 'paragliding',
                        class: 'red',
                        tooltip: 'you are adventurous, enjoy the scenery'
                    },
                    {
                        value: 'snowshoeing',
                        icon: 'snowshoeing',
                        css: 'color: orange'
                    },
                    {
                        value: 'directions_walk',
                        icon: 'directions_walk',
                        css: 'green'
                    },
                ]
            },
            {
                name: "Select how you will travel to the destination",
                tooltip: "select your traveling choice",
                formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
                buttons: [
                    {
                        value: 'directions_bike',
                        icon: 'directions_bike',
                        css: 'green'
                    },
                    {
                        value: 'train',
                        icon: 'train',
                        css: 'green'
                    },
                    {
                        value: 'electric_car',
                        icon: 'electric_car',
                        css: 'green'
                    },
                    {
                        value: 'commute',
                        icon: 'commute',
                        css: 'green'
                    },
                    {
                        value: 'directions_bus',
                        icon: 'directions_bus',
                        css: 'orange'
                    },
                    {
                        value: 'directions_car',
                        icon: 'directions_car',
                        style: 'color: orange'
                    },
                    {
                        value: 'flight',
                        icon: 'flight',
                        css: 'red',
                        tooltip: 'think of the environment and chose another option if possible'
                    },
                ]
            }
        ];
        return groupData;
    }
}
MockDataService.ɵfac = function MockDataService_Factory(t) { return new (t || MockDataService)(); };
MockDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MockDataService, factory: MockDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3608:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/examples-page/button-toggle-examples-page/button-toggle-examples-page.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonToggleExamplesPageComponent": () => (/* binding */ ButtonToggleExamplesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_button_toggle_template_example_button_toggle_template_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/button-toggle-template-example/button-toggle-template-example.component */ 5577);
/* harmony import */ var _examples_button_toggle_dynamic_template_implementation_example_button_toggle_dynamic_template_implementation_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component */ 8863);
/* harmony import */ var _examples_button_toggle_dynamic_template_implementation_example_with_data_from_service_button_toggle_dynamic_template_implementation_example_with_data_from_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component */ 1016);




class ButtonToggleExamplesPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonToggleExamplesPageComponent.ɵfac = function ButtonToggleExamplesPageComponent_Factory(t) { return new (t || ButtonToggleExamplesPageComponent)(); };
ButtonToggleExamplesPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ButtonToggleExamplesPageComponent, selectors: [["button-toggle-examples-page"]], decls: 5, vars: 0, consts: [[2, "padding-top", "2rem"]], template: function ButtonToggleExamplesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button-toggle-template-example")(1, "div", 0)(2, "button-toggle-dynamic-template-implementation-example")(3, "div", 0)(4, "button-toggle-dynamic-template-implementation-example-with-data-from-service");
    } }, directives: [_components_button_toggle_template_example_button_toggle_template_example_component__WEBPACK_IMPORTED_MODULE_0__.ButtonToggleTemplateExampleComponent, _examples_button_toggle_dynamic_template_implementation_example_button_toggle_dynamic_template_implementation_example_component__WEBPACK_IMPORTED_MODULE_1__.ButtonToggleDynamicTemplateImplementationExampleComponent, _examples_button_toggle_dynamic_template_implementation_example_with_data_from_service_button_toggle_dynamic_template_implementation_example_with_data_from_service_component__WEBPACK_IMPORTED_MODULE_2__.ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tdG9nZ2xlLWV4YW1wbGVzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7128:
/*!****************************************************************!*\
  !*** ./src/app/pages/examples-page/examples-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplesPageComponent": () => (/* binding */ ExamplesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ExamplesPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExamplesPageComponent.ɵfac = function ExamplesPageComponent_Factory(t) { return new (t || ExamplesPageComponent)(); };
ExamplesPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamplesPageComponent, selectors: [["examples-page"]], decls: 2, vars: 0, consts: [["linksPath", "examples"]], template: function ExamplesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "side-nav-mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9565:
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService),
/* harmony export */   "examplesNavigationRouteLinks": () => (/* binding */ examplesNavigationRouteLinks),
/* harmony export */   "getExamplesRoutes": () => (/* binding */ getExamplesRoutes)
/* harmony export */ });
/* harmony import */ var _pages_examples_page_button_toggle_examples_page_button_toggle_examples_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/examples-page/button-toggle-examples-page/button-toggle-examples-page.component */ 3608);
/* harmony import */ var _components_button_toggle_template_example_button_toggle_template_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/button-toggle-template-example/button-toggle-template-example.component */ 5577);
/* harmony import */ var _examples_button_toggle_dynamic_template_implementation_example_with_data_from_service_button_toggle_dynamic_template_implementation_example_with_data_from_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examples/button-toggle-dynamic-template-implementation-example-with-data-from-service/button-toggle-dynamic-template-implementation-example-with-data-from-service.component */ 1016);
/* harmony import */ var _examples_button_toggle_dynamic_template_implementation_example_button_toggle_dynamic_template_implementation_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../examples/button-toggle-dynamic-template-implementation-example/button-toggle-dynamic-template-implementation-example.component */ 8863);
/* harmony import */ var _pages_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/examples-page/examples-page.component */ 7128);
/* harmony import */ var _components_table_table_with_custom_filtering_table_with_custom_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table/table-with-custom-filtering/table-with-custom-filtering.component */ 9243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);









/** routes here has an extended 'name' property to be able to use the routes when generating menu-links  */
const examplesNavigationRouteLinks = {
    linksPath: 'examples',
    defaultRoute: { path: '', redirectTo: 'examples', pathMatch: 'full' },
    routes: [
        {
            name: '',
            path: 'examples', component: _pages_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_4__.ExamplesPageComponent, children: [
                {
                    name: 'button toggle (all)',
                    path: 'button-toggle-all',
                    component: _pages_examples_page_button_toggle_examples_page_button_toggle_examples_page_component__WEBPACK_IMPORTED_MODULE_0__.ButtonToggleExamplesPageComponent
                },
                {
                    name: 'button toggle template',
                    path: 'button-toggle-template',
                    component: _components_button_toggle_template_example_button_toggle_template_example_component__WEBPACK_IMPORTED_MODULE_1__.ButtonToggleTemplateExampleComponent
                },
                {
                    name: 'button toggle dynamic',
                    path: 'button-toggle-dynamic',
                    component: _examples_button_toggle_dynamic_template_implementation_example_button_toggle_dynamic_template_implementation_example_component__WEBPACK_IMPORTED_MODULE_3__.ButtonToggleDynamicTemplateImplementationExampleComponent
                },
                {
                    name: 'button toggle dynamic with service',
                    path: 'button-toggle-dynamic-with-service',
                    component: _examples_button_toggle_dynamic_template_implementation_example_with_data_from_service_button_toggle_dynamic_template_implementation_example_with_data_from_service_component__WEBPACK_IMPORTED_MODULE_2__.ButtonToggleDynamicTemplateImplementationExampleWithDataFromServiceComponent
                },
                //todo: nested menus?
                {
                    name: 'table with custom filter',
                    path: 'table-with-custom-filtering',
                    component: _components_table_table_with_custom_filtering_table_with_custom_filtering_component__WEBPACK_IMPORTED_MODULE_5__.TableWithCustomFilteringComponent
                },
                {
                    name: '',
                    path: '**', redirectTo: 'button-toggle-all'
                },
            ]
        }
    ]
};
/** all routes configured for examples*/
function getExamplesRoutes() {
    return [examplesNavigationRouteLinks.defaultRoute,
        ...getRoutesFromNamedRoutes(examplesNavigationRouteLinks.routes)];
}
/**cleaning up, removing the 'name' property to not pollute the Route object
 * perhaps not needed now, but good to not assume Router will never use a name property
 */
function getRoutesFromNamedRoutes(namedRoutes) {
    var routes = namedRoutes.map(r => {
        let tmpR = cloneObjectWithoutGivenPropertyName(r, 'name');
        if (r.children) {
            tmpR.children = getRoutesFromNamedRoutes(r.children);
        }
        return tmpR;
    });
    return routes;
}
/**todo: move to utils.ts , import * as utils  */
function cloneObjectWithoutGivenPropertyName(obj, propertyName) {
    var entries = Object.entries(obj).filter(([key, _]) => key !== propertyName);
    return Object.fromEntries(entries);
}
//todo..
// export function  getLinkObjectsFromNamedRoutes(namedRoutes: Array<NamedRoute>): Array<ILinkObjects>{
//     var _routesFlat = namedRoutes.flat(3)
//     return _routesFlat.map(route => {
//       return {name: route.name ?? '', path: route.path ?? ''};
//     })
//   }
class NavigationService {
    constructor(router) {
        this.router = router;
    }
    getLinks(path) {
        //TODO: expand on how to use this to generate a list of links.. for a module.
        /** note: This only works module-wise (but is good enough).
         * If you are having more than one module in your application, you will only get the routes
         * according to the module you are executing the commands above.
         */
        console.log('configured routes: ', this.router.config);
        if (path === examplesNavigationRouteLinks.linksPath) {
            /** extract and map routes to linkObjects,
             * since routes can have children we flatten them
             * Perhaps.. keep the structure if creating a nested navigation..
            */
            //todo: make recursive if needed..
            // let routeLinks = getLinkObjectsFromNamedRoutes(examplesRouteLinks.routes);
            let routeLinks = [];
            examplesNavigationRouteLinks.routes.forEach(route => {
                var _a, _b;
                routeLinks.push({ name: (_a = route.name) !== null && _a !== void 0 ? _a : '', path: (_b = route.path) !== null && _b !== void 0 ? _b : '' });
                if (route.children) {
                    route.children.forEach(childRoute => {
                        var _a, _b;
                        routeLinks.push({ name: (_a = childRoute.name) !== null && _a !== void 0 ? _a : '', path: (_b = childRoute.path) !== null && _b !== void 0 ? _b : '' });
                    });
                }
            });
            //remove not named routes - they are not to be used as links
            return routeLinks.filter(x => x.name !== '');
        }
        throw new Error(`getLinks could not find any links for path ${path} : NavigationService`);
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2308:
/*!****************************************!*\
  !*** ./src/app/shared/shorten.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortenPipe": () => (/* binding */ ShortenPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ShortenPipe {
    transform(value, maxLength = 20) {
        if (value.length <= maxLength)
            return value;
        return value.substring(0, maxLength) + '...';
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
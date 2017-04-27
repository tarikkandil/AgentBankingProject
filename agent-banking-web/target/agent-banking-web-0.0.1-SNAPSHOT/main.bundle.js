webpackJsonp([3,7],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/components.module": [
		372,
		0
	],
	"./dashboard/dashboard.module": [
		373,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 154;


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_dynamic_1 = __webpack_require__(164);
var app_module_1 = __webpack_require__(166);
var environment_1 = __webpack_require__(172);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(56);
var common_1 = __webpack_require__(37);
var app_component_1 = __webpack_require__(165);
var dropdown_1 = __webpack_require__(161);
var tabs_1 = __webpack_require__(162);
var nav_dropdown_directive_1 = __webpack_require__(170);
var ng2_charts_1 = __webpack_require__(160);
var sidebar_directive_1 = __webpack_require__(171);
var aside_directive_1 = __webpack_require__(168);
var breadcrumb_component_1 = __webpack_require__(169);
// Routing Module
var app_routing_1 = __webpack_require__(167);
//Layouts
var full_layout_component_1 = __webpack_require__(89);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.AppRoutingModule,
            dropdown_1.BsDropdownModule.forRoot(),
            tabs_1.TabsModule.forRoot(),
            ng2_charts_1.ChartsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            full_layout_component_1.FullLayoutComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective
        ],
        providers: [{
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(88);
//Layouts
var full_layout_component_1 = __webpack_require__(89);
exports.routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/app.routing.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    return AsideToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    core_1.Directive({
        selector: '.aside-menu-toggler',
    }),
    __metadata("design:paramtypes", [])
], AsideToggleDirective);
exports.AsideToggleDirective = AsideToggleDirective;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/aside.directive.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(88);
__webpack_require__(139);
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: 'breadcrumbs',
        template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last\" [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], BreadcrumbsComponent);
exports.BreadcrumbsComponent = BreadcrumbsComponent;
var _a, _b;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/breadcrumb.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    core_1.Directive({
        selector: '.nav-dropdown'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], NavDropdownDirective);
exports.NavDropdownDirective = NavDropdownDirective;
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    core_1.Directive({
        selector: '.nav-dropdown-toggle',
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);
exports.NavDropdownToggleDirective = NavDropdownToggleDirective;
exports.NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
var _a;
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/nav-dropdown.directive.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);
exports.SidebarToggleDirective = SidebarToggleDirective;
var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-compact');
    };
    return SidebarMinimizeDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarMinimizeDirective.prototype, "toggleOpen", null);
SidebarMinimizeDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-minimizer',
    }),
    __metadata("design:paramtypes", [])
], SidebarMinimizeDirective);
exports.SidebarMinimizeDirective = SidebarMinimizeDirective;
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.mobile-sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
exports.SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/sidebar.directive.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/environment.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar ab\">\n  <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none\" type=\"button\"><i class=\"fa fa-ellipsis-v\"></i></button>\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\"><i class=\"fa fa-ellipsis-v\"></i></a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/avatar-agent.png\" class=\"img-avatar\" alt=\"reda.amrani@soprabanking.com\">\n        <span class=\"d-md-down-none\"></span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\n\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-calendar\"></i> Last Downoald<span class=\"badge badge-info\">{{date | date:'yyyy-MM-dd'}}</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-calendar\"></i> Last Upload<span class=\"badge badge-info\">{{date | date:'yyyy-MM-dd'}}</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-calendar\"></i> Last Login<span class=\"badge badge-info\">{{date | date:'yyyy-MM-dd'}}</span></a>\n\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n</header>\n\n\n<div class=\"app-body\">\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-people\"></i> Customer Management </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-refresh\"></i> Transactions </a>\n        </li>\n\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i>Components</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/widgets']\"><i class=\"icon-calculator\"></i> Choose Transactions</a>\n              </li>\n\n          </ul>\n          </li>\n      </ul>\n    </nav>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <breadcrumbs></breadcrumbs>\n    </ol>\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.conainer-fluid -->\n  </main>\n</div>\n\n<footer class=\"app-footer\">\n  <a href=\"http://www.soprabanking.com\">Sopra banking software</a> &copy; 2017 .\n  <span class=\"float-right\">Powered by <a href=\"http://www.soprabanking.com\">Sopra banking software</a>\n    </span>\n</footer>"

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
        this.date = new Date();
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__(337)
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/full-layout.component.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.bundle.js.map
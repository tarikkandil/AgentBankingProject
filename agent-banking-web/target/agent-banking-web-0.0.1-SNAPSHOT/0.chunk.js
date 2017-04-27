webpackJsonp([0,7],{

/***/ 372:
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
// Forms Component
var forms_component_1 = __webpack_require__(374);
var dropdown_1 = __webpack_require__(161);
var tables_component_1 = __webpack_require__(375);
// Tabs Component
var tabs_1 = __webpack_require__(162);
var tabs_component_1 = __webpack_require__(376);
// Widgets Component
var widgets_component_1 = __webpack_require__(377);
// Components Routing
var components_routing_module_1 = __webpack_require__(379);
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            components_routing_module_1.ComponentsRoutingModule,
            dropdown_1.BsDropdownModule.forRoot(),
            tabs_1.TabsModule
        ],
        declarations: [
            forms_component_1.FormsComponent,
            tables_component_1.TablesComponent,
            tabs_component_1.TabsComponent,
            widgets_component_1.WidgetsComponent
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/components.module.js.map

/***/ }),

/***/ 374:
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
var FormsComponent = (function () {
    function FormsComponent() {
    }
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(381)
    }),
    __metadata("design:paramtypes", [])
], FormsComponent);
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/forms.component.js.map

/***/ }),

/***/ 375:
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
var TablesComponent = (function () {
    function TablesComponent() {
    }
    return TablesComponent;
}());
TablesComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(382)
    }),
    __metadata("design:paramtypes", [])
], TablesComponent);
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/tables.component.js.map

/***/ }),

/***/ 376:
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
var TabsComponent = (function () {
    function TabsComponent() {
    }
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(383)
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/tabs.component.js.map

/***/ }),

/***/ 377:
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
var WidgetsComponent = (function () {
    function WidgetsComponent() {
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: this.brandInfo,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // lineChart4
        this.lineChart4Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.lineChart4Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.lineChart4Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart4Colours = [
            {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                borderWidth: 2
            }
        ];
        this.lineChart4Legend = false;
        this.lineChart4Type = 'line';
        // barChart2
        this.barChart2Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart2Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart2Colours = [
            {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderWidth: 0
            }
        ];
        this.barChart2Legend = false;
        this.barChart2Type = 'bar';
        // barChart3
        this.barChart3Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart3Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart3Primary = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Danger = [
            {
                backgroundColor: this.brandDanger,
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Success = [
            {
                backgroundColor: this.brandSuccess,
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Legend = false;
        this.barChart3Type = 'bar';
        // lineChart5
        this.lineChart5Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart5Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart5Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart5Info = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
                borderWidth: 2
            }
        ];
        this.lineChart5Success = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
                borderWidth: 2
            }
        ];
        this.lineChart5Warning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
                borderWidth: 2
            }
        ];
        this.lineChart5Legend = false;
        this.lineChart5Type = 'line';
    }
    // convert Hex to RGBA
    // public convertHex(hex: string, opacity: number){
    //   hex = hex.replace('#','');
    //   let r = parseInt(hex.substring(0,2), 16);
    //   let g = parseInt(hex.substring(2,4), 16);
    //   let b = parseInt(hex.substring(4,6), 16);
    //
    //   let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    //   return rgba;
    // }
    // events
    WidgetsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    WidgetsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(384)
    }),
    __metadata("design:paramtypes", [])
], WidgetsComponent);
exports.WidgetsComponent = WidgetsComponent;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/widgets.component.js.map

/***/ }),

/***/ 379:
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
var forms_component_1 = __webpack_require__(374);
var tables_component_1 = __webpack_require__(375);
var tabs_component_1 = __webpack_require__(376);
var widgets_component_1 = __webpack_require__(377);
var routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'forms',
                component: forms_component_1.FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'tables',
                component: tables_component_1.TablesComponent,
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: tabs_component_1.TabsComponent,
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'widgets',
                component: widgets_component_1.WidgetsComponent,
                data: {
                    title: 'Widgets'
                }
            }
        ]
    }
];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    return ComponentsRoutingModule;
}());
ComponentsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ComponentsRoutingModule);
exports.ComponentsRoutingModule = ComponentsRoutingModule;
//# sourceMappingURL=D:/Mobile/WORKSPACE/AgentBanking/boot/agent-banking-client/src/components-routing.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-ab\">\n        <div class=\"card-header card-header-ab text-uppercase\">\n          <i class=\"fa fa-bank fa-lg m-t-2\"></i> <strong>Cash in transaction</strong>\n          <div id=\"trait_dessus\">\n            <hr>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-2orizontal \">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"customer-name-input\">Customer Name</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"customer-name-input\" name=\"customer-name-input\" class=\"form-control\" placeholder=\"Text\">\n                <span class=\"help-block\">Please enter the customer name</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"account-number-input\">Account number</label>\n              <div class=\"col-md-9\">\n                <input type=\"number\" id=\"account-number-input\" name=\"account-number-input\" class=\"form-control\" placeholder=\"Enter numéro du compte\">\n                <span class=\"help-block\">Please enter your account number</span>\n              </div>\n            </div>\n            <div class=\"card-header card-header-ab text-uppercase\">\n              <strong>DETAILS DE LA TRANSACTION</strong>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"password-input\">Montant en espèce <span>*</span></label>\n              <div class=\"col-md-9\">\n                <input type=\"number\" id=\"ammount-input\" name=\"ammount-input\" class=\"form-control\" placeholder=\"Montant en espèce\">\n                <span class=\"help-block\">Please enter a complex password</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"select\">Devise <span>*</span></label>\n              <div class=\"col-md-9\">\n                <select id=\"select\" name=\"select\" class=\"form-control\">\n                  <option value=\"0\">EURO</option>\n                  <option value=\"1\">$</option>\n                  <option value=\"2\">DH</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 form-control-label\" for=\"comment-input\">Comment</label>\n              <div class=\"col-md-9\">\n                <textarea id=\"comment-input\" name=\"comment-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer card-header-ab\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary btn-submit-ab\"><i class=\"fa fa-dot-circle-o\"></i> Validate Cash In</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n\n\n    </div>\n  </div>"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card card-ab\">\n        <div class=\"card-header card-header-ab text-uppercase\">\n          <span class=\"card-header-ab-search\">Recherche En ligne</span>\n        </div>\n        <div class=\"card-block\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"controls\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                                        <select class=\"form-control input-lg customers-search\" id=\"select\" name=\"select\" size=\"1\">\n                                    <option value=\"0\">Please select</option>\n                                    <option value=\"1\">Option #1</option>\n                                    <option value=\"2\">Option #2</option>\n                                    <option value=\"3\">Option #3</option>\n                                </select>\n                                      \n                                    </span>\n                  <input class=\"form-control customers-search\" id=\"appendedInputButtons\" size=\"16\" type=\"text\">\n                  <span class=\"input-group-btn customers-search\">\n                                        <button class=\"btn btn-default search-btn\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                                    \n                                    </span>\n                </div>\n              </div>\n            </div>\n          </form>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <div class=\"card card-ab\">\n        <div class=\"card-header card-header-ab text-uppercase\">\n          <span>Customer account</span>\n        </div>\n        <div class=\"card-block\">\n          <table class=\"table-ab\">\n            <thead>\n              <tr>\n                <th>Account title</th>\n                <th>Category</th>\n                <th>currency</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Samppa Nori</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td> <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i> <i class=\"fa fa-money fa-lg m-t-2\"></i> <i class=\"fa fa-bank fa-lg m-t-2\"></i></td>\n              </tr>\n              <tr>\n                <td>Estavan Lykos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td> <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i> <i class=\"fa fa-money fa-lg m-t-2\"></i> <i class=\"fa fa-bank fa-lg m-t-2\"></i></td>\n              </tr>\n              <tr>\n                <td>Mohamed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td> <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i> <i class=\"fa fa-money fa-lg m-t-2\"></i> <i class=\"fa fa-bank fa-lg m-t-2\"></i></td>\n              </tr>\n              <tr>\n                <td>Derick Maximinus</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td> <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i> <i class=\"fa fa-money fa-lg m-t-2\"></i> <i class=\"fa fa-bank fa-lg m-t-2\"></i></td>\n              </tr>\n              <tr>\n                <td>Friderik Dávid</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td> <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i> <i class=\"fa fa-money fa-lg m-t-2\"></i> <i class=\"fa fa-bank fa-lg m-t-2\"></i></td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination pagination-ab\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-12\">\n      <div class=\"card card-customers-table\">\n        <div class=\"card-header card-header-ab text-uppercase\">\n          <span>Results search</span>\n        </div>\n        <div class=\"card-block\">\n          <table class=\"table-ab\">\n            <thead>\n              <tr>\n                <th></th>\n                <th>Client Id</th>\n                <th>Names</th>\n                <th></th>\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><input id=\"checkbox1\" name=\"checkbox1\" type=\"checkbox\" value=\"\"></td>\n                <td>10002355012</td>\n                <td>Samppa Nori</td>\n                <td><i class=\"fa fa-hourglass-end fa-lg m-t-2\"></i></td>\n              </tr>\n              <tr>\n                <td><input id=\"checkbox1\" name=\"checkbox1\" type=\"checkbox\" value=\"\"></td>\n                <td>10002355012</td>\n                <td>Staff</td>\n                <td><i class=\"fa fa-hourglass-end fa-lg m-t-2\"></i></td>\n              </tr>\n              <tr>\n                <td><input id=\"checkbox1\" name=\"checkbox1\" type=\"checkbox\" value=\"\"></td>\n                <td>10002355012</td>\n                <td>Mohamed</td>\n                <td><i class=\"fa fa-hourglass-end fa-lg m-t-2\"></i></td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination pagination-ab\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n</div>"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab heading=\"Home\">\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Profile\">\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Messages\">\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i></ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i></ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator</ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i> Shoping cart</ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-list\"></i> Menu &nbsp;<span class=\"badge badge-success\">New</span></ng-template>\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator &nbsp;<span class=\"badge badge-pill badge-danger\">29</span></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n     <div class=\"col-sm-6 col-md-2\">\n    <div class=\"card card-ab-transactions\">\n      <div class=\"card-block\">\n\n        <div class=\"h4 text-center mb-4\">Cash In</div>\n\n        <div class=\"h1 text-muted text-center\">\n          <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-2\">\n    <div class=\"card card-ab-transactions\">\n      <div class=\"card-block\">\n\n        <div class=\"h4 text-center mb-4\">Cash Out</div>\n\n        <div class=\"h1 text-muted text-center\">\n          <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-2\">\n    <div class=\"card card-ab-transactions\">\n      <div class=\"card-block\">\n\n        <div class=\"h4 text-center mb-4\">Transfer</div>\n\n        <div class=\"h1 text-muted text-center\">\n          <i class=\"fa fa-credit-card-alt fa-lg m-t-2\"></i>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  </div>\n</div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map
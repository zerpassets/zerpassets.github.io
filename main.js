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



var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' }
];
var config = {
    useHash: false
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'preev';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_1__["PagesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/btc-price.service.ts":
/*!*******************************************!*\
  !*** ./src/app/data/btc-price.service.ts ***!
  \*******************************************/
/*! exports provided: BtcPriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcPriceService", function() { return BtcPriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _btc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btc */ "./src/app/data/btc.ts");





var BtcPriceService = /** @class */ (function () {
    function BtcPriceService(httpClient) {
        this.httpClient = httpClient;
    }
    BtcPriceService_1 = BtcPriceService;
    BtcPriceService.prototype.currentPrice = function () {
        return this.httpClient
            .get(BtcPriceService_1.ENDPOINT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _btc__WEBPACK_IMPORTED_MODULE_4__["Btc"]().deserialize(data.bpi.USD.rate_float); }));
    };
    var BtcPriceService_1;
    BtcPriceService.ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/btc.json';
    BtcPriceService = BtcPriceService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BtcPriceService);
    return BtcPriceService;
}());



/***/ }),

/***/ "./src/app/data/btc.ts":
/*!*****************************!*\
  !*** ./src/app/data/btc.ts ***!
  \*****************************/
/*! exports provided: Btc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Btc", function() { return Btc; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

var Btc = /** @class */ (function () {
    function Btc() {
    }
    Btc.prototype.deserialize = function (price) {
        this.price = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(price);
        return this;
    };
    Btc.prototype.inSatoshis = function () {
        return this.price.dividedBy(Btc.SATOSHIS_PER_BTC);
    };
    Btc.SATOSHIS_PER_BTC = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(100000000); // 100,000,000
    return Btc;
}());



/***/ }),

/***/ "./src/app/data/conversion.service.ts":
/*!********************************************!*\
  !*** ./src/app/data/conversion.service.ts ***!
  \********************************************/
/*! exports provided: ConversionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionService", function() { return ConversionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _btc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btc */ "./src/app/data/btc.ts");
/* harmony import */ var _btc_price_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btc-price.service */ "./src/app/data/btc-price.service.ts");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency.service */ "./src/app/data/currency.service.ts");
/* harmony import */ var _exchange_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exchange.service */ "./src/app/data/exchange.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var ConversionService = /** @class */ (function () {
    function ConversionService(currencyService, exchangeService, btcPriceService) {
        var _this = this;
        this.currencyService = currencyService;
        this.exchangeService = exchangeService;
        this.btcPriceService = btcPriceService;
        // Defines if the user updated the input value or output value
        this.didInputChangedRecently = true;
        // Subject which defines if all the data is loaded or not
        this.initialDataLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        // Subject which holds the exchanges selected by the user
        this.selectedExchanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        // Fired when the output is calculated
        this.outputCalculated$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('1');
        // Fired when the input is calculated
        this.inputCalculated$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('1,000,000');
        // Form model data with defaults
        this.model = {
            inputValue: '1,000,000',
            outputValue: '1',
            inputCurrency: 'CSC',
            outputCurrency: 'USD'
        };
        // Subscriptions holding the latest data from remote services
        this.btcPrice$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](new _btc__WEBPACK_IMPORTED_MODULE_2__["Btc"]());
        this.currencies$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.exchanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        var resourcePollingJob = this.createResourcePolling(6000);
        resourcePollingJob.subscribe();
        this.selectedExchanges$.subscribe(function () {
            if (_this.selectedExchanges$.value.length > 0) {
                _this.updateInputOrOutput();
            }
        });
    }
    ConversionService_1 = ConversionService;
    ConversionService.prototype.createResourcePolling = function (delayTime) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this.currencyService.getAll(), this.exchangeService.getAll(), this.btcPriceService.currentPrice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (responses) { return _this.remoteDataUpdated(responses); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(delayTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["repeat"])());
    };
    ConversionService.prototype.remoteDataUpdated = function (responses) {
        // Update the data
        this.currencies$.next(responses[0]);
        this.exchanges$.next(responses[1]);
        this.btcPrice$.next(responses[2]);
        // Initialize the selectedExchanges$ only once
        if (this.selectedExchanges$.value.length === 0) {
            this.selectedExchanges$.next(responses[1]);
        }
        this.updateInputOrOutput();
        // Fire the event and mark the subscription as complete
        this.initialDataLoaded$.next(true);
        this.initialDataLoaded$.complete();
    };
    ConversionService.prototype.updateInputOrOutput = function () {
        if (this.didInputChangedRecently) {
            this.inputUpdated({});
        }
        else {
            this.outputUpdated({});
        }
    };
    ConversionService.prototype.inputUpdated = function (model) {
        Object.assign.apply(Object, [this.model].concat(model));
        this.didInputChangedRecently = true;
        var input = this.model.inputValue.toString().replace(/\D/g, '');
        var output = '';
        if (!!input) {
            output = this.btcPrice$.value
                .inSatoshis()
                .multipliedBy(this.priceOfCsc())
                .multipliedBy(input)
                .multipliedBy(this.currencyConversionFactor())
                .toFormat(4);
        }
        this.model.outputValue = output;
        this.outputCalculated$.next(output);
    };
    ConversionService.prototype.outputUpdated = function (model) {
        Object.assign.apply(Object, [this.model].concat(model));
        this.didInputChangedRecently = false;
        var cleanOutput = this.model.outputValue.replace(/\D/g, '');
        var output = '';
        if (!!cleanOutput) {
            var outputInDollars = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(cleanOutput).dividedBy(this.currencyConversionFactor());
            var btcs = outputInDollars.dividedBy(this.btcPrice$.value.price);
            var satoshis = btcs.multipliedBy(ConversionService_1.BTC_TO_SATOSHI);
            var cscs = satoshis.dividedBy(this.priceOfCsc());
            output = cscs.toFormat(0);
        }
        this.model.inputValue = output;
        this.inputCalculated$.next(output);
    };
    ConversionService.prototype.priceOfCsc = function () {
        var prices = this.selectedExchanges$.value.map(function (_) {
            return _.last.multipliedBy(ConversionService_1.BTC_TO_SATOSHI).toNumber();
        });
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(prices.reduce(function (accumulator, currentValue) { return accumulator + currentValue; })).dividedBy(prices.length);
    };
    ConversionService.prototype.currencyConversionFactor = function () {
        var _this = this;
        return this.currencies$.value.find(function (_) { return _.symbol === _this.model.outputCurrency; }).value;
    };
    var ConversionService_1;
    ConversionService.BTC_TO_SATOSHI = 100000000.0;
    ConversionService = ConversionService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"],
            _exchange_service__WEBPACK_IMPORTED_MODULE_5__["ExchangeService"],
            _btc_price_service__WEBPACK_IMPORTED_MODULE_3__["BtcPriceService"]])
    ], ConversionService);
    return ConversionService;
}());



/***/ }),

/***/ "./src/app/data/currency.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/currency.service.ts ***!
  \******************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./src/app/data/currency.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CurrencyService = /** @class */ (function () {
    function CurrencyService(httpClient) {
        this.httpClient = httpClient;
    }
    CurrencyService_1 = CurrencyService;
    CurrencyService.prototype.getAll = function () {
        return this.httpClient.get(CurrencyService_1.ENDPOINT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.rates; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return Object.keys(data).map(function (key, index) {
                return new _currency__WEBPACK_IMPORTED_MODULE_1__["Currency"]().deserialize({ symbol: key, value: data[key] });
            });
        }));
    };
    var CurrencyService_1;
    CurrencyService.ENDPOINT = 'https://api.exchangeratesapi.io/latest?base=USD';
    CurrencyService = CurrencyService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/data/currency.ts":
/*!**********************************!*\
  !*** ./src/app/data/currency.ts ***!
  \**********************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
var Currency = /** @class */ (function () {
    function Currency() {
    }
    Currency.prototype.deserialize = function (item) {
        this.symbol = item.symbol;
        this.value = item.value;
        return this;
    };
    return Currency;
}());



/***/ }),

/***/ "./src/app/data/exchange.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/exchange.service.ts ***!
  \******************************************/
/*! exports provided: ExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return ExchangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exchange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange */ "./src/app/data/exchange.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ExchangeService = /** @class */ (function () {
    function ExchangeService(httpClient) {
        this.httpClient = httpClient;
    }
    ExchangeService_1 = ExchangeService;
    // getAll() {
    //   return this.httpClient.get(ExchangeService.ENDPOINT);
    // }
    ExchangeService.prototype.getAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ExchangeService_1.MOCK_DATA).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.map(function (item) { return new _exchange__WEBPACK_IMPORTED_MODULE_1__["Exchange"]().deserialize(item); }); }));
    };
    var ExchangeService_1;
    ExchangeService.ENDPOINT = 'https://api.casinocoin.org/1.0.0/info/exchanges/all';
    ExchangeService.MOCK_DATA = [
        {
            _id: '5bbb2b5a1fcd0c1109c1fd51',
            name: 'STEX',
            imageBase64: 
            // tslint:disable-next-line:max-line-length
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAxCAYAAABgQpSEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4goICgsvXe5BIwAABSBJREFUeNrtnUuIHEUYx38Z1qyZqBcjgocsIih7FsQguz7AmATFqAQPIuKDndUk6yGg4s2TJASJsgmZxccigg8UH4irqOhmICYXBT2IHmImYjAgSGAyUVmIh+rBZZ10Zqa/mq6u/v9gCDvZrq6p6f5t1VdfdUF3xoDjwLlIXnVsmY2obdJeU9jzeaRttcFDW1WBI4Z1bAHXMBzeMm7fJwAq55HVYvKvECI/2sA2oGlU3lrgyyHc23XgfsPy9gMHuglLshIiLH4FbjaU1hiwkPTefDBj3DOfA3Z0fqhIVkIETxO4FThtVN448KkHaT0GvGhY3stAbfkbFclKiELwC3BXMky0YAKYN6zfJC62a8VXwOMr36xIVkIUhgawyVBa27CZkLoxGWaOGn7OO4GlbsKSrIQolrQeMixvCngqw/FjwNuGw8tUKVckKyEKx7usiO1kZDeDBcovTzo8643qcQy4O60HWdF3L0QhmaNLjCcDB3GB/V6pAu8bdniawG3An2m/JGEJUVwOYhfoXgV8jAvG98IHffxuL7LqKXVDwhKi2OxMelsWVIH3eug11YHbjc7ZAu6gxzyzEcOGewMXMAuRH43LexP43kM9Z4GLAmr/0L7PRvI5Q+RYjueu4bLYHzAo6wpcXGoSONHl/5/DLjG0DWwBfurnoJDXnZWNsyVo/yxrCeu6RFJ7R4cM7+ej/H/mb8qw/DODDCk1JBQiDtq4dACrXvENuGz4NcnPmwz/YJwD7h2krhKWEHFJawvws1F5E7iFxxO42JYV08BngxwoYQkRFy1gI3aLpR/GxbSsEkNrZJgkkLCEiI9OmsAJo/JWGZWzi4wzmhKWEPFKayt26w6zMge8kLUQCUuIePkO28XSWWRlspTIMg/rWcKdWr/PcEwv8mM8sGtsCXg18DZrAJtx6SSrczj/PLbrHkvxbPJrC3JDKg+rWK82xeHRHNpnkf/SIkzQkFCIcvCKdU+nx57dWQlLCDEIc8DTQzjPYTzFziQsIcrFHuwWS3ejiYsZexkuS1hClI8afhaR/4HL//rdV8UlLCHKxxh2z7Jazjrco2K8IWEJUT5Z+dzHoY7HGWsJSwjJqjDSkrCEkKwKI60R4MEBj20Bl3j+0I/Q34PxRdx8A7wTUH2WJKsLSgv8zkoGRR1luivTXU8czSqr4+S7IsDs2tSQUAgNAwszPJSwhIiT9YS1q7uJtCQsIeLjKuBrwtvVPbO0JCwh4mId8AVwtVF5bWBfKNIa0fcrRDRchtvpZtyovH9wm1os4vb2tJr0GHj2UD0sIeJgLfAJcL1hmdOJrDpy2ZF3T0s9LFEkQnvi6HI+BE7ldO4qsADcZFhmDXhtxXv7geuAnXn1tEYIO7dlQveoWHE9hHpN/JCTsKrJMNCyXdK24poBRg3/cPQtLT0iORyUOFrc14acZHXI+HPM9CGaoSeXKoYlRDHx0bM6ALzURy9s3vDcPcW0JCwhJKvOkGx7n8csD8oPRVplENYR4Ddd40KySpXVIBtU/I1Le2gYSyu1LjHHrg4DlxboYlQMSzGsC8nKOmb1eqD1mi6bsBr4f/yNhCVhDUtYPqSwCFxsWL+jxvXbXpYhYQO3zVBLIwihYeB575HNwF9G5bWBe7DdYX0WeDJ2YXVkdUbXuZCsUu8R6624TuJ2zbGU1j5gV6zC8vVFCJGXrBaMZfWt53uk6UFae4FnIK6lOZKViIlR4CNg0lgmW4dwjzSBW3Az9Fcalfk8sPpfC+rMToHhpMsAAAAASUVORK5CYII=',
            buy: 1.3e-7,
            sell: 1.7e-7,
            last: 1.4e-7,
            volume24H: 72790122.63906828,
            creationDate: '2018-10-07T07:00:00.000Z',
            lastUpdateDate: '2019-05-02T15:24:01.080Z',
            endpoint: 'https://app.stex.com/api2/ticker',
            enabled: true,
            tradeURL: 'https://app.stex.com/en/basic-trade/pair/BTC/CSC'
        },
        {
            _id: '5a2eb877324d771b0493071d',
            name: 'NLExch',
            imageBase64: 
            // tslint:disable-next-line:max-line-length
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAABZCAYAAACaLCkAAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwMDjISir04DQAAIABJREFUeNrsfXd8VUX6/jNzzrk9nTRC7yBdFJEuCopiX9sqrq5tV9euCIhdFMWGui7WRV07YkekN6lSQ0kIJIT05Ca3nzozvz9uEkFSLi7sst/ffT+fCzfnnjYz7zzz9gHiFKc4xSlOcYpTnOIUpzjFKU5xilOc4hSnOMUpTnGKU5ziFKc4xSlOcYrT/0805JHVJ+S+w55YE+/cOMXpf5jIibx5xp+/R9U758d+gedpOC/ojvRUD5FkCabB4K0OC3X+ewB+OKZn93lgGXY/f1Z8hOMUp/8vgeisecCy6486vLO6CkXCQ75ZUUKDAUPOTLUr2RlOyeaQZd2EHFKZLaJadsPkisW4xIWghBAuS9RSbJLhdCqG0ykZEgUzDIv5A4ZVWa0y3aRWn0HdrfMGE/QCRBvSTJOy/g5U/DU+4nGK0/9lIDrnmTVYPHXEEcfmF3jJ5oKwXF4ZdPbqlJiouGxJFV69bSCgd3faaA+PW+4u26R2AM1knKQyIRTOASE4AECI+jckACEwAPgAUW1ZrFTVWHEkYh0AofuTku0lCR7Fq6pGqLxKDcs2j3rOpBxTVyBukog46mVHLgFWnx0f/TjF6f8KEHW+80cUzjm38e/xjy8i40b2UYorQokd2ye2NyF1q/Vrp9okMpTIZDDjSDQtgZDKUOPTEAzqMHQTjDFwyxDM1DgzdAEhOAgEAUQUkqiQJAk2u0xdLruUkGCjHrdNkmUabQhBBSfSbg4l1+Fy5SYk2g+oEa2s4lCwKj0rO3TK2DbWX3UwpP/a5D/Or8S/LsuMc0Gc4vS/C0RtIUQpSL0qlHLtx2TGbSNdZV6tfdsMz+mBCBsRUs1RjKOnYTFU1mqorlVhGiYIqRd0hAmmBU2mhxnhTOWWUWnqoUpLDdUwQ63jpuHnlhHh3FIFs3TBmSU4qCCyjUNygMhOqtgTFIcz2ZOc2ia9bWZWSpvktrKipArBQxBir82duDOxTZudQmB3TVUwLzk13Zt1SobxaDdiNbRkxEOfwJHdH0vu6hPniDjF6X8FiG7953bM/dOAxr+fWlzoqQqY3bu0S7yoNsjPrg2oQyKaZa/2aajzqxBcQJYoJIlAcAYz4rd0X6XGTL2KW9o2M+zP1esq85mpFSe271PW74Z7qj4cSYKxvs8PQijPzt6WmL/4g1SttirL7k7ISW3XqUvbju17JiQn9BaEtiMEYXdiUn5SetZW3RLra8rKtwdrfbWmnKitnjGG/d4OHD9nF36685Sjjo9+L4iVNyTEOSxOcToRQPTi2lLcOzwHAHDj66tsfXtntIcj6caISS4uLAv0DoR0UhvQoesWZIlAkqKqE2cmdH+NGaku9ILzrcwyvovUlG52puUU5r4/pbq55wkhGqWuowBxn8Dc7s03IeveTY66pXPS07LSO3Tp17+vO8EzlHMx0G6TXFSSD0Us20pdOOatnjHmUEyNn/w9PpszEVck/+aZ3dbg8SXDbR/shOU4DaKnC2J+IolqlITEuSxOcTpeQNT/waXY8dy4xr9nLilK1S2cn5jivn/vQX/fyuoQDUVMWIxBojSqfpGoBGSE6njg0K4Kwazlsivx3dq8DVsOLp/nO/z+E17fh0W3dz8ujbpggcB3lzTRNPsYR9uzTs/oeeppAyS7q4PJZVVQ2+JVM8YeAoBBz+dh6wM9W72/7U0hdW4LqX8ayMgk0JUrd6YlqsVjyw13sWno/j2GuqPsqUv44dec/Xo+ltzeI85xcYrT7wWiP8/biXeu7xf9gz5G5qz7SzvN5FNCurhx295qZyhigHMOSg+7HSHghopgaV5Q9Zaud2d1ezZ//uMr/If2NU7QEY8vwppHJ5zwRg54eDW2PzXyqOPdH1hOMjwcax8dd6Rn7U8Cj15blRBgTlJmJZhpTtD2iirXBjUrvxbc4911KjHCnQQRbpci0jRHurPiu2f/5Ol7bmXEV1noOGP0Pb17DowUBj3G/rMR3kyinrszH/gQPz9/bZzr4hSnYwWiWz/ajbnXRI24Z89cLQ04Jbt/RqrnmRKvNmFXQXUUgJpQP8xIHfwHc4uZFv5HnytmvPT5xURr+O3cN/bhx790/680eOjTv2DD9FOPOJb0qi5f3tbnHOjxu/fl7c3e5WXOU9vQS4Kaaa8zxCGbIts9LkebuggrszxZanbNppvkqn39K4Mhfb834ksacunz9pScikSPctAZDvZsJ0f6S8LKKgmxvNII/yKgGbtWzrqq0Q41QgisiatscYpTbEA0ZuY6rJg2DADwx39skTt0SDnd6bK/UFIVOWP3fi8UiRxlAhGCwwjUsMChXTuZpj62+9PHvgaAhLZtMfCW97H6sf9i/M6fBMR7Q0DIL1EV7p1CxyCe3z1YG+pjEgxy2fk401/er8aUKpT8re5wqMqD5DSLU+oJMVmTXGladlZHs/hgoRkiEk9v129bVpvMJd0kf1/ZCvWjlt49tXx/qmP3Tmi1XhQmevBL5zNXVSd3uPTnF270NrzG2Kuew/JPHoxzX5zidCyq2Sn3LqaTzuk+xGaTXymr0c7Yta8aTrt09ImCQw/UWMHiXRsiNYemFPzw2loAOHfuAfx4a5f/akPvXCkwZzSpB0tBCCHi6leWX9g+lP+qM1DdobqiJLR5X35RaZhu9gz5w3yDhTpnJjg7d+rUk3UU6qhss7ZdQsTrTCgrdNeB0R2yKXcL6Ui3uyDv3w+ppBS2QAgwGZhigyJJ8Fo6vj51RBk5dexVLKf/Hm8kEF7zwDlqwztd98wCfDD1kjgXxikORM39cN+3+/DCpKj6dPdXBb0SE51/r6hRx+7YWwW3S45GPf9WHQvVcX9x7uZgWf4DhYvmrup12VSyd/4z4r/dyBs/zMe710YNxQ/8JJyuyp97B6sPdqkNRG4+uH5Z9/yK6hXBtgOWd3v4+Z+2nEkq//7z/m7mth1jnLU1423e0ome3E1u2649IBENiqDIc8hY7rHhzIiFbqoJqigQigxB6a+YDMDJOVZlpoGfOnazlJa5aqNOcttffuXnaQVlOrEsc/ZNp8U5ME5xag6I2vzpK9T882IAwP3fFaR5PK451XX6NVtyy+FyNg1C3FDhO7jjQKi84L6Cb1/5qsclD5L8Bc+Jk6mxN72/s21qcP+FteUHr1c1PccfMSusnFM3pqcmLR3XK3Hh9WP66FM+/+W8Nns3Tcvenzvcvncn7AeKIQTAbTaAUlAAIUohQcDBBVproMIY6pLdMDt2xk9t2oe7DDjjsd3e0FbGxbLvnrtVxFkwTnFqRTU75d5Ftssm9bknpOLZjdvLYJPQRFwMgRAModK8QKB078y8L56ZdTI18K6v9+KVi3rhvrUiPbTmg/vDJfk3V1RVHzjgNV8s9wb2jJ50dQ6NeE+rszs+GdUtZ2C7vZseS1m3ooczLx+UA8JuO+qetL7jWIwdTC0GZhmoyMmGv1NPzPdkfGKC/nH7v2bxOAvGKU7ROXUEDX1kBQDgwcX5ZNjQDoOIZHswN78acpMgFFVCrEiAhyv2rx9858xXAGDyhpNjob/jhwq8clEvAEBG6caz7FWFk72V3oPlSucpB5a8+5G69YutakrvH39465tnPWMvjjj2bb/BvXJJD/e+AlBZaRKEAIDHCEINKhqTJcDhRIeKaujbNsLr90dqQsE498UpTs0B0YYnxgAA9uzxuzt3Sntw7/66VF0zmnTRoz5gMVSa57Wntn3x41FEO/2+T/D+0JPDNf3axCwAwO3fFpzm3LXhljab1mSlVVWrGUlJjcGUK+/pY81Z/a3U5dCGUfaK4l72Wm9UyjsB7nVNUaC6XFZCek51Yka7OPfFKU5NAtHE96PS0JJCkpmdcIY/xM6uqgk0pmk0tdwzQ+V60Lt16xu3LQKAjS9cdVI07Na3NgAAegthS96z4Q/OTWuHi6JCBFVVDRqRRpHt9rfWdN+++Ksn1fwdjwUP7GkrayoIpSess3NMJqveQ93CNQfj3BenODUJRD9MBgBs2VapdOzUZvK+gtqEZuUCQgDBEak+FHQkZ88DgNEzV580DZt781AAwPDPfulplR84M7+uxr4prWPhvuzu8zb3vXf7NUJI1876arRanv/3ivwtAzeV1f1UYqJCo9IJK1tJANg4h6WFbJYainNfnOLUnGo2cNqPxO1R2geCbGhE1Vqck0JwGMHqurZDL1kEACunjTz5WlhSOqEk4u+9LTMHVYPGfjj4rzNXvdxpU3/n81/cRQMlswvydns3apmT2159/UvZ7brUUZsjmmiL41++UgAopIQJZ5t8uDKaPmn0u01/j1Oc/tN00fwj/uz7yJb/HBBdctmZpGfPrDGVlaFsxnhLKARuGQwCe7+7IcN7svblLyUVW+GPHOrtrcQpVXtPz9n0ySPOjWsX2neteOHAoYpdG7v97ZbqeXccal9U0M9tk5IFOJjgYEKAHcf3IACqCLAiMSUv/dRJHw2+aWrTnbvyxqO+KxfGDkjnPLf2mN7rTV0AuL3J3/7y0a7f1dbr55fHJ/HJTufOgxCtOJW+vuyIP3OfGIwu9687Ia8j//ZA7Z6N1N1x0GC/vzaBMd5sCQ4AsNSgTm2OzSdzf3cfPrqk75KiQPZuPzTGJ0gbfkL2rlwUMQvuAWPMHJpv2w9ALy3tWFZRZhHGNLskEyvRIzlNQ8rRDGITwL/rB5QALHfatfLB5/2j+JEJ9UvLWXTS9HvIOWO7kM7d20iJKW7Zp9ltRWVhZ95+rzNiSd5/XtnJd9ftEzD7mxgA4OM8zLu6oXrARHrZjFtJdvsUdO6USrMyPSS5jYcQRSJCotSUXKiBbN5kJ+ZV60x8Muz1o+73xmQ/AOBf63ZIIilJcacliLqqkCgrDfK6qgjSkmzI6ZBEUtM9lDrtxAsPzxMwn25D4vFRJzF1u28Zfp49tnFuP/XVVrn/qe0lyWmjDodCLC7L/qCQa+o0276iWndFVRC1fq1k0T2n6QdmD/tPAFE2tuf5Xf3TrM6cixaUEwKAw9JClj0pff/J1tG9Xy7FnrujNZMyKw6MVLyVXdzhMDJKy8H2AsJmQw9iYZcaOC/VVr3gUSFWvnLzrB8jutAz0nK6OpIz+2WmOwZ12L0jNVurPS7vZAmBrWltvZe99eC8X07/Ax2YzjspitQDhMgVnNq8+40EWbFSBSdZmiEyJFnyBOoiW/rc8+0bsyfk+EbPXN2q6jvv6p64YO5W0iHdk+VxKoMtLiBRIlWDKLXVxEa9mkIobIQQm677aEmZbx+ARZ8MU46615hZ67Fiyhno99BKeVcgeZDdkAZr5WGdc+gcHoOmuy0/oTTsJTbZrzkY1+wVVcVV+woqfgZQFZ/uJy8VvHAWMl4ALp2709mlXUJ/zSZ13LxPc4HqNonCAUKSGEOyafEkQKQKIxhkBpsJIO9EvdMRQDT+pa+I0+nIDoeN9BbVsnqDB7dMZktsU32ydXQDCPVcJ1wJy94anlBdnSNFItCcToAQUCHg5AJZetjVO1B+877pcyb06tDuw3+9/dDrewCc/2X+vX2/m9u3vWoQOxe/y5VPAdB6IBcQiFACmpLlf4mQ8Lmv7fDIttSbCBWXBlWDBFVmY4w7LYsnMYs5OBewuEAkbJzTJj3Fd+YjP725ctpINuqplVj18OgWn+tyuFyCKJdT2XZfKBDRCYgkhJA5h8y5kLkQCkBkLRxWqksPLR02V/153a3Oo4KaVkw5AwCQnGhL9qu4lujstkAw4pNl2aIUBiXgACFCCIVzoZgmc3nLK7b7S/Kr4kD0v0GKLHWjkjytLmSepuqWxLlQOBc2zrmbCxHNKLAMeCuqfCZx/fNCIfK/ISdG2j0CiDp1ygLnaKOqZnJULWvF7kGogPi1vMfJRuk7dmfz4v2d7NWVoBEdlk1ACAEqS0gAMKa8OJkt++HiDQ4nKtr36TbuwblPL33u1p/tJRtcnt07Xc5gEBIAxjgsy0KsCholFIZEoCKaAuIAQVACCCCyz76aeFwOV12QDVJVtWcwrEJwwOIclilgWSy6bwAlkChJkmT5Tupy5QJYverh0RgzawNWTBna7LPtisMW1sSAQCjSsc4XiBanEwDnIvoRUYnWiPgRrq7K7DrE4VwHNBtdqSiSszZgpZumZautC2TYFBmEEtD63mi4JzNNhKtqkrXaMiU+xf83yLC4vaxK6+oPRbI1zYzyieBgTIBzDoBAWAbC1XV1jkQS+RoQJ8qjfAQQ2e0uWBZL8PuDzqhq1goQUQpCqXSydnQWMbKclp7oTkmES7HBkihkSuENB1FoMC6pGq3Vy5Gblrk7rAaTEmvL7h949aNTS72mdkBww+6wg+oaHG4nkpISozq1aA2cCVRdx17LCpUIWi0AlgQkRARXqM2zS4EkIAgLRVgoFDIQiegghNR/AFkm9RalRuoFQqeMeXbt/hUPDS+jsFp8PucQpsn1SERHKKSDHhYTFV1YSH3lTA4Ipkn2VmzyQnDT5JZhMFimBcHFUbmGhBAIZoFz5hfc1OJT/H+DqGQvCaqsTlUNWJYFQqKVVSUKSJRGA5YJhSxTA1yNkBNYQ0s+kokpoqKZkKOI2NKMAwiVKSDcJ2tHZyCUkz2gX2qvc85EemIyTMaQ6HZh/pKf8ENe5YFgWeUhldJKs8+YuUlp7arMsi1PtXEp9w5o30mi54zlRQV7UFFULDxuF269+SaSlJQExloGAlmWsacgH7nrdhn7HB3fUjxpu9XKwkwrErIndz11gxSo4ZZlCbtdYpQSQSkhLQ8wASH0fAj2t7Ev7Zq+7J5T+NhZ67B8StNGQ8YYB0REliVQSo6smnkYcNQ/ksvOloFIAIJSyhtK/x52LY5AuCi7aIIxIz7FT27K+fM8lL5zPbKyssPV1VUBTZLAGDt6XOudNAIwme7XT+Q7yUcyMcAYiGjc2VA0z54AJLtTsvRw1kmrA2s1nTP79ErvPHwg3A5X4/Eh6cnY8tUafX2vds+XPHXhj15CRA8haN+7C/Z1beO4bUJ3R2KPCZORX7AP5dVesW3rNqh9e5Gep5wS03P3JXngX7dHrauuXFb0zpQNRzFCv7HcbrdbNMYIbkIlQIjbhe77BcAXlWtfwoQPNCy6znHUuaZpcUJouCVwE79KO2ZydxitSHgMMaTWCc5BhFAF53EgOsmp9J3oTswej5vV1kp+ErX7tMQwzApFrP8YEOm6Bc6ZIQQsUr8JRUsrtWT3KGak5KSsCO+YLVwk8nafVE8Ht8tmP+K3fn37I+2bRac4i9aOafvW+avbz9xKLvp4/YWu3h3Gn9G7XeKwoYOg2B1o364dAFCFM5QXF6Nnly5wOp2tPjscCMHpSSk+/8zh/cJnT+KJyYlSbWmR+8Oply0FgGAwzBITk/SmpJWmtSMBQqUEwcUTo59Zs3vl1BG7M4Y2vX12JKIKp9OpSlIrGrMgEJyz09KbBqIGr5kQ4ACs1t+RQQihEkLjQPQ/Qh4PuCRRjRDCCCFyC8oPs3gUDVraVeffUhOPZOIIVFULAlBjeZhks9tAaP+TqXOvmlcIALjE/cuQRJkPSnHbohLFkcs3jJAPQojLhlsrb7ztFO2RU7PlWReNGzZw+PDhUOzR6Gq/34/t27cjLy8PXbt2jQmEAGDI4AG4/epzB084pc3zozrSV4e0MV71hA++OenxL8cCgM8fYACMY4ndFgAIlXtTSmeOnbU+acX0MRj9zJqjzgsGg5wxFqGUthiwJiAghGDXNQMyDV4zQsAIaQWIRFQiEhAaoXEg+l8hSYIQAka91Ns8DEFw0uDmOEF2oiOAyOfzIRQK1RJCgq0/kIAQSqls63bW7E0ZJ0vnfnJ9ZwBAmnZwWJ/unbpkZx25pbRhGFi8eDFyS4M1GWlJnjPaKVNH9cm+f9yQnjk9u3WGJEkIh8NYtWoV3n//fSxcuBCnnnoqOnToEPM7pLVJx9mjz7SfO7R38vhBHYeO7ZM15OLhvbro+9c8M/qNwnRvnc8EyDFPWEIICKUXgbO7Bz2+RFo5dQTGPntkJHUgEGCc83Br41cfWGC2dp4QgrUqERHUG7+hS3a7+Z8b7etiPvPq93f8nwCPzJu+jem8c174udVzLAsCEAYh4M3zgQAgGESsXvtT/n0gysvLEz6frwpADFF80ReTbe4EI1A9HADO/cd/N7bxlnm5AIALXt7Yu32CGD+gVxd3apv0I85R1QjyCw6ga9/B+sAuGQ5aW5Dlry5FWP3V2fP9Dz+IH3/8EaZpYtSoUZg4cSIcDsex26gcLuS074h2HTthzNixCFUf6irZ4So/WGZRSo7Z+BcViyUQSv+WZHNE4+937z5SLQyHOSEkHMvoCc5jAA3BW14xGyQiJgDoijvlhANR2h+/rP/2AQDg+qcX2b8r82V+U2N0/rjc6jmvxOj1frnZ9c3iYPYFry+xA8DHk6OC+3Ufxcij7idPLGjKTxzT1bd/FOXtyrcnRQ8Me1n5aHdF6sLaSNuv69QOX9So7eaV+DJu+nyjCwAW33dm47U97mo6LJ/zBomI8pb5DpZoEK8v+byVN/01LWj8S2t+n42o6I2rkDJtkR9ASYxLNGRnglvzV14EYMGPt3X9r4HQ2Hfr8Ob1KUCeULp+/9m1/bu0G96xXfZR5zmdLkw8/3wh2RzpWzetl8tKS7B+w0bs2r0HPXv2hGmayM3NJSNGjsSE8eMhy/Jxeb9N69cjBE+pYi6rxL5cEHLF73Jz19uL0ijw0JiZq/KXTxu17fCo67KyMt6vX79wDIOH2AzLghFCzdbhKgpErtT2JxSIbvkwF29e2xcAMHdzaY7icPQsqdb7rt8d7GrxYKbJhYcLEAGoHKjs2LFX3pQVvu1VVTU737uiW+0H10R59Lw527HwzgFNPmP2hkrcPzQzpve5ct5+fHr9r3z/8poS3D2iqVpTH/xGHHkEQgjk3PAJyv55dbP3T7xmAQIfXYLXr4m2+Z2tFZ2EYu9RXBnumltqthel3lQG2JkAEwIBlzur/P6lVfvdbueBkpJD+965vE84/5ULMemNvfj2L71+O30FIdAbFpqm7T8EgGBC1MfzLPgDAOD9rcWZnsyM9pW1WrLXpzuJTCxngjuk6kbV9Ok3F2DhF+yne0bg6veL8PHkTrEDkXTB82DfPYAePXpwVVX3EkJ0APZW2VlWbFRWho97cXPG0nuH/FciajNfVLH8xqj95uqvvz+/fyfP5f17drI7XUdHFthsNnTu2IEAsKWeNRaBQBDBYBC7d+9GUVERDMPAOePG4Yxhw/5tEGoYWJ+3Gt8vWwvqSCg/9OZCC4VfcEKe/N3u0Ki9iPYjQp4y4snld66cNrJ69NNrsHL6CKhf3sXpefmxqGYCIgpEi4TAhGbO5xyMEMQARBYAoaf1GnHCvCv3fJGHly7vCQydY3/7zWvGlXmNS0LV4WGBsJHtCxqJumHJnPOoFkEIZFliTqc9EAwaJYQ4Fl/3UennH1yTsx4AFt45AONf2oKf7hl8xDNybvkc9w/NxBI/o3v2e8eHTSkdEMxmoyZVFCZLhBNCecHBUNVLEzLWf/rIr5WRH1tSiLtHtEPx9jyyyErqoSQndjFBKGdcshiTGeOSFrFstX5DL6kMbCWEtCie/fnd7XjnxihYPre4MCOpTeK5B73qBFXXBoU0KyMQtlyaYdk5j8aXyhI17Q5ZlWXLX1ur7gdJWnbdp1ULfZqc++31qUfxW9SMGFXNWjEJcM4tHgWg0vYBy37GgTp9VKSicqBuinSLcxsT4KI8EuKCHLjllldXa5NfWvz+1e1zP57cqUXQPwqI2HcPAADq6uo4IWQLIaSOEJLVWoYuIYDiTMjSaiuuAfDy6KdXYeX0Uf8xEBr6egk23B4FodGPLx58anr4L0P79e7Rtm12DF6DBHg8CQCAzp07IxSK1ghKTEw8LpIQIQR7du3E9ys2qstzy761ten6bkbbnvzAL1+I36OaHQlGRCZUOldRbLcOnbps1srpI8xfjZBSpLVxExBcCGYCaBaEokDEOdCKakYAcCYghN7l/MwTIhH95ePdeOnynrjwmVVp487ufcuBCvXG0upI15q6CDEtBssS4IIfEXFCKZWCQS2FUpricrn6SJI8/KJ/7Hnx69t6fwYAP90zGGfN/gXL7v91w83SN6Mr/huf7HR265z1si8UzADAEfUeNqipvNZnHBo7a9205VOGrThr1nqkJch47OyofXKe19GHEz6jtqxqqGFxEEAREDIAKrhQgoFQXXV51RzgqleBT5rs27s+341X/hDd2HTm8uKBwma7bV9p6MLymkh2rV8F4wKMc0QF0QZ2IzZJIjZCSJKiKB1sMh2hBut61ZYfegxAwW+foaqAEMICSEtlNmAahu4PmuKDHb7RxbXqjYFw+Kwyr5pVF1BlqyEVrD7myGazDXA6HRMAet6kv++a+e1fT1mx8M4BGP3MaqycOjI21QwA/H6/cLvd2xRFKQMQQ4wQgaQ43UyPXDF+btGbP93aKfKfAqGr3szFJ7dExeCJz60YMDYzNG1U/65nde/SEcdaTchmsyE1NfW4vVtNVRXWb9mGL39Yjq0lkVf09qPm7plzVdGvXHMcvEuEJBNKr3cl2rcD+PZXIJK1GNJROLhoXdIRnFMK3rKAJSCE4BBcPycD1pzjPM6T5mzGG1f3wZD7fkgZfVbvGcWVkZvzinyusKpDcNEYZEkJ+c2wC1iWAMBgmgHJZrMNlSTphXNe2mJbfM/gDwGAmU1rsZXeiD0xhXcvKqqhTcV7EULaUSrNHDPz58nLppxRcPuPhwAAd3y+N4PLtltKKsJXFJX4SEOqxGGiI4xQnWIEvVlnTLlSWT/raCC6Yd6OBhAiTy8vGSkkadr+0uCEg2VBGIYV9YbWt5k02V4BiwmEtLASqSpqFyzf52qqjZoWQtRQDdG8BE2QlJqaesUV42/ZXxO5sLAsOLCyJgTDZBCifhcb8atQYpqCQWExAAAgAElEQVQMkYjqstsd51immXnW7A3X6Vpk58qpI8VlCwTmX0JaN1af9fxGbHhsLGRZrmGMrQchse0yQSiRHe7ekZK91wLA6CeXnzg/ybt7cEt9GdhPbonqzVe/suL0c9ppj4/q1+Hifj27yDabHf9NqqmuwtsfLeDPv7tg/pr8qgciOcOePRyE6hn5+KgwhHYjlN495pm13RpBVZGM1lUzwSB4q3aqQKCCAzQWKYdzzo1JrRm2j5WyZ+HbO4cAAL3mqtOmlFarf9mRX+MKhbXoDin08Ejvo8vZNUSEA4Cu6zAMox2EmDVm1s/jAWDl1Kald0oajbQ4/MMbPpyDUDpMtsmzRs5ck/b6ue1x3gsbHekZiRf7AsbkQ+V+YpqsPn9L1KfGRPP9hBBMCMGlJuLITp2xHO9dHzWsP76seIhFpWkFJcEJ+4rqYBhmFHApASVNL7WN7RUCzNSEpUfydF9lk/XCTDMshAAjzSayChAqIaVt5z6ldfzBHfu8A4vLfNANq1Hip4Q0RvA39LMQgKZpsDjrb4YDM2RKbQBQ+P1rsXnNlj1weuOAMcv6kggR21YTBKCKI4lI9NqxT69OXTljLMbOOjEFlD64sTfevHko+uwV5Py3DmZd+8qKC87IMKYP79PuwgG9u0kOpwv/bYpEIghHQqRtt/7q0Gsf+DT/tav9DZ094fW99WoDsY5LSAahIJSOIpTeM+aZ1R4AkGWZAS3ZdQQgwIUQrUplO2b9QVBKWAwSJheCHfc0AFEW3Zr72XXlf6ys1W/O3VdtMy3ryNSVxgnAIDiLzgTStKrMGAPnvC04m33WrHU545rlU4KmxOrDoS4qmdCL7Xb7jPGz1yeOGNp+mKbzB4pK/MkR1Wx8R3L4P43/E5j8aMz+5cmxAIDpPx3swKl8a3F5aMLBUn8UFGJmGALBLZhhnw8QOzqPuaamqbNUNQwADGg+o55SCpVJ7r1FdY5aX6QxzSc2gV0C0yOXU6p0vuTjENny9t9iA6IGWvnQME4gNnHOYi/RRwiRHO5+jOk3AWg2F+p40ejly/uNdux9bFJ38sKYAZ3O7d+zC7E7nDgZKCcnB3fddC3pk2xcW7X+25vPvPs9d0OI8qLbezXYcazWJrelh4UeqBGCs5Z0p2jSH6FXUSJNBgBZUXgUPFpRpmKUXqLGTNHySkSIaNnW8HtoFAghuOmDre1MId+2Z39tqmlaR+woQwgFN3VEKguN4KHdRcGSvXvDVYW1TIu04kSQ+hkR/51LpwzDiEcWNjEBCdM1jZCWMh+iUhIlhN6Umpr4nGHyuw9VhLp561TITW04QQAS3QeQcNMg9pR2R3TqTV/sAQA88/NBh+ywTayu0y4tqQiC8eYLFEYTzyWg/v+GDwQH08NVRtCbv2z6WL1piSgiCBEWIc0PrhAChm6AMwYqHf6M2NKTBOcwgrWDq3evbvGCo34cO2t9dHljVkhw/j4EixmFqSQnE8l21egnlw8CgDEzVx1Xtpz+ZX7j96LCA10DlQcv657u6NG/d3fbfxKEVDWC8tIShEOBI44bmooDhUVYv2UnCg6Vo7Km1hcKhUpNXT0qo5BSYqKl2U0ImBY2dF/lNm62XJ1NCAFBSCoovWPU06tGc4urLTHXYVgU4+ASFluA6/ENuxViJQCgR98OVxYc9PVWNeOICUkIBTM1RCoLg5GaQ2/4Dmy5qzZ//d80X+W9eqBmDTebF9CIJEMIft2oJ5d1WPPEeUeLd5ah1VZVLOWm2qIEUA9Gbt3ktxaWhs4tqwyi+ewaAmbq0H1VESPkPbD6oaFHvODbl/cGAIRNuWsgbJ5fU6emaJoBqcnE5ejUtbQIzJAPZtgHM+KHFQnA0kOwtBAEswp0f+UhALjim6PZYceOrQ3rY4sltwghoJICCA5LDcIM+xHL5g8CAkSSYYTqMrW6ChKT16yBlteH9kuKi3NL+0owfieRpD6x2X4JqGzrJSzjr6OfXnbvimmjgqOeXo1V049DUf0Hwnj6UjemrzRcHd2ibeHOtd1r92/WS8qrMOg/BEDhUBCVVdVYunwFcvfko//AwUaHDh1s1AghoJpQDcZ37N2/61C1f4+m61pZUGw/qLk/LZ/3Vw0Ahk/5HGtn/aFRyohh2nJuqvO5pbcFoX+V7K6WEwAJ7a3Y7A/bHfwfVJabd5xF7ZmCxLhP5DHsrnRci2YRQtDvjvc9/hAf4fOriUcV6yMURqAaam3ZZ1RxzC74/rXG+LfT7v5wP2fmW0Sx92zGnALJ5myj+yovAPD3hmPd7vkOBS9dgHBtqRGmyiMOmz0FBKfLdnd914umjGMIhjQEQ5qNc4Ymk5kJAbd0RKqKgpqv8iNJpt8f8fuYucCKW/GJT5d/2ewd7AsYw/wBvWkQJAScWzCCXuj+qmKma3kQvJZIko3KtnRqc+QwXXVzS1+T1nPooYLvX8NnFx59n60fPy16Pf4jJy0VOyNRZdRSAzBCtcxSA4WCMR9VHIn25IwesjOxRaCOJohYEm+lKEOTPuqxz/6MpQ+citFPLqkikn2OsIx/UJsdsYR5E0qcRFYmck43A5i7avpIjJq5BqumjfhdzHjn1xWYc1EW8Hw0JihQsG3owXDBAwh7u7qJkbhu3TpUVVVi9Ogxolu3riesYIplmlizfhNWbdq1b+PmXw6W1ARCuZVsb2rynjRF9w2sU5lPSI7tu8vKfzq0ft8BEKeJc2/0Yv7kMAB0vvLpRhCqn2QULepmAoQQiZlGseD8U6ZHBhAqD6eKrcVxoJI01ucPptttVG4FL45FlSL/eRiK0kVXnzuwrCzU2TCYdPTE1mCqoTJDNz7Ke3/KEUG4m16+ds2wJ9Z8lOB0PKyqWpNb9kqKQ2KGNhrA3/+0XuCfZxAUvHQBBtz2Fn554WoBYOMZU758SIT9swQXpynOhGbBiDHWaFNpajILZiJcXhBRa8vfo5Jt9vb37i0DgIeFwFOEACtuBQCsW1eTwLjop2pWmqoakGV69FAIAd1XxSLVB1cyPfiu7ivfFqmpiEgOl5TQtnuS4knraqnBNoTQlRtevK754NboTjKitSE2Iz6o1QeLzUjgGwKyQgi9giqJSdTmuFV2uM8FkW0t8QRB64tuk8y6/KFoePjKGWeLMU+vni8Eu0FwNpQQKQZuIwClbSkht4x9du3u5Q8NX71q2ggMfWI1Njxy7JLRnIuy8LAQivlpbp9U2RhSXfDLRbu3rT3PMjUM6ncKHzBgEMoqKvHue++id69eGDN6NNofQ15YrMSYhW07d+OHDXk7Ip7sV9w9+pUvW7HTi4LvbV0mntOnzB+s1XJ3H4J/6a9q1GcroqrFn+Yg/593/nYdlWNRZAihzjVPTCwY/vB3j1t6aJ5Ck7Jb0s85F1JtbWgAARfNbox5mFgUm4oU44knYBmQZWe3UKg23TTZUQ/jlgXF6a7J6t4P4z/a1r53tzRPWht3MrXb00wmJefu83XZd9BPIhGtuWqjFECHm3cI+a3+v3oxe150E7b/42YAwAvPXrL8vofmP2RF/E8S4Ey5GTBq1oZDKDhnCJbmW7qvch5VbLN2vBsFocsX1IPQYeStjbRRFLmLafKmx4cAlhqG4a/arnpLX8n78tmj8jfuDYmti//6vC1ScSAaJ/b3PVj0195NDGxy62PPLOi15TVGqO4Fw1/9+Z75z5Y3tHXo1K/rXC73UE03MkVrpTpaYY5mV82xz6zF8qnDoVkRr02yP8MNbYHs8BARU/IbAQgZKEnk/rGz1h1cPmVYcUZqEkY8vQZrph+7ZLTqpqe6Xzru9IcyZXEeVUJJA84bDVWNsL15e1HjzeQDBgwiyYmJZNv2Hdi1czs6dWiLtjk50HUNnTp2xGnDzgRg+7cmhN3hxDkjB6Oo2n/K1pDL3PDqvY0BYgd+2FP52/MvYQILpGjnHw1CAOdCjqUfCZVkAHDkdFmmlRU+bqmBf9g8qRCCN2uz0HUjaopupeBa7CoSYlXOjh8UOS4HtC8QDLJ00+Suo/hOCBBJQWJGTk7nThlTnG4luL+GufeU+5MskydbnCczSyREIqrcoqFfMFfgEJw4rFzuZ+cRnP3yNiy5eyCGE4KL57MVlRsWPGSGfTMFMEJ2eGLsNwohOIKle5jur3rf5k566pc3bisDgIu+NPFFEzE1siylGgZraxisyaJ2EAJWxG9YemR5Rt8xy/K+fBYA8KgQKNoIzBtK8KKHcAAaAPT949NNgxAAJJqtDqcQHNwyyiTFsXDvl7PKCfk1knzDnppN1/QZFNIrKzNFSxwRw4rb7CAtnzocALD+0QlizMxVywSzPmCGOpnaHIgxE5eC0AmSTKeOembdvd/e0V8d/1LrG7RNeG4VOmVnYu51PRuPtevSS967O7fPjrDfZFTZUac5egeNFCW32CO27/0JvXdsQUpaW1FeXoJ9hRXEkEuQlJwKJiRkt/Oi10YNDqcTgv9+3YFQCjUcRE0teqWJ4OMT735lqnBlbls486ojEOEvXoE30kgjCDU/B7gS08SuL8W79C992Nhn1/7LCPt7mhH/PYo7GS15046n3VgIEWs54OOnnGlfAAAiYdPDeVPPFyCSBA45raomMr6mFrAsDsNkMA0Gxnm9Pb6leUBg6Sr15BxtK1ty90A05PB9dZnEH7TEmlXT5j+gBWqfsIOMUxwu2hp6c2YiVJqv6b6KT+wJ6TM2v/7nMgC48N1KfH1p08MvSbJLVfVE02RNj6EQEJxHuGXsX/3EuY0W48ebaWTuv6Y3/45mSmy8L8kmM3UDAM54aD7WP1u/39lXH8Lxx4lR1bMZz15DuZnWMKPFVXn0zFVYOW0UJKKELPBXmGWMJrLSMTYVDRCAnYD80W63VaVd+9ZjP90zWDSV33M4jco2Mb0ehO6cf7BnB1vgbNNbdObeLd42Gpe05Oy2dO3ufTVVFT6PXatJoEYlfq71gjkigpEkojvawZKS4I8AhCooOyCwsWBnc6ElxzYhQeCSOFISQuMVk3/k7Ju6HQBOTToPKc/NxZJbO+CNtFaeMvgRYMsT4FzEJKIdXrBq+UPDQ6NnrnzB0iL9qB45m9qcgDjOHvPfku1BAIKewHLFLZJpcdocDxMAlmWhts5CY4nBo5QActixI0ORLS0M3VdV2n8AmgzsXDltJM6avQnL7j8Nz8lEAFh/3dy1n1q2pDNq6rSE1na6EUKASFKRLSlr5uZX/1TW58pH0H70ZHxzY/MJtYZBqGUJqdlSzQQgssKJpKgAMOG1vVh0R6/fqfd2jFnIJfUc0AhCADBqnAS0JC0TgHNQSbIEUVqRWlr6UYpevHTqMGHqoVxw/jzT1Zg5v961mUAIuX3IkCEPANH8nvPmbG/2munXjcMVHx6Qp76z5FJa+Mu8Dcs2PbV08aZrDh4oyaou92ce2La9N2GalN3OUyO7bJGQrTcCnpEI2XqSsK0bTFtbQHKDSG6AyBAQoJRCkmh9BChAJRr9UHIMH0CSAJW74KszQQzjJmW/0f+PywT9xb8QuDVGu9SWJxokotjCv6Oojyvn766fHKNLKZWmMT1SKJgRk9j772hS/e+ZcFQ1/+ZF8OMPRIwJ1uJGDvXYQqO1SOprWxz2YSaYrsII1SJSU4zAoV3wFW4Vdfu3aP7CrXk2d/KcuwjhU5tBu6F90hq/P/pTUd+efbpfRCXF0fp2WwJUkpHUrmdGRs8hVwAguz99Akz1tXiZYTDGWEvlWQiobFPsSekpAH4/CAGAIxz7uaKJ0VXk1u2HBAChAoT+fiBaPmUYRj66CADw81MXGCDkc8HMj5ipxjwBhBBgjKUBuPe8OdvvG/XMz/LCOwdg0t9biJUMVUp7tv3SZdvmX4Zu3V6YvO+gjrIaTg9V6sq+ckmqqZVSbSQpPT2rPbe7qZ+zQEgIxgEKcAZhRUCYWl/mQAKsMIjp5wSWIJINRFiIBgGLxnyd1j+kPqUAMORs1FWGRvjLy++q+PYfaQCw5FgYIOUGiXPhiBGHFAD49LI+GPHIj9E+NfVfhOCPWlo41Iru8W8jkd0uEyFigBgB8FZnZ8s0a2sI582pV9+7RUvhWhYLc96MDkoIuGVAqyvXQxUFkcCh3cFA8c5af9GOSn/htmLf/i176vZv3uAr3PJ9oGTv++HqQ8+FfHX3W4Z6sxWpmRwsybvx6nfv+QkAnmmiD+9ZsA/PTOwCAJj6/f5ukt3+2MHywPkVlQFFxFgoTBCayi3z3gkvb53S94HvpCX3DcHZLzS/ObKuawHOubeleuayw+22J2WcPuzhhe0bbZJv7sa4mU1vN971bz80faNASex80gQHpGVnKYS0vsOQEEK0Jri3ajBd/fgE9L3hReS+dy/Se5xWXbV33SvcUHtRKg0hsi0me1E9GGVSSu9LSkqyXfB67pxv/3pK+NK38vHlzb+WvL5w9mp8c/9IfHbbMP2s6R+vIMG9C9zO0AUhZjLOIHHYFeJqj6BWI5eXVrpcdstMTnHV5KRkGNUVRvu6iHASFhSwqmucNOIxWZpTYzIcStBMSYCpGw5HUE8gwqiExy64QToQCw5yLKYNAgFO7AgZbkh13nMNzT8TwDFtMuk660xJCB5TBCapz9MBAMkevWTN05P4yMcWfyUY621poamy04OWNzv4/SRFo+laM3iBUEpsDpfTFEJ+bekOm+zyyOmpbqo4FNnmViTFLklcSLLFJdkwIesm5KhLnksHyk2zvFo/OGWQ59couYK/109MvVwIEQKQ3ETngBs6zLB/ox7yfSnJSg0gNG76g2qtN2xpEZObEZ3pkfChwpLA+Iv/wEZc86e+xUZy7ttjSQ0APETm4rx3irHwz0dKtNe/txMvXdIdAHDHZ3s7uhPcj5RUhS88UFxHGeeItd44ZwwQIpVSeldOTo4uT/1xzpL7hrBxszdh6f2nNQFEupdSWtoS0FFZoZKsjE102P98/adlc+dd2bZ8wS19Gn9/e2NJaoQ62uWXRqpfu6hD+f5XJzYjEXliZYMm5R6PxyW1JszUX8db482Yal30nnQ3ct+7F19enSRGzli4gwv2nKWFX5GdUnasod6cc1iWlU0Iuctms7mveO/AK5/d0KX6yc0CTz31MvSv7sE3948E7tgj3dW39HQb+BVee8/0BEdRWNWCusnsZnWN5Qlo1fY0d4R1yFBYJGTYFahpySTM6wyfg0fCsMFL3OnutU5nus9X4R1ATW6ltu1QlJ1i71hVdHCwFiih3J28vV0bKa08hHZ+XQLFseWfEmGB2BLBjNJkE/oxbyiYkpIoc84dMS5FUkNdo5XTR2PUE0ux6pFxWP3YOcGRjy56k5tGLy5pl1DlxESWKwolQgja2npjcycpbdq3PX/Gssp0ztMkhITtUMhQwA2HIHAAsAsBBxfCIQQcnMMGCFmSZamsuJz4fKH7ACz97X2DweBewXklAckRv93fT3BQxY6k7K4pSampJfN39lqAV5tOW/muzOp1oCx40aHq8JVFO3f9fOkX4u4vL4+67H8LQpe8vBHzbugHAJj00obM9u1SHj1YHr5i/0GfYjHeZKRza7wPIItSeldmZqba996v3l56/2nWOS9vx+K7B/wWuGo5Y/tbSuuIelNppiTbbuXM7Hb/0qrl7du6Sl0SRa031PZQwBjq9dUNLCmtXuCZ+MI/Qj/c17Q+mLcZLeawtOKCUBRZEiIGjypp3PT43wOizy+lGP34Eqx89GysfvI8Y9i0r3+EKV6wROApxZMccw1VxhiEEJmEkNsIIamXv1Pwwowh0eJQDbtGnD9ASdG93suqK2v+trdUWFS4qMfltruT7GpiQsCC7iMOexsa0W12lddJ1KqTqg/sULQwgoq9fUTiViZVbAeSh136rrnlx0Q7JzSxwyn+SLCmo05LB0kuOYFkd1nsSjavIXX+a2FCgeKKgjYhAFEAwQBhNT8qkgM8XA4uM1lI9mPWi9LSkinnsMeEQxTyquiqwwFg1SPjMGzaN1g380IIIhcLrr/IdLUrkeT+hCrHXSqiNCrwtCo52ZwyI/YRh8p8pwkBIoSgnAvCOJc4B+VcSJwLKjgnon47YwEBSbbBX1YGQ1Vzmrrvfp++pYNT5AvQ/gCUo+wwsg1UVnqByg/dPqFyQMdbQtuSPVapbOhaglNxgjhySsojfX7eWT66NqAPrPBGUhlH75rdy1YD+LSpZy64+3QA12HstD+lnD2y61N5B/1XFxz02Q3LahqECAGVFXDLatZ5UA9GHSml97Tr1EXr+p344OsLCGvIPBjw0A/Y/uxEUCGHdaZuA3AQQMfmhFHOOVRVzSJE/EEI46y62kBYoQAFnMGwlVZbF3IEvL5g1/ae77YDvj+uEPjXmCPvdc7DMwiJ2iBb1AoEJUQ0YeORZUWO0TJIWjMfxFz9a+WjZ+PM6d/i56cnYd3Mi4LDp3/7PrO0DBGqe9CemBYtnh7j6qDrepoQ4jqn05lx2dv7Zs+/qfv6hl0jnCLsKS4q7FJdXCNVqymSjZcjSC1FEsTpSUzlnuR07lUJ8QapZDGnsOsqQcQyaGLKx+60Nkv0OivB5Nh53h3D9vyNnPnrSw2ckteps2d1Uk6OtH3e1Lo+LywO48A3Q9yGr58pcmDCA5hhiEgpiCMVxJ7SdB8TBUL3QZICIDbnXOpKqvgdQCQDwsVj6jMqLz0MiADAmdgmqqI9No6PeHTRJiH4bEsLv6w4E1NjtxfFFtBYHwEutX43gmBIc4TCuqPRUYHDNPdG8MER6jyRCTRVA9e1oySZi1/eiK/uPp23nblmEaHkLCIpTbqbLMuSw+HwqRUVVg+/P1DtdMhVNpnq4GG7ZfIMy2Kp/pCRHIwYMAwGQhUH5+GpE+cW/Sg7E/3fTD6sDtWZzwI/P4SXc1+TfXXhGXnFwWsLin0Ow2wGhOo9Q6GyfVA8qbC1EFYRrR4pejDTvFPbtrIcwKKG9Kftz0bVp4X39uejnlq+jVJpLZGUjoTKzY4TYwyhUMSmqmo2OUy0YVzANEwwi7V3eBKyAOT+FoQAoF27vtB1UCEEaTFzCE1vAkopITGZygREayYceiwT6OenJ2H4w9EUmbVPT6omhL7KLf0dPVADSmOvaFgPRp5IJHIhgJeueO/AlY1qa3Jmld/gSyMsrCpGPmRF+0JK8twlJ3s+MZnqLyutksurVCniPQCzZjPRWcSHNt1ednQc/PzZ/3psvtKh4wdG28G//O23tZS2zTKLFjwf2D7v4ToAyLr37M1QyK1J2WnvyCizZLYfMq2qTslJ2pLoCNdIwhKgCkCkI5lOMHCtBJwac5GQ/HzW+bd4jxWIEhNdkhCwxQJEBET2VhyJiMseOhMjH4uax9c8PkEHkb4XzJpr6ZFjCFIgaKn8w69CB6VCiNb5RAgwLmBZDJbFwFi0eqDgohF4osXLcIQ3UqL10ZJNZKjWmNG+d7fJ+sRUg+tEfbnSpjjdMAz4fKGEyspAl9KywBnFJf5RRaX+M4pK/V2Ky4PJtX4VhmHVp04RSDZX/0DZ3hu+mZyK8+cdVuH454cAAIsX7bHVBsi1BUVeh2FaLdiEBCI1h1ikungVEWIhMzW05CHinMPUgl31QM3pZ077/ohJ05Bw7kzJOsgM/UtuaMVRCavlpFvTZDAMC5phQdMtWIxH+1qSkqniaHd3VdPjR6J51607Iw4LaP30MECRJFluVbUjDZxGjh8QAcDap87HiBn1YPTUBSWUSjO5qX+qBSpRHwQcszfNMAwlHA6fYVnWc1e/f/CJQdMWJX14RVaEu1I+UZISL3MmO69xpGc/PHbB8693PfuKR+RE52dApS6JQsOVxDcmts951JGadKWzfa/nN715X8FsQviOudPMvXOu4QAw8sllTT574t2v4HVCzO0L5qxL6NDnMdmOSRINnUuEb1LOGRP+7Ei2LyGRXUQE9oFo1RBEjjIXobBC5ejQITU44txJ9uFjxrPnrsoRAHDGfR/Gbqx2OSRAKEK05nGI7usdLj16nFY/djZGPrG0HozG1woh3uamvpCb2jF40VpfzygVsfn5G6CtcVvqpioINvcWHJahH1W3Y80Dp+L0h5bi+1u66dTmfEz3VRcIzpq9KecClsWhaQbCEZ2oqgnDZGgoZ3r4qi4pdiJM48Zz3yzxfH/90bth+VVLDoZFkm4cWXbktyqZGfEhUJy72ZGSeCMI3uSmViWY1UyXRR0K3LLATN0FYslHeqmjWsGi23tzIsnLLT3ynqkG9agwTFqSWo8oUhYdBwoq2z2C847Lp76S0KSt2sGjjr2WKjVEg7OoYlMoAFx5eB9KVIpRImpV+D5mIAKANU+e31jDZc2T5x8gVJrBDO0L3Vd59GaGrYMRgsFgB1VV7+vTp8/7l76Vf+a61/7i3fbZrIVzv3vjk+0fP5n3OiFswR2n7RM225OSYo5RpNAYe5JzcvfJT7+Y++Xsnzb//a81ADBi2oIjJ+uMs5pm2DNvb/z+0zOTS3Z+9+aPeUs+WLRv2Ycbvn9w3DYB44HEzt1vdKV7PnZJhyqcwTWmZPkFAEjONJghzXNg/aI/bVuyoP+1t70mAcD6F66Nud2yLEtCwM55DJU6CKhgTXPh6kfGNYZXrH1y4gFu6Y9bWugAYlSTSUwwQSUhxPHZyqQZHhCcqdxUmywgNPmZ6Biumj56O5GUO9SaQ8Xc0Bqzwn+DC0e1qOljFBAcvsLtmUkdE5WmvZXRq5q3F1NwQ0Pt3g2lrvQOf9v44s37LUNdxS3jHW7FVh+ONTE7z3k5uv/aqhljawXwTzPin2eEaqMz+VjCNAgFURQnINpaaqhJ91h5+WFQQ5pBkCiIUNntlJvA4VYXpmhUDeWQpeMPRACw5onzMGLGDw2S0T5CpGmWoX6q+6tA6LFFt1mWhVAo5PL7/ZPsdvtb1/6rZMqoZ9clj6gvTzB7W3TANs97tHTXjx+s3/3TR+u2fzIr78uLaAgAXhICA/84/f+1d6NFpbQAABO9SURBVN3hVRXp+5057bb0ApEmiAIibRdQykYRd1XAgq7CoquCiqvYAogg2QV2Q1MEK1hWVFhcxFVYxQYKSglCkCoISahJCMkNSW6/p838/jg3oRiS0HZ1f+d9nvM8OefmzJkzM+ed8n3zflg3bXCjnvfFnVaZ9puwpM7f895/sfiGhZP+ISfHPeHp0v/Jvr27lDqcCmGGDh4uQZWvvCwsJ7+MpJa7Etr3OWPfGUGgAgjkRrqiUKaevjDXTrkevScut3q4Js02g5AJesinWV+gNYqzvDiPH5awFSEcDW/diI3aaE16hP40vUYdpO6DMwOcs1JmaHV61z1KCPrP2RZrZwNWEkG6L+Q9tFXzVwDMtBxcatI/XTHFysBa7uLQwtUo3/F1peROGCd7xMBpRhmCZe2pq/wouKGhqjAvILkTxm5+eUQeAOTm3FTJDH0+06MruKlZzzvlPkJo7ciM1NERrXyyMzJzLKnl3JyBB6kkz9QCx16OHCuOMl07/j51ve8JdU4IBRgjpq6mMVOv06TKtHJL+5rGqriudmLllYJI9KejZaoQQuiJ4mynvq+1DihxKikXhois0dAA9Mm2PoLcaTcXgJBsUw2/o1aXW9YD0rjkayQ8w+EwqaysvDwcDk9s1bLlu3cvOjzg5nk/KGO7WgV+96L9J/WkNcgiBNsWTT3j/K+efmed16+b9R2mEqJvezvbe0PmlS18ITHeDBZDiO7hiiO4xtk85b64KwdN6jLv8UPfZv3qjM1UgZBp6Boz6/MVIZzUeAYzR1r94V5ypw6y1o6e6M5kd+LnnBkzNJ8XZiQIMxo7IkGYkQCMSBBGJABTDYucNxxgkQoii4RDXA0FYMYEt46ndwZHNAgzGoKphsG0MJgWATd1aL4KcNM4JChu/+ny8HVWV1wz3XLW2zBj8GowdleksnReoDS/RA0cs9LXIuDcIiZCjn/wnHMwLQIjEoQerobv4PZwVUHeGkFx/6H1DQ8uXtjHZdyXx+vgLoEFfX7NjIZqy86MBK10IgH4i3ap3DRnv/rmY0sA4HcvWQEQHQkXHeAcc/Swf58eCZxc9tGAJSymBiVmaKanSfs663VNdj/0ic04cnNu2q/EJ0zRw74nA0f2bo8cK9bNaBCmFgYzteOza87BdBVGNAgjGoDqL0PwSH5l9FjJLkFx+ep6zo2jBiAaDuuRoF/Uo7G6jZzYVgIwokEwPUqgh36SV0lxRH3VldAjQZjRwCl1Hmtr0SAIiEYFucHR0zmj98SPkTv1ZgBAr3EfXMw5f0JQXA/LnmSFiBIaH67WIhhKKZxOJ/N43AccDukzQcB7hYX7Nn87/moDAG55bSf+/adOuODgnI6e8fpXqzdW9YtW7GZNW6b6lfSLF7Orbh+/YmhzHwC07tALXWbkYtktDRflo0v24JU722PkP3+8hEqOBUVHA73D4boVAAmhCFccNoMl+X/euXD89IbSHvDGQXw28uJYfXySofnK71f93m5EkERCBTchVLI2gTKDM5Nx0zhCROWtHfOz6pXRHFvFSe7MjwZqgcqHtUjARalQM9mh1nCEUKtDi3XRsaUha2sKEQggcEIoIYQSQgVQIfY3IUSQSNRX7qGC9IIrvfVLuVMHVdWXl2um5+KbCZZEzRV/nJkiJ6R0ZVpkIAHtITjczQSHJ1EQZSehVAJAOGMGM7SoEQkE9Yi/wogG98iuhBX+ot2rCz979UB9gmBXPbNcombkmZC3+DdEFD0ERALAGWMm19UgM/U1iRd3m7Mu50Z/n+zlWJ8zqPbezCmr3NHqIzdpwaphBEjlIBIhoBzc5Iahm1rkEBWlt3e889TK+t73N1NWYu2k3wIAOj8wSxGVhA5g5nXM0PoJsrONoLiSBMnpJJQK3NQNQw2H9WjIx9Swlxv6Xio7vhacnjWBQzuPFix/qU7Sy5z8RZewt+hhQ4t2JgQySI0ljLOaCL6mFlklCPz57e88c5Lj7ruck3njlkyJVpf3AbgLRBAJQGtMZISDqX5vOOnSno8mtOq067MHW/ILSkQA0HvCUuROt6ZGV45+LwOUjhBk55OSOylVdLgabd6vISNCCCRJgtPpiLpcjr0ul/KpJNFl825u+z0QZAAw8JXv8emjvz7v/DN52V5MvrUdHlvNr4588rcF6/fKLQ01wpunMOZykaNyWvpM2rTDwg9H969ubJpjl+7FrMHtcMcreRm9erb6655D/mH7Dle7TlcunJkIlR88Wr1/24P5S2cuv3VJFMvurN9lKzNnNdZk94t9qNPig6WFHkF2EUFUKBVFavnvmJzpGuec6QkXd6naMndkgwsabYdMdUEPJlFTFSiVCLfYhnAAsttJZbdTIKJMiSBREEoIESmIJBAqi4RIojVGZwI3DYkZusiYLoAxgTOTcs65ICnbml51W8nyuxIb7LF+9+IPWPGEFb3ltk853fH6mMTEls2SgITWarC6BTe0ZM65E+AEjEWJIAYkT1KpIPMD3t153qbdBlVtfO722k2uN78fxsdDjgdc6PTMKuycdi0yeg2BI+OyBNkMJ7gSEyUxMVkmANEjAd1fVKwqCam+3Ysn+zoMnoAfl1r9xLXP5mHVOMtbutO9sxxaoDxFdDhlV1q6g1CRcj1qauWlaiAQjMpud9Wef81sMIrKXWs4FmUe/0wvH5bjoYKe5ExpmWGE1VZ6xJ8MZsogUEVn3DHJ7SmJVBSVB4r3B1I69PZtmfeQZuXnWex8d9xP0m8zbJZEwxVJHrfDLSUlKxAVgXPGCUwOMB4q92qmpvu4yavzl80053KORwhBl0ffxvZXhqPtkJwkovnj4pITJOqKlwgVaSwEKLgWMqoPH4w27zvkSP/xfY0/N6DkeN5w1dgl+G6WNd3pmbUwmVDxFirKT4vOuHZyfCq4aeJMHO5qCEmWZbhcjoDLpeQnJsZ9DZjLXxnYZF1NYkPe2YX37+t4XsloVh5vH/5xVfa6r767bV+Z4DS5CAEMbjEAdxwrIA7pAT3Osz7vlbENyK02AedHQQjBqEXbO7Vr1zx798GqgQeKfe6fin2dYI0J+bi/5MdvHJ7kezbOvqvRm4K6P/Y2Nr88vNHv2XnEbOyYP7rutLL+ic1z7wPUsw/OEZt+khUAvqwAObjeIL5DPxDN50WovJi0vnY4+/A2yxu6R9ZCxDfviK/H/KrBdHuOXYxNs4aesMi7WSj87DXJCAVEDk4t4bQoExQPy+hxk77p+aEnTUN7PPkP5L1Qt4Gh84OvYseboxrMg+JKxG9fL8DyP6bVXrtyzPvY+PyQRpZOKp4Ke/Gcq+HPsO/kL7Bu8g0nlWun4bNl//4toqmrhIgSS72sh7n171n6qSO9AfOP4LMRF52U3u0rOXIn3I3SzYsaXZeXD52E3YunxEbgB7B9cQ5KVr3V6Puvn7sXXz7S7sITkVUR72Hj88Osyn5igYuIUi9ChXGCrPzOkdwchHPws5CusAhJgsMhBz0e14HU1PiNpql/OnfuO58bnzxd+6W0GPkRit647ZzfY+SfZ80+VMTuP+Sl8apumV05ABI8CIdHzXc1aXZ/ctdrN6wck3laIjoxZPCbm0uHVpnyqN2F3h5HykKKbpj1Wh3U6qNaxZ4Nz+/9cPoz+JliDufIOk/6IP1m5NYqg54JaqVWG4nhmzne7t64//+Bc1xRR9o5nCO7Ec8cXc0xO5GctoM9G2RVccxJavjeEVs45v+qcc/4nHPcWE9+xoY4ZrlP//vrnOOheu6fzjkmNBwC/fyj5+j3sGl2jIzG/FMQRKktN42HCKFZjqQMiM44MOPsAp1aUzYRiiJF4+JcZWlpCbsFga3csSP/wxVZfQ6fWNkX3b8MpfMHn9Vzbpn28ZDglhXPFnmllrqQBC7Ggep+uFhBUE5vMkVKu/jNjXMfq3MR8PaXN+PDx7pbC9+TVrV+4J7u47bm+wccKKluXumLUNPk9ZKQqauo3r+1QHR6hn3/8ojNmZO/xJrJ18OGjf9VXDC5qx6jFyFv9l21570mLEs01dAgAjpFcse3cSRfZO3NOcu9UYQQCAKFJImmx+MMpKcnlrrd4vdeb9XSt7IXf4E9E08b2Krv1Fysm1h/7/sM59LqoaM/CoT0K/RoNJ5z7uB6xCU5Za+zSZtHXC27/Xttzk16n4mfYP3Um35yf8rQD9JnjL/6kbApDv5+t/fSiqqwU9X0htftOYfq9+oVu9f9fc+H00fVG2HBhg2biBpG3+zl0ABsilkUMv+2SlR9ZV24aT5FRXmII6UZBEk5o4XsukCpRUqyLOtpafH+5GS3VxDY5oqK6k+3bi35dsvUfqWNT60/ajaBdx86romqRWUjcEzgpkYouAAl3pCSWnq3vze5Tr+XO+Zu6ZL562Z/hCwN+KGgqkWpN+AJRXQ0Wr/G1FG2bWVBeqdrr/9mYuaBXhM/xoaYRdKGDZuIzgG/mfIV1k667vg60tjFTUw1chuhwlhHQnobyZNcG2z8bFEz76bUUl50OBQ9Pd0TTEhwBkWR7Nc0NbeiIrTRNLHr8g5pZT26JUV9pYfMO5u3PisW3Jm/lyqXXiYuWVvm2VlQ0b5jq7hr4hNdN4airE1hkT+pvCLoVFUDJuNn5BBbtW9zxFQjY3a8PWae3Txt2ER0njFgfjEOr16AHxZaa6/9py6V/GUVnZlJHhNdcbcoCemJouICqACcwwiJ126wjO27IQSiKPKEBGckKckRdSiiLorESwgv1DSjMBw29oOTMrdLOpaQ4PDHxylhj0vUBRqbEnFA1w0pFDbk6upIXJVPTSWcZyS6hbaKU+zIOO1gGtxztDLiLCkLujVVJ6bJwU7Y6Nm4qSZFsDQf/uK98xMv6frwhmmDtdv+peKj3yt2K7VhE9H5Rq8Jy7Bh+q0AgMc/uhO5awalckPrB0IekD3JfSVXvMuKHknrjVLROFJC7RpU7UZMWEHwFIdsxMXJutst6bJETUoII4QwQmBQQjRKUONrQAm4xDlkcFAOCIZhCr6ALlX7onJE1QXOOBhjYLXPI2cwCrICdQRLC+E7vPPTlr2vuPfLJ4cc6/anudj62iN2C7VhE9GFwoucI7vbaAS2zQEAdHtonsC52ZwK4kBBdg4RnfF9JFecILmtcCfnSkg/Jaa6doafSB6nhILgOGWNJ6atw/lJRXjGFllCQKiAYPFeBI8Wfp7QqtOo3Om3HrCbpQ2biP6DqBFaq0FmzsdK2FveimnmDYLivIOKSl8lPgVWQEGAM+O85+Fsl6XO1X2GUBHM1BEo/hFq1dEPHMkZ2ZteuCefEIK/co6/EGK3Ths2Ef0n0e2hudj6ujUN6fbUM5DMK5xMjzbnnF1NqHA3pcLVSmITyAnpltKfafyiC52KMrRQNQJFu2GooReVuNQ5bW+97/Di/oTf+MYBfD6ytd0ybdhE9N/APVs4FpzgCdrz8QUw9JAiSI40UKEn09XhnLGBjqSmxJnSIhZd0jgnS9t/vrQJqCAhXH4AgeI9Xqq4swVJWdK8312+j+/08L6TvsS6Kbbjog2biP7ruDrnG3ybfU3t+R+WceR/9ZbIDMPpSExvrwWO3WtGQndJ8cmJrvTWEJ0eaw/bhY54eq4FLYhgahTH9ubCNLQv4pu1mxCtOrpr6xujdGuaelzBwIYNm4h+Juj++HxsfmnESdeuf+VHUrR2sZjSvld6tKrsetXvvZeK8lWu1OaykpQBIog16uw/mxEQAcAME9X78hD1leXHNevwl2DZ/uWXDnoi/O9h8RwATuedbcOGTUQ/E3S6Zzp2Lphw0jXOObo8NF/MSAsLIWRcEjxaMthQgwNFZ/xlrpRmcVJcikyopT5BqHBcVpQ3LnLFWRcliW2ONQ2AMRhqCP7Du8Kqr/xHT0bbuaGyfR8kt+sbXp8zoNYM2G/mBqx+upfdEm3YRPRLwrXPbcKqp3rWng9+N5/s/NdCodPgLqJ3P2/jO7z/OmZomYLsvEyOT01T4tMSqaQ4LEVREVRUQEQxJhtay2zHQ1nWOaI60ZxPTt45zTmYqYNpUTDTAGcGV31Hq8MVxaVGNJQX36Lj4uCR/LWeiy6N5r1wTy0B9Rq/DBtm3Gq3QBs2folEVIN3Oce95Lc4Mer8Da/mksNrV1Lvzm/QefhzaZWFeR2jlUe6ElG+XFTcLSSnJ110xqVSyZFCqOAgsfAFhAqgogQqSCCCYIkL1kaw5QDj4MwEZzqYroMZmiVlwgHOTdPUIsf0QFWZHqou1iL+PZI7cUPTbtesL9u6qsJzUXvju2d/X7uA1TPrH9g052675dmw8b9ARCdiKueYeIrfzajDHLk582iwbB+p3rcFXUe+HO/bv7VZoGRvC9PUm4myq6mouNKppCQTUUqkghAHS1LVCUJlAhKTvQQHZyZnLMI5i3Cmh5ihVzNdqzTVcLkW9pUQKhQltOq8/+K+rQ8VfLEiFKnmrN+0Key1y47nqdf4pdgwY7Dd4mzY+F8lolNx3Zxt+Cqr60nXnqzk2DB1MaksyANjBlErQ+g59j5RC7Ry+Q8XuoOlBc5oVZnDVEMKY4YEzgTCQQHCQAgjgqiJzjjVmdwsEt+yYyj5sqRgyYZvokfyNjJRcSClYyZ/4dk7eO9TCHHI5xzv32g7J9qw8f+OiE7FDa/twxd/uqTO30bu4dj3+XZUFWxEyFtEzHAAjOkAWCzcixWuhgoSRHciPE3b8vQu1yFzeFM8fRrv5ymcY5LtGW3Dho2G8Hj5+bGePXLQ1i2zYcOGDRs2fvH4PwlmRGcjBwI/AAAAAElFTkSuQmCC',
            buy: 1.3e-7,
            sell: 1.4e-7,
            last: 1.4e-7,
            volume24H: 25072561.42964006,
            creationDate: '1999-12-31T23:00:00.000Z',
            lastUpdateDate: '2019-05-02T15:24:00.770Z',
            endpoint: 'https://www.nlexch.com//api/v2/tickers/cscbtc.json',
            enabled: true,
            tradeURL: 'https://www.nlexch.com/markets/cscbtc'
        },
        {
            _id: '5bc6f85df9a8e5c3f0a4a56e',
            name: 'NUEX',
            imageBase64: 
            // tslint:disable-next-line:max-line-length
            'data:image/png;base64,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',
            buy: 1.1e-7,
            sell: 1.6e-7,
            last: 1.6e-7,
            volume24H: 2424066.49650108,
            creationDate: '2018-10-17T07:00:00.000Z',
            lastUpdateDate: '2019-05-02T15:24:01.801Z',
            endpoint: 'https://api.nuex.com',
            enabled: true,
            tradeURL: 'https://www.nuex.com/exchange/market/CSC_BTC'
        }
    ];
    ExchangeService = ExchangeService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExchangeService);
    return ExchangeService;
}());



/***/ }),

/***/ "./src/app/data/exchange.ts":
/*!**********************************!*\
  !*** ./src/app/data/exchange.ts ***!
  \**********************************/
/*! exports provided: Exchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exchange", function() { return Exchange; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

var Exchange = /** @class */ (function () {
    function Exchange() {
    }
    Exchange.prototype.deserialize = function (item) {
        this.id = item._id;
        this.name = item.name;
        this.image = item.image;
        this.buy = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(item.buy);
        this.sell = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(item.sell);
        this.last = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(item.last);
        this.volume24H = item.volume24H;
        this.creationDate = new Date(item.creationDate);
        this.lastUpdateDate = new Date(item.lastUpdateDate);
        this.endpoint = item.endpoint;
        this.enabled = item.enabled;
        this.tradeURL = item.tradeURL;
        return this;
    };
    return Exchange;
}());



/***/ }),

/***/ "./src/app/pages/home/components/currency-converter/currency-converter.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/components/currency-converter/currency-converter.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"conversionService.initialDataLoaded$ | async\">\n  <i class=\"fa fa-spinner fa-5x fa-spin\" *ngSwitchCase=\"false\"></i>\n  <div *ngSwitchCase=\"true\">\n    <form\n      [formGroup]=\"converterForm\"\n      autocomplete=\"off\"\n      novalidate\n      class=\"form-inline\"\n    >\n      <input\n        class=\"form-control left-element mr-sm-2\"\n        id=\"inputValue\"\n        (focus)=\"$event.target.select()\"\n        formControlName=\"inputValue\"\n        #inputValue\n      />\n      <select\n        class=\"form-control right-element mt-2 mt-sm-0\"\n        id=\"inputCurrency\"\n        formControlName=\"inputCurrency\"\n      >\n        <option>CSC</option>\n      </select>\n      <label class=\"mt-2 mt-sm-0 mx-sm-2\">=</label>\n      <input\n        class=\"form-control left-element mr-sm-2\"\n        id=\"outputValue\"\n        (focus)=\"$event.target.select()\"\n        formControlName=\"outputValue\"\n        #outputValue\n      />\n      <select\n        class=\"form-control right-element mt-2 mt-sm-0\"\n        id=\"outputCurrency\"\n        formControlName=\"outputCurrency\"\n      >\n        <option\n          *ngFor=\"let currency of (currencies$)\"\n          [value]=\"currency.symbol\"\n        >\n          {{ currency.symbol }}\n        </option>\n      </select>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/components/currency-converter/currency-converter.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/components/currency-converter/currency-converter.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center; }\n\ninput {\n  text-align: center;\n  transition-duration: 1s, 0.25s;\n  transition-property: color, width;\n  font-weight: normal; }\n\n@media (min-width: 576px) {\n  .left-element {\n    border-radius: .5rem 0 0 .5rem; } }\n\n@media (min-width: 768px) {\n  .left-element {\n    height: 4rem;\n    font-size: 1.5rem; } }\n\n@media (min-width: 992px) {\n  .left-element {\n    height: 5rem;\n    font-size: 2rem; } }\n\n@media (min-width: 576px) {\n  .right-element {\n    border-radius: 0 .5rem .5rem 0;\n    -webkit-appearance: none; } }\n\n@media (min-width: 768px) {\n  .right-element {\n    height: 4rem;\n    font-size: 1.5rem; } }\n\n@media (min-width: 992px) {\n  .right-element {\n    height: 5rem;\n    font-size: 2rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamF5L2RldmVsb3BtZW50L3BlcnNvbmFsL2NyeS9wcmVldi9zcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jdXJyZW5jeS1jb252ZXJ0ZXIvY3VycmVuY3ktY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FqYXkvZGV2ZWxvcG1lbnQvcGVyc29uYWwvY3J5L3ByZWV2L25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxtQkFBbUIsRUFBQTs7QUM2Q2pCO0VEMUNKO0lBRUksOEJBQThCLEVBQUEsRUFZakM7O0FDNEJHO0VEMUNKO0lBTUksWUFBWTtJQUNaLGlCQUFpQixFQUFBLEVBT3BCOztBQzRCRztFRDFDSjtJQVdJLFlBQVk7SUFDWixlQUFlLEVBQUEsRUFFbEI7O0FDNEJHO0VEMUJKO0lBRUksOEJBQThCO0lBQzlCLHdCQUF3QixFQUFBLEVBWTNCOztBQ1dHO0VEMUJKO0lBT0ksWUFBWTtJQUNaLGlCQUFpQixFQUFBLEVBT3BCOztBQ1dHO0VEMUJKO0lBWUksWUFBWTtJQUNaLGVBQWUsRUFBQSxFQUVsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jdXJyZW5jeS1jb252ZXJ0ZXIvY3VycmVuY3ktY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kaW5wdXQtaGVpZ2h0OiA1cmVtO1xuJGlucHV0LWZvbnQtc2l6ZTogMnJlbTtcblxuOmhvc3R7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzLCAwLjI1cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIHdpZHRoO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ubGVmdC1lbGVtZW50IHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtIDAgMCAuNXJlbTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG4ucmlnaHQtZWxlbWVudCB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIC41cmVtIC41cmVtIDA7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/components/currency-converter/currency-converter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/home/components/currency-converter/currency-converter.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CurrencyConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverterComponent", function() { return CurrencyConverterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/currency.service */ "./src/app/data/currency.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_data_conversion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/conversion.service */ "./src/app/data/conversion.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var CurrencyConverterComponent = /** @class */ (function () {
    function CurrencyConverterComponent(titleService, conversionService, currencyService, fb) {
        this.titleService = titleService;
        this.conversionService = conversionService;
        this.currencyService = currencyService;
        this.fb = fb;
    }
    CurrencyConverterComponent_1 = CurrencyConverterComponent;
    // Helper method for changing the styles of the input elements
    CurrencyConverterComponent.restyleInputElements = function (changeElement, resetElement, changeValue, screenWidth) {
        // Change width and font weight
        if (changeElement && changeElement.nativeElement) {
            var el = changeElement.nativeElement;
            if (screenWidth > 575) {
                var pixels = Math.max((changeValue.toString().length + 1) * 32, 64);
                el.style.width = pixels + "px";
            }
            else {
                // el.cle
            }
            el.style.fontWeight = 'bold';
        }
        // Reset the font to normal
        if (resetElement && resetElement.nativeElement) {
            resetElement.nativeElement.style.fontWeight = 'normal';
        }
    };
    CurrencyConverterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.setupResizeListener();
        // this.currencies$ = this.conversionService.currencies$;
        this.conversionService.currencies$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(2)).subscribe(function (currencies) {
            _this.currencies$ = currencies;
        });
        // Create reactive form
        this.converterForm = this.initForm();
        this.setupInputElementsChangeListener();
        this.setupOutputElementsChangeListener();
        this.setupDataChangeListener();
    };
    CurrencyConverterComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription$.unsubscribe();
    };
    CurrencyConverterComponent.prototype.initForm = function () {
        return this.fb.group({
            inputValue: [this.conversionService.model.inputValue],
            inputCurrency: [this.conversionService.model.inputCurrency],
            outputValue: [this.conversionService.model.outputValue],
            outputCurrency: [this.conversionService.model.outputCurrency]
        });
    };
    CurrencyConverterComponent.prototype.setupInputElementsChangeListener = function () {
        var _this = this;
        this.converterForm.controls.inputValue.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.converterForm.controls.inputCurrency.valueChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.converterForm.controls.outputCurrency.valueChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () { return _this.converterForm.valid; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            CurrencyConverterComponent_1.restyleInputElements(_this.inputValue, _this.outputValue, _this.converterForm.controls.inputValue.value, _this.innerWidth);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.conversionService.inputUpdated(_this.converterForm.value);
        }))
            .subscribe();
    };
    CurrencyConverterComponent.prototype.setupOutputElementsChangeListener = function () {
        var _this = this;
        this.converterForm.controls.outputValue.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () { return _this.converterForm.valid; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            CurrencyConverterComponent_1.restyleInputElements(_this.outputValue, _this.inputValue, _this.converterForm.controls.outputValue.value, _this.innerWidth);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.conversionService.outputUpdated(_this.converterForm.value);
        }))
            .subscribe();
    };
    CurrencyConverterComponent.prototype.setupDataChangeListener = function () {
        var _this = this;
        // When the output value is changed update the UI and style the components
        this.conversionService.outputCalculated$.subscribe(function (value) {
            _this.setWindowTitle(value.toString(), false);
            _this.converterForm.controls.outputValue.setValue(value, {
                emitEvent: false
            });
            CurrencyConverterComponent_1.restyleInputElements(_this.outputValue, _this.inputValue, value, _this.innerWidth);
        });
        // When the input value is changed update the UI and style the components
        this.conversionService.inputCalculated$.subscribe(function (value) {
            _this.setWindowTitle(value.toString(), true);
            _this.converterForm.controls.inputValue.setValue(value, {
                emitEvent: false
            });
            CurrencyConverterComponent_1.restyleInputElements(_this.inputValue, _this.outputValue, value, _this.innerWidth);
        });
    };
    CurrencyConverterComponent.prototype.setWindowTitle = function (value, input) {
        if (input) {
            this.titleService.setTitle(value + " " + this.conversionService.model.inputCurrency);
        }
        else {
            this.titleService.setTitle(value + " " + this.conversionService.model.outputCurrency);
        }
    };
    CurrencyConverterComponent.prototype.clearElementWidths = function () {
        if (this.inputValue && this.inputValue.nativeElement) {
            this.inputValue.nativeElement.style.width = null;
        }
        if (this.outputValue && this.outputValue.nativeElement) {
            this.outputValue.nativeElement.style.width = null;
        }
    };
    CurrencyConverterComponent.prototype.setupResizeListener = function () {
        var _this = this;
        this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(150))
            .subscribe(function () {
            _this.innerWidth = window.innerWidth;
            if (_this.innerWidth < 575.98) {
                _this.clearElementWidths();
            }
        });
    };
    var CurrencyConverterComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('inputValue'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CurrencyConverterComponent.prototype, "inputValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('outputValue'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CurrencyConverterComponent.prototype, "outputValue", void 0);
    CurrencyConverterComponent = CurrencyConverterComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-currency-converter',
            template: __webpack_require__(/*! ./currency-converter.component.html */ "./src/app/pages/home/components/currency-converter/currency-converter.component.html"),
            styles: [__webpack_require__(/*! ./currency-converter.component.scss */ "./src/app/pages/home/components/currency-converter/currency-converter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            src_app_data_conversion_service__WEBPACK_IMPORTED_MODULE_6__["ConversionService"],
            _data_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CurrencyConverterComponent);
    return CurrencyConverterComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/components/exchange-selector/exchange-selector.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/home/components/exchange-selector/exchange-selector.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  type=\"button\"\n  class=\"nav-item btn btn-outline-secondary\"\n  [autoClose]=\"'outside'\"\n  [ngbPopover]=\"popContent\"\n  [popoverTitle]=\"popTitle\"\n>\n  <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n</button>\n\n<ng-template #popTitle>\n  <div class=\"title\">\n    Sources\n    <a href=\"#\" (click)=\"$event.preventDefault(); resetSources()\">Reset</a>\n  </div>\n</ng-template>\n<ng-template #popContent>\n  <ul class=\"list-group list-group-flush\">\n    <a\n      *ngFor=\"let exchange of exchanges$ | async\"\n      class=\"exchange list-group-item\"\n      (click)=\"toggleExchange(exchange)\"\n    >\n      {{ exchange.name }}\n\n      <i\n        class=\"fa fa-check\"\n        aria-hidden=\"true\"\n        *ngIf=\"isSelectedExchange(exchange)\"\n      ></i>\n    </a>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/home/components/exchange-selector/exchange-selector.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/home/components/exchange-selector/exchange-selector.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title a {\n  float: right;\n  display: inline-block; }\n\n.exchange {\n  min-width: 250px;\n  cursor: pointer; }\n\n.exchange i {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamF5L2RldmVsb3BtZW50L3BlcnNvbmFsL2NyeS9wcmVldi9zcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9leGNoYW5nZS1zZWxlY3Rvci9leGNoYW5nZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUZqQjtJQUtJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9leGNoYW5nZS1zZWxlY3Rvci9leGNoYW5nZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGEge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cblxuLmV4Y2hhbmdlIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGkge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/components/exchange-selector/exchange-selector.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/components/exchange-selector/exchange-selector.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExchangeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeSelectorComponent", function() { return ExchangeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_data_conversion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/conversion.service */ "./src/app/data/conversion.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ExchangeSelectorComponent = /** @class */ (function () {
    function ExchangeSelectorComponent(conversionService) {
        this.conversionService = conversionService;
    }
    ExchangeSelectorComponent.prototype.ngOnInit = function () {
        this.exchanges$ = this.conversionService.exchanges$;
    };
    ExchangeSelectorComponent.prototype.resetSources = function () {
        this.conversionService.selectedExchanges$.next(this.conversionService.exchanges$.value);
    };
    ExchangeSelectorComponent.prototype.toggleExchange = function (exchange) {
        if (this.isSelectedExchange(exchange)) {
            if (this.enableToggle()) {
                var values = this.conversionService.selectedExchanges$.value.filter(function (_) { return _.id !== exchange.id; });
                this.conversionService.selectedExchanges$.next(values);
            }
        }
        else {
            var values = this.conversionService.selectedExchanges$.value.concat([
                exchange
            ]);
            this.conversionService.selectedExchanges$.next(values);
        }
    };
    ExchangeSelectorComponent.prototype.isSelectedExchange = function (exchange) {
        return !!this.conversionService.selectedExchanges$.value.find(function (_) { return _.id === exchange.id; });
    };
    ExchangeSelectorComponent.prototype.enableToggle = function () {
        return this.conversionService.selectedExchanges$.value.length > 1;
    };
    ExchangeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-exchange-selector',
            template: __webpack_require__(/*! ./exchange-selector.component.html */ "./src/app/pages/home/components/exchange-selector/exchange-selector.component.html"),
            styles: [__webpack_require__(/*! ./exchange-selector.component.scss */ "./src/app/pages/home/components/exchange-selector/exchange-selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_conversion_service__WEBPACK_IMPORTED_MODULE_1__["ConversionService"]])
    ], ExchangeSelectorComponent);
    return ExchangeSelectorComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-currency-converter></app-currency-converter>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-currency-converter {\n  display: block;\n  top: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamF5L2RldmVsb3BtZW50L3BlcnNvbmFsL2NyeS9wcmVldi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQWM7RUFDZCxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFwcC1jdXJyZW5jeS1jb252ZXJ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiA1MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n  <div class=\"container-fluid\">\n    <span>CasinoCoin Foundation. All rights reserved.</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/pages/layout/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #0F0F0F;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamF5L2RldmVsb3BtZW50L3BlcnNvbmFsL2NyeS9wcmVldi9zcmMvYXBwL3BhZ2VzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGMEYwRjtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/layout/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/layout/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Fixed navbar -->\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\"\n      ><img\n        class=\"img-fluid\"\n        src=\"https://casinocoin.org/wp-content/uploads/2018/01/WhiteCSCLogo.svg\"\n        alt=\"CasinoCoin logo\"\n    /></a>\n\n    <span class=\"navbar-text \">{{title}}</span>\n\n    <ul class=\"navbar-nav flex-row ml-auto \">\n      <app-exchange-selector></app-exchange-selector>\n\n      <button\n        type=\"button\"\n        class=\"nav-item btn btn-outline-secondary ml-2\"\n        (click)=\"openHelp()\"\n      >\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i>\n      </button>\n    </ul>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/pages/layout/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav img {\n  width: 205px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamF5L2RldmVsb3BtZW50L3BlcnNvbmFsL2NyeS9wcmVldi9zcmMvYXBwL3BhZ2VzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBpbWcge1xuICAgIHdpZHRoOiAyMDVweDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/layout/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/layout/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../help/help.component */ "./src/app/pages/layout/help/help.component.ts");
/* harmony import */ var _data_conversion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/conversion.service */ "./src/app/data/conversion.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, conversionService) {
        this.modalService = modalService;
        this.conversionService = conversionService;
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.setupDataChangeListener();
    };
    HeaderComponent.prototype.openHelp = function () {
        this.modalService.open(_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"]);
    };
    HeaderComponent.prototype.setupDataChangeListener = function () {
        var _this = this;
        this.conversionService.outputCalculated$.subscribe(function (value) {
            _this.setTitle();
        });
        this.conversionService.inputCalculated$.subscribe(function (value) {
            _this.setTitle();
        });
    };
    HeaderComponent.prototype.setTitle = function () {
        this.title = this.conversionService.model.inputCurrency + " to " + this.conversionService.model.outputCurrency;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _data_conversion_service__WEBPACK_IMPORTED_MODULE_4__["ConversionService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/help/help.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/help/help.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Hi there!</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Help Content goes here...</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/layout/help/help.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/help/help.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/layout/help/help.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/layout/help/help.component.ts ***!
  \*****************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var HelpComponent = /** @class */ (function () {
    function HelpComponent(activeModal) {
        this.activeModal = activeModal;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/pages/layout/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/pages/layout/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");





var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        children: [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- Begin page content -->\n<main role=\"main\" class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</main>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamF5L2RldmVsb3BtZW50L3BlcnNvbmFsL2NyeS9wcmVldi9zcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () { };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _home_components_exchange_selector_exchange_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/components/exchange-selector/exchange-selector.component */ "./src/app/pages/home/components/exchange-selector/exchange-selector.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/pages/layout/footer/footer.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/pages/layout/header/header.component.ts");
/* harmony import */ var _layout_help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/help/help.component */ "./src/app/pages/layout/help/help.component.ts");
/* harmony import */ var _home_components_currency_converter_currency_converter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/components/currency-converter/currency-converter.component */ "./src/app/pages/home/components/currency-converter/currency-converter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _home_components_exchange_selector_exchange_selector_component__WEBPACK_IMPORTED_MODULE_6__["ExchangeSelectorComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _layout_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"], _home_components_currency_converter_currency_converter_component__WEBPACK_IMPORTED_MODULE_11__["CurrencyConverterComponent"]],
            entryComponents: [_layout_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
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

module.exports = __webpack_require__(/*! /Users/ajay/development/personal/cry/preev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
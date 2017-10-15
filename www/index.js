var app = (function (exports) {
'use strict';

var HTTPService = /** @class */ (function () {
    function HTTPService() {
    }
    HTTPService.prototype.request = function (method, url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open(method, url);
            req.addEventListener('load', function () {
                resolve(JSON.parse(req.responseText));
            });
            req.addEventListener('error', function (ev) {
                reject(ev);
            });
            req.send();
        });
    };
    HTTPService.prototype.GET = function (url) {
        return this.request('GET', url);
    };
    HTTPService.prototype.POST = function (url) {
        return this.request('GET', url);
    };
    return HTTPService;
}());
var http = new HTTPService();
//# sourceMappingURL=http.js.map

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */













function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var WeatherService = /** @class */ (function () {
    function WeatherService(apiKey) {
        this.apiKey = apiKey;
    }
    WeatherService.prototype.request = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "http://apidev.accuweather.com/" + query + "&apiKey=" + this.apiKey;
                        return [4 /*yield*/, http.GET(url)];
                    case 1:
                        response = _a.sent();
                        if (response.length > 0) {
                            result = response[0];
                            if (typeof result !== 'object') {
                                throw new Error('response is not an object');
                            }
                            return [2 /*return*/, result];
                        }
                        else {
                            throw new Error('empty response');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WeatherService.prototype.resolveCity = function (cityName) {
        return __awaiter(this, void 0, void 0, function () {
            var query, city, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "locations/v1/search?q=" + cityName;
                        return [4 /*yield*/, this.request(query)];
                    case 1:
                        city = _a.sent();
                        key = city.Key;
                        if (!key) {
                            throw new Error('city key is null');
                        }
                        return [2 /*return*/, key];
                }
            });
        });
    };
    WeatherService.prototype.resolveForecast = function (key) {
        var query = "currentconditions/v1/" + key + ".json?language=es";
        return this.request(query);
    };
    WeatherService.prototype.todayForecast = function (city) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveCity(city)];
                    case 1:
                        key = _a.sent();
                        return [2 /*return*/, this.resolveForecast(key)];
                }
            });
        });
    };
    return WeatherService;
}());
var weather = new WeatherService('hoArfRosT1215');
//# sourceMappingURL=weather.js.map

function toggleVisibility(ev, id) {
    var el = document.getElementById(id);
    if (!el) {
        return;
    }
    if (el.classList.contains('show')) {
        el.classList.remove('show');
    }
    else {
        el.classList.add('show');
        var buttonEle = ev.target;
        var x = buttonEle.offsetLeft;
        var y = buttonEle.offsetTop - el.offsetHeight - 12;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    }
}
function isEmpty(str) {
    return !str || str.length === 0;
}
//# sourceMappingURL=utils.js.map

var TypeWritter = /** @class */ (function () {
    function TypeWritter(sentences, ele) {
        this.sentences = sentences;
        this.ele = ele;
        this.rmLatency = 50;
        this.addLatency = 100;
        this.emptyDelay = 50;
        this.finishDelay = 6000;
        this.isRemoving = true;
        this.sentenceIndex = 0;
        this.sentenceLength = 0;
    }
    TypeWritter.prototype.start = function () {
        this.schedule();
    };
    TypeWritter.prototype.do = function () {
        var text = this.ele.textContent;
        if (this.isRemoving) {
            if (isEmpty(text)) {
                this.isRemoving = false;
                setTimeout(this.schedule.bind(this), this.emptyDelay);
            }
            else {
                this.ele.textContent = text.substr(0, text.length - 1);
                this.schedule();
            }
        }
        else {
            this.sentenceLength++;
            var sentence = this.sentences[this.sentenceIndex];
            var substr = sentence.substr(0, this.sentenceLength);
            this.ele.textContent = substr;
            if (this.sentenceLength >= sentence.length) {
                this.isRemoving = true;
                this.sentenceLength = 0;
                this.sentenceIndex++;
                if (this.sentenceIndex >= this.sentences.length) {
                    this.sentenceIndex = 0;
                }
                setTimeout(this.schedule.bind(this), this.finishDelay);
            }
            else {
                this.schedule();
            }
        }
    };
    TypeWritter.prototype.schedule = function () {
        setTimeout(this.do.bind(this), this.delay());
    };
    TypeWritter.prototype.delay = function () {
        var latency;
        if (this.isRemoving) {
            latency = this.rmLatency;
        }
        else {
            latency = this.addLatency;
        }
        return Math.random() * latency + (latency / 2);
    };
    return TypeWritter;
}());

function setupIndex() {
    setupFormContainer();
    setupJumboImage();
    setupDynamicJumbo();
}
function setupFormContainer() {
    var form = document.getElementById('form-container');
    if (!form) {
        return;
    }
    window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y < 648) {
            form.style.transform = 'translateY(-' + y * 0.3 + 'px)';
        }
    }, false);
}
function setupJumboImage() {
    var imgs = ['jumbo1', 'jumbo2', 'jumbo3', 'jumbo4'];
    var jumbo = document.getElementById('jumbo');
    if (jumbo) {
        jumbo.classList.add(imgs[Math.floor(Math.random() * imgs.length)]);
    }
}
function setupDynamicJumbo() {
    var ele = document.getElementById('dynamic-jumbo');
    var typewritter = new TypeWritter([
        'Madrid', 'Valladolid', 'Bilbao', 'Sevilla', 'Barcelona', 'Valencia', 'el destino'
    ], ele);
    setTimeout(function () {
        typewritter.start();
    }, 5000);
}

// Variables exportadas en este modulo, podrán ser accedidas directamente desde el exterior
// en window.app

//# sourceMappingURL=index.js.map

exports.http = http;
exports.weather = weather;
exports.toggleVisibility = toggleVisibility;
exports.setupIndex = setupIndex;

return exports;

}({}));

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Froggy = (function () {
        function Froggy(router) {
            this.justifyContent = 'flex-start';
            this.alignItems = 'flex-start';
            this.cssProperties = [];
            this.cssProperties.push(new CssProperty('justify-content', ['None', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']));
            this.cssProperties.push(new CssProperty('align-content', ['None', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']));
            this.cssProperties.push(new CssProperty('align-items', ['None', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']));
            this.cssProperties.push(new CssProperty('flex-direction', ['None', 'row', 'row-reverse', 'column', 'column-reverse']));
            this.cssProperties.push(new CssProperty('flex-wrap', ['None', 'wrap', 'nowrap', 'wrap-reverse']));
            this.updateCss();
            this.frogs = [];
        }
        Froggy.prototype.updateCss = function () {
            var temp = this.cssProperties.filter(function (p) { return p.selectedValue !== 'None'; }).map(function (p) { return p.name + ':' + p.selectedValue + '; '; });
            this.cssRules = temp.join("");
        };
        Froggy.prototype.addFrog = function (src) {
            this.frogs.push(new Frog(src));
        };
        Froggy.prototype.removeFrog = function (index) {
            this.frogs.splice(index, 1);
        };
        Froggy = __decorate([
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], Froggy);
        return Froggy;
    }());
    exports.Froggy = Froggy;
    var CssProperty = (function () {
        function CssProperty(name, options) {
            this.name = name;
            this.options = options;
            this.selectedValue = options[0];
        }
        return CssProperty;
    }());
    exports.CssProperty = CssProperty;
    var Frog = (function () {
        function Frog(src) {
            this.src = src;
        }
        return Frog;
    }());
    exports.Frog = Frog;
});

//# sourceMappingURL=froggy.js.map

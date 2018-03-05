"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Css = /** @class */ (function () {
    function Css() {
        this.quotation = null;
        this.circle = new Position('relative');
        this.rectangle = new Position('absolute');
        this.square = new Position('relative');
        this.triangle = new Position('relative');
    }
    Css.prototype.changePosition = function (shape, position) {
        shape.position = position;
    };
    Css.prototype.getBehavior = function (position) {
        if (position.toUpperCase() === 'STATIC')
            return "Elements render in order, as they appear in the document flow";
        if (position.toUpperCase() === 'ABSOLUTE')
            return "Element is positioned relative to its first positioned (not static) ancestor element";
        if (position.toUpperCase() === 'FIXED')
            return "Element is positioned relative to the browser window";
        if (position.toUpperCase() === 'RELATIVE')
            return "Element is positioned relative to its normal position";
        return "blah";
    };
    Css.prototype.getCss = function (object) {
        return object.position == 'static' ? 'selected' : '';
    };
    return Css;
}());
exports.Css = Css;
var Position = /** @class */ (function () {
    function Position(position) {
        this.position = position;
    }
    return Position;
}());
exports.Position = Position;

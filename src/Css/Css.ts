import { inject, autoinject, FrameworkConfiguration } from 'aurelia-framework';
import { RouterConfiguration, RouteConfig, Router, NavigationInstruction, Next } from 'aurelia-router';

export class Css {
    public quotation: any = null;

    public circle: Position;
    public rectangle: Position;
    public square: Position;
    public triangle: Position;
    constructor() {
        this.circle = new Position('relative');
        this.rectangle = new Position('absolute');
        this.square = new Position('relative');
        this.triangle = new Position('relative');
    }
    public changePosition(shape: Position, position: string) {
        shape.position = position;
    }

    public getBehavior(position: string) {
        if (position.toUpperCase() === 'STATIC')
            return "Elements render in order, as they appear in the document flow";
        if (position.toUpperCase() === 'ABSOLUTE')
            return "Element is positioned relative to its first positioned (not static) ancestor element";
        if (position.toUpperCase() === 'FIXED')
            return "Element is positioned relative to the browser window";
        if (position.toUpperCase() === 'RELATIVE')
            return "Element is positioned relative to its normal position";
        return "blah";
    }

    public getCss(object: Position) {
        return object.position == 'static' ? 'selected' : '';
    }
}

export class Position {
    public constructor(public position: string) {

    }


}

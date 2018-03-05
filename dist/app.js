define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Baggy Home';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'froggy', name: 'froggy', moduleId: './froggy/froggy', nav: true, title: 'Flex-Box' },
                { route: 'css', name: 'css', moduleId: './css/css', nav: true, title: 'Css-Positioning' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map

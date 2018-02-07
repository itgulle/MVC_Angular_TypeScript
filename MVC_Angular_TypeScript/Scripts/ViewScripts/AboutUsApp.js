var About;
(function (About) {
    var Us;
    (function (Us) {
        var AboutUsApp = (function () {
            function AboutUsApp(presets) {
                this.presets = presets;
            }
            AboutUsApp.prototype.init = function () {
                var app = angular.module("aboutUsApp", []);
                this.dependency(app);
                this.controllers(app);
                app.service("aboutUsService", ['$http', 'presets', Us.AboutUsService]);
                angular.bootstrap(document, ['aboutUsApp']);
            };
            AboutUsApp.prototype.dependency = function (app) {
                var _this = this;
                app.factory("presets", function () {
                    return _this.presets;
                });
            };
            AboutUsApp.prototype.controllers = function (app) {
                app.controller('aboutUsController', ['$scope', 'presets', 'aboutUsService', Us.AboutUsController]);
            };
            return AboutUsApp;
        }());
        Us.AboutUsApp = AboutUsApp;
    })(Us = About.Us || (About.Us = {}));
})(About || (About = {}));
//# sourceMappingURL=AboutUsApp.js.map
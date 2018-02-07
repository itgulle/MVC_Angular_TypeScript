var About;
(function (About) {
    var Us;
    (function (Us) {
        var AboutUsController = (function () {
            function AboutUsController($scope, presets, service) {
                this.$scope = $scope;
                this.presets = presets;
                this.service = service;
                this.init();
            }
            AboutUsController.prototype.init = function () {
                this.viewModel = {
                    model: this.presets.model
                };
            };
            return AboutUsController;
        }());
        Us.AboutUsController = AboutUsController;
    })(Us = About.Us || (About.Us = {}));
})(About || (About = {}));
//# sourceMappingURL=AboutUsController.js.map
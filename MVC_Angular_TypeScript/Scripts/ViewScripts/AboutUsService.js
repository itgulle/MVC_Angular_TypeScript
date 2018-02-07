var About;
(function (About) {
    var Us;
    (function (Us) {
        var AboutUsService = (function () {
            function AboutUsService($http, presets) {
                this.$http = $http;
                this.presets = presets;
            }
            return AboutUsService;
        }());
        Us.AboutUsService = AboutUsService;
    })(Us = About.Us || (About.Us = {}));
})(About || (About = {}));
//# sourceMappingURL=AboutUsService.js.map
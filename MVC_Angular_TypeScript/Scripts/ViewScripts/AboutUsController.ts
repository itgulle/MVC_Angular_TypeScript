module About.Us {
    export class AboutUsController {
        private $scope: ng.IScope;
        private presets: any;
        private service: AboutUsService;
        private viewModel: any;

        constructor($scope: ng.IScope, presets: any, service: AboutUsService) {
            this.$scope = $scope;
            this.presets = presets;
            this.service = service;
            this.init();
        }

        private init() {
            this.viewModel = {
                model: this.presets.model
            };
        }
    }
}
module About.Us {
    export class AboutUsApp {
        private presets: any;

        constructor(presets: any) {
            this.presets = presets;
        }
        init() {
            const app = angular.module("aboutUsApp", []);
            this.dependency(app);

            this.controllers(app);
            app.service("aboutUsService", ['$http', 'presets', AboutUsService]);

            angular.bootstrap(document, ['aboutUsApp']);

        }

        private dependency(app: ng.IModule) {
            app.factory("presets",
                () => {
                    return this.presets;
                });
        }

        private controllers(app: ng.IModule): void {
            app.controller('aboutUsController', ['$scope', 'presets', 'aboutUsService', AboutUsController]);
        }
    }
}
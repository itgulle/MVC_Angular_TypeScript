module About.Us {
    export class AboutUsService {
        private $http: ng.IHttpService;
        private presets: any;

        constructor($http: ng.IHttpService, presets: any) {
            this.$http = $http;
            this.presets = presets;
        }
    }
}
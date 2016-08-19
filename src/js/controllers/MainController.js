var app = require('app');

app.controller('MainController', ['$scope', 'APIService',
    function ($scope, APIService) {
        var main = this;

        /**
         * The init function - Get available sites to present to the user
         */
        main.init = function () {
            console.log("init()");
            main.loading = false;
            APIService.getSites().then(function (response) {
                console.log(response.data);
                main.sites = response.data.sites;
                main.loading = true;
            })
        };

        /**
         * Selects the active site
         * @param site - The selected site
         */

        main.selectSite = function (site) {
            main.selectedSite = site;
        };

        /**
         * Get more information about the device
         * @param device - The selected device
         */
        main.selectDevice = function (device) {
            APIService.getDevice(device.id).then(function (response) {
                console.log(response.data.devices);
                main.selectedDevice = response.data.devices[device.id];
                console.log(main.selectedDevice);
            })
        };

    }]);
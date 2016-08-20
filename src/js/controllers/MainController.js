var app = require('app');

app.controller('MainController', ['$scope', 'APIService',
    function ($scope, APIService) {
        var main = this;

        /**
         * The init function - Get available sites to present to the user
         */
        main.init = function () {
            console.log("init()");
            main.showloading = true;
            APIService.getSites().then(function (response) {
                main.sites = response.data.sites;
                main.showloading = false;
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
            main.showloading = true;
            APIService.getDevice(device.id).then(function (response) {
                main.selectedDevice = response.data.devices[device.id];
                main.showloading = false;

            })
        };

    }]);
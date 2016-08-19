var app = require('app');

app.service('APIService', ['$http', function ($http) {

    var service = {};

    service.getSites = function () {
        return $http(
            {
                method: 'GET',
                url: "/site"
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    service.getSites = function () {
        return $http(
            {
                method: 'GET',
                url: "/site"
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    return service;
}]);
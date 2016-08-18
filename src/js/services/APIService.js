var app = require('app');

app.service('NetworkService', ['$http', function ($http) {

    var service = {};

    service.getNetworks = function () {
        return $http(
            {
                method: 'GET',
                url: "/networks"
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
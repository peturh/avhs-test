var app = require('app');

app.controller('MainController', ['$scope','APIService',
    function ($scope,APIService) {
        var main = this;


        main.init = function(){
             console.log("init()")
                APIService.getSites().then(function(response){
                console.log(response.data);
                main.sites = response.data.sites;
            })
        }

    }]);
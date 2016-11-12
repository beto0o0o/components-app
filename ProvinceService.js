(function () {
    'use strict';
    angular.module("provincesApp")
        .service('ProvinceServ',function($http) {
            var URL = "http://api-nghyf.rhcloud.com/provinces";
            this.getData = function () {
                return $http.get(URL);
            };
        })
}());

(function () {
    'use strict';
    angular.module('provincesApp')
        .controller('provinceController',ProvinceCtrl)
        .component('provinceCard',{
            templateUrl:'provinceCard.html',
            controller: ProvinceCtrl
        });
    function ProvinceCtrl(ProvinceServ) {
        var that = this;
        ProvinceServ.getData()
            .then (function (response) {
                that.provincesList = response.data;
                // console.log(response.data);
            })
            .catch (function(error) {
                console.error(error);
            });
    };
}());
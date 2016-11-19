(function () {
    'use strict';
    angular.module('provincesApp')
        // .controller('provinceController',ProvinceCtrl)
        .component('provinceCard',{
            template:"<div ><ul><li ng-repeat='item in $ctrl.provincesList'>{{item.name}}</li></ul></div><hyf-list title='Hello!' item='$ctrl.province'></hyf-list></hyf-list>",
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



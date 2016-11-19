// (function () {
//     'use strict';
//
//     angular.module('provincesAppShared')
//         .component('hyfList', {
//             bindings: {
//                 title: '@'
//             },
//             template:'<h1>{{$ctrl.title}}</h1>'
//         })
// }());




(function () {
    'use strict';

    angular.module('provincesAppShared')
        .component('hyfList', {
            bindings: {
                title: '@',
                item: '=',
            },
            template: "<h1>{{ $ctrl.item }}</h1>"
        })

}());
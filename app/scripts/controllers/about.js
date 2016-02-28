'use strict';

/**
 * @ngdoc function
 * @name instantAdministrationClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the instantAdministrationClientApp
 */

var url = 'http://127.0.0.1:8080/rest/clients';
var demo_url = 'http://rest-service.guides.spring.io/greeting';

// GET Request http://stackoverflow.com/questions/13760070/angularjs-passing-data-to-http-get-request

angular.module('instantAdministrationClientApp')
    .controller('AboutCtrl', function ($scope, $http) {
        $http.get(url, {
            params: {
                category: '',
                query: ''
            }
        })
        .success(function (data) {
            $scope.x = data;
        });
    });

//Works on views when using controllerAs on call as [controller as name].awesomeThings
//http://stackoverflow.com/questions/31820844/yeoman-generated-angularjs-ng-repeat-not-showing-data-from-controller
//angular.module('instantAdministrationClientApp')
//    .controller('AboutCtrl', function () {
//        this.awesomeThings = [
//            'HTML5 Boilerplate',
//            'AngularJS',
//            'Karma'
//        ];
//    });

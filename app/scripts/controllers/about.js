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
            $scope.contentKeys = [];
            //angular.forEach(data.content, function(c) {
            //    console.log(c.name);
            //    //$scope.contentKeys.push(c.property);
            //    angular.forEach(c, function(value, key){
            //        $scope.contentKeys.push(key);
            //    });
            //
            //});
                // http://stackoverflow.com/a/31268625/3478174
                // Using some instead of forEach since its same functionality + allows break on true return.
                // For each CAN NOT break
                data.content.some(function(c){
                    angular.forEach(c, function(value, key){
                        $scope.contentKeys.push(key);
                    });
                    return true;
                });

        });
    })
    .controller('TableStructureController', function($scope){
        $scope.selectedTableStructure = selectModel;
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

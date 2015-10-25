'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.directive('formsEmail', [function() {
    return {
        templateUrl: 'partials/forms/email.html'
    };
}])
.directive('formsName', [function() {
    return {
        templateUrl: 'partials/forms/name.html'
    };
}])

.controller('View1Ctrl', [function() {

}]);

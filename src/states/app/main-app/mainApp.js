/**
 * Created by ran.styr on 11/30/2015.
 */
(function (app) {

    app.config(['$stateProvider', appRoutes]);

    function appRoutes($stateProvider) {

        $stateProvider
            .state('mainApp', {
                parent: 'app',
                url: '/mainApp',
                templateUrl: 'states/app/main-app/mainApp.html',
                controller: 'main.app.controller',
                controllerAs: 'mainApp'
            });
    }

})(angular.module('Interno'));
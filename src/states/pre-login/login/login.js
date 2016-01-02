/**
 * Created by ran.styr on 11/30/2015.
 */
(function (app) {

    app.config(['$stateProvider', appRoutes]);

    function appRoutes($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'states/pre-login/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
    }

})(angular.module('Interno'));
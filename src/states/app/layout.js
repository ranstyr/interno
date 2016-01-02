/**
 * Created by ran.styr on 11/30/2015.
 */
(function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', appRoutes]);

    function appRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'states/app/layout.html',
                resolve: {
                    init: []
                }
            });

        $urlRouterProvider.otherwise('/login');
    }

})(angular.module('Interno'));
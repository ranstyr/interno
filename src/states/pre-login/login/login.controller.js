/**
 * Created by oriel.zaken on 11/30/2015.
 */
(function (app) {

    app.controller('LoginController', [ '$state', '$log', LoginController]);

    function LoginController(authService, $state, $log) {

        var vm = this;


        activate();

        function activate() {



        };

        function registerEvents() {

        };

        function getData() {

        };

        vm.login = function(form) {

            //if (form.$invalid)
            //    return;

            $state.go('mainApp');
        };

        function authSuccess() {
            $state.go('mainApp');

        }


    }

})(angular.module('Interno'));
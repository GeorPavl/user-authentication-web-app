(function() {

    angular.module('app.global').controller('authController', authController);

    function authController($rootScope, $scope, $location, authService, $state) {

        $scope.credentials = {};

        $scope.resetForm = function() {
            $scope.credentials = null;
        }

        $scope.goToHomePage = function() {
            $state.go('app.home');
        }

        $scope.loginUser = function() {
            authService.authenticate($scope.credentials, function() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    // Να φτιάξω μία μέθοδο για να ελέγγχει τον ρόλο
                    if (user.role === "ROLE_ADMIN") {
                        $state.go('app.admin-dashboard.index');
                    } else {
                        $state.go('app.user-dashboard.index')
                    }
                    $scope.loginerror = false;
                } else {
                    $state.go('app.global.login');
                    $scope.loginerror = true;
                }
            });
        };

        $scope.logout = function() {
            authService.logout();
        }

    }

    authController.$inject = ['$rootScope', '$scope', '$location', 'authService', '$state'];

})();
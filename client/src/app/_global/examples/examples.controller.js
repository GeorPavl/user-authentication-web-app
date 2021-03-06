(function() {

    angular.module('app.examples').controller('examplesController', examplesController);

    function examplesController($scope, homeService, $state) {

        $scope.message;
        $scope.user = {};

        init();

        function init() {
            
            console.log('Loaded.');
            $scope.message = 'Hello World Test';

            getDataForChart();
            
        }

        function getDataForChart() {
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.series = ['Series A', 'Series B'];
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
            $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
            $scope.options = {
                scales: {
                    yAxes: [
                        {
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        },
                        {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: true,
                            position: 'right'
                        }
                    ]
                }
            }

        }

        $scope.login = function() {
            $state.go('app.global.login');
        }

        $scope.goToHomePage = function() {
            $state.go('app.home');
        }

    }
    
})();
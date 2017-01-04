
var controllers = angular.module('allCarsController', []);
controllers.controller('allCarsCtrl', ['$scope', 'CarFactory', function ($scope, CarFactory) {


        $scope.cars = CarFactory.getCars();
        $scope.title = "Cars Demo App";
        $scope.predicate = "year";
        $scope.reverse = false;

        $scope.deleteCar = function (id) {
            CarFactory.deleteCar(id);
        };

        $scope.editCar = function (id) {
            for (var i = 0; i < $scope.cars.length; i++) {
                if ($scope.cars[i].id === id) {
                    $scope.newcar = angular.copy($scope.cars[i]);
                    return;
                }
            }
        };

    }]);


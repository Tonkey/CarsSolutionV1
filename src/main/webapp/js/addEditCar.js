var controllers = angular.module('addEditCarsController',[]);

controllers.controller('addEditCarsCtrl',['$scope', 'CarFactory', '$routeParams', function($scope, CarFactory, $routeParams){
        
        $scope.newcar = CarFactory.getCars()[$routeParams.id-1];
        
        $scope.saveCar = function(newCar){
            CarFactory.addEditCar(newCar);
        };
}]);
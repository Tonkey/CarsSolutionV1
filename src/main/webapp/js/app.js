angular.module('MyApp', [
    'ngRoute',
    'factories',
    'allCarsController',
    'addEditCarsController'
])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/allCars.html',
                        controller: 'allCarsCtrl',
                        controllerAs: 'ctrl'

                    }).when('/addEdit/:id', {
                templateUrl: 'views/addEditCar.html',
                controller: 'addEditCarsCtrl',
                controllerAs: 'ctrl'
            })
                    .when('/addEdit', {
                        templateUrl: 'views/addEditCar.html',
                        controller: 'addEditCarsCtrl',
                        controllerAs: 'ctrl'
                    });
        });


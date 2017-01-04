angular.module('factories', [])
        .factory('CarFactory', function () {

            var cars = [
                {id: 1, year: 1997, registered: new Date(1999, 3, 15), make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000}
                , {id: 2, year: 1999, registered: new Date(1996, 3, 12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
                , {id: 3, year: 2000, registered: new Date(199, 12, 22), make: 'Chevy', model: 'Venture', description: '', price: 5000}
                , {id: 4, year: 1996, registered: new Date(2002, 3, 15), make: 'Jeep', model: 'Grand Cherokee', description: 'Moon roof', price: 4799}];

            var nextId = 5;

            var getCars = function () {return cars;};
            var deleteCar = function (id){
                for (var i = 0; i < cars.length; i++){
                    if(cars[i].id === id){
                        cars.splice(i, 1);
                        return;
                    }
                }
            };
            var addEditCar = function(newCar){
                if(newCar.id === undefined){
                    newCar.id = nextId++;
                    cars.push(newCar);
                } else {
                    for (var i = 0; i < cars.length; i++){
                        if(cars[i].id === newCar.id){
                            cars[i] = newCar;
                            break;
                        }
                    }
                }
            };
            
            return{
                getCars: getCars,
                deleteCar: deleteCar,
                addEditCar: addEditCar
            };

        });
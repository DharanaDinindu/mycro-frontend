let app = angular.module('app', ['ngRoute']);
let apps = ['products', 'mydash'];

app.config(['$routeProvider', '$sceDelegateProvider' ,'$compileProvider' , '$controllerProvider',  function($routeProvider, $sceDelegateProvider, $compileProvider, $controllerProvider) {


    $sceDelegateProvider.resourceUrlWhitelist([
        '**'
    ])
    app.register = {

        component :  function(name, object) {
                        $compileProvider.component(name, object);
                        return (this);
                    },
        controller :  function(name, object) {
                        $controllerProvider.register(name, object);
                        return (this);
                    }

        }


    $routeProvider
        .when('/app/:appId', {
            templateUrl: function (params) {
                return `https://localhost:5001/${params.appId}.html`
            },
            controller : 'appController',
            resolve : {

                load: function (dependancyLoader, $q, $route) {
                    let promise = dependancyLoader.register($route.current.params.appId);
                    let defer = $q.defer();

                    promise.then(function(routeFunction){
                        require(routeFunction.dependencies, function() {
                        });
                    });
                    return defer.promise;
                }
            }

        })
        .when('/',{
            templateUrl : 'components/pages/dashboard.html'
        })
        .otherwise({
            template : `<div class="alert alert-primary" role="alert">
                            This section is not available for the demo.
                        </div>`
        });
        
}]);






app.controller('appController', ['$scope', function($scope) {

    $scope.a = 10;
}]);

app.controller('mainController', ['$scope', '$location', 'dependencyLoader', function($scope, $location) {

    $scope.loadApp = function($event) {
        let appName = $event.target.value;
        if(apps.indexOf(appName) != -1) {
            $location.path('/app/'+ appName);
        }
        else {
            alert('App is not found!');
        }
    }
}]);

angular.element(function() {
    angular.bootstrap(document, ['app']);
});







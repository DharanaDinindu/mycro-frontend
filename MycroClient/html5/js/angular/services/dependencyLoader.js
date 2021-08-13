const baseUrl = 'https://localhost:5001/';

app.service('dependencyLoader', ['$http', function ($http) {

    //getting the components using the appId from the each json file
    this.register = function (appId) {
        return $http.get(baseUrl + appId + '.json').then(function (res) {

            let dependencies = [];
            let components = [];
            for (let i in res.data.components) {
                let component = res.data.components[i];
                dependencies.push(baseUrl + component.appMatch + '/Controllers/' + component.appMatch + 'Controller.js');
                components.push(component);
            }
            return {
                dependencies: dependencies,
                components: components
            };
        });
    }
}]);
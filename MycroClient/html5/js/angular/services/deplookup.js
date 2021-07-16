app.service('deplookup', ['$http', function ($http) {
    this.register = function (appId) {
        return $http.get('https://localhost:5001/' + appId + '.json').then(function (res) {
            ;

            let dependencies = [];
            let components = [];
            for (let i in res.data.components) {
                let component = res.data.components[i];
                dependencies.push('https://localhost:5001/' + component.appMatch + '/Controllers/' + component.appMatch + 'Controller.js');
                components.push(component);
            }
            return {
                dependencies: dependencies,
                components: components
            };
        });
    }
}]);
app.service('deplookup', ['$http', function ($http) {
    this.register = function (appId) {
        return $http.get('https://localhost:5001/' + appId + '.json').then(function (res) {
            $.getJSON('apps.json', function (json) {
                $scope.appMatch = appId;
            };

            let dependencies = [];
            let components = [];
            for (let i in res.data.componentList) {
                let component = res.data.componentList[i];
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
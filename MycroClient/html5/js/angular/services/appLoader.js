app.service('appLoader', function() {
    this.register = function(components,defer) {

        let dependencies = [];

        //registering the app components  
        for(let i in components){
            let component = components[i];
            app.register.component(component.appMatch, {
                templateUrl: 'https://localhost:5001/' + component.appMatch + '/Views/' + component.appMatch + '.html',
                controller : component.appMatch + 'Controller'
                
            });
            
        }
        defer.resolve();

    }
});
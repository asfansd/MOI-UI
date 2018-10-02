app.service('query', ['$http', function($http) {
    return $http.get("http://10.134.108.185:9090").then(function(data){
        return data;
    }, function(err){
        return err;
    })
}])
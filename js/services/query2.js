app.service('query2', ['$http', function($http) {
    return $http.get("http://10.134.108.185:9095").then(function(data){
        return data;
    }, function(err){
        return err;
    })
}])
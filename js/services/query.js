app.service('query', ['$scope', '$http', function($scope, $http) {
    var message="{ PagingAlert(alertParams:{status: \"closed\",from:"+$scope.start.getTime()+",to:"+$scope.end.getTime()+",nextPage:\"0\",limit:10000})"+
             "{ alerts{ algorithm count endTime id severity startTime status metricValue partCluster reason }}}";
    $http({
        method: 'POST',
        url: 'http://moi-x86-1:61580/graphql/v1/query',
        data: { "message" : message },
        headers: {'Content-Type': 'application/json'}
    })
    .then(function (response){
        return response;
      },function (error){
        return error;
    });
}])
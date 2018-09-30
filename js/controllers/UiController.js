app.controller('UiController', ['$scope', '$http', function($scope, $http){
    $scope.analysisGrid = {
        enableSorting: true,
        enableFiltering: true,
        showGridFooter: true,
        columnDefs: [
            { field: 'type', cellTemplate:"<img style=\"align:\'center\'\" width=\"35px\" width=\"25px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
            { field: 'severity',
                cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                    if (grid.getCellValue(row,col)==3){
                        return 'green';
                    }
                    if(grid.getCellValue(row,col)==2){
                        return 'yellow';
                    }
                    if(grid.getCellValue(row,col)==1){
                        return 'red';
                    }
                }
            },
            { field: 'metricValue'},
            { field: 'history'},
            { field: 'dateTime'},
            { field: 'elapsed'},
            { field: 'samples'},
            { field: 'metricId', displayName: 'Metric/Issue Id'},
            { field: 'category'},
            { field: 'metricPath'},
            { field: 'message', headerCellTemplate:"<img style=\"align:\'center\'\" width=\"35px\" ng-src=\"https://cdn0.iconfinder.com/data/icons/thin-communication-messaging/57/thin-038_comment_chat_message-512.png\" lazy-src>"},
            { field: 'actions'},
        ],
        onRegisterApi: function (gridApi) {
            $scope.grid1Api = gridApi;
        }
    };
    
    $scope.users = [
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},        
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 2, metricValue: 44, history: 'data', dateTime: '02/29/2018', elapsed: '13h 20m', samples: '897', metricId: 'JOBIORS', category: 'z/OSO Job', metricPath: 'CA11 > XCFAS > JOBIORS', message: 2, actions: 'no'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
        { type: "https://previews.123rf.com/images/nikolae/nikolae1405/nikolae140500005/28503954-alarm-icon-isolated-on-white-background.jpg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'yes'},
    ];
    
    $scope.analysisGrid.data = $scope.users;
    $scope.start = new Date(2018,02,01,12,12,12,12);
    $scope.end = new Date(2018,02,30,12,12,12,12);

    $scope.demo = {
        start: $scope.start.getTime(),
        end: $scope.end.getTime()
    }
    
    $scope.filterDate = function(value){
        // $scope.test = value;
        
        $scope.temp = {
            year : $scope.end.getYear() + 1900,
            month : $scope.end.getMonth(),
            date : $scope.end.getDate(),
            hours : $scope.end.getHours(),
            minutes : $scope.end.getMinutes(),
            seconds : $scope.end.getSeconds(),
            milliseconds : $scope.end.getMilliseconds(),
        }
        switch(value){
        
        case "1H" :    
                        $scope.temp.hours = $scope.temp.hours-1,
                        $scope.start=new Date($scope.temp.year, $scope.temp.month, $scope.temp.date, $scope.temp.hours,$scope.temp.minutes,$scope.temp.seconds,$scope.temp.milliseconds)
                        break;

        case "1D" :     $scope.temp.date = $scope.temp.date-1,
                        $scope.start=new Date($scope.temp.year, $scope.temp.month, $scope.temp.date, $scope.temp.hours,$scope.temp.minutes,$scope.temp.seconds,$scope.temp.milliseconds)
                        break;

        case "1W" :     $scope.temp.date = $scope.temp.date-7,
                        $scope.start=new Date($scope.temp.year, $scope.temp.month, $scope.temp.date, $scope.temp.hours,$scope.temp.minutes,$scope.temp.seconds,$scope.temp.milliseconds)
                        break;

        case "1M" :     $scope.temp.month = $scope.temp.month-1,
                        $scope.start=new Date($scope.temp.year, $scope.temp.month, $scope.temp.date, $scope.temp.hours,$scope.temp.minutes,$scope.temp.seconds,$scope.temp.milliseconds)
                        break;

        case "All" :    $scope.start = $scope.start.setHours($scope.end.getHours() - 1024)
                        break;
        }
    
        $scope.test={
            start: $scope.start.getTime(),
            end: $scope.end.getTime()
        }
        
        $scope.method = "POST"
        $scope.url = "http://moi-x86-1:61580/graphql/v1/query"
        $scope.config = {
                headers:{
                        'Content-Type': 'text/plain'
                }
        }
        $scope.data = "{ PagingAlert(alertParams:{status: \"closed\",from:"+$scope.demo.start+",to:"+$scope.demo.end+",nextPage:\"0\",limit:10000}){ alerts{ algorithm count endTime id severity startTime status metricValue partCluster reason }}}";
        
        $http({method: $scope.method, url: $scope.url, dataType: 'json', data: $scope.data, config: $scope.config}).
        then(function(response) {
                $scope.temp2 = response;
                $scope.temp3 = response.data;
            }, function(response) {
                $scope.temp2 = response.data || 'Request failed';
                $scope.temp3 = response.status;
        });
    }
    
}]);

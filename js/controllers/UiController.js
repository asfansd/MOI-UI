app.controller('UiController', ['$scope', '$http', 'query', 'query2', function($scope, $http, query, query2){
    $scope.analysisGrid = {
        enableSorting: true,
        enableFiltering: true,
        showGridFooter: true,
        columnDefs: [
            { field: 'type', width: "5%", cellTemplate:"<a href=\"\"><img align=\"center\" width=\"15px\" width=\"15px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
            { field: 'severity', width: "7%",
                cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                    if (grid.getCellValue(row,col)==-1){
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
            { field: 'metricValue', width: "9%",},
            { field: 'dateTime', width: "17%",},
            { field: 'elapsed', width: "8%",},
            { field: 'samples', width: "8%",},
            { field: 'metricId', width: "10%", displayName: 'Metric/Issue Id'},
            { field: 'category', width: "8%",},
            { field: 'metricPath', width: "17%",},
            { field: 'message', width: "5%", headerCellTemplate:"<a href=\"\"><img align=\"center\" width=\"30px\" ng-src=\"https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/feedback-512.png\" lazy-src>"},
            { field: 'actions',  width: "6%", cellTemplate:"<a href=\"\"><img align=\"center\" width=\"15px\" width=\"15px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
        ],
        onRegisterApi: function (gridApi) {
            $scope.grid1Api = gridApi;
        }
    };

    // $scope.users = [
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},        
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 2, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 2, metricValue: 44, history: 'data', dateTime: '02/29/2018', elapsed: '13h 20m', samples: '897', metricId: 'JOBIORS', category: 'z/OSO Job', metricPath: 'CA11 > XCFAS > JOBIORS', message: 2, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 1, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    //     { type: "https://image.flaticon.com/icons/svg/53/53376.svg", severity: 3, metricValue: 77, history: 'nodata', dateTime: '03/29/2018', elapsed: '13h 23m', samples: '789', metricId: 'JOBIOR', category: 'z/OS Job', metricPath: 'CA11 > XCFAS > JOBIOR', message: 0, actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'},
    // ];
    
    $scope.start = new Date(2018,02,01,00,00,00,001);
    $scope.end = new Date(2018,02,31,23,59,59,999);

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
    
        $scope.sample=[];
        $scope.length;

        // query.then(function(response){
        //     var result = response["data"]["PagingAlert"]["alerts"];
        //     $scope.length = (response["data"]["PagingAlert"]["alerts"]).length;
        //     for(var i = 0; i < (response["data"]["PagingAlert"]["alerts"]).length; i++) {
        //         if(result[i]["endTime"] <= $scope.end.getTime() && result[i]["startTime"] >= $scope.start.getTime() ) {
        //             var seconds = ((response["data"]['PagingAlert']['alerts'][i]['endTime']) - (response["data"]["PagingAlert"]['alerts'][i]['startTime']))/1000
        //             var minutes = (seconds/60);
        //             var hours = minutes/60;
        //             var elap = "";
        //             if(hours >= 1){
        //                 elap = Math.round(hours)+" hr ";
        //                 minutes = minutes - (hours*60);
        //             }
        //             //date = (date.getYear()+1900) + "-" + date.getMonth() + "-" + date.getDate();
        //             elap = elap + Math.round(minutes) + " min"
        //             $scope.sample.push({
        //                 type: "https://image.flaticon.com/icons/svg/53/53376.svg",
        //                 severity: response["data"]['PagingAlert']["alerts"][i]['severity'],
        //                 metricValue: response["data"]['PagingAlert']["alerts"][i]['metricValue'],
        //                 dateTime: new Date(response["data"]['PagingAlert']['alerts'][i]['endTime']),
        //                 elapsed: elap,
        //                 samples: response["data"]['PagingAlert']['alerts'][i]['count'],
        //                 actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'
        //             });
        //         }        
        //     }
        // },function(err){
        //     console.log(err)
        // });

        // query2.then(function(response) {
        //     for(var i = 0; i < $scope.length; i++) {  
        //         $scope.sample[i]['metricId'] = response['data']["apiMessage"]['data']['model'][i]['meta']['metricId'];
        //         $scope.sample[i]['category'] = response['data']["apiMessage"]['data']['model'][i]['meta']['category']
        //         $scope.sample[i]['metricPath'] = response['data']["apiMessage"]['data']['model'][i]['path'][0]['value'] + " > " + response['data']["apiMessage"]['data']['model'][i]['path'][1]['value'] + " > " + response['data']["apiMessage"]['data']['model'][i]['meta']['metricId']
        //         $scope.sample[i]['message'] = response['data']["apiMessage"]['messages'].length;
        //     }
        // }, function(err){
        //     console.log(err)
        // })
        
        $scope.test={
            start: $scope.start.getTime(),
            end: $scope.end.getTime()
        } 
        
        $scope.method = "POST"
        $scope.url = "http://moi-x86-1:61580/graphql/v1/query"
        $scope.config = {
                headers:{
                        'Content-Type': 'application/json'
                }
        }
        $scope.data = "{ PagingAlert(alertParams:{status: \"closed\",from:"+1519886532012+",to:"+1522392132012+",nextPage:\"0\",limit:10000}){ alerts{ algorithm count endTime id severity startTime status metricValue partCluster reason }}}";
        $scope.data2 = ""
        $scope.url2 = "http://moi-x86-1:61580/profiler-app/bulkmetrics/model"

        $http({method: $scope.method, url: $scope.url, dataType: 'json', data: $scope.data, config: $scope.config}).
        then(function(response) {
            var result = response["data"]["PagingAlert"]["alerts"];
            $scope.length = (response["data"]["PagingAlert"]["alerts"]).length;
            for(var i = 0; i < (response["data"]["PagingAlert"]["alerts"]).length; i++) {
                if(result[i]["endTime"] <= $scope.end.getTime() && result[i]["startTime"] >= $scope.start.getTime() ) {
                    var seconds = ((response["data"]['PagingAlert']['alerts'][i]['endTime']) - (response["data"]["PagingAlert"]['alerts'][i]['startTime']))/1000
                    var minutes = (seconds/60);
                    var hours = minutes/60;
                    var elap = "";
                    if(hours >= 1){
                        elap = Math.round(hours)+" hr ";
                        minutes = minutes - (hours*60);
                    }
                    //date = (date.getYear()+1900) + "-" + date.getMonth() + "-" + date.getDate();
                    elap = elap + Math.round(minutes) + " min"
                    $scope.sample.push({
                        type: "https://image.flaticon.com/icons/svg/53/53376.svg",
                        severity: response["data"]['PagingAlert']["alerts"][i]['severity'],
                        metricValue: response["data"]['PagingAlert']["alerts"][i]['metricValue'],
                        dateTime: new Date(response["data"]['PagingAlert']['alerts'][i]['endTime']),
                        elapsed: elap,
                        samples: response["data"]['PagingAlert']['alerts'][i]['count'],
                        actions: 'https://cdn2.iconfinder.com/data/icons/optimize-your-website/60/click-512.png'
                    });

                    $scope.data2 = "{ \"keys\" : [\""+(response["data"]['PagingAlert']['alerts'][i]['id'])+"\"] }"

                    $http({method: $scope.method, url: $scope.url2, dataType: 'json', data: $scope.data2, config: $scope.config}).
                    then(function(response) {
                        $scope.sample[i]['metricId'] = response['data']["apiMessage"]['data']['model'][i]['meta']['metricId'];
                        $scope.sample[i]['category'] = response['data']["apiMessage"]['data']['model'][i]['meta']['category']
                        $scope.sample[i]['metricPath'] = response['data']["apiMessage"]['data']['model'][i]['path'][0]['value'] + " > " + response['data']["apiMessage"]['data']['model'][i]['path'][1]['value'] + " > " + response['data']["apiMessage"]['data']['model'][i]['meta']['metricId']
                        $scope.sample[i]['message'] = response['data']["apiMessage"]['messages'].length;
                    },function(error){
                        console.log(error);
                    });
                }        
            }
            $scope.analysisGrid.data = $scope.sample;
            // for(var i = 0; i < $scope.length; i++) {  
            //     $scope.sample[i]['metricId'] = response['data']["apiMessage"]['data']['model'][i]['meta']['metricId'];
            //     $scope.sample[i]['category'] = response['data']["apiMessage"]['data']['model'][i]['meta']['category']
            //     $scope.sample[i]['metricPath'] = response['data']["apiMessage"]['data']['model'][i]['path'][0]['value'] + " > " + response['data']["apiMessage"]['data']['model'][i]['path'][1]['value'] + " > " + response['data']["apiMessage"]['data']['model'][i]['meta']['metricId']
            //     $scope.sample[i]['message'] = response['data']["apiMessage"]['messages'].length;
            // }
            console.log(response);
        }, function(err) {
            console.log(err)
        });
    }
}]);
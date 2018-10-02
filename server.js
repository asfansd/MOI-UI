// var express=require('express');
// var bodyParser = require('body-parser');
// var app = express();
// // app.use(express.static(__dirname+'/client'));
// // app.use(bodyParser.json());
// // app.use(express.static(__dirname+'/index.html'));
// app.get('/',function(req,res){
//     res.sendFile(__dirname + '/index.html');
// });

// // app.get('/api/RICoverage',function(req,res){
// //     mongoHelper.ConnectionMongo(req,'RICoverage',function(xres){
// //             res.json(xres);
// //     });
    
// // });

// // app.get('/api/RIUtilization',function(req,res){
// //     mongoHelper.ConnectionMongo(req,'RIUtilization', function(xres){
// //             console.log(xres);
// //             res.json(xres);
// //     });
// // });

// app.listen(8080);
// console.log("App listening on port 8080");

var request = require('request')

var req ={
    "request": {
        "body": "{ PagingAlert(alertParams:{status: \"closed\",from:"+1519886532012+",to:"+1522392132012+",nextPage:\"0\",limit:10000}){ alerts{ algorithm count endTime id severity startTime status metricValue partCluster reason }}}",
    }
};

request.post({
        url: 'http://moi-x86-1:61580/graphql/v1/query',
        body: req,
        json: true
    }, function (error, response, body) {
        if(error)
            console.log(error)
        if (!error && response.statusCode == 200) {
            console.log(response.data)
        }
});
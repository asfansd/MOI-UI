var express=require('express');
var bodyParser = require('body-parser');
var app = express();
// app.use(express.static(__dirname+'/client'));
// app.use(bodyParser.json());
// app.use(express.static(__dirname+'/index.html'));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// app.get('/api/RICoverage',function(req,res){
//     mongoHelper.ConnectionMongo(req,'RICoverage',function(xres){
//             res.json(xres);
//     });
    
// });

// app.get('/api/RIUtilization',function(req,res){
//     mongoHelper.ConnectionMongo(req,'RIUtilization', function(xres){
//             console.log(xres);
//             res.json(xres);
//     });
// });

app.listen(8080);
console.log("App listening on port 8080");
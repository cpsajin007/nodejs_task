//REST API demo in Node.js
var express = require('express'); 
var app = express();
var fs = require('fs'); 

app.get('/getNames', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){   
        if (err) throw err;
        console.log(data);
        res.end(data); // you can also use res.send()
    })

});
app.get('/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
app.listen(8080,()=>console.log("success"))
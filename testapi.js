//http modules
const http=require("http");
const fs=require("fs");
const path=require("path");
const server = http.createServer((req,res)=>{
    // res.write("<h1>this is node.js</h1>");
    if(req.url==="/getNames"){
        fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){ 

            if(err) throw err;
            // res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data)
            // res.json(data)
            });
    }
  
    //understand the url
    // console.log(req.url);
    // console.log("Test");
    // res.end();
});
const PORT = process.env.PORT || 3001;
server.listen(PORT,() => console.log(`server running on ${PORT}`));

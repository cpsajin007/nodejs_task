//callbackfunction
//is an asynchronus equivalent for a function
//helps in non blocking code
//helps to performance for single threaded nodejs
////blocking code without call back
var  fs= require('fs');
console.log("program started");
var data = fs.readFileSync(input.txt);
console.log(data.toString());
console.log("program failed");
//in sysncronicall its output is 
  //program started
   //file content(input.txt)
   //program failed
///non blocking code with call back
var  fs= require('fs');
console.log("program started");
fs.readFile('input.txt',function(err,data)
{
    if(err) throw err;
    return console.error(err);
    console.log(data.toString());
});
console.log("program ended");
//in asynchronusly its output is
 //program started
 //profram ended
 //contant(input.txt)


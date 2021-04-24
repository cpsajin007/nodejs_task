const express = require('express');
const app = express();
const students = [
{id: 1, name: 'sajin', mark:100},
{id: 2, name: 'sree', mark:78},
{id: 3, name: 'ram', mark:90}
]

//READ Request Handlers
app.get('/getName', (req, res) => {
res.send(students);
});
 

 
//PORT ENVIRONMENT VARIABLE
app.listen(8080,()=>console.log("success"))
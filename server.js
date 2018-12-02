var express = require('express');
var app = express();
var path = require('path');
 // 'client' will be the same folder name.
app.use(express.static("client"));
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
//Serve just single file
// app.get('/', function (req, res,next) {
//  res.sendFile(__dirname+'/main.html'); 
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
console.log("MyProject Server is Listening on port 3000");

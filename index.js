//Lets require/import the HTTP module
var http = require('http');
var url = require('url');
var fs = require('fs');

//Lets define a port we want to listen to
const PORT=8080; 
const DIR='pub';

//We need a function which handles requests and send response
function handleRequest(request, response){
    console.log(request.method + ' ' + request.url);

    if(request.method != 'GET') {
        //handleError(403,request,response);
    }

    console.log(request);

    reqUrl = url.parse(request.url);


    response.end("Hello!");


}

function handleError(request,response) {
    console.log()
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
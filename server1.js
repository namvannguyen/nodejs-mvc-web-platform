//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(req, res){

	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
		case '':
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('Homepage');
			break;
		case '/about':
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('About');
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not Found');
			break;
	}


}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});




// var http = require('http');
// http.createServer(function(req,res){
// // normalize url by removing querystring, optional
// // trailing slash, and making it lowercase
// var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
// switch(path) {
// case '':
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('Homepage');
// break;
// case '/about':
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('About');
// break;
// default:
// res.writeHead(404, { 'Content-Type': 'text/plain' });
// res.end('Not Found');
// break;
// }
// }).listen(3000);
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

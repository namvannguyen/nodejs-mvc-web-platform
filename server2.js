//Lets require/import the HTTP module
var http = require('http');
var url = require('url');



//Lets define a port we want to listen to
const PORT=8888; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    // response.end('It Works!! Path Hit: ' + request.url);
    var parts = url.parse(request.url, true);
  	console.log(parts);
  	
  	var query = parts.query;
    
  	//  console.log(query);


   	if (1==2){//{parts.partname.substr(1,parts.partname.length -1) == 'favicon.ico'){

   	}else{
   		var routeHandle = require("./route/routeHandle");
	    var routepath = parts.pathname;
	//     console.log('routepath %s', routepath);
	//     console.log(parts);
	// // 	console.log(routepath); 
	   	routearr = routepath.split('/');
	    // console.log("controller %s action %s", routearr[1], routearr[2]);
	    var controller = routearr[1],
	    	action = routearr[2];
	    routeHandle.route(request, response, controller, action, parts.query);
	   
	   	// response.writeHead(200, {'Content-Type': 'text/html'});
	    // response.end("<html><body>Hello Node</body></html>");
	}
}

//Create a server
var server = http.createServer(handleRequest);



//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
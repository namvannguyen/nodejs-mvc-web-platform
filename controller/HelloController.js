function index1(req, res, q){
		
	   	console.log("hello -> index1");
	   	res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end("<html><body>Hello Node</body></html>");
}

module.exports = {
	index: index1
}
function index(req, res){
	  	console.log("hello -> index1");
	   	res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end("<html><body>ABC</body></html>");
}



module.exports = {
	index: index,
	xyz:index
}

function route(req, res, c, a, q){
	if (null ==c || c == 'undefined'){
			c = "index";
	}
	if (c == 'favicon.ico'){
	}else{
		var controller = require('../controller/' + c + 'controller');
		if (null == a || a == 'undefined'){
			a = "index";
		}
		
		controller.index(req, res, q);
	}

}


module.exports = {
	route: route
}
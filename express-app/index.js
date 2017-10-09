const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let products = [
	  {"name" : "Молоко",
	   "done" : false,
	   "desc" : ""
	  },
	  {"name" : "Творог",
	   "done" : false,
	   "desc" : ""
	  },
	  {"name" : "Хлеб",
	   "done" : false,
	   "desc" : ""
	  },
	  {"name" : "Зубная паста",
	   "done" : false,
	   "desc" : ""
	  },
	  {"name" : "Картошка",
	   "done" : false,
	   "desc" : ""
	  },
	  {"name" : "Помидоры",
	   "done" : false,
	   "desc" : ""
	  },
	  {"name" : "Стиральный порошок",
	   "done" : false,
	    "desc" : ""
	  },
	  {"name" : "Гель для душа",
	   "done" : false,
	   "desc" : ""
	  }];

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
});

app.get('/products', function(req, res){
	console.log("GET!!!!");
	res.json(products);
});

app.get('/products/id/:productId', function(req, res){
	console.log(req.params);
	res.json(products[req.params.productId]);
});

app.post('/products', function (req, res) {
	console.log("POST!!!!");
	products.push(req.body);
	console.log(products);
  	res.json(req.body);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
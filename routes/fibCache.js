//app.get('/fib/:num', fib.getFib );

var cache = new Array();

function fib(n) {
 
 if ( n.toString() in cache ) return cache[n.toString()];
  
 if ( n < 2 ) { return 1; }
 else { 
   var fibV = fib(n-2) + fib(n-1);
   cache[n.toString()] = fibV;
   return fibV;
 }
}//end fib

exports.getFib = function(req, res) {
 console.log(req.params);
 var n = parseInt(req.params.num);
 console.log('calculate fib for : ' + n);
 console.time("fib");
 var result = fib( n );
 console.timeEnd("fib");
 res.jsonp( result );
};


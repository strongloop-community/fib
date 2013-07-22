//app.get('/fib/:num', fib.getFib );

function fib(n) {
 if ( n < 2 ) { return 1; }
 else { return fib(n-2) + fib(n-1);}
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


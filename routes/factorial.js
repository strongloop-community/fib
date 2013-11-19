

// trampoline style for more info on trampoline check out raganwald blog post @ http://raganwald.com/2013/03/28/trampolines-in-javascript.html
function factorial (n) {
  return n
  ? n * factorial(n - 1)
  : 1
}

function factorial (n) {
  var _factorial = function myself (acc, n) {
    return n
    ? myself(acc * n, n - 1)
    : acc
  };
  
  return _factorial(1, n);
}


// YCombinator version
// http://buzzdecafe.github.io/code/2013/09/05/javascript-y-combinator/?utm_source=javascriptweekly&utm_medium=email
function basicFactorial(n) {
 return n === 0 ? 1 : n * basicFactorial(n-1);
}

function nonRecursive(f) {
  return function(n) {
    return n === 0 ? 1 : n * f(n-1);
  }
}
	
function Y(f) {
   var p = function(h) {
     return function(x) {
       return f(h(h))(x);
     };
   };
   return p(p);
 }
//  Y(nonRecursive)(10); // 55

exports.getFactorial = function(req, res) {
 console.log(req.params);
 var n = parseInt(req.params.num);
 console.log('calculate factorial for : ' + n);
 console.time("factorial");
 var result = factorial( n );
 console.timeEnd("factorial");
 res.jsonp( result );
};
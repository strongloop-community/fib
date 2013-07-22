/*
 * GET home page.
 */
 
function index(req, res){
  res.render('index', { title: 'fib' });
};

/**
 * Set up routes
 */

var fib = require('./fib');
var fibCache = require('./fibCache');
 
module.exports = function(app, options) {
  app.get('/', index);
  
  app.get('/fib/:num', fib.getFib );
  app.get('/fibCache/:num', fibCache.getFib );
  
}

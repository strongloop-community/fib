/*
 * GET home page.
 */
 
function index(req, res){
  res.render('index', { title: 'fib' });
};

/**
 * Set up routes
 */
 
module.exports = function(app, options) {
  app.get('/', index);
  
  
}

function fibonacci(n) {

  if (n <= 2)
    return 1;

  else 
   return fibonacci(n-1) + fibonacci(n-2);
	
}
var http = require('http');


  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
	var fib = fibonacci(40);
	var fibstr = String(fib);
    
	response.write(fibstr);
    response.end();
  }
  
  http.createServer(onRequest).listen(5000);
  console.log("Server has started.");
  
  
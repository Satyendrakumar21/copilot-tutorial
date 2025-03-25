//basic express js application
//log every request method and path to the console
// on request to root path to the server send back a response with a message "Hello World!"
//on request to /about path to the server send back a response with a message "About Us"
//on request to /home path to the server send back a response with a message "Home Page"
//on request to the route that does not exist on the server send back a response with a message "404 Page Not Found"
//start the server and listen on port 3000

//write code based on above requirements
const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
}); 

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//run the code using node index.js and test the application using postman or browser
//test the application by sending requests to different paths
//verify the output
//stop the server using ctrl+c




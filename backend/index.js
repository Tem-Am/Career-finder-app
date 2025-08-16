const express = require('express'); // import the express module
const app = express(); // create an instance of express
const PORT = 3000; // define the port number

// Middleware to parse JSON
app.use(express.json());

// Sample route
// res sends a simple message when the /main route is accessed
// req is the request object, res is the response object 
// also, get json file from res.send
app.get('/main', (req, res) => {
  res.send('Hello, world!');
});

app.post('/main/:id', (req, res) => {
  const  { id } = req.params; // extract id from the request parameters
  const { body } = req; // extract body from the request

  // Log the received data.
  res.send({
    message: `Received POST request with ID: ${id}`,
    data: body
  });
}
)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

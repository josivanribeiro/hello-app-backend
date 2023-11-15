// Node.js server using Express
const myModule = require('./myModule');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());

const port = 3001;

app.use(bodyParser.json());

var requestBody = null;
app.post('/api/sendData', (req, res) => {
  requestBody = req.body;
  myModule.setPersistentVariable(requestBody);
  // Process the received data as needed
  console.log('Received data:', { requestBody });
  res.json({ success: true});
});

app.get('/api/data', (req, res) => {
  // Your logic to fetch and send data
  res.json(myModule.getPersistentVariable());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Node.js server using Express
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 3001;

// Sample list of objects (replace this with your actual data source)
const objectsList = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
  // Add more objects as needed
];

app.get('/api/objects', (req, res) => {
  res.json(objectsList);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
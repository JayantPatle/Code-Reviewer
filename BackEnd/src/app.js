const express = require('express');
const cors = require('cors'); // Add this line
const aiRoutes = require('./routes/ai.routes.js');

const app = express();
app.use(cors()); // Add this line
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/ai', aiRoutes);

module.exports = app;
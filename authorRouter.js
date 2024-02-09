const express = require('express');
const authorRouter = express.Router();

authorRouter.get('/', (req, res) => {
  res.send('GET request to the homepage');
});
authorRouter.post('/', (req, res) => {
    res.send('POST request to the homepage');
});
authorRouter.put('/', (req, res) => {
    res.send('PUT request to the homepage');
});
authorRouter.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
});

module.exports = authorRouter;
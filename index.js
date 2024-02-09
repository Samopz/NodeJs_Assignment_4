const express = require('express');
const app = express();
const authorRouter = require('./authorRouter');
const logger = require('./logger');

const PORT = 3000;

//Middleware
app.use('/authors', authorRouter);
app.use(logger);




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}: Express app is running on http://localhost:${PORT}`);
});
// This is the function to log the request, response, and next details
const logger = (req, res, next) => {
    console.log('request', {
        url: req.url,
        method: req.method,
        time: new Date(),
        body: req.body,
        query: req.query,
        params: req.params,
    });
    next();
};

module.exports = logger;
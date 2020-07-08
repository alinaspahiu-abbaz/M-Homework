// ERROR HANDLERS
const badRequestHandler = (err, req, res, next) => {
    if (err.httpStatusCode === 400) {
      res.status(400).send(err.message)
    }
    next(err)
  } // 400
  
  const notFoundHandler = (err, req, res, next) => {
    if (err.httpStatusCode === 404) {
      res.status(404).send(err.message || "Resource not found!")
    }
    next(err)
  } // 404
  
  // catch all
  const genericErrorHandler = (err, req, res, next) => {
    if (!res.headersSent) {
      // checks if another error middleware already sent a response
      res.status(err.httpStatusCode || 500).send(err.message)
    }
  }
  
  module.exports = {
    badRequestHandler,
    notFoundHandler,
    genericErrorHandler,
  }
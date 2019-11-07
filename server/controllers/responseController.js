function sendStatus(req, res) {
    res.status(200).json({
        status: 'ok',
        data: res.locals.data
    })
}

function sendError(err, req, res, next) {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  }

  module.exports = {
      sendStatus,
      sendError
  }
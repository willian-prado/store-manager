module.exports = async (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: err.details[0].message,
      },
    });
  }

  const statusCodes = {};
  const invalidData = 'invalid_data';
  statusCodes[invalidData] = 422;
  
  const status = statusCodes[err.code] || 500;

  return res.status(status).json({ err });
};
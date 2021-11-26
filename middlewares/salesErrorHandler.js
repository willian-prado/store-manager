module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(422)
      .json({ err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      } });
  }

  const statusByErrorCode = {};
  const invalidData = 'invalid_data';
  const notFound = 'not_found';
  const stockProblem = 'stock_problem';
  statusByErrorCode[invalidData] = 422;
  statusByErrorCode[notFound] = 404;
  statusByErrorCode[stockProblem] = 404;

  const status = statusByErrorCode[err.code] || 500;

  return res.status(status).json({ err });
};
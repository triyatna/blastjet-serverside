const response = (
  res,
  statusCode = 503,
  success = false,
  message = "Error request!",
  data = {}
) => {
  res.status(statusCode);
  res.json({
    success,
    message,
    data,
  });

  res.end();
};

export default response;

const errorHandler = (err, req, res, next) => {
  const errCode = err.status || 500;
  const errMessage = err.message || 'Internal Server Error';
  res.status(errCode);
  res.type('txt');
  res.send(errMessage);
};

export default errorHandler;

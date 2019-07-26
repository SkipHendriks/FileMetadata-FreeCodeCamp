const notFoundHandler = (req, res, next) => next({ status: 404, message: 'Not found' });

export default notFoundHandler;

/**
 * Auth middleware stub.
 * Replace with real JWT verification when auth is implemented.
 */
const authMiddleware = (req, res, next) => {
  // TODO: Verify JWT token from Authorization header
  // const token = req.headers.authorization?.split(' ')[1];
  // if (!token) return res.status(401).json({ error: 'Unauthorized' });
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // req.user = decoded;
  next();
};

module.exports = authMiddleware;


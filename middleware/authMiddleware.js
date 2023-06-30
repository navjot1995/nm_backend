const { verifyToken } = require('../helper/jwt');

const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Authorization failed!' });
    }
  
    try {
      const decodedToken = verifyToken(token);
      req.body.userId = decodedToken.userId;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Authorization failed!' });
    }
  };

module.exports = {
    authMiddleware
}
  
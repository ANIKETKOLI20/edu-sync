export const checkPrincipal = (req, res, next) => {
    if (req.user.role !== 'Principal') {
      return res.status(403).json({ message: 'Forbidden: Only Principals can perform this action' });
    }
    next();
  };
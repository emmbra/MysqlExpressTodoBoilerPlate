const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// forwarded from app.use(routes) on server
// prepends '/' to every route
// if we hit /api in this router object forward to apiRoutes
router.use('/api', apiRoutes);

module.exports = router;

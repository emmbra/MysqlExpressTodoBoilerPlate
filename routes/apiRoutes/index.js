const router = require('express').Router();
const todoRoutes = require('./todoRoutes');

// prepends /api to every route
// if we hit /apis/todos in this router object forward to todoRoutes
router.use('/todos', todoRoutes);

module.exports = router;

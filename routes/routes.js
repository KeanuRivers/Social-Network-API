const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughts-routes');

router.use('/api/user', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
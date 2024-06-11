const router = require('express').Router();
const activityRoutes = require('./activityRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require ('./tripRoutes');
const userRoutes = require('./userRoutes');

router.use('/activity', activityRoutes);
router.use('/location', locationRoutes);
router.use('/trip', tripRoutes);
router.use('/users', userRoutes);

module.exports = router;

const router = require('express').Router();
const { Activity } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all of a user's activities 
router.get('/', withAuth, async (req, res) => {
    try {
        const activityData = await Activity.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const activities = activityData.map((activity) => activity.get({ plain: true }));

        res.status(200).json(activities);
        
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get a specific activity 
router.get('/:id', withAuth, async (req, res) => {
    try {

        const activityData = await Activity.findByPK(req.params.id, {
            where: {
                user_id: req.session.user_id,
            },
        });

        if (!activityData){
            res.status(404).json({ message: 'No activity found with this id!' });
            return;
        }

        const activity = activityData.get({ plain: true });

        return activity;

    } catch (err) {
        res.status(400).json(err);
    }
});

// Create an activity
router.post('/', withAuth, async (req, res) => {
    try {
        const newActivity = await Activity.create({
            ...req.body,
        });

        res.status(200).json(newActivity);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Update an activity
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updateActivity = await Activity.update(
            {
                ...req.body,
            },
            {
                where: { id: req.params.id },
            },
        );

        if (!updateActivity){
            res.status(404).json({ message: 'No activity found with this id!' });
            return;
        }

        res.status(200).json(updateActivity);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete an activity 
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const activityData = await Activity.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        if (!activityData){
            res.status(404).json({ message: 'No activity found with this id!' });
            return;
        }

        res.status(200).json(activityData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
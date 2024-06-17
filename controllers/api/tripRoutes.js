const router = require('express').Router();
const { Trip } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all of a user's trips
router.get('/', withAuth, async (req, res) => {
    try {
        const tripData = await Trip.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const trips = tripData.map((trip) => trip.get({ plain: true }));

        res.status(200).json(trips);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Get a specific trip 
router.get('/:id', withAuth, async (req, res) => {
    try {
        const tripData = await Trip.findByPK(req.params.id, {
            where: {
                user_id: req.session.user_id,
            },
        });

        if (!tripData){
            res.status(404).json({ message: 'No trip found with this id!' });
            return;
        };

        const trip = tripData.get({ plain: true });

        res.status(200).json(trip);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Create a trip
router.post('/', withAuth, async (req, res) => {
    try {
        const newTrip = await Trip.create({
            ...req.body,
            user_id: req.session.user_id,
        });``

        console.log(newTrip);

        res.status(200).json(newTrip);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a trip
router.post('/:id', withAuth, async (req, res) => {
    try {
        const updateTrip = await Trip.update(
            {
                ...req.body,
            },
            {
                where: { id: req.params.id },
            },
        );

        if (!tripData){
            res.status(404).json({ message: 'No trip found with this id!' });
            return;
        };

        res.status(200).json(updateTrip);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a trip
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!tripData){
            res.status(404).json({ message: 'No trip found with this id!' });
            return;
        };

        res.status(200).json(tripData);

    } catch (error) {
        res.status(500).json(err);
    }
});

module.exports = router;
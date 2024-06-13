const router = require('express').Router();
const { Location } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all locations
router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();

        const locations = locationData.map((location) => location.get({ plain: true }));

        return locations;

    } catch (err) {
        res.status(400).json(err);
    }
});

// Create a location 
router.post('/', async (req, res) => {
    try {
        const newLocation = await Location.create({
            ...req.body,
        });

        res.status(200).json(newLocation);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a location
router.put('/:id', async (req, res) => {
    try {
        const updateLocation = await Location.update(            
            {
                ...req.body
            },
            {
            where: { id: req.params.id }
            },
        );

        if (!updateLocation){
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }

        res.status(200).json(updateLocation);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a location
router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!locationData){
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }

        res.status(200).json(locationData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
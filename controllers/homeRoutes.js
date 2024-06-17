const router = require('express').Router();
const { Trip, Location, Activity, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  
  res.render('login');
  
});

router.get('/register', (req, res) => {
  
  res.render('register');
  
});

router.get('/addLocation', (req, res) => {
  
  res.render('addLocation');
  
});

router.get('/createActivity', (req, res) => {
  
  res.render('createActivity');
  
});

router.get('/dashboard', (req, res) => {
  
  res.render('dashboard');
  
});

router.get('/Location', (req, res) => {
  
  res.render('Location');
  
});

router.get('/planTrip', (req, res) => {
  
  res.render('planTrip');
  
});

router.get('/savedTrips', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.findAll({
        where: {
            user_id: req.session.user_id,
        },
    });

    const trips = tripData.map((trip) => trip.get({ plain: true }));
    console.log(trips);

    res.render('savedTrips', {trips});

  } catch (err) {
      res.status(400).json(err);
  }
});

router.get('/viewActivity', (req, res) => {
  
  res.render('viewActivity');
  
});

router.get('/trip/:id', withAuth, async (req, res) => {

  console.log(req.params.id);

  try {
    // const tripData = await Trip.findByPK(parseInt(req.params.id));
    const tripData = await Trip.findOne({
      where: 
      {
        id: req.params.id
      },
      include: [{
        model: Location
      }]
    });

    if (!tripData){
        res.status(404).json({ message: 'No trip found with this id!' });
        return;
    };

    const trip = tripData.get({ plain: true });

    console.log(trip);

    res.render('Trip', {trip});

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/location/:id', withAuth, async (req, res) => {

  console.log(req.params.id);

  try {
    const locationData = await Location.findOne({
      where: 
      {
        id: req.params.id
      },
      include: [{
        model: Activity
      }]
    });

    if (!locationData){
        res.status(404).json({ message: 'No location found with this id!' });
        return;
    };

    const location = locationData.get({ plain: true });

    console.log(location);

    res.render('Location', {location});

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;

// FOR REFERENCE 

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
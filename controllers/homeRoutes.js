const router = require('express').Router();
const { Project, User } = require('../models');
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

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
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

router.get('/savedTrips', (req, res) => {

  res.render('savedTrips');

});

router.get('/viewActivity', (req, res) => {

  res.render('viewActivity');

});

router.get('/viewAllLocations', (req, res) => {

  res.render('viewAllLocations');

});

module.exports = router;

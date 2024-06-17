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

  res.render('savedTrips');

});

router.get('/viewActivity', (req, res) => {
  
  res.render('viewActivity');
  
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
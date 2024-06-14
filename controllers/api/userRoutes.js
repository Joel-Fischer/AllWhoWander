const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all users
router.get('/', withAuth, async (req, res) => {
  try {
      const userData = await User.findAll();

      const users = userData.map((user) => user.get({ plain: true }));

      res.status(200).json(users);

  } catch (err) {
      res.status(400).json(err);
  }
})

// Get a specific user 
router.get('/:id', withAuth, async (req, res) => {
  try {
      console.log(req.params.id)    ;

      // const userData = await User.findByPK(req.params.id);
      // console.log(userData);

      const userData = await User.findAll({
        where: {
          id: req.params.id
        }
      });
      console.log(userData);

      const users = userData.map((user) => user.get({ plain: true }));
      console.log(users);
      
      if (!users){
          res.status(404).json({ message: 'No user found with this id!' });
          return;
      }

      res.status(200).json(users);

  } catch (err) {
      res.status(400).json(err);
  }
});

// Create user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Delete User
router.delete('/delete/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!userData){
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    res.status(200).json(userData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username is  already existed, please change');
    }

    // If user does not exist, create a new user
    const user = new User({ username, password });
    await user.save();
    res.status(200).send('U have been registered sucessfully now u can login to your account by clicking the login button.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering new user please try again or later.');
  }
};


//-------------------------------------------------------------------------
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({
        error: 'Incorrect username or password or u might not have an account'
      });
    } else {
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          res.status(500).json({
            error: 'Internal error please try again'
          });
        } else if (!isMatch) {
          res.status(401).json({
            error: 'Incorrect username or password'
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '10h'
          });
          
          res.cookie('token', token, { httpOnly: true })
          .status(200).json({ token });  // Add this line
        }
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal error please try after some time.'
    });
  }
};  


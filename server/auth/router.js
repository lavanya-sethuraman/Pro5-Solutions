const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../users/models');
const lod = require('lodash');


const { JWT_EXPIRY, JWT_SECRET } = require('../config');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const createAuthToken = user => {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.userName,
    expiresIn: JWT_EXPIRY,
    algorithm: 'HS256'
  });
};

const router = express.Router();

router.get('/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    let { userName } = req.user;
    return User
      .findOne({ userName })
      .then(user => {
        return res.status(200).json({
          data: user.projectManagerData
        })
      })
  }
);

router.post('/login',
  passport.authenticate('basic', { session: false }),
  (req, res, next) => {
    const authToken = createAuthToken(req.user.apiRepr());
    res.json({ authToken });
    next();
  }
);

router.post('/refresh',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    const authToken = createAuthToken(req.user);
    res.json({ authToken });
    next();
  }
);

router.post('/project', jsonParser, passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    let { userName } = req.user;
    let updateProject = req.body;
    User.findOne({ userName }, function (err, user) {
      user.projectManagerData.project.push(updateProject);
      user.save();
      return res.status(200).json({
        data: user.projectManagerData
      });
    });
  }
);


module.exports = { router };





const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');

router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

router.post('/', passport('jwt', { session: false }), (req, res) => {
  const newPost = new Post({
    test: req.body.test,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });
  newPost.save().then(post => res.json(post));
});

module.exports = router;

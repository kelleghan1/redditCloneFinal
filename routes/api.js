var express = require('express');
var router = express.Router();
var knex = require("../db/knex");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



router.get('/api/posts', function(req, res, next) {
  knex('posts_table')
  .join('users_posts', 'posts_table.id', 'users_posts.post_id')
  .join('users_table', 'users_posts.user_id', 'users_table.id')
  .then(function(posts){
    res.json(posts)
  })
});

router.get('/api/comments', function(req, res, next) {
  var commentsCombine = [];

  knex('posts_table')
  .join('posts_comments', 'posts_table.id', 'posts_comments.post_id')
  .join('comments_table', 'posts_comments.comment_id', 'comments_table.id')
  .then(function(comments){
    res.json(comments)
  })
});


router.post('/api/submitpost', function(req) {
  knex('posts_table')
  .insert(req.body)
  .then(function(){
  });
});

router.post('/api/submituser', function(req, res, next) {
  const errors = [];

  knex('users_table')
  .where('lower(email) = ?', req.body.email.toLowerCase())
  .then(function(duplicate){

    if (duplicate.count){

      errors.push('Email already exists');
      res.json(errors)

    }else{

      const saltRounds = 5;
      const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);

      knex('users_table')
      .insert({
        email: req.body.email,
        name: req.body.name,
        password_hash: passwordHash

      })
      .returning('*')
      .then(function (user) {

        res.json(user[0])

      })

    }
  })

});



module.exports = router;

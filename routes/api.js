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
  console.log(req.body);
  knex('posts_table')
  .insert(req.body)
  .then(function(){
  });
});

router.post('/api/submituser', function(req, res, next) {
  const errors = [];

  knex('users_table')
  .where('email', req.body.email.toLowerCase())
  .first()
  .then(function(duplicate){
    if (duplicate){

      errors.push({error: 'Email already exists'});
      res.json(errors[0])

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
      .then(function (userResult) {
        const user = userResult[0];
        // const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET);
        res.json({
          id: user.id,
          email: user.email,
          name: user.name,
          token: 'token'
        })
      })

    }
  })

});

router.post('/api/login', function(req, res, next) {
  const errors = [];
  var email = req.body.email;
  var password = req.body.password;

  knex('users_table')
  .where('email', email.toLowerCase())
  .first()
  .then(function(user){

    if (user) {
      const saltRounds = 5;
      const passwordHash = bcrypt.hashSync(password, saltRounds);

      if (passwordHash === user.password_hash) {
        res.json({
          id: user.id,
          email: user.email,
          name: user.name,
          token: 'token'
        })

      }else{
        errors.push({error: 'Password incorrect'});
        res.json(errors[0])
      }

    }else{
      errors.push({error: 'Email incorrect'});
      res.json(errors[0])
    }

  })

});



module.exports = router;

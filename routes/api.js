var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

/* GET home page. */
// router.post('/add', function(req) {
//   knex('pirates_table')
//   .insert(req.body)
//   .then(function(){
//   });
// });


router.get('/api/posts', function(req, res, next) {

  knex('users_table')
  .join('users_posts', 'users_table.id', 'users_posts.user_id')
  .join('posts_table', 'users_posts.post_id', 'posts_table.id')
  .then(function(posts){
    res.json(posts)
  })
});


router.get('/api/comments', function(req, res, next) {
  var commentsCombine = [];

  knex('posts_table')
  .join('posts_comments', 'posts_table.id', 'posts_comments.post_id')
  .join('comments_table', 'posts_comments.comment_id', 'comments_table.id')
  // .select('id', 'name', 'title', 'date', 'description', 'image')
  .then(function(comments){
    res.json(comments)
  })
});



module.exports = router;

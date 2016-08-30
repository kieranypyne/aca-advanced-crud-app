const PostModel = require('../models/PostModel.js')

module.exports = {
  list: function(req, res, next) {
    PostModel.find(function (err, posts) {
      res.render('posts', { posts });
    });
  },

  new: function(req, res, next) {
    res.render('post_form');
  },

  create: function(req, res, next) {
    const author = req.body.author;
    const date = req.body.date;
    const text = req.body.text;
    const model = new PostModel({author, date, text});
    console.log(model);

    model.save(function (err, post) {
      res.redirect('/posts');
    });
  },

  update: function (req, res) {
    var id = req.params.id;
    PostModel.findOne({_id: id}, function (err, post) {
      post.text = req.body.text;

      post.save(function (err, post) {
        return res.json(post);
      });
    });
  },

  remove: function(req, res, next) {
    const id = req.params.id;
    PostModel.FindByIdAndRemove(id, function(err, post) {
      return res.json(post);
    })
  }
};

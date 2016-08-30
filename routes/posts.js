const express = require('express');
const router = express.Router();
const PostModel = require('../models/PostModel.js');
const PostsController = require('../controllers/PostsController.js');

// const posts = { }

// TODO: Add your routes to the route here.
// Hint: Don't for get to export it!

router.get('/', PostsController.list);

router.get('/new', PostsController.new);
router.post('/', PostsController.create);

router.put('/:id', PostsController.update);

router.delete('/:id', PostsController.remove);

module.exports = router;

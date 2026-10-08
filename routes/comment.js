const express = require('express')
const Router = express.Router()
const { addComment,getAllComment,like,unlike,deleteComment } = require('../controller/commentController')

Router.post('/addcomment/:videoId',addComment)
Router.get('/getallcomment/:videoId',getAllComment)
Router.put('/like/:commentId',like)
Router.put('/dislike/:commentId',unlike)
Router.delete('/:commentId',deleteComment)

module.exports = Router;
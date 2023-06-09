const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
// const Blog = require('./models/blog')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')



mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)


module.exports = app
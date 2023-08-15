const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)
const port = process.env.PORT || 5000

const app = express()

require('./routes/authRoutes')(app)

app.listen(port, () => console.log(`Mailerapp server listening on port ${port}!`))

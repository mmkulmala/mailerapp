const express = require('express')
require('./services/passport')

const port = process.env.PORT || 5000

const app = express()

require('./routes/authRoutes')(app)

app.listen(port, () => console.log(`Mailerapp server listening on port ${port}!`))

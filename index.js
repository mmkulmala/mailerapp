const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

app.listen(port, () => console.log(`Mailerapp server listening on port ${port}!`))

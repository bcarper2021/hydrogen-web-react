const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const path = require('path')

const app = express()
app.use(express.static(`${__dirname}/../dist`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
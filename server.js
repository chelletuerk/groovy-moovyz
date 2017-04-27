const path = require('path')
const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3001)

app.use(express.static('public'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use('/assets', express.static(path.join(__dirname, '../app/')));


app.listen(app.get('port'), () => {
  console.log(`Running on ${app.get('port')}`)
})

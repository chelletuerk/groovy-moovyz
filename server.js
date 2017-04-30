const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3001)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/api/users', function (req, res) {
   database('users').select()
          .then(function(users) {
            res.status(200).json(users);
          })
          .catch(function(error) {
            console.log(error)
          });
})

app.post('/api/users', function (req, res) {
  const { email, password } = req.body
  const user = { email, password, created_at: new Date };
    database('users').insert(user)
      .then(function() {
        database('users').select()
                .then(function(users) {
                  res.status(200).json(users);
                })
                .catch(function(error) {
                  console.log(error)
                });
      })
})

app.post('/api/users/new', function (req, res) {
  const { name, email, password } = req.body
  const user = { name, email, password, created_at: new Date };
    database('users').insert(user)
    .then(function() {
      database('users').select()
              .then(function(users) {
                res.status(200).json(users);
              })
              .catch(function(error) {
                console.log(error)
              });
    })
})

app.post('/api/users/favorites/new', function (req, res) {
  const { movie_id, user_id, title, poster_path, release_date, vote_average, overview } = req.body
  const favorite = { movie_id, user_id, title, poster_path, release_date, vote_average, overview, created_at: new Date };
    database('favorites').insert(favorite)
      .then(function() {
        database('favorites').select()
                .then(function(favorites) {
                  res.status(200).json(favorites);
                })
                .catch(function(error) {
                  console.log(error)
                });
      })
})

app.get('/api/users/:id/favorites', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.delete('/api/users/:id/favorites/:movie_id', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`Running on ${app.get('port')}`)
})



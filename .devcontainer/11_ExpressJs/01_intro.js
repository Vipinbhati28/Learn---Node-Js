// For sarting local host we have to run "npm i nodemon -g" commnad in terminal for downloading nodemon package
// After that coomand "npm i express@4" for downloading 4th version of express Js
// After that we have to run command "nodemon filename" for running in local host in real time
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About us!')
})

app.get('/blog', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog/intro-to-js', (req, res) => {
  res.send('Hello Js!')
})

// we also can make diff - diff variables can get access
// as below
app.get('/blog/:slug', (req, res) => {
  // logic to fetch intro to js from the db
  console.log(req)
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
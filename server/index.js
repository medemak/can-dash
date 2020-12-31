const express = require('express')
const app = express()
const port = 3001
const dash_model = require('./dash_model')
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  dash_model.getStudents()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/scores', (req,res) => {
  dash_model.getScores()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error)
  })
})

app.post('/students', (req, res) => {
  dash_model.createStudent(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/students/:id', (req, res) => {
  dash_model.deleteStudent(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}) 
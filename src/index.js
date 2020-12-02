import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Most of this code comes from 
// https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
const express = require('express')
const app = express()
const port = 3001

const dash_model = require('./dash_model').default

app.use(express.json)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Control-Allow-Headers');
  next();
});

// Get students
app.get('/', (req, res) => {
  dash_model.getStudents()
  .then(response => {
    res.status(200).send(response);
  })
})
.catch(error => {
  res.status(500).send(error);
})

apps.post('/students',(req, res) => {
  dash_model.createStudent(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/students/:id',(req,res) => {
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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

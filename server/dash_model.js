const Pool = require('pg').Pool

const pool = new Pool({
    user:'can-dash',
    host:`localhost`,
    database:'can-dash',
    password:'root',
    port:5432,
});

const getStudents = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM Student ORDER BY last_name DESC', (error, results) => {
        if (error) {
          reject(error) 
        }
        resolve(results.rows); 
      })
    }) 
  }
  const createStudent = (body) => {
    return new Promise(function (resolve, reject) {
      const { firstName,lastName } = body;
      pool.query('INSERT INTO Student (first_name,last_name) VALUES ($1, $2) RETURNING *', [firstName,lastName], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new Student has been added added: ${JSON.stringify(results.rows[0])}`);
      });
    });
  }
  const deleteStudent = (studentId) => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(studentId)
      pool.query('DELETE FROM Student WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error) 
        } 
        resolve(`Student deleted with ID: ${id}`)
      })
    }) 
  }
  
  module.exports = {
    getStudents,
    createStudent,
    deleteStudent,
  }
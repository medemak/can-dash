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
    pool.query('SELECT * FROM student ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getScores = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM score ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const createStudent = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body

    pool.query('INSERT INTO student (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new Student has been added added: ${JSON.stringify(results.rows[0])}`)
    })
  })
}

const deleteStudent = (StudentId) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(StudentId)

    pool.query('DELETE FROM student WHERE id = $1', [id], (error, results) => {
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
  getScores
}
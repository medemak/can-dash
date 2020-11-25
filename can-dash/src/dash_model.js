import { Pool } from 'pg';
const pool = new Pool({
  user: 'can-dash',
  host: 'localhost',
  database: 'can-dash',
  password: 'root',
  port: 5432,
});

const getStudents = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM Student ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createStudent= (body) => {
    return new Promise(function(resolve, reject) {
      const { name, email } = body
      pool.query('INSERT INTO Student (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new student has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteStudent = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM Student WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Student deleted with ID: ${id}`)
      })
    })
  }
  
  export default {
    getStudents,
    createStudent,
    deleteStudent,
  }
import React, {useState, useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';

function StudentGet() {
  const [students, setStudents] = useState(false);

  useEffect(() => {
    getStudent();
  }, []);

  const columns = [
    {field:'studentid', headerName:'Student ID'},
    {field:'firstname', headerName:'First Name'},
    {field:'lastname', headerName:'Last Name'},
    {field:'score1', headerName:'Score 1'},
    {field:'score2', headerName:'Score 2'},
    {field:'score3', headerName:'Score 3'},
    {field:'score4', headerName:'Score 4'},
    {field:'score5', headerName:'Score 5'}
  ]

  function getStudent() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setStudents(data);
      });
  }

  function createStudent() {
    let name = prompt('Enter student name');
    let email = prompt('Enter student email');

    fetch('http://localhost:3001/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getStudent();
      });
  }

  function deleteStudent(id) {
    // eslint-disable-next-line no-restricted-globals
    let del = confirm("Are you sure you want to delete?")
    if (del) {
      fetch(`http://localhost:3001/students/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getStudent();
        });
    }
    
  }

  let studentsNice = JSON.parse(students)
  return ( 
         <div style={{height:600, width:'100%'}}>
           {students ? <DataGrid rows={studentsNice} columns={columns} /> : <p>No data found</p>}
         </div>
  ); 
}

export default StudentGet;

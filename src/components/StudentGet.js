import React, {useState, useEffect} from 'react';

function StudentGet() {
  const [students, setStudents] = useState(false);

  useEffect(() => {
    getStudent();
  }, []);

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

  function deleteStudent() {
    let id = prompt('Enter student id');

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

  function showStudents() {
    return JSON.parse(students)
  }

  let studentsNice = showStudents()

    
  function makeTable() {
    let JSX = studentsNice.map(function(f) { 
      return (
        <tr>
          <td>{f["studentid"]}</td>
          <td>{f["firstname"]}</td>
          <td>{f["lastname"]}</td>
          <td>{f["score1"]}</td>
          <td>{f["score2"]}</td>
          <td>{f["score3"]}</td>
          <td>{f["score4"]}</td>
          <td>{f["score5"]}</td>
        </tr>   
      )
    });
    return (
      <tbody>
        {JSX}
      </tbody>
    )
    }





  console.log(studentsNice)
  return ( 
         <table>
           <thead>
             <tr>
               <th>Student ID</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Score 1</th>
               <th>Score 2</th>
               <th>Score 3</th>
               <th>Score 4</th>
               <th>Score 5</th>
             </tr>
           </thead>
            {students ? makeTable() : <tbody><tr><td>Nothing to display</td></tr></tbody>}
         </table>
   
  
    /*
    <div>
      {
      students ? students : 'There is no student data available'
      }
      <br />
      <button onClick={createStudent}>Add</button>
      <br />
      <button onClick={deleteStudent}>Delete</button>
    </div>*/
  ); 
}

export default StudentGet;

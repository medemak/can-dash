import React, {useState, useEffect} from 'react';
function Test() {
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
        setMerchants(data);
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
        getMerchant();
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
  return (
    <div>
      {students ? students : 'There is no student data available'}
      <br />
      <button onClick={createStudent}>Add merchant</button>
      <br />
      <button onClick={deleteStudent}>Delete merchant</button>
    </div>
  );
}
export default Test;
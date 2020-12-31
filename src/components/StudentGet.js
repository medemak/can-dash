import React from 'react';
import { DataGrid} from '@material-ui/data-grid';

class StudentGet extends React.Component {
  constructor(props) {
    super(props) 
    this._isMounted = false;   
    this.state = {
      students:[],
      handleCellClick:this.props.clickstudent
    }
    this.parentCallback = this.props.parentCallback.bind(this)
    this.handleCellClick = this.props.clickstudent.bind(this)
  }

  componentDidMount() {
    this.getStudent()
    this._isMounted = true;  
  }

columns = [
    {field:'studentid', headerName:'Student ID', width:120},
    {field:'firstname', headerName:'First Name', width:200},
    {field:'lastname', headerName:'Last Name', width:200},
    {field:'score1', headerName:this.props.scores[0]["name"], width:100},
    {field:'score2', headerName:this.props.scores[1]["name"], width:100},
    {field:'score3', headerName:this.props.scores[2]["name"], width:100},
    {field:'score4', headerName:this.props.scores[3]["name"], width:100},
    {field:'score5', hide:true, headerName:this.props.scores[4]["name"], width:100},
    {field:'candash', headerName:'CanDash',width:100}
  ]

studentsNice = []

getStudent() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        if (this._isMounted) {this.setState({students:data})}
        this.studentsNice = this.state.students.length !== 0 ? JSON.parse(this.state.students) : [] 
        this.canDash(this.studentsNice)
        this.props.parentCallback(this.studentsNice);
      }); 
  }

 createStudent() {
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
        this.getStudent();
      });
  }

  deleteStudent(id) {
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
          this.getStudent();
        });
    }
    
  }

  canDash(studentsNice) {
    for(var i=0; i<studentsNice.length; i++) {
      let student = studentsNice[i]
      let averages = [
        student["score1"] / this.props.scores[0]["max"],
        student["score2"] / this.props.scores[1]["max"],
        student["score3"] / this.props.scores[2]["max"],
        student["score4"] / this.props.scores[3]["max"],
        student["score5"] / this.props.scores[4]["max"]
      ]    
      student.candash = (Math.max(...averages) * 10).toFixed(1)
    }
  }
  
  render() {
        return ( 
         <div style={{ height:'1000px', width:'100%'}}>
           <button onClick={this.deleteStudent}>Delete</button>
           <button onClick={this.createStudent}>Add</button>
           {this.studentsNice.length > 0 ? 
           <DataGrid 
           rows={this.studentsNice} 
           columns={this.columns} 
           autoHeight={true}
           checkboxSelection={true}
           onRowClick={(event) => this.handleCellClick(event)}
           disableSelectionOnClick= {true}
           />
            : <p>No data found</p>}
         </div>
  ); 
}

componentWillUnmount() {
  this._isMounted = false;  
}
  
}
export default StudentGet;
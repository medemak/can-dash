import React from 'react';
import Student from './components/Student';
import StudentGet from './components/StudentGet'
import Score from './components/Score'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentid:0,
      viewShow: 'db',
      students:[],
      scores:[]
    }
    this.handleClick = this.handleClick.bind(this)
    this.getStudents = this.getStudents.bind(this)
    this.getScores = this.getScores.bind(this);
  }

  handleClick(e, i) {
    let view = this.state.viewShow === 'db' ? 'student' : 'db'
    this.setState(() => {
      return {
        viewShow:view,
        studentid:i
      };
    });
  }
  getStudents(childData) {
    this.setState({students:childData})
  }
  getScores(childData) {
    this.setState({scores:childData})
  }
  componentDidMount() {
    this.getStudents()
  }
  render() {
    let toShow;
    <Score parentCallback={this.getScores} />
    switch(this.state.viewShow) {
      case 'db':
        toShow = <StudentGet scores={this.scores} clickstudent={this.handleClick} parentCallback={this.getStudents}/>
        break
      default:
        toShow = <Student scores={this.scores} students={this.state.students} studentid={this.state.studentid} clicklist={this.handleClick}/>
        break
    }
    return (
      <div className="App">
      <header>
        <h1>CanDash</h1>
        <p>A dashboard that focuses on what students can do.</p>
      </header>
      <main>
        <h1>{this.state.scores}</h1>
        {toShow}
      </main>
      <footer>
        Copyright &copy; {new Date().getFullYear()} Kara Medema 
      </footer>
    </div>
    )
    
  };
}

export default App;

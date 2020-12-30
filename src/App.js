import React from 'react';
import Student from './components/Student';
import StudentGet from './components/StudentGet'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'db',
      studentid:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e, studentid) {
    this.setState((view=e.target.name) => {
      return {
        view:view,
        studentid:studentid
      };
    });
  }
  render() {
    let toShow;
    switch(this.state.view) {
      case 'db':
        toShow = <StudentGet clickstudent={this.handleClick}/>
        break
      default:
        toShow = <Student studentid={this.props.studentid } clicklist={this.handleClick}/>
        break
    }
    return (
      <div className="App">
      <header>
        <h1>CanDash</h1>
        <p>A dashboard that focuses on what students can do.</p>
      </header>
      <main>
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

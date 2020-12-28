import React from 'react';
import Student from './components/Student';
import StudentGet from './components/StudentGet'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'db'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.setState((state, props) => {
      return {view:e.target.name};
    });
  }
  render() {
    let toShow;
    switch(this.state.view) {
      case 'db':
        toShow = <StudentGet />
        break
      default:
        toShow = <Student />
        break
    }
    return (
      <div className="App">
      <header>
        <h1>CanDash</h1>
        <p>A dashboard that focuses on what students can do.</p>
        <nav>
          <button name="db" onClick={this.handleClick}>Database</button>
          <button name="student" onClick={this.handleClick}>Student</button>
        </nav>
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

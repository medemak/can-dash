import './App.css';
import Student from './components/Student'

function App() {
  return (
    <div className="App">
      <header>
        <h1>CanDash</h1>
        <p>A dashboard that focuses on what students can do.</p>
      </header>
      <main>
        <Student />
      </main>
      <footer>
        Copyright &copy; {new Date().getFullYear()} Kara Medema 
      </footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import ProjectComponent from './components/ProjectComponent';

function App() {
  return (
    <div className="App container">
      <ProjectComponent></ProjectComponent>
      <EmployeeComponent></EmployeeComponent>
    </div>
  );
}

export default App;

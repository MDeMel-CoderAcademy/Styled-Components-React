import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Let's learn Styled Components
        </h1>
        <img src={logo} className="App-logo" alt="logo" />

        <a style = {{color :'white'}} href="https://reactjs.org" target="_blank" >Learn React</a>
        <a href="https://styled-components.com/docs/basics" target="_blank" >Go to Styled Component Documentation</a>
        
      </header>
    </div>
  );
}

export default App;
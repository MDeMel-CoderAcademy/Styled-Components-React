import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const Heading = styled.h1`
font-size: $extra-large * 1.2;
      font-weight: 600;
      font-family: sans-serif;
      background: -webkit-linear-gradient(#f54242, #f5e642);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
`;

const Button = styled.a`
  margin : 20px ;
  color: white ;
  box-shadow: 0px 10px 14px -7px #276873;
	background-color:${props => props.primary ? "#599bb3" : "grey"};
	border-radius:8px;
	display:inline-block;
	color:#ffffff;
  text-decoration:none;
	padding:13px 32px;
	text-shadow:0px 1px 0px #3d768a;
`

 const Icon = styled.img`

 `;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading>
          Let's learn Styled Components
        </Heading>
        <Icon src={logo} className="App-logo" alt="logo" />

        <Button href="https://reactjs.org" target="_blank" primary = {false}>Learn React</Button>
        <Button href="https://styled-components.com/docs/basics" target="_blank" primary = {true}>Go to Styled Component Documentation</Button>
        
      </header>
    </div>
  );
}

export default App;
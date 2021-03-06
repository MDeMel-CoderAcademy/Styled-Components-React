import React from 'react';
import ReactDOM from 'react-dom';
import './intro/index.css';
import App from './intro/App';
import reportWebVitals from './reportWebVitals';
import TodoContainer from "./todos/TodoContainer";
import Counter from "./counter/Counter";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

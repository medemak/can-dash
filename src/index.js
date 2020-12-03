import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Most of this code comes from 
// https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
/*

Check out this github for the completed project: 
https://github.com/nsebhastian/react-node-postgres


*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

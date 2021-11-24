import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
function Pic(prop) {
  return <img src={prop.src} />

}

ReactDOM.render(
  <React.StrictMode>
    <Pic src="https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877__480.jpg" />
    <App logo = "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877__480.jpg"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

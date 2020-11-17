import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "Gio's Token";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.common['some-token'] = "gios-token";


axios.interceptors.request.use( requestConfig => {
  console.log(requestConfig);
  return requestConfig;

}, requestError => {
  console.error(requestError.response);
  return Promise.reject(requestError);
});


axios.interceptors.response.use( responseConfig => {
  console.log(responseConfig);
  return responseConfig;
}, responseError => {
  console.error(responseError.response);
  return Promise.reject(responseError);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

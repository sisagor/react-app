import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//theme
import Layout from "./theme/Layout";
import Login from "./theme/auth/Login";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<Layout />}></Route>
              <Route path="/dashboard" element={<Layout />}></Route>
            </Routes>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

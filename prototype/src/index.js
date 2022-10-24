import React from 'react';
// Importerar "React" från "react".

import ReactDOM from 'react-dom/client';
<<<<<<< Updated upstream
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
=======
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
// Importerar "ReactDOM" från "react-dom/client".

import { BrowserRouter } from 'react-router-dom';
// Importerar "BrowserRouter" från "react-router-dom".

import App from "./App";
// Importerar komponenten "App".

>>>>>>> Stashed changes
>>>>>>> Stashed changes
import './App.css';
// Importerar "App.css".

import './index.css';
<<<<<<< Updated upstream
import reportWebVitals from './reportWebVitals';

=======
<<<<<<< Updated upstream
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
=======
// Importerar "index.css".

import reportWebVitals from './reportWebVitals';
// Importerar "reportWebVitals".
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
// Skapar root-elementet.

root.render(
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);
// Renderar App-komponenten i root-elementet. <BrowserRouter> används för att möjliggöra användning av React Router.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

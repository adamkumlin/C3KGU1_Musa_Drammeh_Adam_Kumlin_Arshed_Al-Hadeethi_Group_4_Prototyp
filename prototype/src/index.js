// Musa Drammeh, Adam Kumlin och Arshed-Al Hadeethi

import React from 'react';
// Importerar "React" från "react".

import ReactDOM from 'react-dom/client';
// Importerar "ReactDOM" från "react-dom/client".

import { BrowserRouter } from 'react-router-dom';
// Importerar "BrowserRouter" från "react-router-dom".

import App from "./App";
// Importerar komponenten "App".

import './App.css';
// Importerar "App.css".

import './index.css';
// Importerar "index.css".

import reportWebVitals from './reportWebVitals';
// Importerar "reportWebVitals".

const root = ReactDOM.createRoot(document.getElementById('root'));
// Skapar root-elementet.

root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);
// Renderar App-komponenten i root-elementet. <BrowserRouter> används för att möjliggöra användning av React Router.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

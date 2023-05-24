import React from 'react';
import ReactDOM from 'react-dom/client';
// ReactDOM => HTML nesneleri ile iletişimi sağlar
import './index.css';
import App from './App';

//React ile Javascript arasındaki köprüyü yapar
//render aracı createRoot içinden gelir ve içine yazılan kodun
//HTML,CSS dönüşmesini sağlar
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

//React => Javascrip içerisinde HTML yazmamızı sağlar.
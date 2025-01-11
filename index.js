import React from 'react'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals()

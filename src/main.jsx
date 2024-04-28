import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //strict mode is a wrapper that checks for deprecated and othe issues with app.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

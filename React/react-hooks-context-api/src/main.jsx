import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CounterApp from './CounterApp.jsx'
import CounterAppReducer from './CounterAppReducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterApp /> */}
    <CounterAppReducer />
  </React.StrictMode>,
)

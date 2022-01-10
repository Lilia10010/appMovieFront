import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter, Link} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Link to="/login" style={{color: 'pink'}}>Login</Link> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

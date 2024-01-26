import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainProvider from './context/MainProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'
import { SiteContextProvider } from './Context/SiteContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteContextProvider>
    <App />
    </SiteContextProvider>
  </React.StrictMode>,
)

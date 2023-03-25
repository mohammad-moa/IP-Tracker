import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomeContextProvider from './context/HomeContextProvider';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </React.StrictMode>,
)

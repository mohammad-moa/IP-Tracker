import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomeContextProvider from './context/HomeContextProvider';
import ToggleSidePanelProvider from './context/ToggleSidePanelProvider';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HomeContextProvider>
      <ToggleSidePanelProvider>
        <App />
      </ToggleSidePanelProvider>
    </HomeContextProvider>
  </React.StrictMode>,
)

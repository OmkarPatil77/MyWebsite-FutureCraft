import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppWrapper from './Appwrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppWrapper>
        <App />
      </AppWrapper>
  </StrictMode>,
)

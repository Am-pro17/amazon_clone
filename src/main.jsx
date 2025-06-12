import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider';

createRoot(document.getElementById('root')).render(
  <DataProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </DataProvider>

)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BackgroundCont from './comps/BackgroundCont'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundCont />
  </StrictMode>,
)

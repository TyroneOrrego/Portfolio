import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Use createRoot with performance optimizations
const root = ReactDOM.createRoot(document.getElementById('root')!)

// Defer rendering slightly to improve initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  })
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


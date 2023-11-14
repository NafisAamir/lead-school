import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Input } from './Components/Input'
import './App.css'

function App() {

  const imageUrl = 'https://img.freepik.com/free-vector/documents-letters-express-courier-delivering-postal-services-post-office-services-post-delivery-agent-post-office-card-accounts-concept-pinkish-coral-bluevector-isolated-illustration_335657-1783.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais';
  const backroundstyle={
    backgroundImage:`url(${imageUrl})`
  }

  return (
    
    <div style={backroundstyle} >
    <Input/>
    </div>
    
 
  )
}

export default App

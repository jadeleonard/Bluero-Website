import React from 'react'
import Hero from './_pages/Hero'
import Navbar from './_pages/Navbar'
const App =  async () => {

  
await new Promise(resolve => setTimeout(resolve,3000))
  return (
    <div>
      
     <Navbar />
      <Hero />
        
    </div>
  )
}

export default App

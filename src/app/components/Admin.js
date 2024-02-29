import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";

export default function Admin({ children }) {
  return (
    <div className='admin'>
        <Navbar/>
        <div> { children }</div>
      <Footer />

    </div>
    
  )
}

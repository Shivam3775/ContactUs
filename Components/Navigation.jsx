import React from 'react'

function Navigation() {
  return (
    <>
      <nav className='container'>
        <div className='logo'>
            <img src='illustration-logo.png' height={50} width={75 } alt='logo'/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
 
    </nav>
    
    </>
  )
}

export default Navigation
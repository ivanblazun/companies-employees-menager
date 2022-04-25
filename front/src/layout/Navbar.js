import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-1 p-1 h1">System</span>
        <div className='d-flex flex-row justify-content-around'>
          <Link to='/'>
            <span className='link p-2'>Home</span>
          </Link>
          <Link to='/login'>
            <span className='link p-2'>Login</span>
          </Link>
          <Link to='/register'>
            <span className='link p-2'>Register</span>
          </Link>
          <span className='link p-2'>Logout</span>
          <Link to='/about'>
            <span className='link p-2'>About</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
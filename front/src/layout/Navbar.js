import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const token = localStorage.getItem('token')
  const [isLoged, setIsLoged] = useState(null)


  useEffect(() => {
    setIsLoged(token)
  }, [])

  const logedLinks =
    <Fragment>
      <Link to='/workpage'>
        <span className='link p-2'>WorkPage</span>
      </Link>
      <Link to='/logout'>
        <span className='link p-2'>Logout</span>
      </Link>
    </Fragment>

  const notLogedLinks =
    <Fragment>
      <Link to='/login'>
        <span className='link p-2'>Login</span>
      </Link>
      <Link to='/register'>
        <span className='link p-2'>Register</span>
      </Link>
    </Fragment>

  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-1 p-1 h1">System</span>
        <div className='d-flex flex-row justify-content-around'>
          <Link to='/'>
            <span className='link p-2'>Home</span>
          </Link>
          {isLoged === null ? notLogedLinks : logedLinks}
          <Link to='/about'>
            <span className='link p-2'>About</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Logout = () => {

  const [logouted, setLogouted] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')


    navToHome()
    window.location.reload(true)
  }

  let navigate = useNavigate();
  const navToHome = () => {
    let home = '/'
    navigate(home)
  }
  return (
    <div className='all-center'>
      <h1>Logout ?</h1>
      <button onClick={logout} className='btn btn-info'>Logout</button>
    </div>
  )
}

export default Logout
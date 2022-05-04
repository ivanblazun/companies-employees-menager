import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: null,
    password: null
  })

  // Login user call
  const loginUser = async () => {
    const res = await axios.post('http://localhost:5000/api/login', user)
    const token = await res.data

    localStorage.setItem('token', token)

    navToHome()
  }

  const onChange = async (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  // nav to home after token recived
  let navigate = useNavigate();
  const navToHome = () => {
    let home = '/'
    navigate(home)
    window.location.reload()
  }

  return (
    <div>
      <form className='container' style={{ width: '60%' }}
        onSubmit={onSubmit}
      >
        <h1>Login </h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name='email'
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name='password'
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import axios from 'axios'


const Register = () => {

  const [user, setUser] = useState({
    name: null,
    email: null,
    password: null
  })

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    registerUser()
  }

  const registerUser = async () => {
    const res = await axios.post('http://localhost:5000/api/register',
      user, {
      headers: {
        "Content-type": "application/json",
      }
    })
    console.log(res)
  }

  return (
    <div>
      <form className='container' style={{ width: '60%' }}
        onSubmit={onSubmit}
      >
        <h1 >Register user</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
            className="form-control" id="name"
            placeholder="Enter name"
            name='name'
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email"
            className="form-control" id="email"
            placeholder="Enter email"
            name='email'
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password"
            className="form-control" id="password"
            placeholder="Password"
            name='password'
            onChange={onChange} />
        </div>
        <button type="submit"
          className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {

  const [isLoged, setIsLoged] = useState(null)

  const token = localStorage.getItem('token')
  JSON.stringify(token)

  const logedCheck = async () => {
    const res = await axios.get('http://localhost:5000/api/isloged',
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        }
      })
    console.log(res)
  }

  useEffect(() => {
    setIsLoged(token)
    logedCheck()
  }, [])
  return (
    <div>
      {!isLoged ?
        <h1>Not Loged</h1> :
        <h1>Is Loged</h1>}
    </div>
  )
}

export default Home
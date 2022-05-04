import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Comps
import CompaniItem from './CompaniItem'


const CompaniesList = () => {
  const [companies, setCompanies] = useState(null)

  const [searchtext, setSearchText] = useState('')

  useEffect(() => { callAllCompanies() }, [])


  const callAllCompanies = async () => {
    let token = localStorage.getItem('token')
    let config = {
      headers: {
        'auth-token': token
      }
    }
    const res = await axios.get('http://localhost:5000/api/company', config)
    const data = await res.data

    console.log(data)
    setCompanies(data)
  }


  return (
    <div className='company-card'>
      <Link to='/createcompany'>
        <button className='btn btn-success company-card-item'>+ Import New Company</button>
      </Link><Link to='/createcompany'>
        <button className='btn btn-danger company-card-item'>- Delete  Company</button>
      </Link>
      <div>
        <input type="text"
          placeholder='Search for company..'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {!searchtext ? '' :
        companies
          .filter((company) => company.companyName.includes(searchtext))
          .map((company, index) =>
            <CompaniItem key={index} company={company} />)}

      <h1>CompaniesList</h1>
      {!companies ? <h3>List empty</h3> :
        companies.sort().map((company, index) =>
          <CompaniItem key={index} company={company} />)}
    </div>
  )
}

export default CompaniesList
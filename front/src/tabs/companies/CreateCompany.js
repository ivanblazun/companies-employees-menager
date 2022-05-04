import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CreateCompany = () => {

  const [company, setCompany] = useState(
    {
      companyName: null,
      owner: null,
      pin: null,
      headquarter: null,
    })

  const onChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createCompany()
    window.alert(`Company ${company.companyName} added to list`)
    navToCompanies()
  }

  const createCompany = async () => {
    let token = localStorage.getItem('token')
    let config = {
      headers: {
        'auth-token': token
      }
    }
    const res = await axios.post('http://localhost:5000/api/company',
      company,
      config)
    const data = await res.data
    console.log(data)
  }

  // useNavigate to companies after company created
  let navigate = useNavigate();
  const navToCompanies = () => {
    let companiesList = '/companieslist'
    navigate(companiesList)
    window.location.reload()
  }

  console.log(company)
  return (
    <div>
      <form className='container' style={{ width: '60%' }}
        onSubmit={onSubmit}
      >
        <h1 >Create Company</h1>
        <div className="form-group">
          <label htmlFor="companyname">Company Name</label>
          <input type="text"
            className="form-control" id="companyname"
            placeholder="Enter name"
            name='companyName'
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="headquarter">Headquarter of company</label>
          <input type="text"
            className="form-control" id="headquarter"
            placeholder="Enter Headquarter"
            name='headquarter'
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input type="text"
            className="form-control" id="owner"
            placeholder="owner"
            name='owner'
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pin">PIN</label>
          <input type="number"
            className="form-control" id="pin"
            placeholder="pin"
            name='pin'
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

export default CreateCompany
import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const UpdateCompany = () => {

  // props of company 
  const location = useLocation()
  let company = location.state.company
  const { companyName, date, employees, headquarter, owner, pin, _id } = company

  // setting old state to new state 
  const [updatedData, setUpdatedData] = useState(
    {
      companyName: companyName,
      owner: owner,
      pin: pin,
      headquarter: headquarter,
    })

  // on change hendler
  const onChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value
    })
  }

  // call to update company
  const updateCompany = async () => {
    let token = localStorage.getItem('token')
    let config = {
      headers: {
        'auth-token': token
      }
    }
    const res = await axios.put(`http://localhost:5000/api/company/${_id}`,
      updatedData,
      config)
    const data = await res.data
    console.log(data)
  }

  // useNavigate to companies after company updated
  let navigate = useNavigate();
  const navToCompanies = () => {
    let companiesList = '/companieslist'
    navigate(companiesList)
    window.location.reload()
  }


  // submitting form
  const onSubmit = (e) => {
    e.preventDefault()
    updateCompany()

    window.alert(`company updated`)

    navToCompanies()

  }



  return (
    <div>

      <form className='container' style={{ width: '60%' }}
        onSubmit={onSubmit}
      >
        <h1 >Update Company</h1>
        <div className="form-group">
          <label htmlFor="companyname">Company Name</label>
          <input type="text"
            className="form-control" id="companyname"
            placeholder="Enter name"
            name='companyName'
            value={updatedData.companyName}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="headquarter">Headquarter of company</label>
          <input type="text"
            className="form-control" id="headquarter"
            placeholder="Enter Headquarter"
            name='headquarter'
            value={updatedData.headquarter}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input type="text"
            className="form-control" id="owner"
            placeholder="owner"
            name='owner'
            value={updatedData.owner}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pin">PIN</label>
          <input type="number"
            className="form-control" id="pin"
            placeholder="pin"
            name='pin'
            value={updatedData.pin}
            onChange={onChange} />
        </div>
        <button type="submit"
          className="btn btn-primary">
          Submit
        </button>
        <Link to={`/companyItemDetail/${_id}`} state={{ company }}>
          <button className='btn btn-info'>Discard changes</button>
        </Link>
      </form>
    </div>
  )
}

export default UpdateCompany
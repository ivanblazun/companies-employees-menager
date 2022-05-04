import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const CompanyItemDetails = () => {


  const location = useLocation()
  let company = location.state.company

  const { companyName, date, employees, headquarter, owner, pin, _id } = company

  return (
    <div className='company-card'>
      <Link to='/companieslist'>
        <button className='btn btn-dark'>
          Back to CompanyLists
        </button>
      </Link>
      <div className="list-group">
        <li className="list-group-item list-group-item-action company-card-item ">
          <h5>Company Name:</h5>
          <span>{companyName}</span>
        </li>
        <li className="list-group-item list-group-item-action company-card-item">
          <h5>Headquarter:</h5>
          <span>{headquarter}</span>
        </li>
        <li className="list-group-item list-group-item-action company-card-item">
          <h5>Owner/s :</h5>
          <span>{owner}</span>
        </li>
        <li className="list-group-item list-group-item-action company-card-item">
          <h5>PIN :</h5>
          <span>{pin}</span>
        </li>
      </div>
      <Link to={`/updatecompany/${_id}`} state={{ company }}>
        <button className='btn btn-info company-card-item'>
          Update company data
        </button>

      </Link>
    </div>
  )
}

export default CompanyItemDetails
import React from 'react'
import { Link } from 'react-router-dom'

// Comps
import CompanyItemDetails from './CompanyItemDetails'

const CompaniItem = ({ company }) => {

  const { companyName, date, employees, headquarter, owner, pin, _id } = company



  return (
    <div>
      <Link to={`/companyItemDetail/${_id}`} state={{ company }}>
        {companyName}
      </Link>
    </div>
  )
}

export default CompaniItem
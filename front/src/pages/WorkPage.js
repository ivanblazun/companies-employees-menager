import React from 'react'
import { Link } from 'react-router-dom'

// Comps
import CompaniesList from '../tabs/companies/CompaniesList'

const WorkPage = () => {
  return (
    <div className='all-center'>
      <Link to='/companieslist'>
        <div>Companies</div>
      </Link>
      <Link to='/employeeslist'>
        <div>employees</div>
      </Link>

      <div>Statistics</div>

      <div>Info</div>

    </div>
  )
}

export default WorkPage
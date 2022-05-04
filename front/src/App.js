
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//comps
import Navbar from './layout/Navbar';
import Register from './forms/Register';
import Login from './forms/Login';
import Home from './pages/Home';
import About from './pages/About';

import WorkPage from './pages/WorkPage';
import EmployeesList from './tabs/employees/EmployeesList';
import CompaniesList from './tabs/companies/CompaniesList';
import CreateCompany from './tabs/companies/CreateCompany';
import Logout from './forms/Logout';
import CompaniItem from './tabs/companies/CompaniItem';
import CompanyItemDetails from './tabs/companies/CompanyItemDetails';
import UpdateCompany from './tabs/companies/UpdateCompany';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="logout" element={<Logout />} />

          <Route path="workpage" element={<WorkPage />} />

          <Route path="companieslist" element={<CompaniesList />} />
          <Route path="createcompany" element={<CreateCompany />} />
          <Route exact path="companyItemDetail/:id" element={<CompanyItemDetails />} />
          <Route exact path="updatecompany/:id" element={<UpdateCompany />} />
          <Route path="employeeslist" element={<EmployeesList />} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;

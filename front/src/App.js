
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

//comps
import Navbar from './layout/Navbar';
import Register from './forms/Register';
import Login from './forms/Login';
import Home from './pages/Home';
import About from './pages/About';


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
        </Routes>
      </div>

    </Router>
  );
}

export default App;

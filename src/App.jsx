import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Login from "./components/Connexion/Login";
//import Signup from "./components/Connexion/Signup";
import LandingPage from "./components/Connexion/LandingPage";
import Dashboard from "./components/DashBoard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />*/}
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
};

export default App

import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Profile from '../src/pages/profile/Profile';
import Login from '../src/pages/login/Login';
import Register from '../src/pages/register/Register';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Admin from "./pages/admin/Admin";
import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import User from "./pages/user/User";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;

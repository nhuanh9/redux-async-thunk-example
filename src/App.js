import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Admin from "./pages/admin/Admin";
import React, {useEffect} from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import User from "./pages/user/User";
import Container from "@mui/material/Container";
import Players from "./pages/user/players/Players";
import AddPlayer from "./pages/user/players/AddPlayer";

function App() {
    return (
        <div className="App">
            <div className="container-fluid">

                <Routes>
                    <Route path="" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="user" element={<User/>}>
                        <Route path="" element={<Players/>}/>
                        <Route path="add-player" element={<AddPlayer/>}/>
                    </Route>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

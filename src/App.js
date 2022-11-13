import logo from './logo.svg';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Admin from "./pages/admin/Admin";
import React, {useEffect} from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import User from "./pages/user/User";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers} from "./services/playerService";

function App() {
    const dispatch = useDispatch()
    const players = useSelector((state) => {
            console.log(state.players.players.data)
            return state.players.players.data
        }
    )
    useEffect(() => {
        dispatch(getPlayers())
    }, []);
    return (
        <div className="App">
            {players.length}
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

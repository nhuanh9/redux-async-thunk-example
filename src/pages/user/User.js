import React from "react";

import {Outlet} from "react-router-dom";
import './User.css';
import Navbar from "../../components/Navbar/Navbar";

function User() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}
export default User;

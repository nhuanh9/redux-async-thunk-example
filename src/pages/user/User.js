import React from "react";

import {Outlet} from "react-router-dom";
import './User.css';
import Navbar from "../../components/Navbar/Navbar";

function User() {
    return (
        <>
            <Navbar></Navbar>
            <div className={'row mt-2'}>
                <div className="col-2">Side Bar</div>
                <div className="col-10 ">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default User;

import React from 'react';
import './../_assets/_styles/navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => (
    <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
            <ul className="nav">
                <li className="item">
                    <Link to="/login" className="contact">Logout</Link>
                </li>
            </ul>

            <div className="logo">
                <img src="#" />
            </div>
        </div>
    </div>
)
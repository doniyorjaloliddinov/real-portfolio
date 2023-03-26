import React from 'react';
import { Link, useNavigate } from "react-router-dom"


function Navbar() {
    const navigate = useNavigate();


    return (
        <div class="main">
            <div className='main-inner container mt-4 d-flex justify-content-between align-items-center'>
                <div className='logo-wrapper'>
                    <img onClick={() => navigate('/')} className='site-logo rounded-circle' src='./img/my-logo.jpg' alt='site-logo' width={90} height={70} />
                </div>
                <nav className='site-navbar mb-5'>
                    <ul className='navbar-list list-unstyled d-flex justify-content-between align-items-center'>
                        <Link to={'/'} className='navbar-list-items'>
                            <p className='items-content'>About</p>
                        </Link>
                        <li onClick={() => navigate('/blog')} className='navbar-list-items'>
                            <p className='items-content'>Blog</p>
                        </li>
                        <li onClick={() => navigate('/study')} className='navbar-list-items'>
                            <p className='items-content'>Study</p>
                        </li>
                        <li onClick={() => navigate('/contact')} className='navbar-list-items'>
                            <p className='items-content'>Contact</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import Navbar from './navbar';
import { Link, useNavigate } from "react-router-dom"
// import { Routes, Route } from "react-router-dom";
// import Skills from './skills';

function Study() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar/>
            <div className='container'>
                    <div className='hero-wrapper-study'>
                            <ul className='study-list list-unstyled d-flex justify-content-between align-items-center'>
                                <li className=''>
                                    <img className='study-img' onClick={() => navigate('/skills')} src='./img/tatu.png' alt='university logo' width={220} height={150} />
                                </li>
                                <li className=''>
                                    <img className='study-img' onClick={() => navigate('/certs')} src='./img/certs.jpg' alt='' width={220} height={150} />
                                </li>
                                <li className=''>
                                    <img className='study-img' onClick={() => navigate('/plans')} src='./img/certs.jpg' src='./img/study-roadmap.jpg' alt='' width={220} height={150} />
                                </li>
                            </ul>                      
                    </div>
            </div>
        </div>
    );
}

export default Study;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Plans() {
    const navigate = useNavigate();

    return (

    <div class="container mt-5">
            <img onClick={() => navigate('/')} className='site-logo rounded-circle' src='./img/my-logo.jpg' alt='site-logo' width={90} height={70} />
        <div className='hero-wrapper-skills mt-5 d-flex justify-content-around align-items-center'>
                                    <div class="languages-current-wrapper">
                                        <h3 className='languages-heading'>Roadmap for Cyber Security</h3>
                                        <ul className='languages-list list-unstyled mt-3'>
                                        <li className='mb-3'>
                                            <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                                <span className='languages-text'>Comptia A+</span>
                                                <img src='./img/a+.jpg' className='language-flags' alt='england flag' width={170} height={85} />
                                            </div>
                                        </li>
                                        <li className='mb-3'>
                                        <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                                <span className='languages-text'>Security +</span>
                                                <img src='./img/security+.jpg' className='language-flags' alt='england flag' width={170} height={85} />
                                            </div>
                                        </li>
                                        <li className='mb-3'>
                                        <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                                <span className='languages-text'>Network +</span>
                                                <img src='./img/network+.jpg' className='language-flags' alt='england flag' width={170} height={85} />
                                            </div>
                                        </li>
                                        <li className='mb-3'>
                                        <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                                <span className='languages-text'>Linux +</span>
                                                <img src='./img/linux+.jpeg' className='language-flags' alt='england flag' width={170} height={85} />
                                            </div>
                                        </li>
                                        <li className='mb-3'>
                                        <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                                <span className='languages-text'>Pentest +</span>
                                                <img src='./img/pentest+.png' className='language-flags' alt='england flag' width={170} height={85} />
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                
                <div className=''>
                    <h3 className='languages-heading'>Current</h3>
                    <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                            <span className='languages-text'>Comptia A+</span>
                            <img src='./img/a+.jpg' className='language-flags' alt='england flag' width={170} height={85} />
                    </div>

                    <p className='h5 mt-5 text-light'>With my Teacher</p>
                    <div className='languages-content-wrapper mt-3 d-flex justify-content-between align-items-center'>
                            <img src='./img/mike.png' className='language-flags' alt='england flag' width={190} height={105} />
                            <a className='stationx-link' href='https://www.stationx.net/' target={'_blank'}>StationX</a>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Plans;

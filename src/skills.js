import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Skills() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='container mt-5'>
            <img onClick={() => navigate('/')} className='site-logo rounded-circle ' src='./img/my-logo.jpg' alt='site-logo' width={90} height={70} />

                    <div className='hero-wrapper-skills mt-5 d-flex justify-content-between align-items-center'>
                               <div class="languages-current-wrapper">
                                <h3 className='languages-heading'>Languages</h3>
                                   <ul className='languages-list list-unstyled mt-3'>
                                   <li className='mb-3'>
                                    <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                        <span className='languages-text'>Uzbek (Native)</span>
                                        <img src='./img/uzb.jpg' className='language-flags' alt='england flag' width={130} height={55} />
                                    </div>
                                   </li>
                                   <li className='mb-3'>
                                   <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                        <span className='languages-text'>English</span>
                                        <img src='./img/gb.webp' className='language-flags' alt='england flag' width={130} height={55} />
                                    </div>
                                   </li>
                                   <li className='mb-3'>
                                   <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                        <span className='languages-text'>Russian</span>
                                        <img src='./img/rus.jpeg' className='language-flags' alt='england flag' width={130} height={55} />
                                    </div>
                                   </li>
                                   </ul>
                               </div>  

                               <div class="languages-current">
                                <h3 className='languages-heading'>Aim to Learn</h3>
                                   <ul className='languages-list list-unstyled mt-3'>
                                   <li className='mb-3'>
                                   <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                        <span className='languages-text'>Arabic</span>
                                        <img src='./img/arabic.jpg' className='language-flags' alt='england flag' width={130} height={55} />
                                    </div>
                                   </li>
                                   <li className='mb-3'>
                                   <div className='languages-content-wrapper d-flex justify-content-between align-items-center'>
                                        <span className='languages-text'>German</span>
                                        <img src='./img/german.webp' className='language-flags' alt='england flag' width={130} height={55} />
                                    </div>
                                   </li>
                                   </ul>
                               </div>         
                    </div>

                    <div className='university-wrapper mt-5'>
                        <h2 className='university-heading text-center text-light'>Tashkent University of Information Technologies
                        <br/>(TUIT)</h2>

                        <div className='d-flex justify-content-around align-items-center'>
                            <img src='./img/tatu-building.jpg' className='university-img mt-5' width={450} height={350} alt={'University building'} />
                            <p className='university-info'>Entered in 2020.Faculty: E-commerce, 3-degree(2023)</p>
                        </div>
                    </div>

                    <div className='programm-wrapper mt-5'>
                            <h2 className='text-light text-center'>Programming</h2>
                            <h3 className='text-light'>Frontend:</h3>

                            <ul className='frontend-list mt-3 d-flex justify-content-between align-items-center list-unstyled '>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>HTML</p>
                                    <img className='' src='./img/html.svg' width={65} height={75}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>CSS</p>
                                    <img className='' src='./img/css.svg' width={85} height={75}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>JS</p>
                                    <img className='' src='./img/js.svg' width={75} height={65}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>Bootstrap</p>
                                    <img className='' src='./img/bootstrap.png' width={85} height={75}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>React JS</p>
                                    <img className='' src='./img/react.svg' width={75} height={75}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>SASS</p>
                                    <img className='' src='./img/sass.png' width={85} height={55}/>
                                </li>
                            </ul>

                            <h3 className='text-light mt-5'>Backend:</h3>
                            <ul className='frontend-list mt-3 mb-5 d-flex justify-content-around align-items-center flex-wrap list-unstyled'>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>Python</p>
                                    <img className='' src='./img/python.svg' width={85} height={55}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>GitHub</p>
                                    <img className='' src='./img/github.svg' width={85} height={55}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>API</p>
                                    <img className='' src='./img/api.svg' width={85} height={55}/>
                                </li>
                                <li className='frontend-items'>
                                    <p className='programming-text text-center'>Django</p>
                                    <img className='' src='./img/django.svg' width={85} height={55}/>
                                </li>
                            </ul>
                    </div>
            </div>
        </div>
    );
}

export default Skills;
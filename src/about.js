import React from 'react';
import Navbar from './navbar';


function About() {
    return (
        <div>
            <Navbar />
            <section className='hero'>
                <div className='container'>
                    <div className='hero-wrapper d-flex justify-content-between align-items-center'>
                        <div className='hero-content-wrapper '>
                            <p className='welcome'>Hi! I'm</p>
                            <h2 className='hero-heading'>DoniyorJhon Jaloliddinov</h2>
                            <p className='short-name'>Just Doni</p>
                            <p className='about-me'>Guy who interests in IT, love Advanture<br></br>Does Sport, Supports healthy lifestyle
                            </p>
                        </div>

                        <div className='hero-img-wrapper '>
                            <img src='./img/my-logo.jpg' className='' width={350} height={350} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
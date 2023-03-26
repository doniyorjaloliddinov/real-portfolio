import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Certs() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='container mt-5'>
            <img onClick={() => navigate('/')} className='site-logo rounded-circle' src='./img/my-logo.jpg' alt='site-logo' width={90} height={70} />
                    <div className='hero-wrapper-blog mt-5 mb-3 d-flex justify-content-around align-items-center'>
                        
                    <div className='blog-wrapper '>
                            <img src='./img/fundamentals+.jpg' className='' width={200} height={150} />
                    </div>
                            <div class="blog-content-wrapper">
                                <p className='blog-content'>I have successfully finished my <a className='red btn' href='https://www.comptia.org/'>'Comptia Fundamentals+'</a> course on <a  className='red btn' href='https://www.itpro.tv/'>itpro.tv</a> with my incredible teachers <a className='red btn' href='https://www.linkedin.com/in/theronniewong/'>Ronnie Wong</a> and 
                                <a className='red btn' href='https://www.linkedin.com/in/donpezet/'> Don Pezet</a>
                                </p>
                            </div>                              
                    </div>
            </div>
        </div>
    );
}

export default Certs;
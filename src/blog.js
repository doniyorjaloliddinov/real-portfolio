import React from 'react';
import Navbar from './navbar';

function Blog() {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                    <div className='hero-wrapper-blog mb-3 d-flex justify-content-around align-items-center'>
                        
                    <div className='blog-wrapper '>
                            <img src='./img/fundamentals+.jpg' className='' width={200} height={150} />
                    </div>
                            <div class="blog-content-wrapper">
                                <p className='blog-content'>I have successfully finished my <a className='red btn' href='https://www.comptia.org/'>'Comptia Fundamentals+'</a> course on <a  className='red btn' href='https://www.itpro.tv/'>itpro.tv</a> with my incredible teachers <a className='red btn' href='https://www.linkedin.com/in/theronniewong/'>Ronnie Wong</a> and 
                                <a className='red btn' href='https://www.linkedin.com/in/donpezet/'> Don Pezet</a>
                                </p>
                                <span className='white'>Date: 14.03.2023</span>
                            </div>                              
                    </div>
            </div>
        </div>
    );
}

export default Blog;
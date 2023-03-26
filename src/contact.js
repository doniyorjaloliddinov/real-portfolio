import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                    <div className='youtube-wrapper d-flex justify-content-around align-items-center'>
                        <a href='https://www.youtube.com/channel/UC-06ghfnQoMQj0z04HGzahw' target={'_blank'}>
                            <img src='./img/youtube.jpg' className='youtube-channel-img' width={350} height={250} />
                        </a>

                        <p className='youtube-text w-50'>This channel created to share all my experiance in IT sphere and my life adventure.
                            Bu kanal mening IT sohasidagi barcha tajribam va hayotiy sarguzashtlarimni baham ko'rish uchun yaratilgan.</p>
                        <a className='btn btn-success' href={'https://www.youtube.com/channel/UC-06ghfnQoMQj0z04HGzahw'} target={'_blank'}>My channel</a>
                    </div>

                <div className=''>
                    <h3 className='mt-5 text-light'>Contact with me</h3>
                    <ul className='list-unstyled'> 
                        <li>
                            <p className='text-light'>Telephone: <a className='text-decoration-none' href='tel:+998975480027'>+998(97)-548-00-27</a></p>
                        </li>
                        <li className=''>
                            <p className='text-light'>My LinkedIn: <a className='text-decoration-none' href='https://www.linkedin.com/in/doniyor-jhon-2b3401235/' target={'_blank'}>LinkedIn</a></p>
                        </li>
                        <li className=''>
                            <p className='text-light'>My GitHub: <a className='text-decoration-none' href='https://github.com/doniyorjaloliddinov' target={'_blank'}>GitHub</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
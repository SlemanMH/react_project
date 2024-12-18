import React from 'react'
import FaceBook from './../../assets/images/facebook.svg'
import Twitter from './../../assets/images/twitter.svg'
import LinkedIn from './../../assets/images/linked-in.svg'
import Dribbble from './../../assets/images/dribbble.svg'


export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='row'>
                    <div className='footer-content col-4'>
                        <h2>LOCATION</h2>
                        <div className='d-flex flex-column gap-1'>
                        <span>2215 John Daniel Drive</span>
                        <span className='ps-3'>Clark, MO 65243</span>
                        </div>
                    </div>
                    <div className='footer-content col-4'>
                        <h2>AROUND THE WEB</h2>
                        <div className='footer-social'>
                            <div className='footer-social-icon d-flex gap-4'>
                                <div className='social-icon'>
                                    <img src={FaceBook} />
                                </div>
                                <div className='social-icon'>
                                    <img src={Twitter} />
                                </div>
                                <div className='social-icon'>
                                    <img src={LinkedIn} />
                                </div>
                                <div className='social-icon'>
                                    <img src={Dribbble} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-content col-4'>
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#">Start Bootstrap.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                     
            </Link>
          </div>
          <small className='website-rights'>SHUNG © 2021</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
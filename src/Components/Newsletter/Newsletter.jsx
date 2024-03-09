import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Gmail</h1>
        <p>Subscribe to our Newsletter to stay updated</p>
        <div>
            <input type="email" placeholder='Your email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
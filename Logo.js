import React from 'react';
import image from './log.png';

const Logo = () => (
  <div style={{
    display: 'flex',
    alignItems:'start',
    marginLeft: '10px'
  }}>
    <img 
      src={image} 
      alt="Logo" 
      style={{
        width: '70px',
        height: '70px',
        marginRight: '10px'
      }} 
    />
    <p style={{
      fontSize: '16px',
      fontWeight: '800',
      color: '#2f234f',  
      paddingBottom: '5px'
    }}>
      NITC ALUMNI PORTAL
    </p>
  </div>
);

export default Logo;

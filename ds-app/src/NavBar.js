import React from 'react';
import { Link } from 'react-router-dom';
import './styless.css';
import Login from './LOgin';

function NavBar() {
  const handleButtonClick = (buttonName) => {
  
    console.log(`${buttonName} button clicked!`);
   
  };

  return (
    <div className="mycomponent" style={{ backgroundImage: 'url("/iamges/download.jpg")' }}>
      <nav>
        <div className="logo">
          <img
            style={{ height: 95, display: 'flex', textAlign: 'center' }}
            src={'/iamges/images.png'}
            alt="NO IMAGE"
          />
        </div>
        <ul>
          <li>
            <button className='bm' onClick={() => handleButtonClick('MENU')}>MENU</button>
          </li>
          <li>
            <button className='bm' onClick={() => handleButtonClick('ABOUT')}>ABOUT</button>
          </li>
          <li>
            <button className='bm' onClick={() => handleButtonClick('CONTACT US')}>CONTACT US</button>
          </li>
          <li>
    {/* Use Link to navigate to the Login component */}
    <Link to="/">
      <button className='bm' onClick={() => handleButtonClick('LOGIN')}>LOGIN</button>
    </Link>
  </li>
          
        </ul>
        {/* <button className='bm' onClick={() => handleButtonClick('LOGIN')}>LOGIN</button> */}
      </nav>
    </div>
  );
}

export default NavBar;

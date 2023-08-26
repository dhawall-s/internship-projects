import { useState } from 'react';
import React from 'react';
import './profile.css';

function Profile() 
{
  return (
    <>
      <button className="header-button" id="header">
        <h2 className="h-1"><u>WELCOME TO MY PROFILE!!</u></h2>
      </button>

      <img className="i-1" src="/iamges/ds1.jpeg" alt="no" />
      <h2 className="h-2"><i>DHAWAL SAINI</i></h2>
      <h4 className="h-4"><strong>-FRONT END DEVELOPER-</strong></h4>
      <u>
        <h2 className="h-3">ABOUT ME-</h2>
      </u>
      <span>Hi, I'm Dhawal! I am a passionate front-end developer with a strong interest in creative interactive and
        user-friendly websites. I love experimenting with new technologies and turning ideas into beautiful and
        functional web applications.</span>
      <u>
        <h2 className="c-i">CONTACT INFORMATION-</h2>
      </u>
      <span className="s-1"><u>EMAIL:</u> sainidhawal@google.com <br />
        <u>PHONE NO.-</u>+91 6778877889
        <br />
        WEBSITE: www.dhawal.com</span>
      <ul >
        <label htmlFor="skills"><u className="c-i"><h1>*SKILLS*</h1></u></label>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>BOOTSTRAP</li>
        <li>REACTJS</li>
      </ul>
      <footer className='footer'>&copy;DHAWAL SAINI All Rights Reserved</footer>
    </>
  );
}

export default Profile;

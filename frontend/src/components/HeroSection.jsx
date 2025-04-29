import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImage from '../assets/herosec.jpg'; // ✅ Import image at the top

export const HeroSection = () => {
  return (
    <div>
      <NavLink to="/">
        <img src={heroImage} alt="my img" />
      </NavLink>  
    </div>
  );
};

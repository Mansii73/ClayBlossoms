import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImage from '../images/herosec.jpg'; // ✅ Import image at the top

export const Home = () => {
  return (
    <div>
      <NavLink to="/">
        <img src={heroImage} alt="my img" />
      </NavLink>  
    </div>
  );
};


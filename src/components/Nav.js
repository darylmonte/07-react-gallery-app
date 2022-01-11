import React from 'react';
import {  NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className='main-nav'>
    <ul>
      <li><NavLink to='/winter'>Winter</NavLink></li>
      <li><NavLink to='/spring'>Spring</NavLink></li>
      <li><NavLink to='/summer'>Summer</NavLink></li>
      <li><NavLink to='/autumn'>Autumn</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
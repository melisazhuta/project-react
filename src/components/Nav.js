import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/about">About</Link>
        &nbsp;&nbsp;
        <Link to="/movies">Movies</Link>
    </div>
  )
}

export default Nav
import React from 'react';
import buslogo from '../asset/buslogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Left side - Logo and Navbar brand */}
      <a className="navbar-brand" href="#">
        <img src={buslogo} alt="Bus Logo" style={{ width: '100px', marginRight: '10px' }} />
        
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Right side - Sign Up button */}
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <form className="form-inline ml-auto">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Event } from './App';
import {Link as Link1, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link1 to="/EASU">
          <img src={require('./sources/logo-white.png')}  className='logo'></img>
        </Link1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" className="navbar-nav">
          <Link2 to="mission">
                <a class="nav-link" href="#">About Us</a>
              </Link2>
              <Link2 to="eboards">
                <a class="nav-link" href="#">E-Board</a>
              </Link2>
              <Link2 to="contact">
                <a class="nav-link" href="#">Contact</a>
              </Link2>
              <Link2 to="sponsor">
                <a class="nav-link" href="#">Sponsor</a>
              </Link2>
              
              <Link1 class="nav-link" to="/EASU/Events">
                Events
                </Link1>
            <Link1 class="nav-link" to="/EASU/Gallery">
              Gallery
              </Link1>

          </ul>
        </div>
      </nav>
    )
  };
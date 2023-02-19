import React from 'react';
import { Event } from './App';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/FEASU">
          <img src={require('./sources/logo.png')}  className='logo'></img>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" className="navbar-nav">
                <Link class="nav-link" to="/FEASU">Home</Link>
                <Link class="nav-link" to="/FEASU/Events">Events</Link>
                <Link class="nav-link" to="/FEASU/Gallery">
                  Gallery
                </Link>
            <li class="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    )
  };
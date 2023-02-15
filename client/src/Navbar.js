import React from 'react';
import logo from './logo.png';
import { Event } from './App';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/">
          <img src={logo}  className='logo'></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" className="navbar-nav">
              <Link class="nav-link" to="icons">
                <a class="nav-link" href="#">E-Board</a>
              </Link>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sponsor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" to="/Events">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  };
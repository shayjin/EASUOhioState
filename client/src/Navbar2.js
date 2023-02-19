import React from 'react';
import { Event } from './App';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/">
          <img src={require('./sources/logo.png')}  className='logo'></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" className="navbar-nav">
                <a class="nav-link" href="/">Home</a>
                <a class="nav-link" href="/FEASU/Events">Events</a>
                <a class="nav-link" href="/FEASU/Gallery">
                  Gallery
                </a>
            <li class="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    )
  };
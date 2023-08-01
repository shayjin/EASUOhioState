import React from 'react';
import { Navbar } from "./Navbar2";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Gallery = () => {

        return (
          <>
            <Navbar/>
            <div className='gallery'>
            <h3 className='title'>Gallery</h3>
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block" src={require('./sources/1st_gbm.png')} alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src={require('./sources/logo.png')} alt="Second slide"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </>
        );
      }

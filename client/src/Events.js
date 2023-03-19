import React from 'react';
import { Navbar } from "./Navbar2";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Events = () => {
    window.scrollTo(0, 0);
    var prop = [
        {title: "K-pop & Manga Café", type: "03/25/2023", 
        des: ["Dive into mangas and check out our collection of K-pop idols merch. We'll be serving some of the cutest desserts and drinks around, perfect for satisfying your sweet tooth!"]
        },
        {title: "E-Board Applications 2023-2024", type: "03/08/2023", 
        des: ["We are currently expanding our E-board members and looking forward to team up with awesome people who are passionate about making an Asian impact on campus! "]
        },
        {title: "EASU Fundraiser", type: "03/02/2023", 
        des: ["💖! EASU’s very very first first first FUNDRAISER !💖 Are you a K-pop, Sanrio or a Anime lover? Our Packages got you covered!"]
        },
        {title: "1st General Body Meeting", type: "02/22/2023", 
        des: ["Join us for our first General Body Meeting of the semester on 2/22! ",
        "We have prepared E-Board introduction, icebreakers, and raffle drawing for a chance to win exciting prizes. ",
        "Be a part of the action!"]
        },
        {title: "Free Merch Event", type: "01/18/2023", 
        des: ["Win big at our Free Merch Event on Feb 22nd! Come join us and receive prizes from our first event. ",
        "Don't miss out on this exciting opportunity!"]
        },
        {title: "East Asian Student Union", type: "01/10/2023", 
        des: ["EASU, a new organization at Ohio State, celebrates East Asian culture and provides a platform for students to learn, connect, and grow. ",
        "Join us and be a part of something special. "]
        }
    ];

    const list = [];

    const pics = ['easucafe', 'eboard2324', 'fundraiser', '1st-gbm', 'merchevent', 'logo'];
    for (var i = 0; i < prop.length; i++) {
      let project = prop[i];

      var pic = require('./sources/' + pics[i] + '.png');
  
      list.push(
        <li key={i}>
            <img className="teul" src={pic} />
            <p className="img__description">
            
              {project.features != null && 
                <>
                  {project.features.map(feature => (
                    <span key={feature}>
                      - {feature} <br/>
                    </span>
                  ))}
                  <br/>
                </>
              }
              
              <br/>
              
            </p>    
        <br/>
        <br/>
        <div className="projDes">
          <div className="roles">        
            <p className="tools">{project.type}</p>
          </div>
          <h2>{project.title}  </h2><br/>
            <p className="projDesDes">{project.des}</p><br/><br/>
        </div>
  
      </li>
      );
    }
  
    return (
        <>
            <Navbar/>
            <div className="proj">
                <br/><br/><br/>
                <ul>
                    {list}
                </ul>
            </div>
        </>

    );
}
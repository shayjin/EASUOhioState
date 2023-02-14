import React from 'react';
import { Navbar } from "./Navbar";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Events = () => {
    var prop = [
        {title: "1st General Body Meeting", type: "02/22/2023", 
        des: ["Join us for our first General Body Meeting of the semester on 2/22! ",
        "We have prepared E-Board introduction, icebreakers, and raffle drawing for a chance to win exciting prizes. ",
        "Be a part of the action!"]
        },
        {title: "Free Merch Event", type: "01/18/2023", 
        des: ["Win big at our Free Merch Event on Feb 22nd! Come join us and receive prizes from our first event. ",
        "Don't miss out on this exciting opportunity!"]
        },
        {title: "Far East Asian Student", type: "01/10/2023", 
        des: ["FEASU, a new organization at Ohio State, celebrates Far East Asian culture and provides a platform for students to learn, connect, and grow. ",
        "Join us and be a part of something special. "]
        }
      ];

    const list = [];

    const pics = ['1st-gbm', 'merchevent', 'logo'];
    for (var i = 0; i < prop.length; i++) {
      let project = prop[i];

      var pic = require('./' + pics[i] + '.png');
  
      list.push(
        <li key={i}>
            <img className="teul" src={pic} />
            <p className="img__description">
              <br/>
            
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
          <br/> 
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
                <ul>
                    {list}
                </ul>
            </div>
        </>

    );
}
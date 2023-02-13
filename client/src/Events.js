import React from 'react';
import { Navbar } from "./Navbar";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import pic from './logo.png';

export const Events = () => {
    var prop = [
        {title: "이경민바보", type: "EVENT", 
        des: ["Future event test test test."], 
        skills: ["js"], 
        },
        {title: "Far East Asian Student Union Launched", type: "01/18/2023", 
        des: ["FEASU, a new organization at Ohio State, celebrates Far East Asian culture and provides a platform for students to learn, connect, and grow. ",
        "Join us and be a part of something special."], 
        skills: ["js"], 
        }
      ];

    const list = [];

    const pics = ['jay'];
    for (var i = 0; i < prop.length; i++) {
      var skills = [];
      let project = prop[i];

      var x = pics[i];
  
      for (var j = 0; j < project.skills.length;j++){
        skills.push('' + project['skills'][j] + '.png')
      }
  
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
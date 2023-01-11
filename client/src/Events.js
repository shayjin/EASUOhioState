import React from 'react';
import { Navbar } from "./Navbar";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import pic from './logo.png';

export const Events = () => {
    var prop = [
        {title: "Future Club Event", type: "EVENT", 
        des: ["Future event test test test."], 
        skills: ["js"], 
        },
        {title: "Far East Asian Club Launched", type: "TIMELINE", 
        des: ["Far East Asian Club at The Ohio State University has been approved! ",
        "This club is led by Jenny Lim under the supervision of Dr. Blah Blah. ",
        "Our goal is to blah blah..."], 
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
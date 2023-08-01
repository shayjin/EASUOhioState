import React from 'react';
import { Navbar } from "./Navbar2";
import EVENTS from "./DB/Events.js";

export const Events = () => {
    window.scrollTo(0, 0);
    const list = [];

    for (var i = 0; i < EVENTS.length; i++) {
      let project = EVENTS[i];

      var pic = require('./sources/' + EVENTS[i].pic + '.png');
  
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
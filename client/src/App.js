
import './App.css';
import {Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import { Tweet } from './Tweet';
import { Events } from './Events';
import { Gallery } from './Gallery';
import { History } from "./History";
import { Navbar } from "./Navbar";
import { useRef } from "react";


function Welcome() {
  return (
    <>
    <div class="area1" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <div className='context'>
        <div className='header-text'>
          <h1 className='header'> East Asian Student Union @ Ohio State</h1>
          <div className='pic'>
            <img src={require('./sources/logo.png')} className='sipdug'></img>
          </div>
          <p className='des'>
            <h5 class="whoAreWe">Who are we?: </h5> We are one of the largest Asian student organizations at The Ohio State University, 
            proudly promoting diverse cultural events and pushing the boundaries on what it means to be an EEast Asian at The Ohio State University. 
          </p>
          <div className='links'>
            <a href="https://web.groupme.com/join_group/91463777/ssmWCZe3" target="_blank">
              <button class="btn btn-secondary">
                <img src={require('./sources/discord.png')} className='lil-logo'/>Join EASU's GroupMe!
              </button>
            </a>
            <a href="https://www.instagram.com/feasu_osu/" target="_blank">
              <button class="btn btn-secondary">
                <img src={require('./sources/instagram.png')} className='lil-logo'/>Follow us on Instagram!
              </button>
            </a>

            <Link to="/EASU/Events">
            <button class="btn btn-secondary">
              <img src={require('./sources/event.png')} className='lil-logo'/>
                Check out past events!
              </button>
            </Link>

            
          </div>
        </div>
      </div>
      </div >

    </>
  );
}

function GoogleCalendarAPI() {
  return (
    <>
      <h3 className='title'>Event Schedule</h3>
      <iframe src="https://calendar.google.com/calendar/embed?src=jayhshin33%40gmail.com&ctz=America%2FNew_York" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </>
  );
}

function Event() {
  var x = useRef(null);
  return (
    <>
      <div className='event'>
        <h3 className='title'>Upcoming Event</h3>
        <img src={require('./sources/easucafe.png')} />

      </div>
      <div className='links' ref={x}>
      <Link to="/EASU/Events">
            <button class="btn btn-secondary">
              <img src={require('./sources/event.png')} className='lil-logo'/>
                Check out past events!
              </button>
            </Link>
      </div>
    </>

  );
}

function WhyJoin() {
  var list = [
    {
      type: "Cultural Awareness",
      text: "Students have the opportunity to explore diverse cultural heritage of  Asia and interact with like-minded individuals to broaden their understanding of different cultures."
    },
    {
      type: "Fun & Engaging Events",
      text: "EASU hosts a variety of engaging events that allow students to learn about East Asian culture, socialize, and have fun!"
    },
    {
      type: "Language and Cultural Exchange",
      text: "EASU offers studennts the opportunity to participate in language and cultural exchange programs, where they can practice their language skills and learn about the traditions of East Asian countries."
    }
  ];

  var x = [];

  for (var i = 0; i < list.length; i++) {
    x.push(<li><b>{list[i].type}:</b> {list[i].text}</li>);
  }

  return (
    <>
      <h3 className='title'>Why You Should Join EASU</h3>
      <div className='whyList'>
        <ul>
          {x}
        </ul>
      </div>
    </>
  );
}

function Icons() {
  return (
    <>
      <div className='icons'>
        <div>
          <img src={require('./sources/friend.png')}  className='logo'></img>
          <h3>Make Friends</h3>
          <p>Experience the cultural exchange from the Ohio State community!</p>
        </div>
        <div>
          <img src={require('./sources/language.png')}  className='logo'></img>
          <h3>Learn Languages</h3>
          <p>Get one-on-one tutorial sessions for free!</p>
        </div>
        <div>
          <img src={require('./sources/calendar.png')}  className='logo'></img>
          <h3>Events Calendar</h3>
          <p>Look up our fun upcoming events and mark your calendars! </p>
        </div>
      </div>
    </>
  );
}


function Contact() {
  return (
    <div className='contact'>
      <br/>
      <h3 className='title'>Contact Us</h3>
      <p className='contact-des'>Have questions or need more information? Please feel free to contact us!</p>
      <div className='gang'>
        <div className='contact2'>
          <img src={require('./sources/logo.png')}/>
        </div>
        <div className='contact3'>
          <p><img src={require('./sources/user.png')}/>Jen Lim</p>
          <p><img src={require('./sources/email.png')}/>lim.1370@osu.edu</p>
        </div>
      </div>
      
    </div>
  );
}

function Sponsor() {
  return (
    <div className='sponsor'>
      <h3 className='title'>Sponsor</h3>
      <p>
        Thank you so much for your interest in supporting EASU. We rely on your donations to pay for...
      </p>
      <ul>
        <li>- Organizing & hosting our monthly club events</li>
        <li>- Prizes for our events</li>
        <li>- Keeping this website up</li>
      </ul>
      <div className='links'>
            <button class="btn btn-secondary">
              <img src={require('./sources/business.png')} className='lil-logo'/>Corporate Donation
            </button>
            <button class="btn btn-secondary">
              <img src={require('./sources/individual.png')} className='lil-logo'/>Individual Donantion
            </button>
          </div>

    </div>
  );
}


function Main() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Mission />
      <WhyJoin />
      <Icons />
      <Event />
      <EBoard />
      <Contact />
      <Sponsor />
    </>
  );
}

function Mission() {
  var missionStatement = "The mission of East Asian Student Union (EASU) at The Ohio State University is to promote and celebrate the diverse cultural heritage of East Asia within the university community. We strive to create a safe and inclusive environment for students to explore, understand, and share their unique cultural experiences. Our organization is dedicated to pushing the boundaries of what it means to be an East Asian student at The Ohio State University through innovative and engaging events and activities. We are committed to fostering unity, cultural awareness, and leadership within the university and beyond.";
  
  return (
    <>
    <div className="mission">
    <br/>
      <h3 className='title'>About EASU</h3>
      <div class="card" id="mission-card">
          <div class="card-body">
            <h5 class="card-title">Our Mission</h5>
            <p class="card-text">
              {missionStatement}
            </p>
          </div>
        </div>
    </div>
    </>
  );
}

function EBoard() {
  let eboards = [
    {name: "Jenny Lim",
    position: "President",
    dog: require('./sources/dog_milk.png'),
    major: "2nd Year Marketing",
    picture: require('./sources/jenny.png'),
    insta: "hyacinth._.ia"},
    {
      name: "Jay Shin",
      position: "Vice President",
      major: "3rd Year CSE",
      dog: require('./sources/dog_blacksugar.png'),
      picture: require('./sources/jay.png'),
      insta: "shayjin33"
    },
    {
      name: "James Ahn",
      position: "Treasurer",
      dog: require('./sources/dog_taro.png'),
      major: "2nd Year ChemE",
      picture: require('./sources/윤기.png'),
      insta: "james.a_135"
    },
    {
      name: "Jiyun Lee",
      position: "Strategic Management",
      dog: require('./sources/dog_mango.png'),
      major: "1st Year CSE",
      picture: require('./sources/지윤.png'),
      insta: "jiyunl1"
    },
    {
      name: "Jin Kim",
      position: "Secretary",
      dog: require('./sources/dog_nangman.png'),
      major: "3rd Year Sports Industry",
      picture: require('./sources/진성.png'),
      insta: "j_kim185"
    },
    {
      name: "Ella Lee",
      position: "Media Chair",
      dog: require('./sources/dog_matcha.png'),
      major: "4th Year MIS",
      picture: require('./sources/경민.png'),
      insta: "kyungminnx"
    },
    {
      name: "Minwoong Jeong",
      position: "Event Chair",
      dog: require('./sources/dog_strawberry.png'),
      major: "3rd Year MechE",
      picture: require('./sources/웅민.png'),
      insta: "minwoong.jeong"
    }
  ];

  let x = [];

  for (var i = 0; i < eboards.length; i++) {
    var eboard = eboards[i];
    var instaLink = "https://www.instagram.com/" + eboard.insta;
    x.push(
      <div className="card" id="eboard">
      <img class="card-img-top" src={eboard.picture} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{eboard.name}</h5>
        <img className="dog" src={eboard.dog}></img>
        <b><p class="card-text">{eboard.position}</p></b>
        <p class="card-text">{eboard.major}</p>
        <div className="sms">
          <div>
            <a href={instaLink} target="_blank"><img src={require('./sources/instagram.png')}></img></a>
          </div>
          <div>
            <a href="#"><img src={require('./sources/email.png')}></img></a>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <>
      <div className="eboards">
        <br/>
        <h3 className='title'>E-Board</h3>
        {x}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/EASU" element={<Main />} />
        <Route path="" element={<Main />} />
        <Route path="*" element={<p>Path not resolved</p>} />
        <Route path="/EASU/Events" element={<Events/>}></Route>
        <Route path="/EASU/Gallery" element={<Gallery/>}></Route>
        <Route path="/EASU/History" element={<History/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
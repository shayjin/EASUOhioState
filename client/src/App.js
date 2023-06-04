
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
            <h3 class="whoAreWe">Who are we?</h3> We are one of the largest Asian student organizations at The Ohio State University, 
            proudly promoting diverse cultural events and pushing the boundaries on what it means to be an East Asian at The Ohio State University. 
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
                Check our previous events!
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
        <img src={require('./sources/easc_film_screening.png')} />

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
    x.push(<li><h3>{list[i].type}:</h3> <p>{list[i].text}</p></li>);
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
          <h3>Make new friends</h3>
          <p>Experience the cultural exchange from the Ohio State community!</p>
        </div>
        <div>
          <img src={require('./sources/language.png')}  className='logo'></img>
          <h3>Learn new languages</h3>
          <p>Get one-on-one tutorial sessions from native speakers for free!</p>
        </div>
        <div>
          <img src={require('./sources/calendar.png')}  className='logo'></img>
          <h3>Events calendar</h3>
          <p>Look up our fun upcoming events and mark your calendars! </p>
        </div>
      </div>
    </>
  );
}


function Contact() {
  return (
    <div className='contact'>
      <h3 className='title'>Contact Us</h3>
      <br/>
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
      <div className='rank'>
        <div id="gold">Gold: Supplies</div>
        <div id="diamond">Diamond: $500+</div>
        <div id="silver">Silver: {'< ' + '$500'}</div>
      </div>
      <img className="sponsorPic" src={require('./sources/laughingorge.png')}/>
      <p id="tlo">The Laughing Orge</p>
      <p>
        Thank you so much for your interest in supporting EASU. We rely on your donations to pay for...
      </p>
      <ul>
        <li>- Organizing & hosting our monthly club events</li>
        <li>- Prizes for our events</li>
        <li>- Keeping this website up</li>
      </ul>
      <div className='links'>
            <a href="https://docs.google.com/forms/d/1F8OSYOSzgCNrT21mvEL396euOkDWdE8K66LtfEKLMCE/viewform?edit_requested=true#settings" target="_blank">
              <button class="btn btn-secondary">
                <img src={require('./sources/business.png')} className='lil-logo'/>Supply Donation
              </button>
            </a>
            <a href="https://account.venmo.com/u/James_A_135" target="_blank">
              <button class="btn btn-secondary">
                <img src={require('./sources/individual.png')} className='lil-logo'/>Sponsorship
              </button>
            </a>

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
            <h5 class="card-title"><b>Our Mission</b></h5>
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
    {name: "Jen Lim",
    position: "Founder / Co-President",
    major: "3rd-year Information Systems",
    picture: require('./sources/jenny.png'),
    insta: "hyacinth._.ia"},
    {name: "Derek Han",
    position: "Co-President",
    major: "3rd-year Industrial Engineering",
    picture: require('./sources/derek.png'),
    insta: "drek_han"},
    {
      name: "Jay Shin",
      position: "Vice President",
      major: "4th-year Computer Science",
      picture: require('./sources/jay.png'),
      insta: "shayjin33"
    },
    {
      name: "James Ahn",
      position: "Treasurer",
      dog: require('./sources/dog_taro.png'),
      major: "3rd-year Chemical Engineering",
      picture: require('./sources/윤기.png'),
      insta: "james.a_135"
    },
    {
      name: "Jiyun Lee",
      position: "Secretary / Outreach Chair",
      dog: require('./sources/dog_mango.png'),
      major: "2nd-year Computer Science",
      picture: require('./sources/지윤.png'),
      insta: "jiyunl1"
    },
    {
      name: "Annabel Kim",
      position: "Sponsor Relations",
      major: "2nd-year ???",
      picture: require('./sources/annabel.png'),
      insta: "_annabelkim_"
    },
    {
      name: "Ella Lee",
      position: "Design Chair Lead",
      major: "5th-year Information Systems",
      picture: require('./sources/경민.png'),
      insta: "kyungminnx"
    },
    {
      name: "Minwoong Jeong",
      position: "Event Chair Lead",
      major: "4th-year Mechanical Engineering",
      picture: require('./sources/웅민.png'),
      insta: "minwoong.jeong"
    },
    {
      name: "Wayne Chiang",
      position: "Technology Chair",
      major: "2nd-year Computer Science",
      picture: require('./sources/wayne.png'),
      insta: "waynechiang1030"
    },
    {
      name: "Kelly Yan",
      position: "Design Chair",
      major: "4th-year Computer Science",
      picture: require('./sources/kelly.png'),
      insta: "k.kyan"
    },
    {
      name: "James An",
      position: "Event Chair",
      major: "3rd-year ???",
      picture: require('./sources/james2.png'),
      insta: "ss_.jsn"
    },
  ];

  let x = [];

  for (var i = 0; i < eboards.length; i++) {
    var eboard = eboards[i];
    var instaLink = "https://www.instagram.com/" + eboard.insta;
    x.push(
      <div className="card" id="eboard">
      <img class="card-img-top" src={eboard.picture} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title" id="name">{eboard.name}</h5>
        <p class="card-text" id="position">{eboard.position}</p>
        <p class="card-text" id="major">{eboard.major}</p>
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
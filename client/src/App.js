
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { Tweet } from './Tweet';
import logo from './logo.png';
import sipdug from './씹덕.png';
import discord from './discord.png';
import email from './email.png';
import insta from './instagram.png';
import snapchat from './snapchat.png';
import jenny from './jenny.png';
import jay from './jay.png';

function NavBar() {
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
          <li class="nav-item">
            <a class="nav-link" href="#">Our Mission</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">E-Board</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Membership</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Event Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support Wanted</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Annoucements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Welcome() {
  return (
    <>
      <div className='poster'>
        <div className='header-text'>
          <h1 className='header'> Far East Asian Club<br/>@ Ohio State</h1>
          <div className='pic'>
            <img src={logo} className='sipdug'></img>
          </div>
          <p className='des'>
            <b>Who are we?: </b>We are the largest Asian student organization, at The Ohio State University, 
            proudly pushing the boundaries on what it means to be an Asian at Ohio State. 
          </p>
          <div className='links'>
            <button class="btn btn-secondary">
              <img src={email} className='lil-logo'/>Join our Emailing List!
            </button>
            <button class="btn btn-secondary">
              <img src={discord} className='lil-logo'/>Join our Discord Server!
            </button>
            <button class="btn btn-secondary">
              <img src={insta} className='lil-logo'/>Follow us on Instagram!
            </button>
          </div>
        </div>
      </div>

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

function WhyJoin() {
  var list = [
    'hi',
    'hello',
    'hellooo'
  ];

  var x = [];

  for (var i = 0; i < list.length; i++) {
    x.push(<li>{list[i]}</li>);
  }

  return (
    <>
      <h3 className='title'>Why You Should Join FEAC</h3>
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
      <h3 className='title'>Helpful Features</h3>
      <div className='icons'>
        <div>
          <img src={logo}  className='logo'></img>
          <h3>hi</h3>
          <p>hisadfadsfadsfadsffadsf</p>
        </div>
        <div>
          <img src={logo}  className='logo'></img>
          <h3>hi</h3>
          <p>hisadfadsfadsfadsffadsf</p>
        </div>
        <div>
          <img src={logo}  className='logo'></img>
          <h3>hi</h3>
          <p>hisadfadsfadsfadsffadsf</p>
        </div>
      </div>
    </>
  );
}

function Main() {
  return(
    <>
      <NavBar />
      <Welcome />
      <Mission />
      <WhyJoin />
      <Icons />
      <EBoard />
      <GoogleCalendarAPI />
      <Gallery />
    </>
  );
}

function Mission() {
  return (
    <>
     <div class="card" id="mission-card">
        <div class="card-body">
          <h5 class="card-title">Our Mission</h5>
          <p class="card-text">Our mission is to blah blah blah blah, blah blah blah. Blah blah blah blah blah, blah blah blah.
          Our mission is to blah blah blah blah, blah blah blah. Blah blah blah blah blah, blah blah blah. 
          Our mission is to blah blah blah blah, blah blah blah. Blah blah blah blah blah, blah blah blah.
          </p>
        </div>
      </div>
    </>
  );
}

function EBoard() {
  let eboards = [
    {name: "Jenny Lim",
    position: "President",
    bio: "hi",
    picture: jenny},
    {name: "Jay Shin",
    position: "Communication Team",
    bio: "hello",
    picture: jay},
    {name: "Jin-Sung Kim",
    position: "Japanese Translator",
    bio: "hello",
    picture: sipdug},
  ];

  let x = [];


  for (var i = 0; i < eboards.length; i++) {
    var eboard = eboards[i];
    x.push(
      <div class="card" id="eboard">
      <img class="card-img-top" src={eboard.picture} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{eboard.name}</h5>
        <p class="card-text">{eboard.position}</p>
        <div className="sms">
          <div>
            <a href="#"><img src={insta}></img></a>
          </div>
          <div>
            <a href="#"><img src={email}></img></a>
          </div>
        </div>
        
      </div>
    </div>
    );
  }

  return (
    <>
      <h3 className='title'>E-Board</h3>
      <div className="eboards">
        {x}
      </div>
    </>
  );
}

function Gallery() {
  return (
    <>
      <div className='gallery'>
      <h3 className='title'>Gallery</h3>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" src={jay} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block" src={logo} alt="Second slide"/>
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<p>Path not resolved</p>} />
        <Route path="/tweet" element={<Tweet/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
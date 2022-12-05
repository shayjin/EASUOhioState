
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

function Main() {
  return(
    <>
      <NavBar />
      <Welcome />
      <Mission />
      <EBoard />
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
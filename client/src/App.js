
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { Tweet } from './Tweet';
import logo from './logo.png';
import sipdug from './씹덕.png';
import discord from './discord.png';
import email from './email.png';
import insta from './instagram.png';

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
            <a class="nav-link" href="#">Membership</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">E-Board</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Programs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help Wanted</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Welcome() {
  return (
    <>
    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>
      <h1 className='header'>Ohio State Far East Asian Club</h1>
      <img src={sipdug} className='sipdug'></img>
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
    </>
  );
}

function Main() {
  return(
    <>
      <NavBar></NavBar>
      <Welcome></Welcome>
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
import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { Tweet } from './Tweet';

function Main() {
  return(
    <>
      <p>hello!</p>
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
import React from 'react';
import './App.css';
import Tetris from './Tetris'

function App() {
  return (
    <div className="App">
      {/*nav bar */}
      <div className="navBar">
        <a href="#home" id="home"><h1>Home</h1></a>
        <a href="#gallery" id="gallery"><h1>Gallery</h1></a>
        <a href="#contact" id="contact"><h1>Contact</h1></a>
      </div>
      <div className="footer">
        <h1>Welcome to my profile</h1>
      </div>
      <h1>My name Ewan Thomas</h1>
      <div className="Emptyspace">
        <h2>this is an unfinished pratice example</h2>
      </div>
      {/*cat animation*/}
      <div>
        <div className="catAnim" />
      </div>
      {/* link to other urls */}
      <div className="home">
        <h3>some text here to display my bio</h3>
      </div>
      <div className="gallery">
        <h3>some text to express my skills</h3>
      </div>
      <div className="contact">
        <h3>Contact me via "linkedin" 
          <a href="https://www.linkedin.com/in/ewan-thomas-9a00974a/">
            <i>Ewan Thomas</i>
          </a>
        </h3>
      </div>
      <Tetris></Tetris>
    </div>

  );

}

export default App;

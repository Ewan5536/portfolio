import React from 'react';
import './App.css';
import Tetris from './Tetris'
import { NavHashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*nav bar */}
        <div className="navBar">
          <Link to="/#Bio"><h1>MyBio</h1></Link>
          <Link to="/#Skill" ><h1>Skills</h1></Link>
          <Link to="/#Contact"><h1>Contact</h1></Link>
        </div>
        <div className="footer">
          <h1>Welcome to my profile</h1>
        </div>
        <h1>My name? Ewan Thomas</h1>
        <div className="Emptyspace">
          <h2>this is a practice example in development</h2>
        </div>
        {/*cat animation*/}
        <div>
          <div className="catAnim" />
        </div>
        {/* link to other urls */}
        <div id="Bio">
          <h3>some text here to display my bio</h3>
        </div>
        <div id="Skill">
          <h3>
            I have extensive knowledge of HTML, CSS, and JavaScript.
<br/>I previous projects and app’s I have used modern CSS frameworks
<br/> such as bootstrap as well as API calls, also React. I have built
<br/>app’s in NodeJS and PHP, whilst implemented CRUD capabilities and
<br/>SQL database design and implementation.

</h3><br/>
        </div><i>
        <div id="Contact">
          <h3>..entertain yourself while you wait to get me on the phone..07544654467<br/>or contact me via linkedin
          <a href="https://www.linkedin.com/in/ewan-thomas-9a00974a/">
               (Ewan Thomas)
          </a>
          </h3> 
        </div></i>
        <br />
        <div className='tetris'>
          <Tetris></Tetris>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;

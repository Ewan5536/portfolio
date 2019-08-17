import React from 'react';
import './App.css';
import Tetris from './Tetris'
import { NavHashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import KODFLIX from "./images/Untitled.png";
import BILLCALCULATOR from "./images/Untitled1.png";
import FLATPACKFORUM from "./images/Untitled2.png";


import Clock from 'react-live-clock';
 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*nav bar */}
              <div className="navBar">
          <Link to
          ="/#Contact"><h4>Contact</h4></Link>
          <Link to="/#Bio"><h4>MyBio</h4></Link>
          <Link 
     to="/#Skill" ><h4>Skills</h4></Link>
          <Link to="/#Projects"><h4>Projects</h4></Link>
        </div>
        <div className="footer">
          <h1><a href="mailto:mail@example.org">EMAIL ME TODAY!<br/>USA/Pacific <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> UK/GMT <Clock format={'HH:mm:ss'} ticking={true} timezone={'UK/GMT'} /></a> </h1>
        </div>
        <div className='header'>
          <h1>My name? Ewan Thomas</h1>
          <div className="Emptyspace">
            <h3>this is a practice example in development</h3>
          </div> 
        </div>
        {/*cat animation*/}
        <div>
          <div className="catAnim" />
        </div>
        {/* link to other urls */}
        <div className='textblock' id="Bio">
          <br />
          <br />
          <br />
          <h3><p>MyBio</p></h3><p>Junior developer, currently studying  Business Information Technology BSc at London Metropolitan University (LMU).</p>
        </div>
        <div className='' id="Projects">
          <br />
          <br />
          <br />
          <h3><p>Projects</p></h3>
          <p>
            <a href="https://github.com/Ewan5536" target="_blank" > (Github Projects)</a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=uoqjata7jr8" target="_blank" > (Me teaching via YouTube )</a>
          </p>
          <br />
          <div className="container" >
            <div className="pics"> <i><a href="https://github.com/Ewan5536/kodflix" target="_blank">KODFLIX</a></i></div>
            <div className="pics"> <i><a href="https://github.com/Ewan5536/bill-calculator" target="_blank">BILL-CALCULATOR</a></i></div>
            <div className="pics"> <i><a href="https://github.com/Ewan5536/flat-pack-forum" target="_blank">FLAT-PACK-FORUM</a></i></div>
          </div>
          <br/>
          <div>
            <div className="image-container" >
              <a href="https://kodflix-ewan5536.herokuapp.com/" target="_blank"><img src={KODFLIX} alt="kodflix App" /></a>
              <a href="https://ewan5536.github.io/bill-calculator/index" target="_blank"><img src={BILLCALCULATOR} alt="Bill Calculator App" /></a>
              <a href="https://flat-pack-forum.herokuapp.com/" target="_blank"><img src={FLATPACKFORUM} alt="FLAT PACK FORUM App" /></a>
            </div>
          </div>
        </div>

        <div className='' id="Skill">
          <br />
          <br />
          <br />
          <h3><p>A Quick Skills Overveiw</p></h3>
          <p>I have extensive knowledge of HTML, CSS, and JavaScript.
I previous projects and app’s I have used modern CSS frameworks
such as bootstrap as well as API calls, also React. I have built
app’s in NodeJS and PHP, whilst implemented CRUD capabilities and
SQL database design and implementation.
  </p>
        </div><i>
          <div className='' id="Contact">
            <br />
            <br />
            <br />
            <h3>Call me on 9am- 5pm Weekdays: 07544654467<br />or contact me via linkedin
          <a href="https://www.linkedin.com/in/ewan-thomas-9a00974a/" target="_blank">
                (Ewan Thomas)
          </a>
            </h3>
          </div></i>
        <br />
        <div className='tetris'>
          <h1>...Tetris anyone ??</h1>
          <br />
          <Tetris></Tetris>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;

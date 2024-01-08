import React, { useState, useEffect } from "react";
import './style.css';
import Narii from '../../img/narii.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram,faJava, faJs, faAws,faNode, faPython,faReact } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import withdang from '../../img/withdang.png';
import graycity from '../../img/graycity.png';
import whitehouse from '../../img/whitehouse.png';
import brandmain from '../../img/brandmain.gif';
import estimate from '../../img/estimate.gif';
import game from '../../img/game.gif';
import flutter from '../../img/flutter.gif';



export default function About() {

return(
<div className="aboutContainer">

<div className="aboutBox">
    <div className="aboutText">
    <h1 className="aboutMainText">FRONT-END & BACK-END DEVELOPER ;
    </h1>
        <img className='nariiP' src={Narii} />
        <h1 className="profileName">Narii</h1>
    </div>
    <div className="skill">
    <FontAwesomeIcon className="java" icon={faJava} />
    <FontAwesomeIcon className="py" icon={faPython} />
    <FontAwesomeIcon className="node" icon={faNode} />
    <FontAwesomeIcon className="js" icon={faJs} />
    <FontAwesomeIcon className="aws" icon={faAws} />
    <FontAwesomeIcon className="react" icon={faReact} />
    </div>

<div className="aboutBoxFooter">
        <h2>    
        <a href="https://github.com/99narii" target="_blank" rel="noopener noreferrer">

            <FontAwesomeIcon className="github" icon={faGithub} /> </a>
            <a href="https://www.linkedin.com/in/dognarii" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="linkedIn" icon={faLinkedin} />  </a>
            <a href="https://narii.tistory.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="blog" icon={faBlog} /></a>
            <FontAwesomeIcon className="instagram" icon={faInstagram} />

        </h2>
        </div>

</div>
<hr />
</div>
);
}
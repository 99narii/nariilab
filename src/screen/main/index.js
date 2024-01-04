import React from "react";
import './style.css';
import mainImg from '../../img/mainImg.png';
import mainCircle from '../../img/mainCircle.png';


export default function Main() {

return(
<div className="mainContainer">

<div className="mainBox">
    <div className="mainText">
    <h1 className="mainBoxMainText">FRONT-END & <br/>
        BACK-END DEVELOPER ;
    </h1>
    <p>Be better <br /> every day</p>

    </div>
    <img className="mainCircle" src={mainCircle} />

<div className="mainBoxFooter">
        <h2>" I'm with you, All the way "</h2>
        </div>
    
</div>
</div>
);
}
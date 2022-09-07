import React from "react";
import ReactDOM from 'react-dom'
import "./style.css";
import ReactPip from 'react-picture-in-picture'
import pip from 'react-pip'
import ReactAudioPlayer from 'react-audio-player'
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import {BsFillDropletFill} from '@react-icons/all-files/bs/BsFillDropletFill'
export default function App() {
  return (
    <div className="container"> 
    <div  className="img" >
      
    <div  className="Pmack">
        <div><BsFillDropletFill className="l"/></div>
       <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span>
       </div>
       </div>
       <div>
       <ReactAudioPlayer src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/FriendShipsMusic.mp3" type="audio/mpeg" loop  controls/>
       </div>
       </div>
      
 <div>
    <div style={{color:"red"}}>``    Juice - No Laces</div> 
    <audio style={{backgroundColor: ""}} controls loop >
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/TNoLaces.mp3" type="audio/mpeg" />
      </audio> 
      </div>
      
      <div style={{color:"red"}}>``    Dax - Dear Alcohol</div> 
    <audio style={{backgroundColor: "transparent"}} controls loop >
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/dear%20Alcohol%20-%20Dax%20[720p].mp3" type="audio/mpeg" />
      </audio>
      <div style={{color:"red"}}>``    DGold - Lil Parachute</div> 
    <audio style={{backgroundColor: "transparent"}} controls loop >
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/DGold%20-%20Lil%20Parachute%20(Prod.%20Sace%20x%20Loneliness)%20[720p].mp3" type="audio/mpeg" />
      </audio>
      <div style={{color:"red"}}>``    S0Cliche' - Kisses with your mask on</div> 
    <audio style={{backgroundColor: "transparent"}} controls loop >
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/s0clich%C3%A9%20-%20Kisses%20With%20Your%20Mask%20On%20[Lyrics%20x%20AMV]%20[720p].mp3" type="audio/mpeg"/>
     </audio>
     <div style={{color:"red"}}>``    Friendships</div> 
    <audio style={{backgroundColor: "transparent"}} controls loop >
    <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/audio.html/juice/Friendships_720p_.mp3" type="audio/mpeg" />
     </audio>



   <div className="second" style={{color: "transparent", marginTop: "8px"}}><strong>Parker made this app....</strong></div>
   {
      <div className="first" style={{color: "red"}}>
      <div className="bb" style={{margin: "100px 10px 10px 10px"}} />
      <div  className="Pmack">
        <div><BsFillDropletFill /></div>
       <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span>
       </div>
       </div>

       <pip className="pip">
      <video className="pip" src="https://cdn.jsdelivr.net/gh/21stChrom/react-5bhddq@main/src/video.mp4/ShuffleSong.mp4" type="video/webm" controls ></video>
      </pip>

      </div>
 }
 <h1 className="animation">
   <button style={{backgroundColor: "transparent", border: "3px solid transparent"}}><a href="https://www.github.com/21stChrom"><FaHome /></a></button>
   </h1>
  

    </div>
  );
}

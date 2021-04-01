import React, { useState } from 'react';
import useSound from 'use-sound';
import './App.css';

function App() {

  const [Q] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
  const [W] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
  const [E] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");

  const [A] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
  const [S] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
  const [D] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");

  const [Z] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
  const [X] = useSound("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
  const [C] = useSound("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
  
  

  return (
    <main>
      <div className="w-screen h-screen background"></div>
      <div className="title text-white text-1xl md:text-4xl font-black leading-loose tracking-widest shadow-4xl">DRUM MACHINE</div>
       <div className="w-full items-center opacity-70 content-center justify-center gap-2 center text-white flex flex-col md:flex-row shadow-4xl">
      
      <div className="w-3/6 md:w-5/12">
    <button id="qButton" onClick={Q} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">Q
      
    </button>
    <button id="wButton" onClick={W} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">W
     
    </button>
    <button id="eButton" onClick={E} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">E
      
    </button>
    </div>
    <div className="w-2/6 md:w-3/12">
    <button id="aButton" onClick={A} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">A
      
    </button>
    <button id="sButton" onClick={S} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">S
      
    </button>
      <button id="dButton" onClick={D} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">D
      
    </button>
    </div>
    <div className="w-1/6 md:w-1/12">
    <button id="zButton" onClick={Z} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">Z
      
    </button>
    <button id="xButton" onClick={X} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">X
      
    </button>
    <button id="cButton" onClick={C} className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">C
     
    </button>
    </div>
  </div>

    </main>
  );
}

export default App;

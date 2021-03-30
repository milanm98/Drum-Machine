import React, { useState } from 'react';
import './App.css';

function App() {

 

  return (
    <main>
      <div className="w-screen h-screen background"></div>
      <div className="title text-white text-1xl md:text-4xl font-black leading-loose tracking-widest shadow-4xl">DRUM MACHINE</div>
       <div className="w-full items-center opacity-70 content-center justify-center gap-2 center text-white flex flex-col md:flex-row shadow-4xl">
      
      <div className="w-3/6 md:w-5/12">
    <button id="qButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">Q
      <audio id="Q"src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
      </audio>
    </button>
    <button id="wButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">W
      <audio id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
      </audio>
    </button>
    <button id="eButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">E
      <audio id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
      </audio>
    </button>
    </div>
    <div className="w-2/6 md:w-3/12">
    <button id="aButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">A
      <audio id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">
      </audio>
    </button>
    <button id="sButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">S
      <audio id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
      </audio>
    </button>
    <button id="dButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">D
      <audio id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
      </audio>
    </button>
    </div>
    <div className="w-1/6 md:w-1/12">
    <button id="zButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">Z
      <audio id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
      </audio>
    </button>
    <button id="xButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">X
      <audio id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
      </audio>
    </button>
    <button id="cButton" className="w-full border font-black bg-yellow-900 text-2xl md:text-6xl">C
      <audio id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
      </audio>
    </button>
    </div>
  </div>

    </main>
  );
}

export default App;

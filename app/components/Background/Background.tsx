// Background.jsx
import React from 'react';
import './Background.css';

export default function Background() {
  return (
    <div className='background-container'>
      <div className="grid-background"></div>
      <div className="noise-texture"></div>
      <div className="glow-effect"></div>
    </div>
  );
}
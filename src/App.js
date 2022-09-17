/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import randomcolor from 'randomcolor';
import { useState } from 'react';

const buttonStyle = css`
  width: 100px;
  background-color: #0066cc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #64748b;
  }
`;

function App() {
  const [color, setColor] = useState(' ');
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState(' ');
  return (
    <div className="App">
      <h1
        style={{
          color: 'red',
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          width: '400px',
          height: '400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          borderRadius: '6px',
          border: '5px solid',
          borderColor: '#ffe6e6',
        }}
      >
        <div> {`Generated Color: ${color}`}</div>
      </div>
      <br />
      <label>
        Hue:
        <input
          style={{ padding: '5px', marginLeft: '10px' }}
          value={hue}
          onChange={(event) => setHue(event.target.value)}
        />
      </label>
      <label style={{ marginLeft: '20px' }}>
        Lightness:
        <input
          style={{ padding: '5px', marginLeft: '10px' }}
          value={lightness}
          onChange={(event) => {
            setLightness(event.target.value);
          }}
        />
      </label>
      <br />
      <button
        css={buttonStyle}
        onClick={() => {
          const newColor = randomcolor.randomColor({
            luminosity: lightness,
            hue: hue,
          });
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;

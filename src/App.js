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
const hueStyle = css`
  padding: 10px;
`;
const lumStyle = css`
  padding: 10px;
`;

function App() {
  const [color, setColor] = useState(randomcolor());
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
        <div> Generated Color: {color}</div>
      </div>
      <div css={hueStyle}>
        {/* selector for Hue */}
        <label htmlFor="hue">Select Hue</label>
        <select
          style={{ marginLeft: '20px' }}
          value={hue}
          onChange={(event) => {
            setHue(event.target.value);
            const newColor = randomcolor({
              luminosity: lightness,
              hue: event.target.value,
            });
            setColor(newColor);
          }}
        >
          {/* Creating selector option of Hue with map and using to lowercase to use value in lowecase */}
          {['Red', 'Green', 'Blue'].map((item) => (
            <option value={item.toLowerCase()} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div css={lumStyle}>
        {/* selector for luminosity */}
        <label htmlFor="lum">Select luminosity</label>
        <select
          style={{ marginLeft: '20px' }}
          value={lightness}
          onChange={(event) => {
            setLightness(event.target.value);

            const newColor = randomcolor({
              luminosity: event.target.value,
              hue,
            });
            setColor(newColor);
          }}
        >
          {/* Creating selector option of Luminosity with map and using to lowercase to use value in lowecase */}
          {['Dark', 'Light'].map((item) => (
            <option value={item.toLocaleLowerCase()} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* Button to generate random color */}
      <div>
        <button
          css={buttonStyle}
          onClick={() => {
            setColor(randomcolor());
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;

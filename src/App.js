/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
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
const heading = css`
  color: red;
`;
const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  border: 5px solid;
  border-color: #ffe6e6;
`;
const selector = css`
  margin-left: 20px;
`;

function App() {
  const [color, setColor] = useState(randomcolor());
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState(' ');

  return (
    <div className="App">
      <h1 css={heading}>Random Color Generator</h1>
      <Container backgroundColor={color}>Generated Color: {color}</Container>

      {/* selector for Hue */}
      <div css={hueStyle}>
        <label htmlFor="hue">Select Hue</label>
        <select
          id="hue"
          css={selector}
          value={hue}
          onChange={(event) => {
            setHue(event.target.value);
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
      {/* selector for luminosity */}
      <div css={lumStyle}>
        <label htmlFor="lum">Select luminosity</label>
        <select
          css={selector}
          id="lum"
          value={lightness}
          onChange={(event) => {
            setLightness(event.target.value);
          }}
        >
          {/* Creating selector option of Luminosity with map and using to lowercase to use value in lowecase */}
          {['Dark', 'Light'].map((item) => (
            <option value={item.toLowerCase()} key={item}>
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
            setColor(randomcolor({ luminosity: lightness, hue: hue }));
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;

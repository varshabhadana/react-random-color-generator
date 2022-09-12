import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';

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
          width: 400,
          height: 400,
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
        {`Generated Color:${color}`}
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
          onChange={(event) => setLightness(event.target.value)}
        />
      </label>
      <br />
      <button
        style={{
          borderRadius: '6px',
          border: '1px solid',
          borderColor: 'black',
          color: '#ff8080',
          fontSize: '15px',
          padding: '20px 36px',
          marginTop: '30px',
          backgroundColor: '#ccf2ff',
          fontWeight: 'bold',
        }}
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

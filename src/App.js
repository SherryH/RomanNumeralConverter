import { useState } from 'react';
import './App.css';
import { RomanNumerals } from './lib/romanNumerals';

function App() {
  // ui display: roman and roman number
  // actually, just 1 state -> derive 2 displays
  // state:number -> 1000
  // numeral = state
  // roman = toRoman(state)
  // handler -> setState
  const [value, setValue] = useState(0);

  const romanValue = RomanNumerals.toRoman(value);

  const handleNumeral = (event) => {
    setValue(event.target.value);
  };

  const handleRoman = (event) => {
    console.log('roman received', event.target.value);
    setValue(RomanNumerals.fromRoman(event.target.value.toUpperCase()));
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        <h1>Roman Numeral Converter</h1>
        <p>Converting a positive integer between the range of 1~3000</p>
        <div className="converter-section">
          <div className="input-wrapper">
            <label for="roman">Roman:</label>
            <input
              id="roman"
              name="roman"
              type="text"
              value={romanValue}
              onChange={handleRoman}
            />
          </div>
          <div className="input-wrapper">
            <label for="numeral">Number:</label>
            <input
              id="numeral"
              name="numeral"
              type="number"
              value={value}
              onChange={handleNumeral}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import './App.css';
import { LARGEST_NUM, RomanNumerals } from './lib/romanNumerals';

function App() {
  const [value, setValue] = useState(1);

  const romanValue = RomanNumerals.toRoman(value);

  const handleNumeral = (event) => {
    const numeral = event.target.value;
    setValue(parseInt(numeral));
  };

  const handleRoman = (event) => {
    setValue(RomanNumerals.fromRoman(event.target.value.toUpperCase()));
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        <h1>Roman Numeral Converter</h1>
        <p>Convert a positive integer between the range of 1~{LARGEST_NUM}</p>
        <img
          src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/41/53/au-t2-m-261-roman-numerals-chart-prompt-frame-_ver_1.avif"
          alt="Roman Numerals Chart"
        />
        <div className="converter-section">
          <div className="input-wrapper">
            <label htmlFor="roman">Roman:</label>
            <input
              id="roman"
              name="roman"
              type="text"
              value={romanValue}
              onChange={handleRoman}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="numeral">Number:</label>
            <input
              id="numeral"
              name="numeral"
              type="number"
              value={value}
              onChange={handleNumeral}
              min="1"
              max={LARGEST_NUM}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

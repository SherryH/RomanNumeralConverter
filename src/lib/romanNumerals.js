const toRomanArray = [
  [3000, 'MMM'],
  [2000, 'MM'],
  [1000, 'M'],
  [900, 'CM'],
  [800, 'DCCC'],
  [700, 'DCC'],
  [600, 'DC'],
  [500, 'D'],
  [400, 'CD'],
  [300, 'CCC'],
  [200, 'CC'],
  [100, 'C'],
  [90, 'XC'],
  [80, 'LXXX'],
  [70, 'LXX'],
  [60, 'LX'],
  [50, 'L'],
  [40, 'XL'],
  [30, 'XXX'],
  [20, 'XX'],
  [10, 'X'],
  [9, 'IX'],
  [8, 'VIII'],
  [7, 'VII'],
  [6, 'VI'],
  [5, 'V'],
  [4, 'IV'],
  [3, 'III'],
  [2, 'II'],
  [1, 'I'],
];

// sort the array so that the value with longest roman characters are placed first for matching
// [['DCCC', 800],['LXXX', 80],['VIII':8],['MMM':3000]...]
const fromRomanArray = toRomanArray
  .map(([key, value]) => [value, key])
  .sort(([keyA], [keyB]) => {
    if (keyA.length > keyB.length) return -1;
    if (keyA.length < keyB.length) return 1;
    return 0;
  });

export const LARGEST_NUM = 3999;

export const RomanNumerals = {
  toRoman: (number) => {
    if (!isValidNumeralInput(number)) return '';

    let argNumber = number;
    let result = '';

    for (let [romanNum, roman] of toRomanArray) {
      if (argNumber > romanNum) {
        result = result + roman;
        argNumber = argNumber - romanNum;
      }
      if (argNumber === romanNum) {
        result = result + roman;
        break;
      }
    }
    return result;
  },
  fromRoman: (romanInput) => {
    if (!isValidRomanInput(romanInput)) return null;

    let argRoman = romanInput;
    let result = 0;
    for (let [roman, romanNumber] of fromRomanArray) {
      if (argRoman.includes(roman)) {
        result = result + romanNumber;
        argRoman = argRoman.replace(roman, '');
      }
      if (argRoman === '') {
        break;
      }
    }

    return result;
  },
};

// validation functions
// The inputs have been sanitised in the UI so that APIs should only receive valid inputs
// These are additional checks just in case
function isValidRomanInput(romanInput) {
  return !/[^IVXLCDM]/.test(romanInput);
}

// positive integer less than 3999
function isValidNumeralInput(number) {
  return isPositiveInt(number) && Number(number) <= LARGEST_NUM;
}

function isPositiveInt(number) {
  var n = Math.floor(Number(number));
  return n !== Infinity && n === Number(number) && n > 0;
}

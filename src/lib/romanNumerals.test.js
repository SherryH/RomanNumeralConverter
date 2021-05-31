import { RomanNumerals } from './romanNumerals';

describe('fromRoman:', () => {
  it('IV should output 4', () => {
    expect(RomanNumerals.fromRoman('IV')).toBe(4);
  });
  it('VI should output 6', () => {
    expect(RomanNumerals.fromRoman('VI')).toBe(6);
  });
  it('XV should output 15', () => {
    expect(RomanNumerals.fromRoman('XV')).toBe(15);
  });
  it('LXXX should output 80', () => {
    expect(RomanNumerals.fromRoman('LXXX')).toBe(80);
  });
  it('C should output 100', () => {
    expect(RomanNumerals.fromRoman('C')).toBe(100);
  });
  it('DC should output 600', () => {
    expect(RomanNumerals.fromRoman('DC')).toBe(600);
  });
  it('CM should output 900', () => {
    expect(RomanNumerals.fromRoman('CM')).toBe(900);
  });
  it('CCXLVI should output 246', () => {
    expect(RomanNumerals.fromRoman('CCXLVI')).toBe(246);
  });
  it('MMCDXXI should output 2421', () => {
    expect(RomanNumerals.fromRoman('MMCDXXI')).toBe(2421);
  });
  it('MIX should output 1009', () => {
    expect(RomanNumerals.fromRoman('MIX')).toBe(1009);
  });
  it('CCVII should output 207', () => {
    expect(RomanNumerals.fromRoman('CCVII')).toBe(207);
  });
  // test invalid case
  it('ABC should output null', () => {
    expect(RomanNumerals.fromRoman('ABC')).toBe(null);
  });
  it('č should output null', () => {
    expect(RomanNumerals.fromRoman('č')).toBe(null);
  });
  it('xxx should output null', () => {
    expect(RomanNumerals.fromRoman('xxx')).toBe(null);
  });
});

describe('toRoman', () => {
  it('1 should output I', () => {
    expect(RomanNumerals.toRoman(1)).toBe('I');
  });
  it('39 should output XXXIX', () => {
    expect(RomanNumerals.toRoman(39)).toBe('XXXIX');
  });
  it('2421 should output MMCDXXI', () => {
    expect(RomanNumerals.toRoman(2421)).toBe('MMCDXXI');
  });
  it('1066 should output MLXVI', () => {
    expect(RomanNumerals.toRoman(1066)).toBe('MLXVI');
  });
  it('3999 should output MMMCMXCIX', () => {
    expect(RomanNumerals.toRoman(3999)).toBe('MMMCMXCIX');
  });
  // test invalid case
  it('4000 should output ""', () => {
    expect(RomanNumerals.toRoman(4000)).toBe('');
  });
  it('-6 should output ""', () => {
    expect(RomanNumerals.toRoman(-6)).toBe('');
  });
  it('0.8 should output ""', () => {
    expect(RomanNumerals.toRoman(0.8)).toBe('');
  });
});

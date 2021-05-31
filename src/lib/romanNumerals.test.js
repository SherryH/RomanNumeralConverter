import { RomanNumerals } from './romanNumerals';

describe('fromRoman:', () => {
  it('IV should output 4', () => {
    expect(RomanNumerals.fromRoman('IV')).toBe(4);
  });
});

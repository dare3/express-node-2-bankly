// Import the timeWord function from the specified file
const timeWord = require('./timeWord');

// Test Suite for timeWord
describe('#timeWord', () => {
  
  // Test to check if timeWord is a function
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  // Test cases for different time inputs
  test('handles midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('handles noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('handles am times', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
    expect(timeWord('01:00')).toBe('one o’clock am');
    expect(timeWord('06:01')).toBe('six oh one am');
    expect(timeWord('06:10')).toBe('six ten am');
    expect(timeWord('06:18')).toBe('six eighteen am');
    expect(timeWord('06:30')).toBe('six thirty am');
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });

  test('handles pm times', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  });

  // Additional edge cases
  test('handles o’clock in pm times', () => {
    expect(timeWord('13:00')).toBe('one o’clock pm');
  });

  test('handles exact hour with zero minutes am', () => {
    expect(timeWord('09:00')).toBe('nine o’clock am');
  });

  test('handles exact hour with zero minutes pm', () => {
    expect(timeWord('15:00')).toBe('three o’clock pm');
  });

});

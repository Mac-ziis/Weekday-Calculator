import dayCalculator from '../src/js/dayCalculator.js';

const DateDayCalculator = require('./dateDayCalculator'); // Assuming you have the DateDayCalculator class in a separate file

describe('DateDayCalculator', () => {
  test('It should calculate the correct day for a given date (Monday)', () => {
    const calculator = new DateDayCalculator('2023-07-17'); // Monday: July 17, 2023
    const dayOfWeek = calculator.calculateDay();
    expect(dayOfWeek).toBe('Monday');
  });

  test('It should calculate the correct day for a given date (Friday)', () => {
    const calculator = new DateDayCalculator('2023-07-21'); // Friday: July 21, 2023
    const dayOfWeek = calculator.calculateDay();
    expect(dayOfWeek).toBe('Friday');
  });

  test('It should calculate the correct day for a given date (Sunday)', () => {
    const calculator = new DateDayCalculator('2023-07-23'); // Sunday: July 23, 2023
    const dayOfWeek = calculator.calculateDay();
    expect(dayOfWeek).toBe('Sunday');
  });

  test('It should handle invalid date input and return undefined', () => {
    const calculator = new DateDayCalculator('invalid-date');
    const dayOfWeek = calculator.calculateDay();
    expect(dayOfWeek).toBeUndefined();
  });
});
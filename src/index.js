import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DayCalculator from './js/dayCalculator.js';

// js goes here

function calculateDay() {
  const dateInput = document.getElementById("dateInput");
  const dateString = dateInput.value;

  if (!dateString) {
    alert("Please enter a valid date.");
    return;
  }

  const calculator = new DayCalculator(dateString);
  const dayOfWeek = calculator.calculateDay();

  const resultElement = document.getElementById("result");
  resultElement.textContent = `The date ${dateString} occurred on a ${dayOfWeek}.`;
};
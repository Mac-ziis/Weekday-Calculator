
export default class DayCalculator {
  constructor(dateString) {
    this.dateString = dateString;
  }

  calculateDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(this.dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }
}

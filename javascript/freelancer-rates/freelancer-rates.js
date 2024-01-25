
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8; // freelancer works 8 hours a day
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numMonths = Math.floor(numDays/22); // get the whole number of months
  // get days that aren't covered under the monthly discount
  let remainder = numDays % 22; // 22 billable days in a month
  let monthPrice = numMonths * 22 * dayRate(ratePerHour);
  let discountedMonthPrice = monthPrice - discount * monthPrice;
  let remainderPrice = remainder * dayRate(ratePerHour);
  return Math.ceil(discountedMonthPrice + remainderPrice);
}

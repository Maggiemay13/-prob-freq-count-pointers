// giving two positive integers find out it the two numbers have the same frequency of digits
//  (34,14)  flase
// (14,41)  true

function sameFrequency(num1, num2) {
  // convert the integers into string to make them easier to iterate through their digits
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // check if the lengths are differnt, return false
  if (strNum1.length !== strNum2.length) {
    return false;
  }

  // create a frequency dictionary for both
  const freq1 = {};
  const freq2 = {};

  // count the occurances of each digit in num1
  for (const digit of strNum1) {
    freq1[digit] = (freq1[digit] || 0) + 1;
  }

  // count the occurances of each digit in num2
  for (const digit of strNum2) {
    freq2[digit] = (freq2[digit] || 0) + 1;
  }

  for (const key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

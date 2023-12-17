// array is sorted so there is some way to work with it

// givin a sorted array of integers and a target average, find a
// pair in the sorted array where the average equals the givin target average.
// there may be one or maore pair

function averagePair(array, target) {
  // set up two pinters left and right, pointing to the beginning and the end of the array.
  let left = 0;
  let right = array.length - 1;

  // while left is less than right, calculate teh average elements at array[left] and array[right]
  while (left < right) {
    const currentAverage = (array[left] + array[right]) / 2;

    // if the calculated average is equal to the target , return true
    if (currentAverage === target) {
      return true;
    } else if (currentAverage < target) {
      // if calulatedaverage is less than target increment left

      left++;
    } else {
      // if calulatedaverage is less than target increment right

      right--;
    }
  }
  //   if no pair is found return false
  return false;
}

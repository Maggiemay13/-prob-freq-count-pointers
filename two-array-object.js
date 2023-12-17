// function that accepts two arrays of any lengths.  the first array is made of of keys and the second is the value of thise keys.
//  if there are not enough values in the second arracy the extra key should have a value of null
//  if there are not enough keys ignore the rest of the values

function twoArrayObject(keys, values) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    //check if the current index is within the bounds of the values array
    if (i < values.length) {
      result[keys[i]] = values[i];
    } else {
      // if not enough values, assign null to the current key
      result[keys[i]] = null;
    }
  }
  return result;
}

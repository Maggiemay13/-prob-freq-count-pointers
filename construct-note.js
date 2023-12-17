// ** Needs to return **:

// ('aa', 'abc')  false
// ('abc', 'dcab') true

// **Constraints**:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

function constructNote(message, letters) {
  //create a frequncy counter dictionary  for the message
  // initialized as an empy object in messageFrq - will be used to store the frequency of each character in message.  
  // the for of loop itirates through each char in the message string
  // inside the loop messageFreq[char] is incremented by 1.  if messageFreq[char] 
 // dose not exsist (undefined), it is set to 0 before incrementing.     
  
  const messageFreq = {};
  for (const char of message) {
    messageFreq[char] = (messageFreq[char] || 0) + 1;
  }
  //create a frequncy counter dictionary  for the letters
  const lettersFreq = {};
  for (const char of letters) {
    lettersFreq[char] = (lettersFreq[char] || 0) + 1;
  }

  //  compare the two dictionaries
  //the for in loop iterates through each key 'char' in the messageFreq object
//   inside the loop the if statment checks weather 'char' is not present in lettersFreq object or if the frequency
//  of char in lettersFreq is less than the frequency of char in messageFreq  - should return false if any of these are true
  for (const char in messageFreq) {
    if (!lettersFreq[char] || lettersFreq[char] < messageFreq[char]) {
      return false;
    }
  }
  //   if all checks pass, return true
  return true;
}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
      return false;
    };
    
   let num = x;
   let reversed = 0;
  
   while(x > 0){
      const lastDigit = num % 10;
      reversed = reversed *10 + lastDigit;
      Math.floor(num/10);
   };
  
   return reversed === num;
  }


//  Question: Given a string, find the shortest possible string which can be achieved by adding characters to the end of the
//  initial string to make it a palindrome.

//  Time Complexity: O(n²)
//  Space Complexity: O(n)

function createPalindrome(originalText) {
  const reversedText = originalText.split('').reverse().join('');
  for (let matchingPosition = 0; matchingPosition < originalText.length; matchingPosition++) {
      if (originalText.substring(matchingPosition) === reversedText.substring(0, originalText.length - matchingPosition)) {
          return originalText + reversedText.substring(originalText.length - matchingPosition);
      }
  }
  return originalText;
}


// Question 3.
function createPyramid(levels) {
  const maxWidth = 2 * levels - 1;
  for (let row = 0; row < levels; row++) {
      const stars = 2 * row + 1;
      const spaces = (maxWidth - stars) / 2;
      const line = ' '.repeat(spaces) + '*'.repeat(stars);
      console.log(line);
  }
}

createPyramid(10);

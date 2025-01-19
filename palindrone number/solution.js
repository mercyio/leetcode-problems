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

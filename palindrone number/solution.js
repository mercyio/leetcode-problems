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
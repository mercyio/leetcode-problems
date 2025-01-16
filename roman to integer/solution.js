// Intuition
// compare each roman numeral with the previous one. if the previous one is smaller, we subtract it from the current, otherwise we add the current value

// Approach
// roman numeral has a pattern. By iterating from left to right through the numbers, its very eay to detect the subtraction cases by comparing each numerals with its previos neighbor

// Complexity
// Time complexity:
// O(n)

// Space complexity:
// O(1)

Code
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        "I": 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let result = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = values[s[i]];
        const previousValue = values[s[i - 1]];
        
        if (i > 0 && previousValue < currentValue) {
            result += (currentValue - previousValue);
            i--;
        } else {
            result += currentValue;
        }
    }
    
    return result;
};
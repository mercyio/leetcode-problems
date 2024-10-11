/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(string) {
    let map = new Map
    let maxLength = 0;
    let start = 0

    for( i= 0; i< string.length; i++){
       let currentChar = string[i]

       if(map.has(currentChar)){
        start = Math.max( start, map.get(currentChar) + 1)
       }

      map.set(currentChar, i)

       maxLength = Math.max( maxLength, i - start + 1)
    }    
    return maxLength
};
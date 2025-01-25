/**
 * @param {string[]} strs
 * @return {string}
 * time complexity : 0(n)
 * space complexity : 0(1)
 */
var longestCommonPrefix = function(strs) {
    let prefixs = strs[0];
    for(i = 0; i < strs.length; i++){
        currentString = strs[i];
        while(!currentString.startsWith(prefixs)){
            prefixs = prefixs.slice(0, -1);
            if(prefixs === ""){
                return ""
            }
        }
    }
    return prefixs;
};
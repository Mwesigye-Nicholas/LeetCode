/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    const count = new Array(26).fill(0);
    if (s.length !== t.length){
        return false;
    }

    for (let index = 0; index < s.length; index++){
        count[s.charCodeAt(index) - 'a'.charCodeAt(0)]++
        count[t.charCodeAt(index) - 'a'.charCodeAt(0)]--
    }
    return count.every(value => value === 0);
};
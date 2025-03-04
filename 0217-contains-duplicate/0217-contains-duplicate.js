/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newSet = new Set();

    for (const num of nums){
        if (newSet.has(num)){
            return true;
        }
        newSet.add(num);
    }
    return false;
    };
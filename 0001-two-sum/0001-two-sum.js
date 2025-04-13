/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 const newMap = new Map();

 for (let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if (newMap.has(diff)){
        return [newMap.get(diff), i];
    };
    newMap.set(nums[i], i);
 };
  return [];
};
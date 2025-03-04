/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
const newMap = new Map();
for (let index = 0; index < nums.length; index++){
    const selectedNum = nums[index];
    const complement = target - selectedNum;
    const complementIndex = newMap.get(complement);

    const isComplement = newMap.has(complement);

    if (isComplement){
        return [index, complementIndex];
    };
    newMap.set(selectedNum, index);
}
return [-1, -1];

    
};
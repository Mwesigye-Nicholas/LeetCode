/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

     for(i = 0; i < nums.length; i++){
         if(!map.has(nums[i])){
             map.set(nums[i], 1);
         } else {
             map.set(nums[i], map.get(nums[i]) + 1);
         }
     };
    const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    let count = 0;
    let result = []

    for (let [key, value] of mapSort1.entries()){
        if (count < k){
            result.push(key);
            count++;
        };
    };
    return result;
};
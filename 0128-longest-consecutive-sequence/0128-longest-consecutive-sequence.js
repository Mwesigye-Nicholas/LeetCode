/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
     if (nums === null || nums.length === 0) return 0;

       const mySet = new Set(nums);
       let max = 0;
        
       for (let num of mySet){
            
            if (mySet.has(num - 1)) continue;
            
            let currMax = 1;
            let currNum = num;
            while(mySet.has(currNum + 1)){
            currMax++;
            currNum++;
            };
            max = Math.max(max, currMax);
       }
       return max;
      
};
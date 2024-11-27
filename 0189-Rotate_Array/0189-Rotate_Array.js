/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
  
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l += 1
        r -= 1
    }
    l = 0
    r = k -1
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l += 1
        r -= 1
    }
    l = k
    r = nums.length-1
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l += 1
        r -= 1
    }

};

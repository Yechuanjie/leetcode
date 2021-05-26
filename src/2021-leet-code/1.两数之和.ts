/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hasMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i]
    if (hasMap.has(num)) {
      return [hasMap.get(num), i]
    } else {
      hasMap.set(nums[i], i)
    }
  }
};
// @lc code=end
console.info(twoSum([3, 3], 6))


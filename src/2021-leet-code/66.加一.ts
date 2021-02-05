/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const continueZreoLength = 0
  const strArr = (Number(digits.join('')) + 1 + '').split('')
  return strArr.map(i=>Number(i))
};
// @lc code=end


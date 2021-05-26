/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let result = 0
  while (x != 0) {
    const lastNum = x % 10
    result = result * 10 + lastNum
    x = (x - lastNum) / 10
  }
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0
  }
  return result
};
// @lc code=end

console.info(reverse(1534236469))

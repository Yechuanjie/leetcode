/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits
}
// @lc code=end

const arr = [9,9]
const result = plusOne(arr)
console.info(result)

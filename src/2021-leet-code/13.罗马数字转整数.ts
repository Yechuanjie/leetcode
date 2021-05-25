/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  function getVal(char: string) {
    switch (char) {
      case 'I': return 1
      case 'V': return 5
      case 'X': return 10
      case 'L': return 50
      case 'C': return 100
      case 'D': return 500
      case 'M': return 1000
      default: return 0
    }
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    const num = getVal(s.charAt(i))
    if (i < s.length - 1 && num < getVal(s.charAt(i + 1))) {
      result -= num
    } else {
      result += num
    }
  }
  return result
};
// @lc code=end
console.info(romanToInt('MCM'))

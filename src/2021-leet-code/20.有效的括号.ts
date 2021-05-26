/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2 != 0) {
    return false
  }
  const pairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (pairs.has(char)) {
      stack.push(char)
    } else {
      if (stack.length == 0) return false
      const lastChar = stack[stack.length - 1]
      if (pairs.get(lastChar) == char) {
        stack.splice(stack.length - 1, 1)
      } else {
        return false
      }
    }
  }
  return stack.length == 0
};
// @lc code=end

console.log(isValid("(((([]))))"))
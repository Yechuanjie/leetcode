/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function getPrefix(prefix: string, str: string) {
  const prefixLength = Math.min(prefix.length, str.length)
  let index = 0
  while (index <= prefixLength && prefix.charAt(index) == str.charAt(index)) {
    index++
  }
  return prefix.substring(0, index)
}
function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length == 0) return ''
  let prefix = strs[0]
  for (let i = 0; i < strs.length; i++) {
    prefix = getPrefix(prefix, strs[i])
  }
  return prefix
};
// @lc code=end

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))

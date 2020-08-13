/**
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/palindrome-number/
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 输入: 121 输出: true
 * 输入: -121 输出: false 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 输入: 10 输出: false 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */
function isPalindrome(x: number): boolean {
  // 负数一定不是回文
  if (x < 0) return false;
  const num = Number(Array.from(String(x)).reverse().join(''));
  return num === x;
}
function isPalindrome2(x: number): boolean {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let revertNumber = 0;
  while (x > revertNumber) {
    revertNumber = (x % 10) + revertNumber * 10;
    x = Math.floor(x / 10);
  }
  return x === revertNumber || x === Math.floor(revertNumber / 10);
}

console.info(isPalindrome2(10));

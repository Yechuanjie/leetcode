/**
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/palindrome-number/
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 输入: 123 输出: 321
 * 输入: -123 输出: -321
 * 输入: 120 输出: 21
 */
function reverse(x: number): number {
  const isFushu = x < 0;
  const a = Array.from(Math.abs(x).toString());
  const b = a.reverse().join('');
  const max = String(Math.pow(2, 31) - 1);
  if (b > max && b.length >= max.length) return 0;
  return isFushu ? -Number(b) : Number(b);
}

console.info(reverse(120));

function isPalindrome(x: number): boolean {
  // 负数一定不是回文
  if (x < 0) return false;
  const num = Number(Array.from(String(x)).reverse().join(''));
  return num === x;
}

console.info(isPalindrome(-10));

/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 *「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 *
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 *
 * 思路： 循环每次计算结果 使用哈希set存储结果，若出现过一次则说明已经入死循环
 */
function isHappy(n: number): boolean {
  const stepHappy = (num: number) => {
    const str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const n = Number(str[i]);
      sum += n ** 2;
    }
    return sum;
  };

  let result = n;
  let hash: Set<number> = new Set([]);

  while (result !== 1) {
    result = stepHappy(result);
    if (hash.has(result)) {
      return false;
    }
    hash.add(result);
  }

  return true;
}

console.info(isHappy(19));

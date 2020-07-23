/**
 * 来源：https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/
 *
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。返回重复了 N 次的那个元素。
 * 输入：[5,1,5,2,5,3,5,4] 输出：5
 *
 * 其中：
 * 4 <= A.length <= 10000
 * 0 <= A[i] < 10000
 * A.length 为偶数
 */

/**
 * 思路 哈希
 */
function repeatedNTimes(A: number[]): number {
  const map = new Map();
  for (let i = 0, l = A.length; i < l; i++) {
    const n = map.get(A[i]) || 0;
    if (n === l / 2 - 1) return A[i];
    map.set(A[i], n + 1);
  }
  return -1;
}

console.info(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

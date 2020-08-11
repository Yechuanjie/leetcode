/**
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/number-of-good-pairs
 *
 * 给一个整数数组 nums 。
 * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
 * 返回好数对的数目。
 * 输入：nums = [1,2,3,1,1,3] 输出：4
 * 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
 * 输入：nums = [1,1,1,1] 输出：6
 */
function numIdenticalPairs(nums: number[]): number {
  const map = new Map();
  let count = 0;
  for (let i = 0, l = nums.length; i < l; i++) {
    const s = map.get(nums[i]) || 0;
    map.set(nums[i], s + 1);
  }
  for (const value of map.values()) {
    count += (value * (value - 1)) / 2;
  }
  return count;
}

console.info(numIdenticalPairs([1, 1, 1, 1, 2]));

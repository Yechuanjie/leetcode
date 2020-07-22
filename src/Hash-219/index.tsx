/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，
 * 使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
 *
 * 输入: nums = [1,2,3,1], k = 3 输出: true
 * 输入: nums = [1,0,1,1], k = 1 输出: true
 * 输入: nums = [1,2,3,1,2,3], k = 2 输出: false
 */

/**
 *
 *
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  for (let i = 0, l = nums.length; i < l; i++) {
    if (map.has(nums[i]) && Math.abs(i - Number(map.get(nums[i]))) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}

console.info(containsNearbyDuplicate([1,0,1,1], 1)); // true

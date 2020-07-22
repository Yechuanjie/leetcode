/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。
 * 如果数组中每个元素都不相同，则返回 false 。
 *
 * @param {number[]} nums
 * @returns {boolean}
 */

/**
 *思路1 哈希
 */
function containsDuplicate(nums: number[]): boolean {
  const hash = new Set<number>();
  for (let i = 0, l = nums.length; i < l; i++) {
    if (hash.has(nums[i])) return true;
    hash.add(nums[i]);
  }
  return false;
}
/**
 *思路2 数组去重
 */
function containsDuplicate2(nums: number[]): boolean {
  return [...new Set(nums)].length !== nums.length;
}

console.info(containsDuplicate([1, 2, 3, 4]));

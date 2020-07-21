/**
 *给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *你可以假设数组中无重复元素。
 */
function SearchInsert(nums: number[], target: number): number {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
console.info(SearchInsert([1, 2, 3, 6, 7], 8)); // 0

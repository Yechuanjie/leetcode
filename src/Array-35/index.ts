// 二分查找
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

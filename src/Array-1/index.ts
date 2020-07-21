/**
 * 给定一个整数数组 nums 和一个目标值 target
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */
function twoSum(nums: number[], target: number): number[] {
  const hashMap: { num: number } | any = {};
  const length = nums.length;
  let result: number[] = [];
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in hashMap && hashMap[x] !== i) {
      result = [hashMap[x], i];
    }
    hashMap[nums[i]] = i;
  }
  return result;
}

console.info(twoSum([2, 7, 22, 45], 24)); // [0, 2]

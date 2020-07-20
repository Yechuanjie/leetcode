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

console.info(twoSum([2, 7, 22, 45], 24));

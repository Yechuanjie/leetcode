function singleNumber(nums: number[]): number {
  const length = nums.length;
  const hash: any = {};
  for (let i = 0; i < length; i++) {
    if (nums[i] in hash) {
      delete hash[nums[i]];
    } else {
      hash[nums[i]] = 1;
    }
  }
  return Number(Object.keys(hash)[0]);
}

console.info(singleNumber([4, 1, 2, 1, 2, 4, 8, 7, 8]));

function singleNumber2(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

console.info(singleNumber2([4, 1, 2, 1, 2, 4, 8, 7, 8]));

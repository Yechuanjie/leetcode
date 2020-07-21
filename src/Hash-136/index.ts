/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * @param {number[]} nums
 * @returns {number}
 */
/**
 * 思路一 哈希表 遇到重复的删除属性 剩下的属性值即结果
 * */ 
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

console.info(singleNumber([4, 1, 2, 1, 2, 4, 8, 7, 8])); // 7

/**
 * 思路二 使用异或运算 相同数字异或结果为0
 * */ 
function singleNumber2(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

/**
 * 思路三 使用reduce加异或运算  一行代码
 * */ 
function singleNumber3(nums: number[]): number {
  return nums.reduce((acc, val) => acc ^ val);
}

console.info(singleNumber2([4, 1, 2, 1, 2, 4, 8, 7, 8])); // 7

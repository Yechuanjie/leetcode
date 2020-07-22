/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 * @param {number} n
 * @returns {number}
 *
 *  该方法时间复杂度 
 *  O(n * n) = O(n^2) 
 */
function countPrimes(n: number): number {
  const arr: Array<number> = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  // 判断是否素数
  const isPrime = (num: number) => {
    if (num < 2) {
      return false;
    }
    // 这个数依次除以 从第一个素数 2 开始，一直到 √n 的值
    const len = Math.sqrt(num);
    for (let i = 2; i <= len; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  return arr.filter((item) => isPrime(item)).length;
}

/**
 *
 * 优化2
 *  */
function countPrimes2(n: number): number {
  const arr: Array<boolean> = [];
  for (let i = 0; i < n; i++) {
    arr.push(true);
  }
  // 只需要遍历到根号n。如果到根号n都没有可整除的因子，那后面也一定没有
  let len = Math.sqrt(n);
  for (let i = 2; i < len; i++) {
    if (arr[i]) {
      // i的倍数也不可能是素数，做个标记
      for (let j = 2 * i; j < n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((i, index) => index > 1 && i === true).length;
}

/**
 * 优化3
 *  */
function countPrimes3(n: number): number {
  const arr: Array<boolean> = new Array(n).fill(true);
  // 只需要遍历到根号n。如果到根号n都没有可整除的因子，那后面也一定没有
  let len = Math.sqrt(n);
  for (let i = 2; i < len; i++) {
    if (arr[i]) {
      // i的倍数也不可能是素数，做个标记
      for (let j = i * i; j < n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((i, index) => index > 1 && i === true).length;
}

/**
 * 优化4：避免最后的filter 使用变量count统计
 *  */
function countPrimes4(n: number): number {
  // 初始数组且默认为false，代表不是质数
  const arr: Array<boolean> = new Array(n).fill(false);
  let count = 0;
  // 只要大于2 就一定会有2这个质数
  if (n > 2) count++;
  // 从3开始，且只需要遍历奇数， 因为大于2的偶数一定不是质数
  for (let i = 3; i < n; i += 2) {
    // 是质数
    if (!arr[i]) {
      // 质数的奇数倍一定不是质数 （偶数倍已经在外层循环就干掉了）
      for (let j = 3; i * j < n; j += 2) {
        // 标记为质数
        arr[i * j] = true;
      }
      // 计数加一
      count++;
    }
  }
  return count;
}

console.info(countPrimes4(100));

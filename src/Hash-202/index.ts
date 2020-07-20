function isHappy(n: number): boolean {
  const stepHappy = (num: number) => {
    const str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const n = Number(str[i]);
      sum += n ** 2;
    }
    return sum;
  };

  let result = n;
  let hash: Set<number> = new Set([]);

  while (result !== 1) {
    result = stepHappy(result);
    if (hash.has(result)) {
      return false;
    }
    hash.add(result);
  }

  return true;
}

console.info(isHappy(19));

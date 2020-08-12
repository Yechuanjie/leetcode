function reverse(x: number): number {
  const isFushu = x < 0;
  const a = Array.from(Math.abs(x).toString());
  const b = a.reverse().join('');
  const max = String(Math.pow(2, 31) - 1);
  if (b > max && b.length >= max.length) return 0;
  return isFushu ? -Number(b) : Number(b);
}

console.info(reverse(123));

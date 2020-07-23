 /**
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 输入: pattern = "abba", str = "dog cat cat dog" 输出: true
 * 输入: pattern = "abba", str = "dog cat cat fish" 输出: false
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
 */

/**
 * 思路 哈希
 */
function wordPattern(pattern: string, str: string): boolean {
  const attr = str.split(" ");
  if (pattern.length !== attr.length) return false;
  const mapP = new Map();
  const mapA = new Map();
  for (let i = 0, l = attr.length; i < l; i++) {
    if (mapP.has(pattern[i]) && mapP.get(pattern[i]) !== attr[i]) {
      return false;
    }
    if (mapA.has(attr[i]) && mapA.get(attr[i]) !== pattern[i]) {
      return false;
    }
    mapP.set(pattern[i], attr[i]);
    mapA.set(attr[i], pattern[i]);
  }
  return true;
}

console.info(wordPattern("abba", "dog dog dog dog")); //false

/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 你可以假设字符串只包含小写字母。
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 * 输入: s = "anagram", t = "nagaram" 输出: true
 * 输入: s = "rat", t = "car" 输出: true
 */
function isAnagram(s: string, t: string): boolean {
  const arrs = s.split("").sort();
  const arrt = t.split("").sort();
  return arrs.join("") === arrt.join("");
}

/**
 * 思路2 哈希
 * */

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const mapS = new Map();
  const mapT = new Map();
  for (let i = 0, l = s.length; i < l; i++) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }
  for (const str of mapS.keys()) {
    // 两个map都存在同一key，且value相同才满足条件
    if (!(mapS.has(str) && mapT.has(str) && mapS.get(str) === mapT.get(str))) {
      return false;
    }
  }
  return true;
}

console.info(isAnagram2("bac", "abb")); // false

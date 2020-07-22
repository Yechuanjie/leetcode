/**
 * 题目
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。
 * 两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 *
 * 输入: s = "egg", t = "add" 输出: true
 * 输入: s = "foo", t = "bar" 输出: false
 * 输入: s = "paper", t = "title" 输出: true
 */

/**
 * 思路1 每个字符必须是唯一的映射关系。 依次循环当前字符index 若两者索引不一致则表示非唯一映射
 * 缺陷： indexOf消耗时间
 */
function isIsomorphic(s: string, t: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
}

/**
 * 思路2 使用hashMap做两次映射
 */
function isIsomorphic2(s: string, t: string): boolean {
  // 字符长度不一致直接返回false
  if (s.length !== t.length) return false;
  const mapS = new Map<string, string>();
  const mapT = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const getS = mapS.get(s[i]);
    const getT = mapT.get(t[i]);
    if ((getS && getS !== t[i]) || (getT && getT !== s[i])) return false;
    mapS.set(s[i], t[i]);
    mapT.set(t[i], s[i]);
  }
  return true;
}

console.info(isIsomorphic2("ab", "ca"));

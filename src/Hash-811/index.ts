/**
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/subdomain-visit-count
 *
 * 一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。
 * 作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。
 * 当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名 "com"。
 *
 * 给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。
 * 其格式为访问次数+空格+地址，例如："9001 discuss.leetcode.com"。
 * 接下来会给出一组访问次数和域名组合的列表cpdomains 。
 * 要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。
 *
 * 注意事项：
 * cpdomains 的长度小于 100。
 * 每个域名的长度小于100。
 * 每个域名地址包含一个或两个"."符号。
 * 输入中任意一个域名的访问次数都小于10000。
 *
 * 输入: ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]，
 * 输出: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
 * 说明:
 * 按照假设，会访问"google.mail.com" 900次，"yahoo.com" 50次，"intel.mail.com" 1次，"wiki.org" 5次。
 * 而对于父域名，会访问"mail.com" 900+1 = 901次，"com" 900 + 50 + 1 = 951次，和 "org" 5 次。
 */
function subdomainVisits(cpdomains: string[]): string[] {
  const map = new Map();
  for (let i = 0, l = cpdomains.length; i < l; i++) {
    const item = cpdomains[i].split(" ");
    const baseCount = Number(item[0]);
    const baseDomain = item[1];
    const domainChild = baseDomain.split(".");
    const fatherDomain = domainChild.slice(1).join(".");
    const subDomainCount = (map.get(baseDomain) || 0) + baseCount;
    const parentDomainCount = (map.get(fatherDomain) || 0) + baseCount;
    map.set(baseDomain, subDomainCount);
    map.set(fatherDomain, parentDomainCount);
    if (domainChild.length > 2) {
      const grandfatherDomain = domainChild.slice(2).join(".");
      const grandfaDomainCount = (map.get(grandfatherDomain) || 0) + baseCount;
      map.set(grandfatherDomain, grandfaDomainCount);
    }
  }
  const result: string[] = [];
  map.forEach((value, key) => {
    result.push(value + " " + key);
  });
  return result;
}

console.info(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ])
);

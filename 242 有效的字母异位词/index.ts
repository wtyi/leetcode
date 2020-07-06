/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @param s
 * @param t
 * 实例:
 *  输入: s = "anagram", t = "nagaram"
 *  输出: true
 */

function isAnagram(s: string, t: string): boolean {
  let map = new Map<string, number>();
  s.split("").forEach((v) => map.set(v, (map.get(v) ?? 0) + 1));
  t.split("").forEach((v) =>
    map.has(v)
      ? (map.get(v) ?? 0) == 1
        ? map.delete(v)
        : map.set(v, (map.get(v) ?? 0) - 1)
      : map.set(v, 99)
  );
  return map.size == 0;
}

console.log(isAnagram("ab", "abcc"));

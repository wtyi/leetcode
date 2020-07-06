export function isAnagram(s: string, t: string): boolean {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s == t;
}

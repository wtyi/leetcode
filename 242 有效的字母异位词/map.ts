export function isAnagram(s: string, t: string): boolean {
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

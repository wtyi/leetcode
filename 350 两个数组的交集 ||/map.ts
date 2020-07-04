export function intersect(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];
  let map = new Map<number, number>();
  nums2.forEach((v) => map.set(v, 1 + (map.get(v) ?? 0)));
  result = nums1.filter(
    (v) =>
      map.has(v) &&
      (map.get(v) ?? 0) > 0 &&
      map.set(v, (map.get(v) ?? 0) - 1 ?? 0)
  );
  return result;
}

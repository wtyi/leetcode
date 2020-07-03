export function intersection(nums1: number[], nums2: number[]): number[] {
  nums1.length < nums2.length ? ([nums1, nums2] = [nums2, nums1]) : null;
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let result: number[] = [];
  for (let v of s1) {
    if (s2.has(v) && !result.includes(v)) {
      result.push(v);
    }
  }
  return result;
}

export function intersection(nums1: number[], nums2: number[]): number[] {
  nums1.length < nums2.length ? ([nums1, nums2] = [nums2, nums1]) : null;
  let result = nums1.filter(n => {
    return nums2.some(m => m == n);
  });

  return Array.from(new Set(result));
}

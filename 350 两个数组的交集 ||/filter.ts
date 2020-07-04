export function intersect(nums1: number[], nums2: number[]): number[] {
  let indexs: number[] = [];
  return nums1.filter((n) =>
    nums2.some((m, i) => m == n && !indexs.includes(i) && indexs.push(i))
  );
}

export function intersection(nums1: number[], nums2: number[]): number[] {
  nums1.length < nums2.length ? ([nums1, nums2] = [nums2, nums1]) : null;
  let map = new Map();
  let result: number[] = [];
  for (let n = 0; n < nums1.length; n++) {
    map.set(nums1[n], 1);
  }
  for (let m = 0; m < nums2.length; m++) {
    let key = nums2[m];
    if (map.has(key)) result.push(key) && (map.delete(key));
  }
  console.log(map);
  return result;
}

/**
 * 根据数字二进制下 1 的数目排序
 *
 * 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
 * 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
 * 请你返回排序后的数组
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits
 */
function sortByBits(arr: number[]): number[] {
  let result: number[] = [];
  let map = new Map<number, number[]>();
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let n = arr[i];
    while (n != 0) {
      count++;
      n = (n - 1) & n;
    }
    let v = map.get(count);
    if (v) v.push(arr[i]);
    map.set(count, v ? v : [arr[i]]);
  }
  let keys = [];
  for (let k of map.keys()) {
    keys.push(k);
  }
  keys.sort((a, b) => a - b);
  keys.forEach((k) => result.push(...(map.get(k) || []).sort((a, b) => a - b)));
  return result;
}

console.log(sortByBits([1024, 512, 255, 256, 128, 64, 32, 16, 8, 4, 2, 1]));

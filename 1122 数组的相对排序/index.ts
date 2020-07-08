/**
 * 数组的相对排序
 *
 * 给你两个数组，arr1 和 arr2，
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/relative-sort-array
 * 实例
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 */
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let map = new Map<number, number>();
  let result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], (map.get(arr1[i]) ?? 0) + 1);
  }

  for (let j = 0; j < arr2.length; j++) {
    let len = map.get(arr2[j]) || 0;
    for (let m = 0; m < len; m++) {
      result.push(arr2[j]);
    }
    map.delete(arr2[j]);
  }
  let nowResult: number[] = [];
  for (let n of map.entries()) {
    let len = n[1];
    if (len > 0) {
      while (len > 0) {
        nowResult.push(n[0]);
        len--;
      }
    }
  }
  nowResult.sort((a, b) => a - b);
  result.push(...nowResult);
  return result;
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);

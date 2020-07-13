/**
 * 1502. 判断能否形成等差数列
 * 给你一个数字数组 arr 。
 *
 * 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
 * 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  let result: boolean = true;
  let temp = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (temp == -1) {
      temp = Math.abs(arr[i] - arr[i + 1]);
      continue;
    }
    if (Math.abs(arr[i] - arr[i + 1]) != temp) {
      return false;
    }
  }

  return result;
}

console.log(canMakeArithmeticProgression([3, 2, 5, 1]));

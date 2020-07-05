/**
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 实例:
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 * @param A
 */
function sortArrayByParityII(A: number[]): number[] {
  let result: number[] = Array(A.length).fill(null);
  let left = 0;
  let right = 1;
  A.forEach(
    v => (v % 2 == 1)
      ? (result[right] = v) && (right += 2)
      : (result[left] = v) && (left += 2)
  );
  return result;
}
let arr = [1, 5, 8, 6];
console.log(sortArrayByParityII(arr));

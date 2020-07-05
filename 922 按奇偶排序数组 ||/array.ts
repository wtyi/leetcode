export function sortArrayByParityII(A: number[]): number[] {
  let result: number[] = [];
  let a1 = A.filter(v => v % 2 == 1); // 奇数
  let a2 = A.filter(v => v % 2 == 0); // 偶数

  for (let i = 0; i < A.length; i++) {
    if (i % 2 == 1) {
      result[i] = a1[0];
      a1.shift();
    } else if (i % 2 == 0) {
      result[i] = a2[0];
      a2.shift();
    }
  }
  return result;
}

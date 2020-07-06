/**
 * 三角形的最大周长
 * tip:三角形任意两边之和大于第三条
 * @param A
 */
function largestPerimeter(A: number[]): number {
  A.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      let a = A[i],
        b = A[j],
        c = A[j + 1];
      if (a + b > c && a + c > b && b + c > a) {
        return a + b + c;
      }
    }
  }
  return 0;
}

console.log(largestPerimeter([2, 2, 1]));

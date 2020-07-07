/**
 * 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。
 * 另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。
 * 返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/matrix-cells-in-distance-order
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function allCellsDistOrder(
  R: number,
  C: number,
  r0: number,
  c0: number
): number[][] {
  let map = new Map<number, number[][]>(); // 使用map key储存距离值 val储存索引坐标数组(可能有多个)
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let k = Math.abs(r - r0) + Math.abs(c - c0);
      let arr = map.get(k);
      map.set(k, arr ? [...arr, [r, c]] : [[r, c]]);
    }
  }
  let keys = [];
  let result: number[][] = [];
  for (let k of map.keys()) {
    keys.push(k);
  }

  keys.sort((a, b) => a - b);
  keys.forEach((k) => result.push(...(map.get(k) ?? [])));
  return result;
}
console.log(allCellsDistOrder(1, 2, 0, 0));

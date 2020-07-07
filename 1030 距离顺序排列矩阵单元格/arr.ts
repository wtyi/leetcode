export function allCellsDistOrder(
  R: number,
  C: number,
  r0: number,
  c0: number
): number[][] {
  let points: number[][] = [];
  // 遍历所有坐标
  // 每一行
  for (let r = 0; r < R; r++) {
    // 每一列
    for (let c = 0; c < C; c++) {
      // [2] = 其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|
      points.push([r, c, Math.abs(r - r0) + Math.abs(c - c0)]);
    }
  }
  //   排序
  return points.sort((a, b) => a[2] - b[2]).map((arr) => arr.slice(0, 2));
}

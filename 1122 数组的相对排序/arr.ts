export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let nowArr: number[] = []; // arr1和arr2都存在的值
  let noArr: number[] = []; // arr2不存在 后续需要升序添加到结果数组中
  let result: number[] = []; // 结果
  arr1.forEach((v) => (arr2.includes(v) ? nowArr.push(v) : noArr.push(v))); // 分类添加
  arr2.forEach((v) => {
    let index = nowArr.indexOf(v);
    // 遍历arr2使用顺序数值遍历nowArr中是否存在 存在添加到数组
    while (index != -1) {
      nowArr.splice(index, 1);
      result.push(v);
      index = nowArr.indexOf(v);
    }
  });
  //   将剩余的剩余添加进来
  result = result.concat(noArr.sort((a, b) => a - b));
  return result;
}

export function relativeSortArray1(arr1: number[], arr2: number[]): number[] {
  let result: number[] = []; // 结果
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == arr2[i]) {
        result.push(arr2[i]);
      }
    }
  }
  result = result.concat([
    ...arr1.filter((v) => !result.includes(v)).sort((a, b) => a - b),
  ]);
  return result;
}

/**
 * 写的有问题一旦字符串长度过长，，，直接无限循环
 * @param s
 */
export default function sortString(s: string): string {
  let arr: arr[] = s.split("").map((s) => [s, s.charCodeAt(0)]);
  arr.sort((a, b) => (a[1] as number) - (b[1] as number));
  let result: arr[] = [];
  let flag = true;
  let i = 0;
  while (arr.length != 0) {
    console.log(i, result, arr);
    //首次最大与最小。索引++最后切除
    if (arr.length == 1) {
      result.push(arr[0]);
      break;
    }
    if (i == 0) {
      result.push(arr[i]);
      i++;
    } else if (i == arr.length - 1) {
      result.push(arr[i]);
      i--;
    }
    if (flag) {
      if (arr[i][1] > result[result.length - 1][1]) {
        result.push(arr[i]);
        arr.splice(i, 1);
      } else {
        i++;
      }
    } else {
      if (arr[i][1] < result[result.length - 1][1]) {
        result.push(arr[i]);
        arr.splice(i, 1);
      }
      i--;
    }
    // 一轮加结束  改变flag 删除首次索引0的元素  索引i - 1

    if (i >= arr.length - 1) {
      flag = false;
      arr.splice(0, 1);
      i--;
    } else if (i <= 0) {
      // 一轮减结束  改变flag 删除最后一个元素
      flag = true;
      arr.splice(arr.length - 1, 1);
      i = 0;
    }
  }
  console.log("输入:", s);
  return result.map((v) => v[0]).join("");
}
type arr = [string, number];

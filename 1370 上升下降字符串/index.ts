/**
 * 上升下降字符串
 *
 * 给你一个字符串 s ，请你根据下面的算法重新构造字符串：
 * 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
 * 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
 * 重复步骤 2 ，直到你没法从 s 中选择字符。
 * 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
 * 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
 * 重复步骤 5 ，直到你没法从 s 中选择字符。
 * 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
 *  在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。
 * 请你返回将 s 中字符重新排序后的 结果字符串 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/increasing-decreasing-string
 */
function sortString(s) {
  // 进行排序等操作
  let arr = s.split("").map((v) => [v, v.charCodeAt(0)]);
  let result = [];
  arr.sort((a, b) => a[1] - b[1]);

  //   控制步骤
  let temp = true; // true = 小到大
  //   重复操作至所有元素均已使用
  while (arr.length > 0) {
    let len = arr.length; // 元素总合
    // 从头删除一个元素添加进结果、
    let sliceArr = (i) => {
      let val = arr.splice(i, 1);
      val && result.push(val[0]);
      len--;
    };
    // 执行1.2.3步骤
    if (temp) {
      let i = 0; // 从0开始
      // 进行排序后从小到大 所以按照判断是否大于就行了 直到遍历完这次的元素
      sliceArr(i);
      //   重复第二步第三步
      while (i < len) {
        //   如果这次的元素大于上次的。添加到后边 (对比的charcodeat)
        if (arr[i][1] > result[result.length - 1][1]) {
          // 添加
          sliceArr(i);
          // 如果去除则索引不变。否则索引+1 总数-1
        } else {
          i++;
        }
      }
      temp = false;
    } else {
      let i = arr.length - 1; // 从倒数开始
      // 上边执行完后执行4.5.6步骤
      // 选择一个最大的添加进去 第4步
      sliceArr(i);
      i--;
      //   重复第5.6
      while (i > 0) {
        // 和上边差不多
        if (arr[i][1] < result[result.length - 1][1]) {
          sliceArr(i);
        }
        i--; // i减去
      }
      temp = true;
    }
  }
  console.log(result);
  return result.map((v) => v[0]).join("");
}

console.log("输出:", sortString("aaaabbbbcccc"));

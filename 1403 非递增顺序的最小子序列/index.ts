/**
 * 非递增顺序的最小子序列
 * @param nums
 * 给你一个数组 nums，请你从中抽取一个子序列，满足该子序列的元素之和 严格 大于未包含在该子序列中的各元素之和。
 * 如果存在多个解决方案，只需返回 长度最小 的子序列。如果仍然有多个解决方案，则返回 元素之和最大 的子序列。
 * 与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。
 * 注意，题目数据保证满足所有约束条件的解决方案是 唯一 的。同时，返回的答案应当按 非递增顺序 排列。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/minimum-subsequence-in-non-increasing-order
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  let sum = nums.reduce((a, b) => a + b, 0);
  let temp = 0;
  let res: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    res.push(nums[i]);
    temp += nums[i];
    console.log(sum, sum >> 1);
    if (temp > sum >> 1) return res;
  }
  return [];
}
/**
 * 1.如果有多个答案取元素数量最少的。
 * 2.如果仍有,取和最大的。
 * 第二可以知道数最大的肯定是数值大的。第一可以根据题可以知道 抽出几个数大于剩余的。且抽出的数量最少并且数值最大。。直接排序。从数值大的开始累加结果大于
 * 所有值总数的1/2 (肯定要比一般大了。。)
 */
console.log(minSubsequence([4, 3, 10, 9, 8]));

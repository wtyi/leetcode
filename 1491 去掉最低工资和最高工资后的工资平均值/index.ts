/**
 * 去掉最低工资和最高工资后的工资平均值
 * 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
 * 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param salary
 */
function average(salary: number[]): number {
  let maxSalary = Math.max.call(null, ...salary);
  let minSalary = Math.min.call(null, ...salary);
  let nums = salary.length - 2;
  let allSalary =
    salary.reduce((all, current) => all + current, 0) - maxSalary - minSalary;
  return allSalary / nums;
}

console.log(
  average([
    48000,
    59000,
    99000,
    13000,
    78000,
    45000,
    31000,
    17000,
    39000,
    37000,
    93000,
    77000,
    33000,
    28000,
    4000,
    54000,
    67000,
    6000,
    1000,
    11000,
  ])
);

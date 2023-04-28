/**
 * 好的，这是一道经典的算法题目：

给定一个长度为 n 的数组 nums，其中包含 0 到 n-1 的所有整数，但其中有一些数字重复出现了。你需要找出重复出现的数字，并返回它们的集合。

要求：时间复杂度为 O(n)，空间复杂度为 O(1)。

例如，输入 [2, 3, 1, 0, 2, 5, 3]，输出 [2, 3]。

请你完成上述任务，并对你的解题思路进行解释。
 * 
 */
const nums = [2, 3, 1, 0, 2, 5, 3]

// function findRepeat(arr: number[]) {
//     const map = {}
//     const res = []
//     nums.forEach((num) => {
//         if (map[num] && map[num] === 1) {
//             res.push(num)
//         }
//         map[num] = map[num] ? map[num] + 1 : 1
//     })
//     return res
// }
// console.log(findRepeat(nums))
/**
 * 你的解法是使用了哈希表来记录已经访问过的数字，并且记录每个数字出现的次数。
 * 当发现某个数字已经出现过时，将其添加到结果数组中。这样的时间复杂度为 O(n)
 * 但是空间复杂度为 O(n)，因为哈希表可能需要存储所有的数字。

题目要求空间复杂度为 O(1)，因此我们需要考虑其他解法。

可以考虑使用类似于“快慢指针”或“二分查找”的方法，将数组转化成一个“环”，然后查找环中的重复数字。具体来说，我们可以从起点出发，根据数组中每个数字作为下标，跳到下一个位置，如果该位置已经被访问过了，则说明当前数字是重复出现的，添加到结果数组中。如果该位置未被访问过，则将该位置标记为已访问，并继续跳到下一个位置。

具体实现过程如下：
 * 
 */
// const nums = [2, 3, 1, 0, 2, 5, 3]
function findRepeat2(nums) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            if (nums[nums[i]] === nums[i]) {
                res.push(nums[i])
                break
            }
            const temp = nums[i]
            nums[i] = nums[temp]
            nums[temp] = temp
        }
    }
    return res
}
console.log(findRepeat2(nums))

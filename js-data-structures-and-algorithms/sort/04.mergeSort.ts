/**
 * 归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只 有一个位置，接着将小数组归并成较大的数组
 * 直到最后只有一个排序完毕的大数组。由于是分治法，归并排序也是递归的。
 * 我们要将算法分为两个函数：第一个负责将一个大数 组分为多个小数组并调用用来排序的辅助函数
 */
let numbes = [3, 1, 5, 3, 1, 2, 6, 7]

function sort(arr: number[]) {
    const { length } = arr
    if (length > 1) {
        const mid = Math.floor(length / 2)
        const left = sort(arr.slice(0, mid))
        const right = sort(arr.slice(mid, length))
        arr = merge(left, right)
    }

    return arr
}
function merge(left: number[], right: number[]): number[] {
    const arr = []
    // [1,5] [3,4]
    for (let i = 0; i < left.length; ) {
        for (let j = 0; j < right.length; ) {
            if (left[i] < right[j]) {
                arr.push(arr[i])
                break
            }
        }
    }
    return arr
}
console.log(sort(numbes))
export default {}

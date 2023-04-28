let numbes = [3, 1, 5, 3, 1, 2, 6, 7]

//选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并
//将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推

function sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
console.log(sort(numbes))
export default {}

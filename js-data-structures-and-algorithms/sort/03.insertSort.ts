//插入排序每次排一个数组项，以此方式构建最后的排序数组。
//假定第一项已经排序了。接着， 它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？
//这样，头两项就已正确 排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。
let numbes = [3, 1, 5, 3, 1, 2, 6, 7]

function sort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i]
        let j = i
        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1]
            j--
        }
        console.log(j)
        arr[j] = tmp
    }
    return arr
}
console.log(sort(numbes))
export default {}

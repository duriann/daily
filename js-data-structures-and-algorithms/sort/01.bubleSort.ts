let numbes = [3, 1, 5, 3, 1, 2, 6, 7]

function sort(arr: number[]) {
    for (let i = 0; i < numbes.length; i++) {
        // 这边 -i 是减少重复比较次数
        for (let j = 0; j < numbes.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}
console.log(sort(numbes))

export default {}

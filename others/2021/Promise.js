Promise.myall = (arr) => {
  let result = new Array(arr.length)
  let counter = 0
  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          result[index] = value
          counter++
          if (counter === arr.length) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}

const p1 = Promise.resolve(2)
const p2 = Promise.resolve(1)
const p3 = Promise.reject('错误啦')
Promise.myall([p1, p3, p2]).then((res) => {
  console.log('res', res)
})

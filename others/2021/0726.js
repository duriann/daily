const obj = {
  a: {
    b: 1,
  },
}

const obj2 = [[1, 3], [2]]

const {
  a: { b },
} = obj

const [a, [c]] = obj2
console.log(c)

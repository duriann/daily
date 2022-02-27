// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key
    return res
  }, Object.create(null))
}

// 创建 K: V
const Direction2 = strEnum(['North', 'South', 'East', 'West'])

// 创建一个类型
type Direction2 = keyof typeof Direction2

// 简单的使用
let sample: Direction2

sample = Direction2.North // Okay
sample = 'North' // Okay
sample = 'AnythingElse' // ERROR!

let testtypeof = {
  name: 'boluo',
  age: 1,
}
type p = keyof typeof testtypeof

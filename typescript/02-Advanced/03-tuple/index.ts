//元祖
//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象 本质就是数组啦

let person: [string, number] = ['菠萝', 18]

let person2: [string, number]
person2[0] = '西瓜'

let person3: [string, number]
person3 = ['椰子', 11]

type KeyAndValue = [string, number]

let key1: KeyAndValue = ['a', 2]

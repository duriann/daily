//1: 函数声明

function sum(a: number, b: number): number {
    return a+b
}

//2: 函数表达式

let sumfn = function (a: number, b: number): number {
    return a + b
}

//等价于

let sumfn2: (a: number,b: number) => number = function (a: number, b: number): number {
    return a + b
}

//用接口定义形状

interface SumFunc {
    (a: number, b: number) : number
}
let sumfn3: SumFunc = (a: number,b: number): number => a + b

//可选参数

function addName(firstName: string, secondName?: string) {
    if(secondName){
        return firstName + ' ' + secondName
    }
    return firstName
}
addName('bl')
addName('bl','hx')
//在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function addName2(firstName: string, secondName: string = 'hx') {
    return firstName + ' ' + secondName
}
addName2('bl')
addName2('bl','apple')
addName2('bl',undefined)

//剩余参数
function push(arr: Array<number>, ...items: Array<number>) {
    items.forEach(item => arr.push(item))
}
let a: Array<number> = []
push(a,1,2,3)

//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
function reverse(x: number): number;
function reverse(x: string): string
function reverse(x: number | string): number | string{
    if(typeof x === "number"){
        return + (x.toString().split('').reverse().join(''))
    }else if(typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}


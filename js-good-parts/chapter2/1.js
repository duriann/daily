//undefined NaN Infinity 本应该保留而没有保留
let undefined = 1
console.log(undefined === undefined)//undefined 已经被修改成了1

//字符串字面量可以被包在一对单引号或者双引号中 它可能包含0个或者多个字符
// \是转义字符 因为JS在被创建的时候Unicode是16位的字符集 所以js中所有
//字符都是16位的

//假值: false null undefined 0  '' NaN
//除了假值其它都是真值 包括 '0' 'false' 以及所有对象

//typeof运算符产生的值有 'number','string','boolean','undefined','function',
//和object 对null和数组返回'object'
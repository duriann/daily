//类型断言（Type Assertion）可以用来手动指定一个值的类型。
/**
 * 语法：
 *   1: <type> value
 *   2: value as type
 **/
function getLength(x: number | string): number {
    if((<string>x).length){
        return (<string>x).length
    }else{
        return x.toString().length
    }
}
getLength(123)
//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
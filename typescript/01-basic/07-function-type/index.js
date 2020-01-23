//1: 函数声明
function sum(a, b) {
    return a + b;
}
//2: 函数表达式
var sumfn = function (a, b) {
    return a + b;
};
//等价于
var sumfn2 = function (a, b) {
    return a + b;
};
var sumfn3 = function (a, b) { return a + b; };
//可选参数
function addName(firstName, secondName) {
    if (secondName) {
        return firstName + ' ' + secondName;
    }
    return firstName;
}
addName('bl');
addName('bl', 'hx');
//在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function addName2(firstName, secondName) {
    if (secondName === void 0) { secondName = 'hx'; }
    return firstName + ' ' + secondName;
}
addName2('bl');
addName2('bl', 'apple');
addName2('bl', undefined);
//剩余参数
function push(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) { return arr.push(item); });
}
var a = [];
push(a, 1, 2, 3, '4');

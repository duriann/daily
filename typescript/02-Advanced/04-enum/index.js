//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["BLUE"] = 1] = "BLUE";
    color[color["YELLOW"] = 2] = "YELLOW";
})(color || (color = {}));
console.log(typeof color.BLUE);
console.log(color.BLUE)
console.log(color[0])

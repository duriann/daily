/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} x 
 */
var reverse = function(x) {
  let res = (Math.abs(x)+'').split('').reverse().join('').replace(/^0{1,n}/g,'')
  let flag = Math.pow(2,31)-1
  return x>0?res>flag?0:res:-res<-flag?0:-res 
};

var reverse2 = function(x) {
  let res = r1(x).replace(/^0{1,n}/g,'')
  let flag = Math.pow(2,31)-1
  return x>0?res>flag?0:res:-res<-flag?0:-res 
};
var r1 = function(x){
  x = Math.abs(x)+''
  var num = ''
  for(var i = x.length-1;i>=0;i--){
    num+=x[i]
  }
  return num
}
console.log(reverse2(-12300));
console.log(r1(123));
console.log(typeof String(5));
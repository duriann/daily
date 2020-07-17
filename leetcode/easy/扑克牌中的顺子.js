/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
示例 2:

输入: [0,0,1,2,5]
输出: True

示例 1:

输入: [1,2,3,4,5]
输出: True

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var isStraight = function(nums) {
  nums = nums.sort()
  var flag = true
  var zeros = 0
  var fflag = true
  var d = 0
  for(var i = 0; i<nums.length-1; i++){
      if(nums[i] === 0){
        console.log('222')
          zeros++
        //   continue
      }
      var dis = nums[i+1] - (nums[i]+1) 
      console.log('dis',dis)
      if(dis>3){
          fflag = false
      }
      
      if(dis>=1 && dis <=3){
          d+=dis
      }
  }
  if(!fflag){
      return false
  }
  console.log('d',d,'zero',zeros)
  return zeros>=d
};
console.log(isStraight([1,2,6,0,0]))
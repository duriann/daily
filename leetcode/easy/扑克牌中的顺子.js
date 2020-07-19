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
  nums = nums.sort((a,b)=>a-b)
  console.log('nums',nums)
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
      console.log('dis',dis,i,nums[i+1], (nums[i]+1))
      if((nums[i] !== 0 && dis>3) ||   (nums[i] !== 0 &&  dis==-1)){
          fflag = false
      }
      
      if(dis>=1 && dis <=3 && nums[i]!==0){
          d+=dis
      }
  }
  if(!fflag){
      return false
  }
  console.log('d',d,'zero',zeros)
  return zeros>=d
};

console.log(isStraight([0,6,10,11,12]))



var runningSum = function(nums) {
  console.log(nums);
  
  for(var i = 0 ; i< nums.length ; i++){
    console.log(i,nums[i]);
    nums[i] = i===0 ? nums[i] :  nums[i] +=  nums[i-1]
      // if(i === 0){

      //   nums[i] ==  nums[i]
      // }else{
      //   nums[i] +=  nums[i-1]
      // }
      // console.log('1',nums);
      
  }
  return nums
};
let arr = [1,2,3,4]
console.log(runningSum(arr));
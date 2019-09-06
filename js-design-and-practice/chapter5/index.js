//策略模式： 定义一系列的算法 把他们一个个封装起来 并且使它们可以相互替换
let calc = function(performanceLevel, salary) {
  if (performanceLevel === "S") {
    return salary * 4;
  }
  if (performanceLevel === "A") {
    return salary * 3;
  }
  if (performanceLevel === "B") {
    return salary * 2;
  }
};

let strategies = {
  'S': function(salary){
    return salary * 4
  },
  'A': function(salary){
    return salary * 3
  },
  'B': function(salary){
    return salary * 2
  }
}
let calc2 = function(performanceLevel,salary){
  return strategies[performanceLevel](salary)
}
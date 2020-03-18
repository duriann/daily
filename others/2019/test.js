//setTimeout并没有把回调函数放入事件循环中，它只是设置了一个定时器，当到时后，宿主环境会把那个函数放到时间循环中
setTimeout(function(){
  let sum = 0
  for(var i = 0;i< 99999999;i++){
    sum+=i
  }
  console.log(sum);
},1000)

setTimeout(() => {
  console.log('2s 到啦');
}, 2000);
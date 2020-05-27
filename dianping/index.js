//大众点评自动做任务

toast("开始运行~");
launchApp("大众点评");
var pkgName = app.getPackageName("大众点评");
waitForPackage(pkgName);
click("我的");
var levelText = text("会员等级").findOne();
click(levelText.bounds().centerX(), levelText.bounds().centerY());
var task = text('日常升级任务').findOne()
setScreenMetrics(1080, 2340);
swipe(task.bounds().centerX(),task.bounds().centerY() ,300, 200, 2000);
var contentArr = ['分享内容','看商户推荐菜','看好吃好玩的商户','看大家写的点评',
'分享优惠团购','分享一家商户','收藏你喜欢的商户','搜索附近的吃喝玩乐']

contentArr.forEach(content=>{
  switch(content){
    case '搜索附近的吃喝玩乐':
      text('搜索附近的吃喝玩乐').findOne().click()
      text('立即搜索').findOne().click()
      input(0,['a','b','c','d','e','f','g','h','i','j'][Math.random()*10])
      text('搜索',1).findOne().click()
  }
})
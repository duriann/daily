/**
 * 发布-订阅: 也叫观察者模式 它定义对象中的一种一对多的依赖关系，
 * 当一个对象的状态发生改变时候，所有依赖于他的对象都将得到通知
 * 
 * 现实中的🌰: 我来公司面试后 面完后 hr说让我回去等通知 有结果了会
 * call我 这就是发布订阅模式 我是订阅者 hr是发布者 我不需要每天打电话
 * 问hr被录取了没有 hr会通知我 
 */

 let event = {
   clientList: [],
   listen: function(key,fn){
     if(!this.clientList[key]){
       this.clientList[key] = []
     }
     this.clientList[key].push(fn)
   },
   trigger: function(){
     let key = Array.prototype.unshift.call(arguments),
         fns = this.clientList[key]
     if(!fns || fns.length === 0){
       return false
     }
     for(let i = 0,fn;fn = fns[i++];){
        fn.apply(this,arguments)
     }    
   }
 }
 let installEvent = function(obj){
   for(let i in event){
     obj[i] = event[i]
   }
 }

 
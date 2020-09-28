//观察者模式

class Observer{
  listeners = []
  add(fn){
    if(typeof fn === 'function'){
      this.listeners.push(fn)
    }
  }
  notify(msg){
    this.listeners.forEach(listener=>listener(msg))
  }
  remove(fn){
    this.listeners.splice(this.listeners.indexOf(fn),1)
  }
}

let o = new Observer()
function f1(msg){
  console.log('f1',msg);
}
function f2(msg){
  console.log('f2',msg);
}
o.add(f1)
o.add(f2)
o.notify('吃饭啦!')

//实现一个call

Function.prototype.fakeCall = function(){
  var obj = arguments[0]
  obj.fn = this
  var res = obj.fn(...[...arguments].slice(1))
  delete obj.fn
  return res
};

const p1 = {
  name: 'bl',
  getName: function(age){
    console.log(this.name,'age: ', age);
  }
}

p1.getName.fakeCall({name: '西瓜'},18)
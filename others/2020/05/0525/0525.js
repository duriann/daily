const Foo = (function () {
  var i = 1;
  return function () {
    if(this instanceof Foo){
      this.id = i++;
    }else{
      return {
        id: i++
      }
    }
  };
})();
let a = new Foo();
let b = new Foo();
let c = Foo();
console.log(a.id);
console.log(b.id);
console.log(c.id);

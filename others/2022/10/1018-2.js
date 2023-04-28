
class MyClass {
  constructor() { return new Date };
}

class MyClassEx extends MyClass {
//   constructor() { super() }; // or default
  foo() {
    console.log('check only');
  }
}

var x = new MyClassEx;
console.log(x instanceof MyClassEx); // false
console.log('foo' in x); // false
console.log(x)
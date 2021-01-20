//下面的名称是根据官方教程目录来的https://www.typescriptlang.org/docs/handbook/
//1. basic types

// type assertions
let someValue: unknown = 'this is a string';
//两种写法 The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed
let len: number = (someValue as string).length;
let len2: number = (<string>someValue).length;

//hybird types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 6;

//2. Functions
let addFn: (x: number, y: number) => number = (x, y) => x + y;
addFn(1, 2);

//this
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  cards: Array[52],
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

//Enums
enum Direction{
  Up = 3,
  Down,
  Left = 3,
  Right
}
console.log(Direction.Right,Direction.Down)

enum StringEnum{
  Up = 'UP',
  //Down, isn't allowed
  Down = 'DOWN'
}
type a = keyof typeof StringEnum //等同于 type a = 'Up'|'Down'
// StringEnum['aa'] = 'bb'
console.log(StringEnum)
// StringEnum.Down = 'test' 无法分配到 "Down" ，因为它是只读属性。ts(2540)

//Generics 泛型
function identity<T>(arg: T): T{
  return arg
}
const a = identity<number>(2)// const a:number = identity<number>(2)
const str = identity('string')

// generic typec
let myIdentity: <T>(arg: T) => T = identity
//We can also write the generic type as a call signature of an object literal type:
let myIdentity2: {<T>(arg:T):T} = identity
interface IdentityFnType{
  <T>(arg: T):T
}
let myIdentity3:IdentityFnType = identity

interface GenericIdentityFnType<T>{
  (arg:T):T
}

let myIdentity4: GenericIdentityFnType<string> = identity
//Generic Constraints
//有时候我们希望某个参数只要符合一定的条件就通过检验 比如上面的arg 我们希望这个参数 只要有个.length属性就行

interface Lengthwise{
  length: number
}
function identity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
identity2('a')
identity2({ length: 1, name: 'identity2' })
//Using Type Parameters in Generic Constraints
// 当我们想要获取一个对象上的属性的时候 希望obj[key] 的这个key可以限定在obj的keys里
function getProperty<T, K extends keyof T>(obj: T, key: K):T[K] {
  return obj[key]
}
let person = {
  name: 'bl',
  age: '16'
}
getProperty(person, 'name')
// getProperty(person,'test') 报错

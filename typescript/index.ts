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

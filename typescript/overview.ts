//Template Literal Types
type VerticalAlignment = 'top' | 'middle' | 'bottom'
type HorizontalAlignment = 'left' | 'center' | 'right'

type Align = `${VerticalAlignment}-${HorizontalAlignment}`

//牛逼应用
type PropEventSource<T> = {
  on(eventName: `${string & keyof T}Changed`, callback: () => void)
}
declare function mackWatchedObject<T>(obj: T): T & SuperPropEventSource<T>
let person = mackWatchedObject({
  firstName: 'bl',
  age: 88,
  location: '上海',
})

person.on('firstNameChanged', (newName) => {
  console.log(`new name is ${newName.toUpperCase()}`)
})

type SuperPropEventSource<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (newValue: T[K]) => void
  )
}

type EnthusiasticGreeting<T extends string> = `${Uppercase<T>}`

type HELLO = EnthusiasticGreeting<'hello'>

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}
interface Person {
  name: string
  age: number
  location: string
}
type a = {
  name: string
  0: 2
}
type b = {
  age: number
}
type test = a & b
type test2 = string & keyof a
var c: test = {
  name: 'aa',
  age: 1,
  0: 2,
}
type LazyPerson = Getters<Person>
//   ^ = type LazyPerson = {
//       getName: () => string;
//       getAge: () => number;
//       getLocation: () => string;
//   }

type OmitPerson = Omit<Person, 'name'>

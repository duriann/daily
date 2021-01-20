/**
 * this page lists some of the more advanced ways in which you can model types
 * it works in tandem with the Utility Types doc which includes types which are
 * included in TypeScript and available globally
 */

function f(x: number, y?: number) {
  return x + (y ?? 0)
}
console.log(f(1,undefined))

type Container<T> = {value: T}

let b:Container<number> = { value: 1}


type LinkedList<Type> = Type & {next: LinkedList<Type>}
interface Person{
  name: string
}
declare function getDriversLicenseQueue(): LinkedList<Person>
let people = getDriversLicenseQueue()
people.next.name
console.log(people)

//Polymorphic this types


//index types
//With index types,you can get the compiler to check code that uses dynamic property names.

function pluck(obj, propertyNames) {
  return propertyNames.map(n=>obj[n])
}
function pluck2<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][]{
  return propertyNames.map(k=>o[k])
}
interface Car{
  manufacturer: string
  model: string
  year: number
}
let taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014
}
let makeAndModel = pluck2(taxi, ['manufacturer', 'year'])

//Mapped types 一个常见的任务是让一个现有的类型里的每一项属性变成可选
interface PersonSubset{
  name?: string
  age?: number
}
type PartialDemo<T> = {
  [P in keyof T]?: T[P]
}
type Car2 = PartialDemo<Car>

type Keys = 'option1' | 'option2'
type Flags = {
  [K in Keys]: boolean
}
interface Flags2{
  option1: boolean
  option2: boolean
}
let a: Flags = {
  option1: true,
  option2: false
}
type OptionalFlags = Partial<Flags>
//从T中删除可分配给U的类型
type Diff<T, U> = T extends U ? never : T
//从T中删除不可分配给U的类型
type Filter<T, U> = T extends U ? T : never
type T1 = Diff<'a' | 'b' | 'c' | 'd', 'b' | 'd'>
//从T中删除 null 和 undefined
type NotNullable<T> = Diff<T, null | undefined>
type T5 = NotNullable<string | number | undefined>

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]
interface Part {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName: string): void
}
type P1 = FunctionPropertyNames<Part>

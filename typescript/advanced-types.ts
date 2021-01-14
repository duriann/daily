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

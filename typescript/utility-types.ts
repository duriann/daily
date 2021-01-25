//Record<Keys,Type>
interface PageInfo {
  title: string;
}
type Page = "home" | "about" | "contact";
const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
}

type FakeRecord<T extends keyof any, P> = {
  [K in T]:P
}
type T = FakeRecord<Page, PageInfo>

//Pick<Type,Keys>
//Constructs a type by picking the set of properties Keys from Type
interface Todo{
  title: string
  desc: string
  completed: boolean
}
type TodoPrev = Pick<Todo, 'title' | 'completed'>

type FakePick<T, K extends keyof T> = {
  [k in K]:T[k]
}
type TestFakePick = FakePick<Todo, 'completed' | 'desc'>

//Omit<Type,keys>
//Constructs a type by picking all properties from Type and then removing Keys

type OmitTodo = Omit<Todo, 'desc'>
type FakeOmit<T, P extends keyof T > = {
  [k in FakeExclude<keyof T,P>]:T[k]
}
type TestFakeOmit = FakeOmit<Todo, 'desc' | 'completed'>

//Exclude<Type,ExcludedUnion>
//Constructs a type by excluding from Type all union members that are assignable to ExcludeUnion
type FakeExclude<T, P> = T extends P ? never : T
type TestFakeExclude = FakeExclude<string | number, string>

//Extract<Type,Union>
//Constructs a type by extracting from Type all union members that are assignable to Union
type TestExtract = Extract<'a' | 'b' | 'c', 'a' | 'f'>
type FakeExtract<T,P> = T extends P ? T:never
type TestFakeExtract = FakeExtract<'a' | 'b' | 'c', 'a' | 'c'>

//NonNullable<Type>
//Constructs a type by excluding null and undefined from Type
type FakeNonNullable<T> = T extends null | undefined ? never : T
type TestFakeNonNullable = FakeNonNullable<string | number | undefined>
type TestFakeNonNullable2 = FakeNonNullable<string[] | null | undefined>

//Parameters<Type>
//Constructs a tuple type from the types used in the parameters of a function type Type.
declare function f1(arg: { a: number; b: string }): void
type FakeParameters<T> = T extends (...args: infer P) => any ? P : never
type TestFakeParameters = FakeParameters<(s:string)=>void>
type TestFakeParameters2 = FakeParameters<typeof f1 >
type TestFakeParameters3 = FakeParameters<<T>(arg: T) => T>
type TestFakeParameters4 = FakeParameters<any>

//ConstructorParameters<Type>
//Contructs a tuple or array type from the types of a constructor function type. It produces a tuple type with
//all parameter types(or the type never if Type is not a function)
type T0 = ConstructorParameters<ErrorConstructor>;
type FakeConstructorParameters<T> = T extends new(...arg: infer P)=>any?P:never
type TestFakeConstructorParameters = FakeConstructorParameters<ErrorConstructor>

//ReturnType<Type>
//Constructs a type consisting of the return type of function Type

declare function f1(): { a: number, b: string }
type FakeReturnType<T extends (...arg: any)=> any > = T extends (...arg:any)=>infer R ? R : never
type TestFakeReturnType = FakeReturnType<typeof f1>
type TestFakeReturnType2 = FakeReturnType<()=>string>
type TestFakeReturnType3 = FakeReturnType<<T>()=>T>

//InstanceType<Type>
//Constructs a type consisting of the instance type of a constructor function in Type
type FakeInstanceType<T extends new (...args: any)=>any> = T extends new (...args: any)=> infer R?R:never
class C {
  y = 0;
  x = 0
}
type TestFakeInstanceType = FakeInstanceType<typeof C>

//Required<Type>
//Constructs a type consisting of all properties of Type set to required. the opposite of Partial
type FakeRequired<T> = {
  [K in keyof T]-?: T[K]
}
interface Props{
  name?: string
  age?:number
}
type TestFakeRequired = FakeRequired<Props>

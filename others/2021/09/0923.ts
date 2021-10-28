/**
 * 定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的
 */
type Foo = {
  a: number
  b?: string
  c: boolean
}

//1
type SetOptional<T, Q extends keyof T, S = Partial<Pick<T, Q>> & Omit<T, Q>> = {
  [k in keyof S]: S[k]
}
// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>
//2

type Simplify<T> = {
  [k in keyof T]: T[k]
}
type SetOptional2<T, P extends keyof T> = Simplify<
  Partial<Pick<T, P>> & Omit<T, P>
>

// 测试用例2
type SomeOptional2 = SetOptional<Foo, 'a' | 'b'>
// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean;
// }

//2定义一个 ConditionalPick 工具类型，支持根据指定的 Condition 条件来生成新的类型
interface Example {
  a: string
  b: string | number
  c: () => void
  d: {}
  f: string | number | boolean
}
/**
 * 
  测试用例：
  type StringKeysOnly = ConditionalPick<Example, string>;
  {a: string}
**/
type ConditionalPick<T, Q> = {
  [k in keyof T as T[k] extends Q ? k : never]: T[k]
}
type StringKeysOnly = ConditionalPick<Example, string | number | {}>

/**
 * 
 * 
作者：阿宝哥
链接：https://juejin.cn/post/7009046640308781063
来源：掘金
 * 定义一个工具类型 AppendArgument，为已有的函数类型增加指定类型的参数，新增的参数名是 x，将作为新函数类型的第一个参数。
 * 具体的使用示例如下所示：
type Fn = (a: number, b: string) => number
type AppendArgument<F, A> = // 你的实现代码

type FinalFn = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number

 * 
 */
type Fn = (a: number, b: string) => number
type FnMethodType<F> = F extends (...arg: infer P) => any ? P : never
type FnReturnType<F> = F extends (...arg: any) => infer P ? P : never

type test1 = FnMethodType<Fn>
type test2 = FnReturnType<Fn>
type AppendArgument<F, A> = (x: A, ...arg: FnMethodType<F>) => FnReturnType<F>
type testAppendArgument = AppendArgument<Fn, string>

/**
 * 第六题

 * 定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：
type NaiveFlat<T extends any[]> = // 你的实现代码

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

 */

type GetArrayEle<T> = {
  [k in keyof T & number]: T[k]
}[keyof T & number]
type TestGetArrayEle = GetArrayEle<[[number, boolean], [[string]]]>
type FlatArray<T> = T extends Array<infer p> ? p : T
type DeepFlatArray<T> = T extends Array<infer p> ? DeepFlatArray<p> : T

type TestFlatArray = FlatArray<TestGetArrayEle>
type TestDeepFlatArray = DeepFlatArray<[['a'], ['b', ['c']], ['d']]>

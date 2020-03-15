//类型别名用来给一个类型起个新名字

type Name = string
type NameResolver = () => string
type NameOrNameResolver = Name | NameResolver
function getName(n: NameOrNameResolver): Name {
    if(typeof n === "string"){
        return n
    }
    return n()
}
getName(() => 'bl')
// 类型别名常用于联合类型

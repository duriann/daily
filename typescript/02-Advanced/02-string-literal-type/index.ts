//字符串字面量类型用来约束取值只能是某几个字符串中的一个。

type EventNames = 'click' | 'dbclick'

function handleEvent(ele: Element,even: EventNames) {
    //do something
}

handleEvent(document.getElementById('app'),'click')
//handleEvent(document.getElementById('app'),'mouseover') Argument of type '"mouseover"' is not assignable to parameter of type 'EventNames'.
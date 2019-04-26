let obj = {}
Object.defineProperty(obj,'name',{
  //defineProperty设置的属性 默认是不可枚举 不可配置 不可更改的
  // enumerable: true,
  set(value){
    console.log('set name', value)
    this._name = value
  },
  get(){
    return this._name
  }
})

delete obj.name//删除不了
console.log(Object.keys(obj));//[]
console.log(obj)//{}
console.log(Object.getOwnPropertyNames(obj))//[ 'name' ]




export let name = 'bl'

let age = 12
// export age 报错

export let sayHi = ()=>{
  console.log(name,'---',age)
}

export {
  age
}
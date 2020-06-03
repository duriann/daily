function deepclone(target){
  const clone = Array.isArray(target) ? [] : {}
  if(typeof target === 'object' && target!==null){
    for(key in target){
      if(target.hasOwnProperty(key)){
        clone[key] = deepclone(target[key])
      }
    }
    return clone
  }else{
    return target
  }
}


const a = {
  name: 'bl',
  age: 11,
  hobby: ['吃饭','睡觉']
}

const b = deepclone(a)
b.hobby.push('打豆豆')
console.log(b,a);
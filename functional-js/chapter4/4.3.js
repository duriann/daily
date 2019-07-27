let _ = require('underscore')

function checker(){
  let validators = _.toArray(arguments)
  return function(obj){
    return _.reduce(validators,function(errs,check){
      if(check(obj)){
        return errs
      }else{
        return _.chain(errs).push(check.message).value()
      }
    },[])
  }
}
function always(value){
  return function(){
    return !!value
  }
}

let alwaysPasses = checker(always(true),always(true))
let alwaysPassesRes = alwaysPasses({})
console.log('alwaysPassesRes ',alwaysPassesRes);

let fails = always(false)
fails.message = 'a failure in life'
let alwaysFails = checker(fails)
let alwaysFailsRes = alwaysFails({})
console.log('alwaysFails ', alwaysFailsRes)

function validator(message,fun){
  let f = function(){
    return fun.apply(fun,arguments)
  }
  f['message'] = message
  return f
}
let gonnalFail = checker(validator('失败啦',always(false)))
let gonnalFailRes = gonnalFail([1,2,3])
console.log('gonnalFailRes ',gonnalFailRes)

function aMap(obj){
  return _.isObject(obj)
}
let checkAmap = checker(validator('must be a map',aMap))
let checkAmapRes = checkAmap(1)
console.log('checkAmapRes ',checkAmapRes)

function cat(){
  let head = _.first(arguments)
  if(head){
    return head.concat.apply(head,_.rest(arguments))
  }
  return []
}

function hasKeys(){
  let KEYS = _.toArray(arguments)
  let fun = function(obj){
    return _.every(KEYS,function(k){
      return _.has(obj,k)
    })
  }
  fun.message = cat(['must have values for keys: '], KEYS).join(' ')
  return fun
}

let checkKeys = checker(validator('must be a map',aMap),hasKeys('msg','type'))
console.log('checkKeys({})',checkKeys({}));
console.log('checkKeys(1)',checkKeys(1));

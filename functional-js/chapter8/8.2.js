let _ = require('underscore')
let Utils = require('../utils')

function pipeline(seed){
  return _.reduce(_.rest(arguments),function(l,r){
    return r(l)
  },seed)
}
console.log(pipeline(22,function(n){
  return n+1
}));

console.log([].slice.call([1,2,3],1))
function fifth(a){
  return pipeline(a,_.rest,_.rest,_.rest,_.rest,_.first)
}
console.log(fifth([1,2,3,4,5]));
function negativeFifth(a){
  return pipeline(a,fifth,function(n){
    return -n
  })
}
console.log(negativeFifth([1,2,3,4,5]));
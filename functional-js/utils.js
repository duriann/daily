let _ = require('underscore')

function existy(x){
  return x != null
}
function cat(){
  let head = _.first(arguments)
  if(head){
    return head.concat.apply(head,_.rest(arguments))
  }
  return []
}
function construct(head,tail){
  return cat([head],tail)
}

// console.log(cat([2,3],'3',[32,[45,[67]]],2,3)) [ 2, 3, '3', 32, [ 45, [ 67 ] ], 2, 3 ]
module.exports = {
  existy,
  cat,
  construct
}
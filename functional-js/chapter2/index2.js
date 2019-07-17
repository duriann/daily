const _ = require('underscore')

function cat(){
  let head = _.first(arguments)
  if(head){
    return head.concat.apply(head,_.rest(arguments))
  }
  return []
}

let res = cat([1,2,3],[4,5],[6])
console.log('res', res);
// let cs = [1,2,3].concat([[4,5,6],[7,8]])
// console.log('cs', cs)
// console.log(_.toArray([1,2,3]));

function construct(head,tail){
  return cat([head],tail)
}
let cres = construct(42,[1,2,3])
console.log('cres', cres)

function mapcat(fun,coll){
  return cat.apply(null,_.map(coll,fun))
}
let mapcatres = mapcat((item)=>{
  return construct(item,[','])
},[1,2,3])
console.log('mapcatres', mapcatres)
function butLast(arr){
  return _.toArray(arr).slice(0,-1)
}

function interpose(inter,coll){
  return butLast(mapcat(item=>construct(item,[inter]),coll))
}

let intres = interpose('bl',[1,2,3])
console.log('intres', intres)

console.log(_.range(2))
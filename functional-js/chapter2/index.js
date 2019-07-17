const _ = require('underscore')

let res = _.find(['a',2,'b','c',1], _.isNumber)
console.log('res:', res);

function complement(pred){
  return function(){
    return !pred.apply(null,_.toArray(arguments))
  }
}

let res2 = _.find(['a',2,'b','c',1],complement(_.isNumber))
console.log('res2: ', res2);

let people = [{name: 'bl',age: 18},{name: 'hx',age: 16}]
let sortPeople = _.sortBy(people,p=>p.age)
console.log('sortPeople',sortPeople)

let originSort = people.sort((p,q)=>p.age>q.age)
console.log('originSort',originSort)
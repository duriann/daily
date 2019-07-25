let _ = require('underscore')


//3.5.3 闭包的抽象
function plucker(FIELD){
  return function(obj){
    return obj && obj[FIELD]
  }
}
let best = {
  title: 'functional js',
  author: 'bl'
}
let getTitle = plucker('title')

let title = getTitle(best)
console.log('title: ', title);

let books = [{title: 'bl'},{stars: 5},{title: 'hx'}]
let titles = _.filter(books, (item,index,books)=>{
  if(item['title']){
    return item
  } 
})
console.log('titles ',titles);
let titles2 = _.filter(books,getTitle)
console.log('titles2 ',titles2)
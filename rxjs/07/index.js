//operator

const rxjs = require('rxjs')
let people = rxjs.of('bl','cx')

function map(source,callback){
  return rxjs.Observable.create(observer=>{
    return source.subscribe(
      value=>{
        try{
          observer.next(callback(value))
        }catch(e){
          observer.error(e)
        }
      },
      err=>observer.err(err),
      ()=>observer.complete()
    )
  })
}
const helloPeople = map(people,item=>item+=' Hello')
helloPeople.subscribe(console.log)

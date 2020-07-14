

function a(){
 return new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log(1)
    // resolve(1)
  },5000);
 
 })
}
function b(){
  console.log(2)
  return Promise.resolve(2)
}

async function c(){
  
  await a()
 console.log(2)
  
}
c()
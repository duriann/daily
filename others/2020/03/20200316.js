let arr = [
  {id: '8080000006977000000', acl: ['READ', 'READ_ACP', 'WRITE_ACP']},
  {id: '8080000006977000000', acl: ['TEST', 'HEHE']},
  {id: '7300124994210401444', acl: ['READ', 'READ_ACP']},
  {id: '6666666666666666666', acl: 'READ'},
]

// {id: "8080000006977000000", acl: "READ"}
// {id: "8080000006977000000", acl: "READ_ACP"}
// {id: "8080000006977000000", acl: "WRITE_ACP"}

let res = arr.reduce((prev,current,currentIndex)=>{
  if(Array.isArray(current['acl'])){
    return prev.concat(...(current['acl'].map(item=>{
      return {
        id: current['id'],
        acl: item
      }
    })))
  }
  return prev.concat([current]) 
},[])
console.log('res',res);
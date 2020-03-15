let arr = [
  { id: '8080000006977000000', acl: 'READ' },

  { id: '8080000006977000000', acl: 'READ_ACP' },

  { id: '8080000006977000000', acl: 'WRITE_ACP' },

  { id: '950e73ebba154ffcb3d866f9681c25c1', acl: 'FULL_CONTROL' },

  { id: 'Everyone', acl: 'READ_ACP' },

  { id: 'Everyone', acl: 'WRITE_ACP' },
];
/**
  [ { id: '8080000006977000000',
    acl: [ 'READ', 'READ_ACP', 'WRITE_ACP' ] },
  { id: '950e73ebba154ffcb3d866f9681c25c1',
    acl: [ 'FULL_CONTROL' ] },
  { id: 'Everyone', acl: [ 'READ_ACP', 'WRITE_ACP' ] } ]
 */

 let res = arr.reduce((prev,current)=>{
  let exit = prev.filter(item=>item.id === current.id)
  if(exit.length){
    exit[0]['acl'] = [...(exit[0]['acl']),current['acl']]
    return Array.from(new Set([...prev,...exit]))
  }
  current['acl'] = [current['acl']]
  return Array.from(new Set([...prev,current]))
 },[])
 console.log('res',res);
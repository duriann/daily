let obj = {
  shopName: "上海普陀店",
  shopCode: "9103",
  shopId: 2,
  applyType: 189,
  applyTypeName: "办公费用",
  applyTypeCode: "applyType",
  subType: 206,
}

let str = ''
Object.keys(obj).map(k=>{
  str+=k+'='+obj[k]+'&'
})
str = str.substr(0,str.length -1)
console.log(str);
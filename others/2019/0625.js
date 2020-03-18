function ajax(method, url, data) {
  return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest, params = [];
      xhr.responseType = 'json';// 指定返回类型
       
      if (data) {// 将参数编码成表单的键值对形式
          for (let k in data) params.push(`${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`);
          data = params.join('&');
      }
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');// 设置content-type
      xhr.withCredentials = true;// 支持跨域发送cookies
      xhr.send(data);
      xhr.onload = () => {
        if(xhr.status === 200){
          resolve(xhr.response)
        }else{
          reject()
        }
    };
  })
}
async function get(){
  try{
    let res = await ajax('post','http://example.com/path/port1.json',{
    param1: 'parma1',
    param2: 'param2'
  })
  let data = await ajax('post','http://example.com/path/port2.json',{
    res
  })
  console.log('成功');
  }catch(e){
    console.log('失败')
  }
  
}
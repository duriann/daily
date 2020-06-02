const express = require('express')

const app = express()

app.get('/hello',(req,res)=>{
  console.log('req',req.params,req.query);
  res.send(`${req.query.callback}({a:1})`);
})
app.listen(9999,()=>{
  console.log('启动啦');
})
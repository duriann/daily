
for(let i = 20000000;i<=21000000;i++){
  let qian = parseInt(i/1000)%10
  let bai = parseInt(i/100)%10
  if(qian > 1 ||  bai > 2 || qian + bai < 1){
    continue
  }
  if((i + '').split('').reverse().join('') == i){
    console.log('适合领证的日子:',i);
  }
}

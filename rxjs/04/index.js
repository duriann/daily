//延迟运算 layz evaluation

function* getNunbers(words){
  for (const word of words) {
    if(/^[0-9]+$/.test(word)){
      yield parseInt(word)
    }
  }
}

const iterator = getNunbers('放假12天')
console.log(iterator.next());
console.log(iterator.next());

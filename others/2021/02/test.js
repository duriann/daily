const res = 'asdfasdf'.split('').sort((a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0);
});
console.log(res);

var obj = {
  a: 1,
};
for (var k in obj) {
  console.log(k);
}

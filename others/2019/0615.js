let components = {
  Foo: {
    a:1
  },
  Bar: {
    b:1
  },
}
// for (const component of components) {
//   console.log(component)
// }

for(let c in components){
  console.log(components[c]);
}
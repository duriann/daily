var a = 1;
if (true) {
  console.log(a);
  function a() {}
  console.log(a);
  a = 21;
  console.log(a);
}

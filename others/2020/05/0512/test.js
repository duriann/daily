function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log(1);
sleep(3000).then((res) => {
  console.log(3);
});
console.log(2);

(async function () {
  console.log("Do some thing, " + new Date());
  await sleep(3000);
  console.log("Do other things, " + new Date());
}());

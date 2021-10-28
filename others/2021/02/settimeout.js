// const task = [];
// for (var i = 0; i < 5; i++) {
//   task.push(
//     new Promise((resolve) => {
//       ((j) => {
//         setTimeout(function () {
//           console.log(new Date(), j);
//           resolve();
//         }, 1000 * j);
//       })(i);
//     }),
//   );
// }
// // console.log(new Date(), i);

// Promise.all(task).then((res) => {
//   console.log('~');
// });

var promise = Promise.resolve();
const output = (i) => {
  promise = promise.then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 1000);
    });
  });
  console.log('promise', promise);
};
for (var i = 0; i < 5; i++) {
  output(i);
}

// @ts-nocheck

Promise.CustomAll = function (promise: []) {
  return new Promise((resolve, rejevt) => {
    let count = 0;
    let result = [];
    for (let i = 0; i < promise.length; i++) {
      promise[i]
        .then((res) => {
          count++;
          result[i] = res;
          if (count == promise.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          console.log("err", 1);
          rejevt(err);
        });
    }
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.CustomAll([p1, p2])
  .then((res) => {
    console.log("11", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
export {};

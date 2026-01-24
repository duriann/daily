class MyPromise {
  state = "pending";
  value = undefined;
  reson = undefined;
  onFulfilledCallbacks = [];
  onRejectdCallbacks = [];

  constructor(executor) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
      this.onFulfilledCallbacks.forEach((cb) => cb());
    }
  }
  reject(reson) {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reson = reson;
    }
  }
  then(resolve, reject?) {}
}

const p = new MyPromise((res) => {
  res(100);
});
const p2 = new MyPromise((res) => {
  setTimeout(() => {
    res(100);
  }, 5000);
});
p.then((res) => console.log(res));

const promise = new Promise((res) => res(1));

promise.then().then(console.log);
console.log(12312313123123213121);

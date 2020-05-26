function debounce(timeout, fn) {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);
    timeId = setTimeout(function () {
      fn.apply(this, args);
    }, timeout);
  };
}

const dfn = debounce(3000, function () {
  console.log(1);
});
dfn();
dfn();

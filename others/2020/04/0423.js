// q: 5 return [b,i,p,q]
// m: 100 return null
const obj = {
  a: {
    c: {
      w: 2,
      r: {
        q: 4,
      },
    },
  },
  b: {
    h: 4,
    i: {
      p: {
        q: 5,
      },
    },
  },
  c: {
    x: 2
  }
};

function findKey(o, key, path = [],arr=[]) {
  console.log(o,key,path);
  if (Object.prototype.toString.call(o) === "[object Object]") {
    const keys = Object.keys(o);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]
      if (keys[i] === key) {
        console.log('找到了',key,path);
        return arr = [...path, keys[i]];
      }
      return findKey(o[k], key, [...path,k]);
    }
  }
}
console.log(findKey(obj, "x"));

function dfs (obj, targetKey, targetValue) {
  let path = [];
  let res = null;
  const isObj = (v) => {
    return Object.prototype.toString.call(v) === "[object Object]"
  }
  const helper = (obj) => {
    if (isObj(obj)) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const element = obj[key];
          if (key === targetKey && element === targetValue) {
            path.push(targetKey);
            res = [...path];
            return path;
          }
          if (isObj(element)) {
            path.push(key);
            helper(element);
          }
        }
      }
      path = [];
    }
  }
  helper(obj);
  return res;
}
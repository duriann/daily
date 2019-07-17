function splat(fn) {
	return function (arr) {
		 return fn.apply(null,arr)
	}
}

let add = splat((a,b)=>a+b)
console.log(add([1,2]))

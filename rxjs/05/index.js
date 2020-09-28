const rxjs = require('rxjs')


var observable1 = rxjs.Observable
	.create(function(observer) {
		observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
		observer.next('Anna');
	})

console.log('start');
observable1.subscribe(function(value) {
	console.log(value);
});
console.log('end');

console.log('=========================分割线==========================');
const observable = rxjs.Observable.create(function(observer){
  observer.next('bl')
  observer.next('cx')
  observer.complete()
  observer.next('hx')
})
var observer = {
	next: function(value) {
		console.log(value);
	},
	error: function(error) {
		console.log(error)
	},
	complete: function() {
		console.log('complete')
	}
}
// 用我们定义好的观察者，来订阅这个 observable
observable.subscribe(observer)

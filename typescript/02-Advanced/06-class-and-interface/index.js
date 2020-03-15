//接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。
//接口的另一个用途，对类的一部分行为进行抽象。
var __extends = (this && this.__extends) || (function () {
	var extendStatics = function (d, b) {
		extendStatics = Object.setPrototypeOf ||
			({__proto__: []} instanceof Array && function (d, b) {
				d.__proto__ = b;
			}) ||
			function (d, b) {
				for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
			};
		return extendStatics(d, b);
	};
	return function (d, b) {
		extendStatics(d, b);
		
		function __() {
			this.constructor = d;
		}
		
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
})();
var Door = /** @class */ (function () {
	function Door() {
	}
	
	return Door;
}());
var safeDoor = /** @class */ (function (_super) {
	__extends(safeDoor, _super);
	
	function safeDoor() {
		return _super !== null && _super.apply(this, arguments) || this;
	}
	
	safeDoor.prototype.alert = function () {
		console.log('warn!!');
	};
	return safeDoor;
}(Door));
var Car = /** @class */ (function () {
	function Car() {
	}
	
	Car.prototype.alert = function () {
		console.log('didi!!');
	};
	return Car;
}());
var d = new safeDoor();
d.alert();

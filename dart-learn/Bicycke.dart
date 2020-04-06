
class Bicycle {
  int cadence;
  int _speed = 0;
  int gear;
  Bicycle(this.cadence, this.gear);

  int get speed => _speed;

  void addSpeed(nums){
    this._speed +=nums;
  }
  @override
  String toString() {
    // TODO: implement toString
    return 'bike: ${speed}';
  }
}

void main() {
  var bike = new Bicycle(2, 1);
  bike.addSpeed(10);
  print(bike);
}

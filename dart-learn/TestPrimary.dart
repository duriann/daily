import 'Bicycke.dart';

main(List<String> args) {
  Bicycle by = new Bicycle(10, 1);
  by.addSpeed(1);
  print(by.speed);
}
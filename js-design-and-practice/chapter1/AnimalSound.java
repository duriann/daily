abstract class Animal{
  public abstract void say();
}
class Duck extends Animal{
  @Override
  public void say() {
    System.out.println("嘎嘎嘎");
  }
}
class Chiken extends Animal{
  @Override
  public void say() {
    System.out.println("咯咯咯");
  }
}

public class AnimalSound{
  public void makeSound(Animal animal){
    animal.say();
  }
  public static void main(String[] args) {
    AnimalSound animalSound = new AnimalSound();
    animalSound.makeSound(new Duck());
  }
}

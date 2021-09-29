//接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。
//接口的另一个用途，对类的一部分行为进行抽象。

interface Alarm {
  alert(): void
}

class Door {}

class safeDoor extends Door implements Alarm {
  alert(): void {
    console.log('warn!!')
  }
}

class Car implements Alarm {
  alert(): void {
    console.log('didi!!')
  }
}

let d = new safeDoor()
d.alert()

interface LightableAlarm extends Alarm {
  on()
  off()
}

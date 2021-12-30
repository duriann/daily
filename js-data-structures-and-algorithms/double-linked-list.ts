import LinkedList from './linked-list'
import { DoubleNode } from './models/linked-list-models'
import { defaultEquals } from './utils'

export default class DoubleLink extends LinkedList<T> {
  protected head: DoubleNode<T> | undefined
  protected tail: DoubleNode<T> | undefined
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.size()) {
      const node = new DoubleNode(element)
      if (index === 0) {
        const head = this.head
        if (head == null) {
          this.head = node
          this.tail = node
        } else {
          this.head = node
          node.next = head
          head.prev = node
          // this.tail = head  这里不需要再设置tail 是因为上面设置过了。。
        }
      }
    }
    return false
  }
}

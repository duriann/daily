import { defaultEquals } from '../utils/index'
import { Node } from '../models/link-list-modal'

export default class LinkedList {
  private count: number
  private head: Node | null
  private equalsFn: typeof defaultEquals
  constructor(equalsFn = defaultEquals) {
    this.count = 0 // {2}
    this.head = null // {3}
    this.equalsFn = equalsFn // {4}
  }

  push(element: any) {
    const node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 从特定位置移除一个元素 返回那个元素
  removeAt(index: number) {
    let current = this.head
    if (index >= 0 && index <= this.count) {
      if (index == 0) {
        this.head = current == null ? null : current.next
      } else {
        let prev = this.getElementAt(index - 1)
        current = prev!.next
        prev.next = current.next
      }
      this.count--
      return current.element
    }
    return null
  }

  // 获取特定位置的元素
  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  // 任意位置插入元素
  insert(element: any, index: number) {
    const node = new Node(element)
    if (index >= 0 && index <= this.count) {
      if (index == 0) {
        const head = this.head
        this.head = element
        this.head.next = head
      } else {
        let prev = this.getElementAt(index - 1)
        let current = prev.next
        prev.next = node
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }

  // 查找元素位置
  indexOf(element: any) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // 移除元素
  remove(element: any) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}

const list = new LinkedList()
list.push(15)
list.push(10)
list.push(12)
list.removeAt(1)
list.insert(11, 1)
console.log(list.toString())

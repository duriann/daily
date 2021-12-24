export class Node {
  public element: any
  public next: Node

  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

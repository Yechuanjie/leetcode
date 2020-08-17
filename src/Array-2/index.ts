class LinkList {
  val: number;
  next: LinkList | null;
  constructor(val?: number, next?: LinkList | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: LinkList | null, l2: LinkList | null): LinkList | null {
  return null;
}

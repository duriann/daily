let origin = [
  {
    item: "aa",
    tag: "4",
    creditTag: "4",
  },
  {
    item: "bb",
    tag: "3",
    creditTag: "3",
  },
  {
    item: "aa",
    tag: "3",
    creditTag: "3",
  },
  {
    item: "bb",
    tag: "4",
    creditTag: "4",
  },
  {
    item: "bb",
    tag: "6",
    creditTag: "6",
  },
  {
    item: 'cc',
    tag: '7',
    creditTag: '7'
  }
];
/**
 * 期望 [
 * {
 *   item: 'aa',tag:['4','3'],creditTag: ['4','3']
 * }
 * ]
 *
 *  */
console.log(test(origin));
function test(data) {
  return data.reduce((prev, current) => {
    const i = prev.findIndex((p) => p.item === current.item);
    if (~i) {
      let tag = prev[i].tag
      let creditTag = prev[i].creditTag
      prev[i].tag = Array.isArray(tag) ? [...tag,current.tag]: [tag,current.tag]
      prev[i].creditTag = Array.isArray(creditTag) ? [...creditTag,current.creditTag]: [creditTag,current.creditTag]
      return prev;
    } 
    return [...prev, current];
  }, []);
}

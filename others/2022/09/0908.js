const data = [
    { value: 17100, name: '3C居家数玩' },
    { value: 410500, name: '3C履约' },
    { value: 450700, ame: '3C运营' },
    { value: 27900, name: '3D视效' },
    {value: 684900,name: '95分',},
    {value: 229300,name: '95分一线',},
    {value: 25500,name: '95分二线',},
    {value: 186700,name: '95分仓',},
    {value: 241000,name: '95分仓储管理',},
    {value: 116400,name: '95分入库',},
]
/**
 * max's half: 342450  513675
 * 占比越小的 区间差越小 区间越接近一半的位置 
 * data [
  { value: [ -325350, 359550 ], name: '3C居家数玩', percent: '1%' },
  { value: [ 68050, 752950 ], name: '3C履约', percent: '17%' },
  { value: [ 108250, 793150 ], name: '3C运营', percent: '19%' },
  { value: [ -314550, 370350 ], name: '3D视效', percent: '1%' },
  { value: [ 342450, 1027350 ], name: '95分', percent: '28%' },
  { value: [ -113150, 571750 ], name: '95分一线', percent: '10%' },
  { value: [ -316950, 367950 ], name: '95分二线', percent: '1%' },
  { value: [ -155750, 529150 ], name: '95分仓', percent: '8%' },
  { value: [ -101450, 583450 ], name: '95分仓储管理', percent: '10%' },
  { value: [ -226050, 458850 ], name: '95分入库', percent: '5%' }
]
 */
function transformData(data) {
    const total = data.reduce((prev, current) => {
        return prev + current.value
    }, 0)
    const max = Math.max(...data.map((d) => d.value))
    const res = data.map((d) => {
        return {
            ...d,
            value: [d.value - max / 2, d.value + max / 2],
            percent: `${parseInt((d.value / total).toFixed(2) * 100)}%`,
        }
    })
    console.log('total', total, max, res)
}
transformData(data)

async function a(msg) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(msg)
    }, 5000)
  )
}
;(async () => {
  try {
    const res = await a('等我')
    console.log('res', res)
  } catch (error) {
    console.log('error', error)
  }
  console.log(22)
})()

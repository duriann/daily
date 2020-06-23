class EndWebpackPlugin{
  constructor(doneCB,failCb){
    this.doneCB = doneCB
    this.failCb = failCb
  }

  apply(compiler){
    compiler.plugin('done',stats=>{
      this.doneCB(stats)
    })

    compiler.plugin('failed',err=>{
      this.failCb(err)
    })
  }
}

module.exports = EndWebpackPlugin
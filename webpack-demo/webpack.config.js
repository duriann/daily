const path = requite('path')

module.export = {
  mode: 'develement',
  entry: './index.js',
  output: {
    path: path.join(__dirname,'disk'),
    filename: 'bundle.js'
  }
}
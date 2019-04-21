
module.exports = function (source) {
  // if(Node全局变量 === '中文') {
  //   source.replace('{{title}}', '中文标题')
  // } else {
  //   source.replace('{{title}}', 'english title')
  // }

  const result = source.replace('echo', 'world');
  this.callback(null, result)
}
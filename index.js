var ejs = require('ejs')
  , through = require('through')

module.exports = function(file) {
  if (!/\.ejs$/.test(file)) return through()

  var buffer = ""

  return through(function write(chunk) {
    buffer += chunk
  }, function end() {
    var template = ejs.compile(buffer, {
        client: true
      , filename: file
    })

    this.queue('module.exports = (' + template + ')')
    this.queue(null)
  })
}

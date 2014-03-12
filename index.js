var ejs = require('ejs')
  , through = require('through')

module.exports = function(file, options) {
  if (!/\.ejs$/.test(file)) return through()

  options = options || {};

  var buffer = ""

  return through(function write(chunk) {
    buffer += chunk
  }, function end() {
    var template = ejs.compile(buffer, {
        client: true
      , debug: options.debug || false
      , compileDebug: options.compileDebug || false
      , filename: file
    })

    this.queue('module.exports = (' + template + ')')
    this.queue(null)
  })
}

# ebsify

[EJS](http://npmjs.org/package/ejs) precompiler for
[Browserify](http://browserify.org).

## Installation ##

``` bash
npm install ebsify
```

## Usage ##

If you're compiling your code from the command-line, include `-t ebsify`:

``` bash
browserify -t ebsify index.js -o bundle.js
```

And then you can use `require()` and get back bundled EJS templates.

``` javascript
var index = require('./views/index.ejs')

document.body.innerHTML = index({ title: 'ejsify' })
```

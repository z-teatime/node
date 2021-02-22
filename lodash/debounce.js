const $ = require('lodash')

const cb = $.debounce(() => {
  console.count('debounce')
}, 1000, {
  // maxWait: 1000,
})

cb()
cb()
cb()
cb()

setTimeout(() => {
  cb()
}, 1100);

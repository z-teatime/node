const $ = require('lodash')

/**
 * 重复调用中, 每次都会被延后, 所以要设置maxWait. !!!
 */

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

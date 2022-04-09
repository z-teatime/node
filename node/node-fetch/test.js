const fetch = require('node-fetch')

fetch("https://jsqpro.link/auth/login", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "crisp-client%2Fsession%2Fc0e9efd9-ab21-48b2-b549-04f12bdf522b=session_a1d0379d-64bb-4305-b177-a4faf7117c2d; cf_clearance=965d191ece512834b034d2bd68d701bed2aad6a2-1623986582-0-150; __cf_bm=40812b57d580825138cf7a33055fa1d70cb9f135-1623986584-1800-Af/8PrIOnfVm7n7EhkcvSrl5b3p/V3mIBAWO3N/syYOD5L5mZj6/nN3BZjGlcioWOjUOPkfa3RKZWPfcE1S5ZkZHwsRNEg7Zq+N7YVOslx8CNR4Y5G9rZ/J4rOz7BG1lUg=="
  },
  "referrer": "https://jsqpro.link/auth/login",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "email=zphua2016%40gmail.com&passwd=8211252hua",
  "method": "POST",
  "mode": "cors"
}).then(res => {
  debugger
}).catch(res => {
  debugger
})

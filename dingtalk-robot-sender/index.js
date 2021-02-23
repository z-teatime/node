/**
 * @file 钉钉机器人发送消息
 * @document https://github.com/x-cold/dingtalk-robot
 */

const ChatBot = require('dingtalk-robot-sender');
// 直接使用 webhook
const robot = new ChatBot({
  webhook: 'https://oapi.dingtalk.com/robot/send?access_token=9747590c0bca4566da970cca54d321788575d0b7d8aec52590a01fe354d559b2'
});

// // 组合 baseUrl 和 accessToken 如果采用加签方式的安全设置，同时填写secret
// const robot = new ChatBot({
//   baseUrl: 'https://oapi.dingtalk.com/robot/send',
//   accessToken: 'xxxxxxxxx',
//   secret: 'xxxxxxxx',
// });

// // 自定义 httpclient
// const robot = new ChatBot({
//   baseUrl: 'https://oapi.dingtalk.com/robot/send',
//   accessToken: 'xxxxxxxxx',
//   secret: 'xxxxxxxx',
//   httpclient: require('urllib')
// });

// 发送钉钉消息
let textContent = {
  "msgtype": "text",
  "text": {
    "content": "我就是我, 是不一样的烟火"
  },
  "at": {
    "atMobiles": [
      "+86-13602629903",
    ],
    "isAtAll": false
  }
}
robot.send(textContent)
  .then((res) => {
    // TODO
    debugger
  });

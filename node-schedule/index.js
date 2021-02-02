const schedule = require("node-schedule");

// 接下来 4 分钟
// schedule.scheduleJob('04 * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

// schedule.scheduleJob(new Date("2021/02/02 10:54:50"), function () {
//   console.log("The answer to life, the universe, and everything!");
// });

const rule = new schedule.RecurrenceRule()
// rule.dayOfWeek = [0, new schedule.Range(1, 5)]
// rule.minute = '*/1' // 不能这么用
// rule.hour = 11
rule.second = new Array(60).fill(1).map((o, index) => index)

// schedule.scheduleJob('*/1 * * * * *', function(){
//   console.log("The answer to life, the universe, and everything!")
// })
schedule.scheduleJob(rule, function(){
  console.log("The answer to life, the universe, and everything!")
})

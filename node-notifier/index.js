const notifier = require('node-notifier')
const schedule = require('node-schedule')

// const rule = new schedule.RecurrenceRule()
// rule.dayOfWeek = [0, new schedule.Range(1, 5)]
// rule.minute = 40
// rule.hour = 13

notifier.notify({
  title: 'My notification',
  message: 'Hello, there!'
})

// schedule.scheduleJob(rule, function(){
//   notifier.notify({
//     title: 'My notification',
//     message: 'Hello, there!'
//   })
// })


// String
// notifier.notify('Message')

// Object
// notifier.notify({
//   title: 'My notification',
//   message: 'Hello, there!'
// })

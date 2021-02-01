const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', port: 465, secure: true, // use SSL
  auth: {
    name: 'Pinghua Zhuang',
    user: "zphua2016",
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: "ybdrzmdxxkfgkqxs",
  },
  proxy: 'http://localhost:7890',
});

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: 'zphua2016@gmail.com',
//     clientId: '646218842683-7mcg968c7tutsc23v6m7qur2g19st3nn.apps.googleusercontent.com',
//     clientSecret: 'vEuKnT2XO4gKIJXdinVijf--',
//     proxy: 'http://localhost:7891',
//     refreshToken: '120',
//     accessToken: '123456',
//   }
// });

const options = (mailOptions = {
  from: "zphua2016@gmail.com", // 接收邮箱
  to: "995382997@qq.com", // 发送邮箱必须与上面开通ssl的邮箱一致
  subject: "邮件测试", // 标题
  //text: 'Hello world?', // text html二者选一
  html: `<h1>这是P标签</h1>`,
})

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("发送失败！邮箱是否正确");
  } else {
    console.log(info);
  }
})

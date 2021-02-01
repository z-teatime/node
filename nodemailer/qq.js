const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "qq", // 使用内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用 SSL
  auth: {
    user: "995382997@qq.com",
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: "dkvwihnvnjrlbeeg",
  },
});

const options = (mailOptions = {
  from: "995382997@qq.com", // 发送邮箱必须与上面开通ssl的邮箱一致
  to: "zphua2016@gmail.com", // 接收邮箱
  subject: "邮件测试", // 标题
  //text: 'Hello world?', // text html二者选一
  html: `
    NODE TEST.
    hello word.
  `,
})

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("发送失败！邮箱是否正确");
    res.send({ state: 210, result: "服务正忙！请等稍后再试！" });
  } else {
    console.log(info);
    res.send({ state: 200, result: "提交成功！请等候我司联系！" });
  }
})

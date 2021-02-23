exports.csrf = {
  enable:false,
  cors = {
    // {string|Function} origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  },
  xframe: {
    enable: false,
  },
  csrf: {
    headerName: 'csrftoken',
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
}

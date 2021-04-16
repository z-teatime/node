const fetch = require('node-fetch')

fetch("https://i.y.qq.com/qzone-music/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&nosign=1&disstid=3796437087&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "none",
    "cookie": "pgv_pvi=6864118784; RK=GGR47IFnHx; ptcz=2584112498692fa18cba7e285574cef4ad264946283bd7d5efa33434761de6f4; pgv_pvid=823478526; pac_uid=0_0ff7d68e5aeb1; ptui_loginuin=995382997; qm_authimgs_id=2; logout_page=dm_loginpage; qm_verifyimagesession=h01dda7157df73bd3f26fecfcf9634aaa8ca73030150bb8a159ec71f129f4ce2a90331938b77884a72f; yqq_stat=0; pgv_info=ssid=s6408759651; ts_refer=ADTAGmyqq; ts_uid=9688236465; _qpsvr_localtk=0.7541461093378496; psrf_qqunionid=; tmeLoginType=2; qqmusic_key=Q_H_L_2CFhQ160eKp8TCRLPhh-MUoEiElRxRfxQoGya9osI0rtwObDc7LTFKEKorqLZ57; psrf_qqopenid=D71D11528A113B960D0D89A70A99C0ED; euin=NKEkoicANKEl; psrf_access_token_expiresAt=1624331251; psrf_musickey_createtime=1616555251; psrf_qqaccess_token=F01BA010662E0E50DE26FFA39D20D9E6; uin=995382997; psrf_qqrefresh_token=30424D1E7EC3A5ADF932D6948E811658; qm_keyst=Q_H_L_2CFhQ160eKp8TCRLPhh-MUoEiElRxRfxQoGya9osI0rtwObDc7LTFKEKorqLZ57; ts_last=y.qq.com/portal/profile.html",
    "referrer": "https://y.qq.com/portal/player.html",
    "host": "y.qq.com",
  },
  "referrer": "https://y.qq.com/portal/player.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res => {
  return res.json()
}).then(res => {
  debugger
}).catch(e => {
  debugger
})

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import sha256 from 'crypto-js/sha256';
import encHex from 'crypto-js/enc-hex';
import qs from 'qs'

const salt = uuidv4();
const curtime = Math.round(new Date().getTime() / 1000);
const appKey = "1b938c8ee553b3df";
const query = "system";
const key = "onFkMmvTI2XaTiJPjcEeqOesScUK4Z3t";
const str1 = appKey + truncate(query) + salt + curtime + key;
const sign = sha256(str1).toString(encHex);
const data = {
  q: query,
  from: "en",
  to: "zh-CHS",
  appKey,
  salt,
  signType: "v3",
  curtime,
  sign,
  strict: true,
}
console.log(sign, 'sign', data, qs.stringify(data))

axios
  .get(`https://openapi.youdao.com/api?${qs.stringify(data)}`)
  .then((res) => {
    debugger;
  })
  .catch((res) => {
    debugger;
  });

function truncate(q) {
  var len = q.length;
  if (len <= 20) return q;
  return q.substring(0, 10) + len + q.substring(len - 10, len);
}

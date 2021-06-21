const puppeteer = require('puppeteer')
const { exec } = require('child_process')
const path = require('path')
const fs=require('fs');
const fetch = require('node-fetch')

async function loaded() {
  exec('taskkill /f /im chrome.exe')
  await new Promise(resolve => setTimeout(resolve, 1000))
  exec('start ./node_modules/puppeteer/.local-chromium/win64-884014/chrome-win/chrome.exe --remote-debugging-port=9222')

  await new Promise(resolve => setTimeout(resolve, 5000))

  // const datadir = path.resolve(__dirname, './tmp/profile/')

  // const browser = await puppeteer.launch({
  //   headless: false,
  //   openInExistingWindow: true,
  //   ignoreHTTPSErrors: true,
  //   // executablePath: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
  //   // executablePath: path.resolve('C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'),
  //   // devtools: true,
  //   userDataDir: datadir,
  //   args: [
  //     // '--proxy-server=http://127.0.0.1:7890'
  //     // '--disable-web-security',
  //     // '--enable-files-cookies',
  //     // '--no-startup-window',
  //     // '--profile-directory="Default"'
  //     // '--guest'
  //     // '--allow-external-pages',
  //     // '--allow-file-access-from-files',
  //     // '--allow-http-background-page',
  //     // '--allow-http-screen-capture',
  //     // '--allow-insecure-localhost',
  //     // '--allow-no-sandbox-job',
  //     // '--allow-running-insecure-content',
  //     // '--allow-ra-in-dev-mode',
  //     // '--app-shell-refresh-token',
  //     // '--start-maximized',
  //     // '--disable-infobars'
  //   ]
  // })

  const browserWSEndpoint = await fetch('http://localhost:9222/json/version', {
    method: 'get'
  }).then(res => res.json())

  console.log('xxxxxxxxxxx', browserWSEndpoint.webSocketDebuggerUrl)

  const browser= await puppeteer.connect({ browserWSEndpoint: browserWSEndpoint.webSocketDebuggerUrl })

  const page = await browser.newPage()

  page.once('load', () => {
    console.log('Page loaded!')
    page.screenshot({ path: `./puppeteer/load-${new Date().valueOf()}.png` })
  })

  await page.goto('https://jsqpro.link/auth/login', {
    // timeout: 500,
    // load: true,
    // networkidle0: true,
    // networkidle2: true,
    // domcontentloaded: true,
  })
  // await page.goto('https://www.baidu.com')

  setTimeout(() => {
    console.log('Page sleep!')
    page.screenshot({ path: `./puppeteer/sleep200-${new Date().valueOf()}.png` })
  }, 200);

  setTimeout(async () => {
    console.log('Page sleep!')
    await page.screenshot({ path: `./puppeteer/sleep-${new Date().valueOf()}.png` })
    await browser.close()
    exec('exit')
  }, 1000 * 5);

  // await page.screenshot({ path: `${new Date().valueOf()}.png` })

  // await browser.close()
}

loaded()

process.on('unhandledRejection', (reason, p) => {
  console.log('Promise: ', p, 'Reason: ', reason)
  // do something
})

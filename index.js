const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser');

app.use(express.json());

let LAST=Date.now()/1000
let numbers = [73, 74, 75]

marked =() => {
  if(!LAST) return true
  if((Date.now()/1000)-LAST < 20*60*60) return true
  return false;
}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.use('/screenshots', express.static('screenshots'))

app.get('/status', async (req, res) => {
  res.send({ marked: marked() });
})

app.post('/api/url', async(req, res) => {
  if(marked()) return res.send({ marked: true })
  const receivedUrl = req.body.url;
  const options = new chrome.Options().headless();
  let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
  try {
   for(const i of numbers) {
    await driver.get(receivedUrl);
    // await driver.get('https://docs.google.com/forms/d/e/1FAIpQLSf0bouK1DVQdXWp8lPprbd9JyZiYlJtWMFqJx-kGEsThaGx6A/viewform');
    await driver.wait(until.titleIs('Attendance'), 6000);
    await sleep(1000);

    await driver.actions()
          .sendKeys(Key.TAB, Key.TAB, Key.TAB)
          .perform()
    await driver.actions()
          .sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)
          .perform()
    await sleep(50);
    await driver.actions()
          .sendKeys(Key.ARROW_DOWN)
          .perform()
    await sleep(50);
    await driver.actions()
          .sendKeys(Key.SPACE)
          .perform()
    await sleep(500)
    await driver.actions().sendKeys(Key.TAB).perform()
    await sleep(50)
    await driver.actions().sendKeys(i.toString()).perform()
    await sleep(50)
    await driver.actions().sendKeys(Key.RETURN).perform();
    await sleep(50)
    await driver.actions().sendKeys(Key.TAB).perform();
    await sleep(50)
        screenshoti = await driver.takeScreenshot();
        // Save the screenshot to a file
        screenshotPath = './screenshots/screenshote'+i+'.png';
        fs.writeFileSync(screenshotPath, screenshoti, 'base64');
        console.log('Screenshot saved:', screenshotPath);
    await driver.actions().sendKeys(Key.RETURN).perform();
        screenshot = await driver.takeScreenshot();
        // Save the screenshot to a file
        screenshotPath = './screenshots/screenshot'+i+'.png';
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log('Screenshot saved:', screenshotPath);
    console.log("marked ", i);
    }
    await sleep(500)
  } catch(e) {
    
  } finally {
    await driver.quit();
  }
  LAST=Date.now()/1000;
  res.send('Attendance Marked succesfully!')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

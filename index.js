const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');

const express = require("express");
const app = express()
const port = 3000

let LAST=Date.now()/1000
let numbers = [73, 74, 75]

marked =() => {
  if(!LAST) return true
  if((Date.now()/1000)-LAST < 20*60*60) return true
  return false;
}

app.get('/status', async (req, res) => {
  res.send({ marked: marked() });
})

app.get('/mark',  async (req, res) => {
  if(marked()) return res.send({ marked: true })
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
   for(const i of numbers) {
    await driver.get('https://docs.google.com/fms/d/e/1FAIpQLSf0bouK1DVQdXWp8lPprbd9JyZiYlJtWMFqJx-kGEsThaGx6A/viewform');
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
    await driver.actions().sendKeys(Key.RETURN).perform();
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

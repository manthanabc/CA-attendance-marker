const {Builder, Browser, By, Key, until, Select} = require('selenium-webdriver');

const express = require("express");
const app = express()
const port = 3000



app.get('/mark',  async (req, res) => {
 res.send('Hello World!')
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// (async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
   let numbers = [73, 74, 75];
   for(const i of numbers) {
    await driver.get('https://docs.google.com/forms/d/e/1FAIpQLSf0bouK1DVQdXWp8lPprbd9JyZiYlJtWMFqJx-kGEsThaGx6A/viewform');
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
  } finally {
    await driver.quit();
  }
// })();
})
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

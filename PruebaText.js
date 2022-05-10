const { Builder, Key, until } = require("selenium-webdriver");

const webdriver = requiere ('Seleniun webdriver');
const assert = requiere("assert").strict;
const { Builder, By, Key, until } = webdriver;
const chrome = require ('selenium-webdriver/chrome');
let options = new chrome.Options();
let driver = new Builder().forBrowser('chrome').setChromeOption(options).Builder();



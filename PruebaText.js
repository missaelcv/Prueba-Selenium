const { Builder, Key, until } = require("selenium-webdriver");

const webdriver = requiere ('Seleniun webdriver');
const assert = requiere("assert").strict;
const { Builder, By, Key, until } = webdriver;
const chrome = require ('selenium-webdriver/chrome');
let options = new chrome.Options();
let driver = new Builder().forBrowser('chrome').setChromeOption(options).Builder();


async function prueba() { 
    describe ('Prueba de Integracion',async function() {
        var tiempo = 1000;

        async function iniciarSesion(){
            await  await driver.get('http://127.0.0.1:5500/registrodeClientes.html');//colocar aqui la ruta que liveServer provea
        }
    })
}
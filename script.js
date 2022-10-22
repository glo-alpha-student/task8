'use strict';

const appData = {

    title: '',
    screens: [],
    adaptive: true,
    services: {},
    screenPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: Math.random() * 99,

    asking: function () {
        appData.title = prompt('Как называется ваш проект?');

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?');
            let price = 0;

            price = +prompt('Сколько будет стоить данная работа?');

            while (!appData.isNumber(price)) {
                price = +prompt('Сколько будет стоить данная работа?');
            }
            appData.screens.push({ id: i, name: name, price: price });
        }
        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;

            price = +prompt('Сколько это будет стоить?');
            while (!appData.isNumber(price)) {
                price = +prompt('Сколько это будет стоить?');
            }

            appData.services[name] = price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');


    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let cry in appData.services) {
            appData.allServicePrices += appData.services[cry];
        }
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },
    getFullPrice: function (variableone, variabletwo) {
        appData.fullPrice = variableone + variabletwo;
    },
    getServicePercentPrices: function (variableone, variabletwo) {
        appData.servicePercentPrice = variableone - Math.ceil((variableone * (variabletwo / 100)));
    },
    getRollbackMessage: function (price) {
        if (price > 30000) {
            return 'Даем скидку в 10%';
        } else if (price > 15000) {
            return 'Даем скидку в 5%';
        } else if (price > 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
    start: function () {
        appData.asking();
        appData.addPrices(); appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.getTitle();
        appData.logger();
    }

};

appData.start();



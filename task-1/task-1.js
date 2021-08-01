// Дано n секунд. Определить сколько это в часах и минутах;
// Пример
// 7260с это 2 часа 1 мнута
let secondEntered = parseInt(prompt("Введитее значение секунд для перевода в часы : минуты", 0));
let hours = parseInt(secondEntered / 3600);
let minutes = parseInt((secondEntered - (hours * 3600)) / 60);
let hoursPrint;
let minutesPrint;
if (hours == 1) hoursPrint = "час";
else if ((hours > 1) && (hours < 5)) hoursPrint = "часа";
else hoursPrint = "часов";
if (minutes == 1) minutesPrint = "минута";
else if ((minutes > 1) && (minutes < 5)) minutesPrint = "минуты";
else minutesPrint = "минут";
alert(secondEntered + "с это " + hours + " " + hoursPrint + " " + minutes + " " + minutesPrint);

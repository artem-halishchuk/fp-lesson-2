// Задача 2. Поклейка комнаты
// Программа расчитывает необходимое количество рулонов
// обоев для поклейки комнаты по данным введенным пользователем.
//     Известно, что комната имеет одинаковые окна и одну дверь.
//     Пользователь вводит:
//      - высоту потолка (в метрах)
//      - ширину комнаты (в метрах)
//      - длину комнаты (в метрах)
//      - к-во окон
//      - высоту окна
//      - ширину окна
//      - высоту двери
//      - ширину двери
let numberRollPrint;

let widthRoll = parseFloat(prompt("Введитее ширину рулона в м", 1));
let lengthRoll = parseFloat(prompt("Введитее длину рулона в м", 10));
let heightRoom = parseFloat(prompt("Введитее высоту потолка в м", 2.5));
let widthRoom = parseFloat(prompt("Введитее ширину комнаты в м", 1));
let lengthRoom = parseFloat(prompt("Введитее длину комнаты в м", 1));
let numberWindows = parseInt(prompt("Введитее количество окон", 1));
let heightWindows = parseFloat(prompt("Введитее высоту окна в м", 1));
let widthWindows = parseFloat(prompt("Введитее ширину окна в м", 0.5));
let heightDor = parseFloat(prompt("Введитее высоту двери в м", 2));
let widthDor = parseFloat(prompt("Введитее ширину двери в м", 0.5));
let squareDor = heightDor * widthDor;
let squareWindows = (heightWindows * widthWindows) * numberWindows;
let squareWall = 2 * ((heightRoom * widthRoom) + (heightRoom * lengthRoom)) - squareDor - squareWindows;
let squareRoll = widthRoll * lengthRoll;
let numberRoll = parseInt(squareWall / squareRoll);
let numberRollAdd = squareWall % squareRoll;
numberRoll += (numberRollAdd > 0) ? 1 : 0;
if (numberRoll == 1) numberRollPrint = "рулон";
else if ((numberRoll > 1) && (numberRoll < 5)) numberRollPrint = "рулона";
else numberRollPrint = "рулонов";
alert("Для поклейки комнаты нужно " + numberRoll + " " + numberRollPrint + ".");


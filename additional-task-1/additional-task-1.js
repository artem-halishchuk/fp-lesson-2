// Грузовой самолет перевозит груз из пункта A в пункт B, осуществляя остановку в пункте C.
// Расход топлива самолета зависит от веса груза следующим образом:
// до 1т - 25л/100км
// до 2т - 30л/100км
// до 3т - 35л/100км
// до 4т - 42л/100км
// до 5т - 50л/100км
// более 5т - не взлетит
// Пользователь вводит объем бака самолета в литрах, исходное количество
// топлива в баке, вес груза и расстояния AC и CB.
// Программа должна выяснить долетит ли самолет и необходима ли дозаправка
// в пункте C и в каком объеме. Учесть что бак не "резиновый"
// (дозаправка может не поместится в бак)
let volumeTank = parseInt(prompt("Введите объем бака самолета (л)", 250));
let startFuel = parseInt(prompt("Введите исходное количество топлива в баке (л)", 40));
let cargoWeight = parseFloat(prompt("Введите вес груза (т)", 2.5));
let distanceAC = parseInt(prompt("Введите расстояния между пунктами AC (км)", 100));
let distanceCB = parseInt(prompt("Введите расстояния между пунктами CB (км)", 200));
let fuelConsumption1T = 25;
let fuelConsumption2T = 30;
let fuelConsumption3T = 35;
let fuelConsumption4T = 42;
let fuelConsumption5T = 50;
let fuelConsumptionCurrent;

if (cargoWeight <= 1 && cargoWeight < 0.01) fuelConsumptionCurrent = fuelConsumption1T;
else if (cargoWeight > 1 && cargoWeight <= 2) fuelConsumptionCurrent = fuelConsumption2T;
else if (cargoWeight > 2 && cargoWeight <= 3) fuelConsumptionCurrent = fuelConsumption3T;
else if (cargoWeight > 3 && cargoWeight <= 4) fuelConsumptionCurrent = fuelConsumption4T;
else if (cargoWeight > 4 && cargoWeight <= 5) fuelConsumptionCurrent = fuelConsumption5T;
else fuelConsumptionCurrent = false;

let fuelRequiredAC = distanceAC*fuelConsumptionCurrent/100; //требуемый объем топлива между пунктами АС
let fuelRequiredCB = distanceCB*fuelConsumptionCurrent/100; //требуемый объем топлива между пунктами СВ
let fuelRequiredAB = fuelRequiredAC + fuelRequiredCB; //требуемый объем топлива между пунктами АВ
let fuelRemainder; // остаток
let refueling = 0; // дозапрака
let freeVolume = 0; // свободный обьем

let messageOk = "Самолет долетит без дозаправки";
let messageNo = "Полет отменяется!";
if (startFuel > fuelRequiredAB) alert(messageOk); //чекам долитит ли без дозапраки между AB
else if (startFuel > fuelRequiredAC) { //чекам долитит ли без дозапраки между AC
    fuelRemainder = startFuel - fuelRequiredAC; //вычисляем остаток топлива
    refueling = fuelRequiredCB - fuelRemainder; //требуемый объем дозаправки
    freeVolume = volumeTank - fuelRemainder; //вычисляем свободный объем бака
    let messageRefueling = "Самолету долетит с дозаправкой "+refueling+" л. в пункте С.";
    freeVolume > refueling ? alert(messageRefueling) : alert(messageNo); //проверяем влезит ли дозаправка в бак
}
else alert(messageNo);
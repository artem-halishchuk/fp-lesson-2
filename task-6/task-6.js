// Линейным называют уравнение вида ax+b=0, где a и b - числовые коэффициенты,
// например 2x+4=0. Написать программу, решающую такое уравнение.
// Пользователь вводит значение коэффициентов a и b,
// выводит решение, учесть ситуации a=0 и b=0.
let equationСoefficientaA = parseFloat(prompt("Введите значение коэффициента a уравнения a*x+b=0", 0));
let equationCoefficientB = parseFloat(prompt("Введите значение коэффициента b уравнения a*x+b=0", 0));
let result = Math.round((-equationCoefficientB / equationСoefficientaA)*100)/100;
if (result) alert("Неизвестное x = "+result);
else alert("Уровнение не имеет решения.");
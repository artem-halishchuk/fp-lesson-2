//Квадратным называют уравнение вида ax^2+bx+c=0, где a,b,c - числовые коэффициенты.
//Решение данного уравнения можно найти по формуле дискриминанта
//(http://edu.glavsprav.ru/info/diskriminant/).
// Написать программу, которая решает квадратные уравнения по
// введенным пользователем коэффициентам.
let equationСoefficientaA = parseFloat(prompt("Введите значение коэффициента a уравнения ax^2+bx+c=0", 0));
let equationCoefficientB = parseFloat(prompt("Введите значение коэффициента b уравнения ax^2+bx+c=0", 0));
let equationCoefficientC = parseFloat(prompt("Введите значение коэффициента c уравнения ax^2+bx+c=0", 0));

let discriminant = Math.pow(equationCoefficientB, 2)-4*equationСoefficientaA*equationCoefficientC;
let resultX1 = (-equationCoefficientB-Math.pow(discriminant, 0.5))/(2*equationСoefficientaA);
let resultX2 = (-equationCoefficientB+Math.pow(discriminant, 0.5))/(2*equationСoefficientaA);

resultX1print = Math.round(resultX1*100)/100;
resultX2print = Math.round(resultX2*100)/100;
if (resultX1 && resultX2) alert("Неизвестное x1 = "+resultX1print+" ,\n"+
                                "неизвестное x2 = "+resultX2print);
else alert("Уровнение не имеет решения.");
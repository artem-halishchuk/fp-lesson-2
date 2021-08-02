// Задача 5. Проверка даты
// Написать приложение, которое позволяет проверить дату 
// введенную пользователем. Учесть, что в году 12 месяцев, 
// в январе - 31 день, в феврале 28 дней для не високосного 
// года и 29 дней для високосного года и т.д.

// Год високосный, если он делится на четыре без остатка, 
// но если он делится на 100 без остатка, это не високосный год. 
// Однако, если он делится без остатка на 400, это високосный год. 
// Таким образом, 2000 г. является особым високосным годом, 
// который бывает лишь раз в 400 лет.
let checkDate;
let yearEntered = parseInt(prompt("Введите год", new Date().getFullYear()));
let monthEntered = parseInt(prompt("Введите месяц в числовом форме", new Date().getMonth() + 1));
let dayEntered = parseInt(prompt("Введите день месяца", new Date().getDay() + 1));

let yearDevide4 = (yearEntered % 4 < 1 ? true : false) && (yearEntered < 4 ? false : true);
let yearDevide400 = (yearEntered % 400 < 1 ? true : false);
let yearNoDevide100 = (yearEntered % 100 != 0 ? true : false);
let yearLeap =  (yearDevide4 || yearDevide400) && (yearNoDevide100 || yearDevide400);

let monthDayMax;
if (monthEntered == 4 ||
    monthEntered == 6 ||
    monthEntered == 9 ||
    monthEntered == 11) monthDayMax = 30;
else if (monthEntered == 2 && yearLeap) monthDayMax = 29;
else if (monthEntered == 2 && !yearLeap) monthDayMax = 28;
else monthDayMax = 31;

let printDateZeroDay = dayEntered < 10 ? "0" : "";
let printDateZeroMonth = monthEntered < 10 ? "0" : "";
if (yearEntered < 1 ||
    (monthEntered < 1 || monthEntered > 12) ||
    (dayEntered < 1 || dayEntered > monthDayMax))  {
    checkDate = printDateZeroDay+dayEntered+"."+printDateZeroMonth+monthEntered+"."+yearEntered+" такой даты не существует.";
}
else checkDate = printDateZeroDay+dayEntered+"."+printDateZeroMonth+monthEntered +"."+yearEntered+" такая дата существует.";
alert(checkDate);
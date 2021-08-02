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

let yearLeapEntered = parseInt(prompt("Введите год", 2021));
let yearLeap4Repeat = (yearLeapEntered % 4 < 1 ? true : false) && (yearLeapEntered < 4 ? false : true);
let yearLeap400Repeat = (yearLeapEntered % 400 < 1 ? true : false);
let yearLeap100Repeat = (yearLeapEntered % 100 < 1 ? false : true);


let yearLeap =  (yearLeap4Repeat && yearLeap100Repeat) || !(yearLeap400Repeat && yearLeap100Repeat);

alert(yearLeap4Repeat);
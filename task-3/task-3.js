// Задача 3. Максимальное из введенных чисел
// Пользователь вводит с клавиатуры 5 целых чисел. Напишите программу, которая
// определяет максимальное из этих 5 чисел (Подсказка – решение должно быть простым).
let temp;
let enteredValue = parseFloat(prompt("Введитее первое число", 0));
temp = temp > enteredValue ? temp : enteredValue;
enteredValue = parseFloat(prompt("Введитее второе число", 0));
temp = temp > enteredValue ? temp : enteredValue;
enteredValue = parseFloat(prompt("Введитее третье число", 0));
temp = temp > enteredValue ? temp : enteredValue;
enteredValue = parseFloat(prompt("Введитее четвертое число", 0));
temp = temp > enteredValue ? temp : enteredValue;
enteredValue = parseFloat(prompt("Введитее пятое число", 0));
temp = temp > enteredValue ? temp : enteredValue;
alert("Максимальное из 5-ти введеных чисел " + temp);
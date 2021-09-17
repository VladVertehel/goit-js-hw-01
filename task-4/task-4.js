let credits = 23580;
const pricePerDroid = 3000;
let number = prompt('Введіть скільки дроїдів ви бажаєте придбати.');
let totalPrice;

if(number === null){
    console.log('Скасовано користувачем!');
} else if(number < 0){
    console.log("Кількість дроїдів не може бути від'ємною!");
    totalPrice = null;
} else if(isNaN(number)){
    console.log('Запишіть кількість числом!');
    totalPrice = null;
} else{
    totalPrice = number * pricePerDroid;
    console.log(totalPrice);
}

if(totalPrice > credits){
    console.log('Недостатньо коштів на рахунку!');
} else{
    credits = credits - totalPrice;
    console.log('Ви купили ' + number + ' дроїдів, на рахунку залишилося ' + credits + ' кредитів.')
}
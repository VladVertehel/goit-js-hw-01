const ADMIN_PASSWORD = 'are you a hacker?'
let message = prompt('Введіть пароль.');

if(message === null){
    message = 'Скасовано користувачем!';
    console.log(message);
} else if(message === ADMIN_PASSWORD){
    message = 'Ласкаво просимо!';
    console.log(message);
} else{
    message = 'Доступ заборонений, невірний пароль!';
    console.log(message);
}

alert(message);
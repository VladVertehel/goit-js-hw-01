let country = prompt('Введіть вашу країну');
country = country[0].toUpperCase() + country.slice(1).toLowerCase();
let price;

switch(country){
    case 'Китай':
        price = 100;
        console.log('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        alert('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        break;

    case 'Чилі':
        price = 250;
        console.log('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        alert('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        break;

    case 'Австралія':
        price = 170;
        console.log('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        alert('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        break;

    case 'Індія':
        price = 80;
        console.log('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        alert('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        break;

    case 'Ямайка':
        price = 120;
        console.log('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        alert('Доставка в ' + country + ' буде коштувати ' + price + ' кредитів.');
        break;

    default:
        console.log('У вашій країні доставка недоступна.');
        alert('У вашій країні доставка недоступна.');     
        break;
}
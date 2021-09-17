let total = 0;
let input;

// while user don't press cancel do this loop
while(input !== null){
    // input text from keyboard
    input = prompt('Введіть ваше число.');
    // check if user press cancel
    if(input === null){
        break;
    }
    // check if user entered anything but not numbers
    if(isNaN(Number.parseFloat(input))){
        alert('Було написано не число, спробуйте ще раз');
        // resets adding (not necessarily)
        total = 0;
        // skip adding and start 'while' loop again
        continue;
    }
    // adding to total sum
    total = total + Number.parseFloat(input);
}
alert(total);






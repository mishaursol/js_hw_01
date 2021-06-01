let total = 0;

while (true) {
    let input = prompt("Please enter the number");
    if (input === null)  {
        alert(`Общая сумма чисел равна ${total}`);
        break
    } else {
        input = Number(input);  12
        if (isNaN(input)) {
            alert("Было введено не число, попробуйте еще раз");
        } else {
            total += input;
        }
    }
}


console.log(total);
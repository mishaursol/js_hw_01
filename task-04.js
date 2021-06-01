const credits = 35500;
const pricePerDroid = 3000;
let remaider = 0;
let totalprice = 0;

let howMuch = prompt('сколько хотите приобрести дроидов?');
if (howMuch === null) {
    alert('Отменено пользователем!');
}
else if ((howMuch*pricePerDroid)>credits) {
    alert('Недостаточно средств на счету!');
}
else if ((howMuch*pricePerDroid)<credits)
{
    remaider = credits - (howMuch * pricePerDroid);
    alert (`Вы купили ${howMuch} дроидов, на счету осталось ${remaider} кредитов.`);
    
}


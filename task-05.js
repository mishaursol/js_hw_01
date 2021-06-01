const China = 150;
const Chili = 250;
const Australia = 165;
const India = 90;
const Jamaica = 130;

let question = prompt('В какую страну вам доставить?').toLowerCase();

switch(question){
    case 'китай': alert('Доставка в ${question} будет стоить ${150} кредитов'); break;
    case 'чили': alert('Доставка в ${question} будет стоить ${250} кредитов'); break;
    case 'австралия': alert('Доставка в ${question} будет стоить ${165} кредитов'); break;
    case 'индия': alert('Доставка в ${question} будет стоить ${90} кредитов'); break;
    case 'ямайка': alert('Доставка в ${question} будет стоить ${130} кредитов'); break;
    default: alert('В вашей стране доставка не доступна');
}
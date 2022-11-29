let radius = prompt("Впишите радиус круга", "");
let circleArea =  Math.PI * Math.pow(radius, 2);
alert(`Площадь круга: ${circleArea}`);

let distance = prompt("Укажите растояние, которое вы собираетесь пройти", "");
let time = prompt("За которое время вы хотите пройти это растояние?", "");
let speed = distance / time;
alert(`Скорость с которой вы должны идти ${speed} километров в час`);


let usd = prompt("Сколько доллоров у вас в наличии?", "");
const eur = 0.97;
let userMoney = usd * eur;
alert(`${userMoney} евро у вас в наличии`);

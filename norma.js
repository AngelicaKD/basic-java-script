let userName = prompt("Как вас зовут?", "");
let yearOfBirth = prompt("В каком году вы родились?", "");
const yearNow = 2022;
let userAge = yearNow - yearOfBirth;
alert(`${userName}, вам ${userAge} лет`);

let squareSide = prompt("Впишите длинну стороны квадрата", "");
let perimeter = 4 * squareSide;
alert(`Периметр квадрата:${perimeter}`);
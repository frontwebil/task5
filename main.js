//1

let hours = +prompt('Введіть скільки годин ви хочете перевести в секунди: ');

console.log(typeof hours);

function hoursToSec(hours) {
  let sec = hours * 60 * 60;
  if (isNaN(sec)) {
    alert("Введіть числове значення");
  }
  else {
    alert(sec);
    console.log(hours , "години в секундах:",sec);

  }
};

hoursToSec(hours);

// 2

let num = +prompt('Введіть ваше число: ');


function nextNum(num) {
  let nextNum = num + 1;
  if (isNaN(nextNum)) {
    alert("Введіть числове значення");
  }
  else {
    alert(nextNum);
    console.log(nextNum);

  }
};

nextNum(num);

// 3
function S(a, b, c) {
  let plosha = (a * b * c) / 2;
  alert("Площа трикутника: "+ plosha);
  console.log("Площа трикутника: "+ plosha);
};

S(4, 7, 3);


//4 можливо міг не так зрозуміти завдання
let endMatch = ["Нічия","Перемога України","Поразка України"];

function endMatchText (endMatch) {
  alert(endMatch[0]);
  alert(endMatch[1]);
  alert(endMatch[2]);
}

endMatchText(endMatch);





//5

let stroka = prompt("Перевірка чи є слово палідромом?")

function palidrome(stroka) {
  let reservStr = stroka.split('').reverse().join('');
  stroka = stroka.toLowerCase();
  reservStr = reservStr.toLowerCase();
  if (stroka === reservStr) {
    alert("так це слово палідром")
  }
  else {
    alert("Ні це слово не палідром")
  }
};

palidrome(stroka);



//6

let str = prompt("Введіть строку щоб її перевернути");
function reversed(str) {

  alert("Ваша перевернута строка:" + str.split('').reverse().join('').toLowerCase());

}

reversed(str);


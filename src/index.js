import "./main.scss";

// // №1

// let line

// for (line = '#'; line.length < 8; line += '#') {
//     console.log(line)
// }




// // №2

// let board = "";
// let i;
// let a;
// for(i = 0; i < 8; i++){
//  for(a = 0; a < 8; a++){
//   board += (a % 2) == (i % 2) ? " " : "#";
//  }
//  board += "\n";
// }
// console.log(board);





// // №3

// let number;

// do {
//     number = prompt("Введите число больше чем 100?", '0');

// } while (number <= 100 && number);



// // №4


// let yourSurname
// let yourName
// let yourPatronymic
// let yourAge
// let yourGender
// let pension

// do {
//     yourSurname = prompt("Ваша фамилия", '');

// } while (yourSurname === '' || yourSurname === null);


// do {
//     yourName = prompt('Ваше имя', '');

// } while (yourName === '' || yourName === null);


// do {
//     yourPatronymic = prompt('Ваше отчество');

// } while (yourPatronymic === '' || yourPatronymic === null);


// do {
//     yourAge = prompt('Ваш возраст', '');

// } while (yourAge === '' || yourAge === null || yourAge > 100 || yourAge < 18);


// do {
//     yourGender = confirm('Ваш пол-мужской?');

// } while (yourGender === '' || yourGender === null);




// if (yourGender == true) {
//     yourGender = ('мужской');

// } else {
//     yourGender = ('женский');
// }


// if (yourAge > 63) {
//     pension = ('Вы на пенсии')

// } else {
//     pension = ('Придется поработать)))')
// }

// let yourAgeDay = yourAge * 365
// let afterFiveYears = Number(yourAge) + Number(5)

// alert(`
// Ваше фио: ${yourSurname} ${yourName} ${yourPatronymic}
// Ваш возраст в годах: ${yourAge}
// Ваш возраст в днях: ${yourAgeDay}
// Через 5 лет вам будет: ${afterFiveYears}
// Ваш пол: ${yourGender}
// Вы на пенсии:  ${pension}`);



// import "./main.scss";

// const add123 = (a, b) => a + b;

// const res = add123(222, 3);
// console.log("Helloasda");



// 1. Клонирование массива Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
    let result;
    result = arr.slice(0, 4);
    return result;
}

console.log(arrayClone(vegetables));

// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let string = vegetables.join(', ');                
let string2 = vegetables.toString();           

console.log(string);
console.log(string2);

// 3. Двоеточие между нечётными числами
// Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

const num = prompt('Введите число', 55);

function colonOdd(num) {

     let result =num.split('')
    .map((item, index, array) => array[index] % 2 ==1  && array[index +1] % 2 ==1 ? item +':' : item)
    .join('')

    return result
}

console.log(colonOdd(num));


// 4. Замена регистра символов
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].

const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

function changeRegister(str) {

    let result = '';
    for (let letter of str) {
        result += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
    }
    return result.split();

}


console.log(changeRegister(str));


// 5. Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

let arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
];
function removeDuplicates(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        } else {

        }

    }
    return result
}
console.log(removeDuplicates(arr))


// 6. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];


function sum(a, b) {
    let result = [];
    let length;

    if (arr1.length >= arr2.length) {
        length = arr1.length;
    } else {
        length = arr2.length;
    }
    for (var i = 0; i < length; i++) {
        a = arr1[i] === undefined ? 0 : arr1[i];
        b = arr2[i] === undefined ? 0 : arr2[i];
        result.push(a + b);
    }
    return result
}
console.log(sum(arr1, arr2))

// 7. Количество повторяющихся элементов в массиве
// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.





// 8.Сортировка массива по убыванию
// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function compareNumbers(arr) {

    arr.sort((a, b) => a - b);
    console.log(arr);
}

compareNumbers(numbers)


// 9.Сортировка массива объектов
// Напишите код, который отсортирует массив объектов litmir по значению свойства title.

let litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];

let titles = litmir
    .map(item => item.title)
    .join(' ')

console.log(titles);


//10. Найти все значения данного свойства в массиве объектов
// Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.


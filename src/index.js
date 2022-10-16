// import "./main.scss";

// const add123 = (a, b) => a + b;

// const res = add123(222, 3);
// console.log("Helloasda");





// №1


class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); 
console.log(worker.surname);
console.log(worker.rate); 
console.log(worker.days); 
console.log(worker.getSalary());


// №2


class MyString {
    constructor(word) {
        this.word = word;
    }
    reverse() {
        return this.word.split('')
            .reverse()
            .join('');
    }
    ucFirst() {
        return this.word.charAt(0)
            .toUpperCase() + this.word.slice(1, Infinity)
    }
    ucWords() {
        let result
        result = this.word.split(' ')
            // .forEach((item) => item.charAt(0).toUpperCase() + item.slice(1, Infinity))
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1, Infinity))
            .join(' ')
        return result
    }
}

var str = new MyString('abcde abcde abcde');

console.log(str.reverse());
console.log(str.ucFirst());
console.log(str.ucWords());
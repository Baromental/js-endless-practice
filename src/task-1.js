// const numbers = [1, 2, 3, 4, 5];
// function calculateSum(numbers){
//     let sum = 0;
//     for (const key of numbers) {
//         sum += key;
//     }
//     console.log(sum);
    
//     return sum;
// }

// calculateSum(numbers)

// function isEven(num){
//     return num % 2 === 0;

// }
// console.log(isEven(4));
// console.log(isEven(7));

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 19 },
];


function filterAdults(people){
    let adults = [];

    for (const person of people) {
        if (person.age >= 18) {
            adults.push(person.name);
        }
    }

    return adults;
}

console.log(filterAdults(people));


function generateRandomNumber(){
    return Math.floor(Math.random() * 101);
}
console.log(generateRandomNumber());



function startClock() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}
startClock();
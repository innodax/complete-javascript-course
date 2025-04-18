const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * 2);
const BMIJohn = massJohn / (heightJohn * 2);

const markHigherBMI = BMIMark > BMIJohn;

let solution;

if (BMIMark > BMIJohn) {
  solution = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
} else {
  solution = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
}
console.log(solution);
console.log(BMIMark, " ", BMIJohn, " ", markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2024;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);

console.log(`Multiple
  lines
  string`);

const age = 23;
age >= 18 ? console.log("is adult") : console.log("is not an adult");

const adulthood = age >= 18 ? "adult" : "child";
console.log(`I am ${adulthood}`);
console.log(`I am ${age >= 18 ? "adult" : "child"}`);

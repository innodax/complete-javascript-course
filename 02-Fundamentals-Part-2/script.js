"use strict";

function logger() {
  console.log("My name");
}

logger();

function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const calcAge3 = (birthYear) => 2025 - birthYear;

const age1 = calcAge1(1991);
const age2 = calcAge2(1991);
const age3 = calcAge3(1991);

console.log(`${age1} ${age2} ${age3}`);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  }

  return -1;
};

console.log(yearsUntilRetirement(1991));
console.log(yearsUntilRetirement(1950));

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(85, 54, 41);

function checkWinner(scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= scoreKoalas * 2) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (scoreKoalas >= scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

const years = [2000, 2001, 2002];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

years.push(2003);
const newLength = ages.push(calcAge(years[3]));
years.unshift(1999);
ages.unshift(calcAge(years[0]));

console.log(years);
console.log(newLength, ages);

years.pop();
console.log(years);

years.shift();
console.log(years);

console.log(years.indexOf(2001), years.includes(2001));

// function calcTip(billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   }

//   return billValue * 0.2;
// }

// const bills = [125, 255, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(totals);

const jonas = {
  firstName: "Jonas",
  lastName: "Sch",
  age: 2024 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas, jonas.lastName, jonas["lastName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey], jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know? firstName, lastName, age, job, friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonas";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const jonas2 = {
  firstName: "Jonas",
  birthYear: 1991,
  calcAge1: function (birthYear) {
    return 2025 - birthYear;
  },

  calcAge2: function () {
    return 2025 - this.birthYear;
  },

  calcAge3: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.age} old, born in ${this.birthYear}`;
  },
};

console.log(jonas2.calcAge3(), jonas2["calcAge2"]());
console.log(jonas2.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName} and ${mark.fullName} both have the same BMI of ${john.bmi}`
  );
}

const numberArray = [];
for (let i = 0; i < 5; i++) {
  numberArray.push(i);
}
console.log(numberArray);

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 1) {
  console.log(`Dice roll: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(totals);
console.log(calcAverage(totals));

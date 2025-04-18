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

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

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

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  }

  return billValue * 0.2;
}

const bills = [125, 255, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals);

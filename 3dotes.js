const business = 650;
const Minister = 403;
const Shochib = 400;
const Takapoysa = [583, 893, 235, 630,];
// const maximum = Math.max(...Takapoysa);
const maximum = Math.max(business, Minister, Shochib);
// console.log(maximum);


const age = [12, 13, 14, 15,]
const age2 = [12, 11, 15, 10,]
const age3 = [16, 19, 14, 17,]
// const allAges = age.concat(age2).concat([5]).concat(age3);

const allAges2 = [...age, ...age2, 5, ...age3];
console.log(allAges2);
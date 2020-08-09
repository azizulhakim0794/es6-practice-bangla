// const multiline = `I love my Country very much
// you fool 
// you are a ganja chore 
// ganja cha`
// console.log(multiline);
 
const firstName = "Azizul Hakim"
const lastName = "Tumzid"
// const fullName = firstName + " " + lastName;
// console.log(fullName);
// const fullName2 = `${firstName} ${lastName} is a good boy noMore today`
// console.log(fullName2);

//arrow function//
const single = num => num * 2;
//console.log(single(2));


// const add = (x, y) => x + y;
// console.log(add(40, 50));

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum *  diff
    return result;
}
const result3 = doMath(7, 6);
console.log(result3);
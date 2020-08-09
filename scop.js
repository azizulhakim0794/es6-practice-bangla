// const output = (3, 7, 6);
// console.log(output)


function add(){
    let count = 0;
    return function (){
        count++
        return count;
    }
} 
const clock1 = add();
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = add();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
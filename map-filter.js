const number = [2, 3, 4, 5, 6, 7, 8, 9]
// const output = []  
// for (let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
    
// }
// console.log(output);

// another way to write


//another way to write function//

// const square = element => element * element
// // const square = x => x * x

// // const square = function(element){
// //      return element * element
// // }
// const result = number.map(square)
// console.log(result);


const bigger = number.filter(x => x > 5);
console.log(bigger);
const isThere = number.find(x => x>6);
console.log(isThere);
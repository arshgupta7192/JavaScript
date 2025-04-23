// 2 video.

// const generateHash = (str) => {
//     if (str.length>280  || str.trim().length === 0 )              //trim used for removing whitespaces
//         return false;
        
//         str = str.split(" ");
//         str = str.map((curElem) => 
//             curElem.replace(curElem[0], curElem[0].toUpperCase())
//         );
//         str = `#${str.join("")}`;
//         // console.log(str) 
        
//         return str;
// };

// console.log(generateHash("my name is arsh gupta"));


//3 video
// let countchar = (word,char) => {

//     word = word.toLowerCase();
//     char = char.toLowerCase();

//     toatlcount = word.split("").reduce((a,b) => {
//         if (b === char){
//             a++;
//         }
//         return a;
//     },0);
//     return toatlcount;
//     // console.log(toatlcount);
    
// }
// console.log(countchar("Mississippi" , "p"));





// Maximum number from an Array

// function maximum(){
//     let array = [200,5,6,780,9];
//     let max = array[0];
//     for(i=0; i<array.length; i++){
//         if(array[i]>max){
//             max = array[i]
//         }
//     }
//     console.log("maximum elenment is: ", max);
// }
// maximum();

// ----------------video 7-------------

// let findmax = (arr) => {
//     console.log(...arr);
//     return Math.max(...arr);
// }
// console.log(findmax([1,3,5,7,8]));


// -----------Video8 factorial----------

// let factorial = (num)=>{
//     let fact = 1;
//     for(let i=1; i<=num; i++){
//         // console.log(i);
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(factorial(2));
// console.log(factorial(5));



// -----------------Video9 Average------------

// let avg = (arr)=>{
//     let total = arr.reduce((accum, curElem) => accum + curElem, 0)
//     console.log(total);
//     return total / arr.length
// }

// console.log(avg([2,4,6,8]));




// -----------VIDEO-10---------------

// let arraysAreEqual = (arr1, arr2) => {
    
//     if (arr1.length !== arr2.length) 
//         return false;

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false; 
//       }
//     }
//     return true;
//   };

//   console.log(arraysAreEqual([1,2,3],[1,2,3]));


// -------------VIDEO-11----------------

// const sumOfDigits = (num) => {
//     let sum = 0;
//     num = String(num)
//     // console.log(num);
//     for (let i = 0; i < num.length; i++) {
//         sum += Number(num[i])
//     }
//     return sum
// };

// console.log(sumOfDigits(123))
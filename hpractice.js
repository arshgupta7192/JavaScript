// let array = [8,1,5,2,4,6,3,7];
// let temp;

// for (let i=0; i<array.length; i++){
//     for (let j=i ; j<array.length; j++){
//         // console.log(array[i])
//         if(array[i]>array[j]){
//             temp = array[i];
//             array[i]= array[j];    
//             array[j]=temp;
//         }
//     }
// }

// console.log(array);








// generateHash = (str) =>{
//     if (str.length > 280 || str.trim().length === 0 )
//         return false;

//     str = str.split(" ");
//     str = str.map((curElem) =>
//         curElem.replace(curElem[0], curElem[0].toUpperCase())
//     );
    
//     str = `#${str.join("")}`;

//     // console.log(str);
//     return str;
// }

// console.log(generateHash("my name is arsh"));


// let countchar = (word, char) => {

//     word = word.toLowerCase();
//     char = char.toLowerCase();

//     totalcount = word.split("").reduce((a,b) => {
//         if ( b === char){
//             a++;
//         }
//         return a;
//     },0);
//     return totalcount;

//     // console.log(totalcount)
// }


// console.log(countchar("Mississippi", "I"));





// const countchar = (word, char) => {
    
//     word = word.toLowerCase();
//     char = char.toLowerCase();
    
//     totalcount = word.split("").reduce(function (a,b){
//         if( b === char){
//             a++;
//         } 
//         return a;
//     });
    
//     return totalcount;
//     // console.log(totalcount);
// }
// console.log(countchar("Mississippi", "I"));

    




// // even no.

// let int = [1,2,3,4];
// let even = int.filter( function(item){
//     return item % 2 === 0;
// })

// console.log(even);





// const countchar = (word, char) => {
    
//     word = word.toLowerCase();
//     char = char.toLowerCase();
    
//     totalcount = word.split("").reduce((a,b) => {
//         if (b === char){
//             a++;
//         }
//         return a;
//     },0);
    
//     return totalcount;
//     // console.log(totalcount);
// }
// console.log(countchar("Mississippi", "I"));



// let countchar = (word, char) =>{
    
//     word = word.toLowerCase();
//     char = char.toLowerCase();

//     totalcount = word.split("").reduce((a,b)=> {
//         if(b === char){
//             a++;                 
//         }
//         return a;
//     },0);
//     return totalcount;
// }
// console.log(countchar("Mississippi", "m"));

// function LongestWord (a) {
//     let words = a.split(" ");
//     let LongestWord = '';

//     for(let word of words)
//     {
//         if (word.length > LongestWord.length){
//             LongestWord = word;
//         }
//     }
//     return LongestWord;
// }
// // console.log(LongestWord);

// console.log(LongestWord("this is the whole day messed up"))

// let arr = [67,6,3,7,8,56];
// for(i=0; i<arr.length; i++){
//     for(j=i; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);


// var string = "dad";

// var len = string.length;
// // console.log(len)
// var msg = 'this is a palindrome'; 

// for (var i = 0; i<len/2; i++){
//     if (string[i] != string[len-1-i]){
//         msg = 'this is not a palindrome'
//     }
// }

// console.log(msg);


// function capitalLetter(str) {
//     let words = str.split(" ").map(word => {
//         let firstLetter = word.slice(0,1);
//         let rest = word.slice(1);
//         firstLetter = firstLetter.toUpperCase();
//         return `${firstLetter}${rest}`;
//         // return word.charAt(0).toUpperCase() + word.slice(1);
//     })

//     return words.join(" ");
// }

// console.log(capitalLetter("i woke up early today"))

// function capLetter(str){
//     let word = str.split(" ").map(words => {
//         let first = words.slice(0,1);
//         let rest = words.slice(1);
//         first = first.toUpperCase();
//         return `${first}${rest}`;
//     });

//     return word.join(" ");
// }

// console.log(capLetter("i am happy"))


// function unique(str) {
//     for(i=0; i<str.length; i++){
//         if(str.lastIndexOf(str[i]) != i){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(unique("abcdesfd"));


// let Equal = (arr1, arr2) =>{
//     if(arr1.length !== arr2.length)
//         return false;
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(Equal([1,2,3],[1,2,3]));

let sumof = (num) => {
    let sum = 0;
    num = String(num)
    for(i = 0; i<num.length; i++){
        sum += Number(num[i]);
    }
    return sum;
}
console.log(sumof(123));
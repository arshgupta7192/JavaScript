// function LongestWord(str) {
//     let words=str.split(" ");
//     // console.log(words);
//     let LongestWord = '';                            //empty string banaane k liye.

//         for(let word of words) {
//             if (word.length > LongestWord.length) {
//                 LongestWord = word;
//             }
//         }


//     return LongestWord;
// }


// console.log(LongestWord("Today is a very cold day"));
// console.log(LongestWord("Your son is very good"));




// #2 [SORTING OF ARRAY]

// let array = [8,3,2,4,1,5,7,6];
// let temp;
// for (i=0; i<array.length; i++){
//     for (j=i; j<array.length; j++){
//         if (array[i]>array[j]){
//             temp = array[i];
//             array[i]= array[j];
//             array[j]= temp;
//         }
//     }
// }

// console.log(array)


// #2VIDEO
// let arith = new Set();
// let geo = new Set();


// function mathsequence (arr){
//     for(let i = 1; i<arr.length; i++){
//         let no1 = arr[i] - arr[i-1];
//         arith.add(no1);
//         let no2 = arr[i] / arr[i-1];
//         geo.add(no2);
//     }
//     console.log(arith);
//     console.log(geo);
// }
// console.log(mathsequence([2,4,6,8]));

// console.log(mathsequence([5,10,20]));



// video 4

// function capitilizeWords(str) {
//     let words = str.split(" ").map(word => {
//         // let firstLetter = word.slice(0,1);
//         // let rest = word.slice(1);
//         // firstLetter = firstLetter.toUpperCase();
//         // // console.log(firstLetter, rest)
//         // return `${firstLetter}${rest}`;
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     })

//     // console.log(words)
//     return words.join(" ");
// }

// console.log(capitilizeWords("i am a good boy"))

// video 5

function unique(str){
    for(i = 0; i<str.length; i++){
        if(str.lastIndexOf(str[i]) !== i){
            return false;
        // console.log(str.lastIndexOf(str[i]))
    }
    return true;
}
}
console.log(unique("abcde"));
console.log(unique("abacdeb"));
// for(let i=1; i<=5; i++){

//     for(let j=1; j<=i; j++){
//         let str="*";
//         console.log(str);
//     }
//     console.log("<br/>");
// }

let rows = 5;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let j = 1; j <= n; j++) {
      pattern += "*";
   }

   pattern += "\n";
}
console.log(pattern);
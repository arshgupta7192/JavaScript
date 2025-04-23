//reversing Number
function reverseNum(num){

let reverseNum = 0;
while(num!=0){
    reverseNum = reverseNum * 10 + (num % 10);
    num = Math.floor(num/10);
}
return reverseNum;
}

// console.log(reverseNum(123));

console.log(reverseNum(12345));
// console.log(reverseNum(1));


function reverseNum(num){
    let reverseNum=0;
    while(num!=0){
        reverseNum = reverseNum *10 + (num%10);
        num = Math.floor(num/10);
    }    
    return reverseNum;

}

console.log(reverseNum(3456))
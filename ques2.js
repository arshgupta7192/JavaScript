// palindrome

var string = "dad";

var len = string.length;
// console.log(len)
var msg = 'this is a palindrome'; 

for (var i = 0; i<len/2; i++){
    if (string[i] != string[len-1-i]){
        msg = 'this is not a palindrome'
    }
}

console.log(msg);



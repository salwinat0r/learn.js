// given a string, check whether its a palindrome or not
// racecar, Anna, kayak
// since we know how to reverse a string, this is ez

function palindrome(string){
    var x = string.split("").reverse().join("");
    if (x == string){
        return true
    }
    else{
        return false
    }
}

console.log(palindrome("Jade"));
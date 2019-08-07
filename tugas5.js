function palindrome(kata) {
    var reverseWord = "";
    for(var i = (kata.length-1); i >=0; i--) {
        reverseWord += kata[i];
    }
    if(kata == reverseWord){
        return true;
    }
    else {
         return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
function isPalindromo(word) {
    if (word === word.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindromo("anna")); // Output atteso: true
console.log(isPalindromo("javascript")); // Output atteso: false

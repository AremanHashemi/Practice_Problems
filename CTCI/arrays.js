// Is unique
/*
use hashtable
    Itterate over characeters add to map
    if character is in map then we fail
    else add character to map 

Sort method
    sort characters
    if neighbors are equal return false
*/
const isUnique = function (str) {
    if (str.length > 128) {
        return false;
    }
    const charArray = new Array (128).fill(false);
    for (let char of str) {
        const asciiValue = char.charCodeAt(0);
        if (charArray[asciiValue] === true) {
            return false;
        }
        charArray[asciiValue] = true;
    }
    return true;
}

console.log(isUnique("abcz!@~"));

function isGreaterThanOrEqualToZero(num) {
    if(num > -1) {
        return true
    }else {
        return false
    }

}

console.log(isGreaterThanOrEqualToZero(-7)) // false
console.log(isGreaterThanOrEqualToZero(8)) // true
console.log(isGreaterThanOrEqualToZero(9)) // true
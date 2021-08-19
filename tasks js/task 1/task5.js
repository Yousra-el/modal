// create a function that takes voltages and current and returns
// the calculated power

function circuitPower(vlt, cur){
    return vlt * cur ;
}


console.log(circuitPower(330, 10)) // 3300
console.log(circuitPower(100, 3)) // 300
console.log(circuitPower(400, 20)) // 8000
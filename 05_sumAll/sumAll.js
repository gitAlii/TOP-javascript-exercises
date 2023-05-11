const sumAll = function(num1, num2) {
    let finalSum = 0 
    // checks if num is negative, or num is not a number
    if (num1 < 0 || num2 < 0 ||  typeof num1 !== "number" ||  typeof num2 !== "number" ) {
      console.log(num1)
        return "ERROR"
    }
    else if (num2 > num1) {
        for (let i = num1 + 1; i < num2 ; i++){
            finalSum += i
        }

        return finalSum + num1  + num2
    }
    else if( num1 > num2) {
        for (let i = num2 + 1; i < num1 ; i++){
            finalSum += i
        }

        return finalSum + num1  + num2
    }

};

// Do not edit below this line
module.exports = sumAll;

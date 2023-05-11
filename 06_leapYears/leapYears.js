const leapYears = function(num) {
    
    if(num % 100 === 0 && num % 400 === 0) {
        return true
    }
    else if (num % 100 === 0) {
        return false
    }
    else if (num % 4 === 0) {
        return true
    } 
    else {
        return false
    }
};

// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); Ideal code, here it is in 1 line. year % 100 !== 0 means 'year/100 gives a remainder 0 then false boolean'

// Do not edit below this line
module.exports = leapYears;

const repeatString = function(word, num) {
    let wordFinale = ''
    if (num < 0) {
        return 'ERROR';
    } else { 

        for (let i = 0; i < num; i++) {
           wordFinale = wordFinale +  word
        }
        return wordFinale
    }

};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(word) {
    let splitWord = word.split("");
    let reverseSplitWord = splitWord.reverse('');
    let finalWord = reverseSplitWord.join('');
    return finalWord
};

// Do not edit below this line
module.exports = reverseString;


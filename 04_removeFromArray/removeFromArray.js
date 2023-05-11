const removeFromArray = function(list, ...theArgs ) {    
    return list.filter(x => !theArgs.includes(x));    
};





// Do not edit below this line
module.exports = removeFromArray;

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesOfThreeAndFive(cap) {
    var sum = 0;
    var fiveMultiple;
    var threeMultiple;
    
    for (var i = 1; i < cap / 3; ++i) {
        threeMultiple = i * 3;
        fiveMultiple = i * 5;
        if (fiveMultiple < cap && fiveMultiple % 3 > 0) {
            sum += fiveMultiple;
        }
        sum += threeMultiple;
    }
    return sum;
}

var cap = 1000;
console.log(multiplesOfThreeAndFive(cap));
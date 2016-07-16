/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

// Any integer greater than 1 is either a prime number, or can be written as
// a unique product of prime numbers (ignoring the order).

// Finds the largest Prime factor of number cap
function LargestPrimeFactorToCap(cap) {
    var temp = cap;
    var LPF = 0;            // Largest Prime Factor
    var suggestedLPF = 2;   // Suggested Largest Prime Factor
    while (suggestedLPF * suggestedLPF <= temp) {
        if (temp % suggestedLPF === 0) {
            temp = temp / suggestedLPF;
            LPF = suggestedLPF;
        } else {
            //suggestedLPF++;
            suggestedLPF = (suggestedLPF === 2) ? 3 : (suggestedLPF + 2);
        }
    }
    // If the remainder is a prime the it could be the largest prime factor
    if (temp > LPF) {
        LPF = temp;
    }
    return LPF;
}

console.log(LargestPrimeFactorToCap(600851475143));
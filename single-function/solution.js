function solution(n) {
    let numToDecimal = n / 10;

    let firstDigit = Math.floor(numToDecimal);
    let secondDigit = n % 10;

    const result = firstDigit + secondDigit;
    return result
}

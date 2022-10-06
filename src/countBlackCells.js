function solution(n, m) {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    return n + m + gcd(n, m) - 2;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test countBlackCells

// alternative solution

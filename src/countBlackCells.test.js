const solution = require('./countBlackCells.js');

test('test 1', () => {
    expect(solution(3, 4)).toBe(6);
});

test('test 2', () => {
    expect(solution(3, 3)).toBe(7);
});

test('test 3', () => {
    expect(solution(2, 5)).toBe(6);
});

test('test 4', () => {
    expect(solution(1, 1)).toBe(1);
});

test('test 5', () => {
    expect(solution(1, 2)).toBe(2);
});

test('test 6', () => {
    expect(solution(1, 3)).toBe(3);
});

test('test 7', () => {
    expect(solution(1, 239)).toBe(239);
});

test('test 8', () => {
    expect(solution(33, 44)).toBe(86);
});

test('test 9', () => {
    expect(solution(16, 8)).toBe(30);
});

test('test 10', () => {
    expect(solution(66666, 88888)).toBe(177774);
});

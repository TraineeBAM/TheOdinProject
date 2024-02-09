const analyzeArray = require('./analyzeArray')

test('analyzeArray([1, 8, 3, 4, 2, 6]) returns { average: 4, min: 1, max: 8, length: 6 }', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('analyzeArray([10, 20, 30, 40, 50]) returns { average: 30, min: 10, max: 50, length: 5 }', () => {
    expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({ average: 30, min: 10, max: 50, length: 5 });
});

test('analyzeArray([-5, 0, 5, -10]) returns { average: -2.5, min: -10, max: 5, length: 4 }', () => {
    expect(analyzeArray([-5, 0, 5, -10])).toEqual({ average: -2.5, min: -10, max: 5, length: 4 });
});

test('analyzeArray([]) returns { average: 0, min: 0, max: 0, length: 0 }', () => {
    expect(analyzeArray([])).toEqual({ average: 0, min: 0, max: 0, length: 0 });
});

test('analyzeArray([5]) returns { average: 5, min: 5, max: 5, length: 1 }', () => {
    expect(analyzeArray([5])).toEqual({ average: 5, min: 5, max: 5, length: 1 });
});

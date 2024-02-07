const capitalize = require('./capitalize');

test('sydney returns Sydney', () =>{
    expect(capitalize("sydney")).toBe("Sydney");
});

test('PERTH returns Perth', () =>{
    expect(capitalize("PERTH")).toBe("Perth");
});

test('12345 returns 12345', () =>{
    expect(capitalize("12345")).toBe("12345");
});
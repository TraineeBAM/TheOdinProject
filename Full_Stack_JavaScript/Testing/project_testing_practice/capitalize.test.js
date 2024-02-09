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

test('capitalize("hello") returns "Hello"', () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  
  test('capitalize("WORLD") returns "World"', () => {
    expect(capitalize("WORLD")).toBe("World");
  });
  
  test('capitalize("JaVaScRiPt") returns "Javascript"', () => {
    expect(capitalize("JaVaScRiPt")).toBe("Javascript");
  });
  
  test('capitalize("") returns ""', () => {
    expect(capitalize("")).toBe("");
  });
  
  test('capitalize("a") returns "A"', () => {
    expect(capitalize("a")).toBe("A");
  });
  
  test('capitalize("123") returns "123"', () => {
    expect(capitalize("123")).toBe("123");
  });
  
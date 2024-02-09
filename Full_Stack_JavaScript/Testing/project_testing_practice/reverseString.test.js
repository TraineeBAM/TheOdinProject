const reverseString = require('./reverseString')

test('sydney returns yendys', () =>{
    expect(reverseString("sydney")).toBe("yendys");
});

test('alphabet returns tebahpla', () =>{
    expect(reverseString("alphabet")).toBe("tebahpla");
});

test('123456789 returns 987654321', () =>{
    expect(reverseString("123456789")).toBe("987654321");
});

test('reverseString("hello") returns "olleh"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  
  test('reverseString("WORLD") returns "DLROW"', () => {
    expect(reverseString("WORLD")).toBe("DLROW");
  });
  
  test('reverseString("12345") returns "54321"', () => {
    expect(reverseString("12345")).toBe("54321");
  });
  
  test('reverseString("") returns ""', () => {
    expect(reverseString("")).toBe("");
  });
  
  test('reverseString("a") returns "a"', () => {
    expect(reverseString("a")).toBe("a");
  });
  
  test('reverseString("abc def") returns "fed cba"', () => {
    expect(reverseString("abc def")).toBe("fed cba");
  });
  
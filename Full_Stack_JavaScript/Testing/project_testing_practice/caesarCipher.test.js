const caesarCipher = require('./caesarCipher')

// Basic tests
test('caesarCipher("abc", 3) returns "DEF"', () => {
    expect(caesarCipher("abc", 3)).toBe("DEF");
  });
  
  test('caesarCipher("xyz", 5) returns "CDE"', () => {
    expect(caesarCipher("xyz", 5)).toBe("CDE");
  });
  
  // Tests with non-alphabetic characters
  test('caesarCipher("abc 123", 3) returns "DEF 123"', () => {
    expect(caesarCipher("abc 123", 3)).toBe("DEF 123");
  });
  
  // Tests with negative keys
  test('caesarCipher("def", -3) returns "ABC"', () => {
    expect(caesarCipher("def", -3)).toBe("ABC");
  });
  
  // Tests with a large positive key
  test('caesarCipher("abc", 100) returns "WXY"', () => {
    expect(caesarCipher("abc", 100)).toBe("WXY");
  });
  
  // Tests with a large negative key
  test('caesarCipher("abc", -100) returns "EFG"', () => {
    expect(caesarCipher("abc", -100)).toBe("EFG");
  });
  
  // Tests with mixed uppercase and lowercase letters
  test('caesarCipher("aBcD", 3) returns "DEFG"', () => {
    expect(caesarCipher("aBcD", 3)).toBe("DEFG");
  });
  
  // Tests with an empty string
  test('caesarCipher("", 5) returns ""', () => {
    expect(caesarCipher("", 5)).toBe("");
  });
  
// Tests with punctuation
test('caesarCipher("h3!!0, How are Y0u!", 12) returns "T3!!0, TAI MDQ K0G!"', () => {
    expect(caesarCipher("h3!!0, How are Y0u!", 12)).toBe("T3!!0, TAI MDQ K0G!");
})
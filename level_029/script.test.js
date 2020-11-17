const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./script");

test("Should not be null", () => {
    expect(isNotNull("Hansie22")).toBe(true);
    expect(isNotNull(null)).toBe(false);
});

test("Shoul be less than 9 characters", () => {
    expect(hasRightLength("Welkom")).toBe(true);
    expect(hasRightLength("Wilkommen!")).toBe(false);
});

test("Should include uppercase character", () => {
     expect(hasUpperCaseCharacter("RussianBrothers")).toBe(true);
     expect(hasUpperCaseCharacter("russianbrothers")).toBe(false);
     expect(hasUpperCaseCharacter("2243")).toBe(false);
 });

 test("Should include lowercase characters", () => {
    expect(hasLowerCaseCharacter("YOYOYO")).toBe(false);
    expect(hasLowerCaseCharacter("232TGPOiA")).toBe(true);
 });

 test("Should include a digit", () => {
    expect(hasDigit("abcUU")).toBe(false);
    expect(hasDigit("Hansie99")).toBe(true);
 });

 test("Should reach 3 conditions", () => {
     expect(minimumConditionsReached([true, true, true, false, false])).toBe(true);
     expect(minimumConditionsReached([true, true, false, false, false])).toBe(false);
 });

 test("Should be a valid password", () => {
    expect(verifyPassword("Fransie22")).toBe(true);
    expect(verifyPassword("Fransie")).toBe(true);
    expect(verifyPassword(null)).toBe(false);
    expect(verifyPassword("Ditiseenlangwachtwoord95")).toBe(true);
 });

 
import findNaughtyStep from "./solution";

test("findNaughtyStep should return type string", () => {
  const result = findNaughtyStep("hello", "hallo");
  return typeof result === "string";
});

test("findNaughtyStep('abcd', 'abcde') should return 'e'", () => {
  const result = findNaughtyStep("abcd", "abcde");
  expect(result).toBe("e");
});

test("findNaughtyStep('xxxx', 'xxoxx') should return 'o'", () => {
  const result = findNaughtyStep("xxxx", "xxoxx");
  expect(result).toBe("o");
});

test("findNaughtyStep('stepfor', 'stepor') should return 'f", () => {
  const result = findNaughtyStep("stepfor", "stepor");
  expect(result).toBe("f");
});

test("findNaughtyStep('iiiii', 'iiiii') should return 'f", () => {
  const result = findNaughtyStep("iiiii", "iiiii");
  expect(result).toBe("");
});

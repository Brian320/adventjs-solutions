import decode from "./solution";

test("decode should return type string", () => {
  const result = decode("hola (odnum)");
  return typeof result === "string";
});

test("hola (odnum) should return 'e'", () => {
  const result = decode("hola (odnum)");
  expect(result).toBe("hola mundo");
});

test("decode('(olleh) (dlrow)!') should return 'hello world!'", () => {
  const result = decode("(olleh) (dlrow)!");
  expect(result).toBe("hello world!");
});

test("decode('sa(u(cla)atn)s') should return 'santaclaus'", () => {
  const result = decode("sa(u(cla)atn)s");
  expect(result).toBe("santaclaus");
});

test("decode('((nta)(sa))') should return 'santa'", () => {
  const result = decode("((nta)(sa))");
  expect(result).toBe("santa");
});

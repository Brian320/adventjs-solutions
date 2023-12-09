import manufacture from "./solution";

test("manufacture should return type array", () => {
  const result = manufacture(["tren", "oso", "pelota"], "tronesa");
  return typeof result === "array";
});

test('manufacture(["tren", "oso", "pelota"], "tronesa") should return ["tren", "oso"]', () => {
  const result = manufacture(["tren", "oso", "pelota"], "tronesa");
  expect(result).toEqual(["tren", "oso"]);
});

test('manufacture(["patineta", "robot", "libro"], "nopor") should return empty array', () => {
  const result = manufacture(["patineta", "robot", "libro"], "nopor");
  expect(result).toEqual([]);
});

test('manufacture([], "letras") should return empty array', () => {
  const result = manufacture([], "letras");
  expect(result).toEqual([]);
});

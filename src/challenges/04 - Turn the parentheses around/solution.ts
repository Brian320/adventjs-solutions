function decode(message: string): string {
  let decodedMessage = message;
  const regex = /\(([^()]*)\)/g;
  const reverseValueFn = (_, value: string) =>
    value.split("").reverse().join("");

  while (decodedMessage.includes("(")) {
    decodedMessage = decodedMessage.replace(regex, reverseValueFn);
  }
  return decodedMessage;
}

export default decode;
